import { Phone, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

const WA_URL =
  'https://api.whatsapp.com/send?phone=5531999364049&text=Ol%C3%A1%20vim%20pelo%20Google!';

export default function Contact() {
  return (
    <section id="contato" className="py-20 lg:py-32 bg-brand-blue relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-yellow font-barlow font-800 uppercase tracking-[0.3em] text-xs mb-4">
            Canais de Atendimento
          </span>
          <h2 className="font-condensed font-900 uppercase text-5xl md:text-7xl text-white leading-none italic">
            Fale com a <br className="md:hidden" />
            <span className="text-brand-yellow">Gente</span>
          </h2>
        </div>

        {/* Grid de Cards de Contato */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Card WhatsApp */}
          <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:bg-white/10 hover:-translate-y-2">
            <div className="w-14 h-14 bg-brand-yellow rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
              <Phone size={28} className="text-brand-blue" fill="currentColor" />
            </div>
            <h3 className="font-condensed font-800 text-white uppercase text-2xl mb-2">WhatsApp</h3>
            <p className="text-white/60 font-barlow text-sm mb-4">Resposta rápida em horário comercial</p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-brand-yellow font-barlow font-700 text-xl hover:underline underline-offset-4"
            >
              (31) 99936-4049
            </a>
          </div>

          {/* Card Endereço */}
          <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:bg-white/10 hover:-translate-y-2">
            <div className="w-14 h-14 bg-brand-yellow rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
              <MapPin size={28} className="text-brand-blue" />
            </div>
            <h3 className="font-condensed font-800 text-white uppercase text-2xl mb-2">Visite-nos</h3>
            <p className="text-brand-yellow font-barlow font-700 text-base">R. Tinguassu, 1050</p>
            <p className="text-white/60 font-barlow text-sm leading-relaxed">
              Novo Eldorado<br />Contagem – MG
            </p>
          </div>

          {/* Card Horário - No mobile ocupa 2 colunas se houver espaço ou centraliza */}
          <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 bg-brand-yellow rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
              <Clock size={28} className="text-brand-blue" />
            </div>
            <h3 className="font-condensed font-800 text-white uppercase text-2xl mb-2">Horário</h3>
            <p className="text-white/60 font-barlow text-sm mb-1">Segunda a Sábado</p>
            <p className="text-brand-yellow font-barlow font-800 text-xl italic uppercase">08h às 18h</p>
          </div>
        </div>

        {/* Rodapé de Contato / Redes Sociais */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 text-center">
          <h3 className="font-condensed font-800 text-white uppercase text-2xl md:text-3xl mb-8">
            Siga o Chapisco nas redes
          </h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="https://www.instagram.com/chapisco_baterias"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-barlow font-600 px-8 py-4 rounded-2xl transition-all"
            >
              <Instagram size={20} className="text-brand-yellow" />
              @chapisco_baterias
            </a>
            <a
              href="https://www.facebook.com/wately.sampaio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-barlow font-600 px-8 py-4 rounded-2xl transition-all"
            >
              <Facebook size={20} className="text-brand-yellow" />
              Wately Sampaio
            </a>
          </div>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-brand-yellow text-brand-blue font-barlow font-900 uppercase tracking-tighter px-10 py-6 rounded-2xl transition-all duration-300 hover:bg-white hover:scale-105 shadow-[0_20px_40px_rgba(0,0,0,0.3)] inline-flex items-center gap-4 text-lg md:text-xl"
          >
            <MessageCircle size={24} fill="currentColor" className="group-hover:animate-bounce" />
            Solicitar Orçamento Grátis
          </a>
        </div>
      </div>
    </section>
  );
}