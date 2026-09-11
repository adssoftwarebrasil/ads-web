import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL } from '../lib/scroll';

const PHONE = '5562982608803';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      'Olá! Meu nome é ' + form.name + '.',
      form.email ? 'E-mail: ' + form.email : '',
      form.phone ? 'Telefone: ' + form.phone : '',
      '',
      form.message,
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${PHONE}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[rgba(155,39,40,0.03)] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgba(155,39,40,0.03)] rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="transition-all duration-1000 opacity-100 translate-y-0">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-[rgb(155,39,40)] bg-[rgba(155,39,40,0.1)] px-4 py-2 rounded-full">Entre em Contato</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>Fale Conosco</h2>
            <div className="w-24 h-1 bg-[rgb(155,39,40)] mx-auto mb-6"></div>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">Estamos prontos para atender você. Entre em contato para tirar dúvidas ou fazer seu pedido!</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(155, 39, 40, 0.1)' }}>
                    <MapPin size={24} className="text-[rgb(155,39,40)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Endereço</h3>
                    <p className="text-gray-600 leading-relaxed">Rua Indaiá, QD 108 LT 10, Nº 940<br />Jardim Guanabara<br />Goiânia - GO | CEP: 74675-380</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(155, 39, 40, 0.1)' }}>
                    <Phone size={24} className="text-[rgb(155,39,40)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Telefone/WhatsApp</h3>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[rgb(155,39,40)] hover:text-[rgb(120,30,31)] font-semibold transition-colors group">
                      <span className="text-lg">+55 (62) 98260-8803</span>
                      <WhatsAppIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(155, 39, 40, 0.1)' }}>
                    <Mail size={24} className="text-[rgb(155,39,40)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">E-mail</h3>
                    <a href="mailto:natan.miquel11@gmail.com" className="text-gray-600 hover:text-[rgb(155,39,40)] transition-colors block mb-1">natan.miquel11@gmail.com</a>
                    <a href="mailto:mn.enxovais@hotmail.com" className="text-gray-600 hover:text-[rgb(155,39,40)] transition-colors block">mn.enxovais@hotmail.com</a>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(155, 39, 40, 0.1)' }}>
                    <Clock size={24} className="text-[rgb(155,39,40)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Horário de Funcionamento</h3>
                    <p className="text-gray-600">
                      <strong>Segunda a Sexta:</strong> 8h30 às 18h<br />
                      <strong>Sábado:</strong> 8h30 às 12h
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(155, 39, 40, 0.1)' }}>
                    <Instagram size={24} className="text-[rgb(155,39,40)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Redes Sociais</h3>
                    <a href="https://instagram.com/mnenxovais" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[rgb(155,39,40)] hover:text-[rgb(120,30,31)] font-semibold transition-colors">@mnenxovais</a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Envie sua Mensagem</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Nome *</label>
                    <input type="text" id="name" name="name" required value={form.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[rgb(155,39,40)] focus:outline-none transition-colors" placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">E-mail *</label>
                    <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[rgb(155,39,40)] focus:outline-none transition-colors" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Telefone</label>
                    <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[rgb(155,39,40)] focus:outline-none transition-colors" placeholder="(00) 00000-0000" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Mensagem *</label>
                    <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[rgb(155,39,40)] focus:outline-none transition-colors resize-none" placeholder="Como podemos ajudar você?"></textarea>
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[rgb(155,39,40)] text-white rounded-lg font-bold text-lg hover:bg-[rgb(120,30,31)] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Send size={20} className="lucide lucide-send" />Enviar via WhatsApp
                  </button>
                  <p className="text-sm text-gray-500 text-center">Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pronta</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
