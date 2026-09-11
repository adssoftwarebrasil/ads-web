import { CheckCircle } from 'lucide-react';

export default function About() {
  const differentials = [
    'Estrutura moderna e completa',
    'Unica Com aulas Teóricas presenciais, simulados e tudo que vc precisa para ser aprovado',
    'Material didático atualizado incluído',
    'Flexibilidade de horários',
    'Prática em águas reais',
  ];

  return (
    <section id="sobre" className="py-20 bg-[#f5f7fa]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#26367e]">
              Conheça a Escola Náutica MM
            </h2>
            <p className="text-lg text-[#34393a] leading-relaxed">
              Localizada em Foz do Iguaçu, a Escola Náutica MM é referência em formação de navegadores. Oferecemos cursos completos para todas as categorias de habilitação náutica, com instrutores experientes e metodologia aprovada pela Marinha do Brasil.
            </p>
            <div className="space-y-4">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#0caff0] flex-shrink-0 mt-1" />
                  <p className="text-[#34393a] text-lg">{item}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => window.open('https://wa.me/5545999207671', '_blank')}
              className="bg-[#c6272f] hover:bg-[#0caff0] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Saiba Mais
            </button>
          </div>

          <div className="relative">
            <img
              src="https://storage.lucasmendes.dev/site-sp/escola%20nautica%2Fveiculo-barco-trailer.webp"
              alt="Veículo com barco no trailer"
              className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#0caff0] text-white p-6 rounded-xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm font-semibold">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
