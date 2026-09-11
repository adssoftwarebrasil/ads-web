import { useState, useEffect, useRef } from 'react';
import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';

const HOURS = [
  { day: 'Segunda a Sexta', hours: '08:00 às 18:00' },
  { day: 'Sábado', hours: '08:00 às 12:00' },
  { day: 'Emergências', hours: '24 horas' },
];

const SERVICES_LIST = [
  'Chave automotiva',
  'Fechadura digital',
  'Cópia de chave',
  'Abertura de cofre',
  'Abertura de porta',
  'Controle de portão',
  'Carimbos',
  'Outro',
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.section-animate');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Me chamo *${form.name}*.%0A📞 Telefone: ${form.phone}%0A🔧 Serviço: ${form.service}%0A📝 ${form.message}`;
    window.open(`http://wa.me/5519988923111?text=${msg}`, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="contato" ref={sectionRef} className="bg-brand-gray-dark py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-animate text-center mb-14">
          <span className="inline-block text-brand-yellow text-sm font-semibold uppercase tracking-widest mb-3">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-brand-white/60 text-base sm:text-lg max-w-xl mx-auto">
            Preencha o formulário e receba um atendimento personalizado via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="section-animate bg-brand-black border border-white/8 rounded-2xl p-6">
              <h3 className="text-brand-white font-bold text-lg mb-5 flex items-center gap-2">
                <Clock size={18} className="text-brand-yellow" />
                Horários
              </h3>
              <div className="space-y-3">
                {HOURS.map((h) => (
                  <div key={h.day} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                    <span className="text-brand-white/60 text-sm">{h.day}</span>
                    <span
                      className={`text-sm font-semibold ${
                        h.day === 'Emergências' ? 'text-brand-yellow' : 'text-brand-white'
                      }`}
                    >
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-animate bg-brand-black border border-white/8 rounded-2xl p-6 space-y-4">
              <h3 className="text-brand-white font-bold text-lg mb-2">Contatos</h3>
              {[
                {
                  icon: Phone,
                  label: 'WhatsApp / Telefone',
                  value: '(19) 9 8892-3111',
                  href: 'tel:+5519988923111',
                },
                {
                  icon: Mail,
                  label: 'E-mail',
                  value: 'atendimento@chaveiroglicerio.com.br',
                  href: 'mailto:atendimento@chaveiroglicerio.com.br',
                },
                {
                  icon: MapPin,
                  label: 'Endereço',
                  value: 'Av. Francisco Glicério, 1744 - Centro, Campinas - SP',
                  href: 'https://maps.google.com/?q=Chaveiro+Glicério+Campinas',
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-yellow/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-yellow/20 transition-colors">
                    <Icon size={16} className="text-brand-yellow" />
                  </div>
                  <div>
                    <p className="text-brand-white/40 text-xs">{label}</p>
                    <p className="text-brand-white/85 text-sm font-medium group-hover:text-brand-yellow transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-5">
            <div className="section-animate bg-brand-black border border-white/8 rounded-2xl p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-brand-white/60 text-xs font-medium mb-1.5 uppercase tracking-wide">
                      Nome *
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="w-full bg-brand-gray-dark border border-white/10 focus:border-brand-yellow text-brand-white placeholder-white/25 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-white/60 text-xs font-medium mb-1.5 uppercase tracking-wide">
                      Telefone *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(19) 9 0000-0000"
                      className="w-full bg-brand-gray-dark border border-white/10 focus:border-brand-yellow text-brand-white placeholder-white/25 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-brand-white/60 text-xs font-medium mb-1.5 uppercase tracking-wide">
                    Serviço desejado
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-brand-gray-dark border border-white/10 focus:border-brand-yellow text-brand-white rounded-xl px-4 py-3 text-sm outline-none transition-colors appearance-none"
                  >
                    <option value="" className="bg-brand-gray-dark">Selecione um serviço</option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s} value={s} className="bg-brand-gray-dark">{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-brand-white/60 text-xs font-medium mb-1.5 uppercase tracking-wide">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Descreva o que precisa..."
                    className="w-full bg-brand-gray-dark border border-white/10 focus:border-brand-yellow text-brand-white placeholder-white/25 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-black font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-[0_0_25px_rgba(255,192,1,0.4)] text-base"
                >
                  <Send size={18} />
                  Enviar pelo WhatsApp
                </button>
                <p className="text-brand-white/30 text-xs text-center">
                  Ao enviar, você será redirecionado para o WhatsApp com a mensagem pré-preenchida.
                </p>
              </form>
            </div>

            <div className="section-animate rounded-2xl overflow-hidden border border-white/8" style={{ height: '260px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.3738618498674!2d-47.06484242468978!3d-22.899577279260203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c8adf267c505%3A0xb04b06fd1db31898!2sChaveiro%20Glic%C3%A9rio%20-%20Campinas!5e0!3m2!1spt-BR!2sbr!4v1774878024042!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(30%) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Chaveiro Glicério"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
