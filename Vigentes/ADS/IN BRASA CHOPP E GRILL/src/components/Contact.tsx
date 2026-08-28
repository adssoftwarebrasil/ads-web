import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { MapPin, Clock, Phone, User, Users, MessageSquare, Send } from 'lucide-react';
import { WHATSAPP, WHATSAPP_DISPLAY, whatsappLink } from '../config';

/** Aberto de segunda a sabado, das 17h as 23h. Domingo fechado. */
function isOpenNow(now: Date = new Date()): boolean {
  if (now.getDay() === 0) return false;
  const minutes = now.getHours() * 60 + now.getMinutes();
  return minutes >= 17 * 60 && minutes < 23 * 60;
}

const schedule = [
  { day: 'Segunda-feira', hours: '17:00 – 23:00', closed: false },
  { day: 'Terça-feira', hours: '17:00 – 23:00', closed: false },
  { day: 'Quarta-feira', hours: '17:00 – 23:00', closed: false },
  { day: 'Quinta-feira', hours: '17:00 – 23:00', closed: false },
  { day: 'Sexta-feira', hours: '17:00 – 23:00', closed: false },
  { day: 'Sábado', hours: '17:00 – 23:00', closed: false },
  { day: 'Domingo', hours: 'Fechado', closed: true },
];

const times = [
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
  '20:00', '20:30', '21:00', '21:30', '22:00',
];

const guestOptions = [
  '1-2 pessoas',
  '3-4 pessoas',
  '5-6 pessoas',
  '7-10 pessoas',
  '10+ pessoas',
];

export default function Contact() {
  const [open, setOpen] = useState(() => isOpenNow());

  useEffect(() => {
    const id = window.setInterval(() => setOpen(isOpenNow()), 60000);
    return () => window.clearInterval(id);
  }, []);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de fazer uma reserva no In Brasa.',
      `Nome: ${form.name}`,
      `WhatsApp: ${form.phone}`,
      `Data: ${form.date}`,
      `Horário: ${form.time}`,
      `Pessoas: ${form.guests}`,
    ];
    if (form.message) lines.push(`Observação: ${form.message}`);
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand/4 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subheading animate-reveal">Localização &amp; Contato</p>
          <h2 className="section-heading mt-3 animate-reveal">
            Venha nos <span className="text-gradient">Visitar</span>
          </h2>
          <div className="divider mx-auto mt-6 animate-reveal"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="card-dark p-6 animate-reveal">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="lucide lucide-map-pin text-brand" width={18} height={18} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Endereço</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Av. dos Tarumãs, 2368 — Jardim Maringá
                    <br />
                    Sinop – MT, 78556-250
                  </p>
                  <a
                    href="https://maps.google.com/?q=In+Brasa+Chopp+Grill+Sinop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand text-xs font-semibold mt-2 inline-block hover:underline"
                  >
                    Abrir no Google Maps →
                  </a>
                </div>
              </div>
            </div>
            <div className="card-dark p-6 animate-reveal">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="lucide lucide-clock text-brand" width={18} height={18} />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-semibold">Horários</h3>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        open ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      ● {open ? 'Aberto agora' : 'Fechado'}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {schedule.map((row) => (
                      <div key={row.day} className="flex justify-between text-sm">
                        <span className="text-white/50">{row.day}</span>
                        <span className={row.closed ? 'text-white/30' : 'text-white/80'}>
                          {row.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-dark p-6 animate-reveal">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="lucide lucide-phone text-brand" width={18} height={18} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-brand transition-colors text-sm"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
            <div className="card-dark overflow-hidden animate-reveal rounded-2xl h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.6346243995476!2d-55.52044282494186!3d-11.860828988361714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77feec7244a61%3A0x6cdcdea335fd4ab4!2sIn%20Brasa%20Chopp%20%26%20Grill!5e0!3m2!1spt-BR!2sbr!4v1775505411622!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização In Brasa"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="animate-reveal">
            <div className="card-dark p-8">
              <h3 className="font-display text-2xl font-bold text-white mb-2">Fazer Reserva</h3>
              <p className="text-white/50 text-sm mb-8">
                Preencha os dados e enviaremos sua reserva pelo WhatsApp
              </p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="relative">
                  <User className="lucide lucide-user absolute left-4 top-1/2 -translate-y-1/2 text-white/30" width={16} height={16} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-surface-lighter border border-white/10 text-white placeholder-white/30 rounded-xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:border-brand transition-colors"
                  />
                </div>
                <div className="relative">
                  <Phone className="lucide lucide-phone absolute left-4 top-1/2 -translate-y-1/2 text-white/30" width={16} height={16} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Seu WhatsApp (66) 9 0000-0000"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-surface-lighter border border-white/10 text-white placeholder-white/30 rounded-xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:border-brand transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="date"
                      name="date"
                      required
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full bg-surface-lighter border border-white/10 text-white/70 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:border-brand transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <select
                      name="time"
                      required
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      className="w-full bg-surface-lighter border border-white/10 text-white/70 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:border-brand transition-colors appearance-none"
                    >
                      <option value="">Horário</option>
                      {times.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="relative">
                  <Users className="lucide lucide-users absolute left-4 top-1/2 -translate-y-1/2 text-white/30" width={16} height={16} />
                  <select
                    name="guests"
                    required
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full bg-surface-lighter border border-white/10 text-white/70 rounded-xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:border-brand transition-colors appearance-none"
                  >
                    <option value="">Número de pessoas</option>
                    {guestOptions.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <MessageSquare className="lucide lucide-message-square absolute left-4 top-3.5 text-white/30" width={16} height={16} />
                  <textarea
                    name="message"
                    placeholder="Alguma observação? (opcional)"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-surface-lighter border border-white/10 text-white placeholder-white/30 rounded-xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:border-brand transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center text-base py-4"
                >
                  <Send className="lucide lucide-send" width={16} height={16} />
                  Enviar Reserva pelo WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
