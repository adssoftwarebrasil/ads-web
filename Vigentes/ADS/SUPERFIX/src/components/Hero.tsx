import { ArrowRight, Wrench, Building2, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#0b77aa] bg-opacity-10 text-[#0b77aa] px-4 py-2 rounded-full text-sm font-medium">
              <Wrench size={16} />
              Mais de 10 anos de excelência
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Soluções Completas em{' '}
              <span className="text-[#0b77aa]">Fixação</span> e{' '}
              <span className="text-[#b13437]">Ferramentas</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Distribuidora especializada em materiais de fixação e ferramentas profissionais.
              Atendemos atacado e varejo com as marcas líderes do mercado em todo Mato Grosso.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 py-4">
              <div className="flex items-start gap-3">
                <div className="bg-[#0b77aa] bg-opacity-10 p-2 rounded-lg">
                  <Wrench className="text-[#0b77aa]" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">+10 Anos</p>
                  <p className="text-sm text-gray-600">No mercado</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#b13437] bg-opacity-10 p-2 rounded-lg">
                  <Building2 className="text-[#b13437]" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Atacado</p>
                  <p className="text-sm text-gray-600">& Varejo</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#0b77aa] bg-opacity-10 p-2 rounded-lg">
                  <MapPin className="text-[#0b77aa]" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Mato Grosso</p>
                  <p className="text-sm text-gray-600">Todas regiões</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://storage.lucasmendes.dev/site-sp/supersfix%2Fnovo%2FCATALOGO%20SUPERFIX%20NV-compactado-compactado_compressed.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#0b77aa] text-white px-8 py-4 rounded-lg hover:bg-[#095f88] transition-all font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Ver Catálogo Completo
                <ArrowRight size={20} />
              </a>

              <a
                href="https://wa.me/5566999029696?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20produtos%20da%20SUPERFIX."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-[#0b77aa] px-8 py-4 rounded-lg hover:bg-gray-50 transition-all font-medium text-lg border-2 border-[#0b77aa]"
              >
                Fale Conosco
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/supersfix%2Fnovo%2F2026-01-08.webp"
                alt="Fachada SUPERFIX"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#b13437] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#0b77aa] rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
