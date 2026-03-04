const steps = [
  {
    step: "01",
    title: "Değerlendirme Oluşturun",
    description:
      "Pozisyona özel test kombinasyonu seçin veya AI önerilerini kullanarak ideal değerlendirmeyi oluşturun.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Adayları Davet Edin",
    description:
      "Tek bir link ile tüm adaylarınızı davet edin. E-posta, SMS veya ATS üzerinden otomatik gönderim.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Sonuçları Analiz Edin",
    description:
      "AI destekli raporlar ile adayları karşılaştırın. En uygun adayı veriye dayalı olarak seçin.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-gray-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Nasıl Çalışır
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            3 adımda <span className="gradient-text">işe alımı</span> dönüştürün
          </h2>
          <p className="mt-4 text-lg text-gray">
            Karmaşık süreçlere son. Dakikalar içinde profesyonel değerlendirmeler oluşturun.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, i) => (
            <div key={i} className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/30 to-primary/5" />
              )}

              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-3xl gradient-bg text-white mb-6 shadow-lg shadow-primary/20">
                {item.icon}
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shadow-md">
                  {item.step}
                </span>
              </div>

              <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
              <p className="text-sm text-gray leading-relaxed max-w-xs mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
