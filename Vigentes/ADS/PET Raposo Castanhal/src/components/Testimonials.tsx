import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: '"Atendimento excepcional! A equipe cuida da Luna como se fosse da família. Sempre encontro tudo que preciso e com ótimos preços."',
    name: 'Maria Silva',
    pet: 'Luna (Golden Retriever)',
  },
  {
    text: '"A melhor pet shop de Castanhal! Produtos de qualidade e veterinários muito competentes. Recomendo de olhos fechados!"',
    name: 'João Santos',
    pet: 'Thor (Gato Persa)',
  },
  {
    text: '"Há anos confio no Pet Raposo para cuidar da minha Mel. Atendimento humanizado e produtos de primeira linha."',
    name: 'Ana Paula',
    pet: 'Mel (Poodle)',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600">
            Depoimentos de tutores satisfeitos
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote
                size={48}
                className="absolute top-6 right-6 text-[rgb(253,118,22)] opacity-20"
              />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                {t.text}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-600">{t.pet}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://www.facebook.com/p/Pet-Raposo-Castanhal-100092298881475/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[rgb(253,118,22)] font-semibold hover:text-[rgb(233,98,2)] transition-colors"
          >
            Veja mais avaliações no Facebook →
          </a>
        </div>
      </div>
    </section>
  );
}
