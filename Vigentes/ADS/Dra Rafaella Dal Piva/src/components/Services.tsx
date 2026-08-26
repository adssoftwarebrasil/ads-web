import { Sparkles, Smile, Zap, Baby, Activity, Shield } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Facetas & Lentes de Contato',
    description:
      'Transforme seu sorriso com lentes de contato dental em resina ou porcelana. Resultados naturais e duradouros que realçam a beleza do seu sorriso.',
    image:
      'https://storage.lucasmendes.dev/site-sp/dra%20rafaella%20dal%20piva/img/dra-rafaella-mulher-loira-sorrindo-odontologia-roupa-preta_1080x1918.webp',
    color: 'from-[#a4376e]/10 to-[#a4376e]/5',
    accent: '#a4376e',
  },
  {
    icon: Smile,
    title: 'Implante Dentário',
    description:
      'Recupere a função e a estética com implantes de alta qualidade. Da extração à prótese final, cuide do seu sorriso com segurança e conforto.',
    image:
      'https://storage.lucasmendes.dev/site-sp/dra%20rafaella%20dal%20piva/img/dra-rafaella-mulher-segurando-copo-agua-dentadura-dentro-unhas-vermelhas_1178x2096.webp',
    color: 'from-[#098b90]/10 to-[#098b90]/5',
    accent: '#098b90',
  },
  {
    icon: Zap,
    title: 'Clareamento Dental',
    description:
      'Dentes mais brancos e brilhantes em poucas sessões. Clareamento a laser, em consultório ou caseiro, com resultados visíveis e seguros.',
    image:
      'https://storage.lucasmendes.dev/site-sp/dra%20rafaella%20dal%20piva/img/dra-rafaella-mulher-loira-sorrindo-vestido-branco-consultorio_2268x4032.webp',
    color: 'from-[#a4376e]/10 to-[#a4376e]/5',
    accent: '#a4376e',
  },
  {
    icon: Baby,
    title: 'Odontopediatria',
    description:
      'Atendimento especializado e humanizado para crianças. Criamos um ambiente acolhedor para que os pequenos se sintam seguros e confiantes.',
    image:
      'https://storage.lucasmendes.dev/site-sp/dra%20rafaella%20dal%20piva/img/dra-rafaella-mulher-em-clinica-dentaria-publicidade-queixo-filho_1440x1800.webp',
    color: 'from-[#098b90]/10 to-[#098b90]/5',
    accent: '#098b90',
  },
  {
    icon: Activity,
    title: 'Periodontia & Saúde Gengival',
    description:
      'Tratamento de gengivas inflamadas, sangramento e retração gengival. Cuide da base do seu sorriso com limpeza profunda e acompanhamento contínuo.',
    image:
      'https://storage.lucasmendes.dev/site-sp/dra%20rafaella%20dal%20piva/img/dra-rafaella-dentista-escrevendo-dor-gengiva-nao-normal_1080x1920.webp',
    color: 'from-[#a4376e]/10 to-[#a4376e]/5',
    accent: '#a4376e',
  },
  {
    icon: Shield,
    title: 'Ortodontia & Ortopedia',
    description:
      'Alinhamento dental com aparelhos fixos, estéticos ou alinhadores removíveis. Corrija a mordida e conquiste um sorriso perfeitamente alinhado.',
    image:
      'https://storage.lucasmendes.dev/site-sp/dra%20rafaella%20dal%20piva/img/dra-rafaella-mulher-ortodontista-segurando-modelo-de-dentes_1440x1800.webp',
    color: 'from-[#098b90]/10 to-[#098b90]/5',
    accent: '#098b90',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#098b90] text-sm font-semibold tracking-widest uppercase mb-3">
            Nossos Tratamentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Cuidado completo para o seu{' '}
            <span className="text-[#a4376e]">sorriso</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Da estética à reabilitação oral, oferecemos tratamentos de ponta com tecnologia moderna e atenção personalizada para cada paciente.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Agora o card tem h-80 para ficar mais alto */}
              <div className="relative h-80 overflow-hidden">
                {/* O object-center vai evitar que as cabeças sejam cortadas */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div
                  className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: service.accent }}
                >
                  <service.icon size={20} className="text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#a4376e] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <a
                  href="http://wa.me/556592693908"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  style={{ color: service.accent }}
                >
                  Saber mais
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6 text-base">
            E muito mais: canal, periodontia, próteses, bruxismo, reabilitação oral e planejamento digital do sorriso.
          </p>
          <a
            href="http://wa.me/556592693908"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#098b90] text-white px-8 py-4 rounded-full font-bold hover:bg-[#077479] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Quero Conhecer Todos os Tratamentos
          </a>
        </div>
      </div>
    </section>
  );
}