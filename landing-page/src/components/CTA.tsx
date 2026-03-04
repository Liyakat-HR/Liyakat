export default function CTA() {
  return (
    <section id="cta" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl gradient-bg p-10 lg:p-20 text-center overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-6 left-6 w-20 h-20 border-2 border-white/20 rounded-2xl rotate-12" />
          <div className="absolute bottom-8 right-8 w-32 h-32 border-2 border-white/10 rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-white/30 rounded-full" />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/20 rounded-full" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
              Doğru yeteneği bulmaya
              <br />
              bugün başlayın
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              14 gün ücretsiz deneyin. Kredi kartı gerekmez. Dakikalar içinde
              ilk değerlendirmenizi oluşturun.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-2xl font-semibold text-base hover:bg-gray-50 transition-colors shadow-lg"
              >
                Ücretsiz Hesap Oluştur
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-base hover:bg-white/10 transition-colors"
              >
                Demo Talep Et
              </a>
            </div>

            <p className="mt-6 text-sm text-white/50">
              Kurulum 5 dakika &middot; Sınırsız aday &middot; İstediğiniz
              zaman iptal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
