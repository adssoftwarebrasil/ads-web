import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const whatsappMessage = `Olá! Gostaria de mais informações.

*Nome:* ${formData.name}
*Email:* ${formData.email || 'Não informado'}
*Telefone:* ${formData.phone}
*Mensagem:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    // Link atualizado com o WhatsApp correto
    window.open(`https://wa.me/5562993950049?text=${encodedMessage}`, '_blank');

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-gradient-to-br from-[#010510] via-[#1a1a2e] to-[#010510] relative overflow-hidden border-t border-[#00a6ff]/10">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #00a6ff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Entre em Contato
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Estamos prontos para atender você
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-8">
            <div className="bg-[#1a1a2e]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#00a6ff]/30">
              <h3 className="text-2xl font-bold text-white mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                {/* Endereço Atualizado */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#fff457] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#010510]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Endereço</h4>
                    <p className="text-gray-300">
                      Rua 4, nº 116<br />
                      Setor Central, Goiânia - GO
                    </p>
                  </div>
                </div>

                {/* Telefones Atualizados */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#fff457] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#010510]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Telefones</h4>
                    <p className="text-gray-300">
                      (62) 3212-4134<br />
                      (62) 3212-9597<br />
                      (62) 99395-0049 (WhatsApp)
                    </p>
                  </div>
                </div>

                {/* Email Atualizado */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#fff457] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#010510]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">
                      showluzgyn@hotmail.com
                    </p>
                  </div>
                </div>

                {/* Horário Atualizado */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#fff457] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#010510]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-300">
                      Segunda à Sexta: 07:45 às 17:40<br />
                      Sábado: 07:45 às 12:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#00a6ff]/20">
                <h4 className="font-semibold text-white mb-4">Redes Sociais</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/showluzgoiania/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#00a6ff]/20 hover:bg-[#fff457] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-[#00a6ff]/30"
                  >
                    <Instagram className="w-6 h-6 text-white hover:text-[#010510]" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#00a6ff]/20 hover:bg-[#fff457] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-[#00a6ff]/30"
                  >
                    <Facebook className="w-6 h-6 text-white hover:text-[#010510]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a2e] rounded-2xl p-8 md:p-10 shadow-2xl border border-[#00a6ff]/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              Envie sua Mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-4 border-2 border-[#00a6ff]/30 bg-[#010510] rounded-lg focus:border-[#00a6ff] focus:outline-none transition-colors text-white placeholder-gray-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-4 border-2 border-[#00a6ff]/30 bg-[#010510] rounded-lg focus:border-[#00a6ff] focus:outline-none transition-colors text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-4 border-2 border-[#00a6ff]/30 bg-[#010510] rounded-lg focus:border-[#00a6ff] focus:outline-none transition-colors text-white placeholder-gray-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-4 border-2 border-[#00a6ff]/30 bg-[#010510] rounded-lg focus:border-[#00a6ff] focus:outline-none transition-colors resize-none text-white placeholder-gray-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#fff457] text-[#010510] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#ffe621] transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}