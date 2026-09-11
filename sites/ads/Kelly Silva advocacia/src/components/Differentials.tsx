import { CheckCircle, Award, Heart, ShieldCheck } from 'lucide-react';

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-beige py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <h2 className="font-bold text-4xl lg:text-5xl text-navy text-center mb-16">
          Por Que Escolher a Dra. Kelly Silva?
        </h2>
        <div className="space-y-8">
          {/* Row 1 */}
          <div className="grid lg:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 opacity-0 translate-y-10">
            <div className="order-2 lg:order-1 overflow-hidden">
              <img
                src="https://storage.lucasmendes.dev/site-sp/kellysilva%2Fimg%2Fimgi_10_bg-whatsapp.webp"
                alt="Atendimento via WhatsApp"
                className="w-full h-full object-cover object-right"
                loading="lazy"
                style={{ objectPosition: 'right center' }}
              />
            </div>
            <div className="bg-navy p-10 lg:p-14 flex flex-col justify-center order-1 lg:order-2">
              <CheckCircle className="text-gold-light w-12 h-12 mb-5" />
              <h3 className="font-bold text-3xl lg:text-4xl text-off-white mb-5">
                Atendimento Humanizado e Acessível
              </h3>
              <p className="font-serif text-lg text-beige leading-relaxed">
                Atendimento via WhatsApp disponível, com respostas rápidas e orientação clara em cada etapa do seu processo.
              </p>
            </div>
          </div>
          {/* Row 2 */}
          <div className="grid lg:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 delay-200 opacity-0 translate-y-10">
            <div className="bg-gold p-10 lg:p-14 flex flex-col justify-center">
              <Award className="text-navy w-12 h-12 mb-5" />
              <h3 className="font-bold text-3xl lg:text-4xl text-navy mb-5">
                Método Exclusivo de Preparação para Perícia
              </h3>
              <p className="font-serif text-lg text-off-white leading-relaxed">
                Desenvolvido ao longo de 10 anos de experiência, com orientação estratégica completa para perícia médica e avaliação social.
              </p>
            </div>
            <div className="overflow-hidden">
              <img
                src="https://storage.lucasmendes.dev/site-sp/kellysilva%2Fimg%2Fimgi_11_bg-CURSO.webp"
                alt="Preparação para perícia"
                className="w-full h-full object-cover object-right"
                loading="lazy"
                style={{ objectPosition: 'right center' }}
              />
            </div>
          </div>
          {/* Row 3 */}
          <div className="grid lg:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 delay-300 opacity-0 translate-y-10">
            <div className="order-2 lg:order-1 overflow-hidden">
              <img
                src="https://storage.lucasmendes.dev/site-sp/kellysilva%2Fimg%2Fimgi_12_bg-tiktok.webp"
                alt="Especialização em Autismo"
                className="w-full h-full object-cover object-right"
                loading="lazy"
                style={{ objectPosition: 'right center' }}
              />
            </div>
            <div className="bg-gold-medium p-10 lg:p-14 flex flex-col justify-center order-1 lg:order-2">
              <Heart className="text-navy w-12 h-12 mb-5" />
              <h3 className="font-bold text-3xl lg:text-4xl text-navy mb-5">
                Especialização em Autismo e Vulnerabilidade Social
              </h3>
              <p className="font-serif text-lg text-navy leading-relaxed">
                Experiência vivida como mãe de criança autista, combinada com profundo conhecimento técnico em casos de BPC/LOAS.
              </p>
            </div>
          </div>
          {/* Row 4 */}
          <div className="grid lg:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 delay-500 opacity-0 translate-y-10">
            <div className="bg-gray-700 p-10 lg:p-14 flex flex-col justify-center">
              <ShieldCheck className="text-gold-light w-12 h-12 mb-5" />
              <h3 className="font-bold text-3xl lg:text-4xl text-off-white mb-5">
                Mais de 10 Anos de Experiência
              </h3>
              <p className="font-serif text-lg text-beige leading-relaxed">
                Atuação consolidada em Direito Previdenciário, com centenas de casos resolvidos e direitos garantidos.
              </p>
            </div>
            <div className="overflow-hidden">
              <img
                src="https://storage.lucasmendes.dev/site-sp/kellysilva%2Fimg%2Fimgi_14_bg-youtube-1.webp"
                alt="Experiência comprovada"
                className="w-full h-full object-cover object-right"
                loading="lazy"
                style={{ objectPosition: 'right center' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
