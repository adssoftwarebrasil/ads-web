import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { WhatsAppIcon } from './icons';
import { WHATSAPP_URL, INSTAGRAM_URL } from '../constants';

const INPUT_CLASS =
  'w-full px-5 py-4 bg-white border-2 rounded-xl focus:outline-none transition-all duration-300 placeholder:text-gray-400 border-gray-200 hover:border-gray-300';

export default function Contact() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSend = () => {
    const text = `Olá! Meu nome é ${nome}.\n\nAssunto: ${assunto}\nE-mail: ${email}\nWhatsApp: ${whatsapp}\n\n${mensagem}`;
    const url = `https://api.whatsapp.com/send?phone=5584999285519&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#f8f9fa] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03]" style={{ background: 'rgb(4, 51, 140)' }}></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.05]" style={{ background: 'rgb(254, 186, 0)' }}></div>
      <div ref={ref} className="container mx-auto px-4 max-w-[1200px] relative z-10">
        <div className="text-center mb-14">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            style={{ backgroundColor: 'rgba(254, 186, 0, 0.15)', color: 'rgb(4, 51, 140)' }}
          >
            <Send className="w-4 h-4" />
            Contato
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ color: 'rgb(4, 51, 140)' }}>
            Fale{' '}
            <span className="relative inline-block">
              Conosco
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 2 150 2 198 8" stroke="rgb(254, 186, 0)" strokeWidth="4" strokeLinecap="round"></path>
              </svg>
            </span>
          </h2>
          <p className={`text-[#555] text-lg md:text-xl max-w-[600px] mx-auto leading-relaxed transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Dúvidas ou sugestões? Estamos prontos para atender você com excelência!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className={`lg:col-span-2 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="rounded-3xl p-6 md:p-8 text-white h-full" style={{ background: 'linear-gradient(135deg, rgb(4, 51, 140) 0%, rgb(6, 70, 180) 100%)' }}>
              <h3 className="text-2xl font-bold mb-2">Informações de Contato</h3>
              <p className="text-white/70 mb-8">Entre em contato por qualquer um dos canais abaixo.</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'rgba(254, 186, 0, 0.2)' }}>
                    <MapPin size={22} style={{ color: 'rgb(254, 186, 0)' }} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-0.5">Endereço</p>
                    <p className="text-white font-semibold">Av. Coronel Estevam, 3613, Nossa Senhora de Nazaré, Natal - RN</p>
                    <p className="text-white/50 text-sm">CEP: 59060-200</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'rgba(254, 186, 0, 0.2)' }}>
                    <Phone size={22} style={{ color: 'rgb(254, 186, 0)' }} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-0.5">Telefone</p>
                    <p className="text-white font-semibold">(84) 99928-5519</p>
                    <p className="text-white/50 text-sm">WhatsApp disponível</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'rgba(254, 186, 0, 0.2)' }}>
                    <Mail size={22} style={{ color: 'rgb(254, 186, 0)' }} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-0.5">E-mail</p>
                    <p className="text-white font-semibold">jdbaterias@gmail.com</p>
                    <p className="text-white/50 text-sm">Respondemos em até 24h</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'rgba(254, 186, 0, 0.2)' }}>
                    <Clock size={22} style={{ color: 'rgb(254, 186, 0)' }} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-0.5">Horário</p>
                    <p className="text-white font-semibold">Seg - Sáb: 8h às 18h</p>
                    <p className="text-white/50 text-sm">Domingos e feriados: Fechado</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-white/60 text-sm mb-4">Siga-nos nas redes sociais</p>
                <div className="flex gap-3">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ backgroundColor: 'rgba(254, 186, 0, 0.2)' }}>
                    <Instagram size={22} style={{ color: 'rgb(254, 186, 0)' }} />
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group/whats" style={{ backgroundColor: 'rgba(254, 186, 0, 0.2)' }}>
                    <WhatsAppIcon className="w-5 h-5" style={{ color: 'rgb(254, 186, 0)' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={`lg:col-span-3 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-200/50">
              <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: 'rgb(4, 51, 140)' }}>Envie sua mensagem</h3>
              <p className="text-[#666] mb-6">Preencha o formulário e entraremos em contato via WhatsApp.</p>
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome completo *</label>
                    <input type="text" placeholder="Seu nome" required className={INPUT_CLASS} value={nome} onChange={(e) => setNome(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp *</label>
                    <input type="tel" placeholder="(84) 99999-9999" required className={INPUT_CLASS} value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
                    <input type="email" placeholder="seu@email.com" required className={INPUT_CLASS} value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Assunto *</label>
                    <input type="text" placeholder="Ex: Orçamento de bateria" required className={INPUT_CLASS} value={assunto} onChange={(e) => setAssunto(e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem *</label>
                  <textarea placeholder="Descreva como podemos ajudá-lo..." required rows={5} className={`${INPUT_CLASS} resize-none`} value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>
                </div>
                <button
                  type="button"
                  onClick={handleSend}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group"
                  style={{ backgroundColor: 'rgb(254, 186, 0)', color: 'rgb(4, 51, 140)' }}
                >
                  <WhatsAppIcon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  Enviar pelo WhatsApp
                </button>
                <p className="text-center text-sm text-gray-500">Ao enviar, você será redirecionado para o WhatsApp com sua mensagem preenchida.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
