import { Truck, Check } from 'lucide-react';

const items = ['Entrega no mesmo dia', 'Instalação incluída', 'Cobrimos toda região'];

export default function Delivery() {
  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, rgb(39, 14, 113) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        ></div>
      </div>
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary-yellow/20 px-4 py-2 rounded-full">
              <Truck size={20} className="lucide lucide-truck text-primary-yellow" />
              <span className="text-primary-purple font-bold">Delivery Rápido</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-purple">
              Entrega Rápida em Mogi das Cruzes
            </h2>
            <p className="text-xl text-gray-700 font-semibold">
              Bateria descarregada? Nós levamos até você!
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Não perca tempo com bateria descarregada. Nosso serviço de delivery leva a bateria até
              você com rapidez e segurança, incluindo instalação profissional no local.
            </p>
            <ul className="space-y-4">
              {items.map((item, i) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-lg text-gray-700 animate-fadeInLeft"
                  style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-yellow rounded-full flex items-center justify-center">
                    <Check size={20} className="lucide lucide-check text-primary-purple" />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/5511958136971?text=Olá! Gostaria de solicitar um delivery de bateria."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-yellow text-primary-purple px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-200"
            >
              Solicitar Delivery
            </a>
          </div>
          <div className="order-first md:order-last">
            <img
              src="https://storage.lucasmendes.dev/site-sp/JC%20BATERIAS%20MOGI%2Fimg%2Fbaterias-delivery.webp"
              alt="Delivery de Baterias"
              className="w-full h-auto rounded-2xl shadow-2xl animate-slideIn"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
