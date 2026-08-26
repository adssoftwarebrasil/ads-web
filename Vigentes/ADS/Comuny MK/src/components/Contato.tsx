import { Sparkles, CheckCircle } from 'lucide-react';
import FloatingParticles from './FloatingParticles';

const groups = [
  {
    delay: '0s',
    title: 'Diagnóstico do seu posicionamento atual',
    items: [
      'Avaliação da presença online (redes sociais, site e outros canais)',
      'Identificação dos pontos fortes e oportunidades de melhoria',
    ],
  },
  {
    delay: '0.15s',
    title: 'Análise do público-alvo',
    items: [
      'Estudo inicial do perfil ideal de cliente (necessidades, interesses e comportamento)',
      'Identificação de possíveis ajustes na comunicação para atrair mais leads qualificados',
    ],
  },
  {
    delay: '0.3s',
    title: 'Insights personalizados',
    items: [
      'Sugestão de ações imediatas que podem gerar impacto rápido no negócio',
      'Recomendações estratégicas baseadas na análise completa',
    ],
  },
];

export default function Contato() {
  return (
    <section
      id="contato"
      className="py-12 md:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700"
      style={{ backgroundSize: '300% 300%', animation: 'gradient-shift 8s ease infinite' }}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <FloatingParticles count={40} colors={['white']} minDuration={5} maxDuration={10} />
      </div>
      <div className="absolute top-10 left-10 w-48 h-48 md:w-72 md:h-72 bg-green-400/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 md:w-72 md:h-72 bg-purple-400/20 rounded-full blur-[100px]"></div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-6xl">
        <div className="transition-all duration-1000 opacity-100 translate-y-0">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
              Seu próximo nível está a um{' '}
              <span className="bg-gradient-to-r from-green-300 to-green-400 bg-clip-text text-transparent">
                clique de distância
              </span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto px-4">
              Somos um ecossistema de marketing digital que entrega estratégias personalizadas e resultados reais!
              Impulsionamos o crescimento do seu negócio, sempre com a garantia de que sua satisfação será nossa
              prioridade.
            </p>
          </div>
          <div
            className="glassmorphism-dark rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 mb-8 md:mb-12 backdrop-blur-xl"
            style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
                O que você irá receber nesta <span className="text-green-400">análise de perfil gratuita</span>
              </h3>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                <p className="text-sm md:text-base text-white/90 font-medium">Reunião de 1 hora via Meet ou Zoom</p>
              </div>
              <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
                Você terá acesso a uma reunião com um de nossos especialistas para te direcionar. Este tempo é precioso
                para que você possa refletir e tirar dúvidas.
              </p>
            </div>
            <div className="space-y-6 md:space-y-8">
              {groups.map((g, i) => (
                <div key={i} className="transition-all duration-500 opacity-100 translate-y-0" style={{ transitionDelay: g.delay }}>
                  <div className="flex items-start gap-3 md:gap-4 mb-3">
                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-xl bg-green-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-green-400 leading-tight pt-1">{g.title}</h4>
                  </div>
                  <ul className="ml-11 md:ml-14 space-y-2">
                    {g.items.map((item, j) => (
                      <li key={j} className="text-sm md:text-base text-white/80 flex items-start leading-relaxed">
                        <span className="text-green-400 mr-2 flex-shrink-0 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="my-6 md:my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="text-center">
              <p className="text-xs md:text-sm text-white/60 mb-4">✨ Análise 100% gratuita e sem compromisso</p>
            </div>
          </div>
          <div className="text-center">
            <button className="group relative w-full md:w-auto px-8 md:px-12 py-4 md:py-5 bg-white text-purple-700 font-bold text-base md:text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/50">
              <span className="relative z-10 flex items-center justify-center gap-2">
                IMPULSIONAR MEU MARKETING
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-180 transition-transform duration-500" />
              </span>
              <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </button>
            <p className="text-xs md:text-sm text-white/60 mt-4">Agende sua análise gratuita agora mesmo! 🚀</p>
          </div>
        </div>
      </div>
    </section>
  );
}
