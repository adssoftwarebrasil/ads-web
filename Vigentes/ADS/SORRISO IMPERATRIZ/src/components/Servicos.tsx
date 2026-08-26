import { ArrowRight } from 'lucide-react';

interface Servico {
  img: string;
  alt: string;
  title: string;
  text: string;
}

const servicos: Servico[] = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/sorrisoimperatriz%2Fimg%2FInvisalign.webp',
    alt: 'Invisalign',
    title: 'Invisalign',
    text: 'Aparelho ortodôntico invisível para alinhamento perfeito dos dentes',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/sorrisoimperatriz%2Fimg%2FOrtodontia.webp',
    alt: 'Ortodontia',
    title: 'Ortodontia',
    text: 'Correção de posicionamento dental com técnicas modernas',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/sorrisoimperatriz%2Fimg%2FImplantes%20Guiados.webp',
    alt: 'Implantes Guiados',
    title: 'Implantes Guiados',
    text: 'Implantes dentários com precisão computadorizada',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/sorrisoimperatriz%2Fimg%2F%20Lentes%20de%20Porcelana.webp',
    alt: 'Lentes de Porcelana',
    title: 'Lentes de Porcelana',
    text: 'Transformação estética com lentes ultra finas',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/sorrisoimperatriz%2Fimg%2F%20Lentes%20de%20Resina.webp',
    alt: 'Lentes de Resina',
    title: 'Lentes de Resina',
    text: 'Solução estética eficaz e acessível',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/sorrisoimperatriz%2Fimg%2FOrtopedia%20Maxilar.webp',
    alt: 'Ortopedia Maxilar',
    title: 'Ortopedia Maxilar',
    text: 'Correção de crescimento ósseo em crianças',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/sorrisoimperatriz%2Fimg%2FRestaurac%CC%A7o%CC%83es.webp',
    alt: 'Restaurações',
    title: 'Restaurações',
    text: 'Recuperação de dentes danificados com materiais estéticos',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/sorrisoimperatriz%2Fimg%2F%20Cirurgia%20Oral%20Menor.webp',
    alt: 'Cirurgia Oral Menor',
    title: 'Cirurgia Oral Menor',
    text: 'Procedimentos cirúrgicos simples com segurança',
  },
];

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="py-16 sm:py-24 bg-gradient-to-b from-[rgb(13,51,98)] to-[rgb(100,149,237)]"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nossos Tratamentos Odontológicos
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Soluções completas para todas as suas necessidades odontológicas
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {servicos.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={s.img}
                  alt={s.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[rgb(13,51,98)]/0 group-hover:bg-[rgb(13,51,98)]/70 transition-all duration-300 flex items-center justify-center">
                  <ArrowRight className="lucide lucide-arrow-right w-10 h-10 text-white opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[rgb(13,51,98)] mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#contato"
            className="inline-block bg-[rgb(212,175,55)] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
          >
            Agendar Avaliação Gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
