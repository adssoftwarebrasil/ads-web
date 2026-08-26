import { MapPin, Phone, Clock, Mail, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#1a1a18] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=lyon-trator-pecas%2FLogomaLyonFooter.png&version_id=null"
              alt="Lyon Trator Peças"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4">
              Distribuidora especializada em peças para máquinas pesadas, atendendo todo o Norte do Brasil com qualidade e agilidade.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#fbba00] rounded-full flex items-center justify-center hover:bg-[#ffd04d] transition-colors"
              >
                <Instagram size={20} className="text-[#1a1a18]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#fbba00] rounded-full flex items-center justify-center hover:bg-[#ffd04d] transition-colors"
              >
                <Facebook size={20} className="text-[#1a1a18]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('produtos')}
                  className="text-gray-400 hover:text-[#fbba00] transition-colors"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-400 hover:text-[#fbba00] transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('unidades')}
                  className="text-gray-400 hover:text-[#fbba00] transition-colors"
                >
                  Unidades
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-400 hover:text-[#fbba00] transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#fbba00] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">WhatsApp / Telefone</p>
                  <a
                    href="https://wa.me/5595984303773"
                    className="text-white hover:text-[#fbba00] transition-colors"
                  >
                    (95) 98430-3773
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-[#fbba00] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">Horário de Atendimento</p>
                  <p className="text-white">Seg-Sex: 07:30 às 18:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#fbba00] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">Endereço Principal</p>
                  <p className="text-white">Av. Centenário, 1876<br />Cinturão Verde - Boa Vista/RR</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Marcas Atendidas</h3>
            <div className="flex flex-wrap gap-2">
              {['Caterpillar', 'Komatsu', 'Hyundai', 'XCMG', 'Case', 'Volvo'].map((brand) => (
                <span
                  key={brand}
                  className="bg-[#2a2a28] px-3 py-1 rounded-full text-sm text-gray-400"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>© 2025 Lyon Trator Peças. Todos os direitos reservados.</p>
            <p>Desenvolvido com tecnologia de ponta</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
