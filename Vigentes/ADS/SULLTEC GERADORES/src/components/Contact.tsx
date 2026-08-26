import { useState } from 'react';
import type { FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const services = [
  'Locação de Geradores',
  'Venda de Geradores',
  'Manutenção Preventiva',
  'Manutenção Corretiva',
  'Rejuvenescimento de Gerador',
  'Outro',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de solicitar um orçamento.',
      '',
      `Nome: ${form.name}`,
      `Telefone: ${form.phone}`,
    ];
    if (form.email) lines.push(`E-mail: ${form.email}`);
    if (form.service) lines.push(`Serviço de interesse: ${form.service}`);
    if (form.message) lines.push(`Mensagem: ${form.message}`);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/5548991372058?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Fale Conosco
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue mb-4">
            Solicite seu Orçamento Gratuito
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Preencha o formulário e nossa equipe entrará em contato para
            apresentar a melhor solução para você.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-11 h-11 bg-brand-blue rounded-xl flex items-center justify-center shadow-md">
                <Phone
                  width={18}
                  height={18}
                  className="lucide lucide-phone text-white"
                />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">
                  Telefone / WhatsApp
                </p>
                <a
                  href="tel:+5548991372058"
                  className="text-gray-700 font-medium hover:text-brand-red transition-colors text-sm"
                >
                  (48) 99137-2058
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-11 h-11 bg-brand-blue rounded-xl flex items-center justify-center shadow-md">
                <Mail
                  width={18}
                  height={18}
                  className="lucide lucide-mail text-white"
                />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">
                  E-mail Comercial
                </p>
                <a
                  href="mailto:sulltec@sulltec.com.br"
                  className="text-gray-700 font-medium hover:text-brand-red transition-colors text-sm"
                >
                  sulltec@sulltec.com.br
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-11 h-11 bg-brand-blue rounded-xl flex items-center justify-center shadow-md">
                <Mail
                  width={18}
                  height={18}
                  className="lucide lucide-mail text-white"
                />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">
                  E-mail Contato
                </p>
                <a
                  href="mailto:contato@sulltec.com.br"
                  className="text-gray-700 font-medium hover:text-brand-red transition-colors text-sm"
                >
                  contato@sulltec.com.br
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-11 h-11 bg-brand-blue rounded-xl flex items-center justify-center shadow-md">
                <MapPin
                  width={18}
                  height={18}
                  className="lucide lucide-map-pin text-white"
                />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">
                  Endereço
                </p>
                <p className="text-gray-700 font-medium text-sm">
                  Rua Padova, 44, Pagani, Palhoça – SC
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-11 h-11 bg-brand-blue rounded-xl flex items-center justify-center shadow-md">
                <Clock
                  width={18}
                  height={18}
                  className="lucide lucide-clock text-white"
                />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">
                  Horário de Atendimento
                </p>
                <p className="text-gray-700 font-medium text-sm">
                  Segunda a Sexta: 08h às 18h
                </p>
              </div>
            </div>
            <div className="mt-4 p-5 bg-brand-blue rounded-2xl">
              <p className="text-white font-bold text-base mb-2">
                Atendimento Rápido
              </p>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                Para respostas mais ágeis, entre em contato diretamente pelo
                WhatsApp.
              </p>
              <a
                href="https://wa.me/5548991372058"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors w-full justify-center"
              >
                Abrir WhatsApp
              </a>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(48) 9 0000-0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-all"
                />
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                placeholder="seu@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-all"
              />
            </div>
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Serviço de Interesse *
              </label>
              <select
                name="service"
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-all appearance-none"
              >
                <option value="">Selecione um serviço...</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Mensagem
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Descreva sua necessidade, localidade e qualquer detalhe relevante..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-all resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-red/30 active:scale-95"
            >
              <Send width={18} height={18} className="lucide lucide-send " />
              Enviar Solicitação de Orçamento
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
