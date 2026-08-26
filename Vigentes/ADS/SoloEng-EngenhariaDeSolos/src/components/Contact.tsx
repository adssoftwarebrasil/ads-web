import { useState } from 'react';
import { Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `*Solicitação de Orçamento - Soloeng*

*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone}
*Serviço:* ${formData.service}
*Mensagem:* ${formData.message}`;

    const whatsappNumber = '5562999999999';
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#cec643]/10 rounded-full">
            <span className="text-[#6c6d71] font-semibold text-sm uppercase tracking-wide">
              Contato
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#6c6d71] mb-6 leading-tight">
            Vamos Conversar Sobre{' '}
            <span className="text-[#cec643]">Seu Projeto</span>
          </h2>

          <p className="text-lg text-gray-700">
            Preencha o formulário e nossa equipe entrará em contato para entender
            suas necessidades e apresentar a melhor solução.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[#6c6d71] mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#cec643] focus:outline-none transition-colors duration-300"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#6c6d71] mb-2"
                >
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#cec643] focus:outline-none transition-colors duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-[#6c6d71] mb-2"
                >
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#cec643] focus:outline-none transition-colors duration-300"
                  placeholder="(62) 99999-9999"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-[#6c6d71] mb-2"
                >
                  Serviço de Interesse *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#cec643] focus:outline-none transition-colors duration-300"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Terraplanagem">Terraplanagem</option>
                  <option value="Escavações">Escavações</option>
                  <option value="Transporte de Material">Transporte de Material</option>
                  <option value="Aterros">Aterros</option>
                  <option value="Demolição">Demolição</option>
                  <option value="Locação de Máquinas">Locação de Máquinas</option>
                  <option value="Limpeza de Terrenos">Limpeza de Terrenos</option>
                  <option value="Movimentação de Terras">Movimentação de Terras</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[#6c6d71] mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#cec643] focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Descreva seu projeto e suas necessidades..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#cec643] text-[#6c6d71] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#b8b43a] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
              >
                Enviar Mensagem via WhatsApp
                <Send className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#6c6d71] to-[#6c6d71]/90 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-[#cec643] mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold mb-1">E-mail</p>
                    <a
                      href="mailto:Contato@soloeng.com.br"
                      className="text-gray-200 hover:text-[#cec643] transition-colors duration-300"
                    >
                      Contato@soloeng.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-[#cec643] mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold mb-1">Horário de Atendimento</p>
                    <p className="text-gray-200">Segunda a Sexta</p>
                    <p className="text-gray-200">08:00 às 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#cec643]/10 rounded-2xl p-8 border-2 border-[#cec643]/20">
              <h3 className="text-xl font-bold text-[#6c6d71] mb-4">
                Por que Escolher a Soloeng?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#cec643] mr-2">✓</span>
                  <span>Mais de 46 anos de experiência</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#cec643] mr-2">✓</span>
                  <span>Maquinário moderno e bem conservado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#cec643] mr-2">✓</span>
                  <span>Equipe altamente qualificada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#cec643] mr-2">✓</span>
                  <span>Atendimento personalizado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#cec643] mr-2">✓</span>
                  <span>Compromisso com prazos e qualidade</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
