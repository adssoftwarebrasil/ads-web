import { MapPin, Clock, Phone, MessageCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#fdfcfb]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Coluna de Informações - 5 colunas */}
          <div className="lg:col-span-5">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
                Vamos conversar?
              </h2>
              <p className="text-neutral-600 font-light text-lg">
                Seja para um projeto de mesa posta exclusivo ou demandas industriais em bordados, nossa equipe está pronta para te receber.
              </p>
            </div>

            <div className="space-y-10">
              {/* Endereço */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white shadow-sm border border-neutral-100 flex items-center justify-center group-hover:bg-[#F7D061] transition-colors duration-500">
                  <MapPin size={22} className="text-neutral-400 group-hover:text-black" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold text-neutral-400 mb-2">Localização</h3>
                  <p className="text-neutral-800 leading-relaxed font-medium">
                    Travessa Presidente Mascarenhas, Nº 1675<br />
                    Alecrim, Natal/RN — CEP: 59.037-540
                  </p>
                </div>
              </div>

              {/* Horários */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white shadow-sm border border-neutral-100 flex items-center justify-center group-hover:bg-[#F7D061] transition-colors duration-500">
                  <Clock size={22} className="text-neutral-400 group-hover:text-black" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold text-neutral-400 mb-2">Funcionamento</h3>
                  <p className="text-neutral-800 font-medium">
                    Seg. a Sex: 08:00 – 12:00 / 14:00 – 16:00<br />
                    Sábados: 08:00 – 12:00
                  </p>
                </div>
              </div>

              {/* Atendimento */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white shadow-sm border border-neutral-100 flex items-center justify-center group-hover:bg-[#F7D061] transition-colors duration-500">
                  <Phone size={22} className="text-neutral-400 group-hover:text-black" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold text-neutral-400 mb-2">Atendimento</h3>
                  <p className="text-neutral-800 font-medium">
                    Natal e Região Metropolitana
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card de Ação - 7 colunas */}
          <div className="lg:col-span-7">
            <div className="relative p-1 md:p-2 bg-gradient-to-br from-[#F7D061] to-[#f0c34a] rounded-[2.5rem] shadow-2xl">
              <div className="bg-white rounded-[2.2rem] p-8 md:p-12">
                <div className="inline-flex p-3 rounded-2xl bg-[#25D366]/10 text-[#25D366] mb-6">
                  <MessageCircle size={32} />
                </div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">Inicie seu projeto agora</h3>
                <p className="text-neutral-600 mb-8 text-lg font-light leading-relaxed">
                  Clique no botão abaixo para falar com um de nossos consultores. Atendimento personalizado para orçamentos e dúvidas.
                </p>
                
                <a
                  href="https://wa.me/5584900000000" // Substitua pelo número correto
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between w-full bg-neutral-950 text-white p-6 rounded-2xl font-bold hover:bg-black transition-all hover:scale-[1.02] active:scale-95"
                >
                  <span className="text-xl">Chamar no WhatsApp</span>
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center group-hover:rotate-[-12deg] transition-transform">
                    <ArrowRight size={24} />
                  </div>
                </a>

                <p className="mt-8 text-center text-xs text-neutral-400 uppercase tracking-widest font-bold">
                  Resposta rápida em horário comercial
                </p>
              </div>
            </div>
            
            {/* Mapa ou Imagem decorativa opcional */}
            <div className="mt-8 grid grid-cols-2 gap-4 opacity-40 grayscale">
               <div className="h-1 bg-neutral-200 rounded-full"></div>
               <div className="h-1 bg-neutral-200 rounded-full"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}