import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  ChevronLeft,
  ChevronRight,
  Globe,
  Handshake,
  Leaf,
  MapPinned,
  PackageCheck,
  Quote,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import RecipeCard from '../components/RecipeCard';
import { products } from '../data/products';
import { recipes } from '../data/recipes';

const WHATSAPP_QUOTE =
  'https://wa.me/5516997516375?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento.';

const slides = [
  {
    image:
      'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=1920',
    eyebrow: 'Tradição desde 1976',
    title: ['Quase 50 anos', 'levando sabor', 'à sua mesa.'],
    accent: 1,
  },
  {
    image:
      'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1920',
    eyebrow: 'Especiarias Premium',
    title: ['Ingredientes selecionados', 'para receitas que', 'fazem história.'],
    accent: 1,
  },
  {
    image:
      'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=1920',
    eyebrow: 'Linha Completa',
    title: ['Temperos, molhos,', 'farofas e pipocas', 'em um só lugar.'],
    accent: 1,
  },
  {
    image:
      'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1920',
    eyebrow: 'Atendimento Premium',
    title: ['Parceria de confiança', 'para supermercados', 'e food service.'],
    accent: 1,
  },
];

const stats = [
  { value: '50', suffix: '+ Anos', label: 'de tradição' },
  { value: '100', suffix: '+', label: 'produtos no portfólio' },
  { value: '1.000', suffix: '+', label: 'pontos de venda' },
  { value: '5', suffix: '★', label: 'qualidade reconhecida' },
];

const differentials = [
  {
    icon: Award,
    title: 'Tradição e Experiência',
    text: 'Quase 50 anos de mercado desde 1976, consolidando nossa expertise no segmento alimentício.',
  },
  {
    icon: Leaf,
    title: 'Produtos Regionais',
    text: 'Fabricados na região com forte identidade local, garantindo frescor e qualidade superior.',
  },
  {
    icon: Sparkles,
    title: 'Linha Completa',
    text: 'Mix variado de especiarias, temperos, molhos, farofas e pipocas para facilitar seu negócio.',
  },
  {
    icon: TrendingUp,
    title: 'Melhor Custo-Benefício',
    text: 'Qualidade consistente aliada a preços competitivos para maximizar sua margem de lucro.',
  },
  {
    icon: Handshake,
    title: 'Atendimento Personalizado',
    text: 'Relacionamento próximo e de longo prazo, com atendimento dedicado às suas necessidades.',
  },
  {
    icon: MapPinned,
    title: 'Presença Consolidada',
    text: 'Presente em grande parte das redes de supermercados da região de Ribeirão Preto.',
  },
];

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Qualidade Certificada',
    text: 'Processos rigorosos em cada etapa de produção.',
  },
  {
    icon: Globe,
    title: 'Presença Regional Forte',
    text: 'Distribuição em supermercados de toda a região.',
  },
  {
    icon: PackageCheck,
    title: 'Embalagens Exclusivas',
    text: 'Diversos formatos para varejo e food service.',
  },
];

const testimonials = [
  {
    name: 'Guilherme Polito Espósito',
    role: 'Cliente',
    text: 'Produtos TOP! Vendedor Thiago muito atencioso.',
  },
  {
    name: 'Maria Silva Santos',
    role: 'Proprietária - Mercado Central',
    text: 'A Veranita é nossa parceira há mais de 15 anos. Produtos de qualidade excepcional e entrega sempre pontual. Nossos clientes adoram!',
  },
  {
    name: 'João Carlos Oliveira',
    role: 'Gerente de Compras - Rede SuperBom',
    text: 'Excelente custo-benefício e variedade de produtos. O atendimento é diferenciado, sempre prontos para atender nossas necessidades.',
  },
  {
    name: 'Ana Paula Ferreira',
    role: 'Chef de Cozinha',
    text: 'Uso os temperos e especiarias Veranita no meu restaurante há anos. A qualidade é incomparável e meus clientes sempre elogiam o sabor dos pratos.',
  },
  {
    name: 'Roberto Mendes',
    role: 'Proprietário - Empório Sabor & Cia',
    text: 'Produtos tradicionais com qualidade garantida. A Veranita nunca decepciona! Recomendo de olhos fechados.',
  },
  {
    name: 'Carla Rodrigues',
    role: 'Gerente - Supermercado São José',
    text: 'Parceria de confiança! Os produtos Veranita têm alta rotatividade nas nossas prateleiras. Nossos consumidores já conhecem e confiam na marca.',
  },
];

