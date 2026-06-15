# 萤火支教 · 项目展示与宣传网站

一个用 [Astro](https://astro.build) 搭建的纯静态网站,用于支教项目的 **答辩展示** 与 **长期宣传**。
免费托管、加载快、断网也能演示;新增文章只需写一个 Markdown 文件,无需改代码。

## 页面结构

| 页面 | 路径 | 说明 |
|------|------|------|
| 报道(首页) | `/` | 博客 + 文章混合,支持标签筛选 |
| 课程安排 | `/courses` | 特色课程介绍,点进去看详情 / 课件 / 科普视频 |
| 班级 | `/classes` | 按 3–6 / 6–9 / 9–12 岁分组,点班级看带班老师、课表、学生 |
| 人员 | `/team` | 全体老师 / 志愿者,点头像看个人介绍 |

## 本地开发

```bash
npm install      # 首次安装依赖
npm run dev      # 启动开发服务器(默认 http://localhost:4321)
npm run build    # 构建静态产物到 dist/
npm run preview  # 本地预览构建结果
```

> **离线答辩**:`npm run build` 后,把 `dist/` 整个文件夹拷到 U 盘,任意电脑用浏览器打开 `dist/index.html` 即可,无需联网。
> (若直接双击打开个别页面跳转异常,可在 `dist/` 目录下跑 `npx serve` 本地起一个静态服务。)

## 怎么改内容(都在 `src/data/` 里,改完保存即可)

| 想改什么 | 改这个文件 |
|----------|-----------|
| 项目名 / 口号 / 关键数据 / 导航 | `src/data/site.ts` |
| 特色课程(介绍、亮点、任课老师、课件、视频) | `src/data/courses.ts` |
| 班级(带班老师、课表、学生名单) | `src/data/classes.ts` |
| 老师 / 志愿者(介绍、任教科目) | `src/data/team.ts` |

各文件顶部都有中文注释说明字段含义。

### 新增一篇报道 / 文章

在 `src/content/blog/` 下新建一个 `.md` 文件,开头写好信息:

```markdown
---
title: "我们的第一堂科学课"
date: 2026-06-10
summary: "一句话摘要,显示在卡片上。"
tags: ["教学日记", "科学"]
author: "陈宇"
cover: "/images/blog/science.jpg"   # 可省略,省略时用渐变占位
draft: false                         # 设 true 则不发布
---

正文用 Markdown 书写……
```

保存后,文章会自动出现在首页列表与详情页,**无需改任何代码**。

### 填写学生性格 / 个性化辅导

打开 `src/data/classes.ts`,把对应学生的 `personality` 和 `tutoring` 字段填上即可
(目前留空,页面会显示"待带班老师填写")。例如:

```ts
{ name: '志远', personality: '活泼好动,爱提问', tutoring: '多给上台表达的机会' }
```

### 课件与科普视频

- 课件:把文件放到 `public/files/` 下,再在 `src/data/courses.ts` 把对应课程的
  `coursewareUrl` 改成该路径,如 `'/files/趣味科学课.pdf'`。
- 视频:把 `videoUrl` 改成视频链接(B站 / YouTube 等)。

### 图片素材

放到 `public/images/` 下,在数据里用 `/images/xxx.jpg` 引用(如老师头像、文章封面)。

## 部署(免费)

### 方式一:Vercel(推荐,最省事)

1. 把项目推到 GitHub;
2. 登录 [vercel.com](https://vercel.com) → New Project → 选择该仓库;
3. 框架自动识别为 Astro,直接 Deploy。之后每次 `git push` 自动更新。

### 方式二:GitHub Pages

1. 在 `astro.config.mjs` 设置 `site: 'https://<用户名>.github.io'`,
   若是项目页再加 `base: '/<仓库名>/'`;
2. 用 GitHub Actions 部署(Astro 官方有现成 workflow:
   <https://docs.astro.build/zh-cn/guides/deploy/github/>)。

## 技术栈

Astro 5 · TypeScript · Tailwind CSS v4 · Astro Content Collections(Markdown 文章)
