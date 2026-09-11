import { useState } from 'react';
import { MapPin, Phone, Send, Instagram, Facebook } from 'lucide-react';

const BG = 'https://storage.lucasmendes.dev/site-sp/taquaral%20veiculos%2Fimg%2Fcarro-prata-garagem.webp';

export default function Contato() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.\nTelefone: ${phone}\n\n${message}`;
    window.open(`https://wa.me/5562992489166?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-[rgb(16,16,16)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${BG}")` }}></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[rgb(193,148,35)]/20 border border-[rgb(193,148,35)] text-[rgb(254,240,115)] rounded-full text-sm font-semibold">
              Entre em Contato
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Vamos Encontrar o Veículo Perfeito Para Você
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Estamos prontos para atendê-lo. Fale conosco e descubra como podemos ajudar você a realizar seu sonho.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">Seu Nome</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[rgb(193,148,35)] focus:ring-2 focus:ring-[rgb(193,148,35)]/20 transition-all duration-200"
                  placeholder="Digite seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">Seu Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[rgb(193,148,35)] focus:ring-2 focus:ring-[rgb(193,148,35)]/20 transition-all duration-200"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">Sua Mensagem</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[rgb(193,148,35)] focus:ring-2 focus:ring-[rgb(193,148,35)]/20 transition-all duration-200 resize-none"
                  placeholder="Conte-nos o que você procura..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-[rgb(193,148,35)] hover:bg-[rgb(254,240,115)] text-[rgb(16,16,16)] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Send className="w-5 h-5" />
                <span>Enviar via WhatsApp</span>
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(193,148,35)] rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[rgb(16,16,16)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Endereço</div>
                    <div className="text-gray-300 text-sm leading-relaxed">
                      AV. Antonio Moreira, N°531, QD. 10, LT. 15<br />
                      Vila Jandira, Inhumas, Goiás<br />
                      CEP: 75405-135
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(193,148,35)] rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[rgb(16,16,16)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">WhatsApp</div>
                    <a
                      href="https://wa.me/5562992489166"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgb(254,240,115)] hover:text-[rgb(193,148,35)] transition-colors duration-200"
                    >
                      (62) 99248-9166
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Redes Sociais</h3>
              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/taquaralveiculos.oficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Instagram</div>
                    <div className="text-sm text-gray-400">@taquaralveiculos.oficial</div>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/taquaralveiculosofc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Facebook className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Facebook</div>
                    <div className="text-sm text-gray-400">/taquaralveiculosofc</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
