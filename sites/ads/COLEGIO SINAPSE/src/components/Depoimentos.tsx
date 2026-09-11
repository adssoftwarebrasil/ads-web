import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      '"O Colégio Sinapse transformou a vida do meu filho. A metodologia Bernoulli e o acompanhamento individualizado fizeram toda a diferença. Ele foi aprovado em Medicina na UFG!"',
    name: 'Maria Silva',
    role: 'Mãe de aluno do 3º ano',
  },
  {
    quote:
      '"Estudei no Sinapse e posso afirmar que foi a melhor escolha. Os professores são excelentes, sempre dispostos a ajudar. Consegui minha aprovação graças ao ensino de qualidade."',
    name: 'João Santos',
    role: 'Ex-aluno, Engenharia Civil',
  },
  {
    quote:
      '"Mudamos meu filho para o Colégio Sinapse e a evolução foi incrível. Ele está mais motivado, as notas melhoraram e já pensa em qual curso fazer na universidade."',
    name: 'Ana Paula',
    role: 'Mãe de aluno do 8º ano',
  },
];

export default function Depoimentos() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            O que dizem
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[rgb(234,58,35)] to-[rgb(171,24,66)]">
              Nossa Comunidade
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depoimentos reais de famílias que confiaram no Colégio Sinapse e transformaram o futuro de seus filhos.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-12 h-12 text-[rgb(234,58,35)] opacity-50" />
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[rgb(234,58,35)] text-[rgb(234,58,35)]" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">{t.quote}</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-[rgb(171,24,66)]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[rgb(234,58,35)] to-[rgb(171,24,66)] rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Faça parte dessa comunidade de sucesso!</h3>
          <p className="text-xl mb-8 opacity-90">
            Siga-nos no Instagram e acompanhe de perto os resultados e a rotina do Colégio Sinapse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/colegiosinapsegoiania/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[rgb(171,24,66)] px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Seguir no Instagram
            </a>
            <a
              href="http://wa.me/5562999690082?text=Olá! Quero saber mais sobre o Colégio Sinapse!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[rgb(171,24,66)] transition-all duration-300"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
