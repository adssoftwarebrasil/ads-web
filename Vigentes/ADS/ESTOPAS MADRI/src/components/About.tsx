import { CheckCircle } from 'lucide-react';

const highlights = [
  'Fundada no ano 2000 no segmento de estopas',
  'Reestruturada em 2017 com foco em qualidade e crescimento',
  'Representante de indústrias de renome do Paraná',
  'Diversidade de produtos para atender todo tipo de cliente',
  'Atendimento personalizado para empresas e profissionais',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="transition-all duration-700 opacity-100 translate-x-0">
            <span className="inline-block bg-[#E93235]/10 text-[#E93235] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
              Nossa História
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight mb-6">
              Mais de duas décadas de <span className="text-[#E93235]">experiência</span> no mercado
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5">
              Tudo começou em 2000, quando surgiu a oportunidade de representar no Mato Grosso uma
              indústria de estopas do Paraná. Com dedicação e trabalho árduo, construímos uma
              reputação sólida no setor.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              Em 2017, após uma pausa, retomamos as atividades com ainda mais força. Hoje, com 8 anos
              de operação ininterrupta, a Estopas Madri é referência em Cuiabá, Várzea Grande e
              região, oferecendo uma linha completa de estopas, panos técnicos e produtos para a linha
              automotiva.
            </p>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    width={20}
                    height={20}
                    className="lucide lucide-check-circle text-[#E93235] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="http://wa.me/556599164429?text=Olá! Gostaria de saber mais sobre a Estopas Madri."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 bg-black hover:bg-[#E93235] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              Conheça Nossos Produtos
            </a>
          </div>
          <div className="transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#E93235] rounded-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-black/10 rounded-2xl"></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/estopas%20madri/img/nossa-historia.webp"
                alt="Interior da Estopas Madri"
                className="relative z-10 w-full h-80 sm:h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute z-20 -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <div className="text-3xl font-black text-[#E93235]">8+</div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">Anos de crescimento</div>
                <div className="text-xs text-gray-400">contínuo e consolidado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
