import { CheckCircle2, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/site';

const features = [
  'Mais de 10 anos de experiência comprovada',
  'Equipe técnica altamente qualificada',
  'Materiais de primeira linha',
  'Atendimento transparente com fotos e vídeos',
  'Prazos cumpridos rigorosamente',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-50">
              <img
                src="https://storage.lucasmendes.dev/site-sp/expressocarse/Quem%20somos.png"
                alt="Quem somos - Expresso Car"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-red-600 text-white rounded-2xl p-5 shadow-xl">
              <div className="text-3xl font-black leading-none">10+</div>
              <div className="text-xs font-semibold mt-1 tracking-wide">
                Anos no<br />mercado
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pt-8 lg:pt-0">
            <span className="inline-block text-red-600 text-sm font-bold tracking-widest uppercase mb-4">
              Quem somos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
              EXPRESSO CAR
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8">
              A Expressocar é uma referência em Aracaju, com mais de 10 anos de experiência no
              mercado automotivo. Nossa missão é oferecer serviços de funilaria, pintura e estética
              automotiva com compromisso, rapidez e qualidade. Cada cliente e seu veículo são
              tratados com respeito e dedicação, sempre visando a satisfação e a confiança.
            </p>
            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2
                    className="lucide lucide-check-circle2 text-red-600 flex-shrink-0"
                    width={20}
                    height={20}
                  />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-red-600/30 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="lucide lucide-message-circle" width={20} height={20} />
                Enviar WhatsApp
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
