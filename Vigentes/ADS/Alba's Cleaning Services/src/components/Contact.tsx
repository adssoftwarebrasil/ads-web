import { Star, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '');
    const phone = String(data.get('phone') || '');
    const email = String(data.get('email') || '');
    const service = String(data.get('service') || '');
    const message = String(data.get('message') || '');
    const body = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AService: ${service}%0AMessage: ${message}`;
    window.location.href = `mailto:contact@albascleaningservices.com?subject=Free Estimate Request&body=${body}`;
  };

  return (
    <section id="contact">
      <section id="contact" className="bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-black mb-4 sm:mb-6">
            Get Your Free Estimate
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
            Ready to reclaim your time? Contact us today for a free, no-obligation estimate tailored
            to your specific cleaning needs.
          </p>
          <div className="flex items-center justify-center space-x-2 text-base sm:text-lg font-medium text-yellow-600">
            <Star className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" />
            <span>100% Satisfaction Guaranteed</span>
            <Star className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center bg-gray-50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-3 sm:p-4 rounded-full inline-block mb-3 sm:mb-4">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-black mb-2">Call Us</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">
                Speak directly with our team
              </p>
              <a
                href="tel:8607786773"
                className="text-base sm:text-lg font-semibold text-black hover:text-yellow-600 transition-colors duration-200 break-all"
              >
                (860) 778-6773
              </a>
            </div>
            <div className="text-center bg-gray-50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-3 sm:p-4 rounded-full inline-block mb-3 sm:mb-4">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-black mb-2">Email Us</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">
                Send us a detailed message
              </p>
              <a
                href="mailto:contact@albascleaningservices.com"
                className="text-base sm:text-lg font-semibold text-black hover:text-yellow-600 transition-colors duration-200 break-all"
              >
                contact@albascleaningservices.com
              </a>
            </div>
            <div className="text-center bg-gray-50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-3 sm:p-4 rounded-full inline-block mb-3 sm:mb-4">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-black mb-2">
                Service Area
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">Serving in Connecticut</p>
              <p className="text-base sm:text-lg font-semibold text-black">Connecticut</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black mb-3 sm:mb-4">
              Request Your Free Estimate
            </h3>
            <p className="text-lg sm:text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours with a personalized
              quote.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200 text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200 text-sm sm:text-base"
                    placeholder="(860) 123-4567"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200 text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-black mb-2">
                  Service of Interest *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200 text-sm sm:text-base"
                >
                  <option value="">Select a service</option>
                  <option value="residential-one-time">Residential - One Time</option>
                  <option value="residential-weekly">Residential - Weekly</option>
                  <option value="residential-biweekly">Residential - Bi-weekly</option>
                  <option value="residential-monthly">Residential - Monthly</option>
                  <option value="commercial">Commercial/Office Cleaning</option>
                  <option value="move-in-out">Move In/Out Cleaning</option>
                  <option value="not-sure">Not Sure - Need Consultation</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200 text-sm sm:text-base"
                  placeholder="Tell us about your cleaning needs, home size, special requests, or any questions you have..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Send Request - Get Free Estimate
              </button>
            </form>
            <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-600">
              <p>We respect your privacy and will never share your information with third parties.</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
