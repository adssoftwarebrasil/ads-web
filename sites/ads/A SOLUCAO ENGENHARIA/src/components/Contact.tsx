import { useState } from 'react';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefone / WhatsApp',
    value: '(79) 9 9870-5409',
    href: 'tel:+5579998705409',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'abraaosantos@asolucaoengenharia.com.br',
    href: 'mailto:abraaosantos@asolucaoengenharia.com.br',
  },
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'R. Siriri, 763 - Centro, Aracaju - SE',
    href: 'https://maps.google.com/?q=A+Solução+Engenharia+Aracaju',
  },
  {
    icon: Clock,
    label: 'Horário de Funcionamento',
    value: 'Segunda a Sexta: 07h às 16h',
    href: null,
  },
];

const serviceOptions = [
  'Extintores de Incêndio',
  'Sinalização de Emergência',
  'Iluminação de Emergência',
  'Alarme de Incêndio',
  'Detectores de Incêndio',
  'Sistema de Hidrantes',
  'Projeto de Incêndio',
  'Instalação Completa',
  'Treinamento de Brigada',
  'Outro',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Meu nome é *${form.name}*.\n\n` +
        (form.phone ? `Telefone: ${form.phone}\n` : '') +
        (form.service ? `Interesse: ${form.service}\n` : '') +
        (form.message ? `\nMensagem: ${form.message}` : '')
    );
    window.open(`http://wa.me/5579998705409?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#92AA40]/15 text-[#92AA40] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#090B4A] leading-tight mb-4">
            Solicite seu <span className="text-[#92AA40]">Orçamento Gratuito</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed">
            Preencha o formulário abaixo e entraremos em contato pelo WhatsApp
            com a melhor solução para sua necessidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-[#090B4A]/8 rounded-xl flex items-center justify-center shrink-0">
                  <info.icon size={18} className="text-[#090B4A]" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium mb-0.5">
                    {info.label}
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-[#090B4A] font-semibold text-sm hover:text-[#92AA40] transition-colors break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-[#090B4A] font-semibold text-sm">
                      {info.value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            <div className="bg-[#090B4A] rounded-2xl p-5">
              <p className="text-white/60 text-xs mb-3 font-medium uppercase tracking-wide">
                Redes Sociais
              </p>
              <a
                href="https://www.instagram.com/asolucaoengenharia/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-[#92AA40] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="font-medium text-sm">@asolucaoengenharia</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-semibold text-[#090B4A] mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#92AA40]/40 focus:border-[#92AA40] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#090B4A] mb-2">
                    WhatsApp / Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(79) 9 0000-0000"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#92AA40]/40 focus:border-[#92AA40] transition-colors"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-semibold text-[#090B4A] mb-2">
                  Serviço ou produto de interesse
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#92AA40]/40 focus:border-[#92AA40] transition-colors bg-white"
                >
                  <option value="">Selecione uma opção</option>
                  {serviceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#090B4A] mb-2">
                  Mensagem adicional
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Descreva sua necessidade, tipo de imóvel, área, etc."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#92AA40]/40 focus:border-[#92AA40] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#92AA40] hover:bg-[#7d9336] text-white font-bold py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-[#92AA40]/25 hover:shadow-xl text-base"
              >
                <Send size={18} />
                Enviar via WhatsApp
              </button>

              <p className="text-center text-gray-400 text-xs mt-3">
                Ao enviar, você será redirecionado para o WhatsApp com sua
                mensagem preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
