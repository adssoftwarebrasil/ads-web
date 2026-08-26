import { useState } from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Nome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nMensagem: ${formData.message}`;
    window.open(`https://wa.me/5563984274000?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      label: 'WhatsApp',
      value: '(63) 98427-4000',
      link: 'https://wa.me/5563984274000'
    },
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'redeconsigoficial@gmail.com',
      link: 'mailto:redeconsigoficial@gmail.com'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Endereço',
      value: '104 Norte Rua NE 05 LT 46 Sala 11/12 – Spazio Empresarial, Palmas - TO',
      link: null
    },
    {
      icon: <Instagram size={24} />,
      label: 'Instagram',
      value: '@redeconsig',
      link: 'https://instagram.com/redeconsig'
    }
  ];

  return (
    <section id="contato" className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="text-[#f88601] text-sm font-semibold tracking-widest uppercase mb-4">
              Contato
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#eb6601] mb-8">
              Dúvidas ou sugestões
            </h2>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f88601] bg-opacity-10 flex items-center justify-center text-[#f88601]">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-[#666666] mb-1">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1a1a1a] font-medium hover:text-[#f88601] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[#1a1a1a] font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <img
              src="https://storage.lucasmendes.dev/site-sp/redeconsig%2Fcliente-apertando-m%C3%A3o-de-atendenete.jpg"
              alt="Atendimento"
              className="rounded-2xl shadow-lg w-full max-w-md"
            />
          </div>

          <div className="lg:col-span-3 animate-fade-in-up-delay">
            <div className="bg-[#f9f4ee] p-8 md:p-12 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-[#af9485] rounded-lg focus:border-[#f88601] focus:outline-none transition-colors text-[#1a1a1a]"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-[#af9485] rounded-lg focus:border-[#f88601] focus:outline-none transition-colors text-[#1a1a1a]"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-[#af9485] rounded-lg focus:border-[#f88601] focus:outline-none transition-colors text-[#1a1a1a]"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white border-2 border-[#af9485] rounded-lg focus:border-[#f88601] focus:outline-none transition-colors text-[#1a1a1a] resize-none"
                    placeholder="Como podemos ajudar?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gradient-orange text-white py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
