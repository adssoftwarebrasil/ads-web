import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

const quickLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

const productLinks = ['Fechaduras', 'Dobradiças', 'Roldanas', 'Puxadores', 'Ferragens para Vidro', 'Parafusos e Acessórios'];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[rgb(12,27,76)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img
              src="https://storage.lucasmendes.dev/site-sp/recife%20componentes/img/logo-sem-fundo.webp"
              alt="Recife Componentes"
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed">Sua revenda de confiança em acessórios para esquadrias de alumínio e ferragens para vidros. Qualidade e preço justo.</p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/recife-componentes-p-esquadrias-de-aluminio-e-vidro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[rgb(231,195,37)] transition-colors duration-300"
              >
                <Facebook className="lucide lucide-facebook w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/recifecomponentes/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[rgb(231,195,37)] transition-colors duration-300"
              >
                <Instagram className="lucide lucide-instagram w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-[rgb(231,195,37)]">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollTo(link.id)} className="text-gray-300 hover:text-[rgb(231,195,37)] transition-colors text-sm">{link.label}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-[rgb(231,195,37)]">Nossos Produtos</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {productLinks.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-[rgb(231,195,37)]">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="lucide lucide-map-pin w-5 h-5 text-[rgb(231,195,37)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">R. Itacari, 334 - Imbiribeira<br />Recife - PE, 51200-080</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="lucide lucide-phone w-5 h-5 text-[rgb(231,195,37)] flex-shrink-0" />
                <a href="http://wa.me/558199266617" className="text-gray-300 hover:text-[rgb(231,195,37)] transition-colors">(81) 9 9926-6617</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="lucide lucide-mail w-5 h-5 text-[rgb(231,195,37)] flex-shrink-0" />
                <a href="mailto:recifecomponentesvendas@gmail.com" className="text-gray-300 hover:text-[rgb(231,195,37)] transition-colors break-all">recifecomponentesvendas@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="lucide lucide-clock w-5 h-5 text-[rgb(231,195,37)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Seg a Sex: 8h - 17h<br />Sábado: 8h - 12h</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2026 Recife Componentes. Todos os direitos reservados.</p>
            <p>Desenvolvido com dedicação para melhor atendê-lo.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
