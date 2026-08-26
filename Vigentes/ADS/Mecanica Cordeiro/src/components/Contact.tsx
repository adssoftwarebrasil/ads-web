import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { WhatsAppIcon } from './icons';
import { WHATSAPP_NUMBER } from '../hooks/useInView';

const serviceOptions = [
  'Revisão Completa',
  'Troca de Óleo',
  'Freios',
  'Embreagem',
  'Suspensão',
  'Injeção Eletrônica',
  'Retífica de Motor',
  'Diesel / Utilitários',
  'Outro',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de solicitar um orçamento.',
      '',
      `*Nome:* ${form.name}`,
      `*Telefone:* ${form.phone}`,
    ];
    if (form.vehicle) lines.push(`*Veículo:* ${form.vehicle}`);
    lines.push(`*Serviço:* ${form.service}`);
    if (form.message) lines.push(`*Mensagem:* ${form.message}`);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join('\n')
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const set = (key: keyof typeof form) => (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#E32626] text-xs font-bold tracking-widest uppercase mb-3">
            Entre em Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#30312C] mb-4">
            Solicite seu Orçamento
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Preencha o formulário e fale diretamente com a nossa equipe pelo
            WhatsApp. Atendimento rápido e sem complicação.
          </p>
          <div className="mt-4 w-16 h-1 bg-[#E32626] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#E32626]/10 rounded-xl flex items-center justify-center text-[#E32626] flex-shrink-0 mt-0.5">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-0.5">
                  Endereço
                </div>
                <p className="text-[#30312C] font-medium text-sm whitespace-pre-line">
                  {'Rua Ema Kunch, 167 - Jardim Safira\nSinop – MT, 78551-373'}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#E32626]/10 rounded-xl flex items-center justify-center text-[#E32626] flex-shrink-0 mt-0.5">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-0.5">
                  Telefone / WhatsApp
                </div>
                <a
                  href="tel:+5566996293425"
                  className="text-[#30312C] font-medium text-sm hover:text-[#E32626] transition-colors whitespace-pre-line"
                >
                  (66) 99629-3425
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#E32626]/10 rounded-xl flex items-center justify-center text-[#E32626] flex-shrink-0 mt-0.5">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-0.5">
                  E-mail
                </div>
                <a
                  href="mailto:Nasimmascena2@gmail.com"
                  className="text-[#30312C] font-medium text-sm hover:text-[#E32626] transition-colors whitespace-pre-line"
                >
                  Nasimmascena2@gmail.com
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#E32626]/10 rounded-xl flex items-center justify-center text-[#E32626] flex-shrink-0 mt-0.5">
                <Clock size={20} />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-0.5">
                  Horário de Funcionamento
                </div>
                <p className="text-[#30312C] font-medium text-sm whitespace-pre-line">
                  Seg. – Sex.: 07:30 – 11:30 e 13:30 – 18:00
                </p>
              </div>
            </div>
            <div className="pt-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-6 py-3.5 rounded-full hover:bg-[#1da855] transition-colors shadow-lg shadow-[#25D366]/30"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={set('name')}
                  placeholder="Seu nome"
                  className="w-full bg-white border border-gray-200 text-[#30312C] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E32626] focus:ring-2 focus:ring-[#E32626]/20 transition-all duration-200 placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={set('phone')}
                  placeholder="(66) 99999-9999"
                  className="w-full bg-white border border-gray-200 text-[#30312C] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E32626] focus:ring-2 focus:ring-[#E32626]/20 transition-all duration-200 placeholder-gray-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                Veículo
              </label>
              <input
                type="text"
                name="vehicle"
                value={form.vehicle}
                onChange={set('vehicle')}
                placeholder="Ex: Fiat Uno 2015, Toyota Hilux 2020..."
                className="w-full bg-white border border-gray-200 text-[#30312C] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E32626] focus:ring-2 focus:ring-[#E32626]/20 transition-all duration-200 placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                Serviço Desejado *
              </label>
              <select
                name="service"
                required
                value={form.service}
                onChange={set('service')}
                className="w-full bg-white border border-gray-200 text-[#30312C] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E32626] focus:ring-2 focus:ring-[#E32626]/20 transition-all duration-200 placeholder-gray-400"
              >
                <option value="">Selecione um serviço...</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                Mensagem Adicional
              </label>
              <textarea
                name="message"
                rows={3}
                value={form.message}
                onChange={set('message')}
                placeholder="Descreva o problema ou dúvida..."
                className="w-full bg-white border border-gray-200 text-[#30312C] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E32626] focus:ring-2 focus:ring-[#E32626]/20 transition-all duration-200 placeholder-gray-400 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-[#E32626] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#c41e1e] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#E32626]/30"
            >
              <Send size={20} />
              Enviar pelo WhatsApp
            </button>
            <p className="text-center text-gray-400 text-xs">
              Ao enviar, você será redirecionado para o WhatsApp com os dados
              preenchidos automaticamente.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
