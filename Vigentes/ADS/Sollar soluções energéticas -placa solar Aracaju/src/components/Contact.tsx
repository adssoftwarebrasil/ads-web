import { useState } from 'react';
import { Send, Phone, MapPin, Mail, Clock, Instagram, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', message: '' });

  const handleChange = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = () => {
    const text =
      `Olá! Gostaria de solicitar um orçamento.%0A%0A` +
      `*Nome:* ${form.name}%0A` +
      `*E-mail:* ${form.email}%0A` +
      `*Telefone:* ${form.phone}%0A` +
      `*Cidade:* ${form.city}%0A` +
      `*Mensagem:* ${form.message}`;
    window.open(`https://wa.me/5579991174811?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const inputClass =
    'w-full px-4 py-3 border-2 border-gray-200 rounded-lg transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none';

  return (
    <section id="contato" className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right bottom, rgb(15, 30, 60), rgb(20, 40, 80), rgb(15, 30, 60))' }}
      ></div>
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl transform translate-x-1/2 -translate-y-1/2"
        style={{ backgroundColor: 'rgb(255, 69, 0)' }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl transform -translate-x-1/2 translate-y-1/2"
        style={{ backgroundColor: 'rgb(255, 100, 50)' }}
      ></div>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 px-4">Entre em Contato</h2>
          <div className="w-16 sm:w-20 h-1 mx-auto mb-4 sm:mb-6" style={{ backgroundColor: 'rgb(255, 69, 0)' }}></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
            Estamos prontos para atendê-lo e transformar sua energia em economia.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 transform transition-all duration-300 hover:shadow-3xl">
              <div className="flex items-center space-x-2 mb-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgb(255, 69, 0)' }}
                >
                  <Send width={16} height={16} className="lucide lucide-send text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold" style={{ color: 'rgb(15, 30, 60)' }}>
                  Solicite seu Orçamento Grátis
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input type="text" id="name" className={inputClass} placeholder="Seu nome" required value={form.name} onChange={handleChange('name')} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input type="email" id="email" className={inputClass} placeholder="seu@email.com" required value={form.email} onChange={handleChange('email')} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input type="tel" id="phone" className={inputClass} placeholder="(79) 99999-9999" required value={form.phone} onChange={handleChange('phone')} />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                    Cidade
                  </label>
                  <input type="text" id="city" className={inputClass} placeholder="Sua cidade" value={form.city} onChange={handleChange('city')} />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg transition-all duration-300 resize-none bg-gray-50 focus:bg-white focus:outline-none"
                  placeholder="Conte-nos sobre seu projeto ou dúvida..."
                  required
                  value={form.message}
                  onChange={handleChange('message')}
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full text-white px-8 py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center group hover:brightness-110"
                style={{ background: 'linear-gradient(to right, rgb(255, 69, 0), rgb(255, 100, 50))' }}
              >
                <Send
                  width={20}
                  height={20}
                  className="lucide lucide-send mr-2 group-hover:rotate-45 transition-transform duration-300"
                />
                Enviar Mensagem via WhatsApp
              </button>
              <p className="text-xs text-center text-gray-500 mt-4">
                * Campos obrigatórios | Resposta em até 2 horas úteis
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center space-x-2 mb-6">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgb(255, 69, 0)' }}
                >
                  <Phone width={16} height={16} className="lucide lucide-phone text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold" style={{ color: 'rgb(15, 30, 60)' }}>
                  Informações de Contato
                </h3>
              </div>
              <div className="space-y-5">
                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110"
                      style={{ background: 'linear-gradient(to right bottom, rgb(255, 69, 0), rgb(255, 100, 50))' }}
                    >
                      <MapPin width={24} height={24} className="lucide lucide-map-pin text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                    <p className="text-sm sm:text-base text-gray-600">Rua Bahia, 461 - Siqueira Campos</p>
                    <p className="text-sm sm:text-base text-gray-600">Aracaju, Sergipe</p>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110"
                      style={{ background: 'linear-gradient(to right bottom, rgb(255, 69, 0), rgb(255, 100, 50))' }}
                    >
                      <Phone width={24} height={24} className="lucide lucide-phone text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Telefones</h4>
                    <a
                      href="tel:+5579991174811"
                      className="block text-sm sm:text-base text-gray-600 transition-colors"
                      style={{ color: 'rgb(75, 85, 99)' }}
                    >
                      (79) 99117-4811
                    </a>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110"
                      style={{ background: 'linear-gradient(to right bottom, rgb(255, 69, 0), rgb(255, 100, 50))' }}
                    >
                      <Mail width={24} height={24} className="lucide lucide-mail text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">E-mail</h4>
                    <a href="mailto:jcbc579@gmail.com" className="text-sm sm:text-base text-gray-600 transition-colors break-all">
                      jcbc579@gmail.com
                    </a>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110"
                      style={{ background: 'linear-gradient(to right bottom, rgb(255, 69, 0), rgb(255, 100, 50))' }}
                    >
                      <Clock width={24} height={24} className="lucide lucide-clock text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Horário de Atendimento</h4>
                    <p className="text-sm sm:text-base text-gray-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-sm sm:text-base text-gray-600">Sábado: 8h às 12h</p>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110"
                      style={{ background: 'linear-gradient(to right bottom, rgb(255, 69, 0), rgb(255, 100, 50))' }}
                    >
                      <Instagram width={24} height={24} className="lucide lucide-instagram text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Instagram</h4>
                    <a
                      href="https://instagram.com/sollarsergipe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-gray-600 transition-colors"
                    >
                      @sollarsergipe
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-2xl p-6 shadow-2xl text-white"
              style={{ background: 'linear-gradient(to right bottom, rgb(255, 69, 0), rgb(255, 100, 50))' }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle2 width={32} height={32} className="lucide lucide-check-circle2 text-white" />
                <h4 className="text-lg sm:text-xl font-bold">Atendimento Rápido</h4>
              </div>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                Nossa equipe responde em até 2 horas úteis. Solicite seu orçamento agora e comece a economizar!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
