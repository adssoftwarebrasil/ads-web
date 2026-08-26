import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá, me chamo *${form.name}*.\nTelefone: ${form.phone}\nMensagem: ${form.message}`
    );
    window.open(`https://wa.me/5591981493608?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-[rgb(2,12,4)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[rgb(156,133,92)] text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Estamos{' '}
            <span className="text-[rgb(202,183,144)]">Sempre Aqui para Você</span>
          </h2>
          <p className="text-[rgb(146,171,185)] max-w-xl mx-auto text-base leading-relaxed">
            Nos momentos difíceis, não enfrente sozinho. Entre em contato com nossa equipe e receba
            o suporte que você precisa com agilidade e acolhimento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <div className="space-y-5">
              {[
                {
                  icon: <Phone size={20} />,
                  label: 'Telefone / WhatsApp',
                  value: '(91) 98149-3608',
                  href: 'tel:+559181493608',
                },
                {
                  icon: <Mail size={20} />,
                  label: 'E-mail',
                  value: 'portaldapaz@gmail.com',
                  href: 'mailto:portaldapaz@gmail.com',
                },
                {
                  icon: <MapPin size={20} />,
                  label: 'Endereço',
                  value: 'Rua Primeira, Q. 35, nº 02 — Centro, Ananindeua - PA, 67000-000',
                  href: 'https://maps.app.goo.gl/portal-da-paz',
                },
                {
                  icon: <Clock size={20} />,
                  label: 'Atendimento',
                  value: '24 horas por dia, 7 dias por semana',
                  href: null,
                },
                {
                  icon: <Instagram size={20} />,
                  label: 'Instagram',
                  value: '@funeraria.portaldapaz',
                  href: 'https://www.instagram.com/funeraria.portaldapaz',
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[rgb(55,104,68)] bg-opacity-30 flex items-center justify-center text-[rgb(156,133,92)] shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[rgb(146,171,185)] text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-white text-sm hover:text-[rgb(202,183,144)] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden border border-[rgb(55,104,68)] border-opacity-30 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.438119874431!2d-48.36876227735725!3d-1.3554907303022956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3112aeaafdf5%3A0xf20dcb8e64d5dd2d!2sPortal%20da%20Paz!5e0!3m2!1spt-BR!2sbr!4v1774983545501!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(40%) invert(90%) hue-rotate(160deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Funerária Portal da Paz"
              />
            </div>
          </div>

          <div className="bg-[rgb(23,56,32)] bg-opacity-25 border border-[rgb(55,104,68)] border-opacity-30 rounded-2xl p-8">
            <h3 className="text-white text-xl font-semibold mb-2">Envie sua mensagem</h3>
            <p className="text-[rgb(146,171,185)] text-sm mb-8">
              Preencha o formulário e seu atendente receberá a mensagem diretamente pelo WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-[rgb(146,171,185)] text-xs uppercase tracking-wider mb-2">
                  Seu nome *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ex: Maria Silva"
                  className="w-full bg-[rgb(2,12,4)] border border-[rgb(55,104,68)] border-opacity-50 rounded-xl px-4 py-3 text-white placeholder-[rgb(98,108,73)] text-sm focus:outline-none focus:border-[rgb(156,133,92)] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[rgb(146,171,185)] text-xs uppercase tracking-wider mb-2">
                  Telefone para contato *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Ex: (91) 99999-9999"
                  className="w-full bg-[rgb(2,12,4)] border border-[rgb(55,104,68)] border-opacity-50 rounded-xl px-4 py-3 text-white placeholder-[rgb(98,108,73)] text-sm focus:outline-none focus:border-[rgb(156,133,92)] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[rgb(146,171,185)] text-xs uppercase tracking-wider mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Descreva sua necessidade..."
                  className="w-full bg-[rgb(2,12,4)] border border-[rgb(55,104,68)] border-opacity-50 rounded-xl px-4 py-3 text-white placeholder-[rgb(98,108,73)] text-sm focus:outline-none focus:border-[rgb(156,133,92)] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[rgb(55,104,68)] hover:bg-[rgb(23,56,32)] text-white font-semibold py-4 rounded-xl text-base transition-all duration-300 shadow-lg hover:shadow-xl border border-[rgb(55,104,68)] hover:border-[rgb(156,133,92)]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
