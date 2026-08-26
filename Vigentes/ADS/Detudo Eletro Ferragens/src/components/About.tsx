import {
  WHATSAPP_DEFAULT,
  INSTAGRAM_URL,
  WhatsAppIcon,
  InstagramSolidIcon,
} from '../constants';

export default function About() {
  return (
    <section id="sobre" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="transition-all duration-1000 opacity-100 translate-x-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/detudo%2FWhatsApp%20Image%202025-11-15%20at%2010.58.21%20(1).jpeg"
                  alt="Detudo Eletro Ferragens - Loja"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(34,34,34)] via-transparent to-transparent opacity-40"></div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="bg-[rgb(246,239,3)] px-6 py-3 rounded-lg shadow-lg">
                  <p className="text-[rgb(34,34,34)] font-bold text-2xl md:text-3xl">+25</p>
                  <p className="text-[rgb(34,34,34)] font-semibold text-xs md:text-sm">
                    Anos de mercado
                  </p>
                </div>
                <div className="bg-white px-6 py-3 rounded-lg shadow-lg border-2 border-[rgb(246,239,3)]">
                  <p className="text-[rgb(34,34,34)] font-bold text-2xl md:text-3xl">+5000</p>
                  <p className="text-[rgb(34,34,34)] font-semibold text-xs md:text-sm">
                    Produtos
                  </p>
                </div>
              </div>
            </div>
            <div
              className="transition-all duration-1000 opacity-100 translate-x-0"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="inline-block mb-4">
                <span className="text-[rgb(246,239,3)] font-bold text-sm tracking-widest uppercase">
                  Tradição e Confiança
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[rgb(34,34,34)] mb-3">
                Quem somos
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-[rgb(34,34,34)] mb-6 relative inline-block">
                Detudo Eletro Ferragens
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[rgb(246,239,3)]"></span>
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                Com mais de{' '}
                <span className="font-bold text-[rgb(34,34,34)]">25 anos de atuação</span>, a
                Detudo Eletro Ferragens se consolidou como uma referência em Cuiabá no comércio
                de ferragens e ferramentas.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                Trabalhamos com um vasto portfólio de produtos voltados para elétrica,
                hidráulica, utilidades domésticas e muito mais. Nosso compromisso é oferecer
                qualidade, variedade e um atendimento excepcional, garantindo a satisfação de
                nossos clientes em cada compra.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_DEFAULT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[rgb(246,239,3)] text-[rgb(34,34,34)] px-6 sm:px-8 py-3 rounded-lg font-bold text-sm sm:text-base hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  <WhatsAppIcon />
                  Fale no WhatsApp
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[rgb(34,34,34)] text-white px-6 sm:px-8 py-3 rounded-lg font-bold text-sm sm:text-base hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  <InstagramSolidIcon />
                  Siga no Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
