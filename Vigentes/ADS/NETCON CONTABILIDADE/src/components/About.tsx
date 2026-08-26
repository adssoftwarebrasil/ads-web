import { CheckCircle2 } from 'lucide-react';

const features = [
  'Abertura e regularização de empresas',
  'Folha de pagamento completa',
  'Consultoria tributária especializada',
  'Auditoria digital avançada',
  'Gestão financeira personalizada',
  'Atendimento humano e dedicado',
];

function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-4">
              <span className="bg-[rgb(0,0,87)] text-white px-4 py-2 rounded-full text-sm font-semibold">
                Mais de 30 Anos de Experiência
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[rgb(0,0,87)] mb-6 leading-tight">
              Mais de 30 Anos de Parceria e Sucesso
            </h2>
            <div className="h-1 w-20 bg-[rgb(211,0,0)] mb-6"></div>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Com a NetCon, você tem mais do que um escritório de contabilidade — tem um{' '}
              <strong className="text-[rgb(0,0,87)]">parceiro de negócios</strong> que entende suas
              necessidades e trabalha lado a lado para ver sua empresa prosperar.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Nosso propósito é simples: oferecer{' '}
              <strong className="text-[rgb(0,0,87)]">serviços contábeis de excelência</strong>, com
              atendimento humano, tecnologia de ponta e foco em resultados reais.
            </p>
            <div className="space-y-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-start">
                  <CheckCircle2 className="lucide lucide-check-circle2 text-[rgb(0,0,87)] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/5595991548154?text=Olá! Gostaria de conhecer mais sobre os serviços da NetCon Contabilidade."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(211,0,0)] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-[rgb(231,0,0)] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              FALE COM UM ESPECIALISTA
            </a>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=netcon%2Fnetcon2.jpg&version_id=null"
                alt="NetCon Contabilidade - Fachada"
                className="rounded-2xl shadow-2xl w-full h-auto max-w-lg mx-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <p className="text-[rgb(0,0,87)] font-bold text-3xl mb-1">30+</p>
                <p className="text-gray-600">Anos transformando números em resultados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
