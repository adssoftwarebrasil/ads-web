import { Award, Users, Heart, CheckCircle } from 'lucide-react';
import { ArrowShort } from './icons';

const checklist = [
  'Ex-estagiária da CIRETRAN de Primavera do Leste',
  '9 anos trabalhando ao lado de um despachante experiente',
  'Atendimento humanizado e personalizado',
  'Honestidade e transparência em cada processo',
  'Agilidade na resolução de pendências',
  'Atende toda a região: Campo Verde, Rondonópolis e mais',
];

export default function About() {
  return (
    <section id="sobre" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-dark-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative transition-all duration-700 opacity-100 translate-x-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-yellow/10 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:mx-0">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/helena%20despachante/img/helena-em-pe-perfil.webp"
                  alt="Helena Despachante"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-brand-yellow font-bold text-lg">Helena</p>
                  <p className="text-brand-gray-light text-sm">Despachante Autorizada • Primavera do Leste</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-brand-yellow rounded-2xl p-4 shadow-xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/helena%20despachante/img/despachante-transferencia-veiculo-carro-prata-contrato_1350x1688.webp"
                  alt="Transferência de veículo"
                  className="w-28 h-28 object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-8">
              <div className="bg-brand-dark border border-brand-dark-border rounded-xl p-4 text-center">
                <Award width={18} height={18} className="lucide lucide-award text-brand-yellow mx-auto mb-2" />
                <p className="text-2xl font-black text-white">+9</p>
                <p className="text-brand-gray text-xs leading-tight mt-1">Anos de Experiência</p>
              </div>
              <div className="bg-brand-dark border border-brand-dark-border rounded-xl p-4 text-center">
                <Users width={18} height={18} className="lucide lucide-users text-brand-yellow mx-auto mb-2" />
                <p className="text-2xl font-black text-white">2017</p>
                <p className="text-brand-gray text-xs leading-tight mt-1">Ano de Fundação</p>
              </div>
              <div className="bg-brand-dark border border-brand-dark-border rounded-xl p-4 text-center">
                <Heart width={18} height={18} className="lucide lucide-heart text-brand-yellow mx-auto mb-2" />
                <p className="text-2xl font-black text-white">5.0</p>
                <p className="text-brand-gray text-xs leading-tight mt-1">Avaliação no Google</p>
              </div>
            </div>
          </div>
          <div className="transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <span className="inline-block text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">Nossa História</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Uma trajetória
              <br />
              <span className="text-brand-yellow">de confiança</span>
            </h2>
            <div className="space-y-4 text-brand-gray leading-relaxed mb-8">
              <p>Helena iniciou sua trajetória profissional como estagiária na <strong className="text-white">CIRETRAN de Primavera do Leste</strong>, onde aprendeu na prática todos os processos relacionados a veículos e trânsito.</p>
              <p>Por <strong className="text-white">9 anos</strong>, trabalhou ao lado de um experiente despachante, acumulando conhecimento técnico e construindo relacionamentos sólidos com clientes e órgãos competentes.</p>
              <p>Em <strong className="text-white">2017</strong>, abriu seu próprio escritório e hoje é reconhecida como uma das <strong className="text-white">melhores despachantes de Primavera do Leste</strong>, atendendo toda a região com excelência.</p>
            </div>
            <div className="space-y-3">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle
                    width={18}
                    height={18}
                    fill="currentColor"
                    fillOpacity={0.2}
                    className="lucide lucide-check-circle text-brand-yellow flex-shrink-0 mt-0.5"
                  />
                  <span className="text-brand-gray-light text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="http://wa.me/556696535401?text=Olá%20Helena!%20Gostaria%20de%20conhecer%20mais%20sobre%20seus%20serviços."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 bg-brand-yellow text-brand-dark font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition-all duration-200 hover:shadow-lg hover:shadow-brand-yellow/25 hover:-translate-y-0.5"
            >
              Falar com Helena
              <ArrowShort width={16} height={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
