import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Olá! Meu nome é ${formData.name}.

📧 Email: ${formData.email}
📱 Telefone: ${formData.phone}

Mensagem:
${formData.message}`;

    const whatsappUrl = `https://wa.me/5566999029696?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Avenida dos Jacarandás, 640',
      subtitle: 'Jardim Jacarandás, Sinop-MT, 78557-727',
      color: 'text-[#0b77aa]',
      bg: 'bg-[#0b77aa]'
    },
    {
      icon: Phone,
      title: 'Telefones',
      content: '(66) 3515-0909 | (66) 99902-9696',
      subtitle: '(66) 3531-1818',
      color: 'text-[#b13437]',
      bg: 'bg-[#b13437]'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'gledson@superfixmt.com.br',
      subtitle: 'Atendimento especializado',
      color: 'text-[#0b77aa]',
      bg: 'bg-[#0b77aa]'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Segunda a Sexta: 7h30 - 18h',
      subtitle: 'Sábado: 7h30 - 12h',
      color: 'text-[#b13437]',
      bg: 'bg-[#b13437]'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-[#0b77aa]">Contato</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa equipe está pronta para atender você. Entre em contato por telefone, WhatsApp ou
            preencha o formulário abaixo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envie sua Mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b77aa] focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b77aa] focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b77aa] focus:border-transparent outline-none transition-all"
                    placeholder="(66) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b77aa] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Como podemos ajudar você?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0b77aa] to-[#095f88] text-white px-6 py-4 rounded-lg hover:shadow-xl transition-all font-medium text-lg"
                >
                  <Send size={20} />
                  Enviar Mensagem via WhatsApp
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className={`${info.bg} bg-opacity-10 w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <info.icon className={info.color} size={24} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{info.title}</h4>
                  <p className="text-sm text-gray-700 font-medium">{info.content}</p>
                  <p className="text-xs text-gray-500 mt-1">{info.subtitle}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#0b77aa] to-[#095f88] rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Siga-nos nas Redes Sociais</h4>
              <p className="mb-6 opacity-90">
                Fique por dentro das novidades, promoções e dicas sobre ferramentas e fixação.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/supersfixmatogrosso/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-lg transition-all backdrop-blur-sm"
                >
                  <Instagram size={20} />
                  <span className="font-medium">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/superfixmt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-lg transition-all backdrop-blur-sm"
                >
                  <Facebook size={20} />
                  <span className="font-medium">Facebook</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.3286414111303!2d-55.50413119999999!3d-11.882188699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77fc4c83712b7%3A0x356ca560910794f4!2sSUPERFIX%20JACARAND%C3%81S!5e0!3m2!1spt-BR!2sbr!4v1769666795576!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização SUPERFIX"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
