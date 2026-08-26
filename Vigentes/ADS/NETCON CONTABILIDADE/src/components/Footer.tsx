function Footer() {
  return (
    <footer className="bg-white py-12 border-t-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/netcon%2FLOGO%20PNG.png"
              alt="NetCon Contabilidade"
              className="h-16 mb-4"
            />
          </div>
          <div className="text-center">
            <p className="text-sm leading-relaxed text-gray-700">
              NetCon Contabilidade
              <br />
              Av. Gen. Ataíde Teive, 6588 - Dr. Silvio Leite
              <br />
              Boa Vista - RR, 69314-292
            </p>
          </div>
          <div className="text-center md:text-right">
            <a
              href="https://www.netconcontabilidade.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(0,0,87)] hover:text-[rgb(211,0,0)] transition-colors font-medium"
            >
              www.netconcontabilidade.com.br
            </a>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © 2026 NetCon Contabilidade. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
