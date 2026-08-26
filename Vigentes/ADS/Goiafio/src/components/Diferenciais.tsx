import { Award, Shield, Settings, Users, CheckCircle, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Diferencial {
  icon: LucideIcon;
  title: string;
  text: string;
}

const diferenciais: Diferencial[] = [
  {
    icon: Award,
    title: 'Certificação INMETRO',
    text: 'Todos os produtos testados e aprovados individualmente. Certificado de Verificação Inicial e Aferição.',
  },
  {
    icon: Shield,
    title: 'Garantia Total',
    text: 'Alto padrão de funcionalidade, precisão e garantia em todos os produtos de nossa fabricação.',
  },
  {
    icon: Settings,
    title: 'Manutenção Especializada',
    text: 'Executamos manutenção de nossos produtos, reformas e consertos de outras marcas em geral.',
  },
  {
    icon: Users,
    title: 'Atendimento Personalizado',
    text: 'Visitamos clientes para desenvolvimento de produtos sob medida, com sugestões de aprimoramento.',
  },
  {
    icon: CheckCircle,
    title: 'Qualidade Comprovada',
    text: 'Mais de 30 anos de atuação no mercado com reconhecimento pela qualidade e durabilidade.',
  },
  {
    icon: Clock,
    title: 'Entrega Rápida',
    text: 'Atendimento ágil e eficiente das 7h30 às 17h30, de segunda a sexta-feira.',
  },
];

const homologacaoItems = [
  'Produtos testados individualmente',
  'Certificado de Verificação Inicial emitido',
  'Garantia de precisão e conformidade',
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[rgb(2,45,103)] font-semibold text-sm uppercase tracking-wider">
            Nossos Diferenciais
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Por Que Escolher a <span className="text-[rgb(2,45,103)]">Goiafio?</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Compromisso com excelência, inovação e satisfação total do cliente em cada produto e
            serviço.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {diferenciais.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[rgb(2,45,103)] hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-[rgb(2,45,103)]">
                    <Icon size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(2,45,103)] to-blue-900 rounded-3xl transform rotate-1"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <div className="inline-block mb-6">
                  <span className="bg-blue-100 text-[rgb(2,45,103)] px-4 py-2 rounded-full text-sm font-semibold">
                    Certificação Oficial
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Homologação INMETRO
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Todos os modelos de medição são homologados pelo INMETRO conforme Carta Portaria
                  INMETRO-DIMEL Nº 093/96 e 032/00.
                </p>
                <div className="space-y-4">
                  {homologacaoItems.map((text) => (
                    <div key={text} className="flex items-start gap-3">
                      <CheckCircle
                        size={24}
                        className="text-green-500 flex-shrink-0 mt-1"
                      />
                      <p className="text-gray-700">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/goiafio%2Fsubstituicao%2Fhomologacao.webp"
                  alt="Carretéis empilhados - Qualidade Goiafio"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
