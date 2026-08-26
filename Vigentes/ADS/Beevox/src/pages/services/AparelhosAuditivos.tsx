import { ArrowRight, CheckCircle, Zap, Bluetooth, Shield, Sun, Battery, Smartphone } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

const models = [
  {
    name: 'Customizados',
    description:
      'Feitos sob medida, leves, discretos e encaixam-se perfeitamente no conduto auditivo. Praticamente invisíveis, são a escolha ideal para quem valoriza discrição sem abrir mão do desempenho.',
    image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes2%2FINFO%20PARA%20SITE%20BEEVOX%20GOOGLE%2FINT_MV_Full_Family_Line_Up.jpg&version_id=null',
  },
  {
    name: 'Receptor no Canal (RIC)',
    description:
      'Uso atrás da orelha com receptor posicionado diretamente no conduto auditivo. Possui modelos recarregáveis e com pilhas, unindo conforto e alta qualidade sonora.',
    image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes2%2FINFO%20PARA%20SITE%20BEEVOX%20GOOGLE%2FGroup%20174.png&version_id=null',
  },
  {
    name: 'Retroauricular (BTE)',
    description:
      'Uso atrás da orelha com adaptação de moldes auriculares de silicone ou acrílico. Indicado para perdas auditivas severas a profundas, com excelente potência e durabilidade.',
    image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes2%2FINFO%20PARA%20SITE%20BEEVOX%20GOOGLE%2FGroup%20176%20(3).png&version_id=null',
  },
];

const accessories = [
  {
    icon: Battery,
    title: 'Bateria de Íon de Lítio',
    description: 'Modelos recarregáveis com bateria embutida para o dia inteiro de uso.',
  },
  {
    icon: Zap,
    title: 'Carregador de Mesa',
    description: 'Resistente e prático, conecta diretamente na tomada para recarga noturna.',
  },
  {
    icon: Smartphone,
    title: 'Carregador Portátil',
    description: 'Permite até 3 recargas completas, ideal para viagens e uso fora de casa.',
  },
  {
    icon: Bluetooth,
    title: 'Conectividade Total',
    description: 'Conecta com dispositivos iOS e Android para músicas, podcasts e chamadas.',
  },
];

export default function AparelhosAuditivos() {
  return (
    <ServicePageLayout>
      <section className="relative bg-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(246,182,31)] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[rgb(246,182,31)] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block bg-[rgb(246,182,31)] text-black font-bold px-5 py-1.5 rounded-full text-sm uppercase tracking-wider">
            Nossas Soluções
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Aparelhos <span className="text-[rgb(246,182,31)]">Auditivos</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A BEEVOX reúne todas as condições para ajudar você a adquirir o melhor aparelho, de acordo com sua necessidade, tipo e grau de perda auditiva e estilo de vida.
          </p>
          <a
            href="http://wa.me/5565999818250"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[rgb(246,182,31)] text-black px-8 py-4 rounded-full font-bold hover:bg-[rgb(226,162,11)] transition-all shadow-lg gap-2 mt-4"
          >
            Agende sua Avaliação
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Modelos e <span className="text-[rgb(246,182,31)]">Formatos</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Todos os formatos apresentam nanotecnologia e certificação IP68 — maior proteção contra suor, poeira e resistência à água.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {models.map((model) => (
              <div key={model.name} className="group rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="h-52 overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[rgb(246,182,31)]" />
                    <h3 className="text-xl font-bold text-gray-900">{model.name}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{model.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tecnologia <span className="text-[rgb(246,182,31)]">Recarregável</span> e Acessórios
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Conectividade e praticidade para o seu dia a dia, com aplicativo dedicado para personalizar a qualidade sonora.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessories.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[rgb(246,182,31)] rounded-2xl">
                  <item.icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Cuidados: Pilhas e <span className="text-[rgb(246,182,31)]">Desumidificadores</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A manutenção correta do seu aparelho auditivo é essencial para garantir longa vida útil e desempenho ideal. A BEEVOX oferece os insumos e equipamentos certos para isso.
              </p>
              <ul className="space-y-4">
                {[
                  'Diversas numerações de pilhas específicas para aparelhos auditivos',
                  'Desumidificador de sílica — remove a umidade acumulada no aparelho',
                  'Desumidificador elétrico — usa luz ultravioleta para eliminar umidade e germes',
                  'Orientação técnica para cada tipo de aparelho e necessidade',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[rgb(246,182,31)] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes2%2FINFO%20PARA%20SITE%20BEEVOX%20GOOGLE%2FGroup%20177.png&version_id=null"
                  alt="Cuidados com aparelho auditivo"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[rgb(246,182,31)] rounded-full blur-2xl opacity-30" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <Sun className="w-10 h-10 text-[rgb(246,182,31)] mx-auto" />
          <h2 className="text-3xl sm:text-4xl font-bold">
            Pronto para ouvir o mundo com <span className="text-[rgb(246,182,31)]">mais clareza?</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Agende sua avaliação gratuita e descubra a solução auditiva ideal para o seu estilo de vida.
          </p>
          <a
            href="http://wa.me/5565999818250"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[rgb(246,182,31)] text-black px-10 py-4 rounded-full font-bold hover:bg-[rgb(226,162,11)] transition-all shadow-lg gap-2 text-lg"
          >
            Falar com Especialista
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </ServicePageLayout>
  );
}
