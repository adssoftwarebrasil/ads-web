import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#0b0d10] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/megabaterias/LogomarcaComFundoAmareloRemovido.png"
              alt="Mega Baterias"
              className="h-12 w-auto mb-4"
              loading="lazy"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              A maior loja de baterias do Oeste Baiano.
              Qualidade, tradição e confiança há mais de 13 anos.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#ffef1d]">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/80 hover:text-[#ffef1d] transition-colors text-sm"
                >
                  A Mega
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/80 hover:text-[#ffef1d] transition-colors text-sm"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/80 hover:text-[#ffef1d] transition-colors text-sm"
                >
                  Disk-Entrega
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/80 hover:text-[#ffef1d] transition-colors text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#ffef1d]">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-[#ffef1d] flex-shrink-0 mt-1" />
                <span className="text-white/80">
                  Rua Irecê, 136 - Santa Cruz<br />
                  Luís Eduardo Magalhães/BA
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-[#ffef1d] flex-shrink-0" />
                <a href="tel:+5577999036565" className="text-white/80 hover:text-[#ffef1d] transition-colors">
                  77 9 9903-6565
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-[#ffef1d] flex-shrink-0" />
                <a href="tel:+5577998206419" className="text-white/80 hover:text-[#ffef1d] transition-colors">
                  77 9 9820-6419
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#ffef1d]">Redes Sociais</h3>
            <p className="text-white/80 text-sm mb-4">
              Siga-nos nas redes sociais e fique por dentro das novidades!
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/megabaterias_lem/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#ffef1d] hover:text-[#0b0d10] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/megabaterias"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#ffef1d] hover:text-[#0b0d10] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/5577999036565"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#25D366] hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2025 Mega Baterias. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <span>🏆</span>
              <span>4x Destaque do Ano - ACELEM</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
