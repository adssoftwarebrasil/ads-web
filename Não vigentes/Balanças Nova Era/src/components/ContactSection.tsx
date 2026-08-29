import { useState } from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*Nova mensagem do site*%0A%0A*Nome:* ${formData.name}%0A*WhatsApp:* ${formData.whatsapp}%0A*E-mail:* ${formData.email}%0A*Assunto:* ${formData.subject}%0A%0A*Mensagem:*%0A${formData.message}`;

    window.open(`https://wa.me/5541972037264?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  return (
    <section id="contato" className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#EA1E26] font-bold text-sm uppercase tracking-wider mb-2 block">
            Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#000000] mb-4">
            Dúvidas ou Sugestões
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          <div className="lg:col-span-3">
            <div
              className="bg-white rounded-3xl p-12 border-2 border-[#E8F2F9]"
              style={{ boxShadow: '0 12px 48px rgba(1,98,177,0.12)' }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#333333] font-semibold mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-[#E8F2F9] rounded-lg focus:outline-none focus:border-[#0162B1] transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-[#333333] font-semibold mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => {
                      const formatted = formatWhatsApp(e.target.value);
                      setFormData((prev) => ({ ...prev, whatsapp: formatted }));
                    }}
                    className="w-full px-5 py-4 border-2 border-[#E8F2F9] rounded-lg focus:outline-none focus:border-[#0162B1] transition-colors"
                    placeholder="(41) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#333333] font-semibold mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-[#E8F2F9] rounded-lg focus:outline-none focus:border-[#0162B1] transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[#333333] font-semibold mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-[#E8F2F9] rounded-lg focus:outline-none focus:border-[#0162B1] transition-colors bg-white"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="Solicitar Orçamento">Solicitar Orçamento</option>
                    <option value="Assistência Técnica">Assistência Técnica</option>
                    <option value="Comprar Balança">Comprar Balança</option>
                    <option value="Calibração">Calibração</option>
                    <option value="Peças de Reposição">Peças de Reposição</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#333333] font-semibold mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-5 py-4 border-2 border-[#E8F2F9] rounded-lg focus:outline-none focus:border-[#0162B1] transition-colors resize-none"
                    placeholder="Digite sua mensagem..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#EA1E26] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#B71820] transition-all transform hover:scale-105"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <a
              href="https://wa.me/5541972037264"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#25D366] text-white p-8 rounded-2xl hover:bg-[#20BA5A] transition-all transform hover:scale-105 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-4 rounded-full">
                  <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">WhatsApp</h3>
                  <p className="text-white/90 text-2xl font-bold">(41) 9720-3764</p>
                </div>
              </div>
              <p className="text-white/95">Clique para falar conosco agora</p>
            </a>

            <div className="bg-[#F5F9FC] p-8 rounded-2xl border-2 border-[#E8F2F9]">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#0162B1] p-3 rounded-full">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#000000] mb-1">E-mail</h4>
                    <a
                      href="mailto:balancasnovaera@hotmail.com"
                      className="text-[#666666] hover:text-[#0162B1] transition-colors"
                    >
                      balancasnovaera@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#0162B1] p-3 rounded-full">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#000000] mb-1">Telefone</h4>
                    <a
                      href="tel:+5541972037264"
                      className="text-[#666666] hover:text-[#0162B1] transition-colors"
                    >
                      (41) 9720-3764
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#0162B1] p-3 rounded-full">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#000000] mb-1">Endereço</h4>
                    <p className="text-[#666666]">
                      Rua João Reffo, 872<br />
                      Santa Felicidade<br />
                      Curitiba/PR
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-3 rounded-full">
                    <Instagram className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#000000] mb-1">Instagram</h4>
                    <a
                      href="https://instagram.com/balancasnovaera"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#666666] hover:text-[#0162B1] transition-colors"
                    >
                      @balancasnovaera
                    </a>
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
