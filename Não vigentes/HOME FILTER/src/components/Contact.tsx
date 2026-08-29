import { useState } from 'react';
import { MessageCircle, User, Phone, AtSign, Bookmark, Send, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto =
      `Olá! Meu nome é ${nome}.%0A` +
      `WhatsApp: ${whatsapp}%0A` +
      `E-mail: ${email}%0A` +
      `Assunto: ${assunto}%0A` +
      `Mensagem: ${mensagem}`;
    window.open(`https://api.whatsapp.com/send?phone=556284455153&text=${texto}`, '_blank');
  };

  return (
    <section
      id="contato"
      className="relative py-24 bg-cover bg-center bg-fixed overflow-hidden"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/homefilt%2FEstamos%20prontos%20para%20ajudar%20voce%CC%82-paralax.jpeg")',
      }}
    >
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Fale Conosco</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-3 mb-6">
            Estamos <span className="text-blue-500">Prontos</span> para Ajudar
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <MessageCircle className="lucide lucide-message-circle text-blue-600" width={24} height={24} />
              Envie uma Mensagem
            </h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <label className="block text-slate-700 font-bold mb-2 ml-1 text-sm uppercase tracking-wide">
                    Nome Completo
                  </label>
                  <User className="lucide lucide-user absolute left-4 top-[46px] text-slate-400" width={20} height={20} />
                  <input
                    type="text"
                    required
                    placeholder="Ex: João Silva"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full pl-12 pr-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-slate-50 text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <div className="relative">
                  <label className="block text-slate-700 font-bold mb-2 ml-1 text-sm uppercase tracking-wide">
                    WhatsApp
                  </label>
                  <Phone className="lucide lucide-phone absolute left-4 top-[46px] text-slate-400" width={20} height={20} />
                  <input
                    type="tel"
                    required
                    placeholder="(00) 00000-0000"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full pl-12 pr-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-slate-50 text-slate-900 placeholder:text-slate-400"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <label className="block text-slate-700 font-bold mb-2 ml-1 text-sm uppercase tracking-wide">
                    homefiltros2024@gmail.com
                  </label>
                  <AtSign className="lucide lucide-at-sign absolute left-4 top-[46px] text-slate-400" width={20} height={20} />
                  <input
                    type="email"
                    required
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-slate-50 text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <div className="relative">
                  <label className="block text-slate-700 font-bold mb-2 ml-1 text-sm uppercase tracking-wide">
                    Assunto
                  </label>
                  <Bookmark className="lucide lucide-bookmark absolute left-4 top-[46px] text-slate-400" width={20} height={20} />
                  <input
                    type="text"
                    required
                    placeholder="Ex: Orçamento de Purificador"
                    value={assunto}
                    onChange={(e) => setAssunto(e.target.value)}
                    className="w-full pl-12 pr-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-slate-50 text-slate-900 placeholder:text-slate-400"
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-slate-700 font-bold mb-2 ml-1 text-sm uppercase tracking-wide">
                  Como podemos ajudar?
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Descreva o que você precisa..."
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 text-slate-900 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="group w-full bg-blue-600 text-white px-8 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                ENVIAR PARA WHATSAPP
                <Send className="lucide lucide-send group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" width={20} height={20} />
              </button>
            </form>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-blue-600 rounded-[2.5rem] p-10 text-white shadow-xl relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors"></div>
              <h3 className="text-2xl font-bold mb-8 relative z-10">Informações Diretas</h3>
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-5">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Phone className="lucide lucide-phone" width={24} height={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase opacity-70">Telefone / Whats</p>
                    <p className="text-lg font-semibold">(62) 8445-5153</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Mail className="lucide lucide-mail" width={24} height={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase opacity-70">E-mail</p>
                    <p className="text-lg font-semibold">homefilter2024@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <MapPin className="lucide lucide-map-pin" width={24} height={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase opacity-70">Endereço</p>
                    <p className="text-sm font-medium leading-relaxed">
                      Av. Vera Cruz, 1724, Jd. Guanabara <br /> Goiânia/GO - CEP: 74675-830
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white h-[280px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.846552550131!2d-49.2227289!3d-16.6343513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef39589d8935b%3A0x6331908b9815049a!2sAv.%20Vera%20Cruz%2C%201724%20-%20Jardim%20Guanabara%2C%20Goi%C3%A2nia%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                title="Localização HOME FILTER"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
