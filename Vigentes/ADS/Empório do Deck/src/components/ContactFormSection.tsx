import { useState } from 'react';
import { User, Phone, Mail, Box, Ruler, MessageSquare, Send } from 'lucide-react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    productType: '',
    quantity: '',
    message: '',
    consent: false,
  });

  const [charCount, setCharCount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mensagem de saudação alterada para incluir a origem do Google
    const whatsappMessage = `Olá! Vim pelo Google e gostaria de solicitar um orçamento:

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*E-mail:* ${formData.email}
*Produto:* ${formData.productType}
*Quantidade:* ${formData.quantity || 'Não especificado'}
*Detalhes:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/5562991093647?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= 500) {
      setFormData({ ...formData, message: value });
      setCharCount(value.length);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Solicite Seu Orçamento</h2>
          <p className="section-subtitle">Preencha o formulário e retornaremos em até 24 horas</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label">
                  Nome Completo <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <User className="form-icon" size={20} />
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Telefone/WhatsApp <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <Phone className="form-icon" size={20} />
                  <input
                    type="tel"
                    required
                    placeholder="(00) 00000-0000"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  E-mail <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <Mail className="form-icon" size={20} />
                  <input
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Tipo de Produto <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <Box className="form-icon" size={20} />
                  <select
                    required
                    className="form-input"
                    value={formData.productType}
                    onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                  >
                    <option value="">Selecione...</option>
                    <option value="Deck de Madeira">Deck de Madeira</option>
                    <option value="Deck para Piscina">Deck para Piscina</option>
                    <option value="Forros">Forros (Paulista, Ripado, Lambril)</option>
                    <option value="Madeiras para Pergolado">Madeiras para Pergolado</option>
                    <option value="Portas e Janelas">Portas e Janelas</option>
                    <option value="Acabamentos">Acabamentos (Alisares, Molduras)</option>
                    <option value="Outros">Outros produtos</option>
                  </select>
                </div>
              </div>

              <div className="form-group md:col-span-2">
                <label className="form-label">Quantidade Estimada</label>
                <div className="relative">
                  <Ruler className="form-icon" size={20} />
                  <input
                    type="text"
                    placeholder="Ex: 50m², 10 peças, etc"
                    className="form-input"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group md:col-span-2">
                <label className="form-label">
                  Mensagem/Detalhes do Projeto <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="form-icon top-4" size={20} />
                  <textarea
                    required
                    rows={5}
                    placeholder="Descreva seu projeto: tipo de madeira desejada, medidas, prazo, etc."
                    className="form-input resize-none"
                    value={formData.message}
                    onChange={handleMessageChange}
                  />
                </div>
                <div className="text-right text-sm text-gray-500 mt-1">{charCount}/500</div>
              </div>

              <div className="form-group md:col-span-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="w-5 h-5 text-accent border-beigeSand rounded focus:ring-accent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  />
                  <span className="text-sm text-primaryMedium">
                    Aceito receber contato via WhatsApp e e-mail <span className="text-error">*</span>
                  </span>
                </label>
              </div>
            </div>

            <button type="submit" className="btn-submit mt-8">
              <Send size={20} />
              <span>Enviar Solicitação</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}