import { MapPin, Phone, Clock, Mail, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-[rgb(44,56,152)] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=gerasolenergia%2FLogo%20Gerarsol%20(1)_page-0001.jpg&version_id=null"
              alt="Gerarsol Logo"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-300 mb-4 leading-relaxed">
              Soluções completas em energia solar e engenharia elétrica para Luís Eduardo Magalhães
              e região.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/gerar_sol/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[rgb(187,212,46)] rounded-full flex items-center justify-center hover:bg-[rgb(170,195,40)] transition-colors"
              >
                <Instagram size={20} className="text-[rgb(44,56,152)]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-[rgb(187,212,46)]">Navegação</h4>
            <ul className="space-y-3">
              {[
                { label: 'Início', href: '#hero' },
                { label: 'Sobre', href: '#about' },
                { label: 'Serviços', href: '#services' },
                { label: 'Diferenciais', href: '#differentials' },
                { label: 'Cases', href: '#cases' },
                { label: 'Galeria', href: '#gallery' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-[rgb(187,212,46)] transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-[rgb(187,212,46)]">Serviços</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Placas Solares</li>
              <li>Instalação e Manutenção</li>
              <li>Engenharia Elétrica</li>
              <li>Estruturas Metálicas</li>
              <li>Equipamentos Elétricos</li>
              <li>Iluminação Técnica</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-[rgb(187,212,46)]">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-[rgb(254,232,0)] mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300">
                  Luís Eduardo Magalhães - BA
                  <br />
                  Oeste da Bahia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-[rgb(254,232,0)] mr-3 flex-shrink-0" size={20} />
                <a
                  href="tel:5577999719638"
                  className="text-gray-300 hover:text-[rgb(187,212,46)] transition-colors"
                >
                  (77) 99971-9638
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="text-[rgb(254,232,0)] mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300">
                  Segunda a Sexta
                  <br />
                  08:00 - 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-center md:text-left mb-4 md:mb-0">
              © {currentYear} Gerarsol Soluções Elétricas LTDA. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm">CNPJ: 25.295.062/0001-07</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
