import { Facebook, Phone, MapPin, Clock } from 'lucide-react';

const quickLinks: { label: string; href: string }[] = [
  { label: 'Início', href: '#home' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Nossa Loja', href: '#loja' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/imperatriz%20colchoes%2Fimg%2Flogo.jpg"
              alt="Colchões Ortobom"
              className="h-16 w-auto mb-4 rounded"
            />
            <p className="text-gray-300 mb-4 leading-relaxed">
              Franquia autorizada Ortobom desde 2019, oferecendo qualidade e
              conforto para Uberlândia e região.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100064236065862"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-300">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="tel:3432362803"
                    className="hover:text-white transition-colors block"
                  >
                    (34) 3236-2803
                  </a>
                  <a
                    href="https://wa.me/553492322203"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors block"
                  >
                    (34) 99232-2203
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>
                  Av. Afonso Pena, 1367
                  <br />
                  Bairro Nossa Senhora Aparecida
                  <br />
                  Uberlândia - MG
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Horário</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p>Segunda a Sexta</p>
                  <p className="font-semibold text-white">08h - 18h</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p>Sábado</p>
                  <p className="font-semibold text-white">08h - 14h</p>
                </div>
              </li>
              <li className="text-sm mt-3 bg-green-600/20 border border-green-600/30 rounded-lg px-3 py-2">
                WhatsApp disponível 24h
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © 2026 Colchões Ortobom Afonso Pena. Todos os direitos
              reservados.
            </p>
            <p>Franquia autorizada Ortobom | CNPJ ativo desde 30/09/2019</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
