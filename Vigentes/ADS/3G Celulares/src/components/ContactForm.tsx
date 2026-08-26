import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1');
    }
    return value.slice(0, -1);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}, telefone ${formData.phone}, email ${formData.email}. ${formData.message}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/5549999504348?text=${message}`, '_blank');
      setIsSubmitting(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 500);
  };

  return (
    <section id="contato" className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#172059] mb-4">
              Fale Conosco
            </h2>
            <div className="w-24 h-1 bg-[#81c227] mx-auto mb-4"></div>
            <p className="text-gray-600">
              Preencha o formulário abaixo e entraremos em contato via WhatsApp
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[#172059] font-semibold mb-2">
                Nome *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#00adec] focus:outline-none transition-colors"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-[#172059] font-semibold mb-2">
                Telefone *
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#00adec] focus:outline-none transition-colors"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[#172059] font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#00adec] focus:outline-none transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[#172059] font-semibold mb-2">
                Mensagem *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#00adec] focus:outline-none transition-colors resize-none"
                placeholder="Como podemos ajudar?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#81c227] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#6fa01f] transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Enviar Mensagem
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
