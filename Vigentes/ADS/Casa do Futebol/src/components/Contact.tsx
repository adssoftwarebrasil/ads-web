import { useState } from 'react';
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

const INFO = [
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'R. Califórnia, 221 - Jardim California, Cuiabá - MT',
    href: 'https://maps.app.goo.gl/yqf5NELjE9gC7u1E7',
  },
  {
    icon: Clock,
    label: 'Horário',
    value: 'Segunda a Sábado: 8h00 às 20h30',
    href: null,
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '(65) 9 8117-2880',
    href: 'http://wa.me/556581172880',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@escolinhacasadofutebol',
    href: 'https://www.instagram.com/escolinhacasadofutebol/',
  },
];

const SERVICE_OPTIONS = [
  'Escola de Futebol',
  'Grama Sintética Decorativa',
  'Grama Sintética Esportiva',
  'Locação de Campo',
  'Complexo Esportivo / Playground',
  'Outro',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é *${form.name}*.%0A📞 Telefone: *${form.phone}*%0A🏷️ Serviço: *${form.service}*%0A💬 ${form.message || 'Gostaria de mais informações.'}`;
    window.open(`http://wa.me/556581172880?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#363434]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#236E45]/20 border border-[#236E45]/30 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-[#236E45] rounded-full" />
            <span className="text-[#236E45] text-sm font-semibold tracking-wide uppercase">Contato</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Vamos conversar{' '}
            <span className="text-white">agora mesmo</span>
          </h2>
          <p className="text-[#C8CAC9] text-lg max-w-xl mx-auto mt-4">
            Preencha o formulário abaixo e nossa equipe entrará em contato pelo WhatsApp para fornecer todas
            as informações sobre matrículas, horários, turmas e aulas experimentais.
          </p>
          <p className="text-[#C8CAC9] text-lg max-w-xl mx-auto mt-4">
            Estamos prontos para receber você e sua família na Casa do Futebol!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#C8CAC9] text-sm font-medium mb-1.5">
                  Seu nome <span className="text-[#236E45]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ex: João Silva"
                  className="w-full bg-white/8 border border-white/15 text-white placeholder-white/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#236E45] focus:bg-white/12 transition-all duration-200 text-sm"
                />
              </div>
              <div>
                <label className="block text-[#C8CAC9] text-sm font-medium mb-1.5">
                  Telefone / WhatsApp <span className="text-[#236E45]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(65) 9 0000-0000"
                  className="w-full bg-white/8 border border-white/15 text-white placeholder-white/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#236E45] focus:bg-white/12 transition-all duration-200 text-sm"
                />
              </div>
              <div>
                <label className="block text-[#C8CAC9] text-sm font-medium mb-1.5">
                  Serviço de interesse <span className="text-[#236E45]">*</span>
                </label>
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-[#363434] border border-white/15 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#236E45] transition-all duration-200 text-sm appearance-none"
                >
                  <option value="" className="bg-[#363434]">Selecione um serviço</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s} className="bg-[#363434]">{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[#C8CAC9] text-sm font-medium mb-1.5">Mensagem (opcional)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Conte um pouco mais sobre o que você precisa..."
                  className="w-full bg-white/8 border border-white/15 text-white placeholder-white/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#236E45] focus:bg-white/12 transition-all duration-200 text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#236E45] hover:bg-[#2C4D39] text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#236E45]/30 text-base"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {INFO.map((item) => (
                <div
                  key={item.label}
                  className="bg-white/6 border border-white/10 rounded-xl p-4 flex items-start gap-3 hover:border-[#236E45]/40 transition-all duration-200"
                >
                  <div className="w-9 h-9 bg-[#236E45]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="text-[#236E45]" size={17} />
                  </div>
                  <div>
                    <div className="text-[#C8CAC9]/70 text-xs font-medium uppercase tracking-wide mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-sm font-medium hover:text-[#236E45] transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white text-sm font-medium">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.9234187483526!2d-56.07146184478022!3d-15.625850660395958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939dae2d45b10493%3A0x1e23f92fba33232d!2sCasa%20do%20Futebol!5e0!3m2!1spt-BR!2sbr!4v1774554598238!5m2!1spt-BR!2sbr"
                width="100%"
                height="280"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Casa do Futebol"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
