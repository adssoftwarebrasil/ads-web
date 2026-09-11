import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const quickLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Containers', id: 'containers' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-holanda-dark text-white">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div className="space-y-4">
            <img
              src="https://storage.lucasmendes.dev/site-sp/holandatransportes%2Flogo-holanda.jpg"
              alt="Holanda Transportes"
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/80 leading-relaxed">
              Soluções completas em transporte e logística para Roraima e região. 6 anos de tradição familiar.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <p className="text-white/80 text-sm">
                  Rua Uraricuera, 1462 - São Vicente
                  <br />
                  Boa Vista - RR
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <a
                  href="https://wa.me/5595991507264"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  +55 95 99150-7264
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <a
                  href="mailto:holandatranslog.rr@gmail.com"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  holandatranslog.rr@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram size={18} className="flex-shrink-0" />
                <a
                  href="https://instagram.com/holandatransportesrr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  @holandatransportesrr
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-white/60 text-sm">
            © 2025 Holanda Transportes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
