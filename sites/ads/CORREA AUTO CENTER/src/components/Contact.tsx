import { useState, type FormEvent } from 'react';
import { Send, Phone, Instagram, MapPin, Clock, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Gostaria de solicitar um orçamento.%0A%0A*Nome:* ${formData.name}%0A*Telefone:* ${formData.phone}%0A*Veículo:* ${formData.vehicle}%0A*Mensagem:* ${formData.message}`;
    window.open(`http://wa.me/556699535234?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Entre em <span className="text-[rgb(207,30,37)]">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender você. Agende seu serviço ou tire suas dúvidas.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-black mb-6">Solicite um Orçamento</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(207,30,37)] focus:outline-none transition-colors duration-300"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(207,30,37)] focus:outline-none transition-colors duration-300"
                    placeholder="(66) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="vehicle" className="block text-gray-700 font-semibold mb-2">
                    Veículo *
                  </label>
                  <input
                    type="text"
                    id="vehicle"
                    name="vehicle"
                    required
                    value={formData.vehicle}
                    onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(207,30,37)] focus:outline-none transition-colors duration-300"
                    placeholder="Ex: Honda Civic 2020"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(207,30,37)] focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Descreva o serviço que precisa..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[rgb(207,30,37)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(187,20,27)] transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Enviar via WhatsApp</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <a
                href="http://wa.me/556699535234"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[rgb(207,30,37)] group"
              >
                <Phone className="w-8 h-8 text-[rgb(207,30,37)] mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-bold text-black mb-2">Telefone/WhatsApp</h4>
                <p className="text-gray-600">(66) 99953-5234</p>
              </a>
              <a
                href="https://www.instagram.com/correa_auto_center/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[rgb(207,30,37)] group"
              >
                <Instagram className="w-8 h-8 text-[rgb(207,30,37)] mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-bold text-black mb-2">Instagram</h4>
                <p className="text-gray-600">@correa_auto_center</p>
              </a>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-black mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[rgb(207,30,37)] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-black mb-1">Endereço</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Av. dos Pinheiros, 2221A - Jardim das Violetas
                      <br />
                      Sinop - MT, 78552-214
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-[rgb(207,30,37)] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-black mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-600">Segunda a Sexta</p>
                    <p className="text-gray-600">7:00 às 11:30 | 13:00 às 17:30</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-[rgb(207,30,37)] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-black mb-1">E-mail</h4>
                    <p className="text-gray-600">santoscorreanarcizo@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.0832703885744!2d-55.51116322494234!3d-11.829441688390691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a78168b5fb3cf3%3A0x7b549cc8c84ec4c1!2sCORREA%20AUTO%20CENTER!5e0!3m2!1spt-BR!2sbr!4v1770122477304!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Correa Auto Center"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
