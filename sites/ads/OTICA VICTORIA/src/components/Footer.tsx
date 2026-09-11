import { Phone, Mail, MapPin, Instagram, Facebook, ArrowRight } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#3b2720] text-[#fffffa] pt-16 pb-8 border-t border-[#fffffa]/10">
      <div className="container mx-auto px-4">
        
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Coluna 1: Marca e Sobre */}
          <div className="space-y-6">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=oticasvitoria%2Flogo-sem-fundo.png&version_id=null"
              alt="Ótica Victoria Logo"
              className="h-16 w-auto object-contain brightness-0 invert opacity-90" // Filtro para deixar logo branca sobre fundo escuro
            />
            <p className="text-[#fffffa]/70 text-sm leading-relaxed">
              Há mais de 20 anos cuidando da sua visão com estilo, tecnologia e as melhores marcas do mercado mundial.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="bg-[#fffffa]/10 p-2 rounded-full hover:bg-[#fffffa] hover:text-[#3b2720] transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-[#fffffa]/10 p-2 rounded-full hover:bg-[#fffffa] hover:text-[#3b2720] transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Navegação
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#8b6f47] rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-[#fffffa]/80">
              <li>
                <button onClick={() => scrollToSection('inicio')} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-2">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('marcas')} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-2">
                  Nossas Marcas
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('categorias')} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-2">
                  Categorias
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contato')} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-2">
                  Fale Conosco
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Atendimento
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#8b6f47] rounded-full"></span>
            </h3>
            <div className="space-y-4 text-[#fffffa]/80">
              <a 
                href="https://wa.me/5527998695803" 
                target="_blank" 
                className="flex items-start gap-3 hover:text-white transition-colors"
              >
                <Phone size={20} className="mt-1 flex-shrink-0 text-[#8b6f47]" />
                <span>
                  (27) 99869-5803<br/>
                  <span className="text-xs opacity-60">Seg à Sex: 9h às 18h30</span>
                </span>
              </a>
              
              <a 
                href="mailto:oticavictoria@bol.com.br"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail size={20} className="flex-shrink-0 text-[#8b6f47]" />
                <span>oticavictoria@bol.com.br</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-[#8b6f47]" />
                <span className="text-sm">
                  R. Italina Pereira Mota, 144<br/>
                  Jardim Camburi, Vitória - ES
                </span>
              </div>
            </div>
          </div>

          {/* Coluna 4: Newsletter (Toque Profissional) */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Novidades
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#8b6f47] rounded-full"></span>
            </h3>
            <p className="text-[#fffffa]/70 text-sm mb-4">
              Receba ofertas exclusivas e novidades sobre novas coleções em primeira mão.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="w-full bg-[#fffffa]/10 border border-[#fffffa]/20 rounded-lg py-3 px-4 text-sm text-white placeholder:text-[#fffffa]/40 focus:outline-none focus:border-[#8b6f47] transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#8b6f47] p-1.5 rounded-md hover:bg-[#a38355] transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-[#fffffa]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#fffffa]/50">
          <p>&copy; {new Date().getFullYear()} Ótica Victoria. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Termos de Uso</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
}