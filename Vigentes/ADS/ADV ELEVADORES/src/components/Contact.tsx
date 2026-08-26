import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const services = [
  'Instalação de Elevador Novo',
  'Manutenção Preventiva',
  'Modernização de Elevador',
  'Reparo / Corretiva',
  'Plataforma de Acessibilidade PNE',
  'Monta-Prato / Monta-Carga',
  'Escada / Esteira Rolante',
  'Outro',
];

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de solicitar um orçamento.',
      '',
      `Nome: ${name}`,
      `Telefone/WhatsApp: ${phone}`,
      `Serviço de Interesse: ${service}`,
    ];
    if (message.trim()) {
      lines.push(`Mensagem: ${message}`);
    }
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/5562998152991?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[rgb(219,38,27)] text-sm font-bold tracking-widest uppercase">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[rgb(42,30,75)] mt-3 mb-5">
            Solicite um Orçamento Gratuito
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Preencha o formulário e entraremos em contato pelo WhatsApp com uma proposta
            personalizada para você.
          </p>
        </div>
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-start transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <h3 className="text-xl font-bold text-[rgb(42,30,75)] mb-7">Informações de Contato</h3>
            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[rgb(42,30,75)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone width={18} height={18} className="text-[rgb(219,38,27)]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">
                    Telefone
                  </p>
                  <a
                    href="tel:6230927735"
                    rel="noopener noreferrer"
                    className="text-[rgb(42,30,75)] font-semibold text-sm hover:text-[rgb(219,38,27)] transition-colors"
                  >
                    (62) 3092-7735
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[rgb(42,30,75)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone width={18} height={18} className="text-[rgb(219,38,27)]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/5562998152991"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(42,30,75)] font-semibold text-sm hover:text-[rgb(219,38,27)] transition-colors"
                  >
                    (62) 9 9815-2991
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[rgb(42,30,75)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail width={18} height={18} className="text-[rgb(219,38,27)]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">
                    E-mail
                  </p>
                  <a
                    href="mailto:advanceelevadores@hotmail.com"
                    rel="noopener noreferrer"
                    className="text-[rgb(42,30,75)] font-semibold text-sm hover:text-[rgb(219,38,27)] transition-colors"
                  >
                    advanceelevadores@hotmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[rgb(42,30,75)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin width={18} height={18} className="text-[rgb(219,38,27)]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">
                    Endereço
                  </p>
                  <a
                    href="https://maps.google.com/?q=Advence+Elevadores+Goiania"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(42,30,75)] font-semibold text-sm hover:text-[rgb(219,38,27)] transition-colors"
                  >
                    R. Arquimedes Rocha, 73 — Castelo Branco, Goiânia-GO
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[rgb(42,30,75)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock width={18} height={18} className="text-[rgb(219,38,27)]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">
                    Horário
                  </p>
                  <p className="text-[rgb(42,30,75)] font-semibold text-sm">
                    Seg-Sex: 8h às 17h45 | Plantão 24h
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.96464043453!2d-49.30143742485095!3d-16.678652784092634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef41eaae6816d%3A0x93cea35ed4dade71!2sAdvence%20Elevadores!5e0!3m2!1spt-BR!2sbr!4v1776454076332!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Advence System Elevadores"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-[rgb(42,30,75)] mb-2">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: João Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgb(42,30,75)]/30 focus:border-[rgb(42,30,75)] transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[rgb(42,30,75)] mb-2">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(62) 9 0000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgb(42,30,75)]/30 focus:border-[rgb(42,30,75)] transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[rgb(42,30,75)] mb-2">
                  Serviço de Interesse *
                </label>
                <select
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[rgb(42,30,75)]/30 focus:border-[rgb(42,30,75)] transition-all text-sm"
                >
                  <option value="">Selecione um serviço</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[rgb(42,30,75)] mb-2">
                  Mensagem (opcional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Descreva brevemente sua necessidade..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgb(42,30,75)]/30 focus:border-[rgb(42,30,75)] transition-all text-sm resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(219,38,27)] hover:bg-red-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-200 shadow-lg hover:shadow-red-900/30 hover:-translate-y-0.5 text-base"
              >
                <Send width={18} height={18} className="lucide lucide-send " />
                Enviar pelo WhatsApp
              </button>
              <p className="text-center text-xs text-gray-400">
                Você será redirecionado para o WhatsApp com os dados preenchidos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
