import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const services = [
  'Abertura de Empresa',
  'Contabilidade Geral',
  'Planejamento Tributário',
  'Contabilidade Rural / Agronegócio',
  'Folha de Pagamento',
  'Imposto de Renda',
  'Consultoria Contábil',
  'Outros',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = 'Olá! Gostaria de solicitar um orçamento.\n\n';
    text += `*Nome:* ${form.name}\n`;
    text += `*Telefone:* ${form.phone}\n`;
    if (form.email) text += `*E-mail:* ${form.email}\n`;
    if (form.service) text += `*Serviço de interesse:* ${form.service}\n`;
    if (form.message) text += `*Mensagem:* ${form.message}\n`;
    const url = `https://wa.me/5566999538963?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 bg-brand-burgundy relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-blue/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-blue/10 blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-blue-light font-semibold text-sm tracking-widest uppercase mb-3">
            Entre em contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Vamos Cuidar da sua Contabilidade
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Solicite um orçamento sem compromisso e descubra como podemos ajudar sua empresa a crescer com segurança
            fiscal.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="lucide lucide-map-pin text-brand-blue-light" width={19} height={19} strokeWidth={2} />
                </div>
                <div>
                  <div className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">Endereço</div>
                  <div className="text-white text-sm font-medium whitespace-pre-line">
                    {'Av. Cuiabá, 155 – Primavera I\nPrimavera do Leste – MT, 78850-000'}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="lucide lucide-phone text-brand-blue-light" width={19} height={19} strokeWidth={2} />
                </div>
                <div>
                  <div className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">
                    Telefone / WhatsApp
                  </div>
                  <a
                    href="tel:+5566999538963"
                    className="text-white hover:text-brand-blue-light transition-colors duration-200 text-sm font-medium whitespace-pre-line"
                  >
                    (66) 9 9953-8963
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="lucide lucide-mail text-brand-blue-light" width={19} height={19} strokeWidth={2} />
                </div>
                <div>
                  <div className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">E-mail</div>
                  <a
                    href="mailto:fiscal.assistec@gmail.com"
                    className="text-white hover:text-brand-blue-light transition-colors duration-200 text-sm font-medium whitespace-pre-line"
                  >
                    fiscal.assistec@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="lucide lucide-clock text-brand-blue-light" width={19} height={19} strokeWidth={2} />
                </div>
                <div>
                  <div className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">
                    Horário de Atendimento
                  </div>
                  <div className="text-white text-sm font-medium whitespace-pre-line">
                    Seg–Sex: 07h–11h e 13h–17h30
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.543549266361!2d-54.30261042487461!3d-15.562581385045858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x937725b5a63b5db5%3A0xcee62cb1c144e04!2sAssistec%20Contabilidade!5e0!3m2!1spt-BR!2sbr!4v1772811592592!5m2!1spt-BR!2sbr"
                width="100%"
                height="260"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Assistec Contabilidade"
                style={{ border: '0px', display: 'block' }}
              ></iframe>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Seu nome ou razão social"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue/60 focus:bg-white/15 transition-all duration-200"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(66) 9 9999-9999"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue/60 focus:bg-white/15 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue/60 focus:bg-white/15 transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
                  Serviço de Interesse
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue/60 focus:bg-white/15 transition-all duration-200 appearance-none"
                >
                  <option value="" className="text-gray-900">
                    Selecione um serviço
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service} className="text-gray-900">
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Conte um pouco sobre sua empresa ou necessidade..."
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue/60 focus:bg-white/15 transition-all duration-200 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-blue hover:bg-brand-blue-light text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center gap-2 text-sm"
              >
                <Send className="lucide lucide-send" width={17} height={17} strokeWidth={2} />
                Enviar pelo WhatsApp
              </button>
              <p className="text-white/40 text-xs text-center">
                Ao enviar, você será redirecionado ao WhatsApp com sua mensagem preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
