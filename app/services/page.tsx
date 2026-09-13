import { pageMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = pageMetadata("خدمات حدادة متكاملة في جدة", "أفضل معلم حداد في جدة يقدم خدمات الحدادة والكريتال: تفصيل أبواب ليزر، شبابيك، مظلات سيارات، برجولات، درابزين حديد، وهناجر بأفضل الأسعار.", '/services');

const services = [
  {
    title: "أبواب ليزر وقص",
    desc: "تصاميم عصرية وتقنيات قص دقيقة بالليزر تضفي لمسة من الفخامة والحداثة على واجهة منزلك.",
    img: "/media/geometric-metal-gate.jpeg"
  },
  {
    title: "أبواب كريتال خارجية",
    desc: "أبواب رئيسية قوية ومتينة بتصاميم كلاسيكية أو حديثة، مع ضمان الأمان والمظهر الجمالي.",
    img: "/media/wood-look-metal-gate.jpeg"
  },
  {
    title: "شبابيك حديد وحماية",
    desc: "تصاميم حماية أنيقة للنوافذ لا تحجب الرؤية أو الضوء، وتوفر الأمان التام لعائلتك.",
    img: "/media/carport-and-window-grille.jpeg"
  },
  {
    title: "درابزين سلالم وبلكونات",
    desc: "تفصيل درابزين حديد بأشكال هندسية مبتكرة للسلالم الداخلية والخارجية والشرفات.",
    img: "/media/staircase-and-glass-room.jpeg"
  },
  {
    title: "مظلات وسواتر",
    desc: "تركيب مظلات للسيارات والحدائق، وسواتر جدارية للخصوصية بتصاميم متينة ومقاومة للعوامل الجوية.",
    img: "/media/carport-and-pergola.jpeg"
  },
  {
    title: "أعمال حدادة مخصصة",
    desc: "تفصيل أي أفكار أو تصاميم خاصة يطلبها العميل من أثاث معدني، ديكورات جدارية، أو هياكل حديدية.",
    img: "/media/workers-installation.jpeg"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-stone-50 pb-24">
      {/* Page Header */}
      <div className="bg-white py-20 border-b border-stone-200 text-center">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">خدماتنا المتميزة</h1>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">تشكيلة واسعة من خدمات الحدادة والكريتال لتلبية كافة متطلباتك الإنشائية والديكورية.</p>
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ScrollReveal delay={0.1 * (i % 3)} key={i}>
              <div className="h-full bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-xl hover:border-amber-200 transition-all duration-300 group">
                <div className="aspect-[4/3] relative overflow-hidden bg-stone-100">
                  <Image sizes="(max-width: 768px) 100vw, 50vw"
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-stone-900 mb-3">{service.title}</h3>
                  <p className="text-stone-600 mb-6 leading-relaxed">{service.desc}</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors">
                    <span>طلب الخدمة</span>
                    <ArrowLeft size={18} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Process CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="bg-stone-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
          <h2 className="text-3xl font-bold mb-6 relative z-10">كيف نعمل؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mb-10">
            <div>
              <div className="w-12 h-12 bg-amber-500 text-stone-900 rounded-full flex items-center justify-center font-black text-xl mx-auto mb-4">1</div>
              <h4 className="font-bold text-xl mb-2">المعاينة والقياس</h4>
              <p className="text-stone-400">زيارة الموقع وأخذ المقاسات بدقة</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-amber-500 text-stone-900 rounded-full flex items-center justify-center font-black text-xl mx-auto mb-4">2</div>
              <h4 className="font-bold text-xl mb-2">التصميم والاتفاق</h4>
              <p className="text-stone-400">اختيار التصميم المناسب وعرض السعر</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-amber-500 text-stone-900 rounded-full flex items-center justify-center font-black text-xl mx-auto mb-4">3</div>
              <h4 className="font-bold text-xl mb-2">التنفيذ والتركيب</h4>
              <p className="text-stone-400">التصنيع باحترافية والتركيب في الموعد</p>
            </div>
          </div>
          <Link href="/contact" className="inline-block relative z-10 bg-amber-500 text-stone-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-400 transition-colors">
            تواصل معنا للبدء
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
}
