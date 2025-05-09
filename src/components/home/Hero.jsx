export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Kaggle
          </h1>
          <p className="text-xl mb-8">
            Join the world's largest data science community and compete in machine learning challenges
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100">
              Join Kaggle
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">
              View Competitions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}