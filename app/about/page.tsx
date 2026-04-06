import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | NovaMark Agency",
  description: "Learn about NovaMark — who we are, our mission and our team.",
};

const team = [
  { name: "Adam Benali", role: "CEO & Founder", emoji: "👨‍💼" },
  { name: "Sara Idrissi", role: "Head of SEO", emoji: "👩‍💻" },
  { name: "Mehdi Tazi", role: "Paid Ads Specialist", emoji: "👨‍💻" },
  { name: "Nadia Chraibi", role: "Social Media Manager", emoji: "👩‍🎨" },
];

const values = [
  { icon: "🎯", title: "Results First", description: "We only celebrate when our clients grow." },
  { icon: "🔍", title: "Transparency", description: "No hidden fees, no confusing reports. Just clear results." },
  { icon: "⚡", title: "Speed", description: "We move fast and execute without excuses." },
  { icon: "🤝", title: "Partnership", description: "We treat your business like it's our own." },
];

export default function AboutPage() {
  return (
    <main className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="bg-purple-100 text-purple-600 font-bold text-sm px-4 py-2 rounded-full">
            Who We Are
          </span>
          <h1 className="text-5xl font-black text-gray-900 mt-4 mb-4">
            About NovaMark
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto">
            A results-driven digital marketing agency based in Casablanca,
            helping businesses across Morocco and beyond grow online.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-500 text-lg mb-4">
              NovaMark was founded in 2018 with one goal: help Moroccan businesses
              compete and win online. We saw too many great businesses being
              invisible on the internet, losing customers to competitors with
              inferior products but better digital presence.
            </p>
            <p className="text-gray-500 text-lg mb-4">
              Today we work with over 200 businesses across Morocco, Europe,
              and the Middle East, delivering measurable growth through SEO,
              paid advertising, social media, and web design.
            </p>
            <p className="text-gray-500 text-lg">
              Every campaign we run is built on data, tested rigorously, and
              optimised continuously — because your budget deserves results,
              not experiments.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "2018", label: "Founded" },
              { number: "200+", label: "Clients" },
              { number: "8.5x", label: "Avg ROAS" },
              { number: "98%", label: "Retention" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-purple-50 rounded-2xl p-8 text-center border border-purple-100"
              >
                <div className="text-4xl font-black text-purple-600">{stat.number}</div>
                <div className="text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-purple-300 transition-colors"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Meet The Team</h2>
          <p className="text-gray-500 text-lg">The people behind your growth.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-purple-50 rounded-2xl p-8 text-center border border-purple-100 hover:border-purple-400 transition-colors"
            >
              <div className="text-6xl mb-4">{member.emoji}</div>
              <div className="font-black text-gray-900 text-lg">{member.name}</div>
              <div className="text-purple-600 text-sm font-bold">{member.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-purple-600 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            Let's Grow Together
          </h2>
          <p className="text-purple-200 text-lg mb-8">
            Book a free consultation and let's talk about your business goals.
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