import { useState, FormEvent } from 'react';
import { MapPin, Phone, Instagram, Clock } from 'lucide-react';

export default function Contato() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [level, setLevel] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${name}.\n` +
      `WhatsApp: ${phone}\n` +
      `Interesse: ${level}` +
      (message ? `\nMensagem: ${message}` : '');
    const url = `http://wa.me/5562999690082?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Entre em
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[rgb(234,58,35)] to-[rgb(171,24,66)]">
              Contato
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para ajudar você a transformar o futuro do seu filho. Entre em contato agora!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[rgb(234,58,35)] to-[rgb(171,24,66)] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">R. 52, 629 - Jardim Goiás</p>
                    <p className="text-gray-600">Goiânia - GO, 74810-200</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[rgb(234,58,35)] to-[rgb(171,24,66)] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 mb-1">WhatsApp</h4>
                    <a
                      href="http://wa.me/5562999690082"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgb(171,24,66)] hover:underline"
                    >
                      (62) 99969-0082
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[rgb(234,58,35)] to-[rgb(171,24,66)] flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 mb-1">Instagram</h4>
                    <a
                      href="https://www.instagram.com/colegiosinapsegoiania/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgb(171,24,66)] hover:underline"
                    >
                      @colegiosinapsegoiania
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[rgb(234,58,35)] to-[rgb(171,24,66)] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 7h às 18h</p>
                    <p className="text-gray-600">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.453349333324!2d-49.24533802485036!3d-16.704216684071138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef194966759bd%3A0x201b318ebd2ea02d!2sCol%C3%A9gio%20Sinapse!5e0!3m2!1spt-BR!2sbr!4v1769440144608!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: '0px' }}
                title="Mapa Colégio Sinapse"
              ></iframe>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicite Informações</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(234,58,35)] focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(234,58,35)] focus:border-transparent outline-none transition-all"
                    placeholder="(62) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="level" className="block text-sm font-semibold text-gray-700 mb-2">
                    Interesse
                  </label>
                  <select
                    id="level"
                    required
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(234,58,35)] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Selecione</option>
                    <option value="Ensino Fundamental II (6º ao 9º ano)">Ensino Fundamental II (6º ao 9º ano)</option>
                    <option value="Ensino Médio (1ª, 2ª ou 3ª série)">Ensino Médio (1ª, 2ª ou 3ª série)</option>
                    <option value="Preparatório ENEM e Vestibulares">Preparatório ENEM e Vestibulares</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(234,58,35)] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Conte-nos um pouco mais sobre seu interesse..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[rgb(234,58,35)] to-[rgb(171,24,66)] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Enviar Mensagem via WhatsApp
                </button>
              </div>
              <p className="text-sm text-gray-500 text-center mt-4">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pré-preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
