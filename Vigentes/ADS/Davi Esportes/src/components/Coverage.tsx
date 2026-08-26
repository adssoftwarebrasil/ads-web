import { MapPin } from 'lucide-react';

const regions = ['Santa Catarina', 'Rio Grande do Sul', 'Região Oeste'];

export default function Coverage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#363435] mb-4">Onde Atendemos</h2>
          <p className="text-2xl text-gray-600 mb-8">Em toda região Oeste de Santa Catarina e Rio Grande do Sul</p>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <MapPin size={64} className="text-[#FDF341]" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {regions.map((region) => (
              <span
                key={region}
                className="bg-[#363435] text-[#FDF341] px-6 py-3 rounded-full text-lg font-bold shadow-md hover:scale-105 transition-transform inline-block"
              >
                {region}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
