import { Instagram, MessageCircle } from 'lucide-react';

const LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=youconnectpe%2FAtivo%201%20(1).png&version_id=null';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <img src={LOGO} alt="You Connect" className="h-16 object-contain mb-4" />
            <p className="text-gray-400 text-sm">Conectando você ao que importa.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="#planos" className="block text-gray-400 hover:text-[#FA6F2C] transition-colors">
                Planos
              </a>
              <a href="#cobertura" className="block text-gray-400 hover:text-[#FA6F2C] transition-colors">
                Cobertura
              </a>
              <a href="#contato" className="block text-gray-400 hover:text-[#FA6F2C] transition-colors">
                Contato
              </a>
            </div>
          </div>
          <div className="text-center md:text-right">
            <h3 className="font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4 justify-center md:justify-end">
              <a
                href="https://instagram.com/youconnectpe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#FA6F2C] rounded-full flex items-center justify-center hover:bg-[#E85E1B] transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/5581996833314"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#FA6F2C] rounded-full flex items-center justify-center hover:bg-[#E85E1B] transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 You Connect Provedor de Internet. Todos os direitos reservados.</p>
          <p className="mt-2">Youconect+ Provedor LTDA - CNPJ: 62.066.012/0001-76</p>
        </div>
      </div>
    </footer>
  );
}
