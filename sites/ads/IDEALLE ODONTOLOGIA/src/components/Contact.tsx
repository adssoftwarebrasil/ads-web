import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Send } from 'lucide-react';

const services = [
  'Implante dentário',
  'Clareamento dental',
  'Facetas em resina',
  'Aparelho ortodôntico',
  'Prótese dentária',
  'Canal (endodontia)',
  'Estética dental',
  'Limpeza e prevenção',
  'Outro',
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    el.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right').forEach((c) =>
      observer.observe(c)
    );
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Vim pelo site da Idealle Odontologia.\n\n` +
      `*Nome:* ${form.name}\n` +
      `*Telefone:* ${form.phone}\n` +
      `*Serviço de interesse:* ${form.service || 'Não informado'}\n` +
      (form.message ? `*Mensagem:* ${form.message}\n` : '') +
      `\nGostaria de agendar uma consulta. 😊`
    );
    window.open(`https://wa.me/556696621999?text=${text}`, '_blank');
  };

  const inputClass =
    'w-full bg-[#faf7f4] border border-[rgba(146,114,84,0.2)] rounded-xl px-4 py-3 text-sm text-[#2a2016] placeholder-[rgba(131,123,109,0.5)] focus:outline-none focus:border-[rgb(146,114,84)] focus:ring-2 focus:ring-[rgba(146,114,84,0.12)] transition-all duration-200';

  return (
    <section id="contato" ref={sectionRef} className="py-20 lg:py-28 bg-[#faf7f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[rgb(146,114,84)] mb-3">
            Fale Conosco
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2a2016] mb-4">
            Agende sua <span className="text-[rgb(146,114,84)]">consulta gratuita</span>
          </h2>
          <p className="text-[rgba(131,123,109,0.996)] text-base sm:text-lg max-w-xl mx-auto">
            Preencha o formulário e entraremos em contato via WhatsApp para confirmar seu horário.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-2 animate-on-scroll-left space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[rgba(146,114,84,0.1)] shadow-sm">
              <h3 className="font-serif text-lg font-bold text-[#2a2016] mb-5">Informações de contato</h3>

              <div className="space-y-4">
                <a
                  href="https://wa.me/556696621999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[rgba(146,114,84,0.1)] group-hover:bg-[rgb(146,114,84)] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Phone size={16} className="text-[rgb(146,114,84)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-xs text-[rgba(131,123,109,0.996)] mb-0.5">WhatsApp / Telefone</div>
                    <div className="text-sm font-semibold text-[#2a2016]">(66) 9 9662-1999</div>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[rgba(146,114,84,0.1)] flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-[rgb(146,114,84)]" />
                  </div>
                  <div>
                    <div className="text-xs text-[rgba(131,123,109,0.996)] mb-0.5">Endereço</div>
                    <div className="text-sm font-semibold text-[#2a2016] leading-snug">
                      R. Barão do Rio Branco, 4104<br />
                      Jardim Monte Libano, Rondonópolis - MT
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[rgba(146,114,84,0.1)] flex items-center justify-center flex-shrink-0">
                    <Clock size={16} className="text-[rgb(146,114,84)]" />
                  </div>
                  <div>
                    <div className="text-xs text-[rgba(131,123,109,0.996)] mb-0.5">Horários</div>
                    <div className="text-sm font-semibold text-[#2a2016] leading-snug">
                      Seg–Sex: 08h–11h e 13h–18h<br />
                      Sábado: 08h–11h
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6 pt-5 border-t border-[rgba(146,114,84,0.1)]">
                <a
                  href="https://www.instagram.com/idealleodontologia_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[rgba(146,114,84,0.1)] hover:bg-[rgb(146,114,84)] flex items-center justify-center text-[rgb(146,114,84)] hover:text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://www.facebook.com/idealleodontologia1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[rgba(146,114,84,0.1)] hover:bg-[rgb(146,114,84)] flex items-center justify-center text-[rgb(146,114,84)] hover:text-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm border border-[rgba(146,114,84,0.1)] h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.59154418173!2d-54.6542761248561!3d-16.445558084289733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9379c9003d330d67%3A0x58d666e90a9ec25!2sIdealle%20Odontologia!5e0!3m2!1spt-BR!2sbr!4v1775151240355!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Idealle Odontologia"
              />
            </div>
          </div>

          <div className="lg:col-span-3 animate-on-scroll-right">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[rgba(146,114,84,0.1)] shadow-sm">
              <h3 className="font-serif text-lg font-bold text-[#2a2016] mb-6">
                Solicite seu agendamento
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[rgba(131,123,109,0.996)] mb-1.5 uppercase tracking-wide">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[rgba(131,123,109,0.996)] mb-1.5 uppercase tracking-wide">
                      WhatsApp / Telefone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(66) 9 9999-9999"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[rgba(131,123,109,0.996)] mb-1.5 uppercase tracking-wide">
                    Serviço de interesse
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={inputClass}
                  >
                    <option value="">Selecione um serviço...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[rgba(131,123,109,0.996)] mb-1.5 uppercase tracking-wide">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    placeholder="Conte um pouco sobre o que você precisa ou quando quer ser atendido..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 bg-[rgb(146,114,84)] hover:bg-[rgb(138,117,90)] text-white font-semibold text-sm py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(146,114,84,0.3)] hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Enviar via WhatsApp
                  <Send size={14} />
                </button>

                <p className="text-center text-xs text-[rgba(131,123,109,0.7)]">
                  Ao enviar, você será redirecionado ao WhatsApp com suas informações preenchidas.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
