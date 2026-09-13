import ServiceFAQ from '@/components/ServiceFAQ';
import { pageMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Shield, Award, Ruler, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = pageMetadata("حداد بجدة | معلم حداد كريتال وتفصيل ابواب وشبابيك", "أفضل حداد بجدة لأعمال الكريتال والحدادة. تفصيل أبواب حديد، شبابيك، مظلات، سواتر، درابزين، وبرجولات بجدة. أسعار منافسة وجودة عالية.", '/');

const images = [
  "/media/workers-installation.jpeg",
  "/media/wood-look-metal-gate.jpeg",
  "/media/carport-and-window-grille.jpeg",
];

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-50 rounded-full blur-[100px] -z-10 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-stone-100 rounded-full blur-[100px] -z-10 transform -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-right min-w-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-800 font-medium mb-8 shadow-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                </span>
                <span className="text-sm tracking-wide font-bold">نخدمكم في جميع أنحاء مدينة جدة</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-stone-900 leading-[1.15] mb-8">
                أفضل <span className="text-transparent bg-clip-text bg-gradient-to-l from-amber-500 to-amber-700">حداد بجدة</span><br />
                <span className="text-stone-500 font-medium text-3xl sm:text-4xl lg:text-5xl mt-4 block">لأعمال الكريتال والحدادة</span>
              </h1>

              <p className="text-lg md:text-xl text-stone-600 mb-12 leading-relaxed max-w-2xl">
                معلم حداد بجدة لتفصيل وتركيب كافة أعمال الحدادة والكريتال. أبواب، شبابيك، مظلات، وسواتر بأعلى معايير الجودة وأفضل الأسعار لخدمتكم.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Link
                  href="/contact"
                  className="group relative flex justify-center items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:bg-stone-800 hover:-translate-y-1"
                >
                  <span className="relative z-10">احصل على استشارة</span>
                </Link>

                <Link
                  href="/gallery"
                  className="flex justify-center items-center gap-3 bg-white border-2 border-stone-200 text-stone-800 px-8 py-4 rounded-xl font-bold text-lg hover:border-amber-400 hover:text-amber-700 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md"
                >
                  <span>استكشف أعمالنا</span>
                  <ArrowLeft size={20} />
                </Link>
              </div>
            </div>

            <ScrollReveal delay={0.3} className="relative hidden lg:block">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border-8 border-white relative z-10 shadow-2xl">
                <Image sizes="(max-width: 768px) 100vw, 50vw"
                  src={images[0]}
                  alt="أعمال حدادة مميزة"
                  fill
                  className="object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="absolute -top-6 -right-6 w-full h-full border-2 border-amber-200 rounded-[2rem] -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-stone-100 rounded-[2rem] -z-20 border border-stone-200"></div>

              <div className="absolute top-12 -left-12 bg-white p-6 rounded-2xl shadow-xl z-20 border border-stone-100 animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 border border-amber-100">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="text-stone-900 font-bold text-lg">ضمان الجودة</div>
                    <div className="text-stone-500 text-sm">أفضل الخامات</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-24 bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">لماذا تختار أفضل حداد في جدة؟</h2>
            <p className="text-stone-500 text-lg">بصفتنا ورشة حدادة رائدة بجدة، نلتزم بتقديم أفضل المعايير في كل مشروع نقوم بتنفيذه.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100 hover:border-amber-200 group">
              <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-8 border border-stone-100 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
                <Shield size={32} className="text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">متانة تدوم طويلاً</h3>
              <p className="text-stone-600 leading-relaxed">نستخدم أفضل أنواع الحديد وأحدث تقنيات اللحام والدهانات المقاومة للصدأ لضمان عمر افتراضي طويل لأعمال الحدادة والكريتال.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100 hover:border-amber-200 group">
              <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-8 border border-stone-100 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
                <Ruler size={32} className="text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">دقة هندسية</h3>
              <p className="text-stone-600 leading-relaxed">التزام تام بالمقاسات والتصاميم المحددة، مع الاهتمام بأدق التفاصيل والتشطيبات النهائية الفاخرة.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100 hover:border-amber-200 group">
              <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-8 border border-stone-100 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
                <Award size={32} className="text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">أسعار تنافسية</h3>
              <p className="text-stone-600 leading-relaxed">نقدم لك أفضل قيمة مقابل السعر في جدة، نجمع بين الجودة العالية، التصميم الراقي، والسعر المدروس.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal delay={0.2} className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg mt-8">
                  <Image sizes="(max-width: 768px) 100vw, 50vw" src={images[1]} alt="أبواب كريتال خارجية بتصاميم حديثة بجدة" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                  <Image sizes="(max-width: 768px) 100vw, 50vw" src={images[2]} alt="مظلة سيارة وشباك حماية حديد في جدة" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-stone-900 mb-6">خدمات متكاملة لتلبية <br/><span className="text-amber-600">كافة احتياجاتك</span></h2>
              <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                نحول الحديد إلى تحف فنية تزين واجهات منازلكم وتوفر لكم الحماية والأمان. نقدم مجموعة واسعة من الخدمات المصممة خصيصاً لتلبية ذوقكم الرفيع.
              </p>
              <ul className="space-y-4 mb-10">
                {["أبواب ليزر بتصاميم حديثة", "شبابيك حديد بتصاميم حماية راقية", "درابزين سلالم داخلي وخارجي", "مظلات سيارات وبرجولات حدائق"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-amber-500" size={24} />
                    <span className="text-stone-800 font-bold">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services" className="inline-flex items-center gap-2 bg-stone-100 text-stone-800 px-6 py-3 rounded-xl font-bold hover:bg-stone-200 transition-colors shadow-sm">
                <span>تصفح جميع الخدمات</span>
                <ArrowLeft size={18} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <ServiceFAQ />
    </div>
  );
}
