import { useState, useEffect, useRef } from 'react';
import { Send, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    petName: '',
    animalType: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
Olá! Gostaria de agendar uma consulta.

*Nome do Tutor:* ${formData.name}
*Telefone:* ${formData.phone}
*Email:* ${formData.email}
*Nome do Pet:* ${formData.petName || 'Não informado'}
*Tipo de Animal:* ${formData.animalType || 'Não informado'}

*Mensagem:*
${formData.message || 'Sem mensagem adicional'}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5561992486998?text=${encodedMessage}`, '_blank');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }

    setFormData({ ...formData, phone: value });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-4">
            Agende Sua Consulta
          </h2>
          <p className="text-lg text-secondary-dark/70">
            Preencha o formulário ou entre em contato diretamente
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div
            className={`lg:col-span-3 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    Nome do Tutor *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-pastel-pink rounded-xl focus:border-primary focus:outline-none transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="w-full px-4 py-3 border-2 border-pastel-pink rounded-xl focus:border-primary focus:outline-none transition-colors"
                    placeholder="(61) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-pastel-pink rounded-xl focus:border-primary focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    Nome do Pet
                  </label>
                  <input
                    type="text"
                    value={formData.petName}
                    onChange={(e) =>
                      setFormData({ ...formData, petName: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-pastel-pink rounded-xl focus:border-primary focus:outline-none transition-colors"
                    placeholder="Nome do seu pet"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    Tipo de Animal
                  </label>
                  <select
                    value={formData.animalType}
                    onChange={(e) =>
                      setFormData({ ...formData, animalType: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-pastel-pink rounded-xl focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Selecione</option>
                    <option value="Cão">Cão</option>
                    <option value="Gato">Gato</option>
                    <option value="Ave">Ave</option>
                    <option value="Réptil">Réptil</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  Mensagem / Motivo da Consulta
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-pastel-pink rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Descreva o motivo da consulta ou dúvidas"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-off-white rounded-2xl p-6 border-l-4 border-primary">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-2">Telefone</h4>
                  <a
                    href="tel:+5561992486998"
                    className="text-primary hover:text-primary-light font-semibold transition-colors"
                  >
                    (61) 99248-6998
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-off-white rounded-2xl p-6 border-l-4 border-primary">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-2">Email</h4>
                  <a
                    href="mailto:consultvetmelina@gmail.com"
                    className="text-primary hover:text-primary-light font-semibold transition-colors break-all"
                  >
                    consultvetmelina@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-off-white rounded-2xl p-6 border-l-4 border-primary">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-3">Horários</h4>
                  <div className="space-y-2 text-sm text-secondary-dark/70">
                    <p>Seg-Qui: 09:00 - 18:00</p>
                    <p>Sexta: 10:00 - 18:00</p>
                    <p>Sábado: 09:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5561992486998"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-primary to-primary-light text-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">WhatsApp</h4>
                  <p className="text-white/90 text-sm">
                    Fale conosco agora
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
