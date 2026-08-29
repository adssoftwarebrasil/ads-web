import { Instagram, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=metabordados%2Flogo%202.png&version_id=null"
              alt="Metahome Logo"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm">
              Transformando refeições em momentos únicos desde 1999
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#F7D061]">Nossas Marcas</h3>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/metahome.oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-[#F7D061] transition-colors"
              >
                <Instagram size={18} />
                <span>@metahome.oficial</span>
              </a>
              <a
                href="https://www.instagram.com/metabordados"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-[#F7D061] transition-colors"
              >
                <Instagram size={18} />
                <span>@metabordados</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#F7D061]">Localização</h3>
            <div className="flex items-start gap-2 text-gray-400 text-sm">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <span>
                Travessa Presidente Mascarenhas, 1675<br />
                Alecrim, Natal/RN<br />
                CEP: 59.037-540
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Metahome & Metabordados. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
