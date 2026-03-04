const companies = [
  "TechCorp",
  "InnovateLab",
  "CloudBase",
  "DataFlow",
  "SmartHR",
  "NexGen",
];

export default function TrustedBy() {
  return (
    <section className="py-12 lg:py-16 border-y border-gray-100 bg-gray-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray mb-8">
          500+ şirketin güvendiği yetenek değerlendirme platformu
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {companies.map((company) => (
            <div
              key={company}
              className="text-xl lg:text-2xl font-bold text-gray-300 hover:text-gray transition-colors cursor-default select-none"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
