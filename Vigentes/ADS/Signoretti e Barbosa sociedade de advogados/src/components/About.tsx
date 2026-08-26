import { CheckCircle, Instagram, MapPin } from 'lucide-react';
import { WHATSAPP_URL, INSTAGRAM_URL } from '../constants';

const BENEFITS = [
  'Advogados altamente qualificados e especializados',
  'Atendimento personalizado para cada cliente',
  'Tecnologia e capacitação profissional contínua',
  'Atualização constante sobre mudanças legislativas',
  'Atendimento presencial e à distância em todo Brasil',
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Escritório Signoretti & Barbosa"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10202F]/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white rounded-2xl shadow-xl p-6 max-w-[220px]">
              <img
                src="https://storage.lucasmendes.dev/site-sp/signorettiebarbosa/Logo%20Oficial%20fundo%20branco.jpg"
                alt="Signoretti & Barbosa"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="absolute -top-6 -left-6 lg:-left-10 bg-[#10202F] rounded-2xl shadow-xl p-5">
              <div className="text-[#EB7104] text-3xl font-bold">10+</div>
              <div className="text-white/80 text-xs mt-1 font-medium">Anos de<br />Experiência</div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-[#EB7104]/10 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#EB7104] text-xs font-semibold tracking-widest uppercase">
                Quem Somos
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10202F] leading-tight mb-6">
              Advocacia ética,<br />
              <span className="text-[#EB7104]">transparente</span><br />
              e inovadora
            </h2>
            <p className="text-[#10202F]/60 text-base leading-relaxed mb-6">
              Somos um escritório de advocacia comprometido com a excelência jurídica e a satisfação de nossos clientes. Nossa equipe é composta por advogados altamente qualificados, com vasta experiência e especialização em diferentes ramos do direito.
            </p>
            <p className="text-[#10202F]/60 text-base leading-relaxed mb-8">
              Investimos continuamente em tecnologia e capacitação profissional, garantindo que nossos advogados estejam sempre atualizados com as mais recentes mudanças legislativas e jurisprudenciais.
            </p>
            <ul className="flex flex-col gap-3 mb-10">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle
                    width={18}
                    height={18}
                    className="lucide lucide-check-circle text-[#EB7104] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-[#10202F]/70 text-sm">{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#EB7104] hover:bg-[#d46303] text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
              >
                Agendar Consulta
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-[#10202F]/20 hover:border-[#10202F] text-[#10202F]/70 hover:text-[#10202F] px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
              >
                <Instagram width={16} height={16} className="lucide lucide-instagram " />
                @signorettiebarbosa.adv
              </a>
            </div>
            <div className="mt-8 flex items-start gap-3 bg-[#f8f9fb] rounded-2xl p-4">
              <MapPin
                width={16}
                height={16}
                className="lucide lucide-map-pin text-[#EB7104] flex-shrink-0 mt-0.5"
              />
              <div>
                <p className="text-[#10202F]/80 text-sm font-medium">
                  Rua Júlio de Castilho, n. 228-S, Sala 04
                </p>
                <p className="text-[#10202F]/50 text-xs mt-0.5">
                  Centro, Lucas do Rio Verde/MT — CEP 78460-017
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
