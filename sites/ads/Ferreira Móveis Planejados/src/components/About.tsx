import { CheckCircle } from 'lucide-react';

const features = [
  'Projetos 100% personalizados para o seu espaço',
  'Materiais de alta qualidade com acabamento impecável',
  'Entrega e montagem dentro do prazo combinado',
  'Atendimento personalizado do projeto à instalação',
  'Mais de 8 anos de experiência no mercado',
  'Referência em móveis planejados em Sinop e região',
];

function Star() {
  return (
    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  );
}

export default function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-[#e4e6e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="transition-all duration-700 ease-out opacity-100 translate-x-0">
            <span className="inline-block text-[#5b5c57] text-xs tracking-[0.25em] uppercase font-semibold mb-4">
              Sobre a Empresa
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#212121] leading-tight mb-6">
              Mais de 8 Anos Transformando <span className="italic font-light text-[#5b5c57]">Sonhos em Realidade</span>
            </h2>
            <p className="text-[#5b5c57] text-base sm:text-lg leading-relaxed mb-6">
              A Ferreira Móveis Planejados é uma marcenaria especializada em Sinop – MT, com mais de 8 anos criando
              ambientes modernos, funcionais e sofisticados. Cada projeto nasce de um atendimento consultivo e
              personalizado, onde entendemos suas necessidades e transformamos ideias em móveis exclusivos.
            </p>
            <p className="text-[#5b5c57] text-base sm:text-lg leading-relaxed mb-8">
              Contamos com uma equipe de profissionais qualificados e materiais premium, garantindo um acabamento
              impecável em cada detalhe. Somos referência no médio norte do Mato Grosso, atendendo todo os bairros de
              Sinop e região.
            </p>
            <ul className="space-y-3 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle
                    className="lucide lucide-check-circle text-[#212121] mt-0.5 shrink-0"
                    width={19}
                    height={19}
                  />
                  <span className="text-[#212121] text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="http://wa.me/556696510268?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Ferreira%20Móveis%20Planejados."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#212121] text-[#e4e6e7] font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[#5b5c57] transition-all duration-300"
            >
              Fale Conosco
            </a>
          </div>
          <div className="relative transition-all duration-700 ease-out delay-200 opacity-100 translate-x-0">
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/ferreira-moveis-planejados/galeria/cozinha-moderna-ilha-armarios-claros_1080x1920.webp"
                alt="Cozinha moderna planejada Ferreira Móveis"
                className="w-full h-[500px] sm:h-[620px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10"></div>
              <div className="absolute -bottom-5 -left-5 bg-[#212121] text-[#e4e6e7] rounded-2xl px-6 py-5 shadow-xl">
                <span className="block text-3xl font-bold text-white">8+</span>
                <span className="block text-xs text-[#e4e6e7]/70 tracking-wide mt-0.5">Anos de Mercado</span>
              </div>
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl px-6 py-5 shadow-xl">
                <div className="flex gap-0.5 mb-1">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <span className="block text-sm font-bold text-[#212121]">5.0 no Google</span>
                <span className="block text-xs text-[#5b5c57]">Avaliação dos clientes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
