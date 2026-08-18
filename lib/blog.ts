import posts from '@/data/blog-posts.json';

export type BlogBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'listItem'; title: string; text: string }
  | { type: 'subheading'; text: string };

export type BlogSection = {
  heading: string;
  blocks: BlogBlock[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  category: string;
  keywords: string[];
  publishedAt: string;
  modifiedAt: string;
  readingTime: number;
  intro: string[];
  sections: BlogSection[];
};

export const blogPosts = posts as BlogPost[];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === decodeURIComponent(slug));
}

export function getRelatedPosts(currentSlug: string) {
  return blogPosts.filter((post) => post.slug !== currentSlug);
}

export function createSectionId(heading: string, index: number) {
  const normalized = heading
    .normalize('NFKD')
    .replace(/[\u064B-\u065F\u0670]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();

  return normalized || `section-${index + 1}`;
}

export function getFaqItems(post: BlogPost) {
  const faqSection = post.sections.find((section) => section.heading === 'الأسئلة الشائعة');
  if (!faqSection) return [];

  const items: { question: string; answer: string }[] = [];
  for (let index = 0; index < faqSection.blocks.length; index += 1) {
    const block = faqSection.blocks[index];
    const answer = faqSection.blocks[index + 1];
    if (block.type === 'subheading' && answer?.type === 'paragraph') {
      items.push({ question: block.text, answer: answer.text });
    }
  }
  return items;
}
