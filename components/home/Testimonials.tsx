const testimonials = [
  {
    name: "Youssef Alami",
    role: "CEO, Alami Electronics",
    text: "NovaMark tripled our online sales in just 4 months. Their SEO and ads strategy is on another level.",
    emoji: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Fatima Zahra",
    role: "Founder, ZStyle Fashion",
    text: "Our Instagram went from 2K to 50K followers in 6 months. The team is professional and results-driven.",
    emoji: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Karim Benali",
    role: "Director, Benali Consulting",
    text: "Best investment we made. Our Google Ads now deliver 8x return and leads come in daily.",
    emoji: "⭐⭐⭐⭐⭐",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="bg-purple-100 text-purple-600 font-bold text-sm px-4 py-2 rounded-full">
            Client Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-4">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-purple-50 rounded-2xl p-8 border border-purple-100 hover:border-purple-300 transition-colors"
            >
              <div className="text-xl mb-4">{t.emoji}</div>
              <p className="text-gray-700 text-lg italic mb-6">"{t.text}"</p>
              <div>
                <div className="font-black text-gray-900">{t.name}</div>
                <div className="text-purple-600 text-sm font-bold">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}