const stats = [
  {
    value: "10M+",
    label: "Tamamlanan Test",
    description: "Dünya genelinde",
  },
  {
    value: "500+",
    label: "Kurumsal Müşteri",
    description: "Güvenle kullanıyor",
  },
  {
    value: "%92",
    label: "Doğru Eşleşme",
    description: "İşe alım başarısı",
  },
  {
    value: "3x",
    label: "Daha Hızlı",
    description: "İşe alım süreci",
  },
];

export default function Stats() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl gradient-bg p-10 lg:p-16 overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3" />

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl lg:text-5xl font-extrabold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-lg font-semibold text-white/90 mb-1">
                  {stat.label}
                </p>
                <p className="text-sm text-white/60">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
