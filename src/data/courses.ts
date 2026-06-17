// 特色课程 —— 内容对应《课表草稿-1.xlsx》中实际开设的课程。
// 用于"课程安排"页,以及班级课表里被引用(点课表 → 课程详情)。
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
    id: 'shici',
    title: '诗词鉴赏',
    emoji: '📜',
    audience: '全营期',
    goal: '在诵读与品析中感受古诗词之美,厚植文化底蕴。',
    category: '人文',
    teacherId: 'su',
    coursewareUrl: '/files/课件示例.txt',
    highlights: ['经典诗词诵读', '诗中有画·配画', '飞花令小竞赛'],
    intro: [
      '从耳熟能详的唐诗宋词入手,带孩子读出节奏、读懂意境。',
      '通过配画、情景演绎和飞花令竞赛,让古老的文字在课堂上重新活起来。',
    ],
  },
  {
    id: 'english',
    title: '英语趣味学习课',
    emoji: '🔤',
    audience: '全营期',
    goal: '用游戏和歌曲打开英语的大门,敢说敢用。',
    category: '人文',
    teacherId: 'su',
    coursewareUrl: '/files/课件示例.txt',
    highlights: ['字母与自然拼读', '英文儿歌律动', '情景对话游戏'],
    intro: [
      '不背单词表,而是从英文儿歌、动画和小游戏出发,让孩子先爱上、再开口。',
      '课堂以情景对话和小组游戏为主,降低开口的紧张感,建立语言自信。',
    ],
  },
  {
    id: 'coding',
    title: '少儿编程',
    emoji: '💻',
    audience: '6–12 岁',
    goal: '用图形化编程培养逻辑思维与创造力。',
    category: '科学',
    teacherId: 'chen',
    coursewareUrl: '/files/课件示例.txt',
    videoUrl: 'https://www.bilibili.com',
    highlights: ['图形化积木编程', '小游戏动画制作', '逻辑闯关挑战'],
    intro: [
      '以图形化积木编程为载体,把"顺序、循环、条件"这些抽象概念变成可以拖拽的小积木。',
      '孩子在制作小动画、小游戏的过程中,自然而然地建立起计算思维。',
    ],
  },
  {
    id: 'ai',
    title: 'AI 知识科普',
    emoji: '🤖',
    audience: '6–12 岁',
    goal: '揭开人工智能的神秘面纱,看见科技与未来。',
    category: '科学',
    teacherId: 'chen',
    coursewareUrl: '/files/课件示例.txt',
    videoUrl: 'https://www.bilibili.com',
    highlights: ['AI 就在身边', '人脸/语音识别体验', '聊聊机器人'],
    intro: [
      '从手机里的语音助手、人脸识别讲起,把"人工智能"这个大词拆成孩子能理解的小例子。',
      '通过有趣的互动体验,帮孩子建立对科技的好奇与正确认知。',
    ],
  },
  {
    id: 'crypto',
    title: '数字文化与密码学',
    emoji: '🔐',
    audience: '6–12 岁',
    goal: '在数字与密码游戏中感受数学之美与思维乐趣。',
    category: '科学',
    teacherId: 'chen',
    coursewareUrl: '/files/课件示例.txt',
    highlights: ['有趣的数字规律', '凯撒密码解谜', '动手做密信'],
    intro: [
      '从生活中的数字规律出发,带孩子认识密码背后的数学思想。',
      '用凯撒密码、摩斯电码等小游戏,让孩子在解谜和加密中体会思维的乐趣。',
    ],
  },
  {
    id: 'math',
    title: '数学文化活动',
    emoji: '🧮',
    audience: '全营期',
    goal: '跳出课本,在游戏与故事中重新认识数学。',
    category: '科学',
    teacherId: 'chen',
    coursewareUrl: '/files/课件示例.txt',
    highlights: ['数学小故事', '七巧板与图形', '趣味数独闯关'],
    intro: [
      '数学不只是计算。通过数学家的小故事、七巧板和趣味谜题,让孩子看见数学好玩的一面。',
      '在动手与竞赛中,慢慢培养对数学的兴趣和不怕难题的劲头。',
    ],
  },
  {
    id: 'art',
    title: '绘画手工',
    emoji: '🎨',
    audience: '全营期',
    goal: '用画笔和双手表达想象,感受创作的快乐。',
    category: '艺术',
    teacherId: 'zhe',
    coursewareUrl: '/files/课件示例.txt',
    highlights: ['主题创意画', '废旧材料手工', '班级共创作品'],
    intro: [
      '美术课鼓励"没有画错的画",用彩笔、黏土和废旧材料自由创作。',
      '以班级共创作品收尾,让孩子在合作中感受美与成就感。',
    ],
  },
  {
    id: 'redsafety',
    title: '红色安全教育',
    emoji: '🚩',
    audience: '全营期',
    goal: '讲好红色故事,把安全知识记在心里。',
    category: '素养',
    teacherId: 'wang',
    coursewareUrl: '/files/课件示例.txt',
    highlights: ['红色小故事', '防溺水·用电安全', '安全情景演练'],
    intro: [
      '通过生动的红色故事,在孩子心中种下家国情怀。',
      '结合防溺水、用电安全等情景演练,把安全常识变成能用得上的本领。',
    ],
  },
  {
    id: 'patriot',
    title: '爱国成长安全教育',
    emoji: '🌟',
    audience: '全营期',
    goal: '在成长与陪伴中,认识自己、热爱家乡与祖国。',
    category: '素养',
    teacherId: 'lin',
    coursewareUrl: '/files/课件示例.txt',
    highlights: ['我和我的家乡', '成长心理小课', '梦想宣言'],
    intro: [
      '把爱国教育和孩子的成长结合起来,从认识家乡、认识自己开始。',
      '通过分享和小活动,帮助孩子建立自信,写下属于自己的梦想宣言。',
    ],
  },
  {
    id: 'tutoring',
    title: '课业辅导',
    emoji: '📓',
    audience: '全营期',
    goal: '答疑解惑、查漏补缺,陪孩子把功课跟上。',
    category: '素养',
    teacherId: 'yu',
    highlights: ['暑期作业辅导', '一对一答疑', '学习习惯养成'],
    intro: [
      '每天下午的固定时段,陪孩子完成暑期作业、解答学习上的疑问。',
      '不只是补功课,更注重帮孩子养成主动、专注的学习习惯。',
    ],
  },
];

export const getCourse = (id: string) => courses.find((c) => c.id === id);
