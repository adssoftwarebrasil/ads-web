import { useState, type FormEvent } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const serviceOptions = [
  'Retifica de Motor',
  'Mecânica Geral',
  'Diagnóstico Eletrônico',
  'Troca de Óleo',
  'Usinagem de Precisão',
  'Sistema de Arrefecimento',
  'Outro',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${name}.`;
    if (service) text += `\nServiço desejado: ${service}.`;
    if (phone) text += `\nMeu WhatsApp: ${phone}.`;
    if (message) text += `\n\n${message}`;
    const url = `http://wa.me/5566996524291?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="animate-on-scroll">
            <span className="text-brand-red text-sm font-bold uppercase tracking-widest">Entre em contato</span>
            <h2 className="text-4xl sm:text-5xl font-black text-brand-dark mt-3 mb-6 tracking-tight leading-tight">
              Pronto para <br />
              <span className="text-brand-red">Ajudar Você</span>
            </h2>
            <p className="text-brand-dark/60 text-base leading-relaxed mb-10">
              Preencha o formulário ao lado e entraremos em contato pelo WhatsApp com seu orçamento personalizado.
              Resposta rápida e sem compromisso.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <p className="text-brand-dark font-semibold text-sm mb-0.5">Endereço</p>
                  <p className="text-brand-dark/60 text-sm leading-relaxed whitespace-pre-line">
                    Av. dos Pinheiros, 169{'\n'}St. Industrial Norte, Sinop - MT
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <p className="text-brand-dark font-semibold text-sm mb-0.5">Telefone / WhatsApp</p>
                  <p className="text-brand-dark/60 text-sm leading-relaxed whitespace-pre-line">(66) 99652-4291</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-xl flex-shrink-0">
                  🕐
                </div>
                <div>
                  <p className="text-brand-dark font-semibold text-sm mb-0.5">Horário de Funcionamento</p>
                  <p className="text-brand-dark/60 text-sm leading-relaxed whitespace-pre-line">
                    Segunda a Sexta{'\n'}7:30 – 11:30 | 13:30 – 16:00
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 flex gap-4">
              <a
                href="http://wa.me/5566996524291"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/frezaretifica/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-brand-dark/10 hover:bg-brand-dark text-brand-dark hover:text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="animate-on-scroll">
            <div className="bg-brand-dark rounded-2xl p-8 shadow-xl shadow-black/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center">
                  <MessageSquare className="lucide lucide-message-square text-white" width={20} height={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Solicite seu Orçamento</h3>
                  <p className="text-brand-gray/50 text-xs">Resposta via WhatsApp</p>
                </div>
              </div>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="text-brand-gray/70 text-xs font-semibold uppercase tracking-wide mb-2 block">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-red rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-brand-gray/70 text-xs font-semibold uppercase tracking-wide mb-2 block">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(66) 9 0000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-red rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-brand-gray/70 text-xs font-semibold uppercase tracking-wide mb-2 block">
                    Serviço desejado
                  </label>
                  <select
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-red rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-colors appearance-none"
                    style={{ colorScheme: 'dark' }}
                  >
                    <option value="" className="bg-brand-dark">
                      Selecione um serviço
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-brand-dark">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-brand-gray/70 text-xs font-semibold uppercase tracking-wide mb-2 block">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    placeholder="Descreva seu problema ou dúvida..."
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-red rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white py-4 rounded-xl font-bold text-base transition-all duration-200 hover:shadow-lg hover:shadow-brand-red/30"
                >
                  <Send className="lucide lucide-send" width={18} height={18} />
                  Enviar pelo WhatsApp
                </button>
                <p className="text-white/30 text-xs text-center">
                  Você será redirecionado para o WhatsApp com sua mensagem pronta.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
