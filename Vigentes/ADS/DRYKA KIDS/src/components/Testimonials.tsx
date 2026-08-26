import { Quote, Star } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  time: string;
  initial: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Ótimo atendimento, entrega super rápida, indico super, tudo em um só lugar"',
    name: 'Walisson Silva',
    time: '4 semanas atrás',
    initial: 'W',
  },
  {
    text: '"Atendimento de primeira qualidade."',
    name: 'Patrícia Alane Silva Santos',
    time: '3 meses atrás',
    initial: 'P',
  },
  {
    text: '"Melhor loja de roupas infantil, brinquedos, e dentre outras variedades, melhor atendimento, só tenho que agradecer a loja shop Drika Kids, são mais de 6 anos comprando na Drika Kids, super indico, quem não conhece venham conhecer está loja maravilhosa, que seu filho(a) vão amar. Sucesso sempre minha amiga Drika."',
    name: 'Jaqueline Gondim',
    time: 'um ano atrás',
    initial: 'J',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O que nossos{' '}
            <span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
              clientes dizem
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é a nossa maior conquista. Veja o que eles têm a dizer
            sobre a Shop Dryka Kids!
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-pink-300">
                <Quote className="w-12 h-12" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 min-h-[120px]">{t.text}</p>
                <div className="border-t border-pink-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-gray-900">{t.name}</div>
                      <div className="text-sm text-gray-600">{t.time}</div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {t.initial}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-6 rounded-2xl shadow-xl">
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-white text-white" />
              ))}
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold">5.0 de 5 estrelas</div>
              <div className="text-sm opacity-90">Baseado em avaliações verificadas</div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Faça parte da nossa família de clientes satisfeitos!</p>
          <a
            href="https://wa.me/558888033252?text=Olá! Vi as avaliações e quero fazer meu pedido!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-400 text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Faça Seu Pedido Agora
          </a>
        </div>
      </div>
    </section>
  );
}
