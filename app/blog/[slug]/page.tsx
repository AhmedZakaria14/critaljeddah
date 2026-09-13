import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CalendarDays, ChevronLeft, Clock3, Phone } from 'lucide-react';
import ArticleBody from '@/components/ArticleBody';
import { blogPosts, createSectionId, getBlogPost, getFaqItems } from '@/lib/blog';

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const canonical = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical },
    authors: [{ name: 'حداد كريتال بجدة' }],
    category: post.category,
    openGraph: {
      type: 'article',
      locale: 'ar_SA',
      url: canonical,
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.modifiedAt,
      authors: ['حداد كريتال بجدة'],
      images: [{ url: post.image, width: 1440, height: 810, alt: post.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const pageUrl = `https://www.haddad-jeddah.com/blog/${post.slug}`;
  const faqItems = getFaqItems(post);
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: [`https://www.haddad-jeddah.com${post.image}`],
    datePublished: post.publishedAt,
    dateModified: post.modifiedAt,
    inLanguage: 'ar-SA',
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    author: { '@type': 'Organization', name: 'حداد كريتال بجدة', url: 'https://www.haddad-jeddah.com' },
    publisher: {
      '@type': 'Organization',
      name: 'حداد كريتال بجدة',
      logo: { '@type': 'ImageObject', url: 'https://www.haddad-jeddah.com/media/logo.png' },
    },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://www.haddad-jeddah.com' },
      { '@type': 'ListItem', position: 2, name: 'المدونة', item: 'https://www.haddad-jeddah.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: pageUrl },
    ],
  };
  const faqSchema = faqItems.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      }
    : null;

  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      {[articleSchema, breadcrumbSchema, faqSchema].filter(Boolean).map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      ))}

      <article>
        <header className="border-b border-stone-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <nav aria-label="مسار التنقل" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-stone-500">
              <Link href="/" className="hover:text-amber-700">الرئيسية</Link>
              <ChevronLeft size={16} />
              <Link href="/blog" className="hover:text-amber-700">المدونة</Link>
              <ChevronLeft size={16} />
              <span className="text-stone-700">{post.title}</span>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
              <div>
                <span className="mb-5 inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-bold text-amber-800">{post.category}</span>
                <h1 className="mb-6 text-4xl font-extrabold leading-tight text-stone-900 md:text-5xl">{post.title}</h1>
                <p className="mb-7 text-lg leading-8 text-stone-600">{post.description}</p>
                <div className="flex flex-wrap items-center gap-5 text-sm text-stone-500">
                  <span className="flex items-center gap-2"><CalendarDays size={18} className="text-amber-600" /> 18 أغسطس 2026</span>
                  <span className="flex items-center gap-2"><Clock3 size={18} className="text-amber-600" /> {post.readingTime} دقائق قراءة</span>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-3xl border-8 border-white shadow-2xl">
                <Image src={post.image} alt={post.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover" />
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
          <div className="min-w-0">
            <ArticleBody post={post} />

            <div className="mt-12 rounded-3xl bg-stone-900 p-8 text-center text-white sm:p-10">
              <h2 className="mb-4 text-3xl font-extrabold">هل تحتاج إلى تنفيذ عمل حديدي في جدة؟</h2>
              <p className="mx-auto mb-7 max-w-2xl text-lg leading-8 text-stone-300">تواصل معنا لمعاينة الموقع ومناقشة المقاسات والتصميم والخامات المناسبة لاحتياجك.</p>
              <a href="tel:0545334871" className="inline-flex items-center gap-3 rounded-full bg-amber-500 px-7 py-4 text-lg font-bold text-stone-950 transition hover:bg-amber-400">
                <Phone size={20} /> <span dir="ltr">0545334871</span>
              </a>
            </div>
          </div>

          <aside className="order-first lg:order-last">
            <nav aria-label="جدول محتويات المقال" className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm lg:sticky lg:top-32">
              <h2 className="mb-5 text-xl font-extrabold text-stone-900">جدول المحتويات</h2>
              <ol className="space-y-3 border-r-2 border-amber-200 pr-4">
                {post.sections.map((section, index) => (
                  <li key={section.heading}>
                    <a href={`#${createSectionId(section.heading, index)}`} className="block text-sm font-medium leading-6 text-stone-600 transition hover:text-amber-700">
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
        </div>
      </article>
    </div>
  );
}
