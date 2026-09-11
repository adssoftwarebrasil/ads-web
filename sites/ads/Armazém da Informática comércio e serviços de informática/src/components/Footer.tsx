import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/armazen%20informatica%2Fimg%2FLOGO%20ESCRITA.png"
              alt="Armazém da Informática"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              Há mais de 20 anos oferecendo soluções completas em tecnologia com qualidade e confiabilidade.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/armazemdainfocuritiba"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[rgb(0,168,89)] transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/armazemdainfo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[rgb(0,168,89)] transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@armazemdainfo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[rgb(0,168,89)] transition-all"
                aria-label="TikTok"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-400 hover:text-[rgb(0,168,89)] transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('produtos')}
                  className="text-gray-400 hover:text-[rgb(0,168,89)] transition-colors"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-400 hover:text-[rgb(0,168,89)] transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('avaliacoes')}
                  className="text-gray-400 hover:text-[rgb(0,168,89)] transition-colors"
                >
                  Avaliações
                </button>
              </li>
              <li>
                <a
                  href="https://www.armazemdainfo.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[rgb(0,168,89)] transition-colors"
                >
                  Site Corporativo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">Produtos</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Computadores e Notebooks</li>
              <li>PC Gamer</li>
              <li>Monitores</li>
              <li>SSDs e Memórias</li>
              <li>Teclados e Mouses</li>
              <li>Acessórios</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={20} className="text-[rgb(0,168,89)] flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  Av. Cel. Francisco H. dos Santos, 555 - Loja 2<br />
                  Jardim das Américas, Curitiba - PR
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="text-[rgb(0,168,89)] flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="http://wa.me/554191217176"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[rgb(0,168,89)] transition-colors text-sm"
                  >
                    (41) 9 9121-7176
                  </a>
                  <a
                    href="tel:554133651768"
                    className="text-gray-400 hover:text-[rgb(0,168,89)] transition-colors text-sm"
                  >
                    (41) 3365-1768
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="text-[rgb(0,168,89)] flex-shrink-0" />
                <a
                  href="mailto:contato@armazemdainfo.com.br"
                  className="text-gray-400 hover:text-[rgb(0,168,89)] transition-colors text-sm"
                >
                  contato@armazemdainfo.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Armazém da Informática. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-sm">
              CNPJ: 21.472.197/0001-31
            </p>
            <p className="text-gray-400 text-sm">
              Desenvolvido com tecnologia e dedicação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}