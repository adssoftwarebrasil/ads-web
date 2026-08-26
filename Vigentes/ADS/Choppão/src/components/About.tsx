import { Award, Utensils, Heart, Users } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/5565981321662';

const features = [
  { icon: Award, title: 'Tradição', text: 'Mais de 50 anos servindo Cuiabá com qualidade e excelência' },
  { icon: Utensils, title: 'Variedade', text: 'Culinária regional, brasileira e internacional em um só lugar' },
  { icon: Heart, title: 'Qualidade', text: 'Ingredientes frescos e selecionados para cada prato' },
  { icon: Users, title: 'Ambiente', text: 'Espaço acolhedor perfeito para família e amigos' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Nossa História</h2>
          <div className="w-24 h-1 bg-[rgb(71,136,84)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tradição e sabor desde 1974, servindo Cuiabá com excelência
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img
              src="https://storage.lucasmendes.dev/site-sp/choppao%20restaurante%2Fimg%2Ffrente-restaurante-noturno-movimentado.webp"
              alt="Frente do Restaurante CHOPPÃO"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-[rgb(71,136,84)] text-white px-8 py-6 rounded-2xl shadow-xl">
              <p className="text-5xl font-bold">50+</p>
              <p className="text-lg">Anos de Tradição</p>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">CHOPPÃO "Desde 1974"</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              O CHOPPÃO é um restaurante, bar e choperia tradicional que se tornou um verdadeiro
              destino gastronômico e turístico de Cuiabá, reconhecido por sua forte identidade local
              e autenticidade.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Com um serviço à la carte diversificado, oferecemos pratos para família e individuais,
              destacando a comida regional, peixaria, culinária brasileira e internacional, além de
              saladas, hambúrgueres, pizzas, porções variadas, chopp gelado, cervejas artesanais,
              drinks exclusivos e sucos naturais.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Unindo tradição e modernidade, atendemos presencialmente e por delivery, proporcionando
              uma experiência gastronômica completa todos os dias, das 11:00 às 00:00.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(71,136,84)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[rgb(61,126,74)] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Fale Conosco
              </a>
              <button className="bg-white text-[rgb(71,136,84)] border-2 border-[rgb(71,136,84)] px-6 py-3 rounded-full font-semibold hover:bg-[rgb(71,136,84)] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                Ver Cardápio Completo
              </button>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="bg-[rgb(71,136,84)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-[rgb(71,136,84)]" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h4>
                <p className="text-gray-600">{f.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
