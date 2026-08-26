import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: '',
    message: '',
    acceptCommunications: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Olá! Vim do site da Lamar Neto.%0A%0ANome: ${encodeURIComponent(formData.name)}%0AWhatsApp: ${encodeURIComponent(formData.whatsapp)}%0AE-mail: ${encodeURIComponent(formData.email)}%0AAssunto: ${encodeURIComponent(formData.subject)}%0A%0AMensagem: ${encodeURIComponent(formData.message)}`;

    window.open(`https://wa.me/5566984082396?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <section id="contato" className="bg-[#f8f8f8] py-[100px] md:py-[100px] px-5 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-[#688631] text-sm font-semibold uppercase mb-4" style={{ letterSpacing: '1px' }}>
            Contato
          </div>
          <h2 className="text-[#324422] text-3xl md:text-[42px] font-semibold mb-4">
            Entre em Contato Conosco
          </h2>
          <p className="text-[#666666] text-lg max-w-[700px] mx-auto">
            Dúvidas ou sugestões? Preencha o formulário e retornaremos em breve
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8">
          <div
            className="bg-white rounded-3xl p-8 md:p-12"
            style={{ boxShadow: '0 8px 30px rgba(50, 68, 34, 0.1)' }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-[#383838] text-sm font-medium mb-2">
                  Nome Completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Digite seu nome completo"
                  required
                  className="w-full border border-[#e6e6e6] rounded-lg px-5 py-3.5 text-[15px] focus:border-[#688631] focus:border-2 focus:outline-none transition-colors"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="whatsapp" className="block text-[#383838] text-sm font-medium mb-2">
                  WhatsApp (com DDD) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="(XX) XXXXX-XXXX"
                  required
                  className="w-full border border-[#e6e6e6] rounded-lg px-5 py-3.5 text-[15px] focus:border-[#688631] focus:border-2 focus:outline-none transition-colors"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-[#383838] text-sm font-medium mb-2">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                  className="w-full border border-[#e6e6e6] rounded-lg px-5 py-3.5 text-[15px] focus:border-[#688631] focus:border-2 focus:outline-none transition-colors"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-[#383838] text-sm font-medium mb-2">
                  Assunto <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#e6e6e6] rounded-lg px-5 py-3.5 text-[15px] focus:border-[#688631] focus:border-2 focus:outline-none transition-colors bg-white"
                >
                  <option value="">Selecione o assunto</option>
                  <option value="Solicitar Orçamento">Solicitar Orçamento</option>
                  <option value="Informações sobre Soja">Informações sobre Soja</option>
                  <option value="Informações sobre Milho">Informações sobre Milho</option>
                  <option value="Informações sobre Milheto/Sorgo">Informações sobre Milheto/Sorgo</option>
                  <option value="Dúvidas Gerais">Dúvidas Gerais</option>
                  <option value="Parcerias e Fornecimento">Parcerias e Fornecimento</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-[#383838] text-sm font-medium mb-2">
                  Mensagem <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva sua necessidade, dúvida ou solicitação de orçamento..."
                  required
                  rows={5}
                  className="w-full border border-[#e6e6e6] rounded-lg px-5 py-3.5 text-[15px] focus:border-[#688631] focus:border-2 focus:outline-none transition-colors resize-vertical"
                />
              </div>

              <div className="mb-8">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="acceptCommunications"
                    checked={formData.acceptCommunications}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-[#688631] border-gray-300 rounded focus:ring-[#688631]"
                  />
                  <span className="text-[#666666] text-[13px]">
                    Aceito receber comunicações e novidades da Lamar Neto
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#fbbf1f] text-[#383838] h-14 rounded-lg text-base font-semibold hover:bg-[#faa431] button-hover flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>

          <div className="bg-[#324422] text-[#e6e6e6] rounded-3xl p-10 md:p-12">
            <h3 className="text-white text-2xl font-semibold mb-8">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#fbbf1f] flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <a href="tel:+5566984082396" className="block hover:text-[#fbbf1f] transition-colors">
                    (66) 98408-2396
                  </a>
                  <a href="tel:+5566999383052" className="block hover:text-[#fbbf1f] transition-colors">
                    (66) 99938-3052
                  </a>
                  <a href="tel:+5566996892350" className="block hover:text-[#fbbf1f] transition-colors">
                    (66) 99689-2350
                  </a>
                  <a href="tel:+5566984080873" className="block hover:text-[#fbbf1f] transition-colors">
                    (66) 98408-0873
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#fbbf1f] flex-shrink-0 mt-1" />
                <a href="mailto:contato@site.com" className="hover:text-[#fbbf1f] transition-colors">
                  contato@site.com
                </a>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#fbbf1f] flex-shrink-0 mt-1" />
                <div className="leading-relaxed">
                  Rua Projetada, S/N. Qd. 12 - Lt. 27. Sala 02<br />
                  Nova Querência, Querência – MT<br />
                  CEP: 78.643-000
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#fbbf1f] flex-shrink-0 mt-1" />
                <div>
                  <div className="mb-1">Segunda a Sexta: 8h às 18h</div>
                  <div>Sábado: 8h às 12h</div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white border-opacity-20">
              <h4 className="text-white text-sm font-semibold mb-4">Siga-nos nas Redes</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border-2 border-white border-opacity-25 bg-white bg-opacity-10 flex items-center justify-center hover:bg-[#fbbf1f] hover:border-[#fbbf1f] hover:scale-110 transition-all"
                  aria-label="Facebook da Lamar Neto"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border-2 border-white border-opacity-25 bg-white bg-opacity-10 flex items-center justify-center hover:bg-[#fbbf1f] hover:border-[#fbbf1f] hover:scale-110 transition-all"
                  aria-label="Instagram da Lamar Neto"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
