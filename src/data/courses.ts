// 特色课程 —— 用于"课程安排"页,以及班级课表里被引用(点课表 → 课程详情)。
// id 用于跳转 /courses/[id];teacherId 关联到 src/data/team.ts 里的任课老师。
export type Course = {
  id: string;
  title: string;
  emoji: string;
  audience: string; // 面向对象
  goal: string; // 一句话教学目标(卡片用)
  intro: string[]; // 课程详情介绍,每段一个字符串
  highlights: string[]; // 课程亮点
  category: '科学' | '人文' | '艺术' | '素养';
  teacherId: string; // 任课/代课老师,关联 members.id
  coursewareUrl?: string; // 课件下载链接(放 public/files/ 下)
  videoUrl?: string; // 相关趣味科普视频链接
};

export const courses: Course[] = [
  {
    id: 'science',
    title: '趣味科学课',
    emoji: '🔬',
    audience: '3–6 年级',
    goal: '用身边的现象点燃好奇心,建立动手探究的科学思维。',
    category: '科学',
    teacherId: 'chen',
    coursewareUrl: '/files/课件示例.txt',
    videoUrl: 'https://www.bilibili.com',
    highlights: ['鸡蛋浮力小实验', '自制简易显微镜', '小组探究汇报'],
    intro: [
      '科学课不依赖实验室,而是用孩子身边随手可得的材料,带他们亲手做实验、亲眼看现象。',
      '每节课围绕一个生活中的"为什么"展开,先猜想、再动手、最后小组汇报,完整体验一次科学探究。',
    ],
  },
  {
    id: 'reading',
    title: '阅读与表达',
    emoji: '📖',
    audience: '全年级',
    goal: '通过共读与分享,提升孩子的语言表达与自信心。',
    category: '人文',
    teacherId: 'su',
    coursewareUrl: '/files/课件示例.txt',
    videoUrl: 'https://www.bilibili.com',
    highlights: ['绘本共读', '故事接龙', '我的家乡演讲'],
    intro: [
      '从一本绘本、一个故事出发,带孩子读起来、说出来。',
      '课堂上没有标准答案,鼓励每个孩子大胆表达自己的想法,慢慢建立开口的自信。',
    ],
  },
  {
    id: 'art',
    title: '美术创想',
    emoji: '🎨',
    audience: '1–4 年级',
    goal: '用画笔表达情绪与想象,感受色彩与美。',
    category: '艺术',
    teacherId: 'zhe',
    coursewareUrl: '/files/课件示例.txt',
    videoUrl: 'https://www.bilibili.com',
    highlights: ['废旧材料手工', '我的梦想画', '班级壁画共创'],
    intro: [
      '美术课鼓励"没有画错的画",用废旧材料、彩笔和想象力进行创作。',
      '以班级壁画共创收尾,让孩子在合作中感受美与成就感。',
    ],
  },
  {
    id: 'music',
    title: '音乐与合唱',
    emoji: '🎵',
    audience: '全年级',
    goal: '在歌声中建立集体感与表达力。',
    category: '艺术',
    teacherId: 'su',
    coursewareUrl: '/files/课件示例.txt',
    videoUrl: 'https://www.bilibili.com',
    highlights: ['节奏游戏', '校园歌曲教唱', '结营汇演排练'],
    intro: [
      '从拍手打节奏开始,到学唱校园歌曲,再到为结营汇演排练合唱。',
      '音乐课是孩子们最放松、最有集体感的时刻。',
    ],
  },
  {
    id: 'psych',
    title: '心理成长课',
    emoji: '🌱',
    audience: '4–6 年级',
    goal: '帮助孩子认识情绪、学会沟通与自我接纳。',
    category: '素养',
    teacherId: 'yu',
    coursewareUrl: '/files/课件示例.txt',
    videoUrl: 'https://www.bilibili.com',
    highlights: ['情绪卡片', '团体游戏', '写给一年后的自己'],
    intro: [
      '用情绪卡片、团体游戏等方式,帮助孩子认识和表达自己的情绪。',
      '在安全、被接纳的氛围里,学会与自己、与他人相处。',
    ],
  },
  {
    id: 'safety',
    title: '安全与卫生',
    emoji: '🩹',
    audience: '全年级',
    goal: '掌握基本的安全自护与卫生习惯。',
    category: '素养',
    teacherId: 'wang',
    coursewareUrl: '/files/课件示例.txt',
    videoUrl: 'https://www.bilibili.com',
    highlights: ['七步洗手法', '防溺水情景剧', '小小急救员'],
    intro: [
      '通过情景剧、动手演练,教孩子记住防溺水、用电安全和基本急救常识。',
      '把安全知识变成肌肉记忆,是这门课最重要的目标。',
    ],
  },
];

export const getCourse = (id: string) => courses.find((c) => c.id === id);
