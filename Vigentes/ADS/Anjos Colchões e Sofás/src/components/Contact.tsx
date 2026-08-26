import { useState, FormEvent } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, LucideIcon } from 'lucide-react';

const WHATSAPP = 'https://wa.me/559431986888';

interface ContactCard {
  icon: LucideIcon;
  label: string;
  value: string;
}

const contactCards: ContactCard[] = [
  { icon: Phone, label: 'Telefone', value: '(94) 3331-9868' },
  { icon: MessageCircle, label: 'WhatsApp', value: '(94) 3198-6888' },
  { icon: Mail, label: 'E-mail', value: 'contato@anjoscolchoes.com.br' },
  { icon: MapPin, label: 'Endereço', value: 'Marabá - PA' },
  { icon: Clock, label: 'Horário', value: 'Seg-Sex: 8h-18h | Sáb: 8h-14h' },
];

const subjects = [
  'Informações sobre produtos',
  'Solicitar orçamento',
  'Dúvidas sobre entrega',
  'Outros assuntos',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: subjects[0],
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.
Assunto: ${form.subject}
E-mail: ${form.email}
Telefone: ${form.phone}
Mensagem: ${form.message}`;
    window.open(`${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#D1AD6E] to-transparent"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#004A69] mb-4 px-4">
            Entre em Contato
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Estamos prontos para atender você e realizar o sonho do seu lar perfeito
          </p>
        </div>
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="bg-gradient-to-br from-[#004A69] to-[#003D5C] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
              Fale Conosco
            </h3>
            <p className="text-gray-200 mb-6 sm:mb-8 leading-relaxed text-center text-sm sm:text-base">
              Nossa equipe está pronta para te ajudar a encontrar o produto perfeito
              para sua casa. Entre em contato pelos nossos canais de atendimento.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-6 sm:mb-8">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <a
                    key={card.label}
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center text-center gap-3 p-4 sm:p-5 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="bg-[#D1AD6E] w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#004A69]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#D1AD6E] mb-1 text-sm sm:text-base">
                        {card.label}
                      </div>
                      <div className="text-white text-xs sm:text-sm">
                        {card.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="p-5 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <h4 className="font-bold text-[#D1AD6E] mb-3 text-center text-base sm:text-lg">
                Visite Nossa Loja
              </h4>
              <p className="text-sm text-gray-200 leading-relaxed text-center">
                Venha conhecer pessoalmente nossos produtos e receba atendimento
                especializado. Teste o conforto e tire todas as suas dúvidas.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold text-[#004A69] mb-6 text-center">
              Envie uma Mensagem
            </h3>
            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#D1AD6E] focus:ring-2 focus:ring-[#D1AD6E]/20 outline-none transition-all text-sm sm:text-base"
                  placeholder="Seu nome"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#D1AD6E] focus:ring-2 focus:ring-[#D1AD6E]/20 outline-none transition-all text-sm sm:text-base"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#D1AD6E] focus:ring-2 focus:ring-[#D1AD6E]/20 outline-none transition-all text-sm sm:text-base"
                    placeholder="(94) 99999-9999"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Assunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#D1AD6E] focus:ring-2 focus:ring-[#D1AD6E]/20 outline-none transition-all bg-white text-sm sm:text-base"
                >
                  {subjects.map((subject) => (
                    <option key={subject}>{subject}</option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#D1AD6E] focus:ring-2 focus:ring-[#D1AD6E]/20 outline-none transition-all resize-none text-sm sm:text-base"
                  placeholder="Conte-nos como podemos ajudar..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#004A69] to-[#003D5C] text-white py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:from-[#D1AD6E] hover:to-[#C19B5E] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Enviar via WhatsApp
              </button>
              <p className="text-xs text-center text-gray-500 mt-4">
                Você será redirecionado para o WhatsApp para enviar a mensagem
              </p>
            </form>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#D1AD6E] to-[#C19B5E] rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Atendimento pelo WhatsApp
          </h3>
          <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Fale com nossos especialistas agora mesmo e tire todas as suas dúvidas
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-white text-[#004A69] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-[#004A69] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
