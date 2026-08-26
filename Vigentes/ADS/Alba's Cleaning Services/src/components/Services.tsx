import { Home, Building2, Truck, type LucideIcon } from 'lucide-react';
import { scrollToId } from '../lib/scroll';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Home,
    title: 'Residential Cleaning',
    description:
      "Complete home cleaning services tailored to your family's needs. From weekly maintenance to deep cleaning, we ensure every room sparkles.",
    features: [
      'Kitchen and bathroom deep cleaning',
      'Bedroom and living area organization',
      'Floor care for all surface types',
      'Flexible scheduling options',
    ],
  },
  {
    icon: Building2,
    title: 'Commercial Cleaning',
    description:
      'Professional office and commercial space cleaning to maintain a productive work environment for your team and impressive space for clients.',
    features: [
      'Office spaces and conference rooms',
      'Reception and common areas',
      'Restroom sanitization',
      'Flexible scheduling around business hours',
    ],
  },
  {
    icon: Truck,
    title: 'Move In/Out Cleaning',
    description:
      "Comprehensive cleaning for moving transitions. Whether you're preparing to sell or settling into your new home, we handle the details.",
    features: [
      'Deep cleaning all rooms and surfaces',
      'Cabinet and appliance interior cleaning',
      'Window and baseboard detail work',
      'Pre and post-move options available',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-black mb-4 px-4">
            Our Professional Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            From homes to offices, we provide comprehensive cleaning solutions designed to give you
            more time for what matters most.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map(({ icon: Icon, title, description, features }) => (
            <div
              key={title}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6 hover:shadow-xl transition-all duration-300 group h-full flex flex-col"
            >
              <div className="mb-4">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-3 rounded-lg inline-block group-hover:scale-110 transition-transform duration-200">
                  <Icon className="h-6 w-6 text-black" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-black mb-3 group-hover:text-yellow-600 transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  {description}
                </p>
                <ul className="space-y-2 mb-6">
                  {features.map((f) => (
                    <li key={f} className="flex items-start space-x-2">
                      <div className="bg-yellow-100 rounded-full p-1 mt-0.5">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => scrollToId('contact')}
                className="w-full bg-black text-white py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-800 transition-colors duration-200 group-hover:bg-yellow-500 group-hover:text-black"
              >
                Get Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
