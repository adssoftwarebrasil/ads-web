import { Zap, Check } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/553399711500';
const IMG = 'https://storage.lucasmendes.dev/site-sp/dra%20marcela%20laender%2Fimg%2Ffoto-dra-roupa-preta-sentada.webp';

const highlights = [
  { title: 'Rápido', text: 'No consultório' },
  { title: 'Sem Dor', text: 'Procedimento confortável' },
  { title: 'Sem Afastamento', text: 'Retorno imediato' },
];

const benefits = [
  'Melhora do ressecamento vaginal',
  'Redução das fissuras após relação',
  'Melhora da dor durante a relação',
  'Redução da perda de urina',
  'Diminuição de infecções urinárias recorrentes',
  'Redução da flacidez vaginal',
  'Tratamento de líquen escleroso atrófico',
  'Controle de candidíase de repetição',
];

export default function LaserSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#D88B9B]/20 text-[#613C45] px-4 py-2 rounded-full text-sm font-medium">
              <Zap size={16} />
              Tecnologia Revolucionária
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#613C45]">
              Laser Íntimo: Transformando a Ginecologia
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              O laser é uma tecnologia que está revolucionando a ginecologia ao possibilitar o
              tratamento de diversos problemas que antes estavam restritos a cremes vaginais ou
              cirurgias.
            </p>
            <div className="bg-gradient-to-br from-[#FDF5F7] to-[#F8F4F5] rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-[#613C45] mb-4">Como Funciona?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                O mecanismo de funcionamento do laser é através da luz, que ao penetrar nos tecidos
                induz uma série de transformações que estimulam a formação de colágeno, ácido
                hialurônico e novos vasos sanguíneos, regenerando toda a estrutura do local em que
                foi aplicado.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                {highlights.map((h) => (
                  <div key={h.title} className="text-center">
                    <div className="text-2xl font-bold text-[#613C45]">{h.title}</div>
                    <div className="text-sm text-gray-600">{h.text}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#613C45]">Benefícios do Tratamento:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#D88B9B]/20 rounded-full flex items-center justify-center mt-0.5">
                      <Check size={14} className="text-[#613C45]" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#613C45] text-white rounded-2xl p-6 sm:p-8">
              <p className="text-lg leading-relaxed">
                <strong className="text-[#D88B9B]">A indicação do laser não é apenas estética</strong>
                , é uma possibilidade de tratamento que se traduz em melhora da autoestima, confiança
                e autocuidado. Lembre-se sempre que o seu bem-estar é essencial para a sua qualidade
                de vida.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#D88B9B] text-white px-10 py-4 rounded-full hover:bg-[#613C45] transition-all duration-300 font-medium shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Quero Saber Mais Sobre o Laser
            </a>
          </div>
          <div className="relative">
            <img
              src={IMG}
              alt="Dra. Marcela Laender - Especialista em Laser Íntimo"
              className="rounded-3xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#613C45]/10 rounded-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#D88B9B]/20 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
