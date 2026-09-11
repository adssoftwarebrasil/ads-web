import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const INFO_CARDS = [
  {
    icon: MapPin,
    label: 'Endereço',
    lines: ['Rua Vitória Régia, 1006 - Vila Flores', 'Franca - SP, 14.400-430'],
  },
  {
    icon: Phone,
    label: 'Telefone / WhatsApp',
    lines: ['(16) 3722-2256', '+55 (16) 99997-1815'],
  },
  {
    icon: Mail,
    label: 'E-mail',
    lines: ['contato@vitadent.com.br'],
  },
  {
    icon: Clock,
    label: 'Funcionamento',
    lines: ['Segunda a Sexta', '07:30 – 11:00 / 13:00 – 17:30'],
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de solicitar um contato pela Vitadent.',
      '',
      `*Nome:* ${form.name}`,
      `*Telefone/WhatsApp:* ${form.phone}`,
    ];
    if (form.email) lines.push(`*E-mail:* ${form.email}`);
    lines.push(`*Assunto:* ${form.subject}`);
    lines.push(`*Mensagem:* ${form.message}`);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://api.whatsapp.com/send/?phone=5516999971815&text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14 section-reveal">
          <span className="inline-block text-[#0C4E9D] text-sm font-semibold tracking-widest uppercase mb-4">
            Fale Conosco
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Contato</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Estamos prontos para atender dentistas e protéticos. Entre em contato e solicite seu orçamento.
          </p>
          <div className="mt-6 mx-auto w-16 h-1 bg-[#0C4E9D] rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4 section-reveal">
            {INFO_CARDS.map((card, i) => (
              <div
                key={card.label}
                className="glass-card rounded-2xl p-5 border border-[#1a1a1a] hover:border-[#0C4E9D]/30 transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0C4E9D]/15 border border-[#0C4E9D]/20 flex items-center justify-center flex-shrink-0">
                    <card.icon className="text-[#0C4E9D]" width={16} height={16} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{card.label}</p>
                    {card.lines.map((line) => (
                      <p key={line} className="text-white text-sm font-medium">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="glass-card rounded-2xl overflow-hidden border border-[#1a1a1a] h-52 section-reveal" style={{ transitionDelay: '400ms' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7472.481315114062!2d-47.406203000000005!3d-20.537332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a62fd2579c21%3A0xcf5f6706ff2210b8!2sVitadent%20Pr%C3%B3tese%20Dent%C3%A1ria!5e0!3m2!1spt-BR!2sus!4v1771604618042!5m2!1spt-BR!2sus"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Vitadent"
                style={{ border: '0px', filter: 'invert(90%) hue-rotate(180deg)' }}
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-3 section-reveal" style={{ transitionDelay: '200ms' }}>
            <div className="glass-card rounded-2xl p-6 md:p-8 border border-[#1a1a1a]">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <h3 className="text-white font-bold text-lg mb-6">Envie sua mensagem</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-500 text-xs uppercase tracking-wider mb-1.5 block">Nome *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Seu nome completo"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-[#111] border border-[#2a2a2a] focus:border-[#0C4E9D] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors duration-300 focus:ring-2 focus:ring-[#0C4E9D]/20"
                    />
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs uppercase tracking-wider mb-1.5 block">Telefone / WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(16) 99999-9999"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-[#111] border border-[#2a2a2a] focus:border-[#0C4E9D] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors duration-300 focus:ring-2 focus:ring-[#0C4E9D]/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-500 text-xs uppercase tracking-wider mb-1.5 block">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-[#111] border border-[#2a2a2a] focus:border-[#0C4E9D] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors duration-300 focus:ring-2 focus:ring-[#0C4E9D]/20"
                  />
                </div>
                <div>
                  <label className="text-gray-500 text-xs uppercase tracking-wider mb-1.5 block">Assunto *</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Ex: Orçamento para E-max"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-[#111] border border-[#2a2a2a] focus:border-[#0C4E9D] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors duration-300 focus:ring-2 focus:ring-[#0C4E9D]/20"
                  />
                </div>
                <div>
                  <label className="text-gray-500 text-xs uppercase tracking-wider mb-1.5 block">Mensagem *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Descreva sua necessidade, serviço desejado ou dúvida..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-[#111] border border-[#2a2a2a] focus:border-[#0C4E9D] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors duration-300 resize-none focus:ring-2 focus:ring-[#0C4E9D]/20"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#0C4E9D] hover:bg-[#1a6fd4] text-white font-semibold rounded-xl transition-all duration-300 blue-glow mt-2"
                >
                  <Send className="lucide lucide-send" width={16} height={16} />
                  Enviar pelo WhatsApp
                </button>
                <p className="text-gray-600 text-xs text-center">
                  Ao enviar, você será redirecionado ao WhatsApp para concluir o contato.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
