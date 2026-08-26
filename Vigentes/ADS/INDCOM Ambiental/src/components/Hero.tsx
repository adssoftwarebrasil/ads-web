import { useState, FormEvent } from 'react';
import { CheckCircle, User, Phone, Mail, Briefcase, Send } from 'lucide-react';
import { openWhatsApp, scrollToId } from '../lib/site';

const SERVICE_OPTIONS = [
  'Gestão de Resíduos',
  'Descaracterização',
  'Incineração',
  'Coprocessamento',
  'Descontaminação',
  'Coleta e Transporte',
  'Outros',
];

export default function Hero() {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [servico, setServico] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de solicitar um orçamento.\n\nNome: ${nome}\nWhatsApp: ${whatsapp}\nE-mail: ${email}\nServiço: ${servico}`;
    openWhatsApp(msg);
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/indcom/img/reciclagem-hero-paralax.webp"
          alt="Gestão de Resíduos Indcom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(20,50,30)]/95 via-[rgb(40,120,80)]/80 to-[rgb(40,120,80)]/60"></div>
      </div>
      <div className="relative z-10 container max-w-[1280px] mx-auto px-5 md:px-8 py-12 md:py-0">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[rgb(130,196,92)] animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                Líder em Gestão Ambiental
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Transformando resíduos em <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(130,196,92)] to-[#bdff80]">
                soluções sustentáveis
              </span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
              Atuamos em todo território nacional com gestão, coleta, transporte, tratamento e destinação final certificada.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-8 pt-2">
              <div className="flex items-center gap-2.5">
                <div className="p-1 bg-[rgb(130,196,92)] rounded-full">
                  <CheckCircle className="lucide lucide-check-circle w-4 h-4 text-[rgb(20,60,40)]" />
                </div>
                <span className="font-semibold text-sm">Sistema de Qualidade Integrado</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1 bg-[rgb(130,196,92)] rounded-full">
                  <CheckCircle className="lucide lucide-check-circle w-4 h-4 text-[rgb(20,60,40)]" />
                </div>
                <span className="font-semibold text-sm">Cobertura Nacional</span>
              </div>
            </div>
            <div className="flex sm:hidden flex-col gap-3 pt-4">
              <button
                onClick={() => scrollToId('hero-form')}
                className="w-full py-4 bg-[rgb(130,196,92)] text-[rgb(20,80,50)] font-bold rounded-xl"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
          <div id="hero-form" className="relative animate-fade-in-up delay-200">
            <div className="absolute -inset-1 bg-gradient-to-r from-[rgb(130,196,92)] to-teal-500 rounded-3xl blur opacity-30"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[rgb(40,120,80)]">Solicite um Orçamento</h3>
                <p className="text-gray-500 text-sm mt-1">Resposta rápida em até 30 minutos.</p>
              </div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="relative group">
                    <User className="lucide lucide-user absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[rgb(40,120,80)] transition-colors" />
                    <input
                      type="text"
                      placeholder="Seu nome completo"
                      required
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[rgb(130,196,92)] focus:ring-4 focus:ring-[rgb(130,196,92)]/10 outline-none transition-all placeholder:text-gray-400 font-medium text-gray-700"
                    />
                  </div>
                  <div className="relative group">
                    <Phone className="lucide lucide-phone absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[rgb(40,120,80)] transition-colors" />
                    <input
                      type="tel"
                      placeholder="WhatsApp com DDD"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[rgb(130,196,92)] focus:ring-4 focus:ring-[rgb(130,196,92)]/10 outline-none transition-all placeholder:text-gray-400 font-medium text-gray-700"
                    />
                  </div>
                  <div className="relative group">
                    <Mail className="lucide lucide-mail absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[rgb(40,120,80)] transition-colors" />
                    <input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[rgb(130,196,92)] focus:ring-4 focus:ring-[rgb(130,196,92)]/10 outline-none transition-all placeholder:text-gray-400 font-medium text-gray-700"
                    />
                  </div>
                  <div className="relative group">
                    <Briefcase className="lucide lucide-briefcase absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[rgb(40,120,80)] transition-colors" />
                    <select
                      required
                      value={servico}
                      onChange={(e) => setServico(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[rgb(130,196,92)] focus:ring-4 focus:ring-[rgb(130,196,92)]/10 outline-none transition-all text-gray-500 font-medium appearance-none cursor-pointer hover:bg-gray-100"
                    >
                      <option value="">Selecione o serviço</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="group w-full py-4 bg-gradient-to-r from-[rgb(40,120,80)] to-[rgb(60,160,100)] text-white rounded-xl font-bold shadow-lg shadow-green-900/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span>Falar no WhatsApp</span>
                  <Send className="lucide lucide-send w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <p className="text-center text-xs text-gray-400 mt-4">
                  Seus dados estão seguros. Não enviamos spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
