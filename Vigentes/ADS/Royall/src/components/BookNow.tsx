import { useState, type FormEvent } from 'react';
import { Calendar, MapPin, Users, Send } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  pickup: string;
  destination: string;
  date: string;
  passengers: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  service: '',
  pickup: '',
  destination: '',
  date: '',
  passengers: '',
  message: '',
};

function BookNow() {
  const [form, setForm] = useState<FormData>(initialForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = [
      'New Booking Request',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Service: ${form.service}`,
      `Pickup: ${form.pickup}`,
      `Destination: ${form.destination}`,
      `Date & Time: ${form.date}`,
      `Passengers: ${form.passengers}`,
      `Details: ${form.message}`,
    ].join('\n');
    window.location.href = `sms:5103162021?body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="book-now" className="py-20 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Book Your Ride
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Reserve Your Luxury
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Experience Today
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Fill out the form and we'll send your reservation details directly to our team. You'll
              receive a confirmation within minutes. Prefer to call? We're available 24/7 at (510)
              316-2021.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar size={24} className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Instant Confirmation</h3>
                  <p className="text-gray-400">
                    Receive booking confirmation within minutes of your request.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Flexible Pickup</h3>
                  <p className="text-gray-400">
                    Door-to-door service from any location in the Bay Area.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users size={24} className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Any Group Size</h3>
                  <p className="text-gray-400">
                    Vehicles available for individuals to large groups.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-yellow-400/20">
              <p className="text-gray-400 mb-4">
                <span className="text-white font-semibold">Business Hours:</span> 24/7 Available
              </p>
              <p className="text-gray-400 mb-4">
                <span className="text-white font-semibold">Email:</span>{' '}
                <a
                  href="mailto:royalridelimoservice@gmail.com"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  royalridelimoservice@gmail.com
                </a>
              </p>
              <p className="text-gray-400">
                <span className="text-white font-semibold">Phone:</span>{' '}
                <a
                  href="tel:5103162021"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  (510) 316-2021
                </a>
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20 rounded-2xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-yellow-400/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-yellow-400/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="(510) 123-4567"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-yellow-400/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-white font-semibold mb-2">
                  Service Type *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-yellow-400/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="Airport Transfer">Airport Transfer</option>
                  <option value="Corporate & Executive">Corporate & Executive</option>
                  <option value="Special Events & Weddings">Special Events & Weddings</option>
                  <option value="Wine Tours">Wine Tours (Napa/Sonoma)</option>
                  <option value="Memorial Services">Memorial Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="pickup" className="block text-white font-semibold mb-2">
                    Pickup Location *
                  </label>
                  <input
                    type="text"
                    id="pickup"
                    name="pickup"
                    required
                    value={form.pickup}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-yellow-400/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="San Francisco, CA"
                  />
                </div>
                <div>
                  <label htmlFor="destination" className="block text-white font-semibold mb-2">
                    Destination *
                  </label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    required
                    value={form.destination}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-yellow-400/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="SFO Airport"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-white font-semibold mb-2">
                    Date & Time *
                  </label>
                  <input
                    type="datetime-local"
                    id="date"
                    name="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-yellow-400/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="passengers" className="block text-white font-semibold mb-2">
                    Passengers *
                  </label>
                  <input
                    type="number"
                    id="passengers"
                    name="passengers"
                    required
                    min={1}
                    value={form.passengers}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-yellow-400/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="2"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-yellow-400/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                  placeholder="Any special requests or additional information..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full group flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <span>Send Booking Request</span>
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-gray-400 text-sm text-center">
                By submitting this form, your details will be sent via text message to our team for
                immediate processing.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookNow;
