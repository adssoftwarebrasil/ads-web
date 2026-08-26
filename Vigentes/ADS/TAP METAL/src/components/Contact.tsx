import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Send } from 'lucide-react';

const WHATSAPP_NUMBER = '5562985811343';
const WHATSAPP = 'http://wa.me/5562985811343';
const INSTAGRAM = 'https://www.instagram.com/tap_metal/';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.%0A%0AE-mail: ${email}%0ATelefone: ${phone}%0A%0AMensagem: ${message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section
      id="contato"
      className="py-20 lg:py-32 bg-gradient-to-b from-[rgba(9,9,35)] to-[rgba(12,12,45)] relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[rgba(12,132,227,0.2)] border border-[rgba(12,132,227,0.5)] rounded-full">
            <span className="text-[rgba(12,132,227)] font-semibold text-sm uppercase tracking-wide">
              Entre em Contato
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Vamos Conversar Sobre Seu Projeto
          </h2>
          <p className="text-lg text-[rgba(198,198,207)] max-w-3xl mx-auto">
            Estamos prontos para atender você e oferecer a melhor solução para suas necessidades. Entre em
            contato conosco!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] backdrop-blur-sm border border-[rgba(198,198,207,0.1)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgba(12,132,227,0.2)] rounded-lg flex items-center justify-center">
                    <MapPin size={24} className="text-[rgba(12,132,227)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Endereço</h4>
                    <p className="text-[rgba(198,198,207)]">
                      Av. V-8, S/N - Quadra 30, Lote 21<br />
                      Mansões Paraíso<br />
                      Aparecida de Goiânia - GO<br />
                      CEP: 74952-560
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgba(12,132,227,0.2)] rounded-lg flex items-center justify-center">
                    <Phone size={24} className="text-[rgba(12,132,227)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">WhatsApp</h4>
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgba(198,198,207)] hover:text-[rgba(12,132,227)] transition-colors duration-300"
                    >
                      (62) 98581-1343
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgba(12,132,227,0.2)] rounded-lg flex items-center justify-center">
                    <Mail size={24} className="text-[rgba(12,132,227)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">E-mail</h4>
                    <a
                      href="mailto:torneadora_apgyn@hotmail.com"
                      className="text-[rgba(198,198,207)] hover:text-[rgba(12,132,227)] transition-colors duration-300"
                    >
                      torneadora_apgyn@hotmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgba(12,132,227,0.2)] rounded-lg flex items-center justify-center">
                    <Clock size={24} className="text-[rgba(12,132,227)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Horário de Atendimento</h4>
                    <p className="text-[rgba(198,198,207)]">
                      Segunda a Sexta<br />
                      07:00 às 11:15 | 12:15 às 17:00
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgba(12,132,227,0.2)] rounded-lg flex items-center justify-center">
                    <Instagram size={24} className="text-[rgba(12,132,227)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Instagram</h4>
                    <a
                      href={INSTAGRAM}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgba(198,198,207)] hover:text-[rgba(12,132,227)] transition-colors duration-300"
                    >
                      @tap_metal
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] backdrop-blur-sm border border-[rgba(198,198,207,0.1)] rounded-2xl p-2 h-[300px]">
              <iframe
                src="https://maps.google.com/maps?q=Av.%20V-8%2C%20Mans%C3%B5es%20Para%C3%ADso%2C%20Aparecida%20de%20Goi%C3%A2nia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização TAP Metal"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div>
            <div className="bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] backdrop-blur-sm border border-[rgba(198,198,207,0.1)] rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Envie Sua Mensagem</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(198,198,207,0.2)] rounded-lg text-white placeholder-[rgba(198,198,207,0.5)] focus:outline-none focus:border-[rgba(12,132,227)] transition-colors duration-300"
                    placeholder="Digite seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(198,198,207,0.2)] rounded-lg text-white placeholder-[rgba(198,198,207,0.5)] focus:outline-none focus:border-[rgba(12,132,227)] transition-colors duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(198,198,207,0.2)] rounded-lg text-white placeholder-[rgba(198,198,207,0.5)] focus:outline-none focus:border-[rgba(12,132,227)] transition-colors duration-300"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(198,198,207,0.2)] rounded-lg text-white placeholder-[rgba(198,198,207,0.5)] focus:outline-none focus:border-[rgba(12,132,227)] transition-colors duration-300 resize-none"
                    placeholder="Conte-nos sobre seu projeto..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[rgba(12,132,227)] hover:bg-[rgba(12,132,227,0.9)] text-white px-8 py-4 rounded-lg transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  Enviar via WhatsApp
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
