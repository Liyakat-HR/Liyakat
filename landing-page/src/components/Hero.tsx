export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              AI Destekli Değerlendirme
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Doğru Yeteneği{" "}
              <span className="gradient-text">Keşfedin,</span>
              <br />
              Doğru Kararı Verin
            </h1>

            <p className="mt-6 text-lg text-gray max-w-xl leading-relaxed">
              Bilimsel testler ve yapay zeka ile adaylarınızın gerçek
              potansiyelini ölçün. CV&apos;nin ötesine geçin, veriye dayalı işe
              alım yapın.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 text-white gradient-bg px-8 py-4 rounded-2xl font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
              >
                Hemen Başla — Ücretsiz
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 px-8 py-4 rounded-2xl font-semibold text-base text-dark hover:border-primary hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Nasıl Çalışır?
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex items-center gap-6 text-sm text-gray">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Kredi kartı gerekmez
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                5 dakikada kurulum
              </div>
            </div>
          </div>

          {/* Right - Dashboard mockup */}
          <div className="animate-fade-in-up animate-float" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl shadow-primary/10 border border-gray-100 p-6 lg:p-8">
                {/* Mock dashboard header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-gray">Aday Değerlendirmesi</p>
                    <h3 className="font-bold text-dark">Frontend Developer</h3>
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                    Aktif
                  </div>
                </div>

                {/* Progress bars */}
                <div className="space-y-4">
                  {[
                    { label: "Teknik Bilgi", score: 92, color: "bg-primary" },
                    { label: "Problem Çözme", score: 87, color: "bg-secondary" },
                    { label: "İletişim", score: 78, color: "bg-accent" },
                    { label: "Kültürel Uyum", score: 95, color: "bg-success" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium text-dark-light">{item.label}</span>
                        <span className="font-bold text-dark">{item.score}%</span>
                      </div>
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${item.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom stat cards */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                  {[
                    { value: "4.8", label: "Puan" },
                    { value: "23dk", label: "Süre" },
                    { value: "Top 5%", label: "Sıralama" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-3 bg-gray-light rounded-xl"
                    >
                      <p className="text-lg font-bold text-dark">{stat.value}</p>
                      <p className="text-xs text-gray">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark">+340 Aday</p>
                    <p className="text-xs text-gray">Bu hafta değerlendirildi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
