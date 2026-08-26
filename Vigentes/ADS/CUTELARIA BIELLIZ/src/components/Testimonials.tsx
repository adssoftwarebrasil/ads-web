import { Quote, Star } from 'lucide-react';

interface Testimonial {
  initials: string;
  name: string;
  when: string;
  text: string;
  photos: string;
}

const testimonials: Testimonial[] = [
  {
    initials: 'DB',
    name: 'Deyvid Borgo',
    when: '1 dia atrás',
    text: '"MAGNÍFICAS!! Tudo feito com qualidade e maestria. Sem palavras para descrever! Preciso até de uma maletinha melhor!!"',
    photos: '13 fotos',
  },
  {
    initials: 'RS',
    name: 'Ricardo Santos',
    when: '2 semanas atrás',
    text: '"Atendimento excepcional! Comprei uma faca de churrasco em aço damasco e fiquei impressionado com a qualidade. O Luiz é muito atencioso e conhece profundamente cada produto. Recomendo demais!"',
    photos: '8 fotos',
  },
  {
    initials: 'MO',
    name: 'Mariana Oliveira',
    when: '3 semanas atrás',
    text: '"Adorei a variedade de produtos! Além de comprar facas maravilhosas, encontrei miniaturas incríveis para minha coleção. A personalização de facas na hora é um diferencial que não encontrei em outro lugar!"',
    photos: '5 fotos',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-[rgb(245,241,220)] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(84,10,1)] text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            DEPOIMENTOS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(84,10,1)] mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. Veja o que eles têm a dizer
            sobre nossa cutelaria.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
            >
              <Quote size={48} className="absolute top-4 right-4 text-[rgb(245,241,220)]" />
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[rgb(84,10,1)] to-[rgb(120,30,20)] flex items-center justify-center text-white font-bold text-xl mr-4">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-[rgb(84,10,1)] text-lg">{t.name}</h4>
                  <p className="text-gray-500 text-sm">{t.when}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed italic">{t.text}</p>
              <div className="mt-4 text-sm text-gray-500">{t.photos}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Cutelaria+Bielliz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[rgb(84,10,1)] font-bold hover:underline"
          >
            Ver mais avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
