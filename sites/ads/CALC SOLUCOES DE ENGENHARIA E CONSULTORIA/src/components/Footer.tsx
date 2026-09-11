export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/calc%2FLOGOTIPO%20-%20BRANCO.png"
              alt="CALC Soluções"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-300 leading-relaxed">
              Soluções de Engenharia e Consultoria especializada em Energia Solar, Geração
              Distribuída e Engenharia Elétrica &amp; Civil.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#facc22] mb-6">Contato</h3>
            <div className="space-y-4">
              <a
                href="tel:+5584992026504"
                className="flex items-center text-gray-300 hover:text-[#facc22] transition-colors"
              >
                <i className="fas fa-phone mr-3"></i>
                <span>(84) 9 9202-6504</span>
              </a>
              <a
                href="mailto:calcsolucoes1@gmail.com"
                className="flex items-center text-gray-300 hover:text-[#facc22] transition-colors"
              >
                <i className="fas fa-envelope mr-3"></i>
                <span>calcsolucoes1@gmail.com</span>
              </a>
              <a
                href="https://instagram.com/calcsolucoeseng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-[#facc22] transition-colors"
              >
                <i className="fab fa-instagram mr-3"></i>
                <span>@calcsolucoeseng</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#facc22] mb-6">Links Úteis</h3>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-[#facc22] transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-[#facc22] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-[#facc22] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © 2025 CALC Soluções - Todos os direitos reservados | Desenvolvido com energia renovável{' '}
            <i className="fas fa-sun text-[#facc22]"></i>
          </p>
        </div>
      </div>
    </footer>
  );
}
