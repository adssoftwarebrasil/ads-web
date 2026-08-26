import { useState, FormEvent } from 'react';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';
import { buildWhatsAppUrl } from '../lib/whatsapp';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${name}.`;
    text += `\nTelefone/WhatsApp: ${phone}`;
    if (email) text += `\nE-mail: ${email}`;
    text += `\n\nMensagem: ${message}`;
    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider bg-amber-100 px-4 py-2 rounded-full">
              Entre em Contato
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transforme Seu Projeto em <span className="text-amber-700">Realidade</span>
          </h2>
          <p className="text-lg text-gray-600">
            Estamos prontos para atender você. Entre em contato e solicite um orçamento sem compromisso.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-amber-700" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Endereço</p>
                    <p className="text-gray-600">
                      Avenida Anhanguera Nº 12077<br />Bairro Ipiranga<br />Goiânia/GO - CEP: 74453-390
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-amber-700" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Telefones</p>
                    <a href="tel:+556235973057" className="text-gray-600 hover:text-amber-700 transition-colors block">
                      (62) 3597-3057
                    </a>
                    <a
                      href="https://wa.me/5562992861117"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-amber-700 transition-colors block"
                    >
                      (62) 99286-1117
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-amber-700" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Horário de Funcionamento</p>
                    <p className="text-gray-600">Segunda a Sexta<br />07:30 às 17:30</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-amber-700" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">E-mail</p>
                    <a
                      href="mailto:contatomarmorariaanhanguera@gmail.com"
                      className="text-gray-600 hover:text-amber-700 transition-colors"
                    >
                      contatomarmorariaanhanguera@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.2718038789526!2d-49.325087424851354!3d-16.663276684105657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef43fc12d568d%3A0xdd7fe21be10848f9!2sMarmoraria%20Anhanguera!5e0!3m2!1spt-BR!2sbr!4v1766412182910!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Marmoraria Anhanguera"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicite seu Orçamento</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all outline-none"
                  placeholder="Digite seu nome"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all outline-none"
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all outline-none"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Descreva seu projeto ou necessidade"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                Enviar via WhatsApp
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
