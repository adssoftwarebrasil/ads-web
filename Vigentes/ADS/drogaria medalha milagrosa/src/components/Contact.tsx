import { useState, useEffect, useRef, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefone / WhatsApp',
    value: '(64) 9 9310-4410',
    sub: 'Fixo: (64) 3491-1549',
    href: 'tel:+556493104410',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'fiscalmedalha@gmail.com',
    sub: 'Respondemos em breve',
    href: 'mailto:fiscalmedalha@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'Pc. Liberdade, 33 – S Central',
    sub: 'Ipameri – GO, 75780-000',
    href: 'https://maps.google.com/?q=Drogaria+Medalha+Milagrosa+Ipameri',
  },
  {
    icon: Clock,
    label: 'Horário de Atendimento',
    value: 'Seg a Dom: 7h às 22h',
    sub: 'Plantão 24h na farmácia',
    href: null,
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-left, .reveal-right, .reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    const text = `Olá! Meu nome é ${form.name}.${form.phone ? ` Meu telefone é ${form.phone}.` : ''} ${form.message}`;
    const url = `https://wa.me/556493104410?text=${encodeURIComponent(text)}`;
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setSending(false);
      setForm({ name: '', phone: '', message: '' });
    }, 500);
  };

  return (
    <section id="contato" className="section-padding bg-brand-white" ref={sectionRef}>
      <div className="container-max">
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            Fale conosco
          </span>
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle text-center mx-auto">
            Estamos prontos para te atender. Escolha a melhor forma de entrar em contato.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: info + map */}
          <div className="reveal-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                const inner = (
                  <div className="flex items-start gap-3 bg-gray-50 hover:bg-brand-blue/5 border border-gray-100 rounded-2xl p-4 transition-colors duration-200 h-full">
                    <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs font-medium mb-0.5">{info.label}</p>
                      <p className="text-gray-800 font-semibold text-sm leading-snug">{info.value}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{info.sub}</p>
                    </div>
                  </div>
                );
                return info.href ? (
                  <a key={i} href={info.href} target="_blank" rel="noopener noreferrer" className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={i}>{inner}</div>
                );
              })}
            </div>

            {/* Map */}
            <div className="map-container rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-64 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.485793547672!2d-48.16600492482743!3d-17.721735083223603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a7bd7f71430e9b%3A0x7b25ea639692df26!2sDrogaria%20Medalha%20Milagrosa%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1776850358877!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Farmácia Medalha Milagrosa"
              />
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal-right">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
              <h3 className="text-xl font-bold text-brand-blue mb-2">Envie uma mensagem</h3>
              <p className="text-gray-500 text-sm mb-7">
                Preencha o formulário abaixo e você será redirecionado ao nosso WhatsApp com a mensagem pronta.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="name">
                    Seu nome <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Como podemos te chamar?"
                    className="w-full border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="phone">
                    Telefone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(64) 9 0000-0000"
                    className="w-full border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="message">
                    Mensagem <span className="text-brand-red">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Descreva o que você precisa..."
                    className="w-full border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2.5 bg-brand-red hover:bg-brand-red-dark disabled:opacity-70 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Redirecionando...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Enviar pelo WhatsApp
                    </>
                  )}
                </button>

                <p className="text-center text-gray-400 text-xs">
                  Você será redirecionado ao WhatsApp com a mensagem pré-preenchida.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
