const categories = [
  {
    title: "Bilişsel Yetenek",
    description: "Sayısal, sözel ve mantıksal akıl yürütme testleri",
    count: "45+ Test",
    color: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50",
    textColor: "text-violet-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Teknik Beceriler",
    description: "Programlama, veri analizi, tasarım ve mühendislik testleri",
    count: "120+ Test",
    color: "from-blue-500 to-cyan-500",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Kişilik & Davranış",
    description: "Big Five, DISC ve kültürel uyum değerlendirmeleri",
    count: "30+ Test",
    color: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    title: "Dil Yetkinliği",
    description: "İngilizce, Almanca, Fransızca ve diğer dil seviye testleri",
    count: "25+ Test",
    color: "from-orange-500 to-amber-500",
    bgLight: "bg-orange-50",
    textColor: "text-orange-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
  },
];

export default function TestCategories() {
  return (
    <section id="tests" className="py-20 lg:py-28 bg-gray-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Test Kategorileri
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            Her pozisyon için{" "}
            <span className="gradient-text">doğru testler</span>
          </h2>
          <p className="mt-4 text-lg text-gray">
            300&apos;den fazla bilimsel test ile adaylarınızı her açıdan değerlendirin.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient accent top */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div className="flex items-start gap-5">
                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${cat.bgLight} ${cat.textColor} flex items-center justify-center`}>
                  {cat.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-dark">{cat.title}</h3>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${cat.bgLight} ${cat.textColor}`}>
                      {cat.count}
                    </span>
                  </div>
                  <p className="text-sm text-gray leading-relaxed">
                    {cat.description}
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
