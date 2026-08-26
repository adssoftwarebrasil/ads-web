import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { PHONE_TEL, PHONE_DISPLAY, EMAIL } from '../lib/site';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      'Olá, tudo bem? Vim pelo site.',
      form.name ? `Nome: ${form.name}` : '',
      form.phone ? `WhatsApp: ${form.phone}` : '',
      form.email ? `E-mail: ${form.email}` : '',
      form.subject ? `Assunto: ${form.subject}` : '',
      form.message ? `Mensagem: ${form.message}` : '',
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(
      `https://api.whatsapp.com/send?phone=557996288567&text=${text}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-red-600 text-sm font-bold tracking-widest uppercase mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Dúvidas ou sugestões
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            Entre em contato conosco. Estamos prontos para atendê-lo.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="lg:w-2/5 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-xl flex-shrink-0">
                <MapPin className="lucide lucide-map-pin text-red-600" width={22} height={22} />
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-1">Endereço</div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Avenida Doutor José da Silva Ribeiro Filho, 731<br />
                  América – Aracaju/SE – 49.080-180
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-xl flex-shrink-0">
                <Phone className="lucide lucide-phone text-red-600" width={22} height={22} />
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-1">Telefone / WhatsApp</div>
                <a
                  href={PHONE_TEL}
                  className="text-gray-500 text-sm hover:text-red-600 transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-xl flex-shrink-0">
                <Mail className="lucide lucide-mail text-red-600" width={22} height={22} />
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-1">E-mail</div>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-gray-500 text-sm hover:text-red-600 transition-colors"
                >
                  {EMAIL}
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm h-48 lg:flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.5917602228797!2d-37.076271999999996!3d-10.9185981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3a5c793dcc3%3A0xd78add2fd24d908a!2sExpresso%20Car%20-%20Pintura%20automativa!5e0!3m2!1spt-BR!2sbr!4v1775494849706!5m2!1spt-BR!2sbr"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Expresso Car"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="lg:w-3/5">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nome</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(79) 9 9999-9999"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">E-mail</label>
                <input
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Assunto</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Assunto da mensagem"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mensagem</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Descreva como podemos te ajudar..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/30"
              >
                <Send className="lucide lucide-send" width={18} height={18} />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
