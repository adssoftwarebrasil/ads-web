import { CheckCircle2, BookOpen, Award, Users, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const features = [
  'Bíblias de estudo de diversas linhas e editoras',
  'Materiais completos para Escola Dominical',
  'Dicionários e ferramentas teológicas especializadas',
  'Literatura infantil educativa e divertida',
  'Livros para edificação pessoal e familiar',
  'Atendimento para igrejas e instituições',
];

interface Card {
  icon: LucideIcon;
  title: string;
  text: string;
}

const cards: Card[] = [
  { icon: BookOpen, title: 'Ampla Variedade', text: 'Bíblias de estudo, livros teológicos, materiais didáticos e muito mais para toda a família' },
  { icon: Award, title: 'Qualidade Garantida', text: 'Trabalhamos apenas com editoras renomadas e materiais de excelência reconhecida' },
  { icon: Users, title: 'Atendimento Personalizado', text: 'Nossa equipe está pronta para auxiliar você a encontrar exatamente o que precisa' },
  { icon: Heart, title: 'Compromisso com a Fé', text: 'Dedicados a fornecer recursos que edificam e fortalecem a vida cristã' },
];

export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(60,100,139)] mb-6">Sua Livraria Evangélica de Confiança</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>A <strong className="text-[rgb(157,119,0)]">Livraria Neves Artigos Evangélicos</strong> é referência em publicações evangélicas de qualidade para toda a família.</p>
              <p>Oferecemos uma seleção cuidadosamente escolhida de <strong>Bíblias</strong>, <strong>revistas de Escola Dominical</strong>, <strong>dicionários e materiais teológicos</strong>, além de uma linda coleção de <strong>livros infantis</strong> e obras sobre os mais variados temas edificantes.</p>
              <p>Temos especial atenção às <strong>Bíblias de estudo</strong> e <strong>materiais teológicos renomados</strong>, proporcionando recursos sólidos para você aprofundar seu conhecimento bíblico de forma consistente e confiável.</p>
              <p>Atendemos toda a região de <strong>Camaçari, Abrantes, Simões Filho e Dias d'Ávila</strong>, levando conhecimento e edificação espiritual para famílias e igrejas.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-start space-x-2">
                  <CheckCircle2 size={20} className="text-[rgb(157,119,0)] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/biblia-preta-dourada_13_11zon.webp"
                    alt="Bíblia Premium"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/livro-mesa-madeira_32_11zon.webp"
                    alt="Livros de Qualidade"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/biblia-rosa-embalagem_15_11zon.webp"
                    alt="Bíblia Rosa"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/livraria%20neves/livros/livro-ilustracao-colorida_30_11zon.webp"
                    alt="Livro Ilustrado"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-[rgb(60,100,139)] rounded-full filter blur-3xl opacity-10"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-gradient-to-br from-[rgb(60,100,139)] to-[rgb(80,120,159)] p-6 rounded-xl shadow-lg text-white transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="bg-white/20 backdrop-blur-sm w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-white/90 leading-relaxed">{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
