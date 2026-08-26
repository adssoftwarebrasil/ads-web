import { Zap, Phone } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5566984052994?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20de%20g%C3%A1s%20ou%20%C3%A1gua.';

const bullets = [
  'Entrega sem taxa de entrega',
  'Melhor preço da cidade',
  'Horário: 7h às 22h todos os dias',
];

export default function CTA() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(248,130,31)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative z-10 order-2 lg:order-1">
            <div className="inline-flex items-center bg-[rgb(248,130,31)]/20 border border-[rgb(248,130,31)]/30 text-[rgb(248,130,31)] px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Entrega Rápida
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Precisando de Gás ou Água?
              <br />
              <span className="text-[rgb(248,130,31)]">Peça Agora!</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Atendimento rápido pelo WhatsApp.{' '}
              <span className="font-bold text-white">Entrega sem taxa</span> em Sinop.
            </p>
            <div className="space-y-4 mb-8">
              {bullets.map((bullet) => (
                <div key={bullet} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[rgb(248,130,31)] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-200">{bullet}</span>
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[rgb(248,130,31)] to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-orange-600 hover:to-[rgb(248,130,31)] transition-all duration-300 shadow-2xl hover:shadow-[0_0_40px_rgba(248,130,31,0.6)] transform hover:scale-105 group"
            >
              <Phone className="w-6 h-6 mr-3 animate-wiggle" />
              Pedir pelo WhatsApp
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-2">Ou ligue agora:</p>
              <a
                href="tel:6684052994"
                className="text-2xl font-bold text-white hover:text-[rgb(248,130,31)] transition-colors inline-flex items-center"
              >
                <Phone className="w-6 h-6 mr-2" />
                (66) 98405-2994
              </a>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/kerbergas%2Fseugasacabou-900%E2%80%8A%C3%97%E2%80%8A1600%20.jpg"
                alt="Seu Gás Acabou - Kerber Gás"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute top-4 right-4 bg-[rgb(248,130,31)] text-white px-4 py-2 rounded-full font-bold shadow-lg animate-bounce-slow">
                Entrega Grátis
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[rgb(248,130,31)] rounded-2xl opacity-20 blur-2xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-orange-600 rounded-2xl opacity-20 blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
