import { useState } from 'react';
import { MessageCircle, Phone, Mail, Clock, Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefone / WhatsApp',
    value: '(91) 98245-0015',
    href: 'tel:+5591982450015',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'hotelavalon@hotmail.com',
    href: 'mailto:hotelavalon@hotmail.com',
  },
  {
    icon: Clock,
    label: 'Atendimento',
    value: '24 horas por dia',
    href: null,
  },
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: '', phone: '', checkin: '', checkout: '', type: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá, Hotel Avalon! Meu nome é *${form.name}*.%0A%0A` +
      `📞 *Telefone:* ${form.phone}%0A` +
      (form.checkin ? `📅 *Check-in:* ${form.checkin}%0A` : '') +
      (form.checkout ? `📅 *Check-out:* ${form.checkout}%0A` : '') +
      (form.type ? `🛏️ *Tipo de suíte:* ${form.type}%0A` : '') +
      (form.message ? `%0A💬 *Mensagem:* ${form.message}` : '');
    window.open(`https://wa.me/5591982450015?text=${msg}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              Contato
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            Faça Sua Reserva
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Entre em contato conosco e garanta já sua acomodação. Estamos prontos para atendê-lo 24 horas por dia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-navy rounded-3xl p-8 h-full flex flex-col">
              <h3 className="font-serif text-2xl font-bold text-white mb-2">Fale Conosco</h3>
              <p className="text-white/65 mb-8 leading-relaxed">
                Prefere conversar diretamente? Use um dos canais abaixo. Nossa equipe está sempre disponível para ajudá-lo.
              </p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl hover:bg-white/15 transition-colors">
                    <div className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-medium uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white font-semibold text-sm hover:text-gold transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-semibold text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/5591982450015?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20o%20Hotel%20Avalon%20Benevides."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-0.5"
              >
                <MessageCircle size={20} />
                Conversar pelo WhatsApp
              </a>

              <div className="mt-6 flex items-center gap-4 justify-center">
                <a
                  href="https://www.facebook.com/Hotel-Avalon-100063521442653/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors text-sm"
                >
                  Facebook
                </a>
                <div className="w-px h-4 bg-white/20" />
                <a
                  href="https://www.instagram.com/avalon1hotel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors text-sm"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg shadow-navy/5">
              <h3 className="font-serif text-2xl font-bold text-navy mb-6">Solicitar Reserva</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-1.5">
                    Seu nome <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Como podemos te chamar?"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0aaff9] focus:ring-2 focus:ring-[#0aaff9]/20 transition-all placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-1.5">
                    WhatsApp / Telefone <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(91) 99999-9999"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0aaff9] focus:ring-2 focus:ring-[#0aaff9]/20 transition-all placeholder-gray-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">Check-in</label>
                    <input
                      type="date"
                      name="checkin"
                      value={form.checkin}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0aaff9] focus:ring-2 focus:ring-[#0aaff9]/20 transition-all text-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">Check-out</label>
                    <input
                      type="date"
                      name="checkout"
                      value={form.checkout}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0aaff9] focus:ring-2 focus:ring-[#0aaff9]/20 transition-all text-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-1.5">Tipo de Suíte</label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0aaff9] focus:ring-2 focus:ring-[#0aaff9]/20 transition-all text-gray-600 bg-white"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="Suíte Simples">Suíte Simples</option>
                    <option value="Suíte Master">Suíte Master</option>
                    <option value="Suíte Master Premium (cama de massagem)">Suíte Master Premium</option>
                    <option value="Pernoite (22h às 7h)">Pernoite (22h às 7h)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-1.5">Mensagem (opcional)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Alguma preferência ou informação adicional?"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0aaff9] focus:ring-2 focus:ring-[#0aaff9]/20 transition-all placeholder-gray-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0aaff9] hover:bg-[#0890d4] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#0aaff9]/30 hover:-translate-y-0.5"
                >
                  <Send size={18} />
                  Enviar pelo WhatsApp
                </button>
                <p className="text-center text-gray-400 text-xs">
                  Você será redirecionado ao WhatsApp com os dados preenchidos.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
