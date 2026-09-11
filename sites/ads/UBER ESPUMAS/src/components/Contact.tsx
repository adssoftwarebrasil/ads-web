import { useState } from 'react';
import { MapPin, Clock } from 'lucide-react';

const mapEmbed =
  'https://maps.google.com/maps?q=Av.+Jo%C3%A3o+Pessoa+n%C2%BA+825%2C+Bairro+Martins+Uberl%C3%A2ndia-MG%2C+Brasil&t=&z=15&ie=UTF8&iwloc=&output=embed';
const mapLink =
  'https://maps.google.com/maps?q=Av.+Jo%C3%A3o+Pessoa+n%C2%BA+825%2C+Bairro+Martins+Uberl%C3%A2ndia-MG%2C+Brasil';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Gostaria de solicitar um orçamento.%0A%0A` +
      `*Nome:* ${firstName} ${lastName}%0A` +
      `*Email:* ${email}%0A` +
      `*Mensagem:* ${message}`;
    window.open(`https://wa.me/5534991421598?text=${encodeURI(text)}`, '_blank');
  };

  return (
    <div className="animate-slideUp delay-1000">
      <section id="contato" className="py-24 gradient-bg-primary bg-[#00218b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 text-white">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Solicite Seu Orçamento Grátis</h2>
            <p className="text-xl opacity-90">Resposta em até 2 horas no horário comercial</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-semibold text-gray-700 uppercase tracking-wide"
                    >
                      Primeiro Nome*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#00218b] focus:ring-4 focus:ring-[#00218b]/10 transition-all duration-300 outline-none"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-semibold text-gray-700 uppercase tracking-wide"
                    >
                      Sobrenome*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#00218b] focus:ring-4 focus:ring-[#00218b]/10 transition-all duration-300 outline-none"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-700 uppercase tracking-wide"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#00218b] focus:ring-4 focus:ring-[#00218b]/10 transition-all duration-300 outline-none"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-gray-700 uppercase tracking-wide"
                  >
                    Mensagem*
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Descreva seu projeto ou necessidade..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#00218b] focus:ring-4 focus:ring-[#00218b]/10 transition-all duration-300 outline-none resize-none"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#00218b] text-white py-4 rounded-xl text-lg font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Enviar para WhatsApp →
                </button>
              </form>
            </div>
            <div className="space-y-6 h-full flex flex-col">
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-auto lg:flex-1 relative group">
                <iframe
                  width="100%"
                  height="100%"
                  title="Mapa da Uber Espumas"
                  className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                  src={mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute inset-0 bg-[#00218b]/10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <MapPin className="lucide lucide-map-pin text-blue-300" width={24} height={24} />{' '}
                  Onde Estamos
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg">
                      <MapPin
                        className="lucide lucide-map-pin text-blue-200"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Uber Espumas</p>
                      <p className="opacity-80">Av. João Pessoa nº 825, Bairro Martins</p>
                      <p className="opacity-80">Uberlândia-MG, Brasil</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg">
                      <Clock
                        className="lucide lucide-clock text-blue-200"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div>
                      <p className="opacity-80">Seg - Sex: 08:00 - 18:00</p>
                      <p className="opacity-80">Sáb: 08:00 - 12:00</p>
                    </div>
                  </div>
                </div>
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 block w-full bg-white text-[#00218b] text-center py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
                >
                  Abrir no MAPS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
