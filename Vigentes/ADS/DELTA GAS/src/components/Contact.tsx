import { useState } from 'react';
import { Phone, MapPin, MessageSquare, User, Send } from 'lucide-react';
import { InstagramSolid, FacebookSolid } from '../icons';

const productLabels: Record<string, string> = {
  gas: 'Botijão de Gás 13kg',
  water: 'Galão de Água 20 Litros',
  both: 'Gás + Água',
};

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    neighborhood: '',
    product: 'gas',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Olá, Delta Gás! Gostaria de fazer um pedido.\n\n`;
    text += `*Nome:* ${form.name}\n`;
    text += `*WhatsApp/Telefone:* ${form.phone}\n`;
    text += `*Bairro/Endereço:* ${form.neighborhood}\n`;
    text += `*Produto:* ${productLabels[form.product]}`;
    if (form.message.trim()) {
      text += `\n*Observação:* ${form.message}`;
    }
    window.open(`https://wa.me/556699814075?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClass =
    'w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-light focus:ring-2 focus:ring-brand-light/20 transition-all';

  return (
    <section id="contato" className="py-20 md:py-28 bg-gray-50/60">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="section-observe">
            <p className="section-subtitle">Fale Conosco</p>
            <h2 className="section-title mb-5">
              Pronto para fazer
              <br />
              <span className="text-brand-secondary">seu pedido?</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Preencha o formulário ao lado e entraremos em contato pelo WhatsApp. Atendimento rápido
              e personalizado, do jeito que você merece.
            </p>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="bg-brand-light/15 text-brand-secondary p-2.5 rounded-xl flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/556699814075"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-dark font-medium text-sm hover:text-brand-secondary transition-colors"
                  >
                    (66) 99981-4075
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-light/15 text-brand-secondary p-2.5 rounded-xl flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">
                    Endereço
                  </p>
                  <a
                    href="https://maps.google.com/?q=DELTA+GÁS+Sinop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-dark font-medium text-sm hover:text-brand-secondary transition-colors"
                  >
                    R. Otávio Pereira Lima, 1042 – Res. Delta, Sinop-MT
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-light/15 text-brand-secondary p-2.5 rounded-xl flex-shrink-0">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">
                    Horário de Atendimento
                  </p>
                  <p className="text-brand-dark font-medium text-sm">Todos os dias, das 7h às 22h</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.instagram.com/deltagas.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-brand-dark text-white flex items-center justify-center hover:bg-brand-secondary transition-colors"
                aria-label="Instagram"
              >
                <InstagramSolid size={18} />
              </a>
              <a
                href="https://www.facebook.com/p/Delta-G%C3%A1s-61574287110780/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-brand-dark text-white flex items-center justify-center hover:bg-brand-secondary transition-colors"
                aria-label="Facebook"
              >
                <FacebookSolid size={18} />
              </a>
            </div>
          </div>
          <div className="section-observe" style={{ transitionDelay: '200ms' }}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 p-7 md:p-9"
            >
              <h3 className="text-brand-dark font-bold text-xl mb-6">Fazer Pedido</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    Seu nome *
                  </label>
                  <div className="relative">
                    <User
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="João Silva"
                      className={inputClass}
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    WhatsApp / Telefone *
                  </label>
                  <div className="relative">
                    <Phone
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(66) 99999-9999"
                      className={inputClass}
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    Bairro / Endereço *
                  </label>
                  <div className="relative">
                    <MapPin
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      name="neighborhood"
                      required
                      placeholder="Residencial Delta, Rua..."
                      className={inputClass}
                      value={form.neighborhood}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    Produto desejado *
                  </label>
                  <select
                    name="product"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-light focus:ring-2 focus:ring-brand-light/20 transition-all appearance-none bg-white"
                    value={form.product}
                    onChange={handleChange}
                  >
                    <option value="gas">Botijão de Gás 13kg</option>
                    <option value="water">Galão de Água 20 Litros</option>
                    <option value="both">Gás + Água</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    Observação (opcional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Quantidade, informações adicionais..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-light focus:ring-2 focus:ring-brand-light/20 transition-all resize-none"
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 bg-brand-dark text-white font-bold py-4 rounded-2xl hover:bg-brand-secondary transition-all duration-300 shadow-md hover:shadow-lg text-base"
                >
                  <Send size={18} />
                  Enviar Pedido pelo WhatsApp
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Ao enviar, você será redirecionado ao WhatsApp com os dados preenchidos.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
