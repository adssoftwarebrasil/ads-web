import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const insuranceTypes = [
  'Seguro Automóvel',
  'Seguro de Vida',
  'Seguro Residencial',
  'Seguro Empresarial',
  'Seguro Viagem',
  'Outro',
];

interface ContactInfo {
  Icon: LucideIcon;
  iconClass: string;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

const contactInfo: ContactInfo[] = [
  {
    Icon: Phone,
    iconClass: 'lucide lucide-phone text-white',
    label: 'Telefone Fixo',
    value: '(84) 3025-6322',
    href: 'tel:+558430256322',
  },
  {
    Icon: Phone,
    iconClass: 'lucide lucide-phone text-white',
    label: 'WhatsApp',
    value: '(84) 9 9108-9072',
    href: 'http://wa.me/5584991089072',
    external: true,
  },
  {
    Icon: Mail,
    iconClass: 'lucide lucide-mail text-white',
    label: 'E-mail',
    value: 'comercial@dnseguros.com.br',
    href: 'mailto:comercial@dnseguros.com.br',
  },
  {
    Icon: MapPin,
    iconClass: 'lucide lucide-map-pin text-white',
    label: 'Endereço',
    value: 'Av. Ramualdo Galvão, 2109 SL 103 – Lagoa Nova, Natal - RN',
    href: 'https://maps.google.com/?q=Av.+Ramualdo+Galvão,+2109+Natal+RN',
    external: true,
  },
  {
    Icon: Clock,
    iconClass: 'lucide lucide-clock text-white',
    label: 'Horário',
    value: 'Segunda a Sexta: 08:00 – 17:00',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', insurance: '', message: '' });

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message =
      `Olá! Gostaria de solicitar uma cotação.%0A%0A` +
      `*Nome:* ${form.name}%0A` +
      `*Telefone:* ${form.phone}%0A` +
      `*E-mail:* ${form.email}%0A` +
      `*Tipo de Seguro:* ${form.insurance}%0A` +
      `*Mensagem:* ${form.message}`;
    window.open(`http://wa.me/5584991089072?text=${message}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-red font-semibold text-sm uppercase tracking-widest">Fale Conosco</span>
          <h2 className="section-title mt-2">Solicite sua Cotação Grátis</h2>
          <p className="section-subtitle">
            Preencha o formulário e nossa equipe entrará em contato pelo WhatsApp em instantes.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nome completo *</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={update('name')}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone / WhatsApp *</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="(00) 00000-0000"
                    value={form.phone}
                    onChange={update('phone')}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail</label>
                <input
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={update('email')}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de Seguro *</label>
                <select
                  name="insurance"
                  required
                  value={form.insurance}
                  onChange={update('insurance')}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all duration-200"
                >
                  <option value="">Selecione o tipo de seguro</option>
                  {insuranceTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Descreva o que você precisa ou deixe alguma informação adicional..."
                  value={form.message}
                  onChange={update('message')}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all duration-200 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 py-4 text-base rounded-xl disabled:opacity-70"
              >
                <Send size={18} className="lucide lucide-send " />
                Enviar pelo WhatsApp
              </button>
              <p className="text-gray-400 text-xs text-center">
                Ao enviar, você será redirecionado ao WhatsApp com sua mensagem pré-preenchida.
              </p>
            </form>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-brand-blue rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-5">
                {contactInfo.map((info) => {
                  const { Icon } = info;
                  const inner = (
                    <div className="flex items-start gap-4">
                      <div className="bg-white/15 rounded-xl p-2.5 flex-shrink-0 mt-0.5">
                        <Icon size={18} className={info.iconClass} />
                      </div>
                      <div>
                        <p className="text-white/60 text-xs font-medium uppercase tracking-wide mb-0.5">
                          {info.label}
                        </p>
                        <p className="text-white font-medium text-sm leading-snug">{info.value}</p>
                      </div>
                    </div>
                  );
                  if (info.href) {
                    return (
                      <a
                        key={info.label}
                        href={info.href}
                        rel="noopener noreferrer"
                        {...(info.external ? { target: '_blank' } : {})}
                        className="block hover:opacity-80 transition-opacity"
                      >
                        {inner}
                      </a>
                    );
                  }
                  return <div key={info.label}>{inner}</div>;
                })}
              </div>
            </div>
            <a
              href="http://wa.me/5584991089072"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.107.544 4.09 1.497 5.817L.057 23.885l6.24-1.637A11.949 11.949 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.807 9.807 0 01-5.006-1.371l-.358-.214-3.71.974.989-3.614-.234-.372A9.79 9.79 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z"></path>
              </svg>
              Chamar no WhatsApp Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
