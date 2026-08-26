import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Send } from 'lucide-react';
import { openWhatsApp } from '../whatsapp';

export default function Contato() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message =
      `Olá! Gostaria de mais informações.\n\n` +
      `*Nome:* ${form.name}\n` +
      `*E-mail:* ${form.email}\n` +
      `*Telefone:* ${form.phone}\n` +
      `*Mensagem:* ${form.message}`;
    openWhatsApp(message);
  };

  return (
    <section id="contato" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[rgb(2,45,103)] font-semibold text-sm uppercase tracking-wider">
            Entre em Contato
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Fale Conosco e <span className="text-[rgb(2,45,103)]">Tire Suas Dúvidas</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa equipe está pronta para atender você e oferecer as melhores soluções para seu
            negócio.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                    <MapPin size={24} className="text-[rgb(2,45,103)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Endereço</p>
                    <p className="text-gray-600">
                      Av. Sen. José Rodrigues de Morais Neto, 951
                      <br />
                      Parque Amazônia, Goiânia - GO, 74835-620
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                    <Phone size={24} className="text-[rgb(2,45,103)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Telefones</p>
                    <p className="text-gray-600">
                      (62) 3581-1125
                      <br />
                      (62) 99415-2855
                      <br />
                      (62) 98424-8630
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                    <Mail size={24} className="text-[rgb(2,45,103)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">E-mail</p>
                    <a
                      href="mailto:goiafio@yahoo.com.br"
                      className="text-gray-600 hover:text-[rgb(2,45,103)] transition-colors"
                    >
                      goiafio@yahoo.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                    <Clock size={24} className="text-[rgb(2,45,103)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Horário de Atendimento</p>
                    <p className="text-gray-600">
                      Segunda a Sexta-feira
                      <br />
                      7h30 às 17h30
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                    <Instagram size={24} className="text-[rgb(2,45,103)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Instagram</p>
                    <a
                      href="https://www.instagram.com/goiafio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[rgb(2,45,103)] transition-colors"
                    >
                      @goiafio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(2,45,103)] focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(2,45,103)] focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(2,45,103)] focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(2,45,103)] focus:ring-2 focus:ring-blue-100 transition-all outline-none resize-none"
                  placeholder="Como podemos ajudar você?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(2,45,103)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.00907551034!2d-49.2837814248499!3d-16.726398984052395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef17b4b728f89%3A0x705d6e3d1df89a96!2sGoiafio!5e0!3m2!1spt-BR!2sbr!4v1768325801388!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Goiafio"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
