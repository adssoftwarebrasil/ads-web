import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const WHATSAPP_NUMBER = '556696681932';
const WHATSAPP = 'http://wa.me/556696681932';
const INSTAGRAM = 'https://www.instagram.com/sensuallizymodaintima/';
const FACEBOOK = 'https://www.facebook.com/p/Sensuallizy-Moda-%C3%8Dntima-100029115622961/';
const MAPS = 'https://www.google.com/maps/place/Sensuallizy+Moda+%C3%8Dntima/@-11.851757888370056,-55.507414024942165,17z';
const MAP_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.7644059191634!2d-55.507414024942165!3d-11.851757888370056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a7815942288aef%3A0xcaccdc12d2a9b479!2sSensuallizy%20Moda%20%C3%8Dntima!5e0!3m2!1spt-BR!2sbr!4v1769666799629!5m2!1spt-BR!2sbr';

const horarios = [
  { dia: 'Segunda-feira', hora: '8h às 18h', fechado: false },
  { dia: 'Terça-feira', hora: '8h às 18h', fechado: false },
  { dia: 'Quarta-feira', hora: '8h às 18h', fechado: false },
  { dia: 'Quinta-feira', hora: '8h às 18h', fechado: false },
  { dia: 'Sexta-feira', hora: '8h às 18h', fechado: false },
  { dia: 'Sábado', hora: '8h às 15h', fechado: false },
  { dia: 'Domingo', hora: 'Fechado', fechado: true },
];

export default function Contato() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.%0ATelefone: ${phone}%0A%0A${message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block">
            <span className="text-[#E24244] font-semibold text-sm tracking-wider uppercase">Contato</span>
            <div className="h-1 w-16 bg-[#E24244] mt-2 mx-auto"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#212423] mt-6 mb-6 leading-tight">
            Visite Nossa Loja ou<span className="block text-[#E24244]">Entre em Contato</span>
          </h2>
          <p className="text-[#212423]/70 text-lg leading-relaxed">
            Estamos prontas para atender você com todo carinho e atenção que você merece.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#E24244]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="lucide lucide-map-pin w-6 h-6 text-[#E24244]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#212423] mb-2">Endereço</h3>
                <p className="text-[#212423]/70">Av. das Acácias, 2120 - Sala A<br />Setor Residencial Norte<br />Sinop - MT, 78550-308</p>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-[#E24244] hover:text-[#d13d3f] font-medium">Ver no mapa →</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#E24244]/10 flex items-center justify-center flex-shrink-0">
                <Phone className="lucide lucide-phone w-6 h-6 text-[#E24244]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#212423] mb-2">WhatsApp</h3>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-[#212423]/70 hover:text-[#E24244]">(66) 99668-1932</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#E24244]/10 flex items-center justify-center flex-shrink-0">
                <Mail className="lucide lucide-mail w-6 h-6 text-[#E24244]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#212423] mb-2">E-mail</h3>
                <a href="mailto:sensuallizymodaintima@gmail.com" className="text-[#212423]/70 hover:text-[#E24244]">sensuallizymodaintima@gmail.com</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#E24244]/10 flex items-center justify-center flex-shrink-0">
                <Clock className="lucide lucide-clock w-6 h-6 text-[#E24244]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#212423] mb-3">Horário de Funcionamento</h3>
                <div className="space-y-2">
                  {horarios.map((h) => (
                    <div key={h.dia} className="flex justify-between text-sm">
                      <span className="text-[#212423]/70">{h.dia}</span>
                      <span className={`font-medium ${h.fechado ? 'text-[#E24244]' : 'text-[#212423]'}`}>{h.hora}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#E24244]/10 hover:bg-[#E24244] flex items-center justify-center transition-all duration-300 group">
                <Instagram className="lucide lucide-instagram w-6 h-6 text-[#E24244] group-hover:text-white transition-colors duration-300" />
              </a>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#E24244]/10 hover:bg-[#E24244] flex items-center justify-center transition-all duration-300 group">
                <Facebook className="lucide lucide-facebook w-6 h-6 text-[#E24244] group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-[#212423] mb-6">Envie uma Mensagem</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#212423] mb-2">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E24244] focus:ring-2 focus:ring-[#E24244]/20 outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#212423] mb-2">Telefone/WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E24244] focus:ring-2 focus:ring-[#E24244]/20 outline-none transition-all"
                    placeholder="(66) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#212423] mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E24244] focus:ring-2 focus:ring-[#E24244]/20 outline-none transition-all resize-none"
                    placeholder="Como podemos ajudar você?"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-[#E24244] text-white px-6 py-4 rounded-xl hover:bg-[#d13d3f] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02]">
                  Enviar via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src={MAP_EMBED}
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Sensuallizy Moda Íntima"
            style={{ border: '0px' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
