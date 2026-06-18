// 全站基础信息 —— 把占位内容替换成你们项目的真实信息即可。
export const site = {
  name: '暖阳',
  // 一句话定位 / 口号
  slogan: '把一束光,带到山的那一边',
  description:
    '一支由大学生组成的支教队伍,用精心设计的课程,陪伴乡村孩子看见更大的世界。',
  org: '暖阳志愿服务队',
  year: 2026,
  email: 'orient0154@outlook.com',
};

// 关键数据(首页/报道页开场展示)
export const stats: { label: string; value: string; suffix?: string; href?: string }[] = [
  { label: '覆盖年级', value: '2', suffix: '个年级' },
  { label: '受益学生', value: '80', suffix: '名' },
  { label: '课时', value: '80', suffix: '节', href: '/timetable' },
  { label: '志愿者', value: '15', suffix: '名' },
];

// 顶部导航 —— 报道为首页
export const nav: { label: string; href: string }[] = [
  { label: '报道', href: '/' },
  { label: '课程安排', href: '/courses' },
  { label: '课表', href: '/timetable' },
  { label: '班级', href: '/classes' },
  { label: '人员', href: '/team' },
];
