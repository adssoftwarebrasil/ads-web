import { useState } from 'react';
import { Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function ContactCTA() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    vehicleType: '',
    period: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Máscara para WhatsApp
  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers
        .replace(/^(\d{2})(\d)/g, '($1) $2')
        .replace(/(\d)(\d{4})$/, '$1-$2');
    }
    return value;
  };

  // Validações
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Nome deve ter pelo menos 3 caracteres';
    }

    const whatsappNumbers = formData.whatsapp.replace(/\D/g, '');
    if (!whatsappNumbers) {
      newErrors.whatsapp = 'WhatsApp é obrigatório';
    } else if (whatsappNumbers.length < 10 || whatsappNumbers.length > 11) {
      newErrors.whatsapp = 'WhatsApp inválido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.vehicleType) {
      newErrors.vehicleType = 'Selecione o tipo de veículo';
    }

    if (!formData.period) {
      newErrors.period = 'Selecione o período';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const whatsappNumber = '5598987318235';
    const message = `🚗 *SOLICITAÇÃO DE ORÇAMENTO - MAP LOCAÇÕES*

👤 *Nome:* ${formData.name}
📱 *WhatsApp:* ${formData.whatsapp}
📧 *E-mail:* ${formData.email}
🚘 *Tipo de Veículo:* ${formData.vehicleType}
📅 *Período:* ${formData.period}
${formData.message ? `\n💬 *Mensagem:*\n${formData.message}` : ''}

_Enviado pelo site MAP Locações_`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      
      setFormData({
        name: '',
        whatsapp: '',
        email: '',
        vehicleType: '',
        period: '',
        message: '',
      });
      setErrors({});
    }, 500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    if (name === 'whatsapp') {
      setFormData({ ...formData, [name]: formatWhatsApp(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  return (
    <section id="contato" className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary to-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Pronto Para Rodar com a MAP?
            </h2>
            <p className="text-white/90 text-lg lg:text-xl max-w-2xl mx-auto">
              Locações mensais com as melhores condições de São Luís
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Seu nome completo"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    maxLength={15}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.whatsapp ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(98) 98765-4321"
                  />
                  {errors.whatsapp && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.whatsapp}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="vehicleType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tipo de Veículo *
                  </label>
                  <select
                    id="vehicleType"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.vehicleType ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecione o tipo</option>
                    <option value="Carro">🚗 Carro</option>
                    <option value="Moto">🏍️ Moto</option>
                    <option value="Carro e Moto">🚗🏍️ Carro e Moto</option>
                  </select>
                  {errors.vehicleType && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.vehicleType}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="period" className="block text-sm font-semibold text-gray-700 mb-2">
                    Período de Locação (Mínimo 30 dias) *
                  </label>
                  <select
                    id="period"
                    name="period"
                    value={formData.period}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.period ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecione o período</option>
                    <option value="30 dias">📆 Mensal (30 dias)</option>
                    <option value="60 dias">📆 60 dias</option>
                    <option value="90 dias">📆 90 dias</option>
                    <option value="Longa duração">⏱️ Acima de 90 dias</option>
                  </select>
                  {errors.period && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.period}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem (Opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Conte-nos mais sobre sua necessidade..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-black hover:bg-gray-900 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105 hover:shadow-xl'
                }`}
              >
                {isSubmitting ? 'Abrindo WhatsApp...' : 'Pedir Orçamento'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}