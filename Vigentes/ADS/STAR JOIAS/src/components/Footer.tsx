import { Instagram, Facebook, Phone, Mail } from 'lucide-react'

interface FooterProps {
  onNavigate: (section: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-black text-gold-light py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=starjoias%2Festrela-dourada-texto-removebg-preview%201.png&version_id=null"
              alt="StarJoias Logo"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gold-light/80 italic">
              Tradição e elegância desde 1993
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('produtos')} className="text-gold-light/80 hover:text-gold transition-colors">
                  Produtos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('servicos')} className="text-gold-light/80 hover:text-gold transition-colors">
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sobre')} className="text-gold-light/80 hover:text-gold transition-colors">
                  Sobre Nós
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contato')} className="text-gold-light/80 hover:text-gold transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gold mb-4">Redes Sociais e Contato</h3>
            <div className="space-y-3">
              <a
                href="https://instagram.com/starjoiasbarreiras"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gold-light/80 hover:text-gold transition-colors group"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                <span>@starjoiasbarreiras</span>
              </a>
              <a
                href="https://facebook.com/starjoiasbarreiras"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gold-light/80 hover:text-gold transition-colors group"
              >
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
                <span>starjoiasbarreiras</span>
              </a>
              <a
                href="https://wa.me/5577991245678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gold-light/80 hover:text-gold transition-colors group"
              >
                <Phone size={20} className="group-hover:scale-110 transition-transform" />
                <span>(77) 99124-5678</span>
              </a>
              <a
                href="mailto:starjoias@uol.com.br"
                className="flex items-center space-x-3 text-gold-light/80 hover:text-gold transition-colors group"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                <span>starjoias@uol.com.br</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8 text-center">
          <p className="text-gold-light/60 text-sm">
            © 2024 StarJoias - Todos os direitos reservados | Barreiras - BA
          </p>
        </div>
      </div>
    </footer>
  )
}
