import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1f2937] text-[#d1d5db] pt-20 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-12 pb-12 border-b border-white/10">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Flogomarca-loja.webp"
              alt="Barreiras Informática"
              className="h-[50px] w-auto mb-5"
            />
            <p className="text-[15px] leading-relaxed text-[#9ca3af] mb-5 max-w-[280px]">
              Desde 1990 comercializando produtos de tecnologia, papelaria e móveis de escritório
              para toda a região Oeste da Bahia.
            </p>
            <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-3 mb-5 max-w-[280px]">
              <p className="text-xs leading-relaxed text-amber-200">
                <span className="font-bold">Empresa independente de revenda.</span> Não somos
                afiliados nem oferecemos suporte oficial de fabricantes como Microsoft, Apple, Dell ou HP.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/barreirasinformatica_?utm_source=qr&igsh=MXFjbXk3OGVvcWU5eA=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-lg text-[#d1d5db] hover:bg-gradient-to-br hover:from-[#E1306C] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-white transition-all hover:-translate-y-0.5"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/1AEvH8m3eX/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-lg text-[#d1d5db] hover:bg-[#1877F2] hover:text-white transition-all hover:-translate-y-0.5"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Produtos</h3>
            <ul className="space-y-3.5">
              {['Informática', 'Papelaria', 'Móveis de Escritório', 'Volta às Aulas', 'Nobreaks e Estabilizadores', 'Cadeiras Ergonômicas'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection('produtos')}
                    className="text-[15px] text-[#9ca3af] hover:text-[#69bfd6] hover:pl-2 transition-all relative"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Quem Somos</h3>
            <div className="space-y-4 mb-6">
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                <span className="text-white font-semibold block mb-1">Barreiras Informática</span>
                Revendedora especializada em produtos de tecnologia, papelaria e móveis desde 1990.
              </p>
              <p className="text-xs text-amber-300/80 leading-relaxed bg-amber-900/10 border border-amber-700/20 rounded p-2">
                Somos revendedores independentes. Não representamos nem oferecemos suporte oficial
                de fabricantes como Microsoft, Apple, Dell, HP ou outras marcas de tecnologia.
              </p>
            </div>
            <ul className="space-y-3.5">
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-[15px] text-[#9ca3af] hover:text-[#69bfd6] hover:pl-2 transition-all"
                >
                  Nossa História
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('solucoes-empresariais')}
                  className="text-[15px] text-[#9ca3af] hover:text-[#69bfd6] hover:pl-2 transition-all"
                >
                  Soluções Corporativas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-[15px] text-[#9ca3af] hover:text-[#69bfd6] hover:pl-2 transition-all"
                >
                  Como Chegar
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Fale Conosco</h3>
            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin size={20} className="text-[#69bfd6] flex-shrink-0 mt-0.5" />
                <div className="text-sm leading-relaxed">
                  <div>Rua Princesa Isabel, nº 448</div>
                  <div>Centro, Barreiras - BA</div>
                  <div>CEP: 47800-166</div>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <Phone size={20} className="text-[#69bfd6] flex-shrink-0" />
                <a
                  href="https://wa.me/5577999948600"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold hover:text-[#69bfd6] transition-colors"
                >
                  (77) 3612-5050
                </a>
              </div>

              <div className="flex gap-3">
                <Mail size={20} className="text-[#69bfd6] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:televendas@grupobi.com.br"
                  className="text-sm break-all hover:text-[#69bfd6] transition-colors"
                >
                  televendas@grupobi.com.br
                </a>
              </div>

              <div className="flex gap-3">
                <Clock size={20} className="text-[#69bfd6] flex-shrink-0 mt-0.5" />
                <div className="text-sm leading-relaxed">
                  <div>Segunda a Sexta</div>
                  <div>08:00h às 18:30h</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 space-y-4">
          <div className="bg-[#1a1f2e] border border-gray-700/50 rounded-lg p-4 text-xs text-gray-400 leading-relaxed">
            <p className="font-semibold text-gray-300 mb-2">Aviso Legal:</p>
            <p>
              A Barreiras Informática é uma empresa independente de comércio varejista de produtos de tecnologia, papelaria e móveis.
              Não somos afiliados, representantes oficiais, prestadores de suporte técnico autorizado nem mantemos vínculo direto com
              fabricantes como Microsoft, Apple, Dell, HP, Lenovo, Samsung ou outras marcas. Comercializamos produtos originais de
              diversas marcas e oferecemos consultoria especializada para auxiliar na escolha de equipamentos. Para suporte técnico
              oficial de produtos, entre em contato diretamente com o fabricante.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#9ca3af]">
            <div>© 2025 Barreiras Informática. Todos os direitos reservados.</div>
            <div>
              Desenvolvido com <span className="text-[#e3130c]">❤️</span> para o Oeste da Bahia
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
