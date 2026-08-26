import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formData.name}.\n\nWhatsApp: ${formData.whatsapp}\nEmail: ${formData.email}\n\nAssunto: ${formData.subject}\n\nMensagem: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://api.whatsapp.com/send?phone=558191952020&text=${encodedMessage}`,
      '_blank'
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Contato
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-neutral-600">
            Dúvidas ou sugestões
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-8">
              Entre em contato
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 mb-1">Telefone</p>
                  <a
                    href="tel:+558191952020"
                    className="text-neutral-600 hover:text-primary transition-colors"
                  >
                    (81) 99195-2020
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 mb-1">Email</p>
                  <a
                    href="mailto:contato@muralhacorretora.com.br"
                    className="text-neutral-600 hover:text-primary transition-colors"
                  >
                    contato@muralhacorretora.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 mb-1">Endereço</p>
                  <p className="text-neutral-600">
                    Empresarial Renato Dias
                    <br />
                    Av. Gov. Agamenon Magalhães, 4318 - Sala 1201
                    <br />
                    Paissandu, Recife - PE
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-semibold text-neutral-900 mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Digite sua mensagem aqui..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-600 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
