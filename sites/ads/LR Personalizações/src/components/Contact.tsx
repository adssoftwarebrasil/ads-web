import { useState } from 'react';
import { MapPin, Phone, Clock, Instagram, Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${name}.\n` +
      `Telefone/WhatsApp: ${phone}\n` +
      (email ? `E-mail: ${email}\n` : '') +
      `Mensagem: ${message}`;
    window.open(`https://wa.me/5562985597671?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(203,13,13)]/10 text-[rgb(203,13,13)] px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold uppercase tracking-wider">Contato</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(0,33,78)] mb-6">Vamos Criar Algo Incrível Juntos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos valorizar sua marca
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-[rgb(0,33,78)] to-[rgb(0,50,120)] rounded-2xl p-8 text-white mb-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[rgb(203,13,13)] p-3 rounded-lg flex-shrink-0">
                    <MapPin width={24} height={24} className="lucide lucide-map-pin " />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Endereço</h4>
                    <p className="text-gray-200">R. Sete, 847 - Quadra K1, Lote 18</p>
                    <p className="text-gray-200">Vila Pedroso, Goiânia - GO, 74000-000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[rgb(203,13,13)] p-3 rounded-lg flex-shrink-0">
                    <Phone width={24} height={24} className="lucide lucide-phone " />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefones</h4>
                    <p className="text-gray-200">(62) 3206-5937</p>
                    <p className="text-gray-200">(62) 98559-7671</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[rgb(203,13,13)] p-3 rounded-lg flex-shrink-0">
                    <Clock width={24} height={24} className="lucide lucide-clock " />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-200">Segunda a Quinta: 08:00 - 12:00 | 13:00 - 18:00</p>
                    <p className="text-gray-200">Sexta: 08:00 - 12:00 | 13:00 - 17:00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[rgb(203,13,13)] p-3 rounded-lg flex-shrink-0">
                    <Instagram width={24} height={24} className="lucide lucide-instagram " />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Redes Sociais</h4>
                    <a
                      href="https://www.instagram.com/lrpersonalizacoesoficial/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-200 hover:text-white transition-colors"
                    >
                      @lrpersonalizacoesoficial
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.3586385135613!2d-49.18148532485141!3d-16.658927384109344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935eef4cf4815e91%3A0x7410ee3216edec2a!2sLR%20Personaliza%C3%A7%C3%B5es%20Embalagens!5e0!3m2!1spt-BR!2sbr!4v1768848374752!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização LR Personalizações"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-[rgb(0,33,78)] mb-6">Envie Sua Mensagem</h3>
              <div className="space-y-6">
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(203,13,13)] focus:ring-2 focus:ring-[rgb(203,13,13)]/20 outline-none transition-all"
                    placeholder="Seu nome"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(203,13,13)] focus:ring-2 focus:ring-[rgb(203,13,13)]/20 outline-none transition-all"
                    placeholder="(62) 98888-8888"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(203,13,13)] focus:ring-2 focus:ring-[rgb(203,13,13)]/20 outline-none transition-all"
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
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(203,13,13)] focus:ring-2 focus:ring-[rgb(203,13,13)]/20 outline-none transition-all resize-none"
                    placeholder="Conte-nos sobre seu projeto..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[rgb(203,13,13)] text-white px-8 py-4 rounded-full hover:bg-[rgb(180,11,11)] transition-all duration-300 font-semibold text-lg shadow-xl hover:scale-105 flex items-center justify-center space-x-2 group"
                >
                  <span>Enviar Mensagem</span>
                  <Send
                    width={20}
                    height={20}
                    className="lucide lucide-send group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <p className="text-sm text-gray-500 text-center">
                  Ao enviar, você será redirecionado para o WhatsApp com sua mensagem
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
