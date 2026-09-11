import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Instagram } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const SERVICES_OPTIONS = [
  'Rebobinagem de Transformador',
  'Manutenção Preventiva',
  'Reparação de Motor Elétrico',
  'Locação de Guindaste',
  'Diagnóstico Técnico',
  'Instalação Elétrica',
  'Outro Serviço',
];

const CONTACT_INFO = [
  {
    icon: Phone,
    label: 'Telefone / WhatsApp',
    value: '(65) 99624-8334',
    href: 'tel:+5565996248334',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'gulgielmintransformadores@gmail.com',
    href: 'mailto:gulgielmintransformadores@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'R. dos Narcisos, 1655 - Bandeirantes, Lucas do Rio Verde — MT',
    href: 'https://maps.google.com/?q=GULGIELMIN+TRANSFORMADORES',
  },
  {
    icon: Clock,
    label: 'Horário de Funcionamento',
    value: 'Segunda a Sexta: 7h às 18h',
    href: null,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@gulgielmintransformadores',
    href: 'https://www.instagram.com/gulgielmintransformadores/',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(
      '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right'
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `*Novo contato pelo site!*`,
      ``,
      `*Nome:* ${formData.name}`,
      `*Telefone:* ${formData.phone}`,
      formData.email ? `*E-mail:* ${formData.email}` : null,
      formData.service ? `*Serviço de interesse:* ${formData.service}` : null,
      formData.message ? `*Mensagem:* ${formData.message}` : null,
    ]
      .filter(Boolean)
      .join('%0A');

    const url = `https://wa.me/5565996248334?text=${lines}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const inputClass =
    'w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:border-brand-yellow-4 focus:ring-2 focus:ring-brand-yellow/20 transition-all';

  return (
    <section id="contato" className="py-20 lg:py-28 bg-brand-dark" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-brand-yellow text-xs font-semibold tracking-widest uppercase block mb-3">
            Fale conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Solicite Seu{' '}
            <span className="text-brand-yellow">Orçamento Grátis</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          <div className="lg:col-span-2 animate-on-scroll-left">
            <div className="space-y-5 mb-8">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={18} className="text-brand-yellow" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-medium uppercase tracking-wide mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-white text-sm font-medium hover:text-brand-yellow transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.75692443633!2d-55.93204022492212!3d-13.051138487271533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a0f22eb870048d%3A0x6f09122f65c6e579!2sGULGIELMIN%20TRANSFORMADORES!5e0!3m2!1spt-PT!2sbr!4v1774548668233!5m2!1spt-PT!2sbr"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Gulgielmin Transformadores"
              />
            </div>
          </div>

          <div className="lg:col-span-3 animate-on-scroll-right">
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white/70 text-xs font-semibold uppercase tracking-wide mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-xs font-semibold uppercase tracking-wide mb-2">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(65) 99999-9999"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-xs font-semibold uppercase tracking-wide mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-white/70 text-xs font-semibold uppercase tracking-wide mb-2">
                  Serviço de Interesse
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Selecione um serviço</option>
                  {SERVICES_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white/70 text-xs font-semibold uppercase tracking-wide mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Descreva sua necessidade..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full gradient-yellow text-brand-dark font-bold text-base py-4 rounded-xl hover:opacity-90 transition-all hover:scale-[1.01] flex items-center justify-center gap-3 shadow-lg shadow-brand-yellow/20"
              >
                <Send size={18} />
                Enviar pelo WhatsApp
              </button>

              <p className="text-white/30 text-xs text-center">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pré-preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
