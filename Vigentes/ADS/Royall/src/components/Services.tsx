import { Plane, Briefcase, Heart, Wine, type LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  image: string;
  title: string;
  description: string;
  tags: string[];
}

const services: Service[] = [
  {
    icon: Plane,
    image:
      'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Airport Limo Service',
    description:
      'Premium transportation to and from SFO, OAK, SJC and private airports. Experience punctuality, comfort, and safety with every journey.',
    tags: ['Flight Tracking', 'Meet & Greet', 'Luggage Assistance'],
  },
  {
    icon: Briefcase,
    image:
      'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Corporate & Executive',
    description:
      'Professional transportation for executives, corporate events, and business meetings. Discretion, reliability, and excellence guaranteed.',
    tags: ['Business Class Service', 'VIP Treatment', 'Conference Ready'],
  },
  {
    icon: Heart,
    image: 'https://storage.lucasmendes.dev/site-sp/royall%2Fimg%2Fnoiva-limosine.webp',
    title: 'Special Events & Weddings',
    description:
      'Make your special day unforgettable with our luxury transportation. Elegant, comfortable, and worry-free service for weddings, proms, and exclusive events.',
    tags: ['Red Carpet Service', 'Champagne Available', 'Photo Opportunities'],
  },
  {
    icon: Wine,
    image:
      'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Wine Tours',
    description:
      'Enjoy personalized wine tours through Napa Valley & Sonoma in luxury vehicles. Savor the experience with complete comfort and safety.',
    tags: ['Custom Itineraries', 'Multiple Wineries', 'Designated Driver'],
  },
];

function Services() {
  const scrollToBook = () => {
    const el = document.getElementById('book-now');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Premium Transportation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              for Every Occasion
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            From airport transfers to special celebrations, we provide luxury transportation
            services tailored to your needs across the San Francisco Bay Area.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/30 rounded-full flex items-center justify-center">
                      <service.icon size={24} className="text-yellow-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={scrollToBook}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <span>Book Any Service Now</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
