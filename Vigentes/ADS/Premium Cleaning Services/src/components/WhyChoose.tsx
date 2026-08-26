import { Clock, Users, CheckCircle, Leaf, type LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  { icon: Clock, title: '13+ Years Experience', description: 'Over a decade of professional cleaning excellence' },
  { icon: Users, title: '500+ Happy Clients', description: 'Trusted by hundreds of satisfied customers' },
  { icon: CheckCircle, title: 'Always Punctual', description: 'We respect your time and arrive as scheduled' },
  { icon: Leaf, title: 'Eco-Friendly Options', description: 'Safe, green cleaning products available' },
];

export default function WhyChoose() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C2A39] mb-4">Why Choose Velura Clean?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver excellence through experience, dedication, and attention to detail
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="text-center p-6 rounded-xl bg-[#F5F5F5] hover:bg-[#EAE9E4] transition-all hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF78] rounded-full mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1C2A39] mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
