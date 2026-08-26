const Footer = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Vim através do site da AgroPG e gostaria de mais informações.");
    window.open(`https://wa.me/554233230147?text=${message}`, "_blank");
  };

  const products = [
    "Embreagem",
    "Eixos Transmissões",
    "John Deere",
    "Pneus Agrícola",
    "Valtra",
    "ZF Agrícola",
    "Quem Somos",
    "Contato",
  ];

  const categories = [
    "Valtra",
    "John Deere",
    "ZF Agrícola",
    "Embreagem",
    "CNH - Case New Holland",
    "Pneus Agrícola",
    "Colheitadeiras",
    "Peças",
  ];

  return (
    <footer className="bg-[rgb(19,46,78)] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <img src="/assets/img/logo.png" alt="AGROPG Logo" className="h-12 mb-4" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Com mais de 3 anos de atuação no setor, a AGROPG Distribuidora se destaca pela variedade e qualidade das soluções oferecidas para o agronegócio. Nossa missão é garantir ao produtor rural acesso rápido às melhores peças agrícolas do mercado, com atendimento especializado e entrega ágil.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Produtos</h3>
            <ul className="space-y-2">
              {products.map((item, index) => (
                <li key={index}>
                  <a
                    href={item === "Quem Somos" ? "#quem-somos" : item === "Contato" ? "#contato" : "#produtos"}
                    className="text-gray-300 hover:text-[rgb(45,156,219)] transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Categoria</h3>
            <ul className="space-y-2">
              {categories.map((item, index) => (
                <li key={index}>
                  <a
                    href="#produtos"
                    className="text-gray-300 hover:text-[rgb(45,156,219)] transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-4">
              <button
                onClick={handleWhatsApp}
                className="w-full bg-[rgb(45,156,219)] text-white px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <svg width="20" height="20" viewBox="0 0 32 32" fill="white">
                  <path d="M16 0C7.164 0 0 7.164 0 16c0 2.831.739 5.489 2.032 7.792L0 32l8.408-2.017A15.918 15.918 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm.001 29.097c-2.413 0-4.736-.668-6.72-1.931l-.482-.288-5.003 1.203 1.218-4.914-.316-.501A12.927 12.927 0 013 16C3 8.82 8.82 3 16 3s13 5.82 13 13-5.82 13.097-13 13.097zm7.144-9.763c-.393-.196-2.322-1.145-2.682-1.276-.36-.131-.622-.196-.883.197-.262.393-1.013 1.276-1.242 1.538-.229.262-.458.295-.851.098-.393-.196-1.659-.612-3.159-1.947-1.168-1.042-1.957-2.328-2.186-2.721-.229-.393-.024-.605.172-.801.177-.176.393-.459.589-.688.196-.229.262-.393.393-.655.131-.262.066-.491-.033-.688-.098-.197-.883-2.127-1.21-2.913-.319-.765-.643-.661-.883-.673-.229-.012-.491-.015-.753-.015s-.688.098-1.048.491c-.36.393-1.375 1.342-1.375 3.273s1.407 3.798 1.604 4.06c.196.262 2.771 4.233 6.715 5.935.938.405 1.671.647 2.242.828.943.299 1.802.257 2.481.156.757-.113 2.322-.949 2.649-1.866.327-.916.327-1.702.229-1.866-.098-.164-.36-.262-.753-.459z" />
                </svg>
                <span>Enviar WhatsApp</span>
              </button>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>(42) 3323-0147</p>
                <p>joel@agropg.com.br</p>
                <p className="leading-relaxed">
                  Jesuíno Manoel de Almeida, 489 - Boa VistaPonta Grossa - PR, 84070-450
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 text-center text-gray-400 text-sm space-y-2">
          <p>AGROPG Distribuidora de Peças Agrícolas LTDA — CNPJ: 45.856.764/0001-11</p>
          <p className="space-x-3">
            <a href="/privacidade.html" className="hover:text-[rgb(45,156,219)] transition-colors">
              Política de Privacidade
            </a>
            <span>·</span>
            <a href="/termos.html" className="hover:text-[rgb(45,156,219)] transition-colors">
              Termos de Uso
            </a>
          </p>
          <p>Copyright © 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
