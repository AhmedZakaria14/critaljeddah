import type { Metadata } from 'next';
export const SITE_URL = 'https://www.haddad-jeddah.com';
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title, description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: { type: 'website', locale: 'ar_SA', siteName: 'حداد كريتال جدة', title, description, url: `${SITE_URL}${path}`, images: [{ url: '/media/geometric-metal-gate.jpeg', alt: 'أبواب حديد من أعمال حداد كريتال جدة' }] },
    twitter: { card: 'summary_large_image', title, description, images: ['/media/geometric-metal-gate.jpeg'] },
  };
}
