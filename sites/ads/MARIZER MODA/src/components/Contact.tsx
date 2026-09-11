import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const services = [
  'Fardamentos Personalizados',
  'Bordados Computadorizados',
  'Impressão DTF',
  'Sublimação Total',
  'Equipagens Completas',
  'Uniformes de Segurança',
  'Outros',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', company: '', service: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let msg = 'Olá! Gostaria de solicitar um orçamento.';
    msg += `\n\nNome: ${form.name}`;
    msg += `\nWhatsApp: ${form.phone}`;
    if (form.company) msg += `\nEmpresa: ${form.company}`;
    if (form.service) msg += `\nServiço de interesse: ${form.service}`;
    if (form.message) msg += `\nMensagem: ${form.message}`;
    const url = `http://wa.me/559881135450?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contato"
      className="py-24 overflow-hidden"
      style={{ background: 'linear-gradient(rgb(248, 250, 255) 0%, rgb(238, 242, 255) 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 text-brand-blue border border-brand-blue/20 bg-brand-blue/5">
            Fale Conosco
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Solicite seu Orçamento
            <br />
            <span className="text-gradient">Sem Compromisso</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Preencha o formulário e entraremos em contato pelo WhatsApp com a proposta ideal para sua empresa.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="transition-all duration-700 opacity-100 translate-x-0">
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgb(1, 12, 222), rgb(0, 187, 254))' }}
                >
                  <Phone className="lucide lucide-phone text-white" width={17} height={17} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                    Telefone / WhatsApp
                  </p>
                  <a
                    href="tel:+559881135450"
                    rel="noopener noreferrer"
                    className="text-gray-800 font-medium text-sm hover:text-brand-blue transition-colors"
                  >
                    (98) 9 8113-5450
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgb(1, 12, 222), rgb(0, 187, 254))' }}
                >
                  <Mail className="lucide lucide-mail text-white" width={17} height={17} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">E-mail</p>
                  <a
                    href="mailto:marizemodas@hotmail.com"
                    rel="noopener noreferrer"
                    className="text-gray-800 font-medium text-sm hover:text-brand-blue transition-colors"
                  >
                    marizemodas@hotmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgb(1, 12, 222), rgb(0, 187, 254))' }}
                >
                  <MapPin className="lucide lucide-map-pin text-white" width={17} height={17} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Endereço</p>
                  <a
                    href="https://maps.google.com/?q=Marizé+Uniformes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 font-medium text-sm hover:text-brand-blue transition-colors"
                  >
                    R. Adélino Fontoura, 145-B – Jórdoa, São Luís – MA
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgb(1, 12, 222), rgb(0, 187, 254))' }}
                >
                  <Clock className="lucide lucide-clock text-white" width={17} height={17} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Funcionamento</p>
                  <p className="text-gray-800 font-medium text-sm">Segunda a Sexta: 08h às 18h</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.8765813980026!2d-44.26837272503106!3d-2.547069297431247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68fc7818002f3%3A0x8e3da5500f881b2f!2sMariz%C3%A9%20Uniformes!5e0!3m2!1spt-BR!2sbr!4v1774633110387!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Marizé Uniformes"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 space-y-4"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Solicitar Orçamento</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Ex: João Silva"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(98) 9 0000-0000"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue/50 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Empresa
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Nome da sua empresa (opcional)"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Serviço de Interesse *
                </label>
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue/50 transition-all bg-white"
                >
                  <option value="">Selecione um serviço...</option>
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Descreva o que precisa: quantidade, tipo de peça, prazo, etc."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue/50 transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-white font-semibold text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-blue/30"
                style={{ background: 'linear-gradient(135deg, rgb(1, 12, 222) 0%, rgb(0, 187, 254) 100%)' }}
              >
                <Send className="lucide lucide-send" width={18} height={18} strokeWidth={2} />
                Enviar via WhatsApp
              </button>
              <p className="text-xs text-center text-gray-400">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pré-preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
