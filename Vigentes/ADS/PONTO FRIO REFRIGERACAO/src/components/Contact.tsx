import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.%0A%0ATelefone: ${formData.phone}%0A%0AMensagem: ${formData.message}`;
    window.open(`https://wa.me/556332152711?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#082432] mb-4">
            Entre em <span className="text-[#166188]">Contato</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender você. Visite nossa loja ou entre em contato agora mesmo!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#166188] to-[#6ed2e1] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#082432] mb-2">Endereço</h3>
                  <p className="text-gray-600">
                    ACSE 11 Rua SE 7 (QUADRA 104 SUL), 09<br />
                    Plano Diretor Sul - Palmas, TO
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#166188] to-[#6ed2e1] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#082432] mb-2">Telefones</h3>
                  <p className="text-gray-600">
                    <a href="tel:6332152711" className="hover:text-[#166188] transition-colors">
                      (63) 3215-2711 (WhatsApp)
                    </a>
                    <br />
                    <a href="tel:6332158217" className="hover:text-[#166188] transition-colors">
                      (63) 3215-8217
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#166188] to-[#6ed2e1] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#082432] mb-2">Email</h3>
                  <a
                    href="mailto:kipontofrio@yahoo.com.br"
                    className="text-gray-600 hover:text-[#166188] transition-colors"
                  >
                    kipontofrio@yahoo.com.br
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#166188] to-[#6ed2e1] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#082432] mb-2">Horário de Funcionamento</h3>
                  <p className="text-gray-600">
                    Segunda a Sábado<br />
                    Horário Comercial
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#082432] mb-6">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[#082432] mb-2">
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#166188] focus:outline-none transition-colors"
                  placeholder="Digite seu nome"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-[#082432] mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#166188] focus:outline-none transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-[#082432] mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#166188] focus:outline-none transition-colors resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#166188] to-[#6ed2e1] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.4925!2d-48.3536!3d-10.2153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDEyJzU1LjEiUyA0OMKwMjEnMTMuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
