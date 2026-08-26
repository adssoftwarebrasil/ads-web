import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const menuLinks = ['Início', 'Sobre', 'Serviços', 'Vantagens', 'Depoimentos', 'Contato'];

  const serviceLinks = [
    'Instalação de Radiadores Novos',
    'Manutenção de Radiadores',
    'Troca de Baterias Automotivas',
    'Carga e Teste de Baterias',
    'Baterias para Moto',
  ];

  return (
    <footer className="bg-[#1E3A8A] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-[#FF6B00]">MANAUS</span> BATERIAS
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Empresa familiar com mais de 46 anos de tradição e confiança em Manaus.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Menu</h4>
            <ul className="space-y-2">
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/80 hover:text-[#FF6B00] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-white/80 hover:text-[#FF6B00] transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contato</h4>
            <div className="space-y-2 mb-4">
              <a
                href="https://wa.me/5592981059681"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#059669] text-white px-6 py-3 rounded-lg hover:brightness-110 transition-all inline-flex items-center space-x-2 w-full"
              >
                <Phone className="w-5 h-5" />
                <span>(92) 98105-9681</span>
              </a>
              <a
                href="https://wa.me/5592995262436"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#059669] text-white px-6 py-3 rounded-lg hover:brightness-110 transition-all inline-flex items-center space-x-2 w-full"
              >
                <Phone className="w-5 h-5" />
                <span>(92) 99526-2436</span>
              </a>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-white/80 text-sm">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="break-all">contato@sosbateriaseradiadores.com.br</span>
              </div>
              <div className="flex items-start space-x-3 text-white/80 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Rua Silva Ramos, 238, Centro
                  <br />
                  Manaus/AM/69.025-140
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0A0A0A] py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-white/80 text-sm">
            <p>© 2026 Manaus Baterias. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
