export default function Hero() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-2xl mb-10 lg:mb-0">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              Level up with the largest AI & ML community
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join over 23M+ machine learners to share, stress test, and stay up-to-date on all the latest ML techniques and technologies. Discover a huge repository of community-published models, data & code for your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center px-6 py-3 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 transition-colors">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google" className="h-5 mr-2" />
                Register with Google
              </button>
              <button className="px-6 py-3 rounded-lg bg-[#20BEFF] text-white hover:bg-[#1A95CC] transition-colors">
                Register with Email
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://www.kaggle.com/static/images/landing-page/hero-illustration.svg"
              alt="Community Illustration"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}