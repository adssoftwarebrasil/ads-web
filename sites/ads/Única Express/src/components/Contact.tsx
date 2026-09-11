import { useState, type FormEvent } from 'react';
import { Clock, Phone, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Nome: ${name}%0AEmail: ${email}%0AMensagem: ${message}`;
    window.open(`https://wa.me/5562998549294?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[rgb(0,38,100)] mb-4">
                Você está optando por uma parceria <span className="text-[rgb(38,129,196)]">Confiável</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Entre em contato conosco e descubra como podemos atender às suas necessidades de forma personalizada e eficiente.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[rgb(38,129,196)]">
                <div className="bg-[rgb(38,129,196)]/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-[rgb(38,129,196)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[rgb(0,38,100)] text-lg mb-2">Horário de Atendimento</h3>
                  <p className="text-gray-700 flex items-center gap-2"><span className="font-semibold">Segunda a Sexta:</span> 8h às 18h</p>
                  <p className="text-gray-700 flex items-center gap-2"><span className="font-semibold">Sábado:</span> 8h às 14h</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[rgb(38,129,196)]">
                <div className="bg-[rgb(38,129,196)]/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-[rgb(38,129,196)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[rgb(0,38,100)] text-lg mb-2">Telefones para Contato</h3>
                  <a href="https://wa.me/5562998549294" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[rgb(38,129,196)] transition-colors flex items-center gap-2">
                    <span className="font-semibold">WhatsApp:</span> (62) 99854-9294
                  </a>
                  <a href="tel:+556232414042" className="text-gray-700 hover:text-[rgb(38,129,196)] transition-colors flex items-center gap-2">
                    <span className="font-semibold">Fixo:</span> (62) 3241-4042
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[rgb(38,129,196)]">
                <div className="bg-[rgb(38,129,196)]/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[rgb(38,129,196)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[rgb(0,38,100)] text-lg mb-2">Matriz - Goiânia</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Rua C-34, Qd. 14, Lote 01, Nº 18<br />Setor Jardim América<br />CEP: 74.265-240 - Goiânia/GO
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[rgb(38,129,196)]">
                <div className="bg-[rgb(38,129,196)]/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[rgb(38,129,196)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[rgb(0,38,100)] text-lg mb-2">Filial - Rio Verde</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Av. Pedro Ludovico Teixeira, 351 - Sala 3<br />Jardim Brasília<br />CEP: 75900-179 - Rio Verde/GO
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 sticky top-24">
              <h3 className="text-2xl md:text-3xl font-bold text-[rgb(0,38,100)] mb-2">Envie sua Mensagem</h3>
              <p className="text-gray-600 mb-6">Responderemos o mais breve possível</p>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nome Completo *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg p-4 focus:border-[rgb(38,129,196)] focus:outline-none focus:ring-2 focus:ring-[rgb(38,129,196)]/20 transition-all"
                    placeholder="Digite seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg p-4 focus:border-[rgb(38,129,196)] focus:outline-none focus:ring-2 focus:ring-[rgb(38,129,196)]/20 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Mensagem *</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg p-4 focus:border-[rgb(38,129,196)] focus:outline-none focus:ring-2 focus:ring-[rgb(38,129,196)]/20 transition-all resize-none"
                    placeholder="Como podemos ajudá-lo?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[rgb(38,129,196)] text-white py-4 rounded-lg font-bold text-lg hover:bg-[rgb(28,109,176)] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                >
                  <WhatsAppIcon className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Enviar via WhatsApp
                </button>
              </form>
              <p className="text-gray-500 text-sm text-center mt-4">Ao enviar, você será redirecionado ao WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
