import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A472A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img
                src="https://storage.lucasmendes.dev/site-sp/planus%2Fplanusambientallogo.png"
                alt="Planus Ambiental Logo"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              PLANUS AMBIENTAL LTDA
            </p>
            <p className="text-white/80 leading-relaxed">
              Soluções completas em licenciamento e consultoria ambiental no Norte de Goiás.
            </p>
            <a
              href="https://www.instagram.com/planusambiental/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#8BC34A] hover:text-white transition-colors mt-4"
            >
              <Instagram className="mr-2" size={20} />
              @planusambiental
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-white/80 hover:text-[#8BC34A] transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="text-white/80 hover:text-[#8BC34A] transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#beneficios" className="text-white/80 hover:text-[#8BC34A] transition-colors">Benefícios</a>
              </li>
              <li>
                <a href="#servicos" className="text-white/80 hover:text-[#8BC34A] transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#contato" className="text-white/80 hover:text-[#8BC34A] transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-white/80">
              <li>Licenciamento Ambiental</li>
              <li>Outorga de Água</li>
              <li>Gestão de Resíduos</li>
              <li>Cadastro Ambiental Rural</li>
              <li>Consultoria Ambiental</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-white/80">
                <Phone className="mr-2 text-[#8BC34A]" size={18} />
                (62) 98187-4429
              </li>
              <li className="flex items-center text-white/80">
                <Mail className="mr-2 text-[#8BC34A]" size={18} />
                contato@planusambiental.com.br
              </li>
              <li className="flex items-start text-white/80">
                <MapPin className="mr-2 text-[#8BC34A] flex-shrink-0 mt-1" size={18} />
                Norte de Goiás
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80">
            {currentYear} Planus Ambiental. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
