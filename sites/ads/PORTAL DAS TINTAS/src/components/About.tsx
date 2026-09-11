import { CheckCircle } from 'lucide-react';

const points: { title: string; text: string; delay: string }[] = [
  {
    title: 'História de Sucesso',
    text: 'Mais de duas décadas de experiência',
    delay: '0s',
  },
  {
    title: 'Qualidade no Serviço',
    text: 'Compromisso com o atendimento ao cliente',
    delay: '0.1s',
  },
  {
    title: 'Inovação Constante',
    text: 'Atualização constante de produtos e serviços',
    delay: '0.2s',
  },
  {
    title: 'Foco no Cliente',
    text: 'Serviços personalizados e adaptativos',
    delay: '0.3s',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 lg:py-28" style={{ background: 'rgb(232, 213, 242)' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-slideUp">
            <div className="inline-block bg-[#f08736] text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              Desde 2004
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">Portal Tintas</h2>
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
              Duas Décadas de Experiência e Compromisso
            </h3>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Fundada em 2004 como Comercial Portal, a Portal Tintas destaca-se pelo
              compromisso com a qualidade no atendimento e a diversidade de produtos. Nosso
              objetivo é assegurar a satisfação total dos nossos clientes, oferecendo soluções
              em tintas automotivas e imobiliárias adaptadas às suas necessidades.
            </p>
            <div className="space-y-4">
              {points.map((p) => (
                <div key={p.title} className="flex items-start space-x-3" style={{ animationDelay: p.delay }}>
                  <CheckCircle
                    className="lucide lucide-check-circle w-6 h-6 text-[#f08736] flex-shrink-0 mt-1"
                    width={24}
                    height={24}
                  />
                  <div>
                    <h4 className="font-bold text-black text-lg">{p.title}</h4>
                    <p className="text-gray-700">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/protaldastintas%2Fimg%2FQuem%20somos.jpg"
                  alt="Portal Tintas"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="col-span-2 -mt-20 ml-auto w-3/4">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/protaldastintas%2Fimg%2FQuem%20somos2.jpg"
                  alt="Portal Tintas Loja"
                  className="w-full h-64 object-cover rounded-2xl shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
