import { Users, Sparkles, Wifi, Music, type LucideIcon } from 'lucide-react';

interface Vehicle {
  image: string;
  title: string;
  capacity: string;
  features: string[];
}

const vehicles: Vehicle[] = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/royall%2Fimg%2Fsedans-black.webp',
    title: 'Executive Sedan',
    capacity: 'Up to 3 passengers',
    features: ['Leather Interior', 'Climate Control', 'WiFi Available', 'Premium Sound'],
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/royall%2Fimg%2Fblack-suv-luxuosa.webp',
    title: 'Luxury SUV',
    capacity: 'Up to 6 passengers',
    features: [
      'Spacious Interior',
      'Entertainment System',
      'Tinted Windows',
      'Extra Luggage Space',
    ],
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/royall%2Fimg%2Flimo-vinhedo.webp',
    title: 'Stretch Limousine',
    capacity: 'Up to 8 passengers',
    features: ['Bar Service', 'LED Lighting', 'Premium Audio', 'Privacy Partition'],
  },
];

interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    icon: Sparkles,
    title: 'Immaculate',
    description: 'Spotless vehicles detailed before every ride',
  },
  {
    icon: Wifi,
    title: 'Connected',
    description: 'WiFi and charging available in all vehicles',
  },
  {
    icon: Music,
    title: 'Entertainment',
    description: 'Premium sound systems for your enjoyment',
  },
  {
    icon: Users,
    title: 'Any Size',
    description: 'Vehicles for individuals to large groups',
  },
];

function Fleet() {
  return (
    <section id="fleet" className="py-20 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Our Fleet
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Luxury Vehicles for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Every Occasion
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Our meticulously maintained fleet features the latest luxury vehicles, ensuring comfort,
            style, and reliability for every journey.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.title}
              className="group bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{vehicle.title}</h3>
                <p className="text-yellow-400 font-semibold mb-4 flex items-center">
                  <Users size={18} className="mr-2" />
                  {vehicle.capacity}
                </p>
                <div className="space-y-2">
                  {vehicle.features.map((feature) => (
                    <div key={feature} className="flex items-center text-gray-300">
                      <Sparkles size={16} className="text-yellow-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-yellow-400/10 via-yellow-600/5 to-yellow-400/10 border border-yellow-400/30 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-center">
            {highlights.map((highlight) => (
              <div key={highlight.title}>
                <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon size={32} className="text-yellow-400" />
                </div>
                <h4 className="text-white font-bold text-xl mb-2">{highlight.title}</h4>
                <p className="text-gray-400">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fleet;
