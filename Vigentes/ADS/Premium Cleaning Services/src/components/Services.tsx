import { Sparkles, ArrowRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: 'Regular Cleaning',
    description: 'Consistent, reliable cleaning to keep your home spotless.',
    image: 'https://iili.io/KZxKsse.jpg',
  },
  {
    title: 'Deep Cleaning',
    description: 'Thorough top-to-bottom cleaning for exceptional results.',
    image: 'https://iili.io/KwXUSEB.jpg',
  },
  {
    title: 'Move-In/Out Cleaning',
    description: 'Complete cleaning for transitions and deposit returns.',
    image:
      'https://storage-admin.lucasmendes.dev/api/v1/buckets/velura/objects/download?preview=true&prefix=img%2Fcleaning.jpg',
  },
  {
    title: 'Post-Construction',
    description: 'Remove dust and debris after renovation projects.',
    image:
      'https://storage-admin.lucasmendes.dev/api/v1/buckets/velura/objects/download?preview=true&prefix=img%2Fpost-constructon.jpg',
  },
  {
    title: 'Airbnb Cleaning',
    description: 'Fast turnarounds for vacation rentals and guests.',
    image: 'https://iili.io/KwXU6kg.jpg',
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-[#EAE9E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C2A39] mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive cleaning solutions tailored to your needs
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-6 h-6 text-[#B59C6B]" />
                  <h3 className="text-xl font-semibold text-[#1C2A39]">{s.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{s.description}</p>
                <button className="text-[#D4AF78] font-semibold hover:text-[#B59C6B] inline-flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-[#D4AF78] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B59C6B] transition-all hover:scale-105">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
