export default function ProjectSection() {
  const stats = [
    { number: "475K", label: "DATASETS" },
    { number: "1.4M", label: "NOTEBOOKS" },
    { number: "20,700", label: "MODELS" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          <div className="lg:w-[45%]">
            <h2 className="text-[40px] leading-tight font-bold mb-6 text-[#1A1A1A]">
              Tackle your next project with Kaggle
            </h2>
            <p className="text-xl text-[#4C4C4C] mb-12 leading-relaxed">
              On Kaggle you'll find all the resources and knowledge needed for your next real-world ML project.
            </p>
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-[32px] font-bold text-[#1A1A1A] mb-1">{stat.number}</div>
                  <div className="text-sm text-[#4C4C4C] font-medium tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-[55%]">
            <div className="relative">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#FFE169] rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#20BEFF] rounded-full opacity-30 blur-2xl"></div>
              <img
                src="https://www.kaggle.com/static/images/landing-page/datasets-screenshot.png"
                alt="Kaggle Datasets Interface"
                className="w-full rounded-xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}