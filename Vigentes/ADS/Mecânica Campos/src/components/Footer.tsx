import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#152755] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/MECANICA-CAMPOS%2Flogomarca.webp"
              alt="Mecânica Campos"
              className="h-12 w-auto mb-4"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = '<div class="text-xl font-bold mb-4">MECÂNICA CAMPOS</div>';
                }
              }}
            />
            <p className="text-white/80 mb-2">Auto Peças e Oficina Campos Ltda</p>
            <p className="text-white/80">CNPJ: 26.748.849/0001-31</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                <p className="text-white/80">
                  Rua 24, 385 – Industrial 5<br />
                  Água Boa/MT
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <p className="text-white/80">(66) 3468-3171</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <p className="text-white/80">(66) 99646-0016</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/mecanica.campos.5?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/mecanicacampos?igsh=MW5mcDdnamNnMThlZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-white/80">
            © 2025 Mecânica Campos - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
