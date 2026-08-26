import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: '"Ótimos preços e Excelente atendimento. Comprei um pneu pra moto e a instalação é gratuita e ainda ganha um cupom para concorrer ao sorteio de uma Moto Honda Pop100. Ótima recomendação, visite!"',
    name: 'LeFag 19',
    meta: 'Local Guide · 184 avaliações',
  },
  {
    text: '"Muito bom! Excelente atendimento e preços acessíveis."',
    name: 'João Pedro P. Oliveira',
    meta: 'Local Guide · 34 avaliações',
  },
  {
    text: '"Melhor preço da cidade, oficina nota 1000."',
    name: 'Raumastroni Silva da Mota',
    meta: 'Local Guide · 90 avaliações',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(2,73,137)] mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <div className="w-24 h-1 bg-[rgb(255,236,2)] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A satisfação dos nossos clientes é o nosso maior orgulho
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-gradient-to-br from-[rgb(246,252,255)] to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[rgb(2,73,137)]/10 relative"
              >
                <div className="absolute -top-4 left-8">
                  <div className="bg-[rgb(255,236,2)] rounded-full p-3 shadow-lg">
                    <Quote className="w-6 h-6 text-[rgb(2,73,137)]" />
                  </div>
                </div>
                <div className="flex items-center mb-4 mt-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[rgb(255,236,2)] text-[rgb(255,236,2)]"
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {t.text}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold text-[rgb(2,73,137)] text-lg">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-600">{t.meta}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-[rgb(2,73,137)] to-[rgb(1,58,109)] rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Junte-se aos Nossos Clientes Satisfeitos!
              </h3>
              <p className="text-xl mb-8 text-[rgb(246,252,255)]">
                Venha conhecer por que somos a moto peças de confiança de
                centenas de motociclistas em Boa Vista
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="http://wa.me/559591557077?text=Olá! Gostaria de conhecer a loja e os produtos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[rgb(255,236,2)] text-[rgb(2,73,137)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(255,246,102)] transition-all duration-300 shadow-lg"
                >
                  Fale Conosco
                </a>
                <a
                  href="https://www.google.com/maps/place/Coimbra+Moto+Pe%C3%A7as/@2.8030576,-60.6842999,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[rgb(2,73,137)] transition-all duration-300"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
