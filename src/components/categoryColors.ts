// 课程分类 → 蜡笔配色(token 定义在 global.css @theme)
// 用于课程卡、课表色块、分类筛选等处,保证全站分类色一致。
import type { Course } from '../data/courses';

export type Category = Course['category'];

export const catColor: Record<Category, { soft: string; chip: string; text: string; bar: string }> = {
  科学: { soft: 'bg-csky-100', chip: 'bg-csky-300 text-csky-700', text: 'text-csky-700', bar: 'bg-csky-300' },
  人文: { soft: 'bg-camber-100', chip: 'bg-camber-300 text-camber-700', text: 'text-camber-700', bar: 'bg-camber-300' },
  艺术: { soft: 'bg-cpink-100', chip: 'bg-cpink-300 text-cpink-700', text: 'text-cpink-700', bar: 'bg-cpink-300' },
  素养: { soft: 'bg-cgrass-100', chip: 'bg-cgrass-300 text-cgrass-700', text: 'text-cgrass-700', bar: 'bg-cgrass-300' },
};
