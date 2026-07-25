import type {Metadata} from 'next';
import { Tajawal } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-tajawal',
});

const logoUrl = "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782240782/%D8%AD%D8%AF%D8%A7%D8%AF_%D9%83%D8%B1%D9%8A%D8%AA%D8%A7%D9%84_%D8%AC%D8%AF%D8%A9_ua2idm.png";

export const metadata: Metadata = {
  metadataBase: new URL('https://haddad-jeddah.com'),
  title: {
    template: '%s | حداد كريتال بجدة',
    default: 'حداد كريتال بجدة | أبواب، شبابيك، مظلات، سواتر وأعمال حدادة',
  },
  description: 'أفضل معلم حداد كريتال في جدة. تنفيذ وتفصيل كافة أعمال الحدادة: أبواب كريتال، شبابيك، مظلات، سواتر، درابزين، برجولات، هناجر، وأعمال الليزر بدقة واحترافية عالية.',
  keywords: [
    'حداد',
    'حداد بجدة',
    'حداد في جدة',
    'حداد جدة',
    'معلم حداد',
    'معلم حداد بجدة',
    'معلم حداد في جدة',
    'أفضل حداد بجدة',
    'أفضل معلم حداد بجدة',
    'حداد كريتال',
    'حداد كريتال جدة',
    'ورشة حدادة',
    'ورشة حدادة بجدة',
    'ورشة حدادة في جدة',
    'محل حدادة بجدة',
    'رقم حداد بجدة',
    'أرقام حدادين بجدة',
    'حداد رخيص بجدة',
    'حداد ممتاز بجدة',
    'حداد أبواب بجدة',
    'حداد شبابيك بجدة',
    'حداد مظلات بجدة',
    'أبواب كريتال',
    'أبواب حديد',
    'أبواب ليزر',
    'قص ليزر حديد',
    'شبابيك حديد',
    'شبابيك كريتال',
    'مظلات وسواتر',
    'مظلات وسواتر جدة',
    'تركيب مظلات سيارات',
    'درابزين حديد',
    'درابزين ليزر',
    'برجولات حديد',
    'هناجر ومستودعات',
    'أعمال الحدادة',
    'تفصيل أبواب حديد'
  ],
  authors: [{ name: 'حداد كريتال بجدة' }],
  creator: 'حداد كريتال بجدة',
  publisher: 'حداد كريتال بجدة',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: logoUrl,
    apple: logoUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://haddad-jeddah.com',
    title: 'حداد كريتال بجدة | أبواب وشبابيك وأعمال حدادة متكاملة',
    description: 'أفضل معلم حداد كريتال في جدة. تنفيذ وتفصيل كافة أعمال الحدادة: أبواب كريتال، شبابيك، مظلات، سواتر، درابزين، وبرجولات بأعلى جودة وأفضل الأسعار.',
    siteName: 'حداد كريتال بجدة',
    images: [
      {
        url: logoUrl,
        width: 800,
        height: 600,
        alt: 'حداد كريتال بجدة',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'حداد كريتال بجدة | أبواب وشبابيك',
    description: 'أفضل معلم حداد كريتال في جدة لجميع أعمال الحدادة والأبواب والشبابيك والمظلات والسواتر.',
    images: [logoUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body className="font-sans antialiased text-stone-800 bg-stone-50" suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen pt-24">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
