import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { label: 'Aulas', href: '#servicos' },
    { label: 'Aluguel de Quadras', href: '#servicos' },
    { label: 'Gastronomia', href: '#servicos' },
    { label: 'Horários', href: '#horarios' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer id="contato" className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <img
              src="https://storage.lucasmendes.dev/site-sp/speedarena%2F472453876_607353361778514_6167536542762011750_n.png"
              alt="Speed Arena"
              className="h-20 w-auto brightness-0 invert"
            />
            <p className="text-white/80 leading-relaxed">
              Sua arena de esportes de areia em Goiânia desde 2022. Onde paixão,
              esporte e lazer se encontram.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/speedarena94/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-accent-green-vibrant hover:text-primary-dark transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-accent-green-vibrant transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-green-vibrant flex-shrink-0 mt-1" />
                <span className="text-white/80">
                  <strong className="block text-white">Unidade Setor Sul</strong>
                  Rua 94, 245, Qd. F-14, Lt. 31/33<br />
                  Setor Sul, Goiânia - GO<br />
                  CEP: 74083-105
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-green-vibrant flex-shrink-0 mt-1" />
                <span className="text-white/80">
                  <strong className="block text-white">Unidade Jardim Atlântico</strong>
                  Avenida Leblon, Q. 131, L. 26<br />
                  Esquina com Av. do Parque<br />
                  Jardim Atlântico, Goiânia - GO
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent-green-vibrant" />
                <a
                  href="https://wa.me/5562983092884"
                  className="text-white/80 hover:text-accent-green-vibrant transition-colors"
                >
                  (62) 98309-2884
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent-green-vibrant" />
                <a
                  href="mailto:speedarena94@gmail.com"
                  className="text-white/80 hover:text-accent-green-vibrant transition-colors"
                >
                  speedarena94@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/60 text-sm">
            © 2025 Speed Arena. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
