import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      '"Alba\'s Cleaning Services transformed our home! They\'re thorough, reliable, and the team is always professional. Having them clean weekly has given me so much more time with my family."',
    name: 'Sarah Johnson',
    location: 'CT',
  },
  {
    quote:
      '"We\'ve used Alba\'s for our office cleaning for over a year. They\'re consistent, detail-oriented, and work around our schedule perfectly. Highly recommend for any business."',
    name: 'Mike Chen',
    location: 'CT',
  },
  {
    quote:
      '"The move-out cleaning service was incredible. Alba\'s team left our old house spotless, which helped us get our full deposit back. Worth every penny!"',
    name: 'Lisa Rodriguez',
    location: 'CT',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-black mb-4 px-4">
            What Our Customers Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Don't just take our word for it. Here's what families and businesses in Connecticut are
            saying about our services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">{t.quote}</p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-black">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
