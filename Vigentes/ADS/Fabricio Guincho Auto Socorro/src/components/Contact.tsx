import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, Send } from 'lucide-react';
import { WhatsAppGlyph } from './icons';

export default function Contact() {
  const [form, setForm] = useState({ name: '', whatsapp: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${form.name}.\n` +
      `WhatsApp: ${form.whatsapp}\n` +
      `E-mail: ${form.email}\n` +
      `Assunto: ${form.subject}\n` +
      `Mensagem: ${form.message}`;
    window.open(`https://wa.me/5516991837044?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contato"
      className="py-16 md:py-24 bg-gradient-to-br from-[hsl(211,66%,98%)] to-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(211,66%,41%)] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F97316] opacity-5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-[hsl(211,66%,41%)] font-semibold text-sm md:text-base tracking-wider uppercase bg-white px-6 py-2 rounded-full shadow-sm">
              Contato
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(211,66%,25%)] mb-4 leading-tight">
            Entre em{' '}
            <span className="text-[hsl(211,66%,41%)] relative">
              Contato
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path
                  d="M0 4C50 4 50 4 100 4C150 4 150 4 200 4"
                  stroke="#F97316"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Dúvidas ou sugestões? Estamos prontos para atender você!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[hsl(211,66%,25%)] mb-2">Envie sua Mensagem</h3>
                <p className="text-gray-600">Preencha o formulário e entraremos em contato</p>
              </div>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Digite seu nome"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 rounded-xl focus:outline-none transition-all border-gray-200 hover:border-gray-300"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <WhatsAppGlyph className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      name="whatsapp"
                      placeholder="(16) 99999-9999"
                      required
                      value={form.whatsapp}
                      onChange={handleChange}
                      className="w-full pl-12 pr-5 py-4 border-2 rounded-xl focus:outline-none transition-all border-gray-200 hover:border-gray-300"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="seu@email.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 rounded-xl focus:outline-none transition-all border-gray-200 hover:border-gray-300"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Assunto</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Como podemos ajudar?"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 rounded-xl focus:outline-none transition-all border-gray-200 hover:border-gray-300"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem</label>
                  <textarea
                    name="message"
                    placeholder="Descreva sua necessidade..."
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 rounded-xl focus:outline-none transition-all resize-none border-gray-200 hover:border-gray-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#F97316] to-[#ea580c] text-white px-8 py-5 rounded-xl hover:shadow-2xl hover:shadow-[#F97316]/50 transition-all duration-300 hover:scale-[1.02] font-bold text-lg flex items-center justify-center gap-3 group"
                >
                  <WhatsAppGlyph className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Enviar via WhatsApp
                </button>
              </form>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="bg-gradient-to-br from-[hsl(211,66%,41%)] to-[hsl(211,66%,35%)] rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Informações de Contato</h3>
                <p className="text-white/80 mb-8">Estamos sempre disponíveis para você</p>
                <div className="space-y-6">
                  <a
                    href="tel:+5516991837044"
                    className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
                  >
                    <div className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-2xl group-hover:bg-white/30 transition-all group-hover:scale-110 shadow-lg">
                      <Phone width={24} height={24} className="lucide lucide-phone " />
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">Telefone / WhatsApp</p>
                      <p className="text-white/90 text-lg">(16) 99183-7044</p>
                    </div>
                  </a>
                  <a
                    href="mailto:fabricio@guinchoautosocorro.com.br"
                    className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
                  >
                    <div className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-2xl group-hover:bg-white/30 transition-all group-hover:scale-110 shadow-lg">
                      <Mail width={24} height={24} className="lucide lucide-mail " />
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">E-mail</p>
                      <p className="text-white/90 break-all">fabricio@guinchoautosocorro.com.br</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-2xl shadow-lg">
                      <MapPin width={24} height={24} className="lucide lucide-map-pin " />
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">Endereço</p>
                      <p className="text-white/90">Rua Aparecida de Melo Oliveira, 3270</p>
                      <p className="text-white/90">Residencial Zanetti, Franca – SP</p>
                      <p className="text-white/90">CEP: 14412-340</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#10B981] to-[#059669] text-white p-8 rounded-3xl text-center shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Clock width={36} height={36} className="lucide lucide-clock " />
                </div>
                <h4 className="text-2xl md:text-3xl font-bold mb-2">Horário de Atendimento</h4>
                <p className="text-xl text-white/90 mb-4">7h da manhã até 23h30</p>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <CheckCircle width={20} height={20} className="lucide lucide-check-circle " />
                  <span>Todos os dias</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#F97316]/10 p-4 rounded-2xl">
                  <Send width={24} height={24} className="lucide lucide-send w-8 h-8 text-[#F97316]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[hsl(211,66%,25%)]">Resposta Rápida</h4>
                  <p className="text-gray-600">Retornamos em até 1 hora</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Nossa equipe está pronta para atender suas solicitações com agilidade e eficiência.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
