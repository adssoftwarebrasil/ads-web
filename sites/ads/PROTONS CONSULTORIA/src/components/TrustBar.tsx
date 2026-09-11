import { Building2, Factory, ShoppingBag, Briefcase, Hotel, Truck } from 'lucide-react';

export default function TrustBar() {
  const sectors = [
    { icon: Factory, label: 'Indústria' },
    { icon: ShoppingBag, label: 'Comércio' },
    { icon: Briefcase, label: 'Serviços' },
    { icon: Hotel, label: 'Hotelaria' },
    { icon: Truck, label: 'Logística' },
    { icon: Building2, label: 'Construção' },
  ];

  return (
    <section className="py-12 bg-[#e5e8e6]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-[#2c2c5b] font-semibold text-lg">
            Empresas que confiam em nossa expertise
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {[...sectors, ...sectors].map((sector, index) => {
              const Icon = sector.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 flex flex-col items-center justify-center group cursor-default"
                  style={{ minWidth: '120px' }}
                >
                  <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-3 group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-[#a7b4bd] group-hover:text-[#2c2c5b] transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-[#2c2c5b] opacity-0 group-hover:opacity-100 transition-opacity">
                    {sector.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
