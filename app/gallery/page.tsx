import { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'معرض الأعمال',
  description: 'تصفح سابقة أعمالنا في مشاريع الحدادة والكريتال في مدينة جدة: صور وفيديوهات لتفصيل الأبواب، الشبابيك، الدرابزين، والمظلات على أرض الواقع.',
};

const images = [
  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782239615/WhatsApp_Image_2026-06-23_at_7.09.59_AM_5_pumwsb.jpg",
  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782239615/WhatsApp_Image_2026-06-23_at_7.09.59_AM_4_vu6nlo.jpg",
  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782239616/WhatsApp_Image_2026-06-23_at_7.09.59_AM_3_juz0ky.jpg",
  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782239616/WhatsApp_Image_2026-06-23_at_7.09.59_AM_2_k7funx.jpg",
  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782239616/WhatsApp_Image_2026-06-23_at_7.09.59_AM_1_w0mbqt.jpg",
  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782239617/WhatsApp_Image_2026-06-23_at_7.09.59_AM_ebmko4.jpg",
  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782239618/WhatsApp_Image_2026-06-23_at_7.09.58_AM_4_iylo11.jpg",
  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782239618/WhatsApp_Image_2026-06-23_at_7.10.00_AM_xgp0e6.jpg",
  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782239623/WhatsApp_Image_2026-06-23_at_7.09.58_AM_1_chfzm5.jpg",
  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782239623/WhatsApp_Image_2026-06-23_at_7.09.57_AM_2_s9pkrs.jpg",
  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782239623/WhatsApp_Image_2026-06-23_at_7.09.58_AM_2_m61zpr.jpg",
  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782239624/WhatsApp_Image_2026-06-23_at_7.09.57_AM_1_p4cath.jpg",
  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782239627/WhatsApp_Image_2026-06-23_at_7.09.57_AM_jznpct.jpg",
  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782239627/WhatsApp_Image_2026-06-23_at_7.09.58_AM_exu7rb.jpg"
];

const videos = [
  "https://res.cloudinary.com/dxvjqrb9l/video/upload/v1782239621/WhatsApp_Video_2026-06-23_at_7.09.58_AM_r6ngot.mp4",
  "https://res.cloudinary.com/dxvjqrb9l/video/upload/v1782239628/WhatsApp_Video_2026-06-23_at_7.09.58_AM_1_ahzq2n.mp4"
];

export default function GalleryPage() {
  return (
    <div className="bg-white pb-24">
      <div className="bg-stone-50 py-20 border-b border-stone-200 text-center">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">معرض الأعمال</h1>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">تصفح سابقة أعمالنا في مشاريع الحدادة والكريتال في مدينة جدة والمناطق المحيطة بها.</p>
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="mb-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-stone-900 mb-10 flex items-center gap-4">
              <span className="w-12 h-1 bg-amber-500 rounded-full inline-block"></span>
              فيديوهات من أرض الواقع
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {videos.map((video, index) => (
              <ScrollReveal delay={0.1 * index} key={index} className="rounded-3xl overflow-hidden shadow-xl bg-stone-100 aspect-video relative group border border-stone-200">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster={images[index + 5]}
                >
                  <source src={video} type="video/mp4" />
                </video>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div>
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-stone-900 mb-10 flex items-center gap-4">
              <span className="w-12 h-1 bg-amber-500 rounded-full inline-block"></span>
              معرض الصور
            </h2>
          </ScrollReveal>
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {images.map((img, index) => (
              <ScrollReveal delay={0.05 * (index % 4)} key={index} className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-stone-100">
                <Image 
                  src={img} 
                  alt={`عمل كريتال ${index + 1}`}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  unoptimized
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
