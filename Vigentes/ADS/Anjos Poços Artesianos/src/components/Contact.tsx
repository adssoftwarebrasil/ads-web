import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { InstagramGlyph, FacebookGlyph } from './icons';

const INSTAGRAM_URL = 'https://www.instagram.com/anjos_pocos_artesianos/';
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61559605798615';
const MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.6742441004335!2d-55.56736062494189!3d-11.858060488364229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77fec156febcb%3A0x334448e96f551692!2sAnjos%20Po%C3%A7os%20Artesianos!5e0!3m2!1spt-BR!2sbr!4v1770923493881!5m2!1spt-BR!2sbr';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.%0A%0AE-mail: ${email}%0ATelefone: ${phone}%0A%0AMensagem: ${message}`;
    window.open(
      `https://wa.me/556635311026?text=${text}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Solicite seu orçamento sem compromisso. Estamos prontos para atender
            você!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Telefone/WhatsApp
                    </h4>
                    <a
                      href="tel:+556635311026"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      (66) 3531-1026
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                    <a
                      href="mailto:jd.servicos@hotmail.com.br"
                      className="text-gray-600 hover:text-blue-600 transition-colors break-all"
                    >
                      jd.servicos@hotmail.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Endereço
                    </h4>
                    <p className="text-gray-600">
                      R. Jesus e os Apóstolos, 232
                      <br />
                      Jardim Portinari, Sinop - MT
                      <br />
                      CEP: 78555-800
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Horário de Funcionamento
                    </h4>
                    <p className="text-gray-600">
                      Segunda a Sexta
                      <br />
                      7h às 11h | 13h às 17h30
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg font-semibold"
              >
                <InstagramGlyph className="w-5 h-5" />
                Instagram
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg font-semibold"
              >
                <FacebookGlyph className="w-5 h-5" />
                Facebook
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Solicitar Orçamento
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  placeholder="(66) 99999-9999"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                  placeholder="Descreva seu projeto ou necessidade..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg"
              >
                <Send className="w-5 h-5" />
                Enviar via WhatsApp
              </button>
              <p className="text-sm text-gray-500 text-center">
                Ao enviar, você será redirecionado para o WhatsApp com sua
                mensagem pré-preenchida
              </p>
            </form>
          </div>
        </div>
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-blue-100">
          <div className="aspect-video w-full">
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Anjos Poços Artesianos"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
