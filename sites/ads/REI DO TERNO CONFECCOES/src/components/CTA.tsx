import { Sparkles, Phone, MessageCircle, Clock, MapPin, Gift, Check, type LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  label: string;
  delay: number;
}

const FEATURES: Feature[] = [
  { icon: Clock, label: 'Atendimento Rápido', delay: 0 },
  { icon: MessageCircle, label: 'Consultoria Gratuita', delay: 100 },
  { icon: MapPin, label: 'Estacionamento Próprio', delay: 200 },
  { icon: Gift, label: 'Condições Especiais', delay: 300 },
];

function GoldStar() {
  return (
    <svg className="w-5 h-5 text-[#B89E5E] fill-[#B89E5E]" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  );
}

export default function CTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-[#2D587A] via-[#417EAD] to-[#2D587A]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#B89E5E] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-[#B89E5E] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white rotate-45"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-40 h-40 border-2 border-[#B89E5E] rotate-12"></div>
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-2">
              <Sparkles size={16} className="text-[#B89E5E] animate-pulse" />
              <span className="text-sm font-semibold text-white">Transforme Seu Estilo Hoje</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Pronto para Renovar <br />
              seu{' '}
              <span className="text-[#B89E5E] relative">
                Guarda-Roupa
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path
                    d="M1 5.5C50 1.5 150 1.5 199 5.5"
                    stroke="#B89E5E"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </span>
              ?
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Entre em contato agora e descubra como podemos transformar seu estilo
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://wa.me/5517992369599"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 bg-[#B89E5E] text-white px-8 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#B89E5E]/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#a08952] via-[#B89E5E] to-[#a08952] bg-[length:200%_100%] animate-shimmer"></div>
              <div className="relative flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-2">
                  <Phone size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <span>Falar com Especialista</span>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-white/20 animate-ping-slow opacity-0 group-hover:opacity-100"></div>
            </a>
            <a
              href="https://wa.me/5517992369599"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-[#417EAD] transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
              <span>Enviar Mensagem</span>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.label}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                  style={{ animationDelay: `${feature.delay}ms` }}
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className="bg-[#B89E5E]/20 text-[#B89E5E] rounded-full p-3 group-hover:scale-110 group-hover:bg-[#B89E5E] group-hover:text-white transition-all duration-300">
                      <Icon size={20} />
                    </div>
                  </div>
                  <p className="text-white text-sm text-center font-medium leading-tight">
                    {feature.label}
                  </p>
                  <div className="absolute top-2 right-2 bg-[#B89E5E] rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Check size={12} className="text-white" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 text-white/80 text-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <GoldStar key={i} />
                ))}
              </div>
              <span className="font-semibold">Avaliação 5.0 • Clientes Satisfeitos</span>
            </div>
            <p className="text-white/60 text-sm">
              📍 Rua Coronel Spínola de Castro, 2898 - Centro, Rio Preto
            </p>
          </div>
          <div className="absolute top-1/2 left-0 w-2 h-20 bg-gradient-to-b from-transparent via-[#B89E5E] to-transparent opacity-50 blur-sm"></div>
          <div className="absolute top-1/2 right-0 w-2 h-20 bg-gradient-to-b from-transparent via-[#B89E5E] to-transparent opacity-50 blur-sm"></div>
        </div>
      </div>
    </section>
  );
}
