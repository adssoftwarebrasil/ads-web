import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Contato() {
  const info = useInView<HTMLDivElement>();
  const formCol = useInView<HTMLDivElement>();

  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto =
      `Olá, vim pelo site!%0A%0A` +
      `Nome: ${nome}%0A` +
      `WhatsApp: ${whatsapp}%0A` +
      `E-mail: ${email}%0A` +
      `Assunto: ${assunto}%0A` +
      `Mensagem: ${mensagem}`;
    window.open(`https://wa.me/5599991458080?text=${texto}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div
            ref={info.ref}
            className={`transition-all duration-700 ${
              info.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <p className="text-[rgb(227,17,35)] uppercase tracking-wider text-sm font-semibold mb-3">
              Contato
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(3,3,4)] mb-4">
              Dúvidas ou sugestões
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Se você tem dúvidas ou sugestões, a nossa equipe está pronta para ouvir o que você tem
              a dizer.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform">
                <div className="flex-shrink-0 w-12 h-12 bg-[rgb(227,17,35)] rounded-full flex items-center justify-center">
                  <Phone width={24} height={24} strokeWidth={2} className="lucide lucide-phone text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[rgb(3,3,4)] mb-1">Vendas</p>
                  <div className="flex flex-col gap-1">
                    <a
                      href="tel:+5599991458080"
                      className="text-gray-700 hover:text-[rgb(227,17,35)] transition-colors"
                    >
                      (99) 99145-8080
                    </a>
                    <a
                      href="tel:+559930712591"
                      className="text-gray-700 hover:text-[rgb(227,17,35)] transition-colors"
                    >
                      (99) 3071-2591
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="tel:+5599991968080"
                className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[rgb(227,17,35)] rounded-full flex items-center justify-center">
                  <Phone width={24} height={24} strokeWidth={2} className="lucide lucide-phone text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[rgb(3,3,4)] mb-1">Financeiro</p>
                  <p className="text-gray-700 group-hover:text-[rgb(227,17,35)] transition-colors">
                    (99) 99196-8080
                  </p>
                </div>
              </a>
              <a
                href="tel:+5599982658888"
                className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[rgb(227,17,35)] rounded-full flex items-center justify-center">
                  <Phone width={24} height={24} strokeWidth={2} className="lucide lucide-phone text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[rgb(3,3,4)] mb-1">SAC</p>
                  <p className="text-gray-700 group-hover:text-[rgb(227,17,35)] transition-colors">
                    (99) 98265-8888
                  </p>
                </div>
              </a>
              <a
                href="mailto:pneuzeroitz@gmail.com"
                className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[rgb(227,17,35)] rounded-full flex items-center justify-center">
                  <Mail width={24} height={24} strokeWidth={2} className="lucide lucide-mail text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[rgb(3,3,4)] mb-1">Email</p>
                  <p className="text-gray-700 group-hover:text-[rgb(227,17,35)] transition-colors">
                    pneuzeroitz@gmail.com
                  </p>
                </div>
              </a>
              <a
                href="https://maps.app.goo.gl/DY9LhuqBeG2c85ox6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group hover:translate-x-2 transition-transform cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[rgb(227,17,35)] rounded-full flex items-center justify-center">
                  <MapPin width={24} height={24} strokeWidth={2} className="lucide lucide-map-pin text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[rgb(3,3,4)] mb-1">Endereço</p>
                  <p className="text-gray-700 group-hover:text-[rgb(227,17,35)] transition-colors">
                    BR-010, 3441, Entroncamento<br />Imperatriz - MA<br />CEP: 65.913-460
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div
            ref={formCol.ref}
            className={`transition-all duration-700 delay-200 ${
              formCol.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Nome"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[rgb(227,17,35)] transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="WhatsApp"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[rgb(227,17,35)] transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[rgb(227,17,35)] transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Assunto"
                  required
                  value={assunto}
                  onChange={(e) => setAssunto(e.target.value)}
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[rgb(227,17,35)] transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Mensagem"
                  required
                  rows={5}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[rgb(227,17,35)] transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(227,17,35)] text-white px-10 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Enviar WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
