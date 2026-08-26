import { useState, useRef, useEffect, FormEvent } from 'react';
import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Endereço',
    lines: ['Rod. BR-316, km 05 - Águas Lindas', 'Ananindeua - PA, 67000-000', 'Anexo ao Posto UBN'],
  },
  {
    icon: Clock,
    title: 'Horário de Atendimento',
    lines: ['Segunda a Sexta-feira', '08:00 às 12:00 e 14:00 às 18:00'],
  },
  {
    icon: Phone,
    title: 'Telefone / WhatsApp',
    lines: ['(91) 9 8269-6336'],
    link: 'http://wa.me/559182696336',
  },
  {
    icon: Mail,
    title: 'E-mail',
    lines: ['jrpnetto@gmail.com'],
    link: 'mailto:jrpnetto@gmail.com',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [
      { el: leftRef.current, cls: 'observe-animate-left' },
      { el: rightRef.current, cls: 'observe-animate-right' },
    ];
    elements.forEach(({ el, cls }) => {
      if (!el) return;
      el.classList.add(cls);
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('visible');
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    });
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Vim pelo site da RPN Mecânica.\n\n` +
      `*Nome:* ${form.name}\n` +
      `*Telefone:* ${form.phone}\n` +
      `*Serviço:* ${form.service || 'Não especificado'}\n` +
      `*Mensagem:* ${form.message || 'Gostaria de agendar um serviço.'}`
    );
    window.open(`http://wa.me/559182696336?text=${text}`, '_blank');
  };

  const inputClass =
    'w-full bg-gray-50 border border-rpn-light text-gray-900 placeholder-rpn-muted text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-rpn-red focus:ring-2 focus:ring-rpn-red/20 transition-all duration-200';

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 observe-animate">
          <span className="section-tag">Fale conosco</span>
          <h2 className="section-title mb-4">
            Agende seu serviço<br />sem complicação
          </h2>
          <p className="section-subtitle">
            Preencha o formulário abaixo e entraremos em contato pelo WhatsApp para confirmar o agendamento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div ref={leftRef}>
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-rpn-light shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Solicite um Orçamento</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Nome completo *</label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    className={inputClass}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Telefone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(91) 9 0000-0000"
                    className={inputClass}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Serviço desejado</label>
                <select
                  className={inputClass}
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  <option value="">Selecione um serviço</option>
                  <option>Suspensão</option>
                  <option>Motor</option>
                  <option>Câmbio</option>
                  <option>Elétrica</option>
                  <option>Refrigeração / Ar-condicionado</option>
                  <option>Revisão completa</option>
                  <option>Outro</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Mensagem</label>
                <textarea
                  rows={4}
                  placeholder="Descreva o problema ou o que precisa..."
                  className={`${inputClass} resize-none`}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary justify-center py-4 text-base shadow-lg shadow-rpn-red/25"
              >
                <Send size={18} />
                Enviar via WhatsApp
              </button>

              <p className="text-center text-rpn-muted text-xs mt-3">
                Ao enviar, você será redirecionado para o WhatsApp com a mensagem pré-preenchida.
              </p>
            </form>
          </div>

          <div ref={rightRef} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map(({ icon: Icon, title, lines, link }) => (
                <div
                  key={title}
                  className="bg-gray-50 border border-rpn-light rounded-2xl p-5 hover:border-rpn-red/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-rpn-red/10 rounded-xl flex items-center justify-center mb-3">
                    <Icon size={18} className="text-rpn-red" />
                  </div>
                  <div className="font-semibold text-gray-900 text-sm mb-1">{title}</div>
                  {link ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rpn-gray text-sm hover:text-rpn-red transition-colors"
                    >
                      {lines.map((l, i) => <div key={i}>{l}</div>)}
                    </a>
                  ) : (
                    lines.map((l, i) => (
                      <div key={i} className="text-rpn-gray text-sm">{l}</div>
                    ))
                  )}
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden border border-rpn-light shadow-sm flex-grow min-h-[260px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.655139371382!2d-48.40530762503418!3d-1.3835512986033764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48ab5c444efe1%3A0x802869d9ee78cf57!2sAuto%20Vip%20Car!5e0!3m2!1spt-BR!2sbr!4v1774882482602!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '260px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização RPN Mecânica Automotiva"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
