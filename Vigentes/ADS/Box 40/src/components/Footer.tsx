import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const menuItems = ['Início', 'Sobre', 'Serviços', 'Vantagens', 'Depoimentos', 'Contato'];
const menuIds = ['inicio', 'sobre', 'servicos', 'vantagens', 'depoimentos', 'contato'];
const services = ['Troca de Óleo de Câmbio', 'Lavagem e Polimento', 'Revisão Mecânica', 'Restauração de Faróis'];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 pt-20 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-gold text-xl font-semibold mb-6">Menu</h3>
            <ul className="space-y-3">
              {menuItems.map((item, i) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(menuIds[i])}
                    className="text-white/80 hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-gold text-xl font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-white/80">{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-gold text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/556198423838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white/80 hover:text-gold transition-colors duration-300"
                >
                  <Phone size={20} className="lucide lucide-phone flex-shrink-0" />
                  <span>(61) 98432-3838</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@box40.com.br"
                  className="flex items-center space-x-3 text-white/80 hover:text-gold transition-colors duration-300"
                >
                  <Mail size={20} className="lucide lucide-mail flex-shrink-0" />
                  <span>contato@box40.com.br</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-white/80">
                <MapPin size={20} className="lucide lucide-map-pin flex-shrink-0 mt-1" />
                <span>Quadra SHS Quadra 2, S/N, Asa Sul - Brasília/DF</span>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/lavajatobox40"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white/80 hover:text-gold transition-colors duration-300"
                >
                  <Instagram size={20} className="lucide lucide-instagram flex-shrink-0" />
                  <span>@lavajatobox40</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gold/30 pt-8">
          <p className="text-center text-white/60 text-sm">Copyright © 2025 – Desenvolvido por Parceiro Google</p>
        </div>
      </div>
    </footer>
  );
}
