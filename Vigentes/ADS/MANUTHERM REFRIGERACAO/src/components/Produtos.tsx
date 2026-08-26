import { Check } from 'lucide-react';

interface Produto {
  title: string;
  desc: string;
  img: string;
  alt: string;
  features?: string[];
  reverse?: boolean;
  delay: number;
}

const produtos: Produto[] = [
  {
    title: 'Linha Set Free',
    desc: 'Sistema de ar condicionado múltiplo reconhecido por sua alta eficiência energética, facilidade de instalação, operação extremamente silenciosa e tamanho compacto. Pronto para projetos da próxima geração.',
    img: 'https://storage.lucasmendes.dev/site-sp/manutherm%2FLinha%20Set%20Free.jpg',
    alt: 'Linha Set Free',
    delay: 0,
  },
  {
    title: 'Chiller Scroll Inverter',
    desc: 'Alta tecnologia e eficiência com economia em cargas parciais. Equipamento modular com compressores e ventiladores Inverter, proporcionando flexibilidade na instalação e automação remota MODBUS-RTU.',
    img: 'https://storage.lucasmendes.dev/site-sp/manutherm%2FChiller%20Scroll%20Inverter.jpg',
    alt: 'Chiller Scroll Inverter',
    features: [
      'Sistema Inverter de alta eficiência',
      'Baixo nível de ruído',
      'Controle microprocessado',
      'Válvula de expansão eletrônica',
    ],
    reverse: true,
    delay: 150,
  },
  {
    title: 'Chiller Samurai',
    desc: 'Resfriadores de líquido com condensação a ar e compressores Scroll Inverter. Sistema modular com alta eficiência energética e fluido refrigerante R-410A ambientalmente correto.',
    img: 'https://storage.lucasmendes.dev/site-sp/manutherm%2Fchiller-samurai-1.jpg',
    alt: 'Chiller Samurai',
    features: [
      'Facilidade de transporte',
      'Baixo consumo de energia',
      'Automação MODBUS-RTU',
      'Peso e área de instalação reduzidos',
    ],
    delay: 300,
  },
];

export default function Produtos() {
  return (
    <section id="produtos" className="py-16 lg:py-24 bg-[rgb(247,247,247)]">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-20">
        <div className="transition-all duration-700 opacity-0 translate-y-10">
          <div className="text-center mb-12">
            <h2 className="text-[28px] lg:text-[40px] font-bold text-[rgb(9,74,104)] mb-4">Produtos Hitachi</h2>
            <p className="text-[18px] text-[rgb(28,123,179)]">
              Empresa credenciada Hitachi - Tecnologia e eficiência energética
            </p>
          </div>
          <div className="space-y-12">
            {produtos.map((p) => (
              <div
                key={p.title}
                className="bg-white p-8 lg:p-12 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] opacity-0 translate-y-10"
                style={{ transitionDelay: `${p.delay}ms` }}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-8 items-center ${p.reverse ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={p.reverse ? 'lg:order-2' : ''}>
                    <img
                      src={p.img}
                      alt={p.alt}
                      className="w-full h-[300px] object-cover rounded-xl"
                      loading="lazy"
                    />
                  </div>
                  <div className={p.reverse ? 'lg:order-1' : ''}>
                    <h3 className="text-[24px] lg:text-[28px] font-bold text-[rgb(9,74,104)] mb-4">{p.title}</h3>
                    <p className="text-[16px] text-gray-700 leading-relaxed mb-4">{p.desc}</p>
                    {p.features && (
                      <ul className="space-y-3">
                        {p.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-3">
                            <Check
                              width={20}
                              height={20}
                              strokeWidth={2}
                              className="lucide lucide-check text-[rgb(28,123,179)] flex-shrink-0 mt-1"
                            />
                            <span className="text-[16px] text-gray-700">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
