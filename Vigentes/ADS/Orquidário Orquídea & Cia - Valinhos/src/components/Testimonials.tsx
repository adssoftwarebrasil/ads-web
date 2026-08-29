import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Lucelena Martins',
    role: 'Cliente',
    image:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: '"Lugar maravilhoso!!! Vale a pena fazer uma visita e comprar orquídea 👏🏻❤️"',
  },
  {
    name: 'Carlos José Figueiredo',
    role: 'Cliente',
    image:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: '"Excelente variedade de plantas, com ênfase nas orquídeas. Além de boas compras, vale como passeio e aprendizado."',
  },
  {
    name: 'Juliana Ribeiro',
    role: 'Cliente',
    image:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: '"Seguia pelo Instagram e sempre quis conhecer. Que delícia! Orquídeas de todas as variedades, tamanhos, cores, preços... Para presentear, para cultivar... O rapaz que me atendeu conhecia muito sobre o cultivo e manutenção. Certamente voltarei! Valeu a visita."',
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[rgb(22,126,79)] font-semibold text-sm uppercase tracking-wider mb-3 block">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative border border-gray-100"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[rgb(163,206,15)]/20" />
              <div className="flex items-center mb-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                  <p className="text-gray-600 text-sm">{t.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[rgb(163,206,15)] fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed italic">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[rgb(22,126,79)] to-[rgb(163,206,15)] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Junte-se aos Nossos Clientes Satisfeitos
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Mais de 5.000 clientes já transformaram seus espaços com nossas plantas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="http://wa.me/551941171827"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[rgb(22,126,79)] px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
            >
              Fale Conosco no WhatsApp
            </a>
            <a
              href="tel:1941171827"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all border-2 border-white/30 font-semibold text-lg"
            >
              Ligue: (19) 4117-1827
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
