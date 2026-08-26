import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D1B2A] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/netcompany%20informatica/img/LOGO%20NET%20COMPANY%20VERTICAL.webp"
              alt="NetCompany Informática"
              className="h-24 w-auto mb-5"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Há mais de 15 anos levando tecnologia de qualidade para Marabá e região com
              comprometimento, agilidade e preço justo.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/netcompany.infor/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#F58842] rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/NetCompanyInformatica/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#1877F2] rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Serviços
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                'Manutenção de Computadores',
                'Reparo de Notebooks',
                'Conserto de Impressoras',
                'Manutenção de Celulares',
                'Redes Wi-Fi e Cabeadas',
                'Formatação e Programas',
                'Recarga de Cartuchos',
                'No-breaks e Estabilizadores',
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="hover:text-[#F58842] transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Produtos
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                'Computadores Desktop',
                'Notebooks',
                'Periféricos e Acessórios',
                'Linha Gamer',
                'Cartuchos e Toners',
                'Roteadores e Redes',
                'Cabos e Adaptadores',
                'Suprimentos em Geral',
              ].map((p) => (
                <li key={p}>
                  <a
                    href="#produtos"
                    className="hover:text-[#F58842] transition-colors duration-200"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Contato
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <div className="flex items-start gap-2 mb-1">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-gray-500" />
                  <span className="text-gray-400">Av. Antônio Vilhena, 410 - Casa B, Laranjeira, Marabá – PA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="shrink-0 text-gray-500" />
                  <a href="tel:+559491941919" className="hover:text-[#F58842] transition-colors">
                    (94) 9 9194-1919
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-gray-500" />
                <a
                  href="mailto:vendas@netcompanyinformatica.com.br"
                  className="hover:text-[#F58842] transition-colors break-all"
                >
                  vendas@netcompanyinformatica.com.br
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="shrink-0 text-gray-500" />
                <span className="text-gray-400">Seg–Sex: 08h–18h | Sáb: 08h–12h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            © {year} NetCompany Informática. Todos os direitos reservados. CNPJ: Marabá – PA, desde
            07/01/2009.
          </p>
          <p>
            Desenvolvido com tecnologia e dedicação para você.
          </p>
        </div>
      </div>
    </footer>
  );
}
