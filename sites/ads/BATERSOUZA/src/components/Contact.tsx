import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', vehicle: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${form.name}.\n` +
      `Telefone: ${form.phone}\n` +
      `Veículo: ${form.vehicle}\n` +
      `Mensagem: ${form.message}`;
    window.open(
      `http://wa.me/556292766466?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
            Entre em <span className="text-yellow-500">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender você. Visite nossa loja ou envie sua mensagem!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <MapPin className="lucide lucide-map-pin w-6 h-6 text-white" width={24} height={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Endereço</p>
                    <p className="text-gray-600">
                      R. da Divisa, QD 23 - LT 16 SALA 1<br />
                      Res. Jardim Canedo III<br />
                      Senador Canedo - GO, 75250-652
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Phone className="lucide lucide-phone w-6 h-6 text-white" width={24} height={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Telefone / WhatsApp</p>
                    <a href="tel:+556292766466" className="text-blue-600 hover:text-blue-700 font-medium">
                      (62) 99276-6466
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Mail className="lucide lucide-mail w-6 h-6 text-white" width={24} height={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">E-mail</p>
                    <a
                      href="mailto:Trabalhobatersouzasc@gmail.com"
                      className="text-blue-600 hover:text-blue-700 font-medium break-all"
                    >
                      Trabalhobatersouzasc@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Clock className="lucide lucide-clock w-6 h-6 text-white" width={24} height={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Horário de Funcionamento</p>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8:00 às 18:00<br />
                      Sábado: 8:00 às 13:00<br />
                      <span className="text-yellow-600 font-semibold">Plantão: até 22:00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/batersouza/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold text-center"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/p/BaterSouza-2-61552538800074/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold text-center"
              >
                Facebook
              </a>
            </div>
          </div>
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Solicite um Orçamento</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Digite seu nome completo"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="(00) 00000-0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="vehicle" className="block text-sm font-semibold mb-2">
                  Veículo *
                </label>
                <input
                  type="text"
                  id="vehicle"
                  name="vehicle"
                  required
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Ex: Fiat Uno 2015"
                  value={form.vehicle}
                  onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                  placeholder="Conte-nos o que você precisa..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-blue-900 px-6 py-4 rounded-lg hover:bg-yellow-500 transition-colors font-bold text-lg flex items-center justify-center gap-2"
              >
                <Send className="lucide lucide-send" width={20} height={20} />
                Enviar via WhatsApp
              </button>
              <p className="text-sm text-blue-100 text-center">
                Ao enviar, você será redirecionado para o WhatsApp
              </p>
            </form>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.517344421737!2d-49.12411428179079!3d-16.701019093022154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ee946c1acfda3%3A0x369b5ba3956c5c16!2sBaterSouza%202%20Baterias!5e0!3m2!1spt-BR!2sbr!4v1770136982289!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização BaterSouza"
            style={{ border: '0px' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
