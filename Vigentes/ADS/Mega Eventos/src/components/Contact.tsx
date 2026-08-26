import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const serviceOptions = [
  'Organização de Eventos',
  'Promotoras & Receptivo',
  'Panfletagem & Blitz',
  'Locação de Sonorização',
  'Logística & Merchandising',
  'Marketing Promocional',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de solicitar um orçamento.',
      '',
      `*Nome:* ${form.name}`,
    ];
    if (form.phone) lines.push(`*Telefone:* ${form.phone}`);
    if (form.email) lines.push(`*E-mail:* ${form.email}`);
    if (form.service) lines.push(`*Serviço de interesse:* ${form.service}`);
    if (form.message) lines.push(`*Mensagem:* ${form.message}`);

    const text = encodeURIComponent(lines.join('\n'));
    window.open(`http://wa.me/5565996292448?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 sm:py-28 bg-[rgb(53,53,53)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[rgb(249,171,118)] mb-3">
            Fale conosco
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Vamos Transformar
            <br />
            <span className="text-[rgb(255,241,18)]">Seu Próximo Evento</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Preencha o formulário e receba um orçamento personalizado pelo WhatsApp em minutos.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="reveal-left space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[rgb(249,171,118)]/20 flex items-center justify-center flex-shrink-0">
                <MapPin width={22} height={22} className="text-[rgb(249,171,118)]" />
              </div>
              <div>
                <div className="text-white font-bold mb-1">Endereço</div>
                <div className="text-white/60 text-sm leading-relaxed">
                  Rua 27, 222 - Boa Esperança
                  <br />
                  Cuiabá - MT, 78068-595
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[rgb(249,171,118)]/20 flex items-center justify-center flex-shrink-0">
                <Phone width={22} height={22} className="text-[rgb(249,171,118)]" />
              </div>
              <div>
                <div className="text-white font-bold mb-1">WhatsApp / Telefone</div>
                <a
                  href="tel:+5565996292448"
                  className="text-white/60 text-sm hover:text-[rgb(249,171,118)] transition-colors"
                >
                  (65) 99629-2448
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[rgb(249,171,118)]/20 flex items-center justify-center flex-shrink-0">
                <Mail width={22} height={22} className="text-[rgb(249,171,118)]" />
              </div>
              <div>
                <div className="text-white font-bold mb-1">E-mail</div>
                <div className="space-y-1">
                  <a
                    href="mailto:cris@megaeventos.net"
                    className="block text-white/60 text-sm hover:text-[rgb(249,171,118)] transition-colors"
                  >
                    cris@megaeventos.net
                  </a>
                  <a
                    href="mailto:atendimento@megaeventos.net"
                    className="block text-white/60 text-sm hover:text-[rgb(249,171,118)] transition-colors"
                  >
                    atendimento@megaeventos.net
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[rgb(249,171,118)]/20 flex items-center justify-center flex-shrink-0">
                <Clock width={22} height={22} className="text-[rgb(249,171,118)]" />
              </div>
              <div>
                <div className="text-white font-bold mb-1">Horário de Atendimento</div>
                <div className="text-white/60 text-sm">Das 8h às 18h — Segunda a Sexta</div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden mt-6 h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.6797205972503!2d-56.05810152487372!3d-15.608751785005973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1d2e6bd4cb1%3A0x10a6cf626cc851c3!2sMega%20Eventos%20-%20Organiza%C3%A7%C3%A3o%20de%20Eventos%20e%20Marketing%20Promocional%20em%20Cuiab%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1774464890543!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Mega Eventos"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="reveal-right">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-[rgb(53,53,53)] mb-1.5">
                  Seu nome <span className="text-[rgb(234,50,56)]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Como podemos te chamar?"
                  className="w-full border border-[rgb(53,53,53)]/15 rounded-xl px-4 py-3 text-sm text-[rgb(53,53,53)] placeholder:text-[rgb(53,53,53)]/40 focus:outline-none focus:ring-2 focus:ring-[rgb(249,171,118)] focus:border-transparent transition-all"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[rgb(53,53,53)] mb-1.5">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(65) 9xxxx-xxxx"
                    className="w-full border border-[rgb(53,53,53)]/15 rounded-xl px-4 py-3 text-sm text-[rgb(53,53,53)] placeholder:text-[rgb(53,53,53)]/40 focus:outline-none focus:ring-2 focus:ring-[rgb(249,171,118)] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[rgb(53,53,53)] mb-1.5">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="seu@email.com"
                    className="w-full border border-[rgb(53,53,53)]/15 rounded-xl px-4 py-3 text-sm text-[rgb(53,53,53)] placeholder:text-[rgb(53,53,53)]/40 focus:outline-none focus:ring-2 focus:ring-[rgb(249,171,118)] focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[rgb(53,53,53)] mb-1.5">
                  Serviço de interesse
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full border border-[rgb(53,53,53)]/15 rounded-xl px-4 py-3 text-sm text-[rgb(53,53,53)] focus:outline-none focus:ring-2 focus:ring-[rgb(249,171,118)] focus:border-transparent transition-all bg-white"
                >
                  <option value="">Selecione um serviço...</option>
                  {serviceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[rgb(53,53,53)] mb-1.5">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Conte mais sobre seu evento ou projeto..."
                  className="w-full border border-[rgb(53,53,53)]/15 rounded-xl px-4 py-3 text-sm text-[rgb(53,53,53)] placeholder:text-[rgb(53,53,53)]/40 focus:outline-none focus:ring-2 focus:ring-[rgb(249,171,118)] focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[rgb(234,50,56)] hover:bg-[rgb(249,171,118)] text-white font-bold text-base py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon />
                Enviar pelo WhatsApp
              </button>
              <p className="text-center text-xs text-[rgb(53,53,53)]/50">
                Ao enviar, você será redirecionado ao WhatsApp com os dados preenchidos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
