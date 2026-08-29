import { MessageCircle, Mail, MapPin, User, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    agreed: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Olá! Meu nome é ${formData.name}, meu e-mail é ${formData.email} e telefone ${formData.phone}. Tenho interesse em ${formData.service}. ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(`https://wa.me/557193469993?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Vamos Conversar?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Preencha o formulário ou entre em contato direto. Estamos prontas para transformar seus objetivos imobiliários em realidade.
              </p>
            </div>

            <a
              href="https://wa.me/557193469993"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors cursor-pointer group"
            >
              <MessageCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 group-hover:text-green-700">
                  +55 (71) 99346-9993
                </p>
                <p className="text-sm text-green-700">Resposta em minutos</p>
              </div>
            </a>

            <a
              href="mailto:goldenhouse873@gmail.com"
              className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer group"
            >
              <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 group-hover:text-blue-700">
                  goldenhouse873@gmail.com
                </p>
                <p className="text-sm text-blue-700">Suporte técnico</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-4 bg-[#cfa165]/5 rounded-xl">
              <MapPin className="w-6 h-6 text-[#cfa165] flex-shrink-0 mt-1" />
              <div>
                <p className="text-gray-900 leading-relaxed">
                  Av. Luís Viana Filho, 13223, Sala 220, Torre 02 do Hangar Business Park - São Cristóvão, Salvador - BA, 41500-300
                </p>
                <p className="text-sm text-[#cfa165] mt-2">Visitas com agendamento</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-2xl shadow-xl space-y-6">
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Nome Completo *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome completo"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#cfa165] focus:ring-2 focus:ring-[#cfa165]/20 transition-all outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 block">
                  E-mail *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#cfa165] focus:ring-2 focus:ring-[#cfa165]/20 transition-all outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Telefone/WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(71) 99999-9999"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#cfa165] focus:ring-2 focus:ring-[#cfa165]/20 transition-all outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Serviço de Interesse *
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#cfa165] focus:ring-2 focus:ring-[#cfa165]/20 transition-all outline-none"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Comprar Imóvel">Comprar Imóvel</option>
                  <option value="Vender Imóvel">Vender Imóvel</option>
                  <option value="Administração de Aluguéis">Administração de Aluguéis</option>
                  <option value="Regularização Imobiliária">Regularização Imobiliária</option>
                  <option value="Documentação Imobiliária">Documentação Imobiliária</option>
                  <option value="Análise Contratual">Análise Contratual</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Conte-nos mais sobre o que você precisa..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#cfa165] focus:ring-2 focus:ring-[#cfa165]/20 transition-all outline-none resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreed"
                  required
                  checked={formData.agreed}
                  onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                  className="w-5 h-5 mt-0.5 rounded border-gray-300 text-[#cfa165] focus:ring-[#cfa165] cursor-pointer"
                />
                <label htmlFor="agreed" className="text-sm text-gray-600 cursor-pointer">
                  Concordo em receber contato da Golden House 873 via WhatsApp e e-mail
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#cfa165] hover:bg-[#b88a4d] text-white py-4 px-6 rounded-xl font-bold text-lg transition-all hover:scale-102 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Enviar Mensagem
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
