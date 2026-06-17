// 班级数据 —— 按年龄分组,每个班级含:带班老师、课表、学生名单。
//
// 维护提示:
// - headTeacherId / 课表里的 courseId 分别关联 team.ts 和 courses.ts 里的 id;
// - 学生 personality(性格)与 tutoring(个性化辅导)目前留空,由带班老师整理后填入;
// - 如有真实照片,把图片放到 public/images/classes/ 下,再填写 coverImage,例如 /images/classes/age-3-6.jpg。

export type AgeGroupId = 'age-3-6' | 'age-6-12';

export type AgeGroup = {
  id: AgeGroupId;
  label: string;
  shortLabel: string;
  emoji: string;
  desc: string;
};

export const ageGroups: AgeGroup[] = [
  { id: 'age-3-6', label: '3-6 岁', shortLabel: '3-6', emoji: '🌱', desc: '学前 / 低龄启蒙,以游戏化、感官体验与陪伴式表达为主。' },
  { id: 'age-6-12', label: '6-12 岁', shortLabel: '6-12', emoji: '🌳', desc: '小学阶段,兼顾学习习惯、探究表达与自我认知。' },
];

export type Student = {
  name: string;
  /** 性格(由带班老师填写,留空显示"待填写") */
  personality?: string;
  /** 个性化辅导建议(由带班老师填写) */
  tutoring?: string;
};

export type TimetableEntry = {
  time: string;
  courseId: string; // 关联 courses.ts
};

export type SchoolClass = {
  id: string;
  name: string;
  ageGroupId: AgeGroupId;
  headTeacherId: string; // 带班老师,关联 team.ts
  summary: string;
  coverImage?: string;
  timetable: TimetableEntry[];
  students: Student[];
};

// 用占位姓名生成一组学生,性格 / 辅导留空待老师填写
const mockStudents = (names: string[]): Student[] =>
  names.map((name) => ({ name, personality: '', tutoring: '' }));

export const classes: SchoolClass[] = [
  {
    id: 'age-3-6',
    name: '3-6 岁班',
    ageGroupId: 'age-3-6',
    headTeacherId: 'zhe',
    summary: '以游戏、绘本、音乐和手工活动为主,帮助低龄孩子建立安全感、表达欲和基本课堂习惯。',
    timetable: [
      { time: '09:00 – 09:45', courseId: 'art' },
      { time: '10:00 – 10:45', courseId: 'shici' },
      { time: '11:00 – 11:45', courseId: 'english' },
      { time: '15:00 – 15:45', courseId: 'redsafety' },
    ],
    students: mockStudents(['小航', '朵朵', '阿木', '丫丫', '念念', '石头', '糖糖', '阿亮']),
  },
  {
    id: 'age-6-12',
    name: '6-12 岁班',
    ageGroupId: 'age-6-12',
    headTeacherId: 'lin',
    summary: '围绕阅读表达、科学探究、心理成长和安全卫生展开,兼顾学习习惯与自我认知。',
    timetable: [
      { time: '09:00 – 09:45', courseId: 'shici' },
      { time: '10:00 – 10:45', courseId: 'crypto' },
      { time: '11:00 – 11:45', courseId: 'coding' },
      { time: '14:30 – 15:15', courseId: 'ai' },
      { time: '16:30 – 17:30', courseId: 'tutoring' },
    ],
    students: mockStudents(['志远', '佳怡', '宇辰', '梦瑶', '子轩', '思琪', '浩宇', '雨欣', '泽宇', '欣怡']),
  },
];

export const getClass = (id: string) => classes.find((c) => c.id === id);
export const classesByGroup = (groupId: AgeGroupId) =>
  classes.filter((c) => c.ageGroupId === groupId);
