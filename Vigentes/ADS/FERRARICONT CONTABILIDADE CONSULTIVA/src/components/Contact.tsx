import { useState, FormEvent } from 'react';
import { User, Building, Phone, MessageSquare, Send } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

const services = [
  'Assessoria Contábil',
  'Abertura de Empresa',
  'Planejamento Tributário',
  'Regularização Fiscal',
  'Consultoria Financeira',
  'Certificado Digital',
  'Outro',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de uma consultoria gratuita com a FerrariCont.',
      '',
      `*Nome:* ${form.name}`,
    ];
    if (form.company) lines.push(`*Empresa:* ${form.company}`);
    if (form.phone) lines.push(`*WhatsApp:* ${form.phone}`);
    if (form.service) lines.push(`*Serviço de Interesse:* ${form.service}`);
    if (form.message) lines.push(`*Mensagem:* ${form.message}`);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`http://wa.me/556596828492?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Entre em contato
          </span>
          <h2 className="section-title mt-2">
            Pronto para <span className="text-gradient">Transformar</span> sua Empresa?
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Preencha o formulário e entraremos em contato via WhatsApp para uma consultoria gratuita.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3 animate-on-scroll-left">
            <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-3xl shadow-sm p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Seu nome *</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Nome completo"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200 text-sm text-primary placeholder-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Empresa</label>
                  <div className="relative">
                    <Building size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="company"
                      placeholder="Nome da empresa"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200 text-sm text-primary placeholder-gray-400"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">WhatsApp *</label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(65) 9 0000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200 text-sm text-primary placeholder-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200 text-sm text-primary bg-white appearance-none"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Mensagem</label>
                <div className="relative">
                  <MessageSquare size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Conte um pouco sobre sua necessidade..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200 text-sm text-primary placeholder-gray-400 resize-none"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-dark text-primary font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02] flex items-center justify-center gap-2 text-base"
              >
                <Send size={18} />
                Enviar pelo WhatsApp
              </button>
              <p className="text-gray-400 text-xs text-center">
                Ao enviar, você será redirecionado para o WhatsApp com os dados preenchidos.
              </p>
            </form>
          </div>
          <div className="lg:col-span-2 space-y-6 animate-on-scroll-right">
            <div className="bg-primary rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-medium uppercase tracking-wide mb-1">
                      WhatsApp / Telefone
                    </p>
                    <a
                      href="http://wa.me/556596828492"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold hover:text-accent transition-colors"
                    >
                      (65) 9 9682-8492
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#18E66E" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-medium uppercase tracking-wide mb-1">E-mail</p>
                    <a
                      href="mailto:jose.ferraricont@gmail.com"
                      className="text-white font-semibold hover:text-accent transition-colors text-sm break-all"
                    >
                      jose.ferraricont@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#18E66E" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-medium uppercase tracking-wide mb-1">
                      Endereço
                    </p>
                    <p className="text-white font-medium text-sm leading-relaxed">
                      R. Júlio de Castilho, 228-S, Sala 02
                      <br />
                      Centro, Lucas do Rio Verde - MT
                      <br />
                      CEP: 78460-017
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#18E66E" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-medium uppercase tracking-wide mb-1">
                      Horário de Atendimento
                    </p>
                    <p className="text-white font-medium text-sm leading-relaxed">
                      Seg - Sex: 07h - 11h | 13h - 17h48
                      <br />
                      <span className="text-white/50">Sábado: Fechado</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="http://wa.me/556596828492"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366] hover:bg-[#20B95A] text-white font-bold px-6 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:scale-[1.02]"
            >
              <WhatsappIcon size={28} fill="white" />
              <div>
                <p className="text-sm opacity-90 font-normal">Fale agora pelo</p>
                <p className="text-base font-black">WhatsApp</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
