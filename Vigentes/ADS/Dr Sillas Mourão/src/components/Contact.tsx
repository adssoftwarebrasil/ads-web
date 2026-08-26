import { useState } from 'react';
import { Phone, User, MessageSquare, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Olá, Dr. Sillas! Meu nome é ${name}.`;
    if (service) text += ` Tenho interesse em: ${service}.`;
    if (phone) text += ` Meu telefone/WhatsApp: ${phone}.`;
    if (message) text += ` ${message}`;
    const url = `https://wa.me/553399711500?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#f5f8fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="flex flex-col gap-6">
            <div>
              <span className="inline-block text-[#009FC2] text-sm font-semibold tracking-widest uppercase mb-3">
                Fale Conosco
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#144170] leading-tight">
                Agende sua Consulta
                <span className="text-[#009FC2]"> Agora</span>
              </h2>
            </div>
            <p className="text-gray-500 text-base leading-relaxed">
              Preencha o formulário e entraremos em contato pelo WhatsApp para confirmar seu agendamento. É rápido,
              fácil e sem complicações.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#009FC2]/10 flex items-center justify-center flex-shrink-0">
                  <Phone width={18} height={18} className="lucide lucide-phone text-[#009FC2]" />
                </div>
                <div>
                  <p className="text-[#144170] font-semibold text-sm">WhatsApp / Telefone</p>
                  <a
                    href="https://wa.me/553399711500"
                    className="text-gray-500 text-sm hover:text-[#009FC2] transition-colors"
                  >
                    (33) 9 9971-1500
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#009FC2]/10 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-[#009FC2]">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div>
                  <p className="text-[#144170] font-semibold text-sm">Horários de Atendimento</p>
                  <p className="text-gray-500 text-sm">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-400 text-xs mt-0.5">Sábado e Domingo: Fechado</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#009FC2]/10 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-[#009FC2]">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <p className="text-[#144170] font-semibold text-sm">Endereço</p>
                  <p className="text-gray-500 text-sm">Edifício Medical Center</p>
                  <p className="text-gray-400 text-xs mt-0.5">R. 7 de Setembro, 2716 — Sala 1404</p>
                  <p className="text-gray-400 text-xs">Gov. Valadares — MG</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <h3 className="text-[#144170] font-bold text-xl mb-1">Enviar Mensagem</h3>
              <div className="flex flex-col gap-1.5">
                <label className="text-gray-600 text-sm font-medium flex items-center gap-2">
                  <User width={14} height={14} className="lucide lucide-user " /> Nome completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#009FC2]/30 focus:border-[#009FC2] transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-gray-600 text-sm font-medium flex items-center gap-2">
                  <Phone width={14} height={14} className="lucide lucide-phone " /> Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(33) 9 9999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#009FC2]/30 focus:border-[#009FC2] transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-gray-600 text-sm font-medium">Serviço de Interesse</label>
                <select
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#009FC2]/30 focus:border-[#009FC2] transition-all bg-white"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Consulta Coloproctológica">Consulta Coloproctológica</option>
                  <option value="Colonoscopia">Colonoscopia</option>
                  <option value="Cirurgia a Laser (CO2)">Cirurgia a Laser (CO2)</option>
                  <option value="Videolaparoscopia">Videolaparoscopia</option>
                  <option value="Manometria Anorretal">Manometria Anorretal</option>
                  <option value="Tempo de Trânsito Colônico">Tempo de Trânsito Colônico</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-gray-600 text-sm font-medium flex items-center gap-2">
                  <MessageSquare width={14} height={14} className="lucide lucide-message-square " /> Mensagem
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Descreva brevemente seu caso ou dúvida..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#009FC2]/30 focus:border-[#009FC2] transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#009FC2] hover:bg-[#007fa0] text-white px-6 py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-1"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Enviar pelo WhatsApp
                <Send width={16} height={16} className="lucide lucide-send " />
              </button>
              <p className="text-gray-400 text-xs text-center">
                Ao enviar, você será redirecionado para o WhatsApp com a mensagem pré-preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
