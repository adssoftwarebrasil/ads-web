import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Gostaria de solicitar um orçamento.%0A%0A*Nome:* ${form.name}%0A*WhatsApp:* ${form.whatsapp}%0A*E-mail:* ${form.email}%0A*Assunto:* ${form.subject}%0A*Detalhes:* ${form.message}`;
    window.open(
      `https://api.whatsapp.com/send?phone=5562930951429&text=${text}`,
      '_blank'
    );
  };

  return (
    <section
      id="contato"
      className="py-24 md:py-36 bg-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
            Transforme seu Espaço. Fale Conosco!
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Sua ideia de tapete exclusivo começa aqui. Entre em contato e vamos
            criar juntos!
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-0 max-w-7xl mx-auto">
          <div className="bg-white p-8 sm:p-10 lg:p-14 md:col-span-3">
            <h3 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Solicite seu Orçamento Rápido
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2 capitalize"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-[rgb(183,40,26)] focus:border-[rgb(183,40,26)] transition-all duration-300 placeholder-gray-500 text-gray-800"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-medium text-gray-700 mb-2 capitalize"
                >
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  required
                  value={form.whatsapp}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-[rgb(183,40,26)] focus:border-[rgb(183,40,26)] transition-all duration-300 placeholder-gray-500 text-gray-800"
                  placeholder="(62) 99999-9999"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2 capitalize"
                >
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-[rgb(183,40,26)] focus:border-[rgb(183,40,26)] transition-all duration-300 placeholder-gray-500 text-gray-800"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2 capitalize"
                >
                  Assunto{' '}
                </label>
                <input
                  type="text"
                  id="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-[rgb(183,40,26)] focus:border-[rgb(183,40,26)] transition-all duration-300 placeholder-gray-500 text-gray-800"
                  placeholder="Qual tipo de tapete você busca?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Detalhes do Projeto (Opcional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-[rgb(183,40,26)] focus:border-[rgb(183,40,26)] transition-all duration-300 resize-none placeholder-gray-500 text-gray-800"
                  placeholder="Dimensões, cores preferidas, inspirações..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-3 bg-[rgb(183,40,26)] hover:bg-[rgb(150,30,20)] text-white px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl transform hover:scale-[1.01]"
              >
                <span>Enviar Orçamento Agora</span>
                <Send className="lucide lucide-send" width={24} height={24} />
              </button>
            </form>
          </div>
          <div className="bg-gray-800 text-white p-8 sm:p-10 lg:p-14 md:col-span-2 flex flex-col justify-between">
            <div className="space-y-8 mb-10">
              <h3 className="text-4xl font-bold text-[rgb(183,40,26)] mb-4 leading-tight">
                Nossa Localização
              </h3>
              <div className="space-y-5">
                <div className="flex items-start space-x-4 text-lg">
                  <MapPin
                    className="lucide lucide-map-pin text-[rgb(183,40,26)] flex-shrink-0 mt-1"
                    width={28}
                    height={28}
                  />
                  <div>
                    R. Castro Alves, Quadra 1, Lote 37 - Parque Anhanguera,
                    <br />
                    Goiânia - GO, 74335-050
                  </div>
                </div>
                <p className="flex items-center space-x-4 text-lg">
                  <Phone
                    className="lucide lucide-phone text-[rgb(183,40,26)] flex-shrink-0"
                    width={28}
                    height={28}
                  />
                  <span>(62) 3095-1429 (WhatsApp)</span>
                </p>
                <p className="flex items-center space-x-4 text-lg">
                  <Mail
                    className="lucide lucide-mail text-[rgb(183,40,26)] flex-shrink-0"
                    width={28}
                    height={28}
                  />
                  <span>contato@pjtapetes.com.br</span>
                </p>
              </div>
            </div>
            <div className="w-full h-80 rounded-xl overflow-hidden shadow-xl border-4 border-gray-700 mt-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2467.805921048383!2d-49.3045277!3d-16.7209209!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef6de8d406b41%3A0x85b901cc1c3440a!2sPJ%20-%20Tapetes%20Personalizados%20(Capachos)!5e1!3m2!1spt-BR!2sbr!4v1765297650858!5m2!1spt-BR!2sbr"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização PJ Tapetes"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
