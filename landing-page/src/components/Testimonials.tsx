const testimonials = [
  {
    name: "Ayşe Kaya",
    role: "HR Direktörü",
    company: "TechVenture",
    quote:
      "TalentScope ile işe alım süremiz %60 kısaldı. Artık adayları CV yerine gerçek yetenekleriyle değerlendiriyoruz.",
    avatar: "AK",
    rating: 5,
  },
  {
    name: "Mehmet Demir",
    role: "İnsan Kaynakları Müdürü",
    company: "InnovateTech",
    quote:
      "AI destekli raporlama özelliği harika. Hangi adayın pozisyona en uygun olduğunu verilerle görüyoruz.",
    avatar: "MD",
    rating: 5,
  },
  {
    name: "Zeynep Arslan",
    role: "Kurucu & CEO",
    company: "StartupHub",
    quote:
      "50 kişilik ekibimizi TalentScope ile kurduk. Her pozisyon için özelleştirilmiş testler işimizi çok kolaylaştırdı.",
    avatar: "ZA",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Müşteri Yorumları
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            Müşterilerimiz{" "}
            <span className="gradient-text">ne diyor?</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg
                    key={j}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-dark">{t.name}</p>
                  <p className="text-xs text-gray">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
