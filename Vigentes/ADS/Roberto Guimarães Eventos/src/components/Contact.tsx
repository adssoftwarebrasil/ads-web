import { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const eventTypes = [
  'Casamento',
  'Festa de 15 Anos',
  'Formatura',
  'Show Nacional',
  'Evento Corporativo',
  'Dia de Campo',
  'Feira / Exposição',
  'Outro',
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    city: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Vim pelo site e gostaria de solicitar um orçamento.\n\n` +
        `*Nome:* ${form.name}\n` +
        `*Telefone:* ${form.phone}\n` +
        `*E-mail:* ${form.email}\n` +
        `*Tipo de Evento:* ${form.eventType}\n` +
        `*Cidade:* ${form.city}\n` +
        `*Mensagem:* ${form.message}`
    );
    window.open(`https://wa.me/556699022313?text=${text}`, '_blank');
  };

  return (
    // 1. Trava absoluta de largura adicionada aqui
    <section id="contato" className="py-24 bg-[rgb(3,7,8)] w-full max-w-[100vw] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#C9962F] text-xs font-bold tracking-widest uppercase mb-3 block">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[rgb(245,244,249)] mb-4">
            Vamos Planejar{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9962F] to-[#F0C060]">
              Seu Evento?
            </span>
          </h2>
          <p className="text-[rgb(245,244,249)]/60 max-w-xl mx-auto text-base">
            Preencha o formulário e entraremos em contato via WhatsApp para montar o orçamento ideal para você.
          </p>
        </div>

        {/* 2. Removido o w-full solto para não conflitar com as colunas do grid no mobile */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[rgb(245,244,249)]/70 text-xs font-semibold uppercase tracking-wide mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full px-4 py-3.5 bg-[rgb(39,41,45)] border border-white/10 focus:border-[#C9962F]/60 rounded-xl text-[rgb(245,244,249)] placeholder-[rgb(245,244,249)]/30 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[rgb(245,244,249)]/70 text-xs font-semibold uppercase tracking-wide mb-2">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(66) 9 9999-9999"
                    className="w-full px-4 py-3.5 bg-[rgb(39,41,45)] border border-white/10 focus:border-[#C9962F]/60 rounded-xl text-[rgb(245,244,249)] placeholder-[rgb(245,244,249)]/30 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[rgb(245,244,249)]/70 text-xs font-semibold uppercase tracking-wide mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3.5 bg-[rgb(39,41,45)] border border-white/10 focus:border-[#C9962F]/60 rounded-xl text-[rgb(245,244,249)] placeholder-[rgb(245,244,249)]/30 text-sm outline-none transition-colors"
                  />
                </div>
                <div className="w-full overflow-hidden">
                  <label className="block text-[rgb(245,244,249)]/70 text-xs font-semibold uppercase tracking-wide mb-2">
                    Tipo de Evento *
                  </label>
                  {/* 3. truncate adicionado ao select para mobile */}
                  <select
                    name="eventType"
                    required
                    value={form.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-[rgb(39,41,45)] border border-white/10 focus:border-[#C9962F]/60 rounded-xl text-[rgb(245,244,249)] text-sm outline-none transition-colors appearance-none truncate"
                  >
                    <option value="" disabled className="text-[rgb(245,244,249)]/40">
                      Selecione...
                    </option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t} className="bg-[rgb(39,41,45)]">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[rgb(245,244,249)]/70 text-xs font-semibold uppercase tracking-wide mb-2">
                  Cidade do Evento
                </label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Ex: Sorriso - MT"
                  className="w-full px-4 py-3.5 bg-[rgb(39,41,45)] border border-white/10 focus:border-[#C9962F]/60 rounded-xl text-[rgb(245,244,249)] placeholder-[rgb(245,244,249)]/30 text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[rgb(245,244,249)]/70 text-xs font-semibold uppercase tracking-wide mb-2">
                  Mensagem / Detalhes do Evento
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Descreva seu evento, data prevista, quantidade de pessoas e serviços desejados..."
                  className="w-full px-4 py-3.5 bg-[rgb(39,41,45)] border border-white/10 focus:border-[#C9962F]/60 rounded-xl text-[rgb(245,244,249)] placeholder-[rgb(245,244,249)]/30 text-sm outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-8 py-4 bg-[#C9962F] hover:bg-[#b8841f] text-[rgb(3,7,8)] font-black text-sm sm:text-base rounded-xl transition-all duration-200 uppercase tracking-wider shadow-xl hover:shadow-[#C9962F]/30 hover:scale-[1.02] text-center"
              >
                <Send size={18} className="shrink-0" />
                <span className="truncate">Solicitar Orçamento</span>
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-[rgb(39,41,45)] border border-white/5 space-y-5 overflow-hidden">
              {[
                {
                  icon: Phone,
                  label: 'Telefones',
                  lines: ['(66) 9 9902-2313', '(66) 9 9978-1716'],
                  href: 'tel:+5566999022313',
                },
                {
                  icon: Mail,
                  label: 'E-mail Comercial',
                  lines: ['comercial@robertoguimaraeseventos.com.br'],
                  href: 'mailto:comercial@robertoguimaraeseventos.com.br',
                },
                {
                  icon: MapPin,
                  label: 'Endereço',
                  lines: ['Av. Adolino Bedin, 799', 'Jardim das Américas, Sorriso - MT'],
                  href: 'https://maps.google.com/?q=Roberto+Guimarães+Eventos+Sorriso',
                },
              ].map(({ icon: Icon, label, lines, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 sm:gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C9962F]/15 flex items-center justify-center shrink-0 group-hover:bg-[#C9962F]/25 transition-colors">
                    <Icon size={18} className="text-[#C9962F]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[rgb(245,244,249)]/50 text-xs uppercase tracking-wide font-semibold mb-0.5">
                      {label}
                    </div>
                    {lines.map((line) => (
                      // 4. break-all obriga qualquer e-mail grande a quebrar de linha na marra no mobile
                      <div key={line} className="text-[rgb(245,244,249)] text-sm font-medium break-all sm:break-normal">
                        {line}
                      </div>
                    ))}
                  </div>
                </a>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.3787849132623!2d-55.729150124930484!3d-12.55725668772133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a0b3a5d7a2b75f%3A0xab6f62adddeb844!2sRoberto%20Guimar%C3%A3es%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1774462322130!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Roberto Guimarães Eventos"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}