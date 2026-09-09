import { motion } from 'framer-motion';
import { ArrowRight, Award, Heart, Sparkles, TrendingUp, Users } from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';

const timeline = [
  {
    year: '1976',
    title: 'O início da história',
    text: 'A Veranita nasce em Sertãozinho-SP com o sonho de levar mais sabor à mesa das famílias brasileiras, especializada em especiarias, farináceos e temperos.',
  },
  {
    year: '1990',
    title: 'Expansão regional',
    text: 'Conquistamos espaço nas principais redes de supermercados da região de Ribeirão Preto, levando nossos produtos para milhares de lares.',
  },
  {
    year: '2005',
    title: 'Linha completa',
    text: 'Ampliamos nosso portfólio com molhos, farofas e pipocas, oferecendo um mix completo para supermercados, mercearias e restaurantes.',
  },
  {
    year: '2020',
    title: 'Modernização',
    text: 'Investimos em novas embalagens, processos e atendimento personalizado, mantendo a tradição como nossa essência.',
  },
  {
    year: '2026',
    title: 'Quase 50 anos',
    text: 'Celebramos quase cinco décadas de dedicação ao sabor, com produtos que continuam transformando refeições em experiências inesquecíveis.',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Tradição',
    text: 'Cinco décadas de receitas e processos que respeitam o sabor autêntico.',
  },
  {
    icon: Award,
    title: 'Qualidade',
    text: 'Seleção criteriosa de ingredientes e controle absoluto em cada etapa.',
  },
  {
    icon: Users,
    title: 'Relacionamento',
    text: 'Atendimento próximo, parcerias duradouras e respeito ao cliente.',
  },
  {
    icon: TrendingUp,
    title: 'Crescimento',
    text: 'Evolução constante para atender com excelência um mercado em movimento.',
  },
];

export default function NossaHistoria() {
  return (
    <>
      <section className="relative bg-brand-gold text-brand-brown overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gold via-brand-gold/85 to-brand-gold/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red text-white text-xs font-bold tracking-[0.25em] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Desde 1976
          </span>
          <h1 className="font-heavy text-5xl sm:text-6xl md:text-7xl leading-[1.05] max-w-4xl">
            Nossa <span className="text-brand-red">história</span> é feita
            <br />
            de tradição e sabor.
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl font-book text-brand-brown/85 leading-relaxed">
            Quase 50 anos de dedicação, qualidade e compromisso com o sabor das famílias
            brasileiras.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-card aspect-[4/5]"
          >
            <img
              src="https://images.pexels.com/photos/4198765/pexels-photo-4198765.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Tradição Veranita"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div>
            <SectionTitle
              align="left"
              eyebrow="Trajetória"
              title={
                <>
                  Uma trajetória de <span className="text-brand-red">sabor e tradição</span>.
                </>
              }
            />
            <div className="mt-8 space-y-5 text-base md:text-lg font-book text-brand-brown/85 leading-relaxed">
              <p>
                A Veranita Produtos Alimentícios nasceu em 1976, na cidade de Sertãozinho – SP, com
                o objetivo de levar mais sabor, qualidade e praticidade à mesa das famílias
                brasileiras.
              </p>
              <p>
                Desde o início, atuamos no segmento alimentício, focando na produção e
                comercialização de especiarias, farináceos, temperos e molhos, sempre prezando pela
                tradição, confiança e excelência dos produtos.
              </p>
              <p>
                Com quase 50 anos de mercado, conquistamos a confiança de supermercados, mercearias
                e restaurantes em toda a região de Ribeirão Preto, oferecendo produtos que combinam
                qualidade superior com preços competitivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-brand-cream">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <SectionTitle
            eyebrow="Linha do tempo"
            title={<>Os marcos da nossa caminhada</>}
            description="Cada década, uma evolução. Cada produto, uma história de dedicação."
          />
          <div className="relative mt-16">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-brand-brown/15 md:-translate-x-1/2" />
            <div className="space-y-12 md:space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  className={`relative flex flex-col md:flex-row md:items-center gap-6 md:gap-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div
                    className={`md:w-1/2 pl-12 md:pl-0 ${
                      index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <span className="inline-block font-heavy text-5xl md:text-6xl text-brand-gold leading-none">
                      {item.year}
                    </span>
                    <h3 className="mt-4 font-extrabold text-2xl text-brand-brown">{item.title}</h3>
                    <p className="mt-3 text-base font-book text-brand-brown/75 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-brand-red ring-4 ring-brand-cream" />
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionTitle
            eyebrow="Nossos valores"
            title={<>Princípios que guiam cada receita</>}
            description="Mais que produtos, entregamos a herança de uma cultura familiar centrada no cuidado e na qualidade."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-8 rounded-2xl bg-white shadow-soft text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-gold/20 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7 text-brand-brown" />
                </div>
                <h3 className="font-extrabold text-xl text-brand-brown mb-3">{item.title}</h3>
                <p className="text-sm font-book text-brand-brown/75 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <h2 className="font-heavy text-4xl md:text-5xl leading-tight">
            Faça parte dessa <span className="text-brand-gold">história</span>.
          </h2>
          <p className="mt-6 text-lg font-book text-white/90 leading-relaxed">
            Conheça nossos produtos e descubra por que tantos parceiros confiam na Veranita há quase
            50 anos.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/produtos">
              Ver Produtos <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              to="/contato"
              variant="outline"
              className="!text-white !border-white hover:!bg-white hover:!text-brand-red"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
