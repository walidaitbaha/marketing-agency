const reasons = [
  {
    icon: "📊",
    title: "Data-Driven Approach",
    description: "Every decision we make is backed by real data and analytics, not guesswork.",
  },
  {
    icon: "🎯",
    title: "Results Focused",
    description: "We measure success by your growth — leads, sales, and revenue, not vanity metrics.",
  },
  {
    icon: "🤝",
    title: "Transparent Reporting",
    description: "You get clear monthly reports showing exactly where your budget goes and what it returns.",
  },
  {
    icon: "⚡",
    title: "Fast Execution",
    description: "We move fast. Most campaigns go live within 48 hours of onboarding.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-purple-100 text-purple-600 font-bold text-sm px-4 py-2 rounded-full">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
              We Deliver Results
              <span className="block text-purple-600">Not Promises</span>
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              We've helped over 200 businesses grow their online presence
              and revenue. Here's what makes us different.
            </p>
            <a
              href="/contact"
              className="bg-purple-600 text-white font-black px-8 py-4 rounded-full hover:bg-purple-700 transition-colors"
            >
              Work With Us →
            </a>
          </div>
          <div className="flex flex-col gap-4">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 flex gap-4 items-start hover:border-purple-300 transition-colors"
              >
                <div className="text-3xl">{reason.icon}</div>
                <div>
                  <h3 className="font-black text-gray-900 text-lg mb-1">{reason.title}</h3>
                  <p className="text-gray-500">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}