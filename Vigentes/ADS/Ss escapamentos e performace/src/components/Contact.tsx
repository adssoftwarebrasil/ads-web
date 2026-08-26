import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5575999369036';
const WHATSAPP_PHONE = '5575999369036';

const contactCards = [
  {
    Icon: Phone,
    title: 'Telefone',
    value: '+55 75 99936-9036',
    href: WHATSAPP_URL,
  },
  {
    Icon: Mail,
    title: 'E-mail',
    value: 'contato@ssescapamentoeperformance.com.br',
    href: 'mailto:contato@ssescapamentoeperformance.com.br',
  },
  {
    Icon: MapPin,
    title: 'Endereço',
    value: 'Av. Eduardo Fróes da Mota, 2359, Lagoa Grande - Feira de Santana/BA',
    href: 'https://maps.google.com/?q=Avenida+Eduardo+Fróes+da+Mota,+2359,+Lagoa+Grande,+Feira+de+Santana,+BA',
  },
];

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
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Nome: ${form.name}\n` +
      `WhatsApp: ${form.whatsapp}\n` +
      `E-mail: ${form.email}\n` +
      `Assunto: ${form.subject}\n` +
      `Mensagem: ${form.message}`;
    window.open(
      `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <section id="contato" className="py-12 md:py-20 bg-gray-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Entre em <span className="text-[rgb(254,0,0)]">Contato</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Estamos prontos para atender você.
          </p>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:items-start">
          <div className="order-2 lg:order-1 w-full flex flex-col items-center lg:items-stretch max-w-lg lg:max-w-none mx-auto">
            <img
              src="https://storage.lucasmendes.dev/site-sp/ssescapamentoeperformance%2FSolicite%20um%20Orc%CC%A7amento.jpg"
              alt="Solicite um Orçamento"
              className="w-full h-64 md:h-[350px] lg:h-[400px] object-cover rounded-3xl shadow-xl mb-8"
            />
            <div className="space-y-4 md:space-y-6 w-full">
              {contactCards.map(({ Icon, title, value, href }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center lg:items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-[rgb(254,0,0)]/30 hover:shadow-lg transition-all duration-300 group w-full"
                >
                  <div className="bg-[rgb(254,0,0)]/10 group-hover:bg-[rgb(254,0,0)] p-3 rounded-xl transition-colors duration-300 shrink-0">
                    <Icon
                      size={24}
                      className="text-[rgb(254,0,0)] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-none">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 w-full">
            <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl border border-gray-200 relative overflow-hidden w-full max-w-md lg:max-w-none mx-auto">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[rgb(254,0,0)] to-red-800"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
                Envie sua Mensagem
              </h3>
              <p className="text-gray-500 text-center mb-8">Preencha os campos abaixo.</p>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 pl-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[rgb(254,0,0)] focus:ring-4 focus:ring-[rgb(254,0,0)]/10 outline-none transition-all duration-200"
                    placeholder="Digite seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 pl-1">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    value={form.whatsapp}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[rgb(254,0,0)] focus:ring-4 focus:ring-[rgb(254,0,0)]/10 outline-none transition-all duration-200"
                    placeholder="(75) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 pl-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[rgb(254,0,0)] focus:ring-4 focus:ring-[rgb(254,0,0)]/10 outline-none transition-all duration-200"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 pl-1">
                    Assunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[rgb(254,0,0)] focus:ring-4 focus:ring-[rgb(254,0,0)]/10 outline-none transition-all duration-200"
                    placeholder="Sobre o que deseja falar?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 pl-1">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[rgb(254,0,0)] focus:ring-4 focus:ring-[rgb(254,0,0)]/10 outline-none transition-all duration-200 resize-none"
                    placeholder="Descreva sua necessidade..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[rgb(254,0,0)] hover:bg-[rgb(200,0,0)] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-3 mt-4"
                >
                  Enviar Mensagem
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
