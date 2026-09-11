import { useState } from 'react';
import { CheckCircle2, User, Activity, Send } from 'lucide-react';

const painOptions = [
  { value: 'Dor nas costas', label: 'Tenho dor nas costas' },
  { value: 'Insônia', label: 'Sofro com Insônia' },
  { value: 'Cansaço excessivo', label: 'Acordo cansado(a)' },
  { value: 'Dores articulares', label: 'Dores nas articulações' },
  { value: 'Prevenção', label: 'Apenas prevenção' },
];

const bullets = [
  'Avaliação de perfil de sono gratuita',
  'Indicação técnica (densidade/magnetismo)',
  'Sem compromisso de compra',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [painType, setPainType] = useState('Dor nas costas');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${name}. Gostaria de uma consultoria. Minha necessidade: ${painType}.`;
    window.open(`https://wa.me/557988094313?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contato" className="relative bg-[rgb(26,91,178)] py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(240,53,41)]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-white space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 animate-fade-in">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-green-100">Terapeutas online</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Ainda com dúvidas sobre qual <span className="text-blue-200">colchão escolher?</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Não compre gato por lebre. Nossos especialistas analisam seu biotipo e necessidades para indicar a
              tecnologia exata para sua saúde.
            </p>
            <div className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
              {bullets.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <CheckCircle2
                    className="lucide lucide-check-circle2 text-green-400 shrink-0"
                    width={24}
                    height={24}
                  />
                  <span className="text-white font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-[rgb(240,53,41)] rounded-2xl blur opacity-30 animate-pulse"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 md:p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Falar com Especialista</h3>
              <p className="text-slate-500 text-sm mb-8">Preencha para ser atendido prioritariamente no WhatsApp.</p>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User
                      className="lucide lucide-user h-5 w-5 text-gray-400 group-focus-within:text-[rgb(26,91,178)] transition-colors"
                      width={24}
                      height={24}
                    />
                  </div>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full pl-10 pr-3 py-4 border border-gray-200 rounded-xl leading-5 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[rgb(26,91,178)] focus:border-transparent transition-all duration-200 sm:text-sm font-medium"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Activity
                      className="lucide lucide-activity h-5 w-5 text-gray-400 group-focus-within:text-[rgb(26,91,178)] transition-colors"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <select
                    id="painType"
                    value={painType}
                    onChange={(e) => setPainType(e.target.value)}
                    className="block w-full pl-10 pr-10 py-4 border border-gray-200 rounded-xl leading-5 bg-gray-50 text-gray-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[rgb(26,91,178)] focus:border-transparent transition-all duration-200 sm:text-sm font-medium appearance-none cursor-pointer"
                  >
                    {painOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[rgb(240,53,41)] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[rgb(200,40,30)] transition-all transform active:scale-95 shadow-lg hover:shadow-xl mt-4 group"
                >
                  <span>Receber Consultoria Grátis</span>
                  <Send
                    className="lucide lucide-send group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    width={20}
                    height={20}
                  />
                </button>
                <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Seus dados estão seguros e não enviaremos spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
