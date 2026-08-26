import { CheckCircle } from 'lucide-react';

const benefits = [
  {
    title: 'Soluções de Crédito Acessíveis',
    description: 'Condições especiais para servidores e aposentados com taxas diferenciadas.'
  },
  {
    title: 'Rapidez e Praticidade',
    description: 'Processos ágeis e sem burocracia para você ter acesso ao crédito rapidamente.'
  },
  {
    title: 'Segurança Garantida',
    description: 'Operações respaldadas por parceiros confiáveis e regulamentadas pelo Banco Central.'
  },
  {
    title: 'Atendimento Humanizado',
    description: 'Equipe pronta para auxiliar em todas as etapas com transparência e respeito.'
  }
];

const WhyHire = () => {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up order-2 lg:order-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/redeconsig%2Ffamilia-feliz.jpg"
              alt="Família feliz"
              className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto"
            />
          </div>

          <div className="animate-fade-in-up-delay order-1 lg:order-2">
            <div className="text-[#f88601] text-sm font-semibold tracking-widest uppercase mb-4">
              Por que contratar?
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#eb6601] mb-5">
              Benefícios de Contratar a Rede Consig
            </h2>

            <p className="text-lg text-[#666666] mb-10 leading-relaxed">
              Facilitamos o acesso ao crédito com soluções que atendem suas necessidades financeiras.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-[#f88601]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-[#666666] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHire;
