import { useState, FormEvent } from 'react';
import { Send, MessageCircle, ArrowRight, MapPin, Clock } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const AREA_OPTIONS = [
  'Direito Civil',
  'Direito do Consumidor',
  'Direito Empresarial',
  'Direito de Família',
  'Direito Previdenciário',
  'Direito do Trabalho',
  'Outro',
];

export default function Contato() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${name}.`;
    if (phone) text += `\nTelefone: ${phone}`;
    if (area) text += `\nÁrea de interesse: ${area}`;
    if (message) text += `\n\n${message}`;
    const url = `${WHATSAPP_URL}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EB7104]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#EB7104] text-xs font-semibold tracking-widest uppercase">
              Fale Conosco
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10202F] mb-4">
            Entre em Contato
          </h2>
          <p className="text-[#10202F]/60 text-base sm:text-lg max-w-2xl mx-auto">
            Estamos à disposição para atender suas necessidades jurídicas com profissionalismo, dedicação e excelência.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-sm p-8 lg:p-10">
              <h3 className="text-xl font-bold text-[#10202F] mb-6">Envie sua mensagem</h3>
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#10202F]/70 text-sm font-medium">Nome completo *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Seu nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#f8f9fb] border border-[#10202F]/10 rounded-xl px-4 py-3 text-sm text-[#10202F] placeholder-[#10202F]/30 focus:outline-none focus:ring-2 focus:ring-[#EB7104]/50 focus:border-[#EB7104] transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#10202F]/70 text-sm font-medium">Telefone / WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(65) 9 9999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#f8f9fb] border border-[#10202F]/10 rounded-xl px-4 py-3 text-sm text-[#10202F] placeholder-[#10202F]/30 focus:outline-none focus:ring-2 focus:ring-[#EB7104]/50 focus:border-[#EB7104] transition-all"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#10202F]/70 text-sm font-medium">Área de interesse</label>
                  <select
                    name="area"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full bg-[#f8f9fb] border border-[#10202F]/10 rounded-xl px-4 py-3 text-sm text-[#10202F] focus:outline-none focus:ring-2 focus:ring-[#EB7104]/50 focus:border-[#EB7104] transition-all appearance-none"
                  >
                    <option value="">Selecione uma área</option>
                    {AREA_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#10202F]/70 text-sm font-medium">Sua mensagem</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Descreva brevemente sua situação..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#f8f9fb] border border-[#10202F]/10 rounded-xl px-4 py-3 text-sm text-[#10202F] placeholder-[#10202F]/30 focus:outline-none focus:ring-2 focus:ring-[#EB7104]/50 focus:border-[#EB7104] transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#10202F] hover:bg-[#1e3a55] text-white py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 mt-2"
                >
                  <Send width={16} height={16} className="lucide lucide-send " />
                  Enviar via WhatsApp
                </button>
                <p className="text-[#10202F]/40 text-xs text-center">
                  Suas informações são tratadas com total sigilo e privacidade.
                </p>
              </form>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 bg-[#10202F] hover:bg-[#EB7104] rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#EB7104]/30"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <MessageCircle width={24} height={24} className="lucide lucide-message-circle text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white/60 text-xs font-medium mb-1">WhatsApp</p>
                <p className="text-white font-bold text-base">(65) 9960-2210</p>
              </div>
              <ArrowRight
                width={18}
                height={18}
                className="lucide lucide-arrow-right text-white/40 group-hover:text-white transition-colors duration-300"
              />
            </a>
            <div className="bg-white rounded-3xl p-7 shadow-sm flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#f8f9fb] flex items-center justify-center flex-shrink-0">
                <MapPin width={22} height={22} className="lucide lucide-map-pin text-[#EB7104]" />
              </div>
              <div>
                <p className="text-[#10202F]/50 text-xs font-medium mb-1">Endereço</p>
                <p className="text-[#10202F] font-bold text-sm">Rua Júlio de Castilho, n. 228-S</p>
                <p className="text-[#10202F]/60 text-xs mt-1">Sala 04, Centro</p>
                <p className="text-[#10202F]/60 text-xs">Lucas do Rio Verde/MT</p>
                <p className="text-[#10202F]/60 text-xs">CEP 78460-017</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-7 shadow-sm flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#f8f9fb] flex items-center justify-center flex-shrink-0">
                <Clock width={22} height={22} className="lucide lucide-clock text-[#EB7104]" />
              </div>
              <div className="w-full">
                <p className="text-[#10202F]/50 text-xs font-medium mb-3">Horário de Funcionamento</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#10202F]/60 text-xs">Seg – Sex (manhã)</span>
                    <span className="text-[#10202F] font-semibold text-xs">08:00 – 11:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#10202F]/60 text-xs">Seg – Sex (tarde)</span>
                    <span className="text-[#10202F] font-semibold text-xs">13:00 – 17:30</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-[#10202F]/5">
                    <span className="text-[#10202F]/40 text-xs">Sábado / Domingo</span>
                    <span className="text-[#10202F]/40 text-xs">Fechado</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#EB7104] rounded-3xl p-7 text-white">
              <p className="font-bold text-base mb-2">Consulta inicial gratuita</p>
              <p className="text-white/80 text-sm leading-relaxed">
                Agende uma consulta e conheça as melhores soluções para o seu caso sem compromisso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
