import { CheckCircle, MessageCircle } from 'lucide-react';

const About = () => {
  return (
    <section
      id="sobre"
      className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16 lg:py-20 px-4 lg:px-8"
    >
      <div className="container mx-auto">
        {/* Header compactado */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="text-imperio-light-blue text-xs md:text-sm font-semibold uppercase tracking-wider mb-1 md:mb-2">
            Quem Somos
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-imperio-dark mb-2 md:mb-4">
            Império das Bombas
          </h2>
          <div className="w-16 md:w-24 h-1 bg-imperio-light-blue rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Imagens */}
          <div className="relative">
            <img
              src="https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Floja-azul-bombas%20-%20Copia.webp"
              alt="Fachada Império das Bombas"
              className="rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl w-full h-auto"
              loading="lazy"
            />
            <img
              src="https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Floja-equipamentos-hidraulicos%20-%20Copia.webp"
              alt="Interior da Loja"
              className="hidden lg:block absolute -bottom-6 -right-6 w-40 xl:w-48 h-40 xl:h-48 rounded-xl shadow-2xl border-4 border-white object-cover"
              loading="lazy"
            />
          </div>

          {/* Conteúdo */}
          <div>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
              O <strong className="text-imperio-dark">Império das Bombas Belém</strong> é uma empresa global de soluções em bombeamento, com forte atuação no estado do Pará através da distribuição de motobombas, produtos para poços artesianos, material hidráulico, produtos para piscinas, para uso doméstico e industrial.
            </p>

            <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
              Somos distribuidores de marcas como <strong className="text-imperio-dark">
                KSB BOMBAS, THEBE/EBARA, SCHNEIDER MOTOBOMBAS, BOMBAS LEÃO, FAMAC, LEPONO, JACUZZI, GENCO, HIDROALL
              </strong> e muitas outras, com sede em Belém-PA, focada em inovação, qualidade e atender nossos clientes com muito conhecimento técnico.
            </p>

            <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
              Nosso compromisso é entregar soluções completas com qualidade, garantindo a satisfação de nossos clientes. Com estoque sempre atualizado e pronta entrega, atendemos desde pequenos reparos até grandes projetos industriais. Nossas motobombas são aplicadas em muitas áreas, como agricultura, irrigação, estações industriais de água e bombeamento, engenharia municipal, fornecimento de água para construção, tratamento de água e esgoto, entre outros.
            </p>

            {/* Features compactadas */}
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div className="flex items-start gap-2 md:gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5 md:mt-1 w-5 h-5 md:w-6 md:h-6" />
                <div>
                  <h4 className="font-bold text-imperio-dark text-sm md:text-base">
                    Atendimento Especializado
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Suporte técnico qualificado para orientar sua escolha
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 md:gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5 md:mt-1 w-5 h-5 md:w-6 md:h-6" />
                <div>
                  <h4 className="font-bold text-imperio-dark text-sm md:text-base">
                    Amplo Estoque
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Produtos à pronta entrega para sua conveniência
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 md:gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5 md:mt-1 w-5 h-5 md:w-6 md:h-6" />
                <div>
                  <h4 className="font-bold text-imperio-dark text-sm md:text-base">
                    Marcas Renomadas
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Trabalhamos apenas com as melhores marcas do mercado
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 md:gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5 md:mt-1 w-5 h-5 md:w-6 md:h-6" />
                <div>
                  <h4 className="font-bold text-imperio-dark text-sm md:text-base">
                    Pós-Venda de Qualidade
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Compromisso com você mesmo após a compra
                  </p>
                </div>
              </div>
            </div>

            {/* CTA compactado */}
            <a
              href="https://wa.me/5591980252240"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-imperio-light-blue text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base shadow-lg hover:bg-imperio-blue hover:scale-105 transition-all duration-300 w-full md:w-auto"
            >
              <MessageCircle className="w-5 h-5 md:w-5 md:h-5" />
              Fale com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;