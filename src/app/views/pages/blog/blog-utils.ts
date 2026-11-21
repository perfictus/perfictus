import { BlogBlock, BlogPost } from '../../../data/blog';

export interface TextPart { text: string; bold: boolean; }
export interface ViewBlock { kind: 'h2' | 'h3' | 'p' | 'ul' | 'ol' | 'tip'; parts?: TextPart[]; items?: TextPart[][]; }

/** "Hello **world**" -> [{text:'Hello ', bold:false}, {text:'world', bold:true}] */
export function parts(text: string): TextPart[] {
  return text.split('**').map((t, i) => ({ text: t, bold: i % 2 === 1 })).filter((p) => p.text);
}

export function toViewBlock(block: BlogBlock): ViewBlock {
  if ('h2' in block) return { kind: 'h2', parts: parts(block.h2) };
  if ('h3' in block) return { kind: 'h3', parts: parts(block.h3) };
  if ('p' in block) return { kind: 'p', parts: parts(block.p) };
  if ('tip' in block) return { kind: 'tip', parts: parts(block.tip) };
  if ('ul' in block) return { kind: 'ul', items: block.ul.map(parts) };
  return { kind: 'ol', items: block.ol.map(parts) };
}

export function readMinutes(post: BlogPost): number {
  const text = post.content
    .map((b) => Object.values(b).flat().join(' '))
    .join(' ');
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}

export const blogImage = (slug: string) => `assets/img/blog/${slug}.jpg`;
