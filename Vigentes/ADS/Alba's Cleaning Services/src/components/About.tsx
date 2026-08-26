import { CheckCircle, Star, Shield, Clock, type LucideIcon } from 'lucide-react';

interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: CheckCircle,
    title: 'Trained & Efficient Team',
    description:
      'Our professional cleaning specialists are thoroughly trained and background-checked for your peace of mind.',
  },
  {
    icon: Star,
    title: 'Satisfaction 100% Guaranteed',
    description:
      "We stand behind our work with a complete satisfaction guarantee. Not happy? We'll make it right.",
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description:
      'Fully licensed and insured for your protection. Professional service you can trust in your home or office.',
  },
  {
    icon: Clock,
    title: 'Dependable & Affordable',
    description:
      'Reliable service at competitive rates. We respect your time and budget while delivering exceptional results.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-black mb-4 px-4">
            About Us
          </h2>
        </div>
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 md:p-14 shadow-2xl border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-30 -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-50 rounded-full blur-3xl opacity-30 -ml-32 -mb-32"></div>
            <div className="relative">
              <div className="flex items-center justify-center mb-8">
                <div className="h-1 w-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-black mb-10 text-center">
                Our Story
              </h3>
              <div className="flex flex-col lg:flex-row gap-10 items-center mb-8">
                <div className="lg:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl transform rotate-3"></div>
                    <img
                      src="https://iili.io/KjyOq6N.jpg"
                      alt="Alba - Founder of Alba's Cleaning Services"
                      className="relative rounded-2xl shadow-2xl w-full max-w-sm object-cover border-4 border-white"
                    />
                  </div>
                </div>
                <div className="lg:w-2/3 space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p className="text-xl text-gray-800 font-medium">
                    Alba's Cleaning Services began with a simple mission: to care for homes the same
                    way we care for people — with honesty, dedication, and heart.
                  </p>
                  <p>
                    Alba came to the U.S. as an au pair, working as a babysitter while learning the
                    culture and language. After a few years and many challenges, she built a life, a
                    family, and eventually, a business she's proud of. What started with one cleaning
                    on Saturdays quickly grew through word of mouth and trust from her clients.
                  </p>
                  <p>
                    With over 30 years of experience in the cleaning industry, Alba built her company
                    from the ground up — learning from hands-on experience, improving techniques, and
                    always putting care first. She went from working alone to leading a trusted,
                    trained team that delivers high-quality service with integrity.
                  </p>
                  <p>
                    Today, Alba's Cleaning Services is known not just for spotless homes, but for the
                    peace of mind and confidence we give to every client. Many customers trust us so
                    deeply that they rely on us even while traveling — to water plants, check in on
                    their homes, and make sure everything is just right.
                  </p>
                  <p>
                    Beyond her business, Alba is also a proud foster mom, which reflects her deep
                    values of trust, love, and responsibility — the same values that guide how we
                    care for your home.
                  </p>
                </div>
              </div>
              <div className="mt-12 pt-10 border-t border-gray-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-1 w-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
                </div>
                <h4 className="text-2xl md:text-3xl font-serif font-bold text-black mb-6 text-center">
                  Our Mission
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto text-center">
                  Our mission is to offer more than just cleaning services. At ALBA, we create real
                  opportunities for women to build their own path, achieve the American Dream, and
                  have a reliable, dignified, and recognized source of income. We work so that every
                  team member feels valued, part of something greater, and sees the company not just
                  as a job, but as a place of growth, respect, and personal achievement.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black mb-4 px-4">
            Why Choose Alba's Cleaning Services?
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            We're committed to delivering exceptional service that exceeds your expectations, every
            single time.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center group">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 rounded-full inline-block mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-lg font-serif font-bold text-black mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
