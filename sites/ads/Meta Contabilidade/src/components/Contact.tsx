import { useState } from 'react';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SERVICE_OPTIONS, PHONE, EMAIL, TEL } from '../data';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de solicitar um contato com a Meta Contabilidade.',
      '',
      `Nome: ${form.name}`,
      `Telefone: ${form.phone}`,
    ];
    if (form.email) lines.push(`E-mail: ${form.email}`);
    if (form.service) lines.push(`Serviço de interesse: ${form.service}`);
    if (form.message) lines.push(`Mensagem: ${form.message}`);
    const url = `https://wa.me/556734227582?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand mb-4">
            Vamos conversar sobre o seu negócio
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Preencha o formulário e entraremos em contato pelo WhatsApp em instantes. Primeira
            consultoria é gratuita!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3 animate-on-scroll-left">
            <div className="bg-white rounded-3xl shadow-sm p-8 border border-gray-100">
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nome completo *
                    </label>
                    <input
                      name="name"
                      required
                      placeholder="Seu nome"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      name="phone"
                      required
                      placeholder="(67) 9 9999-9999"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">E-mail</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="seu@email.com.br"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Serviço de interesse
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white"
                  >
                    <option value="">Selecione um serviço...</option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Mensagem</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Conte um pouco sobre sua empresa e o que precisa..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Enviar pelo WhatsApp
                  <ArrowRight size={18} />
                </button>
                <p className="text-center text-gray-400 text-xs">
                  Ao enviar, você será redirecionado para o WhatsApp com sua mensagem
                  pré-preenchida.
                </p>
              </form>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-5 animate-on-scroll-right">
            <div className="bg-white rounded-3xl shadow-sm p-7 border border-gray-100">
              <h3 className="font-bold text-brand text-lg mb-5">Informações de Contato</h3>
              <ul className="flex flex-col gap-4">
                <a href={TEL} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-medium mb-0.5">Telefone</p>
                      <p className="text-gray-800 text-sm font-medium">{PHONE}</p>
                    </div>
                  </li>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-medium mb-0.5">E-mail</p>
                      <p className="text-gray-800 text-sm font-medium">{EMAIL}</p>
                    </div>
                  </li>
                </a>
                <a
                  href="https://maps.google.com/?q=META+CONTABILIDADE+Dourados"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-medium mb-0.5">Endereço</p>
                      <p className="text-gray-800 text-sm font-medium">
                        R. Aquidauana, 31 — Jardim Caramuru, Dourados/MS
                      </p>
                    </div>
                  </li>
                </a>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium mb-0.5">Horário</p>
                    <p className="text-gray-800 text-sm font-medium">
                      Seg–Sex: 07:30–11:00 e 13:00–17:30
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-sm flex-1 min-h-[220px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.24354954632!2d-54.80150052470956!3d-22.230836279736586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9489a9fdb88d7e7b%3A0xa39aa3c6de87e741!2sMETA%20CONTABILIDADE!5e0!3m2!1spt-BR!2sbr!4v1772815097107!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Meta Contabilidade"
                style={{ border: '0px', minHeight: '220px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
