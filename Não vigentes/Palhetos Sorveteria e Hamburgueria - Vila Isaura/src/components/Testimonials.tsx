import { Quote, Star } from 'lucide-react';

const WHATSAPP = 'http://wa.me/556299822672';

interface Testimonial {
  text: string;
  initial: string;
  name: string;
  reviews: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Eu simplesmente amo essa sorveteira, o sorvete é muito saboroso o açaí muito bom, e a comida nem se fala! Eu amo vim com minha família ❤️"',
    initial: 'P',
    name: 'Pri Avalia',
    reviews: '29 avaliações',
  },
  {
    text: '"Melhor hamburgueria da região! Apesar da comida ser de qualidade gourmet, é barata como um Pit Dog. Sem contar que também é uma sorveteria excelente, com infinidades de sabores de sorvetes e confeitaria. O local é aconchegante, agradável, bem iluminado, com brinquedoteca pras crianças e atendentes prestativas e muito educadas. 10/10, parabéns à Palhetto\'s!"',
    initial: 'K',
    name: 'Kayky S.',
    reviews: '11 avaliações',
  },
  {
    text: '"Comprei um sorvete artesanal pelo Ifood, simplesmente maravilhoso e sensacional! Tive que vir elogiar aqui também. O melhor sorvete artesanal que já provei, honestamente, melhor do que muitos de grandes marcas. Estão de parabéns! Vocês viraram uma recomendação minha."',
    initial: 'J',
    name: 'Junior Modesto Cabelo',
    reviews: '4 avaliações',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(255,204,26)]/10 border border-[rgb(255,204,26)] px-4 py-2 rounded-full mb-6">
            <span className="text-[rgb(255,204,26)] font-semibold text-sm">AVALIAÇÕES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(35,31,32)] mb-6">
            O Que Dizem
            <span className="text-[rgb(255,204,26)] block mt-2">Nossos Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Não é só a gente que acha delicioso! Veja o que nossos clientes têm a dizer sobre a experiência na Palhettos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative"
            >
              <div className="absolute -top-4 -left-4 bg-[rgb(255,204,26)] w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <Quote size={24} className="text-[rgb(35,31,32)]" />
              </div>
              <div className="flex items-center space-x-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="text-[rgb(255,204,26)] fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">{t.text}</p>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                <div className="bg-[rgb(255,204,26)]/20 w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-[rgb(35,31,32)] font-bold text-lg">{t.initial}</span>
                </div>
                <div>
                  <h4 className="font-bold text-[rgb(35,31,32)]">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.reviews}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[rgb(35,31,32)] to-[rgb(35,31,32)]/90 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(255,204,26)] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[rgb(255,204,26)] rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={32} className="text-[rgb(255,204,26)] fill-current" />
              ))}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Avaliação 5 Estrelas no Google</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Junte-se aos centenas de clientes satisfeitos que já experimentaram nossos produtos artesanais. Sua vez de se apaixonar!
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(255,204,26)] text-[rgb(35,31,32)] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Experimente Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
