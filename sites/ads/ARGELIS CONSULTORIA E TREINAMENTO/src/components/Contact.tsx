import { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, User, Building2, Send } from 'lucide-react';

const services = [
  'Consultoria Financeira',
  'Consultoria de Operações',
  'Treinamentos In Company',
  'Valuation & M&A',
  'Planejamento Estratégico',
  'Outros',
];

export default function Contact() {
  const [selected, setSelected] = useState<string[]>([]);
  const [accepted, setAccepted] = useState(false);

  const toggle = (s: string) =>
    setSelected((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-[rgb(30,60,140)] to-[rgb(20,40,100)] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[rgb(62,215,252)]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 text-white space-y-10">
            <div>
              <span className="text-[rgb(62,215,252)] font-semibold tracking-wider text-sm uppercase mb-3 block">
                Fale Conosco
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Vamos impulsionar seus resultados?</h2>
              <p className="text-blue-100/80 text-lg leading-relaxed">
                Entre em contato para agendar um diagnóstico inicial ou tirar dúvidas sobre nossas soluções.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                  <MapPin
                    width={24}
                    height={24}
                    className="text-[rgb(62,215,252)] group-hover:text-[rgb(30,60,140)] transition-colors"
                  />
                </div>
                <div>
                  <div className="font-bold text-lg mb-1">Localização</div>
                  <div className="text-blue-100/70 leading-relaxed">
                    Ribeirão Preto - SP
                    <br />
                    Atendimento em toda região
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                  <Phone
                    width={24}
                    height={24}
                    className="text-[rgb(62,215,252)] group-hover:text-[rgb(30,60,140)] transition-colors"
                  />
                </div>
                <div>
                  <div className="font-bold text-lg mb-1">WhatsApp &amp; Telefone</div>
                  <a
                    href="http://wa.me/5516991931444"
                    className="text-blue-100/70 hover:text-white hover:underline transition-colors block"
                  >
                    (16) 99193-1444
                  </a>
                  <span className="text-xs text-blue-200/50">Seg-Sex, 8h às 18h</span>
                </div>
              </div>
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                  <Mail
                    width={24}
                    height={24}
                    className="text-[rgb(62,215,252)] group-hover:text-[rgb(30,60,140)] transition-colors"
                  />
                </div>
                <div>
                  <div className="font-bold text-lg mb-1">E-mail Corporativo</div>
                  <a
                    href="mailto:contato@argelis.com.br"
                    className="text-blue-100/70 hover:text-white hover:underline transition-colors"
                  >
                    contato@argelis.com.br
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[rgb(62,215,252)]/20 to-[rgb(64,102,215)]/20 border border-white/10 backdrop-blur-sm">
              <p className="text-sm font-medium text-white flex items-center gap-2">
                <MessageSquare width={18} height={18} className="text-[rgb(62,215,252)]" />
                Resposta garantida em até 24 horas úteis.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[rgb(64,102,215)] to-[rgb(62,215,252)]"></div>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <h3 className="text-gray-900 font-bold flex items-center gap-2 mb-4 text-lg border-b border-gray-100 pb-2">
                    <User width={20} height={20} className="text-[rgb(64,102,215)]" />
                    Seus Dados
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Nome Completo</label>
                      <input
                        type="text"
                        placeholder="Digite seu nome"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[rgb(64,102,215)] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">E-mail</label>
                      <input
                        type="email"
                        placeholder="seu@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[rgb(64,102,215)] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="(00) 00000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[rgb(64,102,215)] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold flex items-center gap-2 mb-4 text-lg border-b border-gray-100 pb-2">
                    <Building2 width={20} height={20} className="text-[rgb(64,102,215)]" />
                    Sobre a Empresa
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-1">
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Nome da Empresa</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[rgb(64,102,215)] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Segmento</label>
                      <select
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[rgb(64,102,215)] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-gray-600"
                        required
                        defaultValue=""
                      >
                        <option value="">Selecione</option>
                        <option value="Indústria">Indústria</option>
                        <option value="Comércio">Comércio</option>
                        <option value="Serviços">Serviços</option>
                        <option value="Agronegócio">Agronegócio</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Faturamento (Ano)</label>
                      <select
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[rgb(64,102,215)] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-gray-600"
                        required
                        defaultValue=""
                      >
                        <option value="">Selecione</option>
                        <option value="Até 1M">Até R$ 1M</option>
                        <option value="1M a 5M">R$ 1M a 5M</option>
                        <option value="5M a 10M">R$ 5M a 10M</option>
                        <option value="10M+">Acima de R$ 10M</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">Como podemos ajudar? (Selecione)</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => {
                      const isSel = selected.includes(s);
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggle(s)}
                          className={
                            isSel
                              ? 'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border bg-[rgb(64,102,215)] text-white border-[rgb(64,102,215)]'
                              : 'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border bg-white text-gray-600 border-gray-200 hover:border-[rgb(64,102,215)] hover:text-[rgb(64,102,215)]'
                          }
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="space-y-4">
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[rgb(64,102,215)] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none"
                    placeholder="Detalhes adicionais (opcional)..."
                  ></textarea>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div
                      className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                        accepted
                          ? 'bg-[rgb(64,102,215)] border-[rgb(64,102,215)]'
                          : 'bg-white border-gray-300 group-hover:border-[rgb(64,102,215)]'
                      }`}
                    >
                      {accepted && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={14}
                          height={14}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      )}
                    </div>
                    <input type="checkbox" className="hidden" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} />
                    <span className="text-sm text-gray-600">Aceito contato via WhatsApp</span>
                  </label>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[rgb(64,102,215)] to-[rgb(62,215,252)] text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <Send width={20} height={20} />
                    Enviar Solicitação
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
