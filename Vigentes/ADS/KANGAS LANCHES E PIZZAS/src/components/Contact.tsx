import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${nome}.%0A` +
      `WhatsApp: ${whatsapp}%0A` +
      `E-mail: ${email}%0A` +
      `Assunto: ${assunto}%0A%0A` +
      `${mensagem}`;
    window.open(
      `https://api.whatsapp.com/send?phone=55556536254300&text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-[#FDF7E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2A2A77] mb-4">Entre em Contato</h2>
          <p className="text-lg md:text-xl text-gray-600">
            Dúvidas ou sugestões? Estamos aqui para ajudar!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#2A2A77] mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF3333] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2A2A77] mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      R. Manoel Ramos Lino, 275
                      <br />
                      Coophamil, Cuiabá - MT
                      <br />
                      CEP: 78040-000
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF3333] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2A2A77] mb-1">Telefone</h4>
                    <a
                      href="tel:6536254300"
                      className="text-gray-600 hover:text-[#FF3333] transition-colors"
                    >
                      (65) 3625-4300
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF3333] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2A2A77] mb-1">E-mail</h4>
                    <a
                      href="mailto:kangaspizzaria@outlook.com"
                      className="text-gray-600 hover:text-[#FF3333] transition-colors break-all"
                    >
                      kangaspizzaria@outlook.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF3333] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2A2A77] mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-600">
                      Segunda a Domingo
                      <br />
                      18h00 - 23h30
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7685.014955535976!2d-56.128548!3d-15.617942!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db20e4bd9c179%3A0x31a0620a4009c3cf!2sKangas%20Lanches%20e%20Pizzas%20-%20Pizzaria!5e0!3m2!1spt-BR!2sus!4v1766249562355!5m2!1spt-BR!2sus"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Kangas"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#2A2A77] mb-6">Envie sua Mensagem</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-[#2A2A77] mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF3333] focus:outline-none focus:ring-2 focus:ring-[#FF3333]/20 transition-all"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-semibold text-[#2A2A77] mb-2"
                >
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF3333] focus:outline-none focus:ring-2 focus:ring-[#FF3333]/20 transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#2A2A77] mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF3333] focus:outline-none focus:ring-2 focus:ring-[#FF3333]/20 transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="assunto" className="block text-sm font-semibold text-[#2A2A77] mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="assunto"
                  required
                  value={assunto}
                  onChange={(e) => setAssunto(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF3333] focus:outline-none focus:ring-2 focus:ring-[#FF3333]/20 transition-all"
                  placeholder="Sobre o que você quer falar?"
                />
              </div>
              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-sm font-semibold text-[#2A2A77] mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  required
                  rows={5}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF3333] focus:outline-none focus:ring-2 focus:ring-[#FF3333]/20 transition-all resize-none"
                  placeholder="Digite sua mensagem aqui..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF3333] hover:bg-[#d01620] text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
              >
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
