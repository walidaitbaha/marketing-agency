const stats = [
  { number: "200+", label: "Clients Served" },
  { number: "8.5x", label: "Average ROAS" },
  { number: "50M+", label: "Impressions Generated" },
  { number: "98%", label: "Client Retention" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-purple-600">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                {stat.number}
              </div>
              <div className="text-purple-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}