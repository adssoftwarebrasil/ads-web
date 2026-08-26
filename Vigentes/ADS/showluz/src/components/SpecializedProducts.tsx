import { Activity, Stethoscope, CheckCircle } from 'lucide-react';

export default function SpecializedProducts() {
  const hospitalApplications = [
    'Equipamentos de Raio X',
    'Endoscópios e Videoscópios',
    'Focos Cirúrgicos',
    'Microscópios Cirúrgicos',
    'Equipamentos de Esterilização'
  ];

  const dentalApplications = [
    'Fotopolimerizadores',
    'Focos Odontológicos',
    'Equipamentos de Diagnóstico',
    'Autoclaves',
    'Luminárias Clínicas'
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#010510] to-[#1a1a2e] border-t border-[#00a6ff]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Lâmpadas Especializadas
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Expertise em lâmpadas para equipamentos hospitalares e odontológicos de todas as marcas e modelos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-[#1a1a2e] rounded-2xl shadow-xl overflow-hidden border border-[#00a6ff]/20">
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src="https://storage.lucasmendes.dev/site-sp/showluz%2FFOCO%20CIR%C3%9ARGICO.png"
                alt="Lâmpadas Hospitalares"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-[#00a6ff] rounded-lg flex items-center justify-center">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Lâmpadas Hospitalares
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-300 mb-6 leading-relaxed">
                Fornecemos lâmpadas para todos os equipamentos hospitalares, garantindo qualidade e precisão em procedimentos médicos.
              </p>

              <h4 className="font-semibold text-white mb-4">Principais Aplicações:</h4>
              <ul className="space-y-3">
                {hospitalApplications.map((app, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00a6ff] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#1a1a2e] rounded-2xl shadow-xl overflow-hidden border border-[#00a6ff]/20">
            <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-[#00a6ff]/20 to-[#010510] flex items-center justify-center">
              <div className="w-32 h-32 bg-[#00a6ff]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#00a6ff]/30">
                <Stethoscope className="w-16 h-16 text-[#fff457]" />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-[#fff457] rounded-lg flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-[#010510]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Lâmpadas Odontológicas
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-300 mb-6 leading-relaxed">
                Soluções específicas para consultórios e clínicas odontológicas, com produtos de alta performance e durabilidade.
              </p>

              <h4 className="font-semibold text-white mb-4">Principais Aplicações:</h4>
              <ul className="space-y-3">
                {dentalApplications.map((app, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00a6ff] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5562993950049"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#fff457] text-[#010510] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#ffe621] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Consulte Disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}
