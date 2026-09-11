import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, Agro MT Drones! Me chamo *${form.name}* e gostaria de um atendimento.\n\n📱 Telefone: ${form.phone}\n🔧 Serviço: ${form.service}\n💬 Mensagem: ${form.message}`;
    window.open(`https://wa.me/556599004844?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-brand-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-primary font-bold text-sm tracking-widest uppercase mb-3">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
            Entre em Contato e{' '}
            <span className="text-brand-primary">Solicite um Orçamento</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Nossa equipe está pronta para atender você de segunda a sábado, das 7h às 18h.
            Responderemos o mais rápido possível!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {[
              {
                icon: MapPin,
                title: 'Endereço',
                content: 'Av. São Paulo, 700 – Distrito Industrial\nPrimavera do Leste – MT, 78850-000',
              },
              {
                icon: Phone,
                title: 'WhatsApp',
                content: '(65) 9 9900-4844',
                href: 'http://wa.me/556599004844',
              },
              {
                icon: Mail,
                title: 'E-mail',
                content: 'agromtdronespva@gmail.com',
                href: 'mailto:agromtdronespva@gmail.com',
              },
              {
                icon: Clock,
                title: 'Horário de Atendimento',
                content: 'Segunda a Sábado: 07h00 – 18h00',
              },
              {
                icon: Instagram,
                title: 'Instagram',
                content: '@agromtdronespva',
                href: 'https://www.instagram.com/agromtdronespva/',
              },
            ].map(({ icon: Icon, title, content, href }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-brand-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">{title}</div>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-dark font-semibold text-sm hover:text-brand-primary transition-colors whitespace-pre-line"
                    >
                      {content}
                    </a>
                  ) : (
                    <p className="text-brand-dark font-semibold text-sm whitespace-pre-line">{content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-lg border border-brand-light p-8">
            <h3 className="text-lg font-extrabold text-brand-dark mb-6">Envie sua mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Seu nome *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="João da Silva"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">WhatsApp *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(65) 9 0000-0000"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Serviço desejado</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition bg-white"
                >
                  <option value="">Selecione uma opção...</option>
                  <option>Compra de drone agrícola</option>
                  <option>Manutenção / conserto de drone</option>
                  <option>Prestação de serviços com drone</option>
                  <option>Venda de geradores</option>
                  <option>Venda de misturador</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Mensagem</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Descreva sua necessidade ou dúvida..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-accent hover:bg-brand-primary text-white font-bold py-4 rounded-xl text-sm transition-all duration-200 shadow-md hover:shadow-brand-accent/30 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-lg border border-brand-light h-72 sm:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.385183815927!2d-54.31639252487445!3d-15.571055785038553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93772500001426d5%3A0xe5859f808bcfd4f9!2sAgro%20MT%20Drones%20-%20PVA!5e0!3m2!1spt-BR!2sbr!4v1776941463027!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Agro MT Drones"
          />
        </div>
      </div>
    </section>
  );
}
