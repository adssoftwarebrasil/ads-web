import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.%0A%0AE-mail: ${email}%0ATelefone: ${phone}%0AServiço de interesse: ${service}%0A%0AMensagem: ${message}`;
    window.open(`https://wa.me/5595991507264?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-16 lg:py-24 bg-gradient-to-b from-holanda-green/5 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-holanda-green/10 text-holanda-green px-4 py-2 rounded-full text-sm font-medium mb-4">
            Contato
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-holanda-gray mb-4">
            Solicite Seu Orçamento
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entre em contato e descubra como podemos ajudar sua empresa
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-holanda-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-holanda-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-holanda-gray mb-1">Endereço</h3>
                  <p className="text-gray-600">
                    Rua Uraricuera, 1462 - São Vicente
                    <br />
                    Boa Vista - RR
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-holanda-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-holanda-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-holanda-gray mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/5595991507264"
                    className="text-gray-600 hover:text-holanda-green transition-colors"
                  >
                    +55 95 99150-7264
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-holanda-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-holanda-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-holanda-gray mb-1">E-mail</h3>
                  <a
                    href="mailto:holandatranslog.rr@gmail.com"
                    className="text-gray-600 hover:text-holanda-green transition-colors"
                  >
                    holandatranslog.rr@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-holanda-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-holanda-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-holanda-gray mb-1">Horário</h3>
                  <p className="text-gray-600">
                    Segunda a Sexta: 8h às 18h
                    <br />
                    Sábado: 9h às 12h
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-holanda-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Instagram size={24} className="text-holanda-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-holanda-gray mb-1">Instagram</h3>
                  <a
                    href="https://instagram.com/holandatransportesrr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-holanda-green transition-colors"
                  >
                    @holandatransportesrr
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-holanda-gray mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-holanda-green focus:border-transparent transition-all outline-none"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-holanda-gray mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-holanda-green focus:border-transparent transition-all outline-none"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-holanda-gray mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-holanda-green focus:border-transparent transition-all outline-none"
                  placeholder="(95) 99999-9999"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-holanda-gray mb-2">
                  Serviço de Interesse *
                </label>
                <select
                  id="service"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-holanda-green focus:border-transparent transition-all outline-none"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Transporte de Cargas">Transporte de Cargas</option>
                  <option value="Container 20 Pés">Container 20 Pés</option>
                  <option value="Container 40 Pés">Container 40 Pés</option>
                  <option value="Armazenagem">Armazenagem</option>
                  <option value="Aluguel de Energia">Aluguel de Energia</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-holanda-gray mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-holanda-green focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Descreva sua necessidade..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-holanda-green text-white px-6 py-4 rounded-lg hover:bg-holanda-dark transition-all duration-300 font-medium text-lg flex items-center justify-center gap-2 hover:scale-105"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Enviar Mensagem via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
