import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#003870] text-white py-16">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/clinicawerneck%2Flogomarca-sem-fundo-removebg-preview.png"
              alt="Clínica Werneck"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/80 leading-relaxed">
              Há mais de 30 anos transformando sorrisos em Recife
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('especialidades')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Especialidades
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('equipe')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Equipe
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('resultados')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Resultados
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Especialidades</h3>
            <ul className="space-y-2 text-white/80">
              <li>Implantodontia</li>
              <li>Ortodontia</li>
              <li>Odontologia Estética</li>
              <li>Prótese Dental</li>
              <li>Endodontia</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-white/80">
              <li>
                Av. República do Líbano, 251
                <br />
                Torre 2, Sala 904
                <br />
                Pina - Recife, PE
              </li>
              <li>
                <a
                  href="https://wa.me/5581994073827"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  (81) 99407-3827
                </a>
              </li>
              <li>
                <a
                  href="mailto:clinicawerneck@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  clinicawerneck@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://instagram.com/clinica_werneck"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/MWS-Werneck"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; 2025 Clínica Werneck. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
