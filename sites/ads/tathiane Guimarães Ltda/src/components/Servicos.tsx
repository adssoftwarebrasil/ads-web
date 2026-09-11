import { Apple, Brain, Sparkles, Heart, Baby, HandHeart, type LucideIcon } from 'lucide-react';

interface Servico {
  title: string;
  desc: string;
  image: string;
  icon: LucideIcon;
}

const servicos: Servico[] = [
  {
    title: 'Cirurgia Guiada',
    desc: 'Menos dor, mais previsibilidade nas cirurgias de implantes dentários. Trabalhamos a linha Straumann, o melhor implante do mundo.',
    image: 'https://storage.lucasmendes.dev/site-sp/tathiane%20guimaraes/servicos/cirurgia-guiada.webp',
    icon: Apple,
  },
  {
    title: 'Soluções digitais',
    desc: 'Planejamento digital do sorriso Escaneamento 3D com aparelhos inovadores e de última geração.',
    image: 'https://storage.lucasmendes.dev/site-sp/tathiane%20guimaraes/servicos/solucoes-digitais.webp',
    icon: Brain,
  },
  {
    title: 'Clareamento Dental',
    desc: 'Técnicas seguras e eficazes para um sorriso mais branco e radiante, adaptadas às suas necessidades.',
    image: 'https://storage.lucasmendes.dev/site-sp/tathiane%20guimaraes/atualizadas/clareamento-dental.webp',
    icon: Sparkles,
  },
  {
    title: 'Atendimento acolhedor',
    desc: 'Cuidado humanizado, com atenção, respeito e empatia em cada atendimento.',
    image: 'https://storage.lucasmendes.dev/site-sp/tathiane%20guimaraes%2Fimg%2FAtendimento%20acolhedor.webp',
    icon: Heart,
  },
  {
    title: 'Odontopediatria',
    desc: 'Atendimento especializado e acolhedor para crianças, criando experiências positivas desde cedo.',
    image:
      'https://storage.lucasmendes.dev/site-sp/tathiane%20guimaraes%2Fimg%2FNo%20atendimento%20infantil%20pode%20usar%20essa%20imagem%2C%20mais%20real%20mesmo%2C%20feita%20durante%20um%20atendimento.webp',
    icon: Baby,
  },
  {
    title: 'Estética Facial',
    desc: 'Procedimentos estéticos faciais realizados por profissionais qualificados para realçar sua beleza natural.',
    image: 'https://storage.lucasmendes.dev/site-sp/tathiane%20guimaraes/atualizadas/estetica-facial.webp',
    icon: Sparkles,
  },
  {
    title: 'Lentes de Zircônia',
    desc: 'Para um tratamento estético e duradouro essa é a opção mais desejada dentre nossos pacientes.',
    image: 'https://storage.lucasmendes.dev/site-sp/tathiane%20guimaraes/servicos/lentes-de-zirconia.webp',
    icon: HandHeart,
  },
  {
    title: 'Alinhadores Estéticos',
    desc: 'O mais moderno tratamento de aparelhos para corrigir os dentes com total conforto e estética.',
    image: 'https://storage.lucasmendes.dev/site-sp/tathiane%20guimaraes/servicos/alinhamento-estetico.webp',
    icon: Sparkles,
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-24" style={{ backgroundColor: 'rgb(178, 155, 133)' }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto font-medium">
            Cuidado integrado e personalizado para sua saúde bucal, corporal e mental
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicos.map(({ title, desc, image, icon: Icon }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 "
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-xl mb-2">
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{desc}</p>
                <a
                  href="https://wa.me/553791564540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-black font-semibold text-sm hover:gap-2 transition-all group"
                >
                  Saber Mais
                  <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 bg-black rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Não encontrou o serviço que procura?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para atender suas necessidades específicas. Entre em contato e
            descubra como podemos ajudar você.
          </p>
          <a
            href="https://wa.me/553791564540"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
