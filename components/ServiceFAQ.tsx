const items = [
  {
    "question": "ما الخدمات التي يقدمها حداد كريتال جدة؟",
    "answer": "نقدم أبواب الليزر والكريتال، الشبابيك الحديدية والحماية، درابزين السلالم والبلكونات، المظلات والسواتر، وأعمال الحدادة المخصصة."
  },
  {
    "question": "هل تغطون جميع أحياء جدة؟",
    "answer": "نخدم جميع أحياء ومناطق مدينة جدة وضواحيها، وتُحدد إمكانية المعاينة حسب موقع المشروع."
  },
  {
    "question": "كيف تبدأون تنفيذ المشروع؟",
    "answer": "تبدأ الخطوات بالمعاينة وأخذ المقاسات، ثم اختيار التصميم والاتفاق على عرض السعر، وبعد ذلك التصنيع والتركيب."
  },
  {
    "question": "ما أوقات العمل؟",
    "answer": "نعمل من السبت إلى الخميس من الساعة 08:00 صباحًا حتى 10:00 مساءً. يرجى التواصل للتأكد من ترتيبات يوم الجمعة."
  },
  {
    "question": "كيف أتواصل لطلب استشارة أو عرض سعر؟",
    "answer": "يمكن الاتصال على 0545334871 أو مراسلتنا عبر واتساب."
  }
];
export default function ServiceFAQ() {
 const schema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
 return <section id="faq" lang="ar" dir="rtl" className="bg-stone-50 py-16 px-4 sm:px-6">
   <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
   <div className="max-w-4xl mx-auto">
     <h2 className="text-2xl sm:text-3xl font-bold mb-8">الأسئلة الشائعة عن خدمات الحدادة والكريتال في جدة</h2>
     {items.map((item, index) => <details key={item.question} className="border-b border-stone-200 py-4">
       <summary className="cursor-pointer font-bold py-2 leading-relaxed">{item.question}</summary>
       <p className="pt-3 leading-8 text-stone-700">{index === items.length - 1 ? <>يمكن الاتصال على <a className="underline" href="tel:+966545334871"><bdi>0545334871</bdi></a> أو مراسلتنا عبر <a className="underline" href="https://wa.me/966545334871">واتساب</a>.</> : item.answer}</p>
     </details>)}
   </div>
 </section>;
}
