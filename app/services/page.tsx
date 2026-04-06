import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | NovaMark Agency",
  description: "SEO, Social Media, Paid Ads, Web Design and more.",
};

const services = [
  {
    icon: "🔍",
    title: "SEO Optimization",
    description: "We audit your website, fix technical issues, build quality backlinks, and create content strategies that push you to the top of Google search results.",
    features: ["Technical SEO audit", "Keyword research", "On-page optimization", "Link building", "Monthly reporting"],
    price: "From $499/month",
  },
  {
    icon: "📱",
    title: "Social Media Marketing",
    description: "We manage your social media presence end-to-end — content creation, scheduling, community management, and growth strategy across all platforms.",
    features: ["Content creation", "Daily posting", "Community management", "Growth strategy", "Analytics reports"],
    price: "From $399/month",
  },
  {
    icon: "🎯",
    title: "Paid Advertising",
    description: "We create and manage high-converting Google Ads and Meta Ads campaigns that bring you qualified leads and maximise your return on ad spend.",
    features: ["Google Ads", "Meta Ads", "Campaign setup", "A/B testing", "Weekly optimization"],
    price: "From $599/month",
  },
  {
    icon: "🌐",
    title: "Web Design & Development",
    description: "We design and build fast, beautiful, mobile-first websites that convert visitors into customers and represent your brand professionally.",
    features: ["Custom design", "Mobile responsive", "SEO ready", "Fast loading", "CMS integration"],
    price: "From $1,200 one-time",
  },
  {
    icon: "✍️",
    title: "Content Marketing",
    description: "We create compelling blog posts, articles, and website copy that ranks on Google, educates your audience, and drives organic traffic.",
    features: ["Blog writing", "Website copy", "Email newsletters", "Content strategy", "SEO optimized"],
    price: "From $299/month",
  },
  {
    icon: "📊",
    title: "Analytics & Reporting",
    description: "We set up proper tracking, build custom dashboards, and deliver clear monthly reports so you always know your exact ROI.",
    features: ["GA4 setup", "Custom dashboards", "Monthly reports", "Conversion tracking", "ROI analysis"],
    price: "From $199/month",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="bg-purple-100 text-purple-600 font-bold text-sm px-4 py-2 rounded-full">
            What We Offer
          </span>
          <h1 className="text-5xl font-black text-gray-900 mt-4 mb-4">
            Our Services
          </h1>
          <p className="text-gray-500 text-xl">
            Full-service digital marketing to grow your business online.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid md:grid-cols-2 gap-8 items-center p-8 rounded-2xl border border-gray-100 hover:border-purple-300 hover:shadow-lg transition-all ${
                index % 2 === 1 ? "bg-purple-50" : "bg-white"
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-3xl font-black text-gray-900 mb-3">{service.title}</h2>
                <p className="text-gray-500 text-lg mb-4">{service.description}</p>
                <div className="text-purple-600 font-black text-xl mb-6">{service.price}</div>
                <Link
                  href="/contact"
                  className="bg-purple-600 text-white font-bold px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
                >
                  Get Started →
                </Link>
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h4 className="font-black text-gray-900 mb-4">What's Included:</h4>
                  <ul className="flex flex-col gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-600">
                        <span className="text-purple-600 font-black">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-purple-600 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-purple-200 text-lg mb-8">
            Get a free consultation and custom strategy for your business.
          </p>
          <Link
            href="/contact"
            className="bg-white text-purple-600 font-black text-lg px-10 py-4 rounded-full hover:bg-purple-50 transition-colors"
          >
            Get Free Quote →
          </Link>
        </div>
      </section>
    </main>
  );
}