import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';

const phoneNumber = "0545334871";
const logoUrl = "/media/logo.png";

export default function Footer() {
  return (
    <footer className="bg-stone-900 pt-24 pb-12 border-t border-stone-800 relative text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-16 h-16 bg-white rounded-xl p-2 shadow-lg">
                <Image sizes="80px" src={logoUrl} alt="حداد كريتال جدة" fill className="object-contain p-1" referrerPolicy="no-referrer" />
              </div>
              <span className="font-bold text-3xl text-white">حداد كريتال <span className="text-amber-500">جدة</span></span>
            </Link>
            <p className="text-stone-400 mb-8 max-w-sm font-light leading-relaxed">
              الوجهة الأولى لأعمال الحدادة والكريتال الفاخرة في مدينة جدة. نجمع بين الفن، الدقة، والمتانة لتقديم أفضل الأعمال الحديدية.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold mb-6 text-lg tracking-wide">روابط سريعة</h2>
            <ul className="space-y-4 text-stone-400 font-light">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">الرئيسية</Link></li>
              <li><Link href="/about" className="hover:text-amber-400 transition-colors">من نحن</Link></li>
              <li><Link href="/services" className="hover:text-amber-400 transition-colors">خدماتنا المتميزة</Link></li>
              <li><Link href="/gallery" className="hover:text-amber-400 transition-colors">معرض الأعمال</Link></li>
              <li><Link href="/blog" className="hover:text-amber-400 transition-colors">مدونة الحدادة</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold mb-6 text-lg tracking-wide">تواصل معنا</h2>
            <ul className="space-y-4 text-stone-400 font-light">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-amber-500" />
                <span>المملكة العربية السعودية، جدة</span>
              </li>
              <li>
                <a href={`tel:${phoneNumber}`} className="flex items-center gap-3 hover:text-amber-400 transition-colors" dir="ltr">
                  <Phone size={18} className="text-amber-500" />
                  <span>{phoneNumber}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-sm font-light text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} معلم حداد كريتال بجدة. جميع الحقوق محفوظة.</p>
          <p>
            تم التصميم والتطوير بواسطة{' '}
            <a
              href="https://nasharhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-400 font-medium transition-colors hover:underline"
            >
              NasharHub.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
