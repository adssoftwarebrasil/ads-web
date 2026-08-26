import { Microscope, MessageCircle, Sun, Package, Truck, ShieldCheck, type LucideIcon } from 'lucide-react';

interface Diff {
  title: string;
  desc: string;
  Icon: LucideIcon;
  iconName: string;
  delay: string;
}

const diffs: Diff[] = [
  {
    title: 'Qualidade Analítica',
    desc: 'Cada fórmula passa por controle rigoroso de qualidade, garantindo eficácia, pureza e segurança em todos os ativos utilizados.',
    Icon: Microscope,
    iconName: 'microscope',
    delay: '0s',
  },
  {
    title: 'Atendimento Farmacêutico',
    desc: 'Nossa equipe de farmacêuticas qualificadas está pronta para entender sua necessidade e recomendar a melhor solução.',
    Icon: MessageCircle,
    iconName: 'message-circle',
    delay: '0.1s',
  },
  {
    title: 'Energia Fotovoltaica',
    desc: 'Operamos com energia solar, reduzindo nossa pegada de carbono e demonstrando compromisso com o futuro do planeta.',
    Icon: Sun,
    iconName: 'sun',
    delay: '0.2s',
  },
  {
    title: 'Embalagens Sustentáveis',
    desc: 'Utilizamos embalagens biodegradáveis e sacolas de papel, minimizando o impacto ambiental em cada entrega.',
    Icon: Package,
    iconName: 'package',
    delay: '0.3s',
  },
  {
    title: 'Envio para Todo o Brasil',
    desc: 'Atendemos São Carlos e toda a região presencialmente, e enviamos nossos produtos com segurança para qualquer lugar do país.',
    Icon: Truck,
    iconName: 'truck',
    delay: '0.4s',
  },
  {
    title: 'Fórmulas Registradas',
    desc: 'Atuamos desde 2004 com total conformidade às normas da ANVISA, garantindo transparência e segurança em cada produto.',
    Icon: ShieldCheck,
    iconName: 'shield-check',
    delay: '0.5s',
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-sm font-semibold text-brand-green uppercase tracking-widest mb-4">
            Por que nos escolher
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Diferenciais que <span className="text-primary">fazem toda a diferença</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Muito além de uma farmácia — somos parceiros da sua saúde com responsabilidade, ciência e cuidado
            genuíno.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {diffs.map((d) => (
            <div key={d.title} className="flex gap-5 animate-on-scroll group" style={{ animationDelay: d.delay }}>
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-brand-mint/20 flex items-center justify-center group-hover:from-primary group-hover:to-brand-green transition-all duration-300">
                <d.Icon
                  size={22}
                  className={`lucide lucide-${d.iconName} text-primary group-hover:text-white transition-colors duration-300`}
                />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">{d.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 rounded-3xl overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-brand-green animate-on-scroll">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                Conheça o <span className="text-brand-mint">Kalmia Hair</span>
              </h3>
              <p className="text-white/80 text-base leading-relaxed mb-8">
                Nosso produto carro-chefe: um multivitamínico que fortalece cabelos, unhas, pele e imunidade.
                Centenas de clientes apaixonados pelos resultados, e você pode ser o próximo!
              </p>
              <a
                href="http://wa.me/5516991594153?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20Kalmia%20Hair!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-mint text-brand-green font-bold px-7 py-3.5 rounded-full hover:bg-white hover:text-primary transition-all duration-200 w-fit"
              >
                Quero o Kalmia Hair
              </a>
            </div>
            <div className="hidden lg:flex items-center justify-center bg-white/10 p-10">
              <img
                src="https://storage.lucasmendes.dev/site-sp/kalmia%20farmacia/produtos/frasco-suplemento-vitaminico-kalmia-hair_190x300.webp"
                alt="Kalmia Hair"
                className="h-56 w-auto object-contain drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
