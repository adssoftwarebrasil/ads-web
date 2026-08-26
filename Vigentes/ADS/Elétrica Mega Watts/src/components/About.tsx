import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/eletricamega%2Fquem%20somos.jpeg"
              alt="Loja Elétrica Mega Watt's"
              className="w-full max-w-xl h-auto rounded-3xl shadow-2xl shadow-gray-400/50 object-cover transform transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[rgb(41,35,88)]">
              <span className="text-[rgb(236,33,40)] text-lg font-semibold block mb-1 uppercase tracking-wider">
                Desde 2005
              </span>
              Quem Somos
            </h2>
            <div className="w-20 h-1.5 bg-[rgb(236,33,40)] mx-auto lg:mx-0 rounded-full mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Fundada em <span className="font-bold text-[rgb(236,33,40)]">2005</span>, a Elétrica
              Mega Watt's se consolidou como referência em equipamentos profissionais e assistência
              técnica especializada na região de Inhumas-GO.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Com mais de <span className="font-bold text-[rgb(236,33,40)]">18 anos</span> de
              experiência, somos distribuidores autorizados{' '}
              <span className="font-semibold text-[rgb(41,35,88)]">STIHL</span> e oferecemos uma
              linha completa de ferramentas das melhores marcas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nosso diferencial está na equipe altamente capacitada que oferece serviços de{' '}
              <span className="font-semibold">rebobinamento de motores</span>,{' '}
              <span className="font-semibold">balanceamento</span> e{' '}
              <span className="font-semibold">consertos</span> de equipamentos elétricos.
            </p>
            <div className="pt-4 text-center lg:text-left">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-[rgb(236,33,40)] text-white px-8 py-4 rounded-xl hover:bg-[rgb(216,13,20)] transition-all duration-300 transform hover:scale-105 font-medium text-lg shadow-xl shadow-[rgb(236,33,40)]/30"
              >
                Conheça Nossos Serviços
                <ArrowRight className="lucide lucide-arrow-right" width={20} height={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
