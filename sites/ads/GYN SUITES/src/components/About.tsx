import { WHATSAPP_URL } from '../constants';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(51,58,114)] mb-4">
            Quem somos
          </h2>
          <div className="w-24 h-1 bg-[rgb(251,246,199)] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-[rgb(51,58,114)] mb-6">GYN SUITES</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Bem-vindo à GYN SUITES, onde nossa missão é proporcionar uma experiência de
              hospedagem única e confortável em Goiânia. Nascemos do desejo de oferecer suítes
              que combinam o aconchego de um lar com a praticidade necessária para viajantes a
              negócios.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Localizados no estratégico bairro Serrinha, nossas acomodações são ideais para
              quem busca conforto, segurança e serviços de qualidade. Totalmente equipadas, as
              suítes garantem uma estadia agradável, com flexibilidade de pacotes que atendem a
              sua necessidade, seja para uma curta ou longa permanência.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-[rgb(51,58,114)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[rgb(51,58,114)]/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Enviar WhatsApp
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="https://storage.lucasmendes.dev/site-sp/gynsuite%2Fquem%20somos.jpg"
              alt="Quem somos - GYN SUITES"
              className="w-full h-auto rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
