import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function UserTypes() {
  const users = [
    {
      type: "Learners",
      description: "Dive into Kaggle courses, competitions & forums.",
      image: "https://www.kaggle.com/static/images/landing-page/learner.svg"
    },
    {
      type: "Developers",
      description: "Leverage Kaggle's models, notebooks & datasets.",
      image: "https://www.kaggle.com/static/images/landing-page/developer.svg"
    },
    {
      type: "Researchers",
      description: "Advance ML with our pre-trained model hub & competitions.",
      image: "https://www.kaggle.com/static/images/landing-page/researcher.svg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-[32px] font-bold mb-12 text-[#1A1A1A]">Who's on Kaggle?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {users.map((user, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-24 h-24 flex-shrink-0">
                <img src={user.image} alt={user.type} className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-1">{user.type}</h3>
                <p className="text-[#4C4C4C] leading-relaxed">{user.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-8 text-[#4C4C4C] hover:text-[#1A1A1A] flex items-center text-sm font-medium">
          See more
          <ChevronDownIcon className="w-4 h-4 ml-1" />
        </button>
      </div>
    </section>
  );
}