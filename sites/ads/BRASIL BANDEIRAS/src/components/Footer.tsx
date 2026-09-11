import { Instagram, Phone, Mail, Clock } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const menu = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre', id: 'about' },
  { label: 'Produtos', id: 'products' },
  { label: 'Contato', id: 'contact' },
];

const productList = [
  'Camisetas Personalizadas',
  'Abadás',
  'Coletes',
  'Uniformes Corporativos',
  'Uniformes Esportivos',
];

export default function Footer() {
  return (
    <footer
      className="border-t-2"
      style={{ backgroundColor: 'rgb(0, 45, 100)', borderTopColor: 'rgb(255, 241, 20)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=brasil-camisetas%2Fimage%2057.png&version_id=null"
              alt="Brasil Camisetas"
              className="h-12 w-auto mb-4"
            />
            <p className="text-white text-opacity-80 mb-4 leading-relaxed">
              Qualidade que veste o Brasil há quase 30 anos
            </p>
            <a
              href="https://instagram.com/brasilcamisetasgo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-opacity-80 transition-colors"
            >
              <Instagram size={20} />
              @brasilcamisetasgo
            </a>
          </div>
          <div>
            <h3 className="font-bold mb-4" style={{ color: 'rgb(255, 241, 20)' }}>
              Menu
            </h3>
            <div className="space-y-3">
              {menu.map((m) => (
                <button
                  key={m.id}
                  onClick={() => scrollToSection(m.id)}
                  className="block text-white text-opacity-80 hover:text-opacity-100 transition-colors"
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4" style={{ color: 'rgb(255, 241, 20)' }}>
              Nossos Produtos
            </h3>
            <div className="space-y-3 text-white text-opacity-80">
              {productList.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4" style={{ color: 'rgb(255, 241, 20)' }}>
              Contato
            </h3>
            <div className="space-y-3 text-white text-opacity-80">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(62) 3413-4865</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-sm">brasilcamisetas2025@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={16} className="mt-1" />
                <div>
                  <p>Seg-Sex: 08h-18h</p>
                  <p>Sábado: 08h-12h</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-4 px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: 'rgb(6, 138, 80)' }}
            >
              Fazer Orçamento
            </button>
          </div>
        </div>
        <div className="border-t border-white border-opacity-20 mt-12 pt-8 text-center">
          <p className="text-white text-opacity-80 mb-2">
            © 2025 Brasil Camisetas. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white text-opacity-60 text-sm mb-2">
            <button className="hover:text-opacity-100 transition-colors">
              Política de Privacidade
            </button>
            <span>|</span>
            <button className="hover:text-opacity-100 transition-colors">Termos de Uso</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
