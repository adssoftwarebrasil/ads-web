import { BookOpen, Shield, GraduationCap, Users, Home, Star } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Card {
  img: string;
  alt: string;
  icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
  sub: string;
}

const cards: Card[] = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fcriancas-rezando-mesa.jpg',
    alt: 'Formação Cristã Sólida',
    icon: BookOpen,
    iconClass: 'lucide lucide-book-open',
    title: 'Formação Cristã Sólida',
    text: 'Conteúdos e práticas pedagógicas fundamentados em princípios bíblicos',
    sub: 'Desenvolvimento espiritual integrado ao acadêmico',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fcrianca-sorrindo-escola.jpg',
    alt: 'Ambiente Acolhedor e Seguro',
    icon: Shield,
    iconClass: 'lucide lucide-shield',
    title: 'Ambiente Acolhedor e Seguro',
    text: 'Cuidado individual e respeito ao próximo',
    sub: 'Estrutura pensada para o bem-estar das crianças',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fcriancas-lendo-livro.jpg',
    alt: 'Educação Integral',
    icon: GraduationCap,
    iconClass: 'lucide lucide-graduation-cap',
    title: 'Educação Integral',
    text: 'Desenvolvimento acadêmico, emocional, social e espiritual',
    sub: 'Metodologia moderna sem perder os valores da fé cristã',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fprofessora-quadro-negro.jpg',
    alt: 'Turmas Reduzidas',
    icon: Users,
    iconClass: 'lucide lucide-users',
    title: 'Turmas Reduzidas',
    text: 'Acompanhamento personalizado',
    sub: 'Proximidade entre professores e alunos',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fcriancas-na-escola.jpg',
    alt: 'Parceria com a Família',
    icon: Home,
    iconClass: 'lucide lucide-home',
    title: 'Parceria com a Família',
    text: 'Escola e lar caminham juntos na formação do caráter',
    sub: 'Comunicação constante e transparente',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fprofessor-lousa-verde.jpg',
    alt: 'Equipe Comprometida',
    icon: Star,
    iconClass: 'lucide lucide-star',
    title: 'Equipe Comprometida',
    text: 'Profissionais cristãos que ensinam com excelência',
    sub: 'Dedicação e propósito em cada aula',
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance" style={{ color: 'rgb(2, 73, 119)' }}>
            Por Que Escolher a Escola Modelo Cristão?
          </h2>
          <div className="w-24 h-1 mx-auto mb-4" style={{ backgroundColor: 'rgb(246, 174, 9)' }}></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra os diferenciais que fazem da nossa escola a melhor escolha para a formação do seu filho
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col border border-gray-100">
                <div className="relative h-48 md:h-56 overflow-hidden flex-shrink-0">
                  <img src={card.img} alt={card.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'rgb(246, 174, 9)' }}>
                    <Icon className={`${card.iconClass} text-white w-6 h-6 md:w-7 md:h-7`} width={24} height={24} />
                  </div>
                </div>
                <div className="p-6 md:p-7 flex-grow flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-[#F6AE09] transition-colors duration-300" style={{ color: 'rgb(2, 73, 119)' }}>
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3 leading-relaxed flex-grow">{card.text}</p>
                  <p className="text-xs md:text-sm text-gray-600 pt-3 border-t border-gray-100 font-medium">{card.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-[#024977] to-[#035a93] rounded-2xl p-8 md:p-10 shadow-xl">
            <p className="text-lg md:text-xl text-white font-semibold mb-4">Quer conhecer mais sobre nossa metodologia?</p>
            <a
              href="https://wa.me/5511989742323?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20a%20Escola%20Modelo%20Cristão"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: 'rgb(246, 174, 9)', color: 'rgb(2, 73, 119)' }}
            >
              Agende uma Visita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
