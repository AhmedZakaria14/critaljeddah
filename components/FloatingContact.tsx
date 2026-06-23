import { MessageCircle, Phone } from 'lucide-react';

const phoneNumber = "0545334871";
const whatsappUrl = `https://wa.me/966545334871`;

export default function FloatingContact() {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      <a 
        href={`tel:${phoneNumber}`}
        className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] hover:-translate-y-2 transition-all duration-300"
        aria-label="اتصل بنا"
      >
        <Phone size={30} className="fill-current" />
      </a>
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] hover:-translate-y-2 transition-all duration-300"
        aria-label="تواصل عبر الواتساب"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
