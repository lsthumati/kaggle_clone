export default function ProjectSection() {
  const stats = [
    { number: "475K", label: "DATASETS" },
    { number: "1.4M", label: "NOTEBOOKS" },
    { number: "20,700", label: "MODELS" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Tackle your next project with Kaggle
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              On Kaggle you'll find all the resources and knowledge needed for your next real-world ML project.
            </p>
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://www.kaggle.com/static/images/landing-page/datasets-screenshot.png"
              alt="Kaggle Datasets Interface"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}