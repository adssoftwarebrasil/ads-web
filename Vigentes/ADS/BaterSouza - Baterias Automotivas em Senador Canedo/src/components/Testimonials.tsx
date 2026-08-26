import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: '"Bateria todos vendem... mas ótimo atendimento com orientação técnica, só eles tem. Super recomendo!"',
    name: 'Fernando Ribeiro',
    role: 'Local Guide',
    when: 'Há 3 meses',
  },
  {
    text: '"Gostei do atendimento, rapidez para responder, clareza e preço justo!"',
    name: 'Nathan Nasc',
    role: 'Cliente',
    when: 'Há 9 meses',
  },
  {
    text: '"Atendimento nota 10, preço justo e produtos de qualidade."',
    name: 'Bruno Paulino',
    role: 'Cliente',
    when: 'Há 8 meses',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
            O que nossos <span className="text-yellow-500">clientes dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-blue-600 relative group hover:-translate-y-1"
            >
              <Quote className="lucide lucide-quote absolute top-6 right-6 w-12 h-12 text-yellow-400 opacity-20" width={24} height={24} />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="lucide lucide-star w-5 h-5 fill-yellow-400 text-yellow-400" width={24} height={24} />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed relative z-10">{t.text}</p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-600">{t.role}</p>
                <p className="text-xs text-gray-500 mt-1">{t.when}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-blue-600 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Sua opinião é muito importante!</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Já é nosso cliente? Compartilhe sua experiência e ajude outras pessoas a conhecerem nosso
            trabalho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.google.com/maps/place/BaterSouza+2+Baterias/@-16.701019,-49.12411428179079,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
            >
              Avaliar no Google
            </a>
            <a
              href="http://wa.me/556292766466?text=Olá! Gostaria de fazer um elogio sobre o atendimento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors font-bold text-lg"
            >
              Enviar Feedback
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
