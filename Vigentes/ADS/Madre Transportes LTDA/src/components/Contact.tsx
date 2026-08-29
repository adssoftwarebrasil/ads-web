import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const contactInfo = [
  {
    icon: <Phone size={20} />,
    label: 'Telefone',
    value: '(19) 3336-0006',
    href: 'tel:1933360006',
  },
  {
    icon: <Mail size={20} />,
    label: 'E-mail',
    value: 'comercial@madretransportes.com.br',
    href: 'mailto:comercial@madretransportes.com.br',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Endereço',
    value: 'R. Dr. José Antonio Levy, 262 — Cordeirópolis, SP',
    href: 'https://maps.google.com/?q=MADRE+TRANSPORTES',
  },
  {
    icon: <Clock size={20} />,
    label: 'Horário',
    value: 'Seg–Sex: 8h–12h / 13h30–18h | Sáb: 8h–12h',
    href: null,
  },
];

interface FormState {
  name: string;
  company: string;
  phone: string;
  email: string;
  origin: string;
  destination: string;
  cargo: string;
}

const initialForm: FormState = {
  name: '',
  company: '',
  phone: '',
  email: '',
  origin: '',
  destination: '',
  cargo: '',
};

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormState>(initialForm);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const el = sectionRef.current;
    if (el) {
      el.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right')
        .forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Olá! Gostaria de solicitar uma cotação de frete.`,
      ``,
      `*Dados de Contato:*`,
      `• Nome: ${form.name}`,
      form.company ? `• Empresa: ${form.company}` : '',
      `• Telefone: ${form.phone}`,
      form.email ? `• E-mail: ${form.email}` : '',
      ``,
      `*Detalhes do Frete:*`,
      form.origin ? `• Origem: ${form.origin}` : '',
      form.destination ? `• Destino: ${form.destination}` : '',
      form.cargo ? `• Mercadoria: ${form.cargo}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    const encoded = encodeURIComponent(lines);
    window.open(`https://wa.me/5519981211908?text=${encoded}`, '_blank');
  };

  const inputClass =
    'w-full bg-gray-50 border border-gray-200 focus:border-brand-blue focus:bg-white text-gray-900 rounded-xl px-4 py-3 text-sm placeholder-gray-400 transition-all duration-200 outline-none focus:ring-2 focus:ring-brand-blue/15';

  return (
    <section id="contato" className="py-20 md:py-28 bg-gray-50 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 animate-on-scroll">
          <span className="inline-block text-brand-blue font-semibold text-sm uppercase tracking-widest mb-3">
            Fale Conosco
          </span>
          <h2 className="section-title mb-4">
            Solicite sua{' '}
            <span className="text-brand-blue">cotação agora</span>
          </h2>
          <p className="section-subtitle">
            Preencha o formulário abaixo e nossa equipe entrará em contato via WhatsApp
            com a melhor proposta para seu frete.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 xl:gap-14">
          <div className="lg:col-span-2 animate-on-scroll-left space-y-5">
            {contactInfo.map((info, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-brand-blue flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-brand-blue/20">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-0.5">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-800 font-semibold text-sm hover:text-brand-blue transition-colors break-words"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-800 font-semibold text-sm">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">
                Prefere falar diretamente?
              </p>
              <a
                href="https://wa.me/5519981211908"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebc59] text-white font-bold px-5 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:scale-105 text-sm"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.522 5.857L.057 23.882a.75.75 0 0 0 .919.919l6.04-1.464A11.938 11.938 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 0 1-5.023-1.381l-.36-.215-3.733.905.93-3.638-.236-.374A9.818 9.818 0 1 1 12 21.818z" />
                </svg>
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 animate-on-scroll-right">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-7 md:p-8 shadow-lg border border-gray-100"
            >
              <h3 className="font-bold text-gray-900 text-lg mb-6">
                Solicitar Cotação de Frete
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="João Silva"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Nome da empresa"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="(19) 99999-9999"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                    Origem (Cidade/Estado)
                  </label>
                  <input
                    type="text"
                    name="origin"
                    value={form.origin}
                    onChange={handleChange}
                    placeholder="Ex: Cordeirópolis — SP"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                    Destino (Cidade/Estado)
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={form.destination}
                    onChange={handleChange}
                    placeholder="Ex: São Paulo — SP"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                  Tipo de Mercadoria / Observações
                </label>
                <textarea
                  name="cargo"
                  value={form.cargo}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Ex: Pisos cerâmicos, 20 toneladas, palete..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-blue hover:bg-brand-blue-light text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-brand-blue/25 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                Enviar Cotação via WhatsApp
                <ArrowRight size={18} />
              </button>

              <p className="text-center text-xs text-gray-400 mt-3">
                Você será redirecionado ao WhatsApp com sua mensagem pronta
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
