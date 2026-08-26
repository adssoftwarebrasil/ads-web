import { CheckCircle, Calendar, Zap } from 'lucide-react';

const features = [
  'Máquinas de todas as amperagens MIG',
  'MIG, TIG, Plasma e Eletrodo para locação',
  'Kit Maçarico completo com acessórios',
  'Furadeiras de bancada e base magnética',
  'Ferramentas de demolição e rompimento',
  'Máquina de pintura Airless',
  'Entrega e retirada combinados',
  'Suporte técnico durante a locação',
];

export default function Locacao() {
  return (
    <section id="locacao" className="py-20 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-orange blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-orange blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-brand-orange/15 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            Locação de Equipamentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-5">
            Alugue a Máquina de Solda
            <br />
            <span className="text-brand-orange">Ideal para seu Projeto</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Com o serviço de locação da Sia Solda, você tem acesso a equipamentos de alto desempenho
            sem imobilizar capital. Perfeito para obras e projetos pontuais.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto mb-8 text-left">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-300">
                <CheckCircle
                  className="lucide lucide-check-circle text-brand-orange shrink-0 mt-0.5"
                  width={16}
                  height={16}
                />
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="http://wa.me/556198770047?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20loca%C3%A7%C3%A3o%20de%20m%C3%A1quinas%20de%20solda."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-orange/30"
            >
              <Calendar className="lucide lucide-calendar" width={18} height={18} />
              Consultar Disponibilidade
            </a>
            <a
              href="http://wa.me/556198770047?text=Quero%20saber%20os%20planos%20de%20loca%C3%A7%C3%A3o%20de%20m%C3%A1quinas%20de%20solda."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-white/20 hover:border-brand-orange/60 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200"
            >
              <Zap className="lucide lucide-zap" width={18} height={18} />
              Ver Planos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
