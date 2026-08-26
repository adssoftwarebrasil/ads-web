import { useState, FormEvent } from 'react';
import { Phone, MapPin, Mail, User, Briefcase, Send, Shield } from 'lucide-react';
import { openWhatsApp } from '../lib/site';

const SERVICE_OPTIONS = [
  'Gestão de Resíduos',
  'Descaracterização',
  'Incineração',
  'Coprocessamento',
  'Descontaminação',
  'Coleta e Transporte',
  'Outros',
];

export default function Contact() {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [servico, setServico] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de solicitar um orçamento.\n\nNome: ${nome}\nWhatsApp: ${whatsapp}\nE-mail: ${email}\nTipo de Serviço: ${servico}\nMensagem: ${mensagem}`;
    openWhatsApp(msg);
  };

  return (
    <section
      id="contato"
      className="relative py-24 md:py-28 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(40, 120, 80, 0.95), rgba(130, 196, 92, 0.95)), url("https://storage.lucasmendes.dev/site-sp/indcom/img/fale-conosco-background-paralax.webp")',
      }}
    >
      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[45%_55%] gap-16 items-start">
          <div className="text-white transition-all duration-700 opacity-0 -translate-x-8">
            <div className="inline-block px-5 py-2 bg-[rgb(130,196,92)] text-[rgb(20,80,50)] rounded-full text-sm font-bold mb-5">
              Fale Conosco
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Entre em contato com nossa equipe
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-10">
              Estamos prontos para atender você e apresentar as melhores soluções em gestão de resíduos.
            </p>
            <div className="space-y-5 mb-10">
              <div className="flex items-center gap-5 bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-6 hover:bg-white/20 transition-all">
                <div className="w-[52px] h-[52px] rounded-full bg-[rgb(130,196,92)] flex items-center justify-center flex-shrink-0">
                  <Phone className="lucide lucide-phone w-6 h-6 text-[rgb(20,80,50)]" />
                </div>
                <div>
                  <div className="text-[13px] uppercase tracking-wide text-white/60 mb-1">Telefone</div>
                  <div className="text-lg font-semibold">(62) 3316-1555</div>
                </div>
              </div>
              <div className="flex items-center gap-5 bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-6 hover:bg-white/20 transition-all">
                <div className="w-[52px] h-[52px] rounded-full bg-[rgb(130,196,92)] flex items-center justify-center flex-shrink-0">
                  <MapPin className="lucide lucide-map-pin w-6 h-6 text-[rgb(20,80,50)]" />
                </div>
                <div>
                  <div className="text-[13px] uppercase tracking-wide text-white/60 mb-1">Endereço</div>
                  <div className="text-lg font-semibold">Rua R5 Qd 11 Lt 10-15 Daia - Anápolis</div>
                </div>
              </div>
              <div className="flex items-center gap-5 bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-6 hover:bg-white/20 transition-all">
                <div className="w-[52px] h-[52px] rounded-full bg-[rgb(130,196,92)] flex items-center justify-center flex-shrink-0">
                  <Mail className="lucide lucide-mail w-6 h-6 text-[rgb(20,80,50)]" />
                </div>
                <div>
                  <div className="text-[13px] uppercase tracking-wide text-white/60 mb-1">E-mail</div>
                  <div className="text-lg font-semibold">sac@indcomambiental.com.br</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://storage.lucasmendes.dev/site-sp/indcom/img/fale-conosco-reciclagem.webp"
                alt="Reciclagem"
                className="rounded-2xl shadow-xl max-h-[250px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="transition-all duration-700 delay-300 opacity-0 translate-x-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <h3 className="text-2xl font-bold text-[rgb(40,120,80)] mb-2">Solicite um Orçamento</h3>
              <p className="text-sm text-gray-600 mb-8">Preencha os campos abaixo</p>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-semibold text-[rgb(40,120,80)] mb-2">Nome Completo</label>
                  <div className="relative">
                    <User className="lucide lucide-user absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Seu nome"
                      required
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[rgb(130,196,92)] focus:outline-none focus:ring-4 focus:ring-[rgba(130,196,92,0.2)] transition-all text-[15px]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[rgb(40,120,80)] mb-2">WhatsApp</label>
                  <div className="relative">
                    <Phone className="lucide lucide-phone absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="(00) 00000-0000"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[rgb(130,196,92)] focus:outline-none focus:ring-4 focus:ring-[rgba(130,196,92,0.2)] transition-all text-[15px]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[rgb(40,120,80)] mb-2">E-mail</label>
                  <div className="relative">
                    <Mail className="lucide lucide-mail absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[rgb(130,196,92)] focus:outline-none focus:ring-4 focus:ring-[rgba(130,196,92,0.2)] transition-all text-[15px]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[rgb(40,120,80)] mb-2">Tipo de Serviço</label>
                  <div className="relative">
                    <Briefcase className="lucide lucide-briefcase absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      required
                      value={servico}
                      onChange={(e) => setServico(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[rgb(130,196,92)] focus:outline-none focus:ring-4 focus:ring-[rgba(130,196,92,0.2)] transition-all text-[15px] appearance-none bg-white"
                    >
                      <option value="">Selecione um serviço</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[rgb(40,120,80)] mb-2">Mensagem</label>
                  <textarea
                    rows={4}
                    placeholder="Conte-nos sobre sua necessidade..."
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[rgb(130,196,92)] focus:outline-none focus:ring-4 focus:ring-[rgba(130,196,92,0.2)] transition-all text-[15px] resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-[rgb(40,120,80)] to-[rgb(130,196,92)] text-white rounded-xl font-bold text-base hover:scale-102 hover:shadow-xl transition-all flex items-center justify-center gap-3"
                >
                  <Send className="lucide lucide-send w-5 h-5" />
                  Enviar pelo WhatsApp
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                  <Shield className="lucide lucide-shield w-4 h-4" />
                  Seus dados estão seguros e serão usados apenas para contato.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
