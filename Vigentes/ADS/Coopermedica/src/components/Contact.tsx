import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Send, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Olá! Vim pelo site da Coopermédica.

Nome: ${formData.name}
Telefone: ${formData.phone}
Email: ${formData.email}
Serviço: ${formData.service}
Mensagem: ${formData.message}`;

    const whatsappUrl = `https://wa.me/5545988038430?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="bg-gradient-to-br from-purple-dark to-purple-light py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-white space-y-8 animate-fade-in-left">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Entre em Contato
              </h2>
              <p className="text-xl text-white/90">
                Estamos prontos para atender você
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Telefone/WhatsApp</h3>
                  <a href="tel:+5545988038430" className="text-white/90 hover:text-white transition-colors">
                    (45) 98803-8430
                  </a>
                  <br />
                  <a href="tel:+554535721961" className="text-white/90 hover:text-white transition-colors">
                    (45) 3572-1961
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">E-mail</h3>
                  <a href="mailto:coopermedica423@gmail.com" className="text-white/90 hover:text-white transition-colors">
                    coopermedica423@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Endereço</h3>
                  <p className="text-white/90">
                    Rua Xavier da Silva, 423<br />
                    Foz do Iguaçu - PR
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Redes Sociais</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/coopermedicafoz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://facebook.com/coopermedica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envie sua Mensagem
              </h3>

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Serviço de interesse *
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Locação de Ambulância">Locação de Ambulância</option>
                  <option value="Atendimento Domiciliar">Atendimento Domiciliar</option>
                  <option value="Medicina do Trabalho">Medicina do Trabalho</option>
                  <option value="Remoção/Emergência">Remoção/Emergência</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emergency text-white px-8 py-4 rounded-lg hover:bg-emergency/90 transition-all hover:shadow-lg font-semibold flex items-center justify-center gap-2 group"
              >
                <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
