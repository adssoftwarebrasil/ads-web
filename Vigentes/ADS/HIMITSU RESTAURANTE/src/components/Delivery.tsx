import { Bike } from 'lucide-react';

export default function Delivery() {
  return (
    <section className="bg-white py-16 md:py-24 px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="font-exo font-bold text-4xl md:text-5xl text-black mb-4">
                Delivery em Goiânia
              </h2>
              <p className="font-exo text-xl text-gray-600 mb-8">
                Peça pelo iFood ou Anota Aí
              </p>
            </div>
            <p className="font-exo text-gray-700 text-lg leading-relaxed">
              Levamos o melhor da culinária japonesa até você com qualidade e
              agilidade. Atendemos diversas regiões de Goiânia através dos nossos
              parceiros de delivery.
            </p>
            <div className="bg-[#F8F8F8] rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Bike className="lucide lucide-bike w-6 h-6 text-[#E02023]" />
                <p className="font-exo font-semibold text-black text-lg">
                  Áreas de Cobertura:
                </p>
              </div>
              <p className="font-exo text-gray-700">
                Jardim Europa, Setor Oeste, Setor Marista, Setor Bueno, Setor
                Sul, Centro e regiões próximas.
              </p>
            </div>
            <a
              href="https://www.himitsu.com.br/produto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#E02023] text-white px-8 py-4 rounded-lg hover:bg-[#c01a1e] transition-all hover:scale-105 font-exo font-semibold text-lg"
            >
              Fazer Pedido Agora
            </a>
          </div>
          <div className="relative">
            <img
              src="https://storage.lucasmendes.dev/site-sp/himitsu%2FPoke%20Himitsu%20Shimeji.webp"
              alt="Poké Himitsu Shimeji"
              className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
