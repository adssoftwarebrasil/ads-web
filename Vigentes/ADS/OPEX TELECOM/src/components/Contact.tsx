import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `*Nova Solicitação de Orçamento*%0A%0A*Nome:* ${formData.name}%0A*E-mail:* ${formData.email}%0A*Telefone:* ${formData.phone}%0A*Serviço de Interesse:* ${formData.service}%0A*Mensagem:* ${formData.message}`;

    window.open(`https://wa.me/5562993741022?text=${whatsappMessage}`, '_blank');

    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone / WhatsApp',
      content: '+55 (62) 99374-1022',
      link: 'https://wa.me/5562993741022'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@opextelecom.com.br',
      link: 'mailto:contato@opextelecom.com.br'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Av. C-4 Qd 37 Lt 13/14 Sala 6, Jardim Boa Esperança, Aparecida de Goiânia - GO',
      link: 'https://maps.google.com/?q=Avenida+C-4+Qd+37+Lt+13/14+Sala+6+Jardim+Boa+Esperança+Aparecida+de+Goiânia+GO'
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      content: 'Disponível 24 horas',
      link: null
    }
  ];

  const services = [
    'Internet Corporativa',
    'Instalação e Manutenção de Redes',
    'Segurança Eletrônica',
    'Consultoria para Provedores',
    'Internet para Condomínios',
    'Instalação de Servidores',
    'Outro'
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-[#FF5500] font-semibold text-sm uppercase tracking-wider">
            Entre em Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#393939] mt-4 mb-6">
            Vamos{' '}
            <span className="bg-gradient-to-r from-[#FF5500] to-[#FF6600] bg-clip-text text-transparent">
              Conversar
            </span>{' '}
            Sobre Seu Projeto?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato para entender suas necessidades e apresentar a melhor solução.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in-left">
            <div className="bg-gradient-to-br from-[#FF5500] to-[#FF6600] rounded-3xl p-8 lg:p-10 text-white h-full">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                Informações de Contato
              </h3>
              <p className="text-white/90 mb-8 leading-relaxed">
                Estamos prontos para atender você! Entre em contato por qualquer um dos canais abaixo ou preencha o formulário ao lado.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl group-hover:bg-white/30 transition-all duration-300">
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/90 hover:text-white transition-colors duration-300"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-white/90">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-10 border-t border-white/20">
                <p className="font-semibold mb-4">Siga-nos nas Redes Sociais</p>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/opex_telecom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/opextelecom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-gray-100">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#393939] mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF5500] focus:ring-2 focus:ring-[#FF5500]/20 outline-none transition-all duration-300"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#393939] mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF5500] focus:ring-2 focus:ring-[#FF5500]/20 outline-none transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#393939] mb-2">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF5500] focus:ring-2 focus:ring-[#FF5500]/20 outline-none transition-all duration-300"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-[#393939] mb-2">
                    Serviço de Interesse *
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF5500] focus:ring-2 focus:ring-[#FF5500]/20 outline-none transition-all duration-300 bg-white"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#393939] mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF5500] focus:ring-2 focus:ring-[#FF5500]/20 outline-none transition-all duration-300 resize-none"
                    placeholder="Conte-nos mais sobre suas necessidades..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF5500] to-[#FF6600] text-white px-8 py-4 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg group"
                >
                  Enviar Mensagem
                  <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pré-preenchida.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
