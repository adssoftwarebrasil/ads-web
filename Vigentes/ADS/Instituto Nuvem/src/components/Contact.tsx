import { useState } from 'react';
import { User, Phone, ChevronDown, MessageSquare, Send } from 'lucide-react';
import { WhatsAppIcon } from './icons';

const services = [
  'Psicologia',
  'Fonoaudiologia',
  'Terapia Ocupacional',
  'Fisioterapia',
  'Psicopedagogia',
  'Nutrição',
  'Terapia ABA',
  'Avaliação Multidisciplinar',
  'Outro',
];

const unitNumbers: Record<string, string> = {
  primavera: '556696568775',
  campoverde: '556699352163',
};

const reasons = [
  'Equipe multidisciplinar integrada',
  'Atendimento baseado em evidências',
  'Ambiente acolhedor e seguro',
  'Envolvimento ativo da família',
  'Terapia ABA especializada',
  'Desde 2021 transformando vidas',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', unit: '', service: '', message: '' });

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const number = unitNumbers[form.unit] || unitNumbers.primavera;
    const unitLabel = form.unit === 'campoverde' ? 'Campo Verde' : 'Primavera do Leste';
    const lines = [
      'Olá! Gostaria de agendar uma avaliação no Instituto Nuvem.',
      '',
      `*Nome:* ${form.name}`,
      `*WhatsApp/Telefone:* ${form.phone}`,
      `*Unidade de preferência:* ${unitLabel}`,
    ];
    if (form.service) lines.push(`*Especialidade de interesse:* ${form.service}`);
    if (form.message) lines.push(`*Mensagem:* ${form.message}`);
    const url = `https://wa.me/${number}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="section-observe">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="tag mb-5 inline-block">Contato</span>
            <h2 className="section-title mb-5">
              Dê o Primeiro Passo<br />
              <span className="text-primary">Rumo ao Desenvolvimento</span>
            </h2>
            <p className="section-subtitle">
              Preencha o formulário e um de nossos especialistas entrará em contato via WhatsApp para agendar a avaliação inicial.
            </p>
          </div>
          <div className="grid lg:grid-cols-5 gap-12 items-start max-w-5xl mx-auto">
            <div className="lg:col-span-3 bg-white rounded-3xl shadow-sm p-8">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <label className="block font-heading font-semibold text-gray-700 text-sm mb-2">
                      Nome completo <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Seu nome"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        className="w-full pl-11 pr-4 py-3.5 bg-surface border border-gray-200 rounded-xl font-sans text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-heading font-semibold text-gray-700 text-sm mb-2">
                      WhatsApp / Telefone <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="(66) 9 0000-0000"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        className="w-full pl-11 pr-4 py-3.5 bg-surface border border-gray-200 rounded-xl font-sans text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-heading font-semibold text-gray-700 text-sm mb-2">
                      Unidade de preferência <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="unit"
                        required
                        value={form.unit}
                        onChange={(e) => update('unit', e.target.value)}
                        className="w-full px-4 py-3.5 bg-surface border border-gray-200 rounded-xl font-sans text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Selecione a unidade</option>
                        <option value="primavera">Primavera do Leste</option>
                        <option value="campoverde">Campo Verde</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-heading font-semibold text-gray-700 text-sm mb-2">
                      Especialidade de interesse
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        value={form.service}
                        onChange={(e) => update('service', e.target.value)}
                        className="w-full px-4 py-3.5 bg-surface border border-gray-200 rounded-xl font-sans text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Selecione</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block font-heading font-semibold text-gray-700 text-sm mb-2">
                    Mensagem (opcional)
                  </label>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-4 top-3.5 text-gray-400" />
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Conte um pouco sobre a criança ou sua dúvida..."
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 bg-surface border border-gray-200 rounded-xl font-sans text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-heading font-bold text-sm py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Enviar pelo WhatsApp
                  <Send size={15} />
                </button>
                <p className="text-center font-sans text-xs text-gray-400">
                  Ao enviar, você será redirecionado ao WhatsApp com seus dados preenchidos.
                </p>
              </form>
            </div>
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-7 text-white">
                <h3 className="font-heading font-bold text-xl mb-3">Por que nos escolher?</h3>
                <ul className="space-y-3">
                  {reasons.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 font-sans text-sm text-white/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-cream mt-1.5 shrink-0"></div>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
                <h4 className="font-heading font-bold text-gray-800 text-base">Atendemos em:</h4>
                <a
                  href="http://wa.me/556696568775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-surface rounded-xl hover:bg-cream transition-colors group"
                >
                  <div>
                    <p className="font-heading font-bold text-gray-700 text-sm">Primavera do Leste</p>
                    <p className="font-sans text-xs text-gray-500">(66) 9 9656-8775</p>
                  </div>
                  <WhatsAppIcon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="http://wa.me/556699352163"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-surface rounded-xl hover:bg-cream transition-colors group"
                >
                  <div>
                    <p className="font-heading font-bold text-gray-700 text-sm">Campo Verde</p>
                    <p className="font-sans text-xs text-gray-500">(66) 9 9935-2163</p>
                  </div>
                  <WhatsAppIcon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
