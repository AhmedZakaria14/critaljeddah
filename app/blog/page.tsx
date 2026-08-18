import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock3 } from 'lucide-react';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'مدونة الحدادة والكريتال في جدة',
  description: 'دليل شامل لأعمال الحدادة في جدة: أبواب الحديد والكريتال والشبابيك والدرابزين وورش التصنيع والتفصيل والتركيب والصيانة.',
  keywords: ['مدونة حداد جدة', 'أعمال الحدادة بجدة', 'أبواب حديد جدة', 'حداد كريتال', 'ورش حدادة جدة'],
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'مدونة الحدادة والكريتال في جدة',
    description: 'مقالات متخصصة تساعدك على اختيار وتنفيذ وصيانة أعمال الحديد والكريتال في جدة.',
    url: '/blog',
    type: 'website',
    locale: 'ar_SA',
    images: [{ url: blogPosts[0].image, width: 1440, height: 810, alt: blogPosts[0].imageAlt }],
  },
};

export default function BlogPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'مدونة الحدادة والكريتال في جدة',
    url: 'https://haddad-jeddah.com/blog',
    inLanguage: 'ar-SA',
    hasPart: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://haddad-jeddah.com/blog/${post.slug}`,
      image: `https://haddad-jeddah.com${post.image}`,
    })),
  };

  return (
    <main className="min-h-screen bg-stone-50 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema).replace(/</g, '\\u003c') }} />

      <header className="border-b border-stone-200 bg-white py-20 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <span className="mb-5 inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-bold text-amber-800">
            دليل أعمال الحديد والكريتال
          </span>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-stone-900 md:text-6xl">مدونة حداد جدة</h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-stone-600 md:text-xl">
            مقالات عملية تساعدك على فهم أنواع الأعمال الحديدية، واختيار التصميم والخامات، ومتابعة مراحل التصنيع والتركيب والصيانة.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-label="مقالات المدونة">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article key={post.slug} className={`group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${index === 0 ? 'md:col-span-2 xl:col-span-2' : ''}`}>
              <Link href={`/blog/${post.slug}`} className="block">
                <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[16/7]' : 'aspect-video'}`}>
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes={index === 0 ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
                    className="object-cover transition duration-500 group-hover:scale-105"
                    priority={index === 0}
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
                    <span className="rounded-full bg-amber-50 px-3 py-1 font-bold text-amber-800">{post.category}</span>
                    <span className="flex items-center gap-1.5 text-stone-500"><Clock3 size={16} /> {post.readingTime} دقائق قراءة</span>
                  </div>
                  <h2 className="mb-4 text-2xl font-extrabold leading-snug text-stone-900 transition-colors group-hover:text-amber-700 sm:text-3xl">{post.title}</h2>
                  <p className="line-clamp-3 text-base leading-8 text-stone-600">{post.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-bold text-amber-700">اقرأ المقال <ArrowLeft size={18} /></span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
