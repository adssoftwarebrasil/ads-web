import { MapPin } from 'lucide-react';

export default function CoverageArea() {
  return (
    <section id="informativo" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#004688] via-[#004E9C] to-[#0072BA]"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl mb-10 shadow-2xl">
            <MapPin size={48} strokeWidth={2.5} />
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Onde Atuamos
          </h2>

          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-10"></div>

          <p className="text-xl md:text-2xl leading-relaxed text-blue-50 font-light">
            Atendemos toda a região Sul do Brasil, com maior atuação no Oeste de Santa Catarina.
            Nossos equipamentos estão presentes em obras de construção civil, usinas, PCHs e
            projetos industriais em Chapecó e região.
          </p>
        </div>
      </div>
    </section>
  );
}
