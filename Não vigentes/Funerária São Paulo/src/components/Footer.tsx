export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark text-white">
      <div className="container mx-auto px-4 lg:px-12 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/funerariasaopaulo%2Ffuneraria-goiania-logo.webp"
              alt="Funerária São Paulo"
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Tradição e excelência em serviços funerários há mais de 30 anos.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-white/80 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-white/80 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-white/80 hover:text-white transition-colors">
                  Planos de Assistência
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/80 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-white/80">
                <a href="https://wa.me/556299223409" className="hover:text-white transition-colors">
                  WhatsApp: (62) 99292-3409
                </a>
              </li>
              <li className="text-white/80">
                <a href="mailto:senapgoiania@gmail.com" className="hover:text-white transition-colors">
                  senapgoiania@gmail.com
                </a>
              </li>
              <li className="text-white/80">Atendimento 24 horas</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Grupo Senap</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Empresa familiar com tradição em Goiânia, oferecendo serviços com qualidade e transparência.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-neutral-dark/80 border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-12 max-w-7xl py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>© {currentYear} Funerária São Paulo - Grupo Senap. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
