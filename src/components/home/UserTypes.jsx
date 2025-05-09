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
        <h2 className="text-3xl font-bold mb-12 text-gray-900">Who's on Kaggle?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {users.map((user, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img src={user.image} alt={user.type} className="w-16 h-16" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{user.type}</h3>
                <p className="text-gray-600">{user.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-8 text-gray-600 hover:text-gray-900 flex items-center">
          See more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}