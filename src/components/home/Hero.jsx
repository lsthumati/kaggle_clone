import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <div className="bg-white pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="max-w-2xl mb-10 lg:mb-0">
            <h1 className="text-[56px] leading-[1.1] font-bold mb-6 text-[#1A1A1A]">
              Level up with the largest AI & ML community
            </h1>
            <p className="text-xl leading-relaxed text-[#4C4C4C] mb-8 max-w-xl">
              Join over 23M+ machine learners to share, stress test, and stay up-to-date on all the latest ML techniques and technologies. Discover a huge repository of community-published models, data & code for your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center px-6 py-3 rounded-lg bg-white border border-[#E5E5E5] hover:border-[#B3B3B3] transition-colors text-sm font-medium">
                <img 
                  src="https://www.kaggle.com/static/images/google-signin-icon.svg" 
                  alt="Google" 
                  className="h-5 mr-3"
                />
                Register with Google
              </button>
              <button className="px-6 py-3 rounded-lg bg-[#20BEFF] text-white hover:bg-[#1A95CC] transition-colors text-sm font-medium">
                Register with Email
              </button>
            </div>
          </div>
          <div className="lg:w-[45%]">
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