import { useState } from 'react';
import type { FormEvent } from 'react';
import { MapPin, Clock, Phone, Send, Instagram, Facebook } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_AGENDAR =
  'https://wa.me/5566996156031?text=Olá!%20Gostaria%20de%20agendar%20uma%20lavagem.';
const MAPS =
  'https://maps.google.com/?q=Av.+Londrina,+90+Distrito+Industrial+Sinop+MT';
const INSTAGRAM = 'https://www.instagram.com/doisirmaoslavacarsinop8/';
const FACEBOOK = 'https://www.facebook.com/profile.php?id=61575753323770';

const serviceOptions = [
  'Lavagem Completa',
  'Lavagem de Caminhão',
  'Máquinas Pesadas',
  'Lavagem a Seco',
  'Lavagem Americana',
  'Estética Automotiva',
  'Outros',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${form.name}.`;
    if (form.service) text += ` Tenho interesse no serviço: ${form.service}.`;
    if (form.phone) text += ` Meu telefone: ${form.phone}.`;
    if (form.message) text += ` ${form.message}`;
    const url = `https://wa.me/5566996156031?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contato"
      className="py-24 bg-gradient-to-b from-[rgb(12,14,18)] to-brand-black relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px opacity-20"
        style={{ background: 'linear-gradient(90deg, transparent, rgb(169, 199, 209), transparent)' }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3 block">
            Entre em Contato
          </span>
          <h2 className="section-title mb-4">
            Pronto para Deixar seu{' '}
            <span style={{ color: 'rgb(169, 199, 209)' }}>Veículo Impecável?</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Agende agora mesmo ou tire suas dúvidas. Nossa equipe responde rapidamente pelo WhatsApp.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="transition-all duration-700 delay-100 opacity-100 translate-x-0">
            <div className="card-glass rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-6">Solicitar Agendamento</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="text-white/60 text-xs font-medium mb-1.5 block">Seu nome *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Ex: João Silva"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/50 transition-all duration-200 hover:border-white/25"
                  />
                </div>
                <div>
                  <label className="text-white/60 text-xs font-medium mb-1.5 block">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(66) 9 0000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/50 transition-all duration-200 hover:border-white/25"
                  />
                </div>
                <div>
                  <label className="text-white/60 text-xs font-medium mb-1.5 block">
                    Serviço desejado
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/50 transition-all duration-200 hover:border-white/25"
                  >
                    <option value="" className="bg-[rgb(20,22,26)]">
                      Selecione um serviço...
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[rgb(20,22,26)]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-white/60 text-xs font-medium mb-1.5 block">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tipo do veículo, dúvidas, etc..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/50 transition-all duration-200 hover:border-white/25 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center py-4 text-base shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40"
                >
                  <Send width={18} height={18} className="lucide lucide-send " />
                  Enviar via WhatsApp
                </button>
              </form>
            </div>
          </div>
          <div className="space-y-6 transition-all duration-700 delay-300 opacity-100 translate-x-0">
            <div className="card-glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/15 flex items-center justify-center shrink-0 border border-brand-blue/20">
                  <MapPin width={22} height={22} className="lucide lucide-map-pin text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Endereço</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Av. Londrina, 90 — Distrito Industrial
                    <br />
                    Sinop — MT, 78557-509
                  </p>
                  <a
                    href={MAPS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue text-xs font-medium mt-2 inline-flex items-center gap-1 hover:text-brand-light-blue transition-colors"
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>
            </div>
            <div className="card-glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/15 flex items-center justify-center shrink-0 border border-brand-blue/20">
                  <Clock width={22} height={22} className="lucide lucide-clock text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Horários de Funcionamento</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Segunda a Sexta</span>
                      <span className="text-white font-medium">07:00 — 18:00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Sábado</span>
                      <span className="text-white font-medium">07:00 — 18:00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Domingo</span>
                      <span className="text-white/40">Consultar disponibilidade</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/15 flex items-center justify-center shrink-0 border border-brand-blue/20">
                  <Phone width={22} height={22} className="lucide lucide-phone text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">WhatsApp / Telefone</h4>
                  <a
                    href="tel:+5566996156031"
                    className="text-white/60 text-sm hover:text-brand-blue transition-colors"
                  >
                    (66) 9 9615-6031
                  </a>
                  <div className="mt-3">
                    <a
                      href={WHATSAPP_AGENDAR}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full border border-green-500/40 text-green-400 hover:bg-green-500/10 transition-all duration-200"
                    >
                      <WhatsAppIcon width={14} height={14} />
                      Chamar no WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-glass rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-3">
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-brand-blue/40 hover:bg-brand-blue/10 transition-all duration-200 text-sm text-white/70 hover:text-white"
                >
                  <Instagram
                    width={16}
                    height={16}
                    className="lucide lucide-instagram text-brand-blue"
                  />
                  Instagram
                </a>
                <a
                  href={FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-brand-blue/40 hover:bg-brand-blue/10 transition-all duration-200 text-sm text-white/70 hover:text-white"
                >
                  <Facebook
                    width={16}
                    height={16}
                    className="lucide lucide-facebook text-brand-blue"
                  />
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
