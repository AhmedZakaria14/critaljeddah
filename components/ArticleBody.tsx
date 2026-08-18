import Link from 'next/link';
import { ArrowUpLeft, CheckCircle2 } from 'lucide-react';
import { BlogBlock, BlogPost, BlogSection, createSectionId, getRelatedPosts } from '@/lib/blog';

const linkRules = [
  { phrases: ['خدمات حداد جدة', 'حداد جدة'], slug: 'خدمات-حداد-جدة-للمنازل-والمنشآت' },
  { phrases: ['ورش حدادة جدة', 'ورشة حدادة جدة', 'ورشة الحدادة'], slug: 'أعمال-ورش-حدادة-جدة' },
  { phrases: ['حداد كريتال', 'أعمال الكريتال', 'كريتال حديد'], slug: 'حداد-كريتال-ابواب-شبابيك-درابزين' },
  { phrases: ['حداد تفصيل', 'تفصيل أبواب حديد'], slug: 'حداد-تفصيل-ابواب-حديد' },
  { phrases: ['حداد ابواب حديد بجدة', 'حداد أبواب جدة', 'أبواب حديد جدة'], slug: 'حداد-ابواب-حديد-بجدة' },
];

function renderLinkedText(text: string, currentSlug: string, linkedSlugs: Set<string>) {
  const matches = linkRules
    .filter((rule) => rule.slug !== currentSlug && !linkedSlugs.has(rule.slug))
    .flatMap((rule) => rule.phrases.map((phrase) => ({ ...rule, phrase, index: text.indexOf(phrase) })))
    .filter((match) => match.index >= 0)
    .sort((a, b) => a.index - b.index || b.phrase.length - a.phrase.length);

  const match = matches[0];
  if (!match) return text;

  linkedSlugs.add(match.slug);
  const before = text.slice(0, match.index);
  const after = text.slice(match.index + match.phrase.length);

  return (
    <>
      {before}
      <Link
        href={`/blog/${match.slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-amber-700 underline decoration-amber-300 underline-offset-4 transition-colors hover:text-amber-900"
      >
        {match.phrase}
      </Link>
      {after}
    </>
  );
}

function renderBlocks(blocks: BlogBlock[], currentSlug: string, linkedSlugs: Set<string>) {
  const output: React.ReactNode[] = [];
  let index = 0;

  while (index < blocks.length) {
    const block = blocks[index];
    if (block.type === 'listItem') {
      const items: Extract<BlogBlock, { type: 'listItem' }>[] = [];
      while (index < blocks.length && blocks[index].type === 'listItem') {
        items.push(blocks[index] as Extract<BlogBlock, { type: 'listItem' }>);
        index += 1;
      }
      output.push(
        <ol key={`list-${index}`} className="my-8 space-y-4">
          {items.map((item, itemIndex) => (
            <li key={`${item.title}-${itemIndex}`} className="rounded-2xl border border-stone-200 bg-stone-50 p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-800">
                  {itemIndex + 1}
                </span>
                <div>
                  {item.title && <h3 className="mb-2 text-xl font-bold text-stone-900">{item.title}</h3>}
                  <p className="text-lg leading-9 text-stone-700">{renderLinkedText(item.text, currentSlug, linkedSlugs)}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>,
      );
      continue;
    }

    if (block.type === 'subheading') {
      output.push(
        <h3 key={`subheading-${index}`} className="mb-3 mt-8 text-2xl font-bold text-stone-900">
          {block.text}
        </h3>,
      );
    } else {
      output.push(
        <p key={`paragraph-${index}`} className="mb-5 text-lg leading-9 text-stone-700">
          {renderLinkedText(block.text, currentSlug, linkedSlugs)}
        </p>,
      );
    }
    index += 1;
  }

  return output;
}

function RelatedReading({ post }: { post: BlogPost }) {
  const relatedPosts = getRelatedPosts(post.slug);

  return (
    <aside className="my-12 rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8" aria-labelledby="related-reading-title">
      <h2 id="related-reading-title" className="mb-5 text-2xl font-bold text-stone-900">أدلة مرتبطة قد تفيدك</h2>
      <ul className="grid gap-3 sm:grid-cols-2">
        {relatedPosts.map((relatedPost) => (
          <li key={relatedPost.slug}>
            <Link
              href={`/blog/${relatedPost.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full items-start gap-3 rounded-xl bg-white p-4 font-bold text-stone-800 shadow-sm transition hover:-translate-y-0.5 hover:text-amber-700 hover:shadow-md"
            >
              <ArrowUpLeft className="mt-1 shrink-0 text-amber-600" size={18} />
              <span>{relatedPost.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default function ArticleBody({ post }: { post: BlogPost }) {
  const linkedSlugs = new Set<string>();

  return (
    <>
      <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-9">
        {post.intro.map((paragraph, index) => (
          <p key={index} className={`text-lg leading-9 text-stone-700 ${index === 0 ? 'font-medium' : 'mt-5'}`}>
            {renderLinkedText(paragraph, post.slug, linkedSlugs)}
          </p>
        ))}
      </div>

      {post.sections.map((section: BlogSection, sectionIndex) => (
        <section
          key={section.heading}
          id={createSectionId(section.heading, sectionIndex)}
          className="scroll-mt-32 border-b border-stone-200 py-10 last:border-b-0"
        >
          <h2 className="mb-6 flex items-start gap-3 text-3xl font-extrabold leading-tight text-stone-900">
            <CheckCircle2 className="mt-1 shrink-0 text-amber-600" size={28} />
            <span>{section.heading}</span>
          </h2>
          {renderBlocks(section.blocks, post.slug, linkedSlugs)}
          {sectionIndex === 1 && <RelatedReading post={post} />}
        </section>
      ))}
    </>
  );
}
