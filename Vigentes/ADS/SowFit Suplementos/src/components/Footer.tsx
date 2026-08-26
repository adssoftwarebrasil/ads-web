import { Instagram, ChevronRight, MapPin, Phone, Mail, Clock } from 'lucide-react';

const navLinks = [
  { label: 'Início', target: 'hero' },
  { label: 'Produtos', target: 'featured-products' },
  { label: 'Sobre Nós', target: 'about' },
  { label: 'Avaliações', target: 'testimonials' },
  { label: 'Contato', target: 'contact' },
];

const departments = ['Proteínas', 'Aminoácidos', 'Vitaminas', 'Pré-Treinos', 'Emagrecimento'];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-white border-t border-gray-900">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <img
              src="https://storage.lucasmendes.dev/site-sp/sowfit/img/logo-fundo-laranja.webp"
              alt="SowFit Suplementos"
              className="h-14 w-auto object-contain"
            />
            <p className="text-gray-300 leading-relaxed text-sm">
              Sua parceira oficial na busca por performance. Qualidade certificada e as melhores marcas
              do mercado para você atingir seus objetivos.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com/sowfitsuplementos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 hover:border-primary hover:bg-primary text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-primary pl-3">Navegação</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.target)}
                    className="group flex items-center text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-primary pl-3">Departamentos</h3>
            <ul className="space-y-3">
              {departments.map((dept) => (
                <li key={dept}>
                  <button
                    onClick={() => scrollTo('featured-products')}
                    className="text-gray-400 hover:text-white hover:underline decoration-primary underline-offset-4 transition-all text-sm cursor-pointer"
                  >
                    {dept}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-primary pl-3">Fale Conosco</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:animate-bounce" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  Av. Santos Dumont, 250
                  <br />
                  Uberaba - MG
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:3434807593" className="text-gray-300 hover:text-white transition-colors text-sm">
                    (34) 3480-7593
                  </a>
                  <a
                    href="https://wa.me/553497228602"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    (34) 9722-8602
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:sowfitsuplementos@hotmail.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  sowfitsuplementos@hotmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm leading-relaxed">
                  <p>Seg - Sex: 08h às 19h</p>
                  <p>Sáb: 09h às 13h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-900 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 SowFit Suplementos. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1">Desenvolvido com tecnologia React</p>
        </div>
      </div>
    </footer>
  );
}
