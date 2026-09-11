import { useState, type FormEvent } from 'react';
import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const serviceOptions = [
  'Mecânica Geral',
  'Auto Elétrica',
  'Alinhamento',
  'Balanceamento',
  'Câmbio Automático',
  'Troca de Óleo',
  'Revisão Completa',
  'Diagnóstico',
  'Outro',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const header = useReveal<HTMLDivElement>();
  const info = useReveal<HTMLDivElement>();
  const formCol = useReveal<HTMLDivElement>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = `Olá! Gostaria de solicitar um orçamento.%0A%0A*Nome:* ${name}%0A*WhatsApp:* ${phone}`;
    if (service) text += `%0A*Serviço:* ${service}`;
    if (message) text += `%0A*Detalhes:* ${message}`;
    window.open(`https://wa.me/5566996116371?text=${encodeURI(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={header.ref}
          className={`text-center mb-14 transition-all duration-700 ${
            header.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#EF1C1A]"></div>
            <span className="text-[#EF1C1A] text-sm font-bold uppercase tracking-widest">Fale Conosco</span>
            <div className="h-px w-8 bg-[#EF1C1A]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-tight">
            Agende Seu Serviço
            <br />
            <span className="text-[#EF1C1A]">É Rápido e Fácil</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            Preencha o formulário e entraremos em contato pelo WhatsApp para confirmar seu agendamento.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <div
            ref={info.ref}
            className={`lg:col-span-2 flex flex-col gap-5 transition-all duration-700 ${
              info.visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div
              className="flex gap-4 items-start p-5 rounded-2xl bg-[#FFFEDC] transition-all duration-500 opacity-100 translate-y-0"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-11 h-11 bg-[#EF1C1A] rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="lucide lucide-map-pin text-white" />
              </div>
              <div>
                <div className="text-black font-semibold text-sm mb-1">Endereço</div>
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                  {'Perimetral Sudoeste, 3791 - Jardim Primavera\nSorriso - MT, 78890-000'}
                </p>
              </div>
            </div>
            <div
              className="flex gap-4 items-start p-5 rounded-2xl bg-[#FFFEDC] transition-all duration-500 opacity-100 translate-y-0"
              style={{ transitionDelay: '280ms' }}
            >
              <div className="w-11 h-11 bg-[#EF1C1A] rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="lucide lucide-clock text-white" />
              </div>
              <div>
                <div className="text-black font-semibold text-sm mb-1">Horários</div>
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                  {'Seg–Sex: 07:00–11:30 | 13:00–18:00\nSábado: 07:00–11:30'}
                </p>
              </div>
            </div>
            <div
              className="flex gap-4 items-start p-5 rounded-2xl bg-[#FFFEDC] transition-all duration-500 opacity-100 translate-y-0"
              style={{ transitionDelay: '360ms' }}
            >
              <div className="w-11 h-11 bg-[#EF1C1A] rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="lucide lucide-phone text-white" />
              </div>
              <div>
                <div className="text-black font-semibold text-sm mb-1">Telefone / WhatsApp</div>
                <a
                  href="tel:+5566996116371"
                  className="text-gray-700 text-sm leading-relaxed hover:text-[#EF1C1A] transition-colors duration-200"
                >
                  (66) 9 9611-6371
                </a>
              </div>
            </div>
            <div
              className="flex gap-4 items-start p-5 rounded-2xl bg-[#FFFEDC] transition-all duration-500 opacity-100 translate-y-0"
              style={{ transitionDelay: '440ms' }}
            >
              <div className="w-11 h-11 bg-[#EF1C1A] rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="lucide lucide-mail text-white" />
              </div>
              <div>
                <div className="text-black font-semibold text-sm mb-1">E-mail</div>
                <a
                  href="mailto:sagasorriso@gmail.com"
                  className="text-gray-700 text-sm leading-relaxed hover:text-[#EF1C1A] transition-colors duration-200"
                >
                  sagasorriso@gmail.com
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border-2 border-gray-100 transition-all duration-700 delay-500 opacity-100 translate-y-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.641672038933!2d-55.75067762493075!3d-12.539880887737219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a0b3c18f0dd993%3A0xf70459e0801c5dd5!2sSaga%20Sorriso%20Centro%20Automotivo!5e0!3m2!1spt-BR!2sbr!4v1773318484085!5m2!1spt-BR!2sbr"
                width="100%"
                height="200"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Saga Sorriso Centro Automotivo"
                style={{ border: '0px', display: 'block' }}
              ></iframe>
            </div>
          </div>
          <div
            ref={formCol.ref}
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              formCol.visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <form onSubmit={handleSubmit} className="bg-black rounded-2xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-white text-xl font-bold mb-8">Solicitar Orçamento</h3>
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Seu nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#EF1C1A] focus:bg-white/10 transition-all duration-200 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                      WhatsApp / Telefone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(66) 9 9999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#EF1C1A] focus:bg-white/10 transition-all duration-200 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                    Serviço Desejado
                  </label>
                  <select
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#EF1C1A] focus:bg-white/10 transition-all duration-200 text-sm appearance-none cursor-pointer"
                    style={{ color: service ? 'white' : 'rgba(255, 255, 255, 0.3)' }}
                  >
                    <option value="" style={{ background: 'rgb(17, 17, 17)', color: 'rgb(170, 170, 170)' }}>
                      Selecione um serviço
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} style={{ background: 'rgb(17, 17, 17)', color: 'white' }}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                    Mensagem / Detalhes
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Descreva o problema ou serviço desejado..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#EF1C1A] focus:bg-white/10 transition-all duration-200 text-sm resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#EF1C1A] hover:bg-[#962A21] text-white font-bold text-base py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                >
                  <Send size={18} className="lucide lucide-send " />
                  Enviar pelo WhatsApp
                </button>
                <p className="text-white/30 text-xs text-center">
                  Ao enviar, você será redirecionado para o WhatsApp com a mensagem pré-preenchida.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
