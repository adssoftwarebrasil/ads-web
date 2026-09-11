import { useState } from 'react';
import { User, Phone, Mail, Package, Ruler, MessageSquare, Send, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    size: '',
    message: '',
    contact_preference: 'WhatsApp',
    accept_offers: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappMessage = `🛏️ *Nova Mensagem do Site - UDI Colchões*

👤 *Nome:* ${formData.name}
📱 *Telefone:* ${formData.phone}
📧 *E-mail:* ${formData.email}

🎯 *Interesse:* ${formData.interest}
📏 *Tamanho:* ${formData.size || 'Não especificado'}

💬 *Mensagem:*
${formData.message}

📞 *Prefere contato por:* ${formData.contact_preference}
${formData.accept_offers ? '✅ Aceita receber ofertas e novidades' : ''}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/5534996610265?text=${encodedMessage}`, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        interest: '',
        size: '',
        message: '',
        contact_preference: 'WhatsApp',
        accept_offers: false,
      });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <section id="contato" className="py-20 lg:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://storage.lucasmendes.dev/site-sp/udicolch%C3%B5es%2Fimgi_20_imgi_33_background_2.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-accent-offwhite/95 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h3 className="text-primary-vibrant text-lg font-bold uppercase tracking-wider mb-2">
            Contato
          </h3>
          <h2 className="text-4xl lg:text-5xl font-black text-primary mb-4">
            Dúvidas ou Sugestões
          </h2>
          <p className="text-lg text-primary-medium max-w-2xl mx-auto">
            Se você tem dúvidas ou sugestões, a nossa equipe está pronta para ouvir o que você tem a
            dizer
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 space-y-6"
            >
              <div>
                <label className="block text-primary font-semibold mb-2">
                  Nome Completo <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <User size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-primary-light" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Digite seu nome completo"
                    className="w-full pl-14 pr-5 py-4 bg-[#FAFCFF] border-2 border-accent-pastel rounded-xl focus:border-primary-vibrant focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary-vibrant/10 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-primary font-semibold mb-2">
                  Telefone/WhatsApp <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <Phone size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-primary-light" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="w-full pl-14 pr-5 py-4 bg-[#FAFCFF] border-2 border-accent-pastel rounded-xl focus:border-primary-vibrant focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary-vibrant/10 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-primary font-semibold mb-2">
                  E-mail <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <Mail size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-primary-light" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full pl-14 pr-5 py-4 bg-[#FAFCFF] border-2 border-accent-pastel rounded-xl focus:border-primary-vibrant focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary-vibrant/10 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-primary font-semibold mb-2">
                  Tipo de Interesse <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <Package size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-primary-light" />
                  <select
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full pl-14 pr-5 py-4 bg-[#FAFCFF] border-2 border-accent-pastel rounded-xl focus:border-primary-vibrant focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary-vibrant/10 transition-all appearance-none"
                  >
                    <option value="">Selecione uma opção...</option>
                    <option value="Colchão de Espuma">Colchão de Espuma</option>
                    <option value="Colchão de Molas">Colchão de Molas</option>
                    <option value="Colchão D33">Colchão D33</option>
                    <option value="Cama Box">Cama Box</option>
                    <option value="Cabeceira">Cabeceira</option>
                    <option value="Colchão de Berço">Colchão de Berço</option>
                    <option value="Produto Sob Medida">Produto Sob Medida</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-primary font-semibold mb-2">Tamanho Desejado</label>
                <div className="relative">
                  <Ruler size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-primary-light" />
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full pl-14 pr-5 py-4 bg-[#FAFCFF] border-2 border-accent-pastel rounded-xl focus:border-primary-vibrant focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary-vibrant/10 transition-all appearance-none"
                  >
                    <option value="">Selecione...</option>
                    <option value="Solteiro">Solteiro</option>
                    <option value="Casal">Casal</option>
                    <option value="Queen">Queen</option>
                    <option value="King">King</option>
                    <option value="Super King">Super King</option>
                    <option value="Sob Medida">Sob Medida</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-primary font-semibold mb-2">
                  Mensagem <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <MessageSquare size={20} className="absolute left-5 top-5 text-primary-light" />
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    maxLength={500}
                    placeholder="Conte-nos mais sobre o que você procura ou suas dúvidas..."
                    className="w-full pl-14 pr-5 py-4 bg-[#FAFCFF] border-2 border-accent-pastel rounded-xl focus:border-primary-vibrant focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary-vibrant/10 transition-all resize-none"
                  />
                </div>
                <div className="text-right text-sm text-primary-medium mt-1">
                  {formData.message.length}/500
                </div>
              </div>

              <div>
                <label className="block text-primary font-semibold mb-3">
                  Preferência de Contato
                </label>
                <div className="flex flex-wrap gap-4">
                  {['WhatsApp', 'E-mail', 'Telefone'].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contact_preference"
                        value={option}
                        checked={formData.contact_preference === option}
                        onChange={handleChange}
                        className="w-5 h-5 text-primary-vibrant focus:ring-primary-vibrant"
                      />
                      <span className="text-primary">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="accept_offers"
                    checked={formData.accept_offers}
                    onChange={handleChange}
                    required
                    className="mt-1 w-5 h-5 text-primary-vibrant focus:ring-primary-vibrant rounded"
                  />
                  <span className="text-primary text-sm">
                    Aceito receber ofertas e novidades por WhatsApp e e-mail{' '}
                    <span className="text-red-600">*</span>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary-vibrant text-white text-lg font-bold rounded-xl hover:bg-primary-medium transition-all hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
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

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Outras Formas de Contato</h3>

              <div className="space-y-6">
                <a
                  href="https://wa.me/5534996610265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#25D366] text-white rounded-xl hover:bg-[#20ba59] transition-all hover:scale-105 shadow-lg"
                >
                  <MessageCircle size={32} className="flex-shrink-0" />
                  <div>
                    <div className="font-bold text-lg">WhatsApp</div>
                    <div className="text-sm">(34) 99661-0265</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-accent-offwhite rounded-xl">
                  <MapPin size={24} className="text-primary-vibrant flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-primary mb-1">Endereço</div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Av.+João+Pessoa,+635+-+Martins,+Uberlândia+-+MG"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-medium hover:text-primary transition-colors"
                    >
                      Av. João Pessoa, 635 - Martins
                      <br />
                      Uberlândia - MG, 38400-338
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-accent-offwhite rounded-xl">
                  <Clock size={24} className="text-primary-vibrant flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-primary mb-1">Horário de Atendimento</div>
                    <div className="text-primary-medium">Segunda a Sábado: 9h às 18h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
