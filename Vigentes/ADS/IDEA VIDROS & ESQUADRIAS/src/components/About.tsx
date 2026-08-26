import { Award, Users, Heart, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  text: string;
}

const features: Feature[] = [
  { icon: Award, text: '14 anos de tradição e excelência no mercado' },
  { icon: Users, text: 'Empresa familiar com atendimento humanizado' },
  { icon: Heart, text: 'Compromisso total com a satisfação do cliente' },
  { icon: CheckCircle, text: 'Preço justo e transparência em cada etapa' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipe IDEA Vidros"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#234E72] text-white rounded-2xl p-5 shadow-xl hidden sm:block">
              <div className="text-4xl font-extrabold text-[#EACD68]">14+</div>
              <div className="text-sm font-medium mt-1 leading-tight">
                Anos de<br />Experiência
              </div>
            </div>
            <div className="absolute -top-6 -left-6 bg-[#F60301] text-white rounded-2xl p-4 shadow-xl hidden sm:block">
              <div className="text-3xl font-extrabold">4.5★</div>
              <div className="text-xs font-medium mt-1">Google Reviews</div>
            </div>
          </div>
          <div>
            <span className="inline-block text-[#F60301] text-xs font-bold uppercase tracking-widest mb-3">Nossa História</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#020202] mb-6 leading-tight">
              Referência em Vidros e Esquadrias em <span className="text-[#234E72]">Sorriso e Região</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Nossa empresa atua em Sorriso/MT desde <strong>2012</strong>, somando 14 anos de história construídos com muito trabalho, dedicação e compromisso com nossos clientes. Ao longo desse tempo, nos consolidamos como referência na cidade e em toda a região, sendo reconhecidos como sinônimo de <strong>qualidade, confiança e credibilidade</strong>.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Somos uma <strong>empresa familiar</strong>, o que reflete diretamente na forma como trabalhamos: com proximidade, responsabilidade e cuidado em cada detalhe. Buscamos sempre oferecer preço justo, atendimento humanizado e excelência na execução, do início ao fim de cada projeto.
            </p>
            <ul className="space-y-3 mb-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <li key={feature.text} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#234E72]/10 flex items-center justify-center">
                      <Icon width={16} height={16} className="text-[#234E72]" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{feature.text}</span>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="http://wa.me/556699856445?text=Olá!%20Gostaria%20de%20conhecer%20melhor%20os%20serviços%20da%20IDEA%20Vidros."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#F60301] hover:bg-red-700 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-red-500/30"
              >
                Fale Conosco
              </a>
              <a
                href="https://www.instagram.com/ideavidroseesquadrias/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#234E72] text-[#234E72] hover:bg-[#234E72] hover:text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200"
              >
                Ver no Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
