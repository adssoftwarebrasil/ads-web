import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#2a2d1a] text-[#fbfcf2] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/eco-garden%2Flogomarca-com-fundo.jpg"
              alt="Eco Garden"
              className="w-36 mb-4 rounded-lg"
            />
            <p className="text-[#fbfcf2]/80 leading-relaxed">
              Seu refúgio de tranquilidade em Oliveira - MG
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0 mt-1 text-[#cbd01c]" />
                <div>
                  <p className="font-semibold mb-1">WhatsApp:</p>
                  <a
                    href="https://wa.me/5537998044453"
                    className="hover:text-[#cbd01c] transition-colors"
                  >
                    (37) 99804-4453
                  </a>
                  <br />
                  <a
                    href="https://wa.me/5537998054753"
                    className="hover:text-[#cbd01c] transition-colors"
                  >
                    (37) 99805-4753
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-1 text-[#cbd01c]" />
                <div>
                  <p className="font-semibold mb-1">Endereço:</p>
                  <p className="text-[#fbfcf2]/80">Rodovia BR 369 KM-1</p>
                  <p className="text-[#fbfcf2]/80">Oliveira - MG, 35540-000</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-3 flex-shrink-0 mt-1 text-[#cbd01c]" />
                <div>
                  <p className="font-semibold mb-1">Atendimento:</p>
                  <p className="text-[#fbfcf2]/80">Seg-Sex: 08h-18h</p>
                  <p className="text-[#fbfcf2]/80">Sáb: 08h-19h | Dom: 08h-16h</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Redes Sociais</h3>
            <div className="flex gap-4 mb-8">
              <a
                href="https://instagram.com/pousada.ecogarden"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fbfcf2]/10 p-3 rounded-lg hover:bg-[#cbd01c] hover:text-[#2a2d1a] transition-all"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/pousadaecogarden"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fbfcf2]/10 p-3 rounded-lg hover:bg-[#cbd01c] hover:text-[#2a2d1a] transition-all"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>

            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left hover:text-[#cbd01c] transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('acomodacoes')}
                className="text-left hover:text-[#cbd01c] transition-colors"
              >
                Acomodações
              </button>
              <button
                onClick={() => scrollToSection('estrutura')}
                className="text-left hover:text-[#cbd01c] transition-colors"
              >
                Estrutura
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-left hover:text-[#cbd01c] transition-colors"
              >
                Contato
              </button>
            </nav>
          </div>
        </div>

        <div className="border-t border-[#fbfcf2]/20 pt-8 text-center text-sm text-[#fbfcf2]/70">
          <p className="mb-2">
            © 2024 Eco Garden - Pousada em Oliveira MG
          </p>
          <p>CNPJ: 41.766.260/0001-50</p>
          <p className="mt-2">Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
