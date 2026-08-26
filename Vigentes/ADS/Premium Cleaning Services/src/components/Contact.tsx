import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#1C2A39] to-[#2A3F57] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Get Your Free Estimate Today</h2>
            <p className="text-xl text-gray-300 mb-8">
              Fill out the form and we'll get back to you within 24 hours with a customized quote for your cleaning
              needs.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#D4AF78] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Call Us Directly</div>
                  <a href="tel:+14156322837" className="text-[#D4AF78] hover:text-[#B59C6B] transition-colors">
                    +14156322837
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#D4AF78] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <a href="mailto:contact@veluraclean.com" className="text-[#D4AF78] hover:text-[#B59C6B] transition-colors">
                    contact@veluraclean.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <h3 className="text-2xl font-bold text-[#1C2A39] mb-4">Request a Free Quote</h3>
              <div>
                <label className="block text-sm font-semibold text-[#1C2A39] mb-2">Full Name *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF78] text-[#1C2A39]"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#1C2A39] mb-2">Email *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF78] text-[#1C2A39]"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1C2A39] mb-2">Phone *</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF78] text-[#1C2A39]"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1C2A39] mb-2">Service Needed *</label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF78] text-[#1C2A39]"
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  <option value="">Select a service</option>
                  <option value="Regular Cleaning">Regular Cleaning</option>
                  <option value="Deep Cleaning">Deep Cleaning</option>
                  <option value="Move-In / Move-Out Cleaning">Move-In / Move-Out Cleaning</option>
                  <option value="Post-Construction Cleaning">Post-Construction Cleaning</option>
                  <option value="Vacation Rental / Airbnb Cleaning">Vacation Rental / Airbnb Cleaning</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1C2A39] mb-2">Message (Optional)</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF78] text-[#1C2A39]"
                  placeholder="Tell us about your cleaning needs..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#D4AF78] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#B59C6B] transition-all hover:scale-105 disabled:bg-gray-300 disabled:cursor-not-allowed text-lg"
              >
                Get Free Quote
              </button>
              <p className="text-center text-sm text-gray-600">We'll respond within 24 hours</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
