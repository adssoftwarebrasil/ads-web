import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

const regioes = ['Divinópolis', 'São Gonçalo do Pará', 'Nova Serrana', 'Igaratinga'];

export default function Contato() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${name}.%0A` +
      `Telefone/WhatsApp: ${phone}%0A` +
      (email ? `E-mail: ${email}%0A` : '') +
      `Mensagem: ${message}`;
    window.open(`https://wa.me/553791564540?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24" style={{ backgroundColor: 'rgb(178, 155, 133)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto font-medium">
            Estamos prontos para atender você. Agende sua consulta agora mesmo!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-8 lg:sticky lg:top-8 h-fit">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Av. Amazonas, 311 - São José
                      <br />
                      Divinópolis - MG, 35502-000
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefones</h4>
                    <p className="text-gray-600">
                      Dra. Tathiane: (37) 99156-4540
                      <br />
                      Equipe: (37) 98853-9277
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8h às 19h
                      <br />
                      Sábado: 9h às 13h
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Atendemos as regiões:</h4>
                <div className="flex flex-wrap gap-2">
                  {regioes.map((r) => (
                    <span
                      key={r}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-black text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Atendimento Rápido pelo WhatsApp</h3>
              <p className="text-gray-300 mb-6">
                Prefere um atendimento mais ágil? Fale diretamente conosco pelo WhatsApp!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/553791564540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white text-black px-6 py-3 rounded-full text-center font-semibold hover:bg-gray-100 transition-colors"
                >
                  Dra. Tathiane
                </a>
                <a
                  href="https://wa.me/553788539277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white text-black px-6 py-3 rounded-full text-center font-semibold hover:bg-gray-100 transition-colors"
                >
                  Equipe
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h3>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/20 outline-none transition-all"
                  placeholder="Digite seu nome"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/20 outline-none transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/20 outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/20 outline-none transition-all resize-none"
                  placeholder="Conte-nos como podemos ajudar..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Enviar via WhatsApp</span>
                <Send className="w-5 h-5" />
              </button>
              <p className="text-sm text-gray-600 text-center">
                Ao enviar, você será redirecionado para o WhatsApp
              </p>
            </form>
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg h-96 w-full">
              <iframe
                title="Localização Clínica"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.471576403063!2d-44.891152925828466!3d-20.13963284617511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa0b02700000001%3A0x0!2sAv.+Amazonas%2C+311+-+S%C3%A3o+Jos%C3%A9%2C+Divin%C3%B3polis+-+MG%2C+35501-259!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
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
