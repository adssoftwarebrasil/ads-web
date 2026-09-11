import { useState, type FormEvent } from 'react';
import { User, Phone, Mail, Hash, MessageSquare, Send, MapPin } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = `Olá! Meu nome é ${name}.\n\nWhatsApp: ${whatsapp}\nE-mail: ${email}\nAssunto: ${subject}\n\n${message}`;
    const url = `https://api.whatsapp.com/send?phone=553186610041&text=${encodeURIComponent(
      body
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-[#256C8F] uppercase bg-blue-50 rounded-full border border-blue-100">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Dúvidas ou <span className="text-[#256C8F]">Sugestões?</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Nossa equipe está pronta para te atender. Escolha o canal de sua
            preferência ou envie uma mensagem abaixo.
          </p>
        </div>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-gray-50 p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative">
                  <label className="block text-xs font-bold text-gray-500 uppercase ml-4 mb-1">
                    Nome Completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Ex: João Silva"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#256C8F] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-xs font-bold text-gray-500 uppercase ml-4 mb-1">
                    WhatsApp
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      placeholder="(31) 98661-0041"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#256C8F] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-bold text-gray-500 uppercase ml-4 mb-1">
                  E-mail Corporativo
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="exemplo@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#256C8F] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-bold text-gray-500 uppercase ml-4 mb-1">
                  Assunto
                </label>
                <div className="relative">
                  <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Ex: Cotação de Seguro Auto"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#256C8F] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-bold text-gray-500 uppercase ml-4 mb-1">
                  Sua Mensagem
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-5 text-gray-400 w-5 h-5" />
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Como podemos ajudar você hoje?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#256C8F] focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FA0000] text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all duration-300 shadow-xl shadow-red-500/20 flex items-center justify-center gap-3 group"
              >
                Enviar via WhatsApp
                <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#256C8F] p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
              <h4 className="text-2xl font-bold mb-8">Canais de Atendimento</h4>
              <div className="space-y-6">
                <a
                  href="tel:+5531986610041"
                  className="flex items-center gap-4 hover:translate-x-2 transition-transform"
                >
                  <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Ligue agora</p>
                    <p className="font-bold text-lg">+55 (31) 98661-0041</p>
                  </div>
                </a>
                <a
                  href="mailto:asmysegcorretora@yahoo.com.br"
                  className="flex items-center gap-4 hover:translate-x-2 transition-transform"
                >
                  <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">E-mail oficial</p>
                    <p className="font-bold text-lg">
                      asmysegcorretora@yahoo.com.br
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Nosso endereço</p>
                    <p className="font-bold leading-tight">
                      Av. Sinfrônio Brochado 864, Sala 02
                      <br />
                      Barreiro - Belo Horizonte/MG
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-lg h-72 border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.5244585973646!2d-44.02058422384666!3d-19.98648894002626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa696660f772b15%3A0x6006e89791409395!2sAv.%20Sinfr%C3%B4nio%20Brochado%2C%20864%20-%20Barreiro%2C%20Belo%20Horizonte%20-%20MG%2C%2030640-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                title="Mapa da Asmyseg"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
