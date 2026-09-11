import { Car, Package, Lightbulb, Eye, Shield, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Product {
  icon: LucideIcon;
  title: string;
  desc: string;
  img: string;
}

const products: Product[] = [
  {
    icon: Car,
    title: 'Para-choques',
    desc: 'Para-choques dianteiros e traseiros para diversos modelos. Originais e paralelos de alta qualidade.',
    img: 'https://storage.lucasmendes.dev/site-sp/udi%20latas%2Fimg%2Fpara-choques.webp',
  },
  {
    icon: Package,
    title: 'Capôs',
    desc: 'Capôs em perfeito estado para substituição. Garantia de qualidade e acabamento perfeito.',
    img: 'https://storage.lucasmendes.dev/site-sp/udi%20latas%2Fimg%2Fcapos.webp',
  },
  {
    icon: Lightbulb,
    title: 'Faróis',
    desc: 'Faróis originais e alternativos. Melhore a iluminação e segurança do seu veículo.',
    img: 'https://storage.lucasmendes.dev/site-sp/udi%20latas%2Fimg%2Ffarois.webp',
  },
  {
    icon: Eye,
    title: 'Lanternas',
    desc: 'Lanternas traseiras de todos os tipos. Sinalização perfeita para sua segurança.',
    img: 'https://storage.lucasmendes.dev/site-sp/udi%20latas%2Fimg%2Flanternas.webp',
  },
  {
    icon: Eye,
    title: 'Retrovisores',
    desc: 'Retrovisores internos e externos. Visibilidade total para dirigir com segurança.',
    img: 'https://storage.lucasmendes.dev/site-sp/udi%20latas%2Fimg%2Fretrovisores.webp',
  },
  {
    icon: Shield,
    title: 'Paralamas',
    desc: 'Paralamas para proteção e acabamento do seu veículo. Qualidade e durabilidade garantidas.',
    img: 'https://storage.lucasmendes.dev/site-sp/udi%20latas%2Fimg%2Fparalamas.webp',
  },
];

const highlights = [
  {
    icon: Wrench,
    title: 'Atendimento Especializado',
    desc: 'Nossa equipe ajuda você a encontrar exatamente a peça que precisa.',
  },
  {
    icon: Package,
    title: 'Entrega Rápida',
    desc: 'Entrega no mesmo dia em Uberlândia para você não perder tempo.',
  },
  {
    icon: Shield,
    title: 'Garantia de Qualidade',
    desc: 'Todas as peças com garantia de procedência e qualidade.',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#F2CD00] text-[#28156F] px-4 py-2 rounded-full font-semibold text-sm mb-4">
            Nossos Produtos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#28156F] mb-6">Tudo que Seu Veículo Precisa</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Oferecemos uma ampla linha de autopeças e acessórios automotivos das melhores marcas do mercado. Peças
            originais e paralelas com preços competitivos.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#28156F]/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-[#F2CD00] w-10 h-10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#28156F]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{p.desc}</p>
                  <a
                    href="https://wa.me/553488692793?text=Olá! Gostaria de saber mais sobre os produtos disponíveis."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-[#28156F] font-semibold hover:text-[#F2CD00] transition-colors group/link"
                  >
                    <span>Consultar disponibilidade</span>
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-gradient-to-br from-[#28156F] to-[#28156F]/80 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Muito Mais que Autopeças</h3>
            <p className="text-gray-200 text-lg">Nossa missão é oferecer soluções completas para seu veículo</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.title} className="text-center space-y-4">
                  <div className="bg-[#F2CD00] w-16 h-16 rounded-xl flex items-center justify-center mx-auto">
                    <Icon className="w-8 h-8 text-[#28156F]" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{h.title}</h4>
                  <p className="text-gray-200">{h.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/553488692793?text=Olá! Preciso de autopeças. Pode me ajudar?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F2CD00] text-[#28156F] px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <span>Solicitar Orçamento</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
