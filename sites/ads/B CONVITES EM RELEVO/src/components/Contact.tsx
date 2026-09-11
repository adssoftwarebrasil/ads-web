import { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    const text =
      `Olá! Meu nome é ${form.name}.` +
      `%0AE-mail: ${form.email}` +
      (form.phone ? `%0ATelefone: ${form.phone}` : '') +
      `%0A%0A${form.message}`;
    window.open(`https://wa.me/5561986054473?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="rgb(17,50,255)"></circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)"></rect>
        </svg>
      </div>
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-blue-100 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 border-4 border-slate-100 rotate-45 opacity-30"></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full shadow-lg mb-6">
            <MessageCircle size={16} />
            <span className="font-semibold text-sm tracking-wider uppercase">Fale Conosco</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Entre em <span className="text-[rgb(17,50,255)] italic font-serif">Contato</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-0.5 bg-slate-300"></div>
            <div className="w-2 h-2 bg-[rgb(17,50,255)] rounded-full"></div>
            <div className="w-16 h-0.5 bg-slate-300"></div>
          </div>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender você e criar <span className="font-semibold text-slate-900">convites incríveis</span> para seu evento especial
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Informações de Contato</h3>
              <div className="w-16 h-1 bg-[rgb(17,50,255)]"></div>
            </div>
            <div className="space-y-4">
              <a
                href="https://wa.me/5561986054473"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-6 bg-slate-50 hover:bg-white border-2 border-transparent hover:border-[rgb(17,50,255)] transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <WhatsAppIcon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-slate-900 mb-1 text-lg">WhatsApp</div>
                  <div className="text-[rgb(17,50,255)] font-semibold text-lg">+55 61 98605-4473</div>
                  <div className="text-slate-500 text-sm mt-1">Clique para conversar agora</div>
                </div>
              </a>
              <a
                href="tel:+5561986054473"
                className="group flex items-start gap-4 p-6 bg-slate-50 hover:bg-white border-2 border-transparent hover:border-slate-900 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-[rgb(17,50,255)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-slate-900 mb-1 text-lg">Telefone</div>
                  <div className="text-[rgb(17,50,255)] font-semibold text-lg">+55 61 98605-4473</div>
                </div>
              </a>
              <a
                href="mailto:brelevo@hotmail.com"
                className="group flex items-start gap-4 p-6 bg-slate-50 hover:bg-white border-2 border-transparent hover:border-slate-900 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-slate-900 mb-1 text-lg">E-mail</div>
                  <div className="text-[rgb(17,50,255)] font-semibold">brelevo@hotmail.com</div>
                </div>
              </a>
              <div className="flex items-start gap-4 p-6 bg-slate-50 shadow-sm">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-50 flex items-center justify-center">
                  <MapPin size={28} className="text-[rgb(17,50,255)]" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-slate-900 mb-1 text-lg">Endereço</div>
                  <div className="text-slate-600">
                    SIG quadra 06 lote 1455 loja 03 setor industrial<br />
                    Zona Industrial - Brasília, DF<br />
                    CEP: 70.610-460
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-blue-50 shadow-sm border-2 border-[rgb(17,50,255)]">
                <div className="flex-shrink-0 w-14 h-14 bg-[rgb(17,50,255)] flex items-center justify-center">
                  <Clock size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-slate-900 mb-1 text-lg">Horário de Atendimento</div>
                  <div className="text-slate-700 font-medium">
                    Segunda a Sexta-feira<br />
                    <span className="text-[rgb(17,50,255)] font-bold text-lg">9h às 17h</span>
                  </div>
                  <div className="text-slate-600 text-sm mt-2">Atendimento presencial com hora marcada</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 shadow-2xl overflow-hidden">
            <div className="bg-[rgb(17,50,255)] p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 relative z-10">Envie sua Mensagem</h3>
              <p className="text-blue-100 relative z-10">Será redirecionado para o WhatsApp</p>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-white mb-2 uppercase tracking-wider">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white border-2 border-slate-700 focus:border-[rgb(17,50,255)] focus:outline-none transition-colors duration-300 text-slate-900"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-white mb-2 uppercase tracking-wider">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white border-2 border-slate-700 focus:border-[rgb(17,50,255)] focus:outline-none transition-colors duration-300 text-slate-900"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-white mb-2 uppercase tracking-wider">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white border-2 border-slate-700 focus:border-[rgb(17,50,255)] focus:outline-none transition-colors duration-300 text-slate-900"
                  placeholder="(61) 98605-4473"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-white mb-2 uppercase tracking-wider">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white border-2 border-slate-700 focus:border-[rgb(17,50,255)] focus:outline-none transition-colors duration-300 resize-none text-slate-900"
                  placeholder="Conte-nos sobre seu evento e como podemos ajudar..."
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-[rgb(17,50,255)] text-white px-6 py-5 font-bold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg hover:shadow-xl"
              >
                <WhatsAppIcon className="w-6 h-6" />
                <span>Enviar via WhatsApp</span>
              </button>
              <p className="text-slate-400 text-sm text-center">Ao enviar, você será redirecionado para o WhatsApp</p>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center p-8 bg-slate-50">
          <p className="text-slate-600 mb-4">
            <span className="font-bold text-slate-900">Atendimento rápido e personalizado</span> - Respondemos em minutos!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Online agora</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Resposta rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle size={16} />
              <span>Atendimento humanizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
