export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a2332] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-8">
          <div>
            <h3 className="text-3xl font-black text-[#E7251C] mb-2">START</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Consórcios
              <br />
              Realizando sonhos há mais de 8 anos em Dourados-MS
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-base">Contato</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Av. Marcelino Pires, 336</p>
              <p>Dourados-MS, 79.820-101</p>
              <p>
                <a
                  href="mailto:luizpaulo@startconsorcios.com.br"
                  className="hover:text-[#E7251C] transition-colors"
                >
                  luizpaulo@startconsorcios.com.br
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/5567996552408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E7251C] transition-colors"
                >
                  +55 67 99655-2408
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-base">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/startinvestimentosemconsorcios"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-gray-400 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                  <circle cx="17.5" cy="6.5" r="1.5"></circle>
                </svg>
              </a>
              <a
                href="https://facebook.com/startcorretoradeconsorcios"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-gray-400 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300"
                aria-label="Facebook"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a6 6 0 0 0-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 0 1 2-2h1z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-xs mt-8">
          <p>© <span id="year">{year}</span> START Consórcios. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
