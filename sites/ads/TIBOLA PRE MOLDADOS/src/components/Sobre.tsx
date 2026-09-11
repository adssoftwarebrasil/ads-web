import { CheckCircle2, Award, Users, Truck } from 'lucide-react';

const beneficios = [
  'Empresa familiar com décadas de tradição',
  'Peças fabricadas com concreto de alta resistência',
  'Atendimento personalizado e consultivo',
  'Estoque diversificado para pronta entrega',
  'Preços competitivos sem abrir mão da qualidade',
  'Equipe técnica experiente para orientar sua obra',
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 lg:py-28" style={{ backgroundColor: 'rgb(245, 243, 240)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div
              className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 border"
              style={{
                borderColor: 'rgb(120, 53, 35)',
                color: 'rgb(120, 53, 35)',
                backgroundColor: 'rgba(120, 53, 35, 0.06)',
              }}
            >
              Sobre a Empresa
            </div>
            <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark mb-4 leading-tight">
              Tradição e Confiança
              <br />
              <span style={{ color: 'rgb(120, 53, 35)' }}>desde o início</span>
            </h2>
            <div className="animate-on-scroll section-divider mb-6"></div>
            <p className="animate-on-scroll text-brand-gray2 text-base leading-relaxed mb-4">
              A <strong className="text-brand-dark">Tibola Pré Moldados</strong> é uma empresa
              especializada na fabricação e comercialização de peças de concreto pré-moldado, com
              mais de <strong style={{ color: 'rgb(120, 53, 35)' }}>30 anos de experiência</strong> no
              mercado de Primavera do Leste – MT.
            </p>
            <p className="animate-on-scroll text-brand-gray2 text-base leading-relaxed mb-4">
              Surgida do compromisso com a qualidade e o bom atendimento, nossa empresa cresceu
              atendendo clientes em toda a cidade e região, oferecendo soluções em concreto para
              construção civil, saneamento básico e pecuária.
            </p>
            <p className="animate-on-scroll text-brand-gray2 text-base leading-relaxed mb-8">
              Hoje, seguimos com a mesma essência:{' '}
              <strong className="text-brand-dark">inovação, qualidade e compromisso</strong> com a
              satisfação de cada cliente, oferecendo as melhores soluções em pré-moldados da região.
            </p>
            <div className="animate-on-scroll grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {beneficios.map((b) => (
                <div key={b} className="flex items-start gap-2.5">
                  <CheckCircle2
                    width={18}
                    height={18}
                    className="lucide lucide-check-circle2 flex-shrink-0 mt-0.5"
                    style={{ color: 'rgb(120, 53, 35)' }}
                  />
                  <span className="text-sm text-brand-gray2 leading-snug">{b}</span>
                </div>
              ))}
            </div>
            <div className="animate-on-scroll flex flex-col sm:flex-row gap-3">
              <a
                href="http://wa.me/5566996428111?text=Olá!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20a%20Tibola%20Pré%20Moldados."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white shadow hover:shadow-md hover:opacity-90 transition-all duration-300 active:scale-95"
                style={{ backgroundColor: 'rgb(120, 53, 35)' }}
              >
                Falar com a Empresa
              </a>
              <a
                href="tel:+5566996428111"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-300 hover:bg-white"
                style={{ borderColor: 'rgb(120, 53, 35)', color: 'rgb(120, 53, 35)' }}
              >
                (66) 9 9642-8111
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-5">
            <div className="animate-on-scroll relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fábrica de pré-moldados Tibola"
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ background: 'linear-gradient(to top, rgba(120, 53, 35, 0.4), transparent)' }}
              ></div>
            </div>
            <div className="animate-on-scroll grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-brand-light">
                <Award
                  width={20}
                  height={20}
                  className="lucide lucide-award mx-auto mb-2"
                  style={{ color: 'rgb(120, 53, 35)' }}
                />
                <div className="text-xl font-black" style={{ color: 'rgb(120, 53, 35)' }}>
                  30+
                </div>
                <div className="text-xs text-brand-gray2 mt-1 leading-tight">Anos de Experiência</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-brand-light">
                <Users
                  width={20}
                  height={20}
                  className="lucide lucide-users mx-auto mb-2"
                  style={{ color: 'rgb(120, 53, 35)' }}
                />
                <div className="text-xl font-black" style={{ color: 'rgb(120, 53, 35)' }}>
                  100%
                </div>
                <div className="text-xs text-brand-gray2 mt-1 leading-tight">Satisfação Garantida</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-brand-light">
                <Truck
                  width={20}
                  height={20}
                  className="lucide lucide-truck mx-auto mb-2"
                  style={{ color: 'rgb(120, 53, 35)' }}
                />
                <div className="text-xl font-black" style={{ color: 'rgb(120, 53, 35)' }}>
                  MT
                </div>
                <div className="text-xs text-brand-gray2 mt-1 leading-tight">Atendimento Regional</div>
              </div>
            </div>
            <div
              className="animate-on-scroll rounded-2xl p-6 text-white"
              style={{ backgroundColor: 'rgb(120, 53, 35)' }}
            >
              <p className="text-sm leading-relaxed italic opacity-90">
                "Buscamos sempre oferecer as melhores soluções em pré-moldados, com atendimento
                personalizado e preços competitivos. Nosso compromisso é com a satisfação do cliente."
              </p>
              <div className="mt-3 font-bold text-sm opacity-80">— Equipe Tibola Pré Moldados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
