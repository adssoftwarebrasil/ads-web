import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

const services = [
  'Aluguel de Carretinha',
  'Venda de Carretinha',
  'Manutenção',
  'Venda de Engate',
  'Peças e Acessórios',
  'Instalação Elétrica',
  'Outro',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.
Telefone: ${phone}
E-mail: ${email}
Serviço Desejado: ${service}
Mensagem: ${message}`;
    window.open(`https://wa.me/5571986462034?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-[rgb(253,253,253)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(242,150,1)]/10 text-[rgb(242,150,1)] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ENTRE EM CONTATO
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[rgb(25,47,79)] mb-4">Fale Conosco</h2>
          <p className="text-xl text-[rgb(25,47,79)]/70 max-w-3xl mx-auto">
            Estamos prontos para atender você. Entre em contato e solicite seu orçamento
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-[rgb(25,47,79)] mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(242,150,1)]/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[rgb(242,150,1)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[rgb(25,47,79)] mb-1">Endereço</h4>
                    <p className="text-[rgb(25,47,79)]/70">
                      Av. Dr. Manoel Mercês, 980 - Alto da Cruz<br />
                      Camaçari - BA, 42807-380
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(242,150,1)]/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[rgb(242,150,1)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[rgb(25,47,79)] mb-1">Telefone/WhatsApp</h4>
                    <a
                      href="https://wa.me/5571986462034"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgb(242,150,1)] hover:underline"
                    >
                      (71) 98646-2034
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(242,150,1)]/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[rgb(242,150,1)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[rgb(25,47,79)] mb-1">E-mail</h4>
                    <a
                      href="mailto:corujaalugueldecarretinha@gmail.com"
                      className="text-[rgb(242,150,1)] hover:underline break-all"
                    >
                      corujaalugueldecarretinha@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(242,150,1)]/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[rgb(242,150,1)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[rgb(25,47,79)] mb-1">Horário de Funcionamento</h4>
                    <p className="text-[rgb(25,47,79)]/70">
                      Seg - Sex: 08:00 às 17:30<br />
                      Sábado: 08:00 às 13:30
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(242,150,1)]/10 rounded-xl flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-[rgb(242,150,1)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[rgb(25,47,79)] mb-1">Instagram</h4>
                    <a
                      href="https://www.instagram.com/corujacarretinha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgb(242,150,1)] hover:underline"
                    >
                      @corujacarretinha
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.360380454929!2d-38.33373332492828!3d-12.689885387600176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71669f056411f1d%3A0xca2f79492088e182!2sCoruja%20Aluguel%20de%20Carretinha!5e0!3m2!1spt-BR!2sbr!4v1768917403552!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: '0px' }}
                title="Mapa Coruja Aluguel de Carretinha"
              ></iframe>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[rgb(25,47,79)] mb-6">Solicite um Orçamento</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[rgb(25,47,79)] mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-[rgb(253,253,253)] border border-[rgb(25,47,79)]/10 rounded-xl focus:outline-none focus:border-[rgb(242,150,1)] transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[rgb(25,47,79)] mb-2">
                    Telefone/WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-[rgb(253,253,253)] border border-[rgb(25,47,79)]/10 rounded-xl focus:outline-none focus:border-[rgb(242,150,1)] transition-colors"
                    placeholder="(71) 98646-2034"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[rgb(25,47,79)] mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[rgb(253,253,253)] border border-[rgb(25,47,79)]/10 rounded-xl focus:outline-none focus:border-[rgb(242,150,1)] transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-[rgb(25,47,79)] mb-2">
                    Serviço Desejado
                  </label>
                  <select
                    id="service"
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 bg-[rgb(253,253,253)] border border-[rgb(25,47,79)]/10 rounded-xl focus:outline-none focus:border-[rgb(242,150,1)] transition-colors"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[rgb(25,47,79)] mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-[rgb(253,253,253)] border border-[rgb(25,47,79)]/10 rounded-xl focus:outline-none focus:border-[rgb(242,150,1)] transition-colors resize-none"
                    placeholder="Descreva o que você precisa..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[rgb(242,150,1)] text-[rgb(25,47,79)] py-4 rounded-xl font-bold text-lg hover:bg-[rgb(242,150,1)]/90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Enviar via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
