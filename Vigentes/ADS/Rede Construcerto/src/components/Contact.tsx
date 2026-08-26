import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { WHATSAPP_PHONE } from '../constants';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.
WhatsApp: ${form.whatsapp}
E-mail: ${form.email}
Assunto: ${form.subject}
Mensagem: ${form.message}`;
    window.open(
      `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
        text
      )}&type=phone_number&app_absent=0`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#e8221a] font-semibold text-sm uppercase tracking-wider">
            Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Dúvidas ou <span className="text-[#253579]">Sugestões</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contato conosco. Estamos prontos para atendê-lo.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg flex items-start gap-4">
              <Phone size={24} className="text-[#e8221a] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Telefone</h3>
                <a
                  href="tel:+557199743842"
                  className="text-gray-600 hover:text-[#253579] transition-colors"
                >
                  (71) 99974-3842
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg flex items-start gap-4">
              <Mail size={24} className="text-[#e8221a] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Email</h3>
                <a
                  href="mailto:contato@redeconstrucerto.com.br"
                  className="text-gray-600 hover:text-[#253579] transition-colors"
                >
                  contato@redeconstrucerto.com.br
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg flex items-start gap-4">
              <MapPin size={24} className="text-[#e8221a] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Endereço</h3>
                <p className="text-gray-600">
                  Rodovia da BA-531 - Via Abrantes - Cascalheira, S/N, Loteamento
                  Montenegro - Camaçari/BA/42.812-168
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7783.406068874514!2d-38.298617!3d-12.732786000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716421e49db53b3%3A0x2263b5ae14c2efcf!2sRede%20Construcerto%20Cama%C3%A7ari!5e0!3m2!1spt-BR!2sus!4v1765550449355!5m2!1spt-BR!2sus"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                style={{ border: '0px' }}
                title="Mapa Rede Construcerto Camaçari"
              ></iframe>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-lg space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#253579] focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-gray-700 font-medium mb-2">
                WhatsApp
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                required
                value={form.whatsapp}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#253579] focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#253579] focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#253579] focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#253579] focus:border-transparent outline-none transition-all resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#e8221a] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c91d16] transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
