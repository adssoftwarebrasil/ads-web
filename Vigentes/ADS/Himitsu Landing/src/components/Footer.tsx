import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const quickLinks: { label: string; target: string }[] = [
  { label: 'Início', target: 'hero' },
  { label: 'Cardápio', target: 'menu' },
  { label: 'Sobre', target: 'about' },
  { label: 'Localização', target: 'location' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-black text-white pt-16 pb-8 px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="space-y-4">
            <img
              src="https://storage.lucasmendes.dev/site-sp/himitsu%2FLogo%20Himitsu%20White%20(1).png"
              alt="Himitsu Restaurante"
              className="h-12 w-auto"
            />
            <p className="font-exo text-gray-400 text-sm leading-relaxed">
              Autêntica culinária japonesa desde 2012. Tradição, qualidade e
              inovação em cada prato.
            </p>
          </div>
          <div>
            <h3 className="font-exo font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.target)}
                    className="font-exo text-gray-400 hover:text-[#E02023] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-exo font-semibold text-lg mb-4">Horários</h3>
            <div className="space-y-2 font-exo text-gray-400 text-sm">
              <p>Segunda a Sábado</p>
              <p className="text-white font-semibold">19h às 00h</p>
              <p className="mt-4">Domingo</p>
              <p className="text-white font-semibold">Fechado</p>
              <p className="mt-4 text-xs">
                Rua Dublim, N. 122
                <br />
                Jardim Europa
                <br />
                Goiânia - GO
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-exo font-semibold text-lg mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/himitsurestaurante"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E02023] p-3 rounded-full hover:bg-[#c01a1e] transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="lucide lucide-instagram w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/himitsurestaurante"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E02023] p-3 rounded-full hover:bg-[#c01a1e] transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="lucide lucide-facebook w-5 h-5" />
              </a>
              <a
                href="https://wa.me/556232513597"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E02023] p-3 rounded-full hover:bg-[#c01a1e] transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="lucide lucide-message-circle w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="font-exo text-gray-400 text-sm mb-2">Telefone</p>
              <a
                href="tel:+556232513597"
                className="font-exo text-white hover:text-[#E02023] transition-colors"
              >
                (62) 3251-3597
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="font-exo text-gray-400 text-sm">
            © 2026 Himitsu Restaurante. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
