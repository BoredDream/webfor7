# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概况

暖阳项目展示网站 —— 基于 Astro 5 的纯静态站点。界面文案、注释与内容均为中文(zh-CN)。项目没有测试和 lint 配置,改动后用 `npm run build` 或开发服务器验证。

## 常用命令

```bash
npm run dev      # 开发服务器,默认 http://localhost:4321
npm run build    # 构建静态产物到 dist/
npm run preview  # 本地预览构建结果
```

构建出的 `dist/` 需要支持离线使用(拷到 U 盘做答辩演示),因此避免引入运行时网络依赖,字体优先用系统字体(global.css 已配置)。

## 架构

内容分两处存放,页面只是渲染它们的轻量模板:

1. **`src/data/*.ts`** —— 带类型的结构化数据,通过字符串 id 互相引用:
   - `site.ts`:站点名称、口号、关键数据、导航
   - `team.ts`:成员(`Member.id` → 路由 `/team/[id]`)
   - `courses.ts`:课程(`Course.id` → 路由 `/courses/[id]`),每门课有 `teacherId` 指向 team.ts
   - `classes.ts`:班级按 `ageGroupId` 分组,每个班有 `headTeacherId`(→ team.ts)和课表条目 `courseId`(→ courses.ts),学生有可选的 `personality`/`tutoring` 字段(留空时页面显示"待填写")
   - 新增或重命名 id 时,务必检查这三个文件之间的引用 —— 链接都由这些 id 拼出来,且没有任何校验。

2. **`src/content/blog/*.md`** —— Astro 内容集合(schema 在 `src/content.config.ts`:title、date、summary,可选 cover/author,tags、draft)。新增 `.md` 文件会自动出现在首页和 `/blog/[...slug]`;`draft: true` 则不发布。

动态路由(`[id].astro` 页面)在 `getStaticPaths()` 中遍历对应数据数组 —— 全部预渲染,无 SSR。

`src/layouts/BaseLayout.astro` 包裹所有页面(Nav、Footer、`ClientRouter` 视图过渡);`BlogPost.astro` 包裹 Markdown 文章。

## 样式

Tailwind CSS v4,通过 `@tailwindcss/vite` 接入 —— 没有 tailwind.config;主题 token 定义在 `src/styles/global.css` 的 `@theme` 中。全站视觉是「阳光画本」手绘贴纸风:

- **颜色 token**:`paper`(暖黄纸面底)/ `card`(卡片底)/ `ink`(墨棕,正文用 `text-ink/55~85` 的透明度分层)、强调色 `sun-*`、辅色 `grass-*`、蜡笔分类色 `csky-*`/`camber-*`/`cpink-*`/`cgrass-*`(科学/人文/艺术/素养,映射在 `src/components/categoryColors.ts`,课程卡与课表色块共用)
- **字体**:`font-display` 是楷体系统字体栈(手写感标题),正文系统无衬线;不引入外部字体(离线约束)
- **组件类**(global.css 中):`.sticker-card`(描边 + 偏移硬阴影贴纸卡,常配 `rotate-[0.5deg]` 类微旋转)、`.sticker-btn`/`.sticker-pill`/`.sticker-chip`、`.tape`(胶带贴角)、`.hl-sun/grass/sky/pink`(蜡笔高亮笔触)、`.placeholder-card`(虚线"待填写"占位)、`.paper-bg`(点阵纸面)
- **装饰**:`src/components/decor/` 下 `Doodle.astro`(sun/cloud/arrow/sparkle/flag 手绘 SVG)与 `Hills.astro`(山丘分隔)

## 共享组件约定

- 详情页返回一律用 `src/components/BackLink.astro`(站内导航深度 >1 时 `history.back()` 回到来源页,否则走 fallback;深度计数在 sessionStorage,与 ClientRouter 兼容),不要写死返回路径
- 数字滚动用 `src/components/Counter.astro`;分节标题用 `SectionTitle.astro`
- 客户端脚本统一挂 `astro:page-load`(初次加载和每次视图过渡都触发),不要用 `astro:after-swap`

## 静态资源

- 课件文件:放 `public/files/`,在 `courses.ts` 的 `coursewareUrl` 中以 `/files/...` 引用
- 图片:放 `public/images/`,以 `/images/...` 引用(头像、文章封面)
