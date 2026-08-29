import { Phone, Clock, Instagram, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Especialidades', id: 'especialidades' },
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#3A9E3E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/petexotic%2FWhatsApp%20Image%202025-12-10%20at%2016.57.50%20%281%29.jpeg"
              alt="Pet Exotic"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-green-100 leading-relaxed">
              Cuidado especializado para animais exóticos desde 2022
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-green-100 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone
                  className="lucide lucide-phone mt-1 flex-shrink-0"
                  width={18}
                  height={18}
                />
                <span className="text-green-100">(62) 98317-7646</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock
                  className="lucide lucide-clock mt-1 flex-shrink-0"
                  width={18}
                  height={18}
                />
                <span className="text-green-100">Seg a Sex: 9h às 17h</span>
              </li>
              <li className="flex items-start gap-2">
                <Instagram
                  className="lucide lucide-instagram mt-1 flex-shrink-0"
                  width={18}
                  height={18}
                />
                <a
                  href="https://www.instagram.com/consultorio_petexotic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-100 hover:text-white transition-colors duration-300"
                >
                  @consultorio_petexotic
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Localização</h3>
            <div className="flex items-start gap-2 text-green-100">
              <MapPin
                className="lucide lucide-map-pin mt-1 flex-shrink-0"
                width={18}
                height={18}
              />
              <span>
                Av. Perimetral, 2140
                <br />
                Setor Coimbra
                <br />
                Goiânia/GO - 74.533-020
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-green-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-green-100 text-sm text-center md:text-left">
              2026 Pet Exotic. Todos os direitos reservados.
            </p>
            <p className="text-green-100 text-sm text-center md:text-right">
              Proprietária: Mirella Pereira de Uchaoa Ribeiro
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
