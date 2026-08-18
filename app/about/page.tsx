import { Metadata } from 'next';
import Image from 'next/image';
import { Award, Target, Users, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'أفضل حداد في جدة | من نحن',
  description: 'تعرف على أفضل حداد بجدة، ورشة حدادة متخصصة في أعمال الكريتال وتفصيل الأبواب والشبابيك والمظلات بأعلى معايير الجودة والتصميم.',
};

const logoUrl = "/media/logo.png";

export default function AboutPage() {
  return (
    <div className="bg-white pb-24">
      {/* Page Header */}
      <div className="bg-stone-50 py-20 border-b border-stone-200">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">من نحن</h1>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">تعرف على مسيرتنا وخبراتنا في عالم الحدادة وتشكيل المعادن في المملكة العربية السعودية.</p>
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal delay={0.1}>
            <div className="inline-block px-4 py-2 bg-amber-50 text-amber-700 rounded-full font-bold mb-6 border border-amber-100">خبرة تمتد لسنوات</div>
            <h2 className="text-3xl font-bold text-stone-900 mb-6 leading-tight">الرواد في مجال الحدادة والكريتال بجدة</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              نحن مؤسسة رائدة ومتخصصة في تنفيذ كافة أعمال الحدادة والكريتال في مدينة جدة. انطلقنا من رؤية واضحة تهدف إلى تقديم أعلى مستويات الجودة والابتكار في تصميم وتصنيع الأبواب، الشبابيك، الدرابزين، والمظلات.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              نفخر بفريق عملنا المكون من أمهر الحدادين والفنيين الذين يمتلكون خبرة واسعة ولمسة فنية تمكنهم من تحويل الحديد الصامت إلى تحف فنية تنبض بالحياة وتضفي جمالاً ورونقاً خاصاً على منازل عملائنا ومنشآتهم.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 shadow-sm">
                <div className="text-3xl font-black text-amber-600 mb-2">+15</div>
                <div className="text-stone-800 font-bold mb-1">سنة من الخبرة</div>
                <div className="text-stone-500 text-sm">في السوق السعودي</div>
              </div>
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 shadow-sm">
                <div className="text-3xl font-black text-amber-600 mb-2">+500</div>
                <div className="text-stone-800 font-bold mb-1">مشروع منجز</div>
                <div className="text-stone-500 text-sm">بأعلى معايير الجودة</div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3} className="relative">
            <div className="aspect-square bg-stone-100 rounded-[3rem] p-12 flex items-center justify-center border border-stone-200 shadow-inner">
               <div className="relative w-full h-full drop-shadow-2xl">
                 <Image src={logoUrl} alt="شعار المؤسسة" fill className="object-contain" referrerPolicy="no-referrer" />
               </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">قيمنا ومبادئنا</h2>
          <p className="text-stone-500 text-lg">الأسس التي نبني عليها نجاحنا وثقة عملائنا</p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Award, title: "الجودة الفائقة", desc: "نستخدم أفضل خامات الحديد والدهانات العالمية" },
            { icon: Target, title: "الدقة والالتزام", desc: "تسليم المشاريع في الوقت المحدد وبالمواصفات المطلوبة" },
            { icon: Users, title: "رضا العملاء", desc: "غاية ما نسعى إليه هو سعادة عملائنا بالنتيجة النهائية" },
            { icon: Clock, title: "خدمة سريعة", desc: "استجابة فورية لطلبات الصيانة والاستشارات" }
          ].map((item, i) => (
            <ScrollReveal delay={0.1 * (i + 1)} key={i} className="text-center p-8 bg-stone-50 rounded-3xl border border-stone-100 hover:bg-white hover:shadow-xl hover:border-amber-100 transition-all">
              <div className="w-16 h-16 mx-auto bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-6">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
              <p className="text-stone-600">{item.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
