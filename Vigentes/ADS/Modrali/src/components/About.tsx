import { Award, Shield, Truck } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://storage.lucasmendes.dev/site-sp/lojamodrali/heeero.png"
              alt="MODRALI - Vantagens"
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00476F] mb-4">
              Sobre a MODRALI
            </h2>
            <div className="w-20 h-1 bg-[#FF8337] mb-6 rounded-full" />

            <p className="text-gray-600 text-base leading-relaxed mb-4">
              A MODRALI atua desde 1994 oferecendo soluções de alta qualidade em
              sistemas hidráulicos para transporte, indústria, agricultura e
              mineração.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Com um time especializado, infraestrutura moderna e parcerias com
              marcas renomadas, nos destacamos na distribuição, manutenção e
              instalação de sistemas hidráulicos. Eficiência, inovação e
              excelência em cada projeto.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: Award,
                  title: 'Experiência desde 1994',
                  description: 'Mais de 30 anos de expertise no mercado'
                },
                {
                  icon: Shield,
                  title: 'Qualidade Garantida',
                  description: 'Parcerias com marcas renomadas do setor'
                },
                {
                  icon: Truck,
                  title: 'Atendimento Completo',
                  description: 'Vendas, instalação e manutenção especializada'
                }
              ].map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="bg-[#FF8337] rounded-full p-2.5 flex-shrink-0">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#00476F] mb-0.5">{title}</h3>
                    <p className="text-gray-500 text-sm">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
