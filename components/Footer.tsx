import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-black text-white mb-3">
              Nova<span className="text-purple-400">Mark</span>
            </div>
            <p className="text-sm text-gray-400">
              Digital marketing that delivers real, measurable results for your business.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Services</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/services" className="hover:text-purple-400">SEO Optimization</Link></li>
              <li><Link href="/services" className="hover:text-purple-400">Social Media</Link></li>
              <li><Link href="/services" className="hover:text-purple-400">Paid Advertising</Link></li>
              <li><Link href="/services" className="hover:text-purple-400">Web Design</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Company</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/about" className="hover:text-purple-400">About Us</Link></li>
              <li><Link href="/services" className="hover:text-purple-400">Our Services</Link></li>
              <li><Link href="/contact" className="hover:text-purple-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Contact</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>📍 Casablanca, Morocco</li>
              <li>📞 +212 600 000 000</li>
              <li>✉️ hello@novamark.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          © {new Date().getFullYear()} NovaMark Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}