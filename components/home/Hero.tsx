import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="bg-purple-100 text-purple-600 font-bold text-sm px-4 py-2 rounded-full">
            🚀 Digital Marketing Agency
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mt-6 mb-6 leading-tight">
            Grow Your Business
            <span className="block text-purple-600">Online Fast</span>
          </h1>
          <p className="text-gray-600 text-xl mb-8 leading-relaxed">
            We help businesses dominate their market with data-driven SEO,
            social media, paid ads, and stunning web design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-purple-600 text-white font-black text-lg px-8 py-4 rounded-full hover:bg-purple-700 transition-colors text-center"
            >
              Get Free Quote →
            </Link>
            <Link
              href="/services"
              className="border-2 border-purple-600 text-purple-600 font-bold text-lg px-8 py-4 rounded-full hover:bg-purple-50 transition-colors text-center"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Right side visual */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { emoji: "📈", title: "SEO Growth", value: "+320%" },
            { emoji: "🎯", title: "Ad ROAS", value: "8.5x" },
            { emoji: "📱", title: "Social Reach", value: "+50K" },
            { emoji: "💰", title: "Revenue Growth", value: "+180%" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-2">{item.emoji}</div>
              <div className="text-2xl font-black text-purple-600">{item.value}</div>
              <div className="text-gray-500 text-sm font-medium">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}