import { Instagram, Linkedin, Phone, Mail, Heart } from 'lucide-react';

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Quem Somos', id: 'quem-somos' },
  { label: 'Manutenção', id: 'manutencao' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-[rgb(77,88,109)] text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6 animate-fade-in-up">
            <img
              src="https://storage.lucasmendes.dev/site-sp/i-move%2FLOGO.webp"
              alt="I-MOV Logo"
              className="h-20 w-auto"
            />
            <p className="text-[#e0fd2c] text-xl font-semibold">Você em movimento</p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/imovcuritiba/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#e0fd2c] hover:text-black p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Instagram width={20} height={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/i-mov-mobilidade-eletrica-curitiba"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#e0fd2c] hover:text-black p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Linkedin width={20} height={20} />
              </a>
            </div>
          </div>
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-bold text-[#e0fd2c]">LINKS RÁPIDOS</h3>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left hover:text-[#e0fd2c] transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-bold text-[#e0fd2c]">CONTATO</h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/5541988248004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#e0fd2c] transition-colors"
              >
                <Phone width={18} height={18} />
                (41) 98824-8004
              </a>
              <a
                href="https://wa.me/5541988240021"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#e0fd2c] transition-colors"
              >
                <Phone width={18} height={18} />
                (41) 98824-0021
              </a>
              <a
                href="mailto:imovcuritiba@gmail.com"
                className="flex items-center gap-3 hover:text-[#e0fd2c] transition-colors"
              >
                <Mail width={18} height={18} />
                imovcuritiba@gmail.com
              </a>
              <a
                href="https://www.instagram.com/imovcuritiba/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#e0fd2c] transition-colors"
              >
                <Instagram width={18} height={18} />
                @imovcuritiba
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-300">
              © 2025 I-MOV Mobilidade Elétrica - Todos os direitos reservados
            </p>
            <p className="text-sm text-gray-300 flex items-center justify-center gap-2">
              Desenvolvido com{' '}
              <Heart width={16} height={16} className="text-[#e0fd2c] fill-[#e0fd2c]" /> para um
              futuro mais sustentável
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
