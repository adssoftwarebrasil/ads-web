import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Piscinas Comerciais',
    text: 'Piscinas para hotéis, academias e áreas de lazer empresariais',
    img: 'https://storage.lucasmendes.dev/site-sp/aguasclaraspiscinas%2Fimg%2FPiscinas%20Comerciais.webp',
    href: 'https://wa.me/5574981267777?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20Piscinas%20Comerciais',
  },
  {
    title: 'Piscinas para Condomínios',
    text: 'Projetos personalizados para uso coletivo e intenso',
    img: 'https://storage.lucasmendes.dev/site-sp/aguasclaraspiscinas%2Fimg%2FPiscinas%20para%20Condomi%CC%81nios.webp',
    href: 'https://wa.me/5574981267777?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20Piscinas%20para%20Condom%C3%ADnios',
  },
  {
    title: 'Piscinas com Hidromassagem',
    text: 'Sofisticação e relaxamento em um só lugar',
    img: 'https://storage.lucasmendes.dev/site-sp/aguasclaraspiscinas%2Fimg%2FPiscinas%20com%20Hidromassagem.webp',
    href: 'https://wa.me/5574981267777?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20Piscinas%20com%20Hidromassagem',
  },
  {
    title: 'Piscinas em Vinil',
    text: 'Versatilidade em formatos e ótimo custo-benefício',
    img: 'https://storage.lucasmendes.dev/site-sp/aguasclaraspiscinas%2Fimg%2FPiscinas%20em%20Vinil.webp',
    href: 'https://wa.me/5574981267777?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20Piscinas%20em%20Vinil',
  },
  {
    title: 'Piscinas em Fibra',
    text: 'Práticas, econômicas e de rápida instalação',
    img: 'https://storage.lucasmendes.dev/site-sp/aguasclaraspiscinas%2Fimg%2FPiscinas%20em%20Fibra.webp',
    href: 'https://wa.me/5574981267777?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20Piscinas%20em%20Fibra',
  },
  {
    title: 'Piscinas em Alvenaria',
    text: 'Soluções resistentes, sob medida e com liberdade de design',
    img: 'https://storage.lucasmendes.dev/site-sp/aguasclaraspiscinas%2Fimg%2FPiscinas%20em%20Alvenaria.webp',
    href: 'https://wa.me/5574981267777?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20Piscinas%20em%20Alvenaria',
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white px-6 md:px-12 lg:px-24"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary text-sm uppercase font-semibold mb-4">Nossos serviços</p>
          <h2 className="text-4xl md:text-5xl text-primary font-bold font-heading mb-6">
            Descubra nossas soluções
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Oferecemos piscinas para todos os estilos de vida, com diferentes formatos, tamanhos e
            materiais, sempre com acabamento profissional
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">{s.title}</h3>
                <p className="text-gray-600 text-base mb-4">{s.text}</p>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full hover:bg-[#2c7ec5] transition-all duration-300"
                >
                  <span>Fale Conosco</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
