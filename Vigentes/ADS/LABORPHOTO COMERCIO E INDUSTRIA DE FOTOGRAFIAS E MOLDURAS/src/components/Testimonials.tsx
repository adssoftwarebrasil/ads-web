import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: '"Fui atendido pelo THIAGO que com uma paciência peculiar e muita boa vontade resolveu meu problema de forma cordial e gentil. Obrigado THIAGO, e desculpe por ter chegado bem na hora do almoço! Se você está procurando aonde resolver suas fotos: LABORPHOTO, com certeza. Ah, e preço justo!"',
    name: 'Eduardo (Khadú Morais)',
    role: 'Cliente',
    date: 'Atendido em 15/01',
  },
  {
    text: '"Atendimento rápido, profissional, produtos de qualidade e funcionários muito atenciosos. Precisei revelar e emoldurar uma foto tamanho A3 e em 10 minutos já estava tudo pronto. Recomendo muito!"',
    name: 'Cristhiane Raisse',
    role: 'Local Guide · 39 avaliações',
    date: 'Há um mês',
  },
  {
    text: '"Já sou cliente antiga, já fiz diversas revelações e recuperação de fotos. O trabalho deles é de excelente qualidade, cumpre com prazos e tem o preço excelente e o atendimento do Thiago é muito bom. Super indico!"',
    name: 'Cristina Nogueira',
    role: 'Local Guide · 70 avaliações',
    date: 'Há 2 meses',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[rgb(2,126,198)] font-bold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            O Que Nossos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(2,126,198)] to-[rgb(6,51,133)]">
              Clientes Dizem
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative group hover:-translate-y-1"
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-[rgb(2,126,198)]" />
              </div>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">{t.text}</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
                <p className="text-xs text-gray-400 mt-1">{t.date}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-br from-[rgb(2,126,198)] to-[rgb(6,51,133)] rounded-3xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Pronto para Preservar Suas Memórias?</h3>
          <p className="text-xl mb-8 text-gray-100">
            Junte-se a centenas de clientes satisfeitos que confiam na Laborphoto
          </p>
          <a
            href="http://wa.me/556192241725"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[rgb(6,51,133)] px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Fale Conosco Agora
          </a>
        </div>
      </div>
    </section>
  );
}
