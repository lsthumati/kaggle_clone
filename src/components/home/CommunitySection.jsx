export default function CommunitySection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Join Our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">3M+ Data Scientists</h3>
            <p className="text-gray-600">
              Connect with data experts from around the world and collaborate on projects.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">50K+ Public Datasets</h3>
            <p className="text-gray-600">
              Access a vast collection of datasets to power your data science projects.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">25K+ Public Notebooks</h3>
            <p className="text-gray-600">
              Learn from shared code and analysis from top data scientists.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}