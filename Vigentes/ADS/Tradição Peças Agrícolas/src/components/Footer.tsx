import { Facebook, Instagram, MapPin, Phone, Clock } from 'lucide-react';

const quickLinks = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre', id: 'about' },
  { label: 'Produtos', id: 'products' },
  { label: 'Depoimentos', id: 'testimonials' },
  { label: 'Contato', id: 'contact' },
];

const brands = [
  'Case IH',
  'New Holland',
  'CNH Industrial',
  'Momentum',
  'Horsch',
  'Macdon',
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-[rgb(1,52,47)] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/tradicao%20pecas%20agricolas%2Fimg%2Flogo-sem-fundo.webp"
              alt="Tradição Peças Agrícolas"
              className="h-20 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              20 anos de experiência em peças agrícolas. Onde o agro e a tradição
              se encontram.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/TradicaoPecasAgricolasLtda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[rgb(221,183,120)] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/tradicao_pecas_agricolas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[rgb(221,183,120)] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(221,183,120)]">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-gray-300 hover:text-[rgb(221,183,120)] transition-colors duration-300 text-sm"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(221,183,120)]">
              Marcas
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {brands.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(221,183,120)]">
              Contato
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[rgb(221,183,120)] mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>R. Juscelino Kubitscheck, 306</p>
                  <p>Jardim Paraiso Fase I</p>
                  <p>Luís Eduardo Magalhães - BA</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[rgb(221,183,120)] flex-shrink-0" />
                <a
                  href="https://wa.me/557736281005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-[rgb(221,183,120)] transition-colors"
                >
                  (77) 3628-1005
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[rgb(221,183,120)] mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Seg-Sex: 07:30 - 18:00</p>
                  <p>Sábado: 07:30 - 12:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2026 Tradição Peças Agrícolas. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>CNPJ: 00.000.000/0000-00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgb(0,40,36)] py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            Agricultura tem que ter{' '}
            <span className="text-[rgb(221,183,120)] font-semibold">
              Tradição
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
