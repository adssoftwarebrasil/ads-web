import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Truck,
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Qualidade Garantida',
    text: 'Controle de qualidade rigoroso em cada lote.',
  },
  {
    icon: Award,
    title: 'Tradição desde 1976',
    text: 'Quase 50 anos de experiência no setor alimentício.',
  },
  {
    icon: Truck,
    title: 'Entrega Regional',
    text: 'Logística consolidada na região de Ribeirão Preto.',
  },
  {
    icon: Sparkles,
    title: 'Sabor Autêntico',
    text: 'Receitas tradicionais que conquistam paladares.',
  },
];

function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 rounded-xl bg-white shadow-soft">
      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-red mb-1">
        {label}
      </p>
      <p className="font-extrabold text-brand-brown text-sm">{value}</p>
    </div>
  );
}

export default function ProdutoDetalhe() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <section className="py-32 text-center bg-brand-beige">
        <h1 className="font-heavy text-3xl text-brand-brown mb-4">Produto não encontrado</h1>
        <Link to="/produtos" className="text-brand-red font-bold underline">
          Voltar para o catálogo
        </Link>
      </section>
    );
  }

  const sameCategory = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4);
  const others = products.filter((item) => item.id !== product.id).slice(0, 4);
  const related = sameCategory.length > 0 ? sameCategory : others;

  const quoteText = `Olá, gostaria de um orçamento para o produto: ${product.name}.`;
  const quoteLink = `https://wa.me/5516997516375?text=${encodeURIComponent(quoteText)}`;

  return (
    <>
      <section className="bg-brand-gold py-5 md:py-6">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center gap-2 text-sm">
          <Link to="/" className="text-brand-brown/70 hover:text-brand-red transition-colors">
            Início
          </Link>
          <span className="text-brand-brown/40">/</span>
          <Link
            to="/produtos"
            className="text-brand-brown/70 hover:text-brand-red transition-colors"
          >
            Produtos
          </Link>
          <span className="text-brand-brown/40">/</span>
          <span className="text-brand-brown font-bold truncate">{product.name}</span>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Link
            to="/produtos"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-brown hover:text-brand-red transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar para o catálogo
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl bg-white shadow-card overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-brand-red/10" />
                <img
                  src={product.image}
                  alt={product.name}
                  className="relative z-10 w-full h-full object-contain p-12"
                />
                <span className="absolute top-6 left-6 z-20 inline-flex items-center px-4 py-2 rounded-full bg-brand-red text-white text-xs font-bold tracking-wider uppercase">
                  {product.category}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-brand-red mb-4">
                Linha Veranita
              </span>
              <h1 className="font-heavy text-4xl md:text-5xl lg:text-6xl text-brand-brown leading-[1.05]">
                {product.name}
              </h1>
              <p className="mt-6 text-lg font-book text-brand-brown/85 leading-relaxed">
                {product.description}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <SpecItem label="Categoria" value={product.category} />
                <SpecItem label="Embalagem" value={product.weight} />
                <SpecItem label="Origem" value="Sertãozinho - SP" />
                <SpecItem label="Indicado para" value="Atacado e Varejo" />
              </div>

              <div className="mt-8 rounded-2xl border border-brand-gold overflow-hidden">
                <div className="bg-brand-gold px-6 py-3">
                  <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-brown">
                    Ficha Técnica
                  </p>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      { label: 'Código', value: product.cod },
                      { label: 'NCM', value: product.ncm },
                      { label: 'EAN', value: product.ean },
                      { label: 'DUN', value: product.dun },
                    ].map((row, index) => (
                      <tr
                        key={row.label}
                        className={index % 2 === 0 ? 'bg-white' : 'bg-brand-beige/50'}
                      >
                        <td className="px-6 py-3 font-bold text-brand-brown/60 text-xs uppercase tracking-wider w-28">
                          {row.label}
                        </td>
                        <td className="px-6 py-3 font-medium text-brand-brown tracking-widest">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={quoteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-brand-red text-white text-sm font-bold uppercase tracking-wider hover:bg-brand-brown transition-colors shadow-soft"
                >
                  <MessageCircle className="w-4 h-4" /> Solicitar Orçamento
                </a>
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-brand-gold text-brand-brown text-sm font-bold uppercase tracking-wider hover:bg-brand-brown hover:text-brand-gold transition-colors"
                >
                  Falar com Atendimento
                </Link>
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-white shadow-soft">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-red mb-3">
                  Informações importantes
                </p>
                <p className="text-sm font-book text-brand-brown/80 leading-relaxed">
                  Disponível em embalagens de <strong>{product.weight}</strong>. Os produtos
                  Veranita são desenvolvidos com matéria-prima selecionada e processos que respeitam
                  a tradição. Embalagens disponíveis em diversos formatos para atender
                  supermercados, mercearias e food service.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {benefits.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-white shadow-soft text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-gold/30 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-brand-brown" />
                </div>
                <p className="font-extrabold text-brand-brown text-sm mb-2">{item.title}</p>
                <p className="text-xs font-book text-brand-brown/75 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionTitle
              align="left"
              eyebrow="Você também pode gostar"
              title={<>Produtos relacionados</>}
            />
            <Link
              to="/produtos"
              className="hidden md:inline-flex items-center gap-2 text-brand-brown font-bold text-sm uppercase tracking-wider border-b-2 border-brand-red pb-1 hover:text-brand-red transition-colors"
            >
              Ver todos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {related.map((item, index) => (
              <ProductCard key={item.id} product={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
