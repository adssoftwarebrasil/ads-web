import { Cpu, HardDrive, Keyboard, Monitor, Mouse, Usb, Wifi, Zap } from 'lucide-react';

export default function Products() {
  const products = [
    {
      icon: Monitor,
      title: 'Monitores e Displays',
      description: 'Telas de alta resolução, novas e seminovas com garantia certificada', // "Garantia certificada" passa mais confiança que apenas "seminovos"
      color: 'rgb(0,168,89)',
    },
    {
      icon: Cpu,
      title: 'Desktops e Workstations', // "Computadores" é genérico. "Workstations" soa profissional.
      description: 'Máquinas prontas para uso corporativo, estudos e home office',
      color: 'rgb(46,47,147)',
    },
    {
      icon: Zap,
      title: 'Setup Gamer',
      description: 'Configurações de alta performance e hardware de última geração',
      color: 'rgb(0,168,89)',
    },
    {
      icon: HardDrive,
      title: 'Performance e Armazenamento', // Mais atrativo que "SSDs e Memórias"
      description: 'Kits de memória RAM e SSDs NVMe para ultra velocidade',
      color: 'rgb(46,47,147)',
    },
    {
      icon: Keyboard,
      title: 'Teclados Mecânicos e Office',
      description: 'Linha completa de periféricos para digitação e jogos',
      color: 'rgb(0,168,89)',
    },
    {
      icon: Mouse,
      title: 'Mouses de Precisão',
      description: 'Opções ergonômicas e gamers com ajuste de DPI',
      color: 'rgb(46,47,147)',
    },
    {
      icon: Usb,
      title: 'Armazenamento Portátil', // Mais profissional que "Pendrives"
      description: 'Soluções móveis de dados e backup externo',
      color: 'rgb(0,168,89)',
    },
    {
      icon: Wifi,
      title: 'Conectividade e Energia', // Mais técnico que "Acessórios"
      description: 'Fontes certificadas, cabos de dados e adaptadores de rede',
      color: 'rgb(46,47,147)',
    },
  ];

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[rgb(0,168,89)]/10 text-[rgb(0,168,89)] px-4 py-2 rounded-full mb-4">
            <span className="font-semibold">Nossos Produtos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hardware e Acessórios de{' '}
            <span className="text-[rgb(0,168,89)]">Alta Performance</span>
          </h2>
          <p className="text-lg text-gray-600">
            Catálogo completo de equipamentos novos e revisados, com procedência garantida e nota fiscal
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[rgb(0,168,89)] hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${product.color}15` }}
              >
                <product.icon size={28} style={{ color: product.color }} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://storage.lucasmendes.dev/site-sp/armazen%20informatica%2Fimg%2Fcomputadores-monitores-acessorios-bancada-estoque-exposicao.webp"
            alt="Estoque de produtos de informática"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(46,47,147)]/90 to-transparent flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xl">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Encontre o Equipamento Ideal
                </h3>
                <p className="text-lg text-gray-100 mb-6">
                  Visite nossa loja física e confira nosso estoque atualizado de hardware e periféricos.
                </p>
                <a
                  href="http://wa.me/554191217176"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[rgb(0,168,89)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(0,148,79)] transition-all shadow-lg font-semibold"
                >
                  Consultar Estoque
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}