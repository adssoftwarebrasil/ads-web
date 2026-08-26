import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const quickLinks = [
  { label: 'Início', id: 'home' },
  { label: 'Sobre Nós', id: 'about' },
  { label: 'Produtos', id: 'products' },
  { label: 'Avaliações', id: 'testimonials' },
  { label: 'Contato', id: 'contact' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-[rgb(2,73,137)] to-[rgb(1,58,109)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/coimbra%20motopecas/logo.png"
              alt="Coimbra Moto Peças"
              className="h-16 w-auto mb-4"
            />
            <p className="text-[rgb(246,252,255)] leading-relaxed">
              Sua moto peças de confiança em Boa Vista. Mais de 10 anos
              fornecendo qualidade e excelência.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[rgb(255,236,2)]">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-[rgb(246,252,255)] hover:text-[rgb(255,236,2)] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[rgb(255,236,2)]">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-[rgb(255,236,2)] flex-shrink-0 mt-1" />
                <a
                  href="http://wa.me/559591557077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(246,252,255)] hover:text-[rgb(255,236,2)] transition-colors"
                >
                  (95) 99155-7077
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-[rgb(255,236,2)] flex-shrink-0 mt-1" />
                <a
                  href="mailto:eborgescoimbra@gmail.com"
                  className="text-[rgb(246,252,255)] hover:text-[rgb(255,236,2)] transition-colors"
                >
                  eborgescoimbra@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-[rgb(255,236,2)] flex-shrink-0 mt-1" />
                <span className="text-[rgb(246,252,255)]">
                  Av. das Guianas, 911
                  <br />
                  13 de Setembro - Boa Vista/RR
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[rgb(255,236,2)]">
              Horário
            </h3>
            <div className="flex items-start space-x-2 mb-6">
              <Clock className="w-5 h-5 text-[rgb(255,236,2)] flex-shrink-0 mt-1" />
              <div className="text-[rgb(246,252,255)]">
                <p className="font-semibold">Segunda a Sexta</p>
                <p>07:00 às 18:00</p>
              </div>
            </div>
            <h4 className="font-semibold mb-3 text-[rgb(255,236,2)]">
              Redes Sociais
            </h4>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/coimbra_motopecas/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-3 rounded-lg hover:bg-[rgb(255,236,2)] hover:text-[rgb(2,73,137)] transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1ei2RYz1mv/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-3 rounded-lg hover:bg-[rgb(255,236,2)] hover:text-[rgb(2,73,137)] transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <p className="text-[rgb(246,252,255)] mb-4 md:mb-0">
              2026 Coimbra Moto Peças. Todos os direitos reservados.
            </p>
            <p className="text-[rgb(246,252,255)]">
              Atendemos Boa Vista, Bonfim e Iracema
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
