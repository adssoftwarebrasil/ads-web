import { Star, Quote } from 'lucide-react';

interface Testimonial {
  image: string;
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    image:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    name: 'James Mitchell',
    role: 'Corporate Executive',
    text: 'Royal Ride has been our go-to transportation service for all corporate events. Their professionalism and attention to detail are unmatched. The vehicles are pristine, and the drivers are always punctual.',
  },
  {
    image:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    name: 'Sarah Thompson',
    role: 'Bride',
    text: 'Our wedding day was made even more special thanks to Royal Ride. The limousine was stunning, and the service was impeccable. They went above and beyond to ensure everything was perfect.',
  },
  {
    image:
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    name: 'Michael Chen',
    role: 'Frequent Traveler',
    text: 'I travel to SFO at least twice a month, and Royal Ride is my only choice. They track my flights and are always on time, even when my flight is delayed. Truly reliable service.',
  },
  {
    image:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    name: 'Emily Rodriguez',
    role: 'Event Planner',
    text: 'As an event planner, I need transportation services I can trust. Royal Ride consistently delivers excellence. Their communication is prompt, and they handle groups of any size with ease.',
  },
  {
    image:
      'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
    name: 'David Anderson',
    role: 'Wine Enthusiast',
    text: 'The wine tour through Napa Valley was incredible! Our driver was knowledgeable, the vehicle was luxurious, and we could relax and enjoy the experience without any worries. Highly recommend!',
  },
  {
    image:
      'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
    name: 'Lisa Johnson',
    role: 'Family Client',
    text: 'We used Royal Ride for a memorial service, and they were incredibly compassionate and professional. They handled everything with such care and respect during a difficult time.',
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Clients
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Say About Us
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about their
            experience with Royal Ride.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400/30"
                />
                <div className="ml-4">
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="relative">
                <Quote size={32} className="absolute -top-2 -left-2 text-yellow-400/20" />
                <p className="text-gray-300 leading-relaxed pl-6">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-400/10 via-yellow-600/10 to-yellow-400/10 border border-yellow-400/30 rounded-2xl px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-1">500+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-yellow-400/30"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-1">5.0</div>
                <div className="text-gray-400 flex items-center">
                  <Star size={16} className="text-yellow-400 fill-current mr-1" />
                  Average Rating
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-yellow-400/30"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-1">24/7</div>
                <div className="text-gray-400">Available Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
