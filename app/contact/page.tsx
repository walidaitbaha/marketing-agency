"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <main className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="bg-purple-100 text-purple-600 font-bold text-sm px-4 py-2 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-5xl font-black text-gray-900 mt-4 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-500 text-xl">
            Get a free consultation and custom strategy for your business.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              Let's Talk About Your Growth
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Fill in the form and one of our specialists will get back to
              you within 24 hours with a free strategy proposal.
            </p>
            <div className="flex flex-col gap-6">
              {[
                { icon: "📍", title: "Location", value: "Casablanca, Morocco" },
                { icon: "📞", title: "Phone", value: "+212 600 000 000" },
                { icon: "✉️", title: "Email", value: "hello@novamark.com" },
                { icon: "🕐", title: "Response Time", value: "Within 24 hours" },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <div className="font-black text-gray-900">{item.title}</div>
                    <div className="text-gray-500">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                type="email"
                className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <input
                type="tel"
                className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors"
                placeholder="Your Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <select
                className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors text-gray-500"
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                required
              >
                <option value="">Select a Service</option>
                <option value="seo">SEO Optimization</option>
                <option value="social">Social Media Marketing</option>
                <option value="ads">Paid Advertising</option>
                <option value="web">Web Design</option>
                <option value="content">Content Marketing</option>
                <option value="analytics">Analytics & Reporting</option>
              </select>
              <textarea
                className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                placeholder="Tell us about your business and goals..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-purple-600 text-white font-black text-lg py-4 rounded-full hover:bg-purple-700 transition-colors disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send Message →"}
              </button>
              {status === "success" && (
                <p className="text-green-600 text-center font-bold">
                  ✅ Message sent! We'll reply within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-center">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}