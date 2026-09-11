import { useState, FormEvent } from 'react';
import { MapPin, Phone, Clock, Instagram, Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.%0AE-mail: ${email}%0ATelefone: ${phone}%0AMensagem: ${message}`;
    window.open(`http://wa.me/553432321300?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(66,66,66)] mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender suas necessidades. Fale conosco agora!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-[rgb(66,66,66)] mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[rgb(240,186,25)] p-3 rounded-lg flex-shrink-0">
                    <MapPin className="lucide lucide-map-pin text-[rgb(66,66,66)]" width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[rgb(66,66,66)] mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Av. João Leão, 6531<br />Custódio Pereira<br />Uberlândia - MG, 38405-236
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[rgb(240,186,25)] p-3 rounded-lg flex-shrink-0">
                    <Phone className="lucide lucide-phone text-[rgb(66,66,66)]" width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[rgb(66,66,66)] mb-1">Telefone</h4>
                    <a
                      href="tel:+553432321300"
                      className="text-gray-600 hover:text-[rgb(240,186,25)] transition-colors"
                    >
                      (34) 3232-1300
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[rgb(240,186,25)] p-3 rounded-lg flex-shrink-0">
                    <Clock className="lucide lucide-clock text-[rgb(66,66,66)]" width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[rgb(66,66,66)] mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-600">Segunda a Sexta<br />08:00 às 18:00h</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[rgb(240,186,25)] p-3 rounded-lg flex-shrink-0">
                    <Instagram className="lucide lucide-instagram text-[rgb(66,66,66)]" width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[rgb(66,66,66)] mb-1">Instagram</h4>
                    <a
                      href="https://www.instagram.com/romaqempilhadeiras/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[rgb(240,186,25)] transition-colors"
                    >
                      @romaqempilhadeiras
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[rgb(66,66,66)] mb-6">Envie sua Mensagem</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[rgb(66,66,66)] font-semibold mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(240,186,25)] focus:ring-2 focus:ring-[rgb(240,186,25)] focus:ring-opacity-50 outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[rgb(66,66,66)] font-semibold mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(240,186,25)] focus:ring-2 focus:ring-[rgb(240,186,25)] focus:ring-opacity-50 outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[rgb(66,66,66)] font-semibold mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(240,186,25)] focus:ring-2 focus:ring-[rgb(240,186,25)] focus:ring-opacity-50 outline-none transition-all"
                    placeholder="(34) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[rgb(66,66,66)] font-semibold mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(240,186,25)] focus:ring-2 focus:ring-[rgb(240,186,25)] focus:ring-opacity-50 outline-none transition-all resize-none"
                    placeholder="Como podemos ajudar você?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[rgb(240,186,25)] text-[rgb(66,66,66)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(220,166,5)] transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  Enviar via WhatsApp
                  <Send className="lucide lucide-send" width={20} height={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.688137258874!2d-48.240780924799004!3d-18.900911482267897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445eb73fb849f%3A0x39c89e5a7d84177f!2sRomaqui%20Empilhadeiras!5e0!3m2!1spt-BR!2sbr!4v1770232780071!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Romaq Empilhadeiras"
            style={{ border: '0px' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
