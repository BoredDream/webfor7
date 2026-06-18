// 构建后处理:把 dist/**/*.html 里以 "/" 开头的绝对路径(href/src)改成
// 按页面所在目录深度计算的相对路径。
//
// 目的:让构建产物可以直接双击 / 拷到 U 盘用 file:// 打开(离线答辩演示),
// 此时绝对路径 "/files/x.zip" 会被浏览器指向磁盘根目录而失效。
// 相对路径在 file:// 和正常服务器(Astro 目录格式带尾斜杠)下都能正确解析。
//
// 规则:
// - 资源文件(末段带扩展名,如 .css/.zip/.svg/.png) → 原样拼相对前缀
// - 页面路由(末段无扩展名,如 /courses/ai) → 补 /index.html 指向真实文件
//   (file:// 下目录链接只会显示文件列表,必须指到 index.html)
// - href="/" → 指向根 index.html
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (entry.name.endsWith('.html')) yield p;
  }
}

const lastSegHasExt = (p) => {
  const seg = p.split('/').filter(Boolean).pop() ?? '';
  return seg.includes('.');
};

let changed = 0;
for await (const file of walk(DIST)) {
  const rel = relative(DIST, file);                 // 如 courses/ai/index.html
  const depth = rel.split('/').length - 1;          // index.html→0, courses/ai/index.html→2
  const prefix = depth === 0 ? './' : '../'.repeat(depth);

  let html = await readFile(file, 'utf8');
  const out = html.replace(/(\b(?:href|src)=")\/(?!\/)([^"]*)"/g, (_m, attr, path) => {
    let target;
    if (path === '') target = 'index.html';         // href="/"
    else if (lastSegHasExt(path)) target = path;    // 资源文件
    else target = path.replace(/\/$/, '') + '/index.html'; // 页面路由
    return `${attr}${prefix}${target}"`;
  });

  if (out !== html) {
    await writeFile(file, out);
    changed++;
  }
}
console.log(`[relativize] 已处理 ${changed} 个 HTML 文件,绝对路径已改为相对路径。`);
