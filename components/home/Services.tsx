import Link from "next/link";

const services = [
  {
    icon: "🔍",
    title: "SEO Optimization",
    description: "Rank higher on Google and drive organic traffic that converts into real customers.",
  },
  {
    icon: "📱",
    title: "Social Media Marketing",
    description: "Build a loyal audience and turn followers into paying customers across all platforms.",
  },
  {
    icon: "🎯",
    title: "Paid Advertising",
    description: "Google Ads and Meta Ads campaigns that deliver maximum ROI for every dirham spent.",
  },
  {
    icon: "🌐",
    title: "Web Design",
    description: "Beautiful, fast, conversion-focused websites that make your brand stand out.",
  },
  {
    icon: "✍️",
    title: "Content Marketing",
    description: "Compelling content that educates your audience and positions you as an industry leader.",
  },
  {
    icon: "📊",
    title: "Analytics & Reporting",
    description: "Clear, data-driven reports so you always know exactly what your investment is delivering.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="bg-purple-100 text-purple-600 font-bold text-sm px-4 py-2 rounded-full">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Everything you need to dominate your market online.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-purple-300 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-gray-900 font-black text-xl mb-2">{service.title}</h3>
              <p className="text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="bg-purple-600 text-white font-black px-8 py-4 rounded-full hover:bg-purple-700 transition-colors"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}