import { useState, useEffect, useRef } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    setIsSubmitting(true);

    // Simula um pequeno delay para melhor UX
    await new Promise(resolve => setTimeout(resolve, 800));

    const whatsappMessage = `Olá, acabei de visitar o seu site e gostaria de mais informações.

Nome: ${formData.name}
Telefone: ${formData.phone}
E-mail: ${formData.email}

Mensagem: ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/5562981369983?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setFormData({ name: '', phone: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefone',
      value: '(62) 98136-9983',
      href: 'tel:+5562981369983',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'lih.durmabem@gmail.com',
      href: 'mailto:lih.durmabem@gmail.com',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MapPin,
      label: 'Endereço',
      value: 'Rua 90 N° 352, Setor Sul',
      subValue: 'Goiânia - GO, CEP 74093-020',
      href: 'https://maps.google.com/?q=Rua+90+N352+Setor+Sul+Goiania+GO',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contato" 
      className="relative py-20 md:py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 backdrop-blur-sm border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold tracking-wide uppercase">
              Pronto para Transformar Seu Sono?
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h2>

          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
            Nossa equipe está pronta para te atender e encontrar a solução perfeita para o seu sono
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Form Column - Takes 3 columns */}
          <div 
            className={`lg:col-span-3 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="text-gray-700 font-semibold mb-2 block text-left text-sm">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="João da Silva"
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-gray-900 placeholder:text-gray-400"
                  />
                </div>

                {/* Phone and Email in Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-gray-700 font-semibold mb-2 block text-left text-sm">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(62) 98765-4321"
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-gray-900 placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 font-semibold mb-2 block text-left text-sm">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="text-gray-700 font-semibold mb-2 block text-left text-sm">
                    Mensagem *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Conte-nos sobre suas necessidades de sono e como podemos ajudá-lo..."
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none text-gray-900 placeholder:text-gray-400"
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="group relative w-full py-4 bg-primary hover:bg-primary-hover text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-hover to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin relative z-10" />
                      <span className="relative z-10">Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                      <span className="relative z-10">Enviar via WhatsApp</span>
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-500">
                  Ao enviar, você será redirecionado para o WhatsApp
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info Column - Takes 2 columns */}
          <div 
            className={`lg:col-span-2 space-y-6 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-gradient-to-br from-primary to-primary-hover p-8 rounded-3xl text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-3">Fale Diretamente Conosco</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Estamos disponíveis para atendê-lo e esclarecer todas as suas dúvidas.
              </p>
              
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <p className="text-sm">Resposta em até 24 horas</p>
              </div>
            </div>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <div className="group bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-gray-500 text-sm font-medium mb-2">{info.label}</p>
                  <p className="text-gray-900 font-bold text-sm leading-snug break-words">{info.value}</p>
                  {info.subValue && (
                    <p className="text-gray-600 text-xs mt-1.5 leading-snug">{info.subValue}</p>
                  )}
                </div>
              );

              return info.href ? (
                <a 
                  key={index} 
                  href={info.href}
                  target={info.icon === MapPin ? '_blank' : undefined}
                  rel={info.icon === MapPin ? 'noopener noreferrer' : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;