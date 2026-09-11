import ProductCard from './ProductCard';
import {
  Wrench, Hammer, Drill, Shield, Ruler, Sword, Anchor, Circle,
  Link, Glasses, Droplet, Disc, Sandal, Grid, Zap, Sparkles,
  PaintBucket, ShoppingCart, HardHat, Leaf, Flame, Box
} from 'lucide-react';

export default function CatalogGrid() {
  const categories = [
    {
      title: 'Abraçadeiras',
      description: 'Abraçadeiras de Nylon, Aço Inox, Cunha, Tipo D/U. Soluções para fixação e organização de cabos e tubulações.',
      icon: Circle,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2Fnovo%2F111.jpeg'
    },
    {
      title: 'Parafusos Diversos',
      description: 'Parafusos Sextavados, Allen, Francês, Madeira, Chipboard. Linha completa para todas as aplicações.',
      icon: Wrench,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2F12.jpeg'
    },
    {
      title: 'Parafusos Brocantes e Drywall',
      description: 'Parafusos Ponta Agulha, Flangeado, Trombeta. Especiais para estruturas metálicas e drywall.',
      icon: Drill,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2F23.jpeg'
    },
    {
      title: 'Porcas e Arruelas',
      description: 'Porcas Sextavadas, Travantes, Arruelas Lisas, de Pressão e Funileiro. Complementos essenciais.',
      icon: Circle,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2F1.jpeg'
    },
    {
      title: 'Barras Roscadas',
      description: 'Barras Roscadas em Inox, Zincada e Ferro. Diversos diâmetros e comprimentos disponíveis.',
      icon: Ruler,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2F17.jpeg'
    },
    {
      title: 'Chumbadores e Fixadores',
      description: 'Parabolt, CBA, Fixadores Químicos. Fixação robusta em concreto e alvenaria estrutural.',
      icon: Anchor,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2F8.png'
    },
    {
      title: 'Buchas de Fixação',
      description: 'Buchas para Parede Oca, Tijolo Furado, Drywall/Fly. Soluções para cada tipo de substrato.',
      icon: Box,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2F19.jpeg'
    },
    {
      title: 'Rebites',
      description: 'Rebites de Alumínio, Repuxo, Rosca. Fixação permanente e confiável para chapas metálicas.',
      icon: Circle,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2F15.png'
    },
    {
      title: 'Ventosas e Cortadores de Vidro',
      description: 'Ferramentas profissionais para manuseio e corte de vidros com precisão e segurança.',
      icon: Glasses,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2F18.jpeg'
    },
    {
      title: 'Fechos, Dobradiças e Batentes',
      description: 'Ferragens completas para portas, portões e móveis. Durabilidade e acabamento premium.',
      icon: Box,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2F13.png'
    },
    {
      title: 'Fitas Adesivas e Vedadoras',
      description: 'Dupla Face, Crepe, Isolante, Veda Rosca, Zebrada. Soluções para vedação e fixação.',
      icon: Grid,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2F11.jpeg'
    },
    {
      title: 'Silicones, Selantes e Colas',
      description: 'PU, Espuma Expansiva, Massa Plástica. Produtos para vedação e colagem profissional.',
      icon: Droplet,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2F6.jpeg'
    },
    {
      title: 'Discos de Corte e Desbaste',
      description: 'Discos Diamantados, Flap, Serra Circular. Alta performance para corte e acabamento.',
      icon: Disc,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2F10.jpeg'
    },
    {
      title: 'Lixas e Abrasivos',
      description: 'Lixas para Ferro, D\'água, Cinta, Rebolos. Acabamento perfeito em todas as superfícies.',
      icon: Sparkles,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2F9.jpeg'
    },
    {
      title: 'Brocas e Ponteiras',
      description: 'Aço Rápido, Concreto, Bits Phillips/Fenda, SDS. Precisão em perfuração de diversos materiais.',
      icon: Drill,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2F16.jpeg'
    },
    {
      title: 'Serras Copo e Adaptadores',
      description: 'Serras copo para madeira, metal e alvenaria. Adaptadores e mandris de alta qualidade.',
      icon: Circle,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2F14.jpeg'
    },
    {
      title: 'Ferramentas Elétricas',
      description: 'Furadeiras, Esmerilhadeiras, Serras Mármore. Marcas Makita, Bosch e Dewalt.',
      icon: Zap,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2F22.jpeg'
    },
    {
      title: 'Ferramentas Manuais',
      description: 'Alicates, Chaves, Martelos, Estiletes, Serrotes. Kit completo para profissionais.',
      icon: Hammer,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2F3.jpeg'
    },
    {
      title: 'Ferramentas de Medição',
      description: 'Trenas, Níveis, Esquadros, Paquímetros. Precisão em suas medições e projetos.',
      icon: Ruler,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2F5.jpeg'
    },
    {
      title: 'Ferramentas para Jardim',
      description: 'Pás, Enxadas, Colheres de Pedreiro, Carrinhos. Equipamentos para construção e jardinagem.',
      icon: Leaf,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2F2.jpeg'
    },
    {
      title: 'Solda e Acessórios',
      description: 'Eletrodos, Arames, Máquinas Inversoras, Máscaras. Equipamentos completos para soldagem.',
      icon: Flame,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2F20.jpeg'
    },
    {
      title: 'EPIs - Proteção Individual',
      description: 'Luvas, Óculos, Botas, Capacetes, Cintos. Segurança em primeiro lugar no seu trabalho.',
      icon: Shield,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2F7.jpeg'
    },
    {
      title: 'Materiais Elétricos',
      description: 'Cabos, Plugues, Filtros de Linha, Extensões. Soluções elétricas confiáveis.',
      icon: Zap,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2F21.jpeg'
    },
    {
      title: 'Químicos e Limpeza Automotiva',
      description: 'Desengripantes, Ceras, Limpa Contato. Produtos de manutenção e conservação.',
      icon: PaintBucket,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2F24.jpeg'
    },
    {
      title: 'Organizadores e Caixas',
      description: 'Caixas de ferramentas, organizadores, cases. Mantenha seus equipamentos organizados.',
      icon: ShoppingCart,
      image: 'https://storage.lucasmendes.dev/site-sp/supersfix%2Fnovo%2F22222.jpeg'
    }
  ];

  return (
    <section id="catalogo" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Catálogo <span className="text-[#0b77aa]">Completo</span> de Produtos
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore nossa linha completa de materiais de fixação e ferramentas profissionais.
            Clique em cada categoria para visualizar detalhes e solicitar orçamento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <ProductCard
              key={index}
              title={category.title}
              description={category.description}
              icon={category.icon}
              image={category.image}
              pdfUrl="https://storage.lucasmendes.dev/site-sp/supersfix%2Fnovo%2FCATALOGO%20SUPERFIX%20NV-compactado-compactado_compressed.pdf"
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0b77aa] to-[#095f88] rounded-2xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Não Encontrou o que Procura?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Entre em contato conosco! Nossa equipe está pronta para ajudar você a encontrar
              a solução ideal para seu projeto.
            </p>
            <a
              href="https://wa.me/5566999029696?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20produtos%20da%20SUPERFIX."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0b77aa] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-medium text-lg shadow-lg"
            >
              Fale com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
