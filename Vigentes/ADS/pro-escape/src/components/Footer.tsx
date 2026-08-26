import { Instagram } from 'lucide-react'

interface FooterProps {
  scrollToSection: (id: string) => void
  handleWhatsApp: (msg: string) => void
}

export const Footer = ({ scrollToSection, handleWhatsApp }: FooterProps) => {
  return (
    <footer className="bg-black text-white py-20 border-t-4 border-[rgb(254,182,32)]">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/pro-escape%2Fimg%2Flogomarca.png"
              alt="Pro Escape"
              className="h-16 w-auto mb-8"
            />
            <p className="text-base text-gray-400 leading-relaxed">
              Fundada em 1989, a Pro Escape surgiu com o objetivo de ser uma referência em escapamentos. Com o passar do tempo, ampliamos nossos serviços e produtos, incluindo catalisadores, engates para reboque, entre outros.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8 text-[rgb(254,182,32)]">Menu</h3>
            <ul className="space-y-4">
              {['Início', 'Sobre', 'Serviços', 'Vantagens', 'Depoimentos', 'Contato'].map((item, index) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(['hero', 'sobre', 'servicos', 'vantagens', 'depoimentos', 'contato'][index])}
                    className="text-base text-gray-400 hover:text-[rgb(254,182,32)] transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8 text-[rgb(254,182,32)]">Serviços</h3>
            <ul className="space-y-4">
              {['Difusores para Escapamento', 'Protetor de Cárter', 'Solda', 'Catalisadores', 'Engates para Reboque'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-base text-gray-400 hover:text-[rgb(254,182,32)] transition-colors duration-300 hover:translate-x-1 inline-block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8 text-[rgb(254,182,32)]">Contato</h3>
            <button
              onClick={() => handleWhatsApp('Olá! Vim pelo site e gostaria de mais informações.')}
              className="bg-[rgb(254,182,32)] text-black px-8 py-4 rounded-full font-bold mb-6 hover:scale-105 transition-all duration-300 w-full text-lg"
            >
              Enviar WhatsApp
            </button>
            <p className="text-base text-gray-400 mb-3">+55 79 3215-2915</p>
            <p className="text-base text-gray-400 mb-5">proescape@prorscape.com.br</p>
            <p className="text-base text-gray-400 mb-6">Avenida Coelho e Campos, 1126, Santo Antônio - Aracaju/SE/49.060-000</p>
            <a href="https://www.instagram.com/pro.escape" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-110 transition-transform">
              <Instagram className="w-8 h-8 text-[rgb(254,182,32)]" />
            </a>
          </div>
        </div>

        <div className="border-t-2 border-gray-800 pt-10">
          <p className="text-base text-gray-500 text-center">
            Copyright © 2025
          </p>
        </div>
      </div>
    </footer>
  )
}
