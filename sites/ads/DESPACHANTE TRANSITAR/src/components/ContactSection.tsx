import { useState } from 'react';
import { User, Phone, Mail, Clipboard, MessageSquare, Send, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: '',
    message: '',
    preference: 'WhatsApp',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappMessage = `Olá! Vim pelo site.

*Nome:* ${formData.name}
*WhatsApp:* ${formData.whatsapp}
*E-mail:* ${formData.email}
*Assunto:* ${formData.subject}
*Mensagem:* ${formData.message}
*Preferência:* ${formData.preference}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/556699854973?text=${encodedMessage}`, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section id="contato" className="bg-blue-very-light py-24 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              Contato
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-secondary mb-4">
            Dúvidas ou Sugestões
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.8fr_1fr] gap-12 max-w-7xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-12">
            <div className="mb-6">
              <label className="block text-secondary font-semibold mb-2 text-sm">
                Nome <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-light" size={20} />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className="w-full border-2 border-blue-pastel rounded-xl py-4 px-14 bg-blue-off-white focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-secondary font-semibold mb-2 text-sm">
                WhatsApp <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-light" size={20} />
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="w-full border-2 border-blue-pastel rounded-xl py-4 px-14 bg-blue-off-white focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-secondary font-semibold mb-2 text-sm">
                E-mail <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-light" size={20} />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full border-2 border-blue-pastel rounded-xl py-4 px-14 bg-blue-off-white focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-secondary font-semibold mb-2 text-sm">
                Assunto <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Clipboard className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-light" size={20} />
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border-2 border-blue-pastel rounded-xl py-4 px-14 bg-blue-off-white focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all appearance-none"
                >
                  <option value="">Selecione o serviço...</option>
                  <option value="Primeiro Emplacamento">Primeiro Emplacamento</option>
                  <option value="Transferência de Propriedade">Transferência de Propriedade</option>
                  <option value="Segunda Via CRV">Segunda Via CRV</option>
                  <option value="Licenciamento Anual">Licenciamento Anual</option>
                  <option value="Isenção IPVA para PCD">Isenção IPVA para PCD</option>
                  <option value="Cadastro ANTT">Cadastro ANTT</option>
                  <option value="Licença AET">Licença AET</option>
                  <option value="Outro Assunto">Outro Assunto</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-secondary font-semibold mb-2 text-sm">
                Mensagem <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-5 top-5 text-blue-light" size={20} />
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  maxLength={500}
                  placeholder="Descreva sua necessidade ou dúvida..."
                  className="w-full border-2 border-blue-pastel rounded-xl py-4 px-14 bg-blue-off-white focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                />
              </div>
              <div className="text-right text-sm text-gray-500 mt-1">
                {formData.message.length}/500
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-secondary font-semibold mb-3 text-sm">
                Preferência de Contato
              </label>
              <div className="flex gap-6">
                {['WhatsApp', 'E-mail', 'Telefone'].map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="preference"
                      value={option}
                      checked={formData.preference === option}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary focus:ring-primary"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-primary focus:ring-primary"
                />
                <span className="text-gray-700 text-sm">
                  Aceito receber contato e atualizações <span className="text-red-500">*</span>
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white py-5 px-8 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>Enviando...</>
              ) : (
                <>
                  <Send size={22} />
                  Enviar Mensagem
                </>
              )}
            </button>
          </form>

          <div>
            <h3 className="text-2xl font-black text-secondary mb-6">
              Outras Formas de Contato
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-lg text-secondary mb-3">WhatsApp Priority</h4>
                <div className="space-y-2">
                  <a href="https://wa.me/556699854973" className="block bg-[#25D366] text-white py-2.5 px-4 rounded-lg font-semibold text-center hover:scale-105 transition-transform">
                    (66) 9 99854973
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="text-primary" size={24} />
                  <h4 className="font-bold text-lg text-secondary">Telefone Fixo</h4>
                </div>
                <a href="tel:+556634222732" className="text-gray-700 hover:text-primary transition-colors">
                  (66) 3422-2732
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="text-primary" size={24} />
                  <h4 className="font-bold text-lg text-secondary">E-mail</h4>
                </div>
                <a href="mailto:despachantetransitarmt@gmail.com" className="text-gray-700 hover:text-primary transition-colors break-all">
                  despachantetransitarmt@gmail.com
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="text-primary" size={24} />
                  <h4 className="font-bold text-lg text-secondary">Endereço</h4>
                </div>
                <p className="text-gray-700">
                  Rua presidente João Goulart, 22, vila aurora II<br />
                  Rondonópolis - MT
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="text-primary" size={24} />
                  <h4 className="font-bold text-lg text-secondary">Horário</h4>
                </div>
                <p className="text-gray-700">
                  Segunda a Sexta: 8h às 18h<br />
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-lg text-secondary mb-3">Redes Sociais</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-blue-light transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-blue-light transition-colors">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
