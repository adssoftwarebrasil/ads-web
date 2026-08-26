import { Shield, ThumbsUp, Award, Users, LucideIcon } from 'lucide-react';
import { WHATSAPP } from '../data';

interface Feature {
  Icon: LucideIcon;
  cls: string;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    Icon: Shield,
    cls: 'lucide lucide-shield',
    title: 'Transparência Total',
    desc: 'Negociações honestas e claras do início ao fim. Você sabe exatamente com o que está lidando.',
  },
  {
    Icon: ThumbsUp,
    cls: 'lucide lucide-thumbs-up',
    title: 'Qualidade Garantida',
    desc: 'Cada veículo passa por criteriosa seleção antes de entrar no nosso estoque.',
  },
  {
    Icon: Award,
    cls: 'lucide lucide-award',
    title: '10+ Anos de Mercado',
    desc: 'Uma década construindo confiança e fidelizando clientes em Rondonópolis e região.',
  },
  {
    Icon: Users,
    cls: 'lucide lucide-users',
    title: 'Atendimento Personalizado',
    desc: 'Encontramos o veículo ideal para o seu perfil e orçamento, sem pressão.',
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-brand-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'rgb(245, 223, 108)' }}>
              Sobre a Golden Car
            </span>
            <h2 className="section-title text-white mt-3 mb-6">
              Referência em Veículos
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, rgb(245, 223, 108) 0%, rgb(218, 158, 12) 100%)' }}
              >
                Seminovos em Rondonópolis
              </span>
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-base">
              <p>
                A <strong className="text-white">Golden Car Veículos</strong> nasceu com uma missão simples: oferecer ao
                cliente de Rondonópolis e região veículos de qualidade com total transparência na negociação. Com mais de
                uma década de atuação, nos tornamos referência no mercado de seminovos e usados do Mato Grosso.
              </p>
              <p>
                Trabalhamos com um estoque criteriosamente selecionado — desde veículos econômicos até modelos mais
                completos — sempre garantindo procedência e segurança para quem compra. Nosso diferencial é simples:{' '}
                <strong className="text-white">honestidade e clareza em cada negociação</strong>.
              </p>
              <p>
                Aqui você encontra financiamento facilitado, aceite do seu usado com avaliação justa, e um time que
                realmente quer ajudar você a realizar o sonho do carro novo.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-golden rounded-xl px-7 py-3 font-semibold"
              >
                Fale Conosco
              </a>
              <a href="#estoque" className="btn-outline-golden rounded-xl px-7 py-3 font-semibold">
                Ver Estoque
              </a>
            </div>
          </div>
          <div>
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-2xl opacity-20 blur-2xl"
                style={{ background: 'linear-gradient(135deg, rgb(245, 223, 108), rgb(218, 158, 12))' }}
              ></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-1 overflow-hidden">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/golden-car/img/logo.webp"
                  alt="Golden Car Veículos - Logo"
                  className="w-full rounded-xl object-contain"
                  style={{ maxHeight: '300px' }}
                />
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map(({ Icon, cls, title, desc }) => (
                <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-4 card-hover group">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(245, 223, 108, 0.125), rgba(218, 158, 12, 0.125))',
                      border: '1px solid rgba(245, 223, 108, 0.19)',
                    }}
                  >
                    <Icon size={20} className={cls} style={{ color: 'rgb(245, 223, 108)' }} />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
