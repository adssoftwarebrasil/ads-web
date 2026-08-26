import { useState, type FormEvent } from 'react';
import { Phone, Mail, Home, User, Send } from 'lucide-react';

const inputClass =
  'w-full bg-white border border-brand-blue/15 rounded-xl px-4 py-3 text-brand-blue placeholder-brand-blue/40 text-sm focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 transition-all duration-200';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: '',
    monthlyBill: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de solicitar um orçamento de energia solar.',
      '',
      `*Nome:* ${form.name}`,
      `*WhatsApp/Telefone:* ${form.phone}`,
    ];
    if (form.email) lines.push(`*E-mail:* ${form.email}`);
    if (form.propertyType) lines.push(`*Tipo de imóvel:* ${form.propertyType}`);
    if (form.monthlyBill) lines.push(`*Valor médio da conta de luz:* ${form.monthlyBill}`);
    if (form.message) lines.push(`*Mensagem:* ${form.message}`);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`http://wa.me/5575988443984?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="inline-block text-brand-yellow font-semibold text-sm tracking-widest uppercase mb-3">
              Fale conosco
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-blue mb-5 leading-tight">
              Solicite seu
              <br />
              <span className="text-brand-yellow">Orçamento Grátis</span>
            </h2>
            <p className="text-brand-blue/65 text-lg leading-relaxed mb-8">
              Preencha o formulário e nossa equipe entrará em contato pelo WhatsApp para apresentar a melhor solução para
              o seu imóvel.
            </p>
            <div className="space-y-4">
              <a href="tel:+5575988443984" target="_blank" rel="noopener noreferrer">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-brand-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-yellow/20 transition-colors">
                    <Phone width={18} height={18} className="text-brand-yellow" />
                  </div>
                  <div>
                    <div className="text-brand-blue/50 text-xs font-medium uppercase tracking-wider mb-0.5">
                      Telefone
                    </div>
                    <div className="text-brand-blue font-medium text-sm">(75) 9 8844-3984</div>
                  </div>
                </div>
              </a>
              <a href="http://wa.me/5575988443984" target="_blank" rel="noopener noreferrer">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-brand-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-yellow/20 transition-colors">
                    <Mail width={18} height={18} className="text-brand-yellow" />
                  </div>
                  <div>
                    <div className="text-brand-blue/50 text-xs font-medium uppercase tracking-wider mb-0.5">
                      E-mail / WhatsApp
                    </div>
                    <div className="text-brand-blue font-medium text-sm">Atendimento via WhatsApp</div>
                  </div>
                </div>
              </a>
              <div>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-brand-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-yellow/20 transition-colors">
                    <Home width={18} height={18} className="text-brand-yellow" />
                  </div>
                  <div>
                    <div className="text-brand-blue/50 text-xs font-medium uppercase tracking-wider mb-0.5">
                      Endereço
                    </div>
                    <div className="text-brand-blue font-medium text-sm">
                      R. Armando Tavares, 36 – Centro, Santo Antônio de Jesus – BA
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-2xl overflow-hidden border border-brand-blue/10 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.081235658611!2d-39.26387602492373!3d-12.96665348734823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x73e2a41070454a3%3A0xde3c15945cbdb208!2sRAIO-SOLAR!5e0!3m2!1spt-BR!2sbr!4v1776946432010!5m2!1spt-BR!2sbr"
                width="100%"
                height="220"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Raio-Solar"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-xl border border-brand-blue/8 p-8">
            <h3 className="text-brand-blue font-bold text-xl mb-6">Solicitar Orçamento</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="relative">
                <User
                  width={16}
                  height={16}
                  className="absolute left-3.5 top-3.5 text-brand-blue/35 pointer-events-none"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={`${inputClass} pl-10`}
                />
              </div>
              <div className="relative">
                <Phone
                  width={16}
                  height={16}
                  className="absolute left-3.5 top-3.5 text-brand-blue/35 pointer-events-none"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Seu WhatsApp / Telefone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className={`${inputClass} pl-10`}
                />
              </div>
              <div className="relative">
                <Mail
                  width={16}
                  height={16}
                  className="absolute left-3.5 top-3.5 text-brand-blue/35 pointer-events-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail (opcional)"
                  value={form.email}
                  onChange={handleChange}
                  className={`${inputClass} pl-10`}
                />
              </div>
              <select
                name="propertyType"
                required
                value={form.propertyType}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="" disabled>
                  Tipo de imóvel
                </option>
                <option value="Residência">Residência</option>
                <option value="Comércio">Comércio</option>
                <option value="Indústria">Indústria</option>
                <option value="Rural">Rural</option>
                <option value="Outro">Outro</option>
              </select>
              <select
                name="monthlyBill"
                required
                value={form.monthlyBill}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="" disabled>
                  Valor médio da conta de luz
                </option>
                <option value="Até R$ 200">Até R$ 200</option>
                <option value="R$ 200 - R$ 500">R$ 200 - R$ 500</option>
                <option value="R$ 500 - R$ 1.000">R$ 500 - R$ 1.000</option>
                <option value="R$ 1.000 - R$ 3.000">R$ 1.000 - R$ 3.000</option>
                <option value="Acima de R$ 3.000">Acima de R$ 3.000</option>
              </select>
              <textarea
                name="message"
                placeholder="Alguma informação adicional? (opcional)"
                rows={3}
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              ></textarea>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-yellow text-brand-blue font-bold py-4 rounded-xl text-base hover:bg-brand-yellow-light active:scale-95 transition-all duration-200 shadow-lg hover:shadow-brand-yellow/30 hover:shadow-xl"
              >
                <Send width={18} height={18} className="lucide lucide-send " />
                Enviar pelo WhatsApp
              </button>
              <p className="text-center text-brand-blue/40 text-xs">
                Ao enviar, você será redirecionado para o WhatsApp com seus dados preenchidos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
