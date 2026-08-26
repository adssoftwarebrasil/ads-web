import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Instagram } from 'lucide-react';

const WhatsAppGlyph = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Gostaria de solicitar um orçamento.%0A%0A` +
      `*Nome:* ${form.name}%0A` +
      `*Telefone:* ${form.phone}%0A` +
      `*Email:* ${form.email}%0A` +
      `*Tipo de Serviço:* ${form.service}%0A` +
      `*Mensagem:* ${form.message}`;
    window.open(`https://wa.me/5534998796167?text=${text}`, '_blank');
  };

  return (
    <section
      id="contato"
      className="py-20 lg:py-32 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(rgb(255, 255, 255) 0%, rgb(248, 249, 250) 100%)' }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(68,235,21)]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(68,235,21)]/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-black font-black text-5xl lg:text-7xl mb-4 opacity-0"
            style={{ letterSpacing: '0.02em' }}
          >
            FALE CONOSCO
          </h2>
          <div
            className="w-24 h-1.5 bg-gradient-to-r from-[rgb(68,235,21)] to-[rgb(40,180,0)] mx-auto rounded-full opacity-0"
            style={{ animationDelay: '0.2s' }}
          ></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <div
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 opacity-0"
              style={{ animationDelay: '0.1s' }}
            >
              <h3 className="text-black font-bold text-2xl mb-8">Informações de Contato</h3>
              <div className="space-y-7">
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[rgb(68,235,21)] to-[rgb(40,180,0)] flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-lg flex-shrink-0">
                    <MapPin width={26} height={26} className="lucide lucide-map-pin text-white" />
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-lg mb-2">Endereço</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Jose Maria de Castro, 378
                      <br />
                      Jardim Europa 2
                      <br />
                      Ituiutaba-MG
                    </p>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[rgb(68,235,21)] to-[rgb(40,180,0)] flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-lg flex-shrink-0">
                    <Mail width={26} height={26} className="lucide lucide-mail text-white" />
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-lg mb-2">Email</h4>
                    <a
                      href="mailto:heguincho@gmail.com"
                      className="text-gray-600 hover:text-[rgb(68,235,21)] transition-colors text-lg"
                    >
                      heguincho@gmail.com
                    </a>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[rgb(68,235,21)] to-[rgb(40,180,0)] flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-lg flex-shrink-0">
                    <Phone width={26} height={26} className="lucide lucide-phone text-white" />
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-lg mb-2">WhatsApp</h4>
                    <a
                      href="https://wa.me/5534998796167"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[rgb(68,235,21)] transition-colors text-lg font-semibold"
                    >
                      (34) 99879-6167
                    </a>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[rgb(68,235,21)] to-[rgb(40,180,0)] flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-lg flex-shrink-0">
                    <Clock width={26} height={26} className="lucide lucide-clock text-white" />
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-lg mb-2">Horário</h4>
                    <p className="text-gray-600 text-lg font-semibold">Atendimento 24 horas</p>
                    <p className="text-gray-500 text-sm mt-1">Todos os dias da semana</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h4 className="text-black font-bold text-lg mb-5">Redes Sociais</h4>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/he.guincho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[rgb(68,235,21)] to-[rgb(40,180,0)] flex items-center justify-center text-white hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg group"
                    style={{ boxShadow: 'rgba(68, 235, 21, 0.4) 0px 4px 20px' }}
                  >
                    <Instagram
                      width={30}
                      height={30}
                      className="lucide lucide-instagram group-hover:scale-110 transition-transform"
                    />
                  </a>
                  <a
                    href="https://wa.me/5534998796167"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[rgb(68,235,21)] to-[rgb(40,180,0)] flex items-center justify-center text-white hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg group"
                    style={{ boxShadow: 'rgba(68, 235, 21, 0.4) 0px 4px 20px' }}
                  >
                    <WhatsAppGlyph className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 opacity-0"
              style={{ animationDelay: '0.3s' }}
            >
              <h3 className="text-black font-bold text-2xl mb-3">Solicite um Orçamento</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Preencha o formulário e entraremos em contato via WhatsApp
              </p>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Digite seu nome completo"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[rgb(68,235,21)] focus:outline-none focus:ring-4 focus:ring-[rgb(68,235,21)]/10 focus:bg-white transition-all text-base"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(00) 00000-0000"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[rgb(68,235,21)] focus:outline-none focus:ring-4 focus:ring-[rgb(68,235,21)]/10 focus:bg-white transition-all text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">Email *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="seu@email.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[rgb(68,235,21)] focus:outline-none focus:ring-4 focus:ring-[rgb(68,235,21)]/10 focus:bg-white transition-all text-base"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    Tipo de Serviço *
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[rgb(68,235,21)] focus:outline-none focus:ring-4 focus:ring-[rgb(68,235,21)]/10 focus:bg-white transition-all text-base text-gray-700"
                  >
                    <option value="">Selecione o tipo de veículo</option>
                    <option value="Veículo Leve">🚗 Veículo Leve</option>
                    <option value="Utilitário">🚙 Utilitário</option>
                    <option value="Semi Pesado">🚚 Semi Pesado</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">Mensagem *</label>
                  <textarea
                    name="message"
                    placeholder="Descreva sua necessidade ou situação..."
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[rgb(68,235,21)] focus:outline-none focus:ring-4 focus:ring-[rgb(68,235,21)]/10 focus:bg-white transition-all text-base resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[rgb(68,235,21)] to-[rgb(40,180,0)] text-black font-black px-8 py-5 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-lg flex items-center justify-center gap-3 shadow-xl relative overflow-hidden group"
                  style={{ boxShadow: 'rgba(68, 235, 21, 0.4) 0px 8px 30px' }}
                >
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <WhatsAppGlyph className="w-7 h-7 relative z-10 group-hover:rotate-12 transition-transform" />
                  <span className="relative z-10">ENVIAR VIA WHATSAPP</span>
                </button>
                <p className="text-center text-gray-500 text-sm mt-4">
                  Ao enviar, você será redirecionado para o WhatsApp
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
