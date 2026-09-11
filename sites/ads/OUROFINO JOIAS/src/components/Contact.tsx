import { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';
import { WHATSAPP_URL, INSTAGRAM_URL, EMAIL } from '../constants';

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
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${form.name}.\n` +
      `WhatsApp: ${form.whatsapp}\n` +
      `E-mail: ${form.email}\n` +
      `Assunto: ${form.subject}\n\n` +
      `${form.message}`;
    const url = `https://wa.me/556798212819?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 bg-[rgb(20,20,18)]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[rgb(186,176,97)] font-semibold text-sm uppercase tracking-wider">Contato</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">Entre em Contato Conosco</h2>
          <div className="h-1 w-24 bg-[rgb(186,176,97)] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg">Estamos prontos para criar sua joia dos sonhos!</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-[rgb(186,176,97)]/10 min-w-[48px] h-12 rounded-lg flex items-center justify-center group-hover:bg-[rgb(186,176,97)]/20 transition-colors duration-300">
                    <MapPin size={24} className="text-[rgb(186,176,97)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Endereço</h4>
                    <p className="text-gray-400">Av. José Roberto Teixeira, 793b - Jardim Florida, Dourados - MS, 79823-680</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="bg-[rgb(186,176,97)]/10 min-w-[48px] h-12 rounded-lg flex items-center justify-center group-hover:bg-[rgb(186,176,97)]/20 transition-colors duration-300">
                    <Phone size={24} className="text-[rgb(186,176,97)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Telefone</h4>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[rgb(186,176,97)] transition-colors duration-300">(67) 9 9821-2819</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="bg-[rgb(186,176,97)]/10 min-w-[48px] h-12 rounded-lg flex items-center justify-center group-hover:bg-[rgb(186,176,97)]/20 transition-colors duration-300">
                    <Mail size={24} className="text-[rgb(186,176,97)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a href={`mailto:${EMAIL}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[rgb(186,176,97)] transition-colors duration-300">{EMAIL}</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="bg-[rgb(186,176,97)]/10 min-w-[48px] h-12 rounded-lg flex items-center justify-center group-hover:bg-[rgb(186,176,97)]/20 transition-colors duration-300">
                    <Instagram size={24} className="text-[rgb(186,176,97)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Instagram</h4>
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[rgb(186,176,97)] transition-colors duration-300">@ouro.fino_joias</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgb(29,29,27)] border border-[rgb(186,176,97)]/20 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock size={24} className="text-[rgb(186,176,97)]" />
                <h4 className="text-white font-semibold text-lg">Horário de Atendimento</h4>
              </div>
              <div className="space-y-2 text-gray-400">
                <p>Segunda a Sexta: 09:00 - 18:00</p>
                <p>Sábado: 09:00 - 13:00</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
          <div className="bg-[rgb(29,29,27)] border border-[rgb(186,176,97)]/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Envie sua Mensagem</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">Nome</label>
                <input type="text" id="name" required value={form.name} onChange={handleChange} className="w-full px-4 py-3 bg-[rgb(20,20,18)] border border-[rgb(186,176,97)]/20 rounded-md text-white focus:outline-none focus:border-[rgb(186,176,97)] transition-colors duration-300" placeholder="Seu nome completo" />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-white font-medium mb-2">WhatsApp</label>
                <input type="tel" id="whatsapp" required value={form.whatsapp} onChange={handleChange} className="w-full px-4 py-3 bg-[rgb(20,20,18)] border border-[rgb(186,176,97)]/20 rounded-md text-white focus:outline-none focus:border-[rgb(186,176,97)] transition-colors duration-300" placeholder="(67) 99999-9999" />
              </div>
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">E-mail</label>
                <input type="email" id="email" required value={form.email} onChange={handleChange} className="w-full px-4 py-3 bg-[rgb(20,20,18)] border border-[rgb(186,176,97)]/20 rounded-md text-white focus:outline-none focus:border-[rgb(186,176,97)] transition-colors duration-300" placeholder="seu@email.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">Assunto</label>
                <input type="text" id="subject" required value={form.subject} onChange={handleChange} className="w-full px-4 py-3 bg-[rgb(20,20,18)] border border-[rgb(186,176,97)]/20 rounded-md text-white focus:outline-none focus:border-[rgb(186,176,97)] transition-colors duration-300" placeholder="Como podemos ajudar?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">Mensagem</label>
                <textarea id="message" required rows={4} value={form.message} onChange={handleChange} className="w-full px-4 py-3 bg-[rgb(20,20,18)] border border-[rgb(186,176,97)]/20 rounded-md text-white focus:outline-none focus:border-[rgb(186,176,97)] transition-colors duration-300 resize-none" placeholder="Conte-nos sobre sua joia dos sonhos..."></textarea>
              </div>
              <button type="submit" className="w-full bg-[rgb(186,176,97)] text-[rgb(29,29,27)] px-8 py-4 rounded-md hover:bg-[rgb(126,102,42)] transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl">Enviar via WhatsApp</button>
            </form>
          </div>
        </div>
        <div className="mt-16">
          <div className="rounded-lg overflow-hidden border border-[rgb(186,176,97)]/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.3768818427325!2d-54.8387755247097!3d-22.225774879740236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9489a9458f228045%3A0xd5559129759f3a6a!2sOuroFino%20J%C3%B3ias!5e0!3m2!1spt-BR!2sbr!4v1769092695411!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Ouro Fino Joias"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
