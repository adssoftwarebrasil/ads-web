import { Phone, Mail, MapPin, Send } from 'lucide-react';

const phones = [
  { label: '(31) 99382-0980', href: 'tel:+5531993820980' },
  { label: '(31) 99193-3648', href: 'tel:+5531991933648' },
  { label: '(11) 98768-1920', href: 'tel:+5511987681920' },
];

const venues = ['Clube Chalezinho', 'Observatório', 'Violada Porcão', 'Rust Music Bar'];

export default function Contact() {
  return (
    <section id="contato" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
          Leve para o seu Evento
          <div className="h-1 w-24 bg-[#DAA520] mx-auto mt-4"></div>
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          Entre em contato e garanta um show inesquecível
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#DAA520]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#DAA520]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Telefones</p>
                    {phones.map((phone) => (
                      <a
                        key={phone.href}
                        href={phone.href}
                        className="text-white hover:text-[#DAA520] transition-colors block"
                      >
                        {phone.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#DAA520]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#DAA520]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">E-mail</p>
                    <a
                      href="mailto:contato@castelliethiago.com.br"
                      className="text-white hover:text-[#DAA520] transition-colors"
                    >
                      contato@castelliethiago.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#DAA520]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#DAA520]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Escritório</p>
                    <p className="text-white">Belo Horizonte - MG</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-4">Principais Casas de Show</h4>
              <ul className="space-y-2 text-gray-400">
                {venues.map((venue) => (
                  <li key={venue} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#DAA520] rounded-full"></div>
                    {venue}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <form className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Solicite um Orçamento</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#DAA520] transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="local" className="block text-gray-400 text-sm mb-2">
                    Local do Evento
                  </label>
                  <input
                    type="text"
                    id="local"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#DAA520] transition-colors"
                    placeholder="Cidade - Estado"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-gray-400 text-sm mb-2">
                    Data do Evento
                  </label>
                  <input
                    type="date"
                    id="date"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#DAA520] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="details" className="block text-gray-400 text-sm mb-2">
                    Detalhes do Evento
                  </label>
                  <textarea
                    id="details"
                    required
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#DAA520] transition-colors resize-none"
                    placeholder="Conte-nos mais sobre seu evento..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#DAA520] hover:bg-[#B8860B] text-black font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg hover:shadow-[#DAA520]/50"
                >
                  <Send className="lucide lucide-send w-5 h-5" />
                  Enviar Solicitação
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
