const solutions = [
  'Gestão de Fazendas',
  'Emissão de NF-e',
  'Gestão de Armazém',
  'Aplicativo Móvel',
  'LCDPR',
];

export default function Footer() {
  return (
    <footer className="bg-plantae-dark text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          <div className="md:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/plantae/Logo_Plantae-%20logo%20branca%20fundo%20trasnparente.png"
              alt="Plantae Gestão Agrícola"
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-white/50 text-xs leading-relaxed">
              Software para gestão de produtores rurais. Fundada em 2005 em Sorriso - MT.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.facebook.com/PlantaeGestaAgricola"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-plantae-green transition-colors duration-200 text-xs font-semibold"
              >
                Facebook
              </a>
              <span className="text-white/20">|</span>
              <a
                href="https://www.instagram.com/plantaegestao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-plantae-green transition-colors duration-200 text-xs font-semibold"
              >
                Instagram
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-4">Soluções</h4>
            <ul className="flex flex-col gap-2">
              {solutions.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-white/50 hover:text-white text-xs transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-4">Empresa</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#about"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-xs transition-colors duration-200"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-xs transition-colors duration-200"
                >
                  Funcionalidades
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-xs transition-colors duration-200"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="https://www.plantae.agr.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-xs transition-colors duration-200"
                >
                  Site Oficial
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-4">Contato</h4>
            <ul className="flex flex-col gap-2">
              <li className="text-white/50 text-xs">
                <span className="block font-semibold text-white/70 mb-0.5">Telefone</span>
                (66) 99292-1858
              </li>
              <li className="text-white/50 text-xs">
                <span className="block font-semibold text-white/70 mb-0.5">E-mail</span>
                rubens.capitanio@plantae.agr.br
              </li>
              <li className="text-white/50 text-xs">
                <span className="block font-semibold text-white/70 mb-0.5">Endereço</span>
                Av. Amadeu Lodi, 949 Sala 206
                <br />
                Sorriso - MT
              </li>
              <li className="text-white/50 text-xs">
                <span className="block font-semibold text-white/70 mb-0.5">Horário</span>
                Seg-Sex: 07:00–11:30 | 13:00–18:00
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2026 Plantae Gestão Agrícola. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">
            FÁCIL, RÁPIDO E SEGURO &nbsp;·&nbsp; www.plantae.agr.br
          </p>
        </div>
      </div>
    </footer>
  );
}
