import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const WA_URL = 'https://api.whatsapp.com/send?phone=5541998468028&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F';

const contactInfo = [
  { icon: Phone, label: 'Telefone / WhatsApp', value: '(41) 99846-8028 / (41) 99911-5632', href: 'tel:+5541998468028' },
  { icon: Mail, label: 'E-mail', value: 'calhasbariguicuritiba@gmail.com', href: 'mailto:calhasbariguicuritiba@gmail.com' },
  { icon: MapPin, label: 'Endereço', value: 'BR-277, 1606 – Santo Inácio, Curitiba/PR', href: null },
  { icon: Clock, label: 'Horário', value: 'Seg a Sex: 08h às 18h | Sáb e Dom: Fechado', href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Meu nome é ${form.name}.\n${form.subject ? 'Assunto: ' + form.subject + '\n' : ''}${form.message}`
    );
    window.open(`https://api.whatsapp.com/send?phone=5541998468028&text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-4">
            Contato
          </span>
          <h2 className="font-heading font-black text-dark-900 text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Fale com a <span className="text-primary">Calhas Barigui</span>
          </h2>
          <p className="text-dark-400 font-body text-base max-w-lg mx-auto leading-relaxed">
            Estamos prontos para atender você. Entre em contato e solicite seu orçamento sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-dark-50 border border-dark-100 hover:border-primary/30 transition-colors group">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-dark-400 font-body text-xs mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="font-heading font-semibold text-dark-900 text-sm hover:text-primary transition-colors break-all">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-heading font-semibold text-dark-900 text-sm leading-snug">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-primary text-dark-900 font-heading font-bold px-6 py-4 rounded-2xl hover:bg-primary-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 w-full"
            >
              <MessageCircle size={20} />
              Conversar no WhatsApp
            </a>

            <div className="rounded-2xl overflow-hidden border border-dark-100 h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7206.482426615203!2d-49.329033!3d-25.430198000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce32b03683117%3A0xf7eb7426c63f6ce0!2sCalhas%20Barigui!5e0!3m2!1spt-BR!2sus!4v1774569303565!5m2!1spt-BR!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Calhas Barigui"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-dark-50 rounded-3xl p-8 border border-dark-100">
              <h3 className="font-heading font-bold text-dark-900 text-xl mb-6">Enviar Mensagem</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-dark-500 font-body text-xs font-medium mb-1.5">Nome *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                    className="w-full bg-white border border-dark-100 rounded-xl px-4 py-3 text-sm font-body text-dark-900 placeholder-dark-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-dark-500 font-body text-xs font-medium mb-1.5">WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(41) 9xxxx-xxxx"
                    className="w-full bg-white border border-dark-100 rounded-xl px-4 py-3 text-sm font-body text-dark-900 placeholder-dark-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-dark-500 font-body text-xs font-medium mb-1.5">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full bg-white border border-dark-100 rounded-xl px-4 py-3 text-sm font-body text-dark-900 placeholder-dark-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-dark-500 font-body text-xs font-medium mb-1.5">Assunto</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Assunto da mensagem"
                    className="w-full bg-white border border-dark-100 rounded-xl px-4 py-3 text-sm font-body text-dark-900 placeholder-dark-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-dark-500 font-body text-xs font-medium mb-1.5">Mensagem *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Descreva sua necessidade..."
                  className="w-full bg-white border border-dark-100 rounded-xl px-4 py-3 text-sm font-body text-dark-900 placeholder-dark-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-dark-900 font-heading font-bold px-6 py-4 rounded-xl hover:bg-primary-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
              >
                <Send size={16} />
                Enviar via WhatsApp
              </button>
              <p className="text-dark-400 font-body text-xs text-center mt-3">
                Ao enviar, você será redirecionado para o WhatsApp
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
