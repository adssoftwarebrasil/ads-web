import { Fragment } from 'react';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  alt: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'LS JM',
    role: 'Cliente',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=LS',
    alt: 'LS JM',
    text: '"Ótimo atendimento... recomendo sem dúvidas, o melhor. Pessoal muito gente boa.... sucesso"',
  },
  {
    name: 'Naiana Silva',
    role: 'Cliente',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=NS',
    alt: 'Naiana Silva',
    text: '"Tiago e sua equipe nota 1000 parabéns pelo atendimento, educação e boa vontade de resolver as coisas além do melhor preço da cidade"',
  },
  {
    name: 'Djalma Oliveira Santos',
    role: 'Local Guide',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=DO',
    alt: 'Djalma Oliveira Santos',
    text: '"Ótimo atendimento sempre tem preço bom"',
  },
];

const ratingBars = ['Qualidade dos Produtos', 'Atendimento', 'Preço Justo', 'Rapidez na Entrega'];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#28156F] text-[#F2CD00] px-4 py-2 rounded-full font-semibold text-sm mb-4">
            Depoimentos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#28156F] mb-6">O Que Nossos Clientes Dizem</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A satisfação dos nossos clientes é o nosso maior reconhecimento. Veja o que eles têm a dizer sobre a Udi
            Latas.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <div className="absolute top-6 right-6 text-[#F2CD00] opacity-20">
                <Quote className="w-12 h-12" />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <img src={t.avatar} alt={t.alt} className="w-16 h-16 rounded-full bg-gray-100" />
                <div>
                  <div className="font-bold text-[#28156F] text-lg">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F2CD00] text-[#F2CD00]" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed italic">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-br from-[#F2CD00] to-[#F2CD00]/80 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-[#28156F]">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Avaliação 5 Estrelas no Google</h3>
              <p className="text-lg mb-6 opacity-90">
                Nossos clientes confiam na qualidade dos nossos produtos e no nosso atendimento diferenciado. Junte-se
                aos milhares de clientes satisfeitos!
              </p>
              <div className="flex items-center gap-2 text-2xl font-bold">
                <Star className="w-8 h-8 fill-[#28156F] text-[#28156F]" />
                <span>5.0 de avaliação média</span>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 space-y-6">
              {ratingBars.map((label, idx) => (
                <Fragment key={label}>
                  {idx > 0 && <div className="h-px bg-[#28156F]/20"></div>}
                  <div className="flex items-center justify-between">
                    <span className="text-[#28156F] font-semibold">{label}</span>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#28156F] text-[#28156F]" />
                      ))}
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
