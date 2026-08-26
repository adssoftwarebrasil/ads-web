import { Phone, Mail, Clock, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#2a2d66] text-white/80 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=central-tintas%2Fcentral-tintas-logo-removebg-preview.png"
              alt="Central Tintas"
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="leading-relaxed">
              Desde 2021 oferecendo as melhores soluções em tintas para Barreiras e região.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="hover:text-[#fef011] transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('produtos')}
                  className="hover:text-[#fef011] transition-colors"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('diferenciais')}
                  className="hover:text-[#fef011] transition-colors"
                >
                  Diferenciais
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="hover:text-[#fef011] transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#fef011]" />
                <a
                  href="https://wa.me/5577999571092"
                  className="hover:text-[#fef011] transition-colors"
                >
                  (77) 9.9957-1092
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#fef011]" />
                <a
                  href="mailto:centraltintasbarreiras@gmail.com"
                  className="hover:text-[#fef011] transition-colors break-all"
                >
                  centraltintasbarreiras@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#fef011]" />
                <a
                  href="https://instagram.com/centraltintasbarreiras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#fef011] transition-colors"
                >
                  @centraltintasbarreiras
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Horário</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#fef011] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Segunda a Sexta</p>
                  <p className="text-sm">07:45 - 12:00</p>
                  <p className="text-sm">13:45 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#fef011] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Sábado</p>
                  <p className="text-sm">07:45 - 12:30</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p>&copy; 2025 Central Tintas - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
