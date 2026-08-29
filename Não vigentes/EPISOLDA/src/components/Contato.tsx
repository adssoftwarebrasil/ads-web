import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const subjects = [
  'Máquinas de Solda',
  'Consumíveis e Arames',
  'Abrasivos e Discos',
  'Ferramentas',
  'Suporte Técnico',
  'Outro',
];

export default function Contato() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${name}.%0A` +
      `Telefone: ${phone}%0A` +
      `Assunto: ${subject}%0A` +
      `Mensagem: ${message}`;
    window.open(`http://wa.me/551933012049?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[rgb(16,109,71)] font-semibold text-sm uppercase tracking-widest mb-3">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Fale com a <span className="text-[rgb(16,109,71)]">EPISOLDA</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Solicite seu orçamento ou tire suas dúvidas. Respondemos rapidamente!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-[rgb(16,109,71)]/10 flex items-center justify-center shrink-0">
                <MapPin className="lucide lucide-map-pin text-[rgb(16,109,71)]" width={20} height={20} />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Endereço</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Av. Conde do Pinhal, 311 - Areião<br />Piracicaba - SP, 13414-042
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-[rgb(16,109,71)]/10 flex items-center justify-center shrink-0">
                <Phone className="lucide lucide-phone text-[rgb(16,109,71)]" width={20} height={20} />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Telefone</p>
                <a href="tel:+551933012049" className="text-gray-500 text-sm hover:text-[rgb(16,109,71)] transition-colors">
                  (19) 3301-2049
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-[rgb(16,109,71)]/10 flex items-center justify-center shrink-0">
                <Clock className="lucide lucide-clock text-[rgb(16,109,71)]" width={20} height={20} />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Horário de Atendimento</p>
                <p className="text-gray-500 text-sm">Seg - Sex: 08h às 18h</p>
                <p className="text-gray-500 text-sm">Sábado: 08h às 12h</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-[rgb(16,109,71)]/10 flex items-center justify-center shrink-0">
                <Instagram className="lucide lucide-instagram text-[rgb(16,109,71)]" width={20} height={20} />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Instagram</p>
                <a
                  href="https://www.instagram.com/episolda_piracicaba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 text-sm hover:text-[rgb(16,109,71)] transition-colors"
                >
                  @episolda_piracicaba
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-52 border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.6832011497136!2d-47.65615432469559!3d-22.702834279399163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1561c6fe46873d3%3A0x39ff0066caf3f564!2sEpisolda%20Comercio%20de%20Solda%20e%20Ferramentas!5e0!3m2!1spt-BR!2sbr!4v1774868529144!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="EPISOLDA no Google Maps"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col gap-5"
          >
            <h3 className="text-xl font-bold text-gray-900">Solicite um Orçamento</h3>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                Seu Nome *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Ex: João da Silva"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(16,109,71)] focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                WhatsApp / Telefone *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="(19) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(16,109,71)] focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1.5">
                Assunto *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(16,109,71)] focus:border-transparent transition-all"
              >
                <option value="">Selecione um assunto</option>
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Descreva sua necessidade ou produto desejado..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(16,109,71)] focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[rgb(16,109,71)] hover:bg-[rgb(13,90,58)] text-white font-bold py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Enviar pelo WhatsApp
            </button>
            <p className="text-xs text-gray-400 text-center">
              Ao clicar, você será redirecionado para o WhatsApp com sua mensagem preenchida.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
