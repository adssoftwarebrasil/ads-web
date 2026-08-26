import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const MAPS_URL =
  'https://maps.google.com/?q=R.+João+Bim,+1027+-+Jardim+Paulistano,+Ribeirão+Preto+-+SP';

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
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${form.name}.%0A` +
      `WhatsApp: ${form.phone}%0A` +
      `E-mail: ${form.email}%0A` +
      `Assunto: ${form.subject}%0A` +
      `Mensagem: ${form.message}`;
    window.open(`http://wa.me/5516992943445?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[rgb(251,35,51)] font-semibold text-sm uppercase tracking-wider">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender você. Envie sua mensagem ou ligue agora mesmo!
          </p>
          <div className="w-24 h-1 bg-[rgb(251,35,51)] mx-auto rounded-full mt-6"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <a href="tel:1636187557" target="_blank" rel="noopener noreferrer" className="block h-full">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full border border-gray-100">
              <div className="inline-flex p-4 bg-gradient-to-br from-[rgb(251,35,51)] to-[rgb(231,15,31)] rounded-xl mb-4">
                <Phone size={28} className="lucide lucide-phone text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Telefones</h3>
              <p className="text-gray-600">(16) 9294-3445</p>
              <p className="text-gray-600">(16) 3618-7557</p>
              <p className="text-gray-600">(16) 3624-7478</p>
            </div>
          </a>
          <a
            href="mailto:contato@atacaodaobaterias.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full border border-gray-100">
              <div className="inline-flex p-4 bg-gradient-to-br from-[rgb(251,35,51)] to-[rgb(231,15,31)] rounded-xl mb-4">
                <Mail size={28} className="lucide lucide-mail text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">E-mail</h3>
              <p className="text-gray-600">contato@atacaodaobaterias.com</p>
            </div>
          </a>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="block h-full">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full border border-gray-100">
              <div className="inline-flex p-4 bg-gradient-to-br from-[rgb(251,35,51)] to-[rgb(231,15,31)] rounded-xl mb-4">
                <MapPin size={28} className="lucide lucide-map-pin text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Endereço</h3>
              <p className="text-gray-600">R. João Bim, 1027</p>
              <p className="text-gray-600">Jardim Paulistano</p>
              <p className="text-gray-600">Ribeirão Preto - SP, 14090-340</p>
            </div>
          </a>
          <div className="block h-full">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full border border-gray-100">
              <div className="inline-flex p-4 bg-gradient-to-br from-[rgb(251,35,51)] to-[rgb(231,15,31)] rounded-xl mb-4">
                <Clock size={28} className="lucide lucide-clock text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Horário</h3>
              <p className="text-gray-600">Atendimento 24 horas</p>
              <p className="text-gray-600">Todos os dias da semana</p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie sua mensagem</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[rgb(41,97,169)] focus:ring-2 focus:ring-[rgb(41,97,169)]/20 outline-none transition-all"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[rgb(41,97,169)] focus:ring-2 focus:ring-[rgb(41,97,169)]/20 outline-none transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[rgb(41,97,169)] focus:ring-2 focus:ring-[rgb(41,97,169)]/20 outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[rgb(41,97,169)] focus:ring-2 focus:ring-[rgb(41,97,169)]/20 outline-none transition-all"
                  placeholder="Assunto da mensagem"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[rgb(41,97,169)] focus:ring-2 focus:ring-[rgb(41,97,169)]/20 outline-none transition-all resize-none"
                  placeholder="Digite sua mensagem..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(251,35,51)] text-white px-8 py-4 rounded-full hover:bg-[rgb(231,15,31)] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Enviar via WhatsApp
                <Send size={20} className="lucide lucide-send " />
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nossa Localização</h3>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.560841969344!2d-47.7933439247396!3d-21.169868280514958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf0f2a7fdd31%3A0x35569c252342c024!2sAtacad%C3%A3o%20Das%20Baterias!5e0!3m2!1spt-BR!2sbr!4v1768451643786!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
