import { Eye, Sun, Contact, Sparkles, Wrench, ScanLine } from 'lucide-react';

const services = [
  {
    Icon: Eye,
    iconClass: 'lucide lucide-eye',
    img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/galeria/homem-oculos-transparentes-barba-camisa-verde_1440x1920.webp',
    title: 'Óculos de Grau',
    text: 'Armações para todos os rostos e estilos, com as lentes mais avançadas do mercado. Conforto visual todos os dias.',
  },
  {
    Icon: Sun,
    iconClass: 'lucide lucide-sun',
    img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/galeria/mulher-oculos-aviador-dourado-camisa-preta_1440x1920.webp',
    title: 'Óculos de Sol',
    text: 'Proteção UV e estilo que completam qualquer look. Das clássicas Ray-Ban às exclusivas Tom Ford e Prada.',
  },
  {
    Icon: Contact,
    iconClass: 'lucide lucide-contact',
    img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/galeria/homem-oculos-espelhados-dourados-expressao-serena_1440x1920.webp',
    title: 'Lentes de Contato',
    text: 'Liberdade visual com tecnologia de ponta. Lentes descartáveis e de uso contínuo para sua rotina.',
  },
  {
    Icon: Sparkles,
    iconClass: 'lucide lucide-sparkles',
    img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/galeria/oculos-miu-miu-estojo-e-saco-aveludado_1099x1465.webp',
    title: 'Armações Premium',
    text: 'Uma curadoria das marcas mais icônicas do mundo: Prada, Miu Miu, Versace, Tom Ford, Ray Ban, Oakley e muito mais.',
  },
  {
    Icon: Wrench,
    iconClass: 'lucide lucide-wrench',
    img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/galeria/oculos-de-sol-e-grau-varios-estilos_1080x1917.webp',
    title: 'Ajuste de Óculos',
    text: 'Ajustes, reparos e manutenção realizados por nossa equipe especializada. Seus óculos em perfeito estado.',
  },
  {
    Icon: ScanLine,
    iconClass: 'lucide lucide-scan-line',
    img: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/galeria/mulher-oculos-prada-espelhado-rosto-foco_1080x1919.webp',
    title: 'Orientação Visual',
    text: 'Ajudamos você a encontrar a solução visual ideal para seu estilo de vida, cotidiano e necessidades únicas.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32" style={{ backgroundColor: 'rgb(53, 59, 59)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-reveal text-center mb-16">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ backgroundColor: 'rgba(223, 209, 162, 0.15)', color: 'rgb(223, 209, 162)' }}
          >
            O Que Oferecemos
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5"
            style={{ color: 'rgb(240, 238, 239)' }}
          >
            Tudo para a sua <span style={{ color: 'rgb(223, 209, 162)' }}>saúde visual</span>
          </h2>
          <p
            className="text-base lg:text-lg max-w-2xl mx-auto"
            style={{ color: 'rgb(196, 194, 195)', lineHeight: 1.7 }}
          >
            Da curadoria ao Pós Venda, oferecemos um atendimento completo com produtos de altíssima
            qualidade para cada necessidade e orçamento.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const { Icon } = service;
            return (
              <div
                key={service.title}
                className="section-reveal group relative overflow-hidden rounded-2xl cursor-default"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover gallery-img"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.1) 60%)',
                    }}
                  ></div>
                </div>
                <div
                  className="p-6"
                  style={{
                    backgroundColor: 'rgba(240, 238, 239, 0.04)',
                    backdropFilter: 'blur(2px)',
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: 'rgba(223, 209, 162, 0.15)' }}
                    >
                      <Icon
                        width={18}
                        height={18}
                        className={service.iconClass}
                        strokeWidth={2}
                        style={{ color: 'rgb(223, 209, 162)' }}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-base mb-2" style={{ color: 'rgb(240, 238, 239)' }}>
                        {service.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: 'rgb(196, 194, 195)' }}
                      >
                        {service.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
