import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: '"Loja com várias opções de puxadores para móveis e porta de passagem. Acabamentos diversos. E uma linha de decoração de muito bom gosto, impossível não se apaixonar 😍😍 Indico muito"',
    initial: 'P',
    name: 'Pamela Cristina',
    reviews: '3 avaliações',
  },
  {
    text: '"Excelente experiência desde a entrada na loja até a saída. Indico pra quem puder!"',
    initial: 'H',
    name: 'Hellen Cristh',
    reviews: '16 avaliações',
  },
  {
    text: '"Atendente muito paciente e atenciosa. Produtos para todos os gostos e preços. Achei lá exatamente o que precisava."',
    initial: 'D',
    name: 'Diego Navarrete',
    reviews: '52 avaliações',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[rgb(212,171,85)]/10 px-4 py-2 rounded-full mb-4">
            <Star width={20} height={20} fill="rgb(212,171,85)" className="text-[rgb(212,171,85)]" />
            <span className="text-sm font-semibold text-[rgb(45,45,45)]">Depoimentos</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            O Que Nossos <span className="text-[rgb(212,171,85)]">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">A satisfação de quem confia em nosso trabalho</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              <div className="absolute top-8 right-8 text-[rgb(212,171,85)] opacity-20">
                <Quote width={48} height={48} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} width={20} height={20} fill="rgb(212,171,85)" className="text-[rgb(212,171,85)]" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">{t.text}</p>
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[rgb(212,171,85)] to-[rgb(45,45,45)] flex items-center justify-center text-white font-bold text-lg">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.reviews}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-[rgb(212,171,85)]/10 to-[rgb(45,45,45)]/10 px-8 py-6 rounded-2xl">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} width={24} height={24} fill="rgb(212,171,85)" className="text-[rgb(212,171,85)]" />
                ))}
              </div>
              <p className="text-3xl font-bold text-gray-900">5.0</p>
              <p className="text-sm text-gray-600">Avaliação Média</p>
            </div>
            <div className="h-16 w-px bg-gray-300"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">100+</p>
              <p className="text-sm text-gray-600">Clientes Satisfeitos</p>
            </div>
            <div className="h-16 w-px bg-gray-300"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">31</p>
              <p className="text-sm text-gray-600">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
