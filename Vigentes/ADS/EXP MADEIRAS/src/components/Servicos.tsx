import { ChevronRight } from 'lucide-react';

const products = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/EXP%20MADEIRAS%2Fimg%2FAlizar%207cm.png',
    title: 'Alizar 7cm',
    text: 'Acabamento lateral para portas e batentes, largura de 7cm, em madeira de alta qualidade.',
    href: 'https://api.whatsapp.com/send?phone=5566999857466&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Alizar%207cm',
    delay: '0ms',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/EXP%20MADEIRAS%2Fimg%2FMeia%20Cana%20Cedrinho.png',
    title: 'Meia Cana Cedrinho',
    text: 'Perfil decorativo em Cedrinho, usado para detalhes refinados em tetos e paredes com estilo.',
    href: 'https://api.whatsapp.com/send?phone=5566999857466&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Meia%20Cana%20Cedrinho',
    delay: '100ms',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/EXP%20MADEIRAS%2Fimg2%2FCimalha%20Cedrinho%2003.png',
    title: 'Cimalha Cedrinho',
    text: 'Acabamento em Cedrinho que valoriza o design interno com detalhes naturais e sofisticados.',
    href: 'https://api.whatsapp.com/send?phone=5566999857466&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Cimalha%20Cedrinho',
    delay: '200ms',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/EXP%20MADEIRAS%2Fimg%2FForro%20Cedrinho%20Cerne.png',
    title: 'Forro Cedrinho Cerne',
    text: 'Revestimento nobre em Cedrinho Cerne, perfeito para tetos aconchegantes e elegantes.',
    href: 'https://api.whatsapp.com/send?phone=5566999857466&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Forro%20Cedrinho%20Cerne',
    delay: '300ms',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/EXP%20MADEIRAS%2Fimg%2FBatente%20Cora%C3%A7%C3%A3o%20Negro.png',
    title: 'Batente Coração Negro',
    text: 'Estrutura robusta e sofisticada em madeira Coração Negro para máxima durabilidade.',
    href: 'https://api.whatsapp.com/send?phone=5566999857466&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Batente%20Cora%C3%A7%C3%A3o%20Negro',
    delay: '400ms',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/EXP%20MADEIRAS%2Fimg%2FBatente%20Jatob%C3%A1.png',
    title: 'Batente Jatobá',
    text: 'Batente de madeira Jatobá, resistente e elegante, ideal para portas de alto padrão.',
    href: 'https://api.whatsapp.com/send?phone=5566999857466&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Batente%20Jatob%C3%A1',
    delay: '500ms',
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-[#F1F1FF]">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E200F] mb-4 transition-all duration-800 opacity-100 translate-y-0">
            Nossos Produtos e Serviços
          </h2>
          <p className="text-lg text-[#2E200F] opacity-70 max-w-3xl mx-auto transition-all duration-800 delay-200 translate-y-0">
            Oferecemos uma ampla gama de produtos de madeira, aliando qualidade e inovação para
            transformar seus ambientes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:transform hover:-translate-y-2 transition-all duration-400 opacity-100 translate-y-0"
              style={{ transitionDelay: p.delay }}
            >
              <div className="overflow-hidden bg-[#DACBBC]" style={{ aspectRatio: '4 / 3' }}>
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-600"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2E200F] mb-3">{p.title}</h3>
                <p className="text-[#2E200F] opacity-70 leading-relaxed mb-4">{p.text}</p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#B88654] font-semibold hover:translate-x-1 transition-transform duration-300"
                >
                  Saiba Mais
                  <ChevronRight
                    className="lucide lucide-chevron-right ml-1"
                    width={20}
                    height={20}
                    strokeWidth={2}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 transition-all duration-800 delay-700 opacity-100 translate-y-0">
          <a
            href="https://api.whatsapp.com/send?phone=5566999857466&text=Ol%C3%A1%2C%20gostaria%20de%20ver%20todos%20os%20produtos!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#2E200F] text-[#F1F1FF] rounded-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Ver Todos os Produtos
          </a>
        </div>
      </div>
    </section>
  );
}
