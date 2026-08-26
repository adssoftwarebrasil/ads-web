import { useState } from 'react';
import { Send, Phone, Mail, MessageSquare, User, Stethoscope } from 'lucide-react';

export default function FormularioContato() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    especialidade: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const especialidades = [
    'Odontologia Estética',
    'Ortodontia',
    'Implantodontia',
    'Prótese Dental',
    'Endodontia',
    'Periodontia',
    'Odontologia do Sono',
    'Cirurgia Bucomaxilofacial',
    'Odontopediatria',
  ];

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.trim().length < 3 ? 'Nome deve ter pelo menos 3 caracteres' : '';
      case 'phone':
        return value.replace(/\D/g, '').length < 10 ? 'Telefone inválido' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'E-mail inválido' : '';
      case 'message':
        return value.trim().length < 10 ? 'Mensagem deve ter pelo menos 10 caracteres' : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData((prev) => ({ ...prev, phone: formatted }));

    const error = validateField('phone', formatted);
    setErrors((prev) => ({ ...prev, phone: error }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newErrors = {
      name: validateField('name', formData.name),
      phone: validateField('phone', formData.phone),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== '')) {
      return;
    }

    setIsSubmitting(true);

    const especialidadeText = formData.especialidade ? `${formData.especialidade}` : 'atendimento';
    const whatsappMessage = `Olá, meu nome é ${formData.name}. Tenho interesse em ${especialidadeText}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/5581994073827?text=${encodeURIComponent(whatsappMessage)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#003870] via-[#004a8f] to-[#003870] relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-[700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="bg-white/10 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border border-white/20">
              Fale Conosco
            </span>
          </div>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Entre em Contato
          </h2>
          <p className="text-white/80 text-base sm:text-lg px-4">
            Preencha o formulário e entraremos em contato via WhatsApp
          </p>
        </div>

        {/* Formulário */}
        <div className="bg-[#003870] p-6 sm:p-8 rounded-2xl shadow-2xl space-y-5 sm:space-y-6 border border-white/10">
          {/* Nome */}
          <div>
            <label htmlFor="name" className="flex items-center gap-2 text-white font-semibold mb-2 text-sm sm:text-base">
              <User size={18} className="text-white" />
              Nome completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-all bg-white placeholder:text-gray-400 ${
                errors.name ? 'border-red-500 ring-2 ring-red-500' : 'border-gray-300 hover:border-gray-400 focus:border-white'
              }`}
              placeholder="Digite seu nome completo"
            />
            {errors.name && (
              <p className="text-red-300 text-xs sm:text-sm mt-1.5 flex items-center gap-1 bg-red-500/20 px-3 py-1.5 rounded">
                <span>⚠</span> {errors.name}
              </p>
            )}
          </div>

          {/* Telefone */}
          <div>
            <label htmlFor="phone" className="flex items-center gap-2 text-white font-semibold mb-2 text-sm sm:text-base">
              <Phone size={18} className="text-white" />
              Telefone/WhatsApp *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-all bg-white placeholder:text-gray-400 ${
                errors.phone ? 'border-red-500 ring-2 ring-red-500' : 'border-gray-300 hover:border-gray-400 focus:border-white'
              }`}
              placeholder="(81) 99999-9999"
            />
            {errors.phone && (
              <p className="text-red-300 text-xs sm:text-sm mt-1.5 flex items-center gap-1 bg-red-500/20 px-3 py-1.5 rounded">
                <span>⚠</span> {errors.phone}
              </p>
            )}
          </div>

          {/* E-mail */}
          <div>
            <label htmlFor="email" className="flex items-center gap-2 text-white font-semibold mb-2 text-sm sm:text-base">
              <Mail size={18} className="text-white" />
              E-mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-all bg-white placeholder:text-gray-400 ${
                errors.email ? 'border-red-500 ring-2 ring-red-500' : 'border-gray-300 hover:border-gray-400 focus:border-white'
              }`}
              placeholder="seu@email.com"
            />
            {errors.email && (
              <p className="text-red-300 text-xs sm:text-sm mt-1.5 flex items-center gap-1 bg-red-500/20 px-3 py-1.5 rounded">
                <span>⚠</span> {errors.email}
              </p>
            )}
          </div>

          {/* Especialidade */}
          <div>
            <label htmlFor="especialidade" className="flex items-center gap-2 text-white font-semibold mb-2 text-sm sm:text-base">
              <Stethoscope size={18} className="text-white" />
              Especialidade de interesse
            </label>
            <select
              id="especialidade"
              name="especialidade"
              value={formData.especialidade}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all hover:border-gray-400 bg-white cursor-pointer text-gray-700"
            >
              <option value="">Selecione uma especialidade</option>
              {especialidades.map((esp) => (
                <option key={esp} value={esp}>
                  {esp}
                </option>
              ))}
            </select>
          </div>

          {/* Mensagem */}
          <div>
            <label htmlFor="message" className="flex items-center gap-2 text-white font-semibold mb-2 text-sm sm:text-base">
              <MessageSquare size={18} className="text-white" />
              Mensagem *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-all resize-none bg-white placeholder:text-gray-400 ${
                errors.message ? 'border-red-500 ring-2 ring-red-500' : 'border-gray-300 hover:border-gray-400 focus:border-white'
              }`}
              placeholder="Digite sua mensagem..."
            ></textarea>
            {errors.message && (
              <p className="text-red-300 text-xs sm:text-sm mt-1.5 flex items-center gap-1 bg-red-500/20 px-3 py-1.5 rounded">
                <span>⚠</span> {errors.message}
              </p>
            )}
          </div>

          {/* Botão de Envio */}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full bg-white text-[#003870] py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
              isSubmitting
                ? 'opacity-70 cursor-not-allowed'
                : 'hover:bg-gray-100 hover:scale-105 hover:shadow-xl active:scale-95'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-[#003870] border-t-transparent rounded-full animate-spin"></div>
                Enviando...
              </>
            ) : (
              <>
                Enviar Mensagem
                <Send size={20} />
              </>
            )}
          </button>

          {/* Info adicional */}
          <p className="text-center text-xs sm:text-sm text-white/70 pt-2">
            Ao enviar, você será redirecionado para o WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}