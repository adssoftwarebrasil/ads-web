import { Instagram, Phone, MapPin, Clock } from 'lucide-react';

const produtos = [
  'Gás GLP P13, P20, P45',
  'Água Mineral 5L e 20L',
  'Água de Copo 200 ml, 500 ml com gás e sem gás',
  'Carvão para Churrasco',
  'Atendimento Empresarial',
];

const links = [
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Nossos Produtos', href: '#produtos' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[rgb(28,59,126)] to-[rgb(20,42,90)] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/deposito%20de%20gas%20moura%2Fimg%2Flogo-sem-fundo.png"
              alt="Depósito de Gás Moura"
              className="h-20 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-white/80 leading-relaxed mb-6">
              Desde 2019 oferecendo gás, água e carvão com qualidade e entrega rápida em Goiânia.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/depositodegasmoura/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[rgb(228,29,32)] transition-all"
              >
                <Instagram className="lucide lucide-instagram" width={20} height={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Produtos</h4>
            <ul className="space-y-3">
              {produtos.map((p) => (
                <li key={p}>
                  <a href="#produtos" className="text-white/80 hover:text-white transition-colors">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/80 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone
                  className="lucide lucide-phone flex-shrink-0 mt-1"
                  width={20}
                  height={20}
                />
                <div>
                  <a
                    href="tel:6232581139"
                    className="text-white/80 hover:text-white transition-colors block"
                  >
                    (62) 3258-1139
                  </a>
                  <a
                    href="http://wa.me/5562982672012"
                    className="text-white/80 hover:text-white transition-colors block"
                  >
                    (62) 98267-2012
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  className="lucide lucide-map-pin flex-shrink-0 mt-1"
                  width={20}
                  height={20}
                />
                <div className="text-white/80">
                  <p>Av. Olávo Bilac, 759</p>
                  <p>Setor Faiçalville</p>
                  <p>Goiânia - GO, 74360-105</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock
                  className="lucide lucide-clock flex-shrink-0 mt-1"
                  width={20}
                  height={20}
                />
                <div className="text-white/80">
                  <p>Seg-Sáb: 7:30 às 21:00</p>
                  <p>Dom: 7:30 às 17:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2026 Depósito de Gás Moura Ltda. - CNPJ: 34.595.257/0001-64</p>
            <p>Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