export default function Home() {
  const featuredProducts = products.slice(0, 8);
  const featuredRecipes = recipes.slice(0, 3);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((index) => (index + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((index) => (index + 1) % slides.length);
  const previous = () => setCurrent((index) => (index - 1 + slides.length) % slides.length);
  const slide = slides[current];

  return (
    <>
      <section className="relative h-[88vh] min-h-[640px] overflow-hidden bg-brand-brown">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img src={slide.image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/95 via-brand-gold/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/40 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-1/4 right-10 hidden lg:block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="w-96 h-96 rounded-full border border-brand-red/20"
          />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex items-center">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red text-white text-xs font-bold tracking-[0.25em] uppercase mb-6 shadow-soft">
                  <Sparkles className="w-3.5 h-3.5" /> {slide.eyebrow}
                </span>
                <h1 className="font-heavy text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[1.05] tracking-tight text-brand-brown">
                  {slide.title[0]}
                  <br />
                  <span className="text-brand-red">{slide.title[1]}</span>
                  <br />
                  {slide.title[2]}
                </h1>
                <p className="mt-8 max-w-xl text-base md:text-lg font-medium text-brand-brown/85 leading-relaxed">
                  A Veranita Produtos Alimentícios é referência em especiarias, temperos, molhos e
                  farináceos. Tradição e qualidade que transformam refeições em experiências
                  inesquecíveis.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button
                    href={WHATSAPP_QUOTE}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    className="!bg-brand-red hover:!bg-brand-brown !text-white"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button
                    to="/produtos"
                    variant="outline"
                    className="!text-brand-brown !border-brand-brown hover:!bg-brand-brown hover:!text-brand-gold"
                  >
                    Conheça Nossos Produtos
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute bottom-10 left-5 md:left-8 right-5 md:right-8 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Ir para slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === current
                    ? 'w-12 bg-brand-red'
                    : 'w-6 bg-brand-brown/30 hover:bg-brand-brown/60'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={previous}
              aria-label="Slide anterior"
              className="w-12 h-12 rounded-full bg-brand-brown text-brand-gold flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors shadow-soft"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Próximo slide"
              className="w-12 h-12 rounded-full bg-brand-brown text-brand-gold flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors shadow-soft"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-brand-red text-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="text-center md:text-left"
            >
              <span className="block font-heavy text-4xl md:text-5xl text-brand-gold leading-none">
                {stat.value}
                {stat.suffix}
              </span>
              <span className="block mt-2 text-xs md:text-sm font-medium uppercase tracking-wider text-white/85">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[4/5]">
              <img
                src="https://images.pexels.com/photos/4198765/pexels-photo-4198765.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Tradição Veranita"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-8 -right-8 bg-brand-gold text-brand-brown rounded-2xl p-8 max-w-xs shadow-card">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-red mb-3">
                Sertãozinho - SP
              </p>
              <p className="font-medium text-base leading-relaxed">
                Da nossa região para mesas em todo o Brasil, com o cuidado de quem entende de sabor.
              </p>
            </div>
          </motion.div>

          <div>
            <SectionTitle
              align="left"
              eyebrow="Nossa Tradição"
              title={
                <>
                  Uma trajetória de <span className="text-brand-red">sabor e tradição</span>.
                </>
              }
              description="Desde 1976, atuamos no segmento alimentício com foco na produção e comercialização de especiarias, farináceos, temperos e molhos. Quase 50 anos de mercado nos consolidaram como referência regional, com produtos que combinam qualidade superior e preços competitivos."
            />
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Tradição Familiar',
                  text: 'Produtos feitos com carinho e dedicação há quase 5 décadas.',
                },
                {
                  title: 'Atendimento Próximo',
                  text: 'Relacionamento de longo prazo com nossos clientes e parceiros.',
                },
                {
                  title: 'Crescimento Contínuo',
                  text: 'Expansão constante do mix de produtos e da presença no mercado.',
                },
                {
                  title: 'Presença Regional',
                  text: 'Consolidados em grande parte das redes de supermercados da região.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-white shadow-soft border-l-4 border-brand-gold"
                >
                  <p className="font-extrabold text-brand-brown mb-2">{item.title}</p>
                  <p className="text-sm font-book text-brand-brown/75 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button
                to="/nossa-historia"
                variant="secondary"
                className="!bg-brand-red !text-white hover:!bg-brand-brown"
              >
                Conheça nossa história
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-5 p-6 rounded-2xl bg-white shadow-soft"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-gold flex items-center justify-center shrink-0">
                <item.icon className="w-7 h-7 text-brand-brown" />
              </div>
              <div>
                <p className="font-extrabold text-brand-brown text-lg mb-1">{item.title}</p>
                <p className="text-sm font-book text-brand-brown/75 leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionTitle
            eyebrow="Linha Veranita"
            title={<>Nossos produtos em destaque</>}
            description="Uma seleção especial dos produtos que conquistam o paladar das famílias brasileiras há quase 50 anos."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button to="/produtos">
              Ver Catálogo Completo
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionTitle
            eyebrow="Diferenciais"
            title={<>Por que escolher a Veranita?</>}
            description="Conheça os diferenciais que fazem da Veranita a escolha certa para o seu negócio."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {differentials.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                className="group p-8 rounded-2xl bg-white shadow-soft hover:shadow-card-hover transition-all duration-500 border-t-4 border-brand-gold hover:border-brand-red"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-gold flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-brand-brown group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-extrabold text-xl text-brand-brown mb-3">{item.title}</h3>
                <p className="text-sm font-book text-brand-brown/75 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <SectionTitle
              align="left"
              eyebrow="Inspiração na cozinha"
              title={<>Receitas para quem ama sabor</>}
              description="Descubra pratos especiais feitos com nossos produtos. Tradição que combina com a sua mesa."
            />
            <Link
              to="/receitas"
              className="hidden md:inline-flex items-center gap-2 text-brand-brown font-bold text-sm uppercase tracking-wider border-b-2 border-brand-red pb-1 hover:text-brand-red transition-colors"
            >
              Ver todas as receitas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe, index) => (
              <Link key={recipe.id} to="/receitas" className="block">
                <RecipeCard recipe={recipe} index={index} />
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Button to="/receitas">
              Ver Todas as Receitas
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionTitle
            eyebrow="Depoimentos"
            title={<>O que dizem nossos clientes</>}
            description="A confiança de quem trabalha conosco é o nosso maior reconhecimento."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="p-8 rounded-2xl bg-white shadow-soft flex flex-col"
              >
                <Quote className="w-8 h-8 text-brand-red mb-4" />
                <p className="text-base font-book text-brand-brown/85 leading-relaxed flex-1">
                  "{item.text}"
                </p>
                <div className="mt-6 pt-6 border-t border-brand-beige-dark flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-brand-gold text-brand-brown flex items-center justify-center font-extrabold">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-brand-brown text-sm">{item.name}</p>
                    <p className="text-xs text-brand-brown/65 font-book">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-brand-gold text-brand-brown overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
          <h2 className="font-heavy text-4xl md:text-5xl lg:text-6xl leading-tight">
            Pronto para levar mais
            <br />
            <span className="text-brand-red">sabor ao seu negócio?</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl font-book text-brand-brown/85 max-w-2xl mx-auto leading-relaxed">
            Entre em contato e descubra como a Veranita pode agregar valor ao seu mix de produtos.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={WHATSAPP_QUOTE}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="!bg-brand-red !text-white hover:!bg-brand-brown"
            >
              Fale com Nossa Equipe
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button to="/contato" variant="outline">
              Página de Contato
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
