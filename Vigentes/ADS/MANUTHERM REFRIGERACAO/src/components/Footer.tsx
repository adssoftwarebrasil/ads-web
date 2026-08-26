import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Quem Somos', id: 'quem-somos' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Contato', id: 'contato' },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Footer() {
  return (
    <footer className="bg-[rgb(9,74,104)] text-white">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-20 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/manutherm%2Flogomanutherm.jpeg"
              alt="Manutherm Climatização"
              className="h-[50px] w-auto mb-4"
            />
            <p className="text-gray-300 text-[15px] leading-relaxed mb-4">
              17 anos oferecendo soluções completas em climatização para empresas de todos os portes na Bahia.
            </p>
            <a
              href="https://instagram.com/manuthermrefrigeracao"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Instagram
                width={20}
                height={20}
                strokeWidth={2}
                className="lucide lucide-instagram "
              />
              @manuthermrefrigeração
            </a>
          </div>
          <div>
            <h3 className="text-[18px] font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-white transition-colors text-[15px]"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[18px] font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-[15px]">
              <li className="flex items-start gap-3">
                <Phone
                  width={18}
                  height={18}
                  strokeWidth={2}
                  className="lucide lucide-phone flex-shrink-0 mt-1"
                />
                <div>
                  <a
                    href="https://wa.me/5571999313609"
                    className="text-gray-300 hover:text-white transition-colors block"
                  >
                    (71) 99931-3609
                  </a>
                  <a
                    href="tel:+557130262859"
                    className="text-gray-300 hover:text-white transition-colors block"
                  >
                    (71) 3026-2859
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  width={18}
                  height={18}
                  strokeWidth={2}
                  className="lucide lucide-mail flex-shrink-0 mt-1"
                />
                <a
                  href="mailto:operacional@manutherm.com.br"
                  className="text-gray-300 hover:text-white transition-colors break-all"
                >
                  operacional@manutherm.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  width={18}
                  height={18}
                  strokeWidth={2}
                  className="lucide lucide-map-pin flex-shrink-0 mt-1"
                />
                <span className="text-gray-300">
                  Rua Aquiles Ferreira Souza, Nº 66
                  <br />
                  Lauro de Freitas, BA
                  <br />
                  CEP: 42701-350
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white border-opacity-20">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-20 py-6">
          <p className="text-center text-[14px] text-gray-300">
            © 2025 Manutherm Climatização. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
