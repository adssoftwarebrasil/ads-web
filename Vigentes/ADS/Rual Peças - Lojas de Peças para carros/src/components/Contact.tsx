import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    partType: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Olá! Vim do site da Rual Peças.

Nome: ${formData.name}
Telefone: ${formData.phone}
${formData.email ? `E-mail: ${formData.email}\n` : ''}Tipo de Peça: ${formData.partType}
Mensagem: ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(
      `https://wa.me/5545984268490?text=${encodedMessage}`,
      '_blank'
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    color: 'white',
  };

  return (
    <section
      id="contato"
      className="py-20 lg:py-32"
      style={{
        background: 'linear-gradient(135deg, #2b2d91 0%, #0a0d00 100%)',
      }}
    >
      <div className="max-w-[700px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Solicite um Orçamento
          </h2>
          <p className="text-xl" style={{ color: '#ede86f' }}>
            Preencha o formulário e entraremos em contato via WhatsApp
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white mb-2 font-medium">
              Nome Completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fdf309] transition-all"
              style={inputStyle}
              placeholder="Seu nome completo"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-white mb-2 font-medium">
              Telefone/WhatsApp *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fdf309] transition-all"
              style={inputStyle}
              placeholder="(00) 00000-0000"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white mb-2 font-medium">
              E-mail (opcional)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fdf309] transition-all"
              style={inputStyle}
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="partType" className="block text-white mb-2 font-medium">
              Tipo de Peça/Veículo *
            </label>
            <input
              type="text"
              id="partType"
              name="partType"
              required
              value={formData.partType}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fdf309] transition-all"
              style={inputStyle}
              placeholder="Ex: Bomba d'água para Fusca 1600"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white mb-2 font-medium">
              Mensagem *
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fdf309] transition-all resize-none"
              style={inputStyle}
              placeholder="Descreva sua necessidade..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-5 rounded-lg text-lg font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: '#fdf309', color: '#0a0d00' }}
          >
            Enviar Solicitação
          </button>
        </form>
      </div>
    </section>
  );
}
