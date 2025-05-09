export default function FeaturedDatasets() {
  const datasets = [
    {
      id: 1,
      title: "World University Rankings 2024",
      owner: "Times Higher Education",
      size: "2.3MB",
      lastUpdated: "1 day ago",
      usability: 10
    },
    {
      id: 2,
      title: "Netflix Movies and TV Shows",
      owner: "Netflix",
      size: "5.1MB",
      lastUpdated: "3 days ago",
      usability: 9.5
    },
    {
      id: 3,
      title: "Global Weather Data",
      owner: "NOAA",
      size: "15.7MB",
      lastUpdated: "1 week ago",
      usability: 8.8
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Datasets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {datasets.map((dataset) => (
            <div key={dataset.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">{dataset.title}</h3>
              <p className="text-gray-600 mb-4">By {dataset.owner}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">{dataset.size}</span>
                <span className="text-gray-500">Updated {dataset.lastUpdated}</span>
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-blue-600">{dataset.usability}</span>
                  <span className="text-sm text-gray-600 ml-2">Usability Score</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}