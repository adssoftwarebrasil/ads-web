import {
  MessageCircle,
  Phone,
  ArrowRight,
  Clock,
  Mail,
  Send,
  MapPin,
  Instagram,
  Facebook,
} from 'lucide-react';

const BRAND = 'rgb(172, 0, 0)';

const benefits = [
  'Resposta Imediata',
  'Análise Gratuita',
  '100% Confidencial',
  'Sem Compromisso',
];

const badges = [
  'Primeira Consulta Gratuita',
  'Atendimento 100% Confidencial',
  'Resposta em até 24h',
];

export default function Contato() {
  return (
    <section
      id="contato"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1.5" fill="white"></circle>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)"></rect>
          </svg>
        </div>
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse-slow"
          style={{ backgroundColor: BRAND }}
        ></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse-slow delay-1000"
          style={{ backgroundColor: BRAND }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <MessageCircle
              width={20}
              height={20}
              className="lucide lucide-message-circle "
              style={{ color: BRAND }}
            />
            <span className="text-sm font-bold tracking-wider uppercase text-white">
              Entre em Contato
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Precisa de <span style={{ color: BRAND }}>Assistência Jurídica</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Entre em contato agora e receba <strong className="text-white">atendimento especializado</strong> com
            <strong className="text-white"> análise gratuita</strong> do seu caso
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 opacity-5" style={{ backgroundColor: BRAND }}>
              <div
                className="absolute inset-0"
                style={{ background: 'radial-gradient(circle, rgb(172, 0, 0) 0%, transparent 70%)' }}
              ></div>
            </div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: 'rgba(172, 0, 0, 0.1)' }}
                    >
                      <Phone
                        width={32}
                        height={32}
                        className="lucide lucide-phone "
                        style={{ color: BRAND }}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">WhatsApp</h3>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 rounded-full animate-pulse"
                          style={{ backgroundColor: BRAND }}
                        ></div>
                        <span className="text-sm font-semibold text-gray-600">Online Agora</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                    (91) 99342-4086
                  </p>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    Atendimento <strong>24/7</strong> via WhatsApp. Envie sua mensagem a qualquer
                    momento e receba{' '}
                    <strong style={{ color: BRAND }}>resposta rápida</strong> da nossa equipe.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {benefits.map((b) => (
                      <div
                        key={b}
                        className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                      >
                        <span style={{ color: BRAND }}>✓</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:self-center">
                  <a
                    href="https://wa.me/5591993424086"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative inline-flex items-center justify-center px-8 py-5 rounded-2xl font-bold text-lg text-white transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden whitespace-nowrap"
                    style={{ backgroundColor: BRAND }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                    <MessageCircle
                      width={24}
                      height={24}
                      className="lucide lucide-message-circle mr-3 relative z-10"
                    />
                    <span className="relative z-10">Chamar Agora</span>
                    <ArrowRight
                      width={22}
                      height={22}
                      className="lucide lucide-arrow-right ml-3 group-hover/btn:translate-x-1 transition-transform relative z-10"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5" style={{ backgroundColor: BRAND }}>
              <div
                className="absolute inset-0"
                style={{ background: 'radial-gradient(circle, rgb(172, 0, 0) 0%, transparent 70%)' }}
              ></div>
            </div>
            <div className="relative z-10">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-6 mx-auto"
                style={{ backgroundColor: 'rgba(172, 0, 0, 0.1)' }}
              >
                <Clock
                  width={32}
                  height={32}
                  className="lucide lucide-clock "
                  style={{ color: BRAND }}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Horário de Atendimento
              </h3>
              <div className="text-center mb-6">
                <div className="text-base text-gray-600 font-semibold mb-2">Segunda a Sexta</div>
                <div className="text-4xl font-black text-gray-900 mb-1">8:00 às 18:00h</div>
              </div>
              <div
                className="p-5 rounded-2xl text-center"
                style={{ backgroundColor: 'rgba(172, 0, 0, 0.05)' }}
              >
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong className="block mb-2 text-base" style={{ color: BRAND }}>
                    WhatsApp 24/7
                  </strong>
                  Envie mensagens a qualquer momento. Responderemos no próximo horário comercial.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02]">
            <div className="flex items-start gap-6">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(172, 0, 0, 0.2)' }}
              >
                <Mail
                  width={28}
                  height={28}
                  className="lucide lucide-mail "
                  style={{ color: BRAND }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">E-mail Profissional</h3>
                <p className="text-gray-300 break-words mb-4 text-sm">
                  brazaoadvocaciaeconsultoria@gmail.com
                </p>
                <a
                  href="mailto:brazaoadvocaciaeconsultoria@gmail.com"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: BRAND }}
                >
                  Enviar e-mail
                  <Send
                    width={16}
                    height={16}
                    className="lucide lucide-send group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02]">
            <div className="flex items-start gap-6">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(172, 0, 0, 0.2)' }}
              >
                <MapPin
                  width={28}
                  height={28}
                  className="lucide lucide-map-pin "
                  style={{ color: BRAND }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Nosso Endereço</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Travessa Vileta, 1963
                  <br />
                  Marco - Belém/PA
                  <br />
                  CEP: 66095-346
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Siga-nos nas <span style={{ color: BRAND }}>Redes Sociais</span>
              </h3>
              <p className="text-gray-300 text-base">
                Fique por dentro de novidades, dicas jurídicas e atualizações
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/brazaoadvocaciaeconsultoria"
                target="_blank"
                rel="noopener noreferrer"
                className="group/social w-14 h-14 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram width={24} height={24} className="lucide lucide-instagram text-white" />
              </a>
              <a
                href="https://www.facebook.com/share/1GbW7qJshr/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/social w-14 h-14 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook width={24} height={24} className="lucide lucide-facebook text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 text-gray-300">
            {badges.map((b) => (
              <div key={b} className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: BRAND }}
                ></div>
                <span className="text-sm font-semibold">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
