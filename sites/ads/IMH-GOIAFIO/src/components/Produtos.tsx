import {
  Ruler,
  Cable,
  Settings,
  Layers,
  Box,
  Zap,
  Package,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { openWhatsApp } from '../whatsapp';

interface Product {
  icon: LucideIcon;
  image: string;
  title: string;
  description: string;
  carousel?: boolean;
}

const products: Product[] = [
  {
    icon: Ruler,
    image:
      'https://storage.lucasmendes.dev/site-sp/goiafio%2Fprodutos%2FM%C3%A1quina%20medir%20fios%20em%20chapa%20a%C3%A7o%20%2B%20mesa%20suporte.webp',
    title: 'Máquina medir fios em chapa aço + mesa suporte',
    description:
      'Estrutura robusta em chapa de aço com mesa de suporte integrada. Ideal para medição precisa e estabilidade no manuseio.',
  },
  {
    icon: Cable,
    image:
      'https://storage.lucasmendes.dev/site-sp/goiafio%2Fprodutos%2FBobinador%20de%20cabos%20com%20roldana%20e%20multiplex.webp',
    title: 'Bobinador de cabos com roldana e multiplex',
    description:
      'Equipamento versátil com sistema de roldanas otimizado para bobinamento de cabos multiplex e diversos outros tipos.',
  },
  {
    icon: Settings,
    image:
      'https://storage.lucasmendes.dev/site-sp/goiafio%2Fprodutos%2FM%C3%A1quina%20G2%20mista%20medir%20fios%20e%20cabos.webp',
    title: 'Máquina G2 mista medir fios e cabos',
    description:
      'Modelo híbrido G2 de alta eficiência. Desenvolvido para atender tanto linhas de fios quanto cabos com precisão certificada.',
  },
  {
    icon: Layers,
    image:
      'https://storage.lucasmendes.dev/site-sp/goiafio%2Fprodutos%2FM%C3%A1quina%20%2B%20expositor%20p%20bobina%2020%20carret%C3%A9is.webp',
    title: 'Máquina + expositor p/ bobina 20 carretéis',
    description:
      'Solução completa de armazenamento e medição. Acompanha expositor reforçado com capacidade para até 20 carretéis simultâneos.',
  },
  {
    icon: Ruler,
    image:
      'https://storage.lucasmendes.dev/site-sp/goiafio%2Fprodutos%2FM%C3%A1quina%20medir%20fita%20de%20borda%20eixo%20pvc%2011%20cm.webp',
    title: 'Máquina medir fita de borda eixo pvc 11 cm',
    description:
      'Especializada para marcenaria e acabamentos. Eixo em PVC de 11cm ideal para medição de fitas de borda sem danificar o material.',
  },
  {
    icon: Box,
    image: 'https://storage.lucasmendes.dev/site-sp/goiafio%2Fprodutos%2FM%C3%A1quina%20medir%20cabos.webp',
    title: 'Máquina medir cabos',
    description:
      'Equipamento padrão essencial para lojas de material elétrico. Durabilidade e precisão para o dia a dia.',
  },
  {
    icon: Zap,
    image: 'https://storage.lucasmendes.dev/site-sp/goiafio%2Fprodutos%2FMaquina%20de%20medir%20fios.webp',
    title: 'Máquina de medir fios',
    description:
      'Compacta e eficiente. Projetada especificamente para fios de menor bitola, garantindo agilidade no atendimento.',
  },
  {
    icon: Package,
    image:
      'https://storage.lucasmendes.dev/site-sp/goiafio%2Fprodutos%2FM%C3%A1quina%20medir%20fios%20em%20alum%C3%ADnio%20e%20mdf.webp',
    title: 'Máquina medir fios em alumínio e MDF',
    description:
      'Acabamento premium em alumínio e base em MDF. Une leveza, estética e funcionalidade para seu balcão.',
  },
  {
    icon: Zap,
    image:
      'https://storage.lucasmendes.dev/site-sp/goiafio%2Fprodutos%2FMaquina%20medir%20cabos%20el%C3%A9trica%20%2Cmarca%20goiafio%20modelo%20%20G2E-imagem-01.webp',
    title: 'Máquina medir cabos elétrica G2E - Goiafio',
    description:
      'Top de linha. Modelo elétrico G2E com automação para medição de grandes volumes. Alta performance e tecnologia Goiafio.',
    carousel: true,
  },
];

export default function Produtos() {
  const handleQuote = (title: string) => {
    openWhatsApp(`Olá! Tenho interesse no produto: ${title}. Gostaria de solicitar um orçamento.`);
  };

  return (
    <section id="produtos" className="py-20 sm:py-32 bg-[rgb(2,47,111)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-6">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-200 font-semibold text-sm uppercase tracking-wider border border-blue-400/30">
            Catálogo Completo
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
            Soluções Goiafio para <span className="text-blue-300">Seu Negócio</span>
          </h2>
          <p className="mt-6 text-xl text-blue-100/80 max-w-4xl mx-auto leading-relaxed">
            Linha completa de equipamentos certificados, desenvolvidos com tecnologia de ponta e
            materiais de alta qualidade para garantir precisão absoluta.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-white/10"
              >
                <div className="relative h-72 sm:h-80 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(2,47,111)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {product.carousel && (
                    <>
                      <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg text-[rgb(2,47,111)] hover:bg-[rgb(2,47,111)] hover:text-white transition-colors z-10">
                        <ChevronLeft size={24} />
                      </button>
                      <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg text-[rgb(2,47,111)] hover:bg-[rgb(2,47,111)] hover:text-white transition-colors z-10">
                        <ChevronRight size={24} />
                      </button>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        <div className="h-2 rounded-full transition-all shadow-sm bg-white w-6"></div>
                        <div className="h-2 rounded-full transition-all shadow-sm bg-white/60 w-2"></div>
                        <div className="h-2 rounded-full transition-all shadow-sm bg-white/60 w-2"></div>
                      </div>
                    </>
                  )}
                  <div className="absolute top-4 right-4 bg-white p-3 rounded-xl shadow-md text-[rgb(2,47,111)]">
                    <Icon size={28} />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[rgb(2,47,111)] mb-4 line-clamp-2 min-h-[4rem]">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-8 text-base leading-relaxed flex-grow">
                    {product.description}
                  </p>
                  <button
                    onClick={() => handleQuote(product.title)}
                    className="w-full py-4 rounded-xl border-2 border-[rgb(2,47,111)] text-[rgb(2,47,111)] font-bold hover:bg-[rgb(2,47,111)] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn text-lg"
                  >
                    Solicitar Orçamento
                    <MessageCircle
                      size={20}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-white rounded-3xl p-10 sm:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
            <div className="flex-1">
              <h3 className="text-3xl sm:text-4xl font-bold text-[rgb(2,47,111)] mb-6">
                Não encontrou o que procura?
              </h3>
              <p className="text-gray-600 text-xl max-w-2xl">
                Desenvolvemos projetos personalizados sob medida. Fale com nossa engenharia e
                solicite uma solução exclusiva.
              </p>
            </div>
            <button
              onClick={() =>
                openWhatsApp(
                  'Olá! Gostaria de falar com um especialista sobre um projeto personalizado.'
                )
              }
              className="flex-shrink-0 bg-[rgb(2,47,111)] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
