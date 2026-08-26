import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/5562981874429?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A472A] mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-[#333333] max-w-2xl mx-auto">
            Estamos prontos para atender sua empresa. Fale conosco e descubra como podemos ajudar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-[#1A472A] mb-6">Informações de Contato</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-[#8BC34A] p-3 rounded-lg mr-4">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A472A] mb-1">Telefone/WhatsApp</h4>
                  <p className="text-[#333333]">(62) 98187-4429</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#8BC34A] p-3 rounded-lg mr-4">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A472A] mb-1">Email</h4>
                  <p className="text-[#333333]">contato@planusambiental.com.br</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#8BC34A] p-3 rounded-lg mr-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A472A] mb-1">Localização</h4>
                  <p className="text-[#333333]">Norte de Goiás</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1A472A] to-[#2d5e42] p-8 rounded-2xl text-white mb-8">
              <h4 className="text-xl font-semibold mb-4">Horário de Atendimento</h4>
              <p className="mb-2">Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.3468792106282!2d-48.4640692!3d-14.464760199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef3d90426e4e9%3A0x5796378c25c9e1c1!2sPLANUS%20AMBIENTAL%20LTDA!5e0!3m2!1spt-PT!2sbr!4v1759933403286!5m2!1spt-PT!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização PLANUS AMBIENTAL LTDA"
              />
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-[#1A472A] mb-6">Envie sua Mensagem</h3>

              <div className="mb-4">
                <label htmlFor="name" className="block text-[#333333] font-medium mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BC34A] transition-all"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-[#333333] font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BC34A] transition-all"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-[#333333] font-medium mb-2">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BC34A] transition-all"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-[#333333] font-medium mb-2">Mensagem</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BC34A] transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1A472A] text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-[#8BC34A] transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center"
              >
                Enviar Mensagem
                <Send className="ml-2" size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
