import { MapPin, ExternalLink, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-14">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/uniao-engates%2Fimg%2Flogotipo-uniao-engates.webp"
              alt="União Engates"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Uma das maiores fabricantes de engates e acessórios do Brasil, oferecendo produtos de
              alta qualidade e tecnologia de ponta.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Visite nossa Fábrica</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="lucide lucide-map-pin flex-shrink-0 mt-1 text-[rgb(175,11,18)]" width={18} height={18} />
                <div>
                  <p>R. Luiz de Matos, 872 - St</p>
                  <p>St. Sudoeste</p>
                  <p>Goiânia - GO</p>
                  <p>CEP: 74303-010</p>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/PL7U9VzQfEyUwq5X7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[rgb(175,11,18)] hover:text-white transition-colors mt-2"
              >
                <ExternalLink className="lucide lucide-external-link " width={16} height={16} />
                Ver no Mapa
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contato</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <a
                href="https://wa.me/5562993240002"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[rgb(175,11,18)] transition-colors"
              >
                <Phone className="lucide lucide-phone text-[rgb(175,11,18)]" width={18} height={18} />
                (62) 99324-0002
              </a>
              <a
                href="mailto:contato@uniaoengates.com.br"
                className="flex items-center gap-2 hover:text-[rgb(175,11,18)] transition-colors"
              >
                <Mail className="lucide lucide-mail text-[rgb(175,11,18)]" width={18} height={18} />
                contato@uniaoengates.com.br
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">© 2025 União Engates. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
