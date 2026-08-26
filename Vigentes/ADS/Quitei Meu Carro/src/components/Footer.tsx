import { Facebook, Instagram, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#04284d] to-[#021a35] text-white">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[60px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Coluna 1: Logo e Descrição */}
          <div>
            <div className="bg-white/95 rounded-lg p-4 inline-block mb-6 shadow-lg">
              <img
                src="https://storage.lucasmendes.dev/site-sp/quiteimeucarro%2Flogomarca-sem-fundo.webp"
                alt="Quite Meu Carro - Especialistas em Quitação de Financiamento"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Especialistas em quitação e renegociação de financiamento veicular
            </p>
            <p className="text-gray-400 text-sm font-mono">
              CNPJ: 44.799.582/0001-93
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-[#5ca57a] pb-2 inline-block">
              Links Rápidos
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { id: 'inicio', label: 'Início' },
                { id: 'simulador', label: 'Simulador' },
                { id: 'servicos', label: 'Serviços' },
                { id: 'faq', label: 'FAQ' },
                { id: 'privacidade', label: 'Política de Privacidade' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-300 hover:text-[#5ca57a] hover:translate-x-1 transition-all text-left group flex items-center gap-2"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#5ca57a] transition-all"></span>
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-[#5ca57a] pb-2 inline-block">
              Contato
            </h3>
            <div className="space-y-4">
              <a
                href="tel:08005552569"
                className="flex items-center gap-3 text-gray-300 hover:text-[#5ca57a] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#5ca57a] flex items-center justify-center transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Ligue grátis</p>
                  <p className="font-semibold text-lg">(0800) 555-2569</p>
                </div>
              </a>
              
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <p className="text-gray-400 text-sm mb-2 font-semibold">Horário de atendimento:</p>
                <p className="text-gray-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#5ca57a] rounded-full"></span>
                  Segunda a Sexta: 8h às 18h
                </p>
                <p className="text-gray-300 flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 bg-[#5ca57a] rounded-full"></span>
                  Sábado: 8h às 12h
                </p>
              </div>
              
              <div className="pt-2">
                <p className="text-gray-400 text-sm mb-3">Redes sociais:</p>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#1877f2] flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                    aria-label="Visite nosso Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                    aria-label="Visite nosso Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Copyright */}
      <div id="privacidade" className="bg-[#010d1a] py-6 border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[60px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="text-center md:text-left">
              Copyright © {new Date().getFullYear()} - Quite Meu Carro - Todos os direitos reservados
            </p>
            <p className="text-center md:text-right">
              Desenvolvido por <span className="text-[#5ca57a] font-semibold">Parceiro Google</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}