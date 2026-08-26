import { MessageCircle, Mail, Clock, MapPin } from 'lucide-react';

const serviceLinks = [
  { label: 'Comprar Imóvel', href: 'https://wa.me/557193469993?text=Olá! Tenho interesse em: Comprar Imóvel' },
  { label: 'Vender Imóvel', href: 'https://wa.me/557193469993?text=Olá! Tenho interesse em: Vender Imóvel' },
  {
    label: 'Administração de Aluguéis',
    href: 'https://wa.me/557193469993?text=Olá! Tenho interesse em: Administração de Aluguéis',
  },
  { label: 'Regularização', href: 'https://wa.me/557193469993?text=Olá! Tenho interesse em: Regularização' },
  { label: 'Documentação', href: 'https://wa.me/557193469993?text=Olá! Tenho interesse em: Documentação' },
];

const states = ['Bahia', 'Minas Gerais', 'São Paulo', '...'];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=golden-house%2FIMG-20251202-WA0048_1-removebg-preview.png&version_id=null"
              alt="Golden House 873"
              className="h-16 mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 mb-6 leading-relaxed">Segurança e excelência em transações imobiliárias</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Serviços</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#cfa165] transition-colors block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Fale Conosco</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <MessageCircle className="lucide lucide-message-circle w-4 h-4 flex-shrink-0" />
                <a
                  href="https://wa.me/557193469993"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#cfa165] transition-colors"
                >
                  +55 (71) 99346-9993
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="lucide lucide-mail w-4 h-4 flex-shrink-0" />
                <a href="mailto:goldenhouse873@gmail.com" className="hover:text-[#cfa165] transition-colors">
                  goldenhouse873@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Clock className="lucide lucide-clock w-4 h-4 flex-shrink-0" />
                <span>Seg-Sex, 8h-17h</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Onde Estamos</h3>
            <div className="flex items-start gap-2 text-gray-400 mb-4">
              <MapPin className="lucide lucide-map-pin w-4 h-4 flex-shrink-0 mt-1" />
              <p className="text-sm">
                Av. Luís Viana Filho, 13223, Sala 220, Torre 02, Hangar Business Park - São Cristóvão, Salvador - BA, 41500-300
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {states.map((state) => (
                <span key={state} className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                  {state}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Golden House 873. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-[#cfa165] transition-colors">
              Política de Privacidade
            </a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-500 hover:text-[#cfa165] transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
