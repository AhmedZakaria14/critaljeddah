import { pageMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = pageMetadata("تواصل معنا | رقم حداد بجدة", "هل تبحث عن رقم حداد بجدة؟ تواصل معنا الآن للحصول على أفضل خدمات الحدادة والكريتال. اتصل الآن أو راسلنا عبر الواتساب لتفصيل الأبواب والشبابيك بأفضل الأسعار.", '/contact');

const phoneNumber = "0545334871";
const whatsappUrl = `https://wa.me/966545334871`;

export default function ContactPage() {
  return (
    <div className="bg-stone-50 pb-24">
      <div className="bg-white py-20 border-b border-stone-200 text-center">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">تواصل معنا</h1>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">نحن هنا للإجابة على استفساراتكم وتلقي طلباتكم خلال أوقات العمل.</p>
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div>
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-stone-900 mb-8">معلومات الاتصال</h2>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal delay={0.1}>
                <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                  <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2">رقم الجوال</h3>
                    <p className="text-stone-500 mb-2">للاتصال المباشر وطلب الاستشارات المجانية</p>
                    <a href={`tel:${phoneNumber}`} className="text-2xl font-bold text-amber-600" dir="ltr">{phoneNumber}</a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                  <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2">واتساب</h3>
                    <p className="text-stone-500 mb-2">لإرسال المخططات والصور والمقاسات</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-green-600 hover:text-green-700 transition-colors">مراسلة عبر واتساب</a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2">موقعنا</h3>
                    <p className="text-stone-600">المملكة العربية السعودية، جدة</p>
                    <p className="text-stone-500 text-sm mt-1">نغطي كافة أحياء ومناطق مدينة جدة وضواحيها</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                  <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2">أوقات العمل</h3>
                    <p className="text-stone-600">من السبت إلى الخميس</p>
                    <p className="text-stone-500 font-bold mt-1">08:00 صباحاً - 10:00 مساءً</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Quick Contact Form Placeholder / Call to Action Map */}
          <ScrollReveal delay={0.3} className="bg-stone-900 rounded-3xl p-10 text-white relative overflow-hidden flex flex-col justify-center text-center shadow-2xl h-full">
             <div className="absolute inset-0 bg-[url('/media/workers-installation.jpeg')] bg-cover bg-center opacity-10"></div>
             <div className="relative z-10 min-w-0">
               <h3 className="text-3xl font-bold mb-6">هل لديك مشروع قادم؟</h3>
               <p className="text-stone-400 text-lg mb-10 leading-relaxed">
                 لا تتردد في التواصل معنا. فريقنا مستعد لتلبية كافة متطلباتك وتقديم استشارة مجانية وعرض سعر دقيق لمشروعك.
               </p>

               <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex justify-center items-center gap-3 bg-amber-500 text-stone-900 px-8 py-5 rounded-2xl font-bold text-xl transition-all hover:bg-amber-400 hover:scale-105 mb-4 w-full"
                >
                  <Phone size={24} />
                  <span>اتصل الآن</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-3 bg-white/10 text-white px-8 py-5 rounded-2xl font-bold text-xl transition-all hover:bg-white/20 w-full mt-4 backdrop-blur-sm"
                >
                  <MessageCircle size={24} className="text-green-400" />
                  <span>مراسلة واتساب</span>
                </a>
             </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
}
