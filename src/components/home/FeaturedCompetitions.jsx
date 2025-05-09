export default function FeaturedCompetitions() {
  const competitions = [
    {
      id: 1,
      title: "Playground Series - Season 4, Episode 3",
      description: "Binary classification with a bank marketing dataset",
      prize: "$1,000",
      deadline: "7 days left",
      participants: 1234
    },
    {
      id: 2,
      title: "March Machine Learning Mania 2024",
      description: "Predict the 2024 NCAA Basketball Tournament",
      prize: "$25,000",
      deadline: "14 days left",
      participants: 2567
    },
    {
      id: 3,
      title: "AI Village Capture The Flag",
      description: "Test your AI security knowledge",
      prize: "$10,000",
      deadline: "30 days left",
      participants: 987
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Competitions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions.map((competition) => (
            <div key={competition.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">{competition.title}</h3>
              <p className="text-gray-600 mb-4">{competition.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-green-600 font-medium">{competition.prize}</span>
                <span className="text-gray-500">{competition.deadline}</span>
              </div>
              <div className="mt-4 pt-4 border-t">
                <span className="text-sm text-gray-600">
                  {competition.participants.toLocaleString()} participants
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}