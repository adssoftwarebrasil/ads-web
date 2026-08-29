import { CheckCircle } from 'lucide-react';

export default function About() {
  const differentials = [
    'Equipamentos modernos e tecnologia de ponta',
    'Produtos de alta qualidade',
    'Equipe especializada e experiente',
    'Atendimento personalizado',
    'Garantia de serviço'
  ];

  return (
    <section id="sobre" className="bg-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Imagem */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden border-2 md:border-4 border-[#fafe05]">
              <img
                src="https://storage.lucasmendes.dev/site-sp/retocars%2Fmecanico-aperto-maos.webp"
                alt="Cliente e mecânico se cumprimentando"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-black/90 backdrop-blur px-4 py-2 md:px-6 md:py-3 rounded-lg border border-[#fafe05]">
                <div className="text-2xl md:text-3xl font-black text-[#fafe05]">3+</div>
                <div className="text-white font-semibold text-sm md:text-base">Anos de Excelência</div>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#fafe05]/10 border border-[#fafe05] px-3 py-1.5 md:px-4 md:py-2 rounded-full">
              <span className="text-[#fafe05] font-semibold text-sm md:text-base">Sobre Nós</span>
            </div>

            {/* Título */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              Qualidade que Faltava em Vicente Pires
            </h2>

            {/* Descrição */}
            <div className="space-y-3 md:space-y-4 text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
              <p>
                Nascemos em março de 2021 da percepção de uma carência real: a falta de oficinas
                de lanternagem e pintura que entregassem trabalho impecável na região. Desde então,
                nos tornamos referência em restauração automotiva e estética veicular.
              </p>
              <p>
                Nossa equipe combina anos de experiência com equipamentos de ponta e produtos premium.
                Cada veículo é tratado com o mesmo cuidado e atenção aos detalhes, garantindo
                resultados que superam expectativas.
              </p>
            </div>

            {/* Diferenciais */}
            <div className="space-y-2 md:space-y-3 pt-3 md:pt-4">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3">
                  <div className="bg-[#fafe05] rounded-full p-0.5 md:p-1 flex-shrink-0">
                    <CheckCircle className="text-black w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <span className="text-white font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a 
              href="https://wa.me/5561982160800?text=Olá! Gostaria de conhecer a estrutura da oficina."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#fafe05] text-black px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm md:text-base hover:bg-[#fafe05]/90 transition-all duration-300 hover:scale-105 mt-4 md:mt-6"
            >
              Conhecer Nossa Estrutura
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}