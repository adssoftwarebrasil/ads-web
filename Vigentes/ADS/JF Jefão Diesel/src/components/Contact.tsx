import { useState } from 'react';
import { MapPin, Clock, Mail } from 'lucide-react';
import { WhatsAppIcon } from './icons';

const WHATSAPP_NUMBER = '556696045793';

const SERVICE_OPTIONS = [
  'Bomba Injetora',
  'Bicos Injetores',
  'Turbina',
  'Reprogramação (Remap)',
  'Troca de Óleo',
  'Diagnóstico Eletrônico',
  'Outro',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      'Olá! Vim pelo site e gostaria de solicitar um orçamento.',
      '',
      `*Nome:* ${name}`,
      `*Telefone:* ${phone}`,
    ];
    if (vehicle) lines.push(`*Veículo:* ${vehicle}`);
    lines.push(`*Serviço de interesse:* ${service}`);
    if (message) lines.push(`*Mensagem:* ${message}`);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-[rgb(255,198,45)] text-xs font-bold uppercase tracking-widest mb-3">Fale Conosco</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Solicite seu<span className="text-[rgb(255,198,45)]"> Orçamento Grátis</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Preencha o formulário e entraremos em contato via WhatsApp. Diagnóstico rápido, resposta ágil.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-3 bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white/60 text-xs font-semibold uppercase tracking-wide mb-2">Seu Nome *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Ex: João Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[rgb(255,198,45)]/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-semibold uppercase tracking-wide mb-2">Telefone / WhatsApp *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(66) 9 9999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[rgb(255,198,45)]/60 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/60 text-xs font-semibold uppercase tracking-wide mb-2">Veículo (Marca, Modelo, Ano)</label>
                <input
                  type="text"
                  name="vehicle"
                  placeholder="Ex: Hilux 2020 2.8 4x4"
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[rgb(255,198,45)]/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/60 text-xs font-semibold uppercase tracking-wide mb-2">Serviço de Interesse *</label>
                <select
                  name="service"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[rgb(255,198,45)]/60 transition-colors appearance-none"
                >
                  <option value="" disabled className="text-white/40">Selecione o serviço</option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-white/60 text-xs font-semibold uppercase tracking-wide mb-2">Mensagem (opcional)</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Descreva o problema ou dúvida..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[rgb(255,198,45)]/60 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[rgb(255,198,45)] text-black font-black py-4 rounded-xl text-base hover:bg-yellow-300 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-yellow-500/20"
              >
                <WhatsAppIcon width={20} height={20} />
                Enviar pelo WhatsApp
              </button>
              <p className="text-center text-white/30 text-xs">
                Ao enviar, você será redirecionado para o WhatsApp com seus dados preenchidos.
              </p>
            </form>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[rgb(255,198,45)]/10 border border-[rgb(255,198,45)]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin width={18} height={18} className="text-[rgb(255,198,45)]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs font-semibold uppercase tracking-wide mb-1">Endereço</div>
                  <div className="text-white text-sm leading-relaxed">Av. Perimetral Novo Horizonte, 2277 — Novo Horizonte III, Sorriso - MT</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[rgb(255,198,45)]/10 border border-[rgb(255,198,45)]/20 flex items-center justify-center flex-shrink-0">
                  <Clock width={18} height={18} className="text-[rgb(255,198,45)]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs font-semibold uppercase tracking-wide mb-1">Horário</div>
                  <div className="text-white text-sm leading-relaxed">Seg–Sex: 07:00–11:30 e 13:00–17:30</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[rgb(255,198,45)]/10 border border-[rgb(255,198,45)]/20 flex items-center justify-center flex-shrink-0">
                  <Mail width={18} height={18} className="text-[rgb(255,198,45)]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs font-semibold uppercase tracking-wide mb-1">E-mail</div>
                  <div className="text-white text-sm leading-relaxed">contato@jfdiesel.com.br</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 flex-1 min-h-[260px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.092477741314!2d-55.70668672493032!3d-12.576153587704024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a0b30037908d29%3A0xb8c2548916f85a71!2sJF%20Diesel!5e0!3m2!1spt-BR!2sbr!4v1774880752407!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JF Diesel no Google Maps"
                style={{ border: '0px', minHeight: '260px', filter: 'grayscale(1) invert(1) contrast(0.85)' }}
              ></iframe>
            </div>
            <div className="bg-[rgb(255,198,45)]/5 border border-[rgb(255,198,45)]/20 rounded-2xl p-5">
              <div className="text-[rgb(255,198,45)] font-black text-base mb-1">Atendemos todo o MT</div>
              <p className="text-white/50 text-xs leading-relaxed">
                Sorriso, Sinop, Lucas do Rio Verde, Nova Mutum, Tapurah, Cuiabá, Vera, Claudia, Colíder, Feliz Natal e muito mais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
