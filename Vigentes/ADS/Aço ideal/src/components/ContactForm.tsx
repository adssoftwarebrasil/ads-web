import { useState } from 'react';
import { Send, MapPin, Phone, MessageCircle, Clock, Mail, Facebook, Instagram } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.whatsapp) {
      alert('Por favor, preencha os campos obrigatórios: Nome e WhatsApp');
      return;
    }

    const message = `Olá! Meu nome é ${formData.nome}.%0AWhatsApp: ${formData.whatsapp}%0AEmail: ${formData.email}%0AAssunto: ${formData.assunto}%0AMensagem: ${formData.mensagem}`;

    window.open(`https://wa.me/5531986801584?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[rgb(238,51,52)] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(70,70,70)] mb-3">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600">
            Estamos prontos para atender você
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form - 3 columns */}
          <div className="lg:col-span-3">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-gray-700 font-medium mb-1.5 text-sm">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(238,51,52)] focus:border-transparent transition-all"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block text-gray-700 font-medium mb-1.5 text-sm">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(238,51,52)] focus:border-transparent transition-all"
                      placeholder="(31) 99999-9999"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1.5 text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(238,51,52)] focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="assunto" className="block text-gray-700 font-medium mb-1.5 text-sm">
                      Assunto
                    </label>
                    <input
                      type="text"
                      id="assunto"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(238,51,52)] focus:border-transparent transition-all"
                      placeholder="Orçamento, dúvida..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-gray-700 font-medium mb-1.5 text-sm">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={3}
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(238,51,52)] focus:border-transparent resize-none transition-all"
                    placeholder="Descreva o que você precisa..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[rgb(238,51,52)] text-white py-3 rounded-lg font-semibold hover:scale-[1.02] transition-transform shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Enviar pelo WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info - 2 columns */}
          <div className="lg:col-span-2 space-y-3">
            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[rgb(238,51,52)]/10 rounded-lg flex-shrink-0">
                  <MapPin size={20} className="text-[rgb(238,51,52)]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[rgb(70,70,70)] mb-1">Endereço</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Rua Presidente Costa e Silva, 60<br />
                    Indústrias I (Barreiro)<br />
                    Belo Horizonte - MG, 30610-000
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[rgb(238,51,52)]/10 rounded-lg flex-shrink-0">
                  <Phone size={20} className="text-[rgb(238,51,52)]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[rgb(70,70,70)] mb-1">Telefone</h3>
                  <a href="tel:3133335156" className="text-gray-600 hover:text-[rgb(238,51,52)] transition-colors text-sm font-medium">
                    (31) 3333-5156
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[rgb(238,51,52)]/10 rounded-lg flex-shrink-0">
                  <MessageCircle size={20} className="text-[rgb(238,51,52)]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[rgb(70,70,70)] mb-1">WhatsApp</h3>
                  <a href="https://wa.me/5531986801584" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[rgb(238,51,52)] transition-colors text-sm font-medium">
                    (31) 98680-1584
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[rgb(238,51,52)]/10 rounded-lg flex-shrink-0">
                  <Clock size={20} className="text-[rgb(238,51,52)]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[rgb(70,70,70)] mb-1">Horário</h3>
                  <p className="text-gray-600 text-sm">
                    Seg-Sex: 08h - 17:20h<br />
                    Sábado: 08h - 12h
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[rgb(238,51,52)]/10 rounded-lg flex-shrink-0">
                  <Mail size={20} className="text-[rgb(238,51,52)]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[rgb(70,70,70)] mb-1">Email</h3>
                  <a href="mailto:acosidealfinanceiro@gmail.com" className="text-gray-600 hover:text-[rgb(238,51,52)] transition-colors text-sm font-medium break-all">
                    acosidealfinanceiro@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-[rgb(63,63,152)] to-[rgb(238,51,52)] p-4 rounded-xl shadow-md">
              <h3 className="font-bold text-white mb-3 text-sm">Redes Sociais</h3>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/acosideal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-lg transition-all flex items-center justify-center gap-2 text-white"
                >
                  <Facebook size={18} />
                  <span className="text-xs font-medium">Facebook</span>
                </a>
                <a 
                  href="https://www.instagram.com/acosidealltda/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-lg transition-all flex items-center justify-center gap-2 text-white"
                >
                  <Instagram size={18} />
                  <span className="text-xs font-medium">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}