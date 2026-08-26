import { ArrowRight, CheckCircle } from 'lucide-react';

const features: string[] = [
  'Equipamentos em excelente estado',
  'Atendimento especializado',
  'Locação garantida e segura',
  'Peças e manutenção',
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/romaq%2Fimg%2Fhero-background.webp"
          alt="Romaq Empilhadeiras"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(66,66,66)]/95 via-[rgb(66,66,66)]/85 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Precisando de uma <span className="text-[rgb(240,186,25)]">Empilhadeira?</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Soluções completas em locação, venda, peças e manutenção de empilhadeiras. Converse com quem realmente entende do assunto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="http://wa.me/553432321300?text=Olá! Gostaria de mais informações sobre empilhadeiras."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[rgb(240,186,25)] text-[rgb(66,66,66)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(220,166,5)] transition-all transform hover:scale-105 shadow-lg"
            >
              Fale Conosco Agora
              <ArrowRight className="lucide lucide-arrow-right" width={24} height={24} />
            </a>
            <a
              href="tel:+553432321300"
              className="inline-flex items-center justify-center gap-3 bg-white text-[rgb(66,66,66)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              (34) 3232-1300
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 text-white">
                <CheckCircle
                  className="lucide lucide-check-circle text-[rgb(240,186,25)] flex-shrink-0"
                  width={24}
                  height={24}
                />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
