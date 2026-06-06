// 班级数据 —— 按年龄分组,每个班级含:带班老师、课表、学生名单。
//
// 维护提示:
// - headTeacherId / 课表里的 courseId 分别关联 team.ts 和 courses.ts 里的 id;
// - 学生 personality(性格)与 tutoring(个性化辅导)目前留空,由带班老师整理后填入。

export type AgeGroupId = 'age-3-6' | 'age-6-9' | 'age-9-12';

export type AgeGroup = {
  id: AgeGroupId;
  label: string;
  emoji: string;
  desc: string;
};

export const ageGroups: AgeGroup[] = [
  { id: 'age-3-6', label: '3–6 岁', emoji: '🌱', desc: '学前 / 低龄启蒙,以游戏化、感官体验为主。' },
  { id: 'age-6-9', label: '6–9 岁', emoji: '🌿', desc: '小学低段,培养兴趣与基础学习习惯。' },
  { id: 'age-9-12', label: '9–12 岁', emoji: '🌳', desc: '小学高段,注重探究、表达与自我认知。' },
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
  timetable: TimetableEntry[];
  students: Student[];
};

// 用占位姓名生成一组学生,性格 / 辅导留空待老师填写
const mockStudents = (names: string[]): Student[] =>
  names.map((name) => ({ name, personality: '', tutoring: '' }));

export const classes: SchoolClass[] = [
  {
    id: 'sunflower',
    name: '向日葵班',
    ageGroupId: 'age-3-6',
    headTeacherId: 'zhe',
    timetable: [
      { time: '09:00 – 09:40', courseId: 'art' },
      { time: '10:00 – 10:40', courseId: 'music' },
      { time: '15:00 – 15:40', courseId: 'safety' },
    ],
    students: mockStudents(['小航', '朵朵', '阿木', '丫丫', '念念', '石头', '糖糖', '阿亮']),
  },
  {
    id: 'sapling',
    name: '小树苗班',
    ageGroupId: 'age-6-9',
    headTeacherId: 'su',
    timetable: [
      { time: '08:30 – 09:15', courseId: 'reading' },
      { time: '09:30 – 10:15', courseId: 'science' },
      { time: '10:30 – 11:15', courseId: 'art' },
      { time: '15:00 – 15:45', courseId: 'safety' },
    ],
    students: mockStudents(['小宇', '可可', '大壮', '欣欣', '豆豆', '楠楠', '小满', '阿成', '果果']),
  },
  {
    id: 'dandelion',
    name: '蒲公英班',
    ageGroupId: 'age-6-9',
    headTeacherId: 'chen',
    timetable: [
      { time: '08:30 – 09:15', courseId: 'science' },
      { time: '09:30 – 10:15', courseId: 'reading' },
      { time: '14:00 – 14:45', courseId: 'psych' },
    ],
    students: mockStudents(['浩然', '小满', '婷婷', '阿水', '乐乐', '冬冬', '芽芽']),
  },
  {
    id: 'voyage',
    name: '启航班',
    ageGroupId: 'age-9-12',
    headTeacherId: 'lin',
    timetable: [
      { time: '08:30 – 09:15', courseId: 'reading' },
      { time: '09:30 – 10:15', courseId: 'science' },
      { time: '14:00 – 14:45', courseId: 'psych' },
      { time: '15:00 – 15:45', courseId: 'music' },
    ],
    students: mockStudents(['志远', '佳怡', '宇辰', '梦瑶', '子轩', '思琪', '浩宇', '雨欣', '泽宇', '欣怡']),
  },
];

export const getClass = (id: string) => classes.find((c) => c.id === id);
export const classesByGroup = (groupId: AgeGroupId) =>
  classes.filter((c) => c.ageGroupId === groupId);
