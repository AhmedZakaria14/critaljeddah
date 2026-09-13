import { pageMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = pageMetadata("معرض أعمال الحدادة | أفضل حداد في جدة", "تصفح سابقة أعمالنا وصور مشاريع الحدادة والكريتال في مدينة جدة. أعمال مميزة لتفصيل الأبواب، الشبابيك، الدرابزين، والمظلات بإشراف أفضل حداد بجدة.", '/gallery');

const images = [
  "/media/workers-installation.jpeg",
  "/media/steel-stock.jpeg",
  "/media/roof-frame.jpeg",
  "/media/painted-steel-profile.jpeg",
  "/media/wood-look-metal-gate.jpeg",
  "/media/roof-tile-sample.jpeg",
  "/media/metal-shop-materials.jpeg",
  "/media/red-metal-door.jpeg",
  "/media/staircase-and-glass-room.jpeg",
  "/media/carport-and-pergola.jpeg",
  "/media/geometric-metal-gate.jpeg",
  "/media/floating-steel-staircase.jpeg",
  "/media/carport-and-window-grille.jpeg",
  "/media/roof-installation.jpeg",
];

const imageDescriptions = ["فنيون أثناء تركيب أعمال حديد في جدة", "خامات وقطاعات حديد داخل الورشة", "هيكل حديد لتجهيز سقف", "قطاعات حديد مطلية بعد التجهيز", "بوابة حديد بتشطيب خشبي", "عينة قرميد لتغطية الأسقف", "مواد وأدوات ورشة الحدادة", "باب حديد باللون الأحمر", "سلم حديد وغرفة زجاجية", "مظلة سيارة وبرجولة حديد", "بوابة حديد بتصميم هندسي", "سلم حديد بتصميم معلق", "مظلة سيارة وشباك حماية حديد", "تنفيذ وتركيب هيكل سقف"];

const videos = [
  {
    src: "/media/wood-look-metal-door.mp4",
    poster: "/media/wood-look-metal-gate.jpeg",
  },
  {
    src: "/media/arched-wood-look-metal-door.mp4",
    poster: "/media/red-metal-door.jpeg",
  },
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
                  controls preload="none" playsInline
                  className="w-full h-full object-cover"
                  poster={video.poster}
                >
                  <source src={video.src} type="video/mp4" />
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
                <Image sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  src={img}
                  alt={imageDescriptions[index]}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"

                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
