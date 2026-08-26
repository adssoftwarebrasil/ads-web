import { useState } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const subjects = [
  'Orçamento Residencial',
  'Orçamento Comercial',
  'Orçamento Industrial',
  'Projeto Luminotécnico',
  'Parceria Profissional',
  'Dúvida sobre produto',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Olá! Meu nome é ${form.name}.`,
      form.subject ? `Assunto: ${form.subject}` : '',
      form.phone ? `Telefone: ${form.phone}` : '',
      form.email ? `E-mail: ${form.email}` : '',
      form.message ? `Mensagem: ${form.message}` : '',
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`http://wa.me/553530646373?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-[#239110]/10 text-[#239110] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-send"
            >
              <path d="m22 2-7 20-4-9-9-4Z"></path>
              <path d="M22 2 11 13"></path>
            </svg>
            Fale Conosco
          </div>
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-black text-[#010101] leading-tight mb-4">
            Entre em <span className="text-[#239110]">contato</span>
          </h2>
          <p className="animate-on-scroll text-gray-500 text-lg max-w-2xl mx-auto">
            Estamos prontos para ajudar no seu projeto. Fale com nossa equipe e receba uma
            consultoria gratuita.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-on-scroll space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#239110]/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-[#239110]/10 text-[#239110] rounded-lg flex items-center justify-center">
                    <MapPin className="lucide lucide-map-pin" width={20} height={20} />
                  </div>
                  <span className="font-semibold text-[#010101] text-sm">Endereço</span>
                </div>
                <p className="text-gray-600 text-sm">R. Cel. Virgílio Silva, 1294</p>
                <p className="text-gray-600 text-sm">Vila Nova, Poços de Caldas - MG</p>
                <p className="text-gray-600 text-sm">CEP: 37701-000</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#239110]/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-[#239110]/10 text-[#239110] rounded-lg flex items-center justify-center">
                    <Clock className="lucide lucide-clock" width={20} height={20} />
                  </div>
                  <span className="font-semibold text-[#010101] text-sm">
                    Horário de Funcionamento
                  </span>
                </div>
                <p className="text-gray-600 text-sm">Segunda a Sexta: 08h às 18h</p>
                <p className="text-gray-600 text-sm">Sábado: 08h às 12h</p>
                <p className="text-gray-600 text-sm">Domingo: Fechado</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#239110]/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-[#239110]/10 text-[#239110] rounded-lg flex items-center justify-center">
                    <Phone className="lucide lucide-phone" width={20} height={20} />
                  </div>
                  <span className="font-semibold text-[#010101] text-sm">Telefone</span>
                </div>
                <a href="tel:+553530646373" className="hover:text-[#239110] transition-colors">
                  <p className="text-gray-600 text-sm">(35) 3064-6373</p>
                </a>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#239110]/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-[#239110]/10 text-[#239110] rounded-lg flex items-center justify-center">
                    <Mail className="lucide lucide-mail" width={20} height={20} />
                  </div>
                  <span className="font-semibold text-[#010101] text-sm">E-mail</span>
                </div>
                <a
                  href="mailto:caldenseled@yahoo.com"
                  className="hover:text-[#239110] transition-colors"
                >
                  <p className="text-gray-600 text-sm">caldenseled@yahoo.com</p>
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.818437089344!2d-46.55001922472222!3d-21.787286880058765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9dd7670d54627%3A0xf571855d4e52f61e!2sCaldense%20Led%20Ilumina%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1772626424623!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Caldense LED"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="bg-[#010101] rounded-3xl p-8 space-y-5">
              <h3 className="text-xl font-bold text-white mb-2">Enviar Mensagem</h3>
              <p className="text-gray-400 text-sm mb-6">
                Preencha o formulário e você será redirecionado para o WhatsApp com sua mensagem
                pronta.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#239110] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Telefone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(00) 00000-0000"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#239110] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
                <input
                  type="email"
                  name="email"
                  placeholder="seuemail@exemplo.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#239110] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Assunto *</label>
                <select
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#239110] transition-colors appearance-none"
                >
                  <option value="" className="bg-gray-900">
                    Selecione um assunto
                  </option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject} className="bg-gray-900">
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem *</label>
                <textarea
                  name="message"
                  required
                  placeholder="Descreva seu projeto ou necessidade..."
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#239110] transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#239110] hover:bg-[#1a6b0c] text-white py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-green-900/40 flex items-center justify-center gap-2 group"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
