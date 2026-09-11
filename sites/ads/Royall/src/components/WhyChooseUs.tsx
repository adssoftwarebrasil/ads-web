import {
  Car,
  UserCheck,
  Clock,
  DollarSign,
  Shield,
  Headphones,
  type LucideIcon,
} from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Car,
    title: 'Premium Fleet',
    description:
      'Modern, luxury vehicles meticulously maintained to the highest standards for your comfort and safety.',
  },
  {
    icon: UserCheck,
    title: 'Professional Chauffeurs',
    description:
      'Licensed, experienced, and trained drivers dedicated to providing exceptional service and safe journeys.',
  },
  {
    icon: Clock,
    title: 'Punctuality Guaranteed',
    description:
      'On-time service, every time. We track flights and adjust schedules to ensure you never wait.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description:
      'Premium luxury transportation at fair, transparent rates with no hidden fees or surprises.',
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description:
      'Complete commercial vehicle insurance coverage for your peace of mind on every ride.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'Round-the-clock availability and rapid communication to serve you whenever you need us.',
  },
];

function WhyChooseUs() {
  const scrollToBook = () => {
    const el = document.getElementById('book-now');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="why-choose-us"
      className="py-20 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Us?
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Excellence in Every
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Detail
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We don't just provide transportation—we deliver an experience. Here's what sets Royal
            Ride apart from the rest.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400/50 hover:bg-black/70 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <feature.icon size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-r from-yellow-400/10 via-yellow-600/10 to-yellow-400/10 border border-yellow-400/30 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Experience Luxury?</h3>
              <p className="text-gray-300 text-lg mb-6">
                Join hundreds of satisfied clients who trust Royal Ride for their transportation
                needs. Book your ride today and discover the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToBook}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
                >
                  Reserve Now
                </button>
                <a
                  href="tel:5103162021"
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all duration-300 text-center"
                >
                  Call (510) 316-2021
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/royall%2Fimg%2Fblack-suv.webp"
                alt="Professional chauffeur"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
