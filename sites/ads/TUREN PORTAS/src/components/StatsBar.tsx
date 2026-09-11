import { Award, Star, MapPin, Clock } from 'lucide-react';

export default function StatsBar() {
  return (
    <section className="bg-[#005143] border-t border-b border-[#ECC4A4]/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors duration-200">
            <div className="flex justify-center">
              <Award width={28} height={28} className="text-[#DE8F52]" />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-tight">Desde 2020</p>
              <p className="text-[#ECC4A4]/70 text-sm mt-0.5">Fundada em Agosto</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors duration-200">
            <div className="flex justify-center">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} width={20} height={20} className="text-[#DE8F52] fill-[#DE8F52]" />
                ))}
              </div>
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-tight">5.0 Estrelas</p>
              <p className="text-[#ECC4A4]/70 text-sm mt-0.5">Avaliação no Google</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors duration-200">
            <div className="flex justify-center">
              <MapPin width={28} height={28} className="text-[#DE8F52]" />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-tight">Sinop e Região</p>
              <p className="text-[#ECC4A4]/70 text-sm mt-0.5">Área de Atendimento</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors duration-200">
            <div className="flex justify-center">
              <Clock width={28} height={28} className="text-[#DE8F52]" />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-tight">Seg–Sex</p>
              <p className="text-[#ECC4A4]/70 text-sm mt-0.5">07:30–11:30 | 13:30–17:30</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
