import { Calendar } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#3b82f6] text-white rounded-full px-4 py-2 shadow-md">
              <Calendar size={18} />
              <span className="text-sm font-medium">Fundada em 2024</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B4C]">Sobre a JM Pré-moldados</h2>
            <div className="space-y-4 text-[#A8AAAA] text-lg leading-relaxed">
              <p>
                A <strong className="text-[#0D1B4C]">JM Pré-moldados</strong> é uma empresa
                especializada na fabricação e comercialização de artefatos de concreto de alta
                qualidade em Dourados/MS.
              </p>
              <p>
                Com mais de um ano experiência no mercado, nos destacamos pela excelência em nossos
                produtos e pelo compromisso com a satisfação de nossos clientes.
              </p>
              <p>
                Nossa linha de produtos inclui blocos de concreto, tubos, manilhas, pavers, postes e
                diversos outros artefatos essenciais para construção civil e infraestrutura urbana.
              </p>
              <p>
                Investimos continuamente em tecnologia e processos de qualidade para garantir que
                cada produto atenda às normas técnicas mais rigorosas e supere as expectativas de
                durabilidade e resistência.
              </p>
              <p className="text-[#0D1B4C] font-semibold">
                Na JM Pré-moldados, seu projeto é nossa prioridade!
              </p>
            </div>
            <a
              href="https://wa.me/5567999737241"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 shadow-lg"
            >
              <WhatsappIcon size={24} />
              <span>Falar com Especialista</span>
            </a>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#4A90E2] rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/jmpremoldados%2FJM-Pre-Moldados-Logo.webp"
                  alt="JM Pré-moldados Logo"
                  className="w-full h-auto object-contain"
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
