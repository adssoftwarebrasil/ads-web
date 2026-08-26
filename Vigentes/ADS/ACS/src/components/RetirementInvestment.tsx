import { TrendingUp, Home, Shield, DollarSign, CheckCircle, Banknote } from 'lucide-react';

export default function RetirementInvestment() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Defini as classes de cor aqui para facilitar
  const textGreen = "text-[rgb(87,168,45)]";
  const textYellow = "text-[rgb(253,192,20)]";
  const bgGradientGreen = "bg-gradient-to-br from-[rgb(87,168,45)] to-green-600";

  const benefits = [
    'Flexibilidade para definir como investir e adequar ao seu estilo de vida',
    'Garantir segurança financeira para custos fixos, lazer e descontração',
    'Ter mais ganhos, já que os investimentos rendem mais do que o INSS',
    'Ter mais recursos para realizar seus planos com criação de renda passiva'
  ];

  const tips = [
    'Defina seu perfil de investidor (conservador, moderado ou ousado)',
    'Estabeleça objetivos claros e calcule quanto precisará para manter seu estilo de vida',
    'Diversifique sua carteira combinando diferentes modalidades',
    'Considere a liquidez para ter capital acessível para emergências',
    'Busque orientação profissional para escolher o melhor investimento'
  ];

  return (
    <section id="aposentados" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${textGreen}`}>
              Aposentadoria Imobiliária
            </h2>
            <div className="w-24 h-1 bg-[rgb(253,192,20)] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-bold">
              Construa o seu futuro com solidez. Invista em consórcio. Invista na sua aposentadoria imobiliária.
            </p>
          </div>

          {/* GRID DE 2 COLUNAS 
            Baseado nos cards "O que é Contemplação?" e "Carta de Crédito"
          */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* CARD 1: "O que é Aposentadoria Imobiliária?" 
              Estilo: Baseado no card "O que é Contemplação?" (com caixas internas)
            */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="h-64 overflow-hidden bg-gradient-to-br from-green-50 to-green-100">
                <img
                  src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=acs%2Fimg6%2FImagem%20do%20WhatsApp%20de%202025-11-10%20%C3%A0(s)%2013.29.13_94336eff_ultra.webp&version_id=null"
                  alt="Aposentadoria Imobiliária"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">O que é Aposentadoria Imobiliária?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  É o uso de imóveis como fonte de renda passiva para complementar ou substituir os valores da Previdência Social. Ao invés de depender somente do INSS, você compra imóveis de forma planejada para disponibilizar para terceiros no futuro, incorporando o valor do aluguel ao seu fluxo financeiro mensal.
                </p>
                {/* Caixa interna, baseada no estilo "Por Sorteio" */}
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className={`font-bold ${textGreen} mb-2`}>O Papel do Consórcio</h4>
                    <p className="text-gray-700 text-sm">
                      O consórcio de imóveis é uma opção mais acessível, já que não exige entradas e não sofre com a influência de juros. Por se tratar de uma compra de longo prazo, você pode se planejar com tranquilidade no tempo que ainda falta para sua aposentadoria.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: "Comece a Planejar Agora"
              Estilo: Baseado no card "Carta de Crédito" (layout geral)
            */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="h-64 overflow-hidden bg-gradient-to-br from-yellow-50 to-yellow-100">
                <img
                  src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=acs%2Fimg6%2FImagem%20do%20WhatsApp%20de%202025-11-10%20%C3%A0(s)%2013.29.13_f1a71483_ultra.webp&version_id=null"
                  alt="Planeje Seu Futuro"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Comece a Planejar Agora</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Já pensou em se aposentar com tranquilidade, segurança e uma renda garantida?
                  Com o consórcio imobiliário, isso é totalmente possível.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A aposentadoria imobiliária é uma forma inteligente de transformar seus pagamentos mensais em patrimônio real. Ao longo do tempo, você conquista um imóvel que pode ser usado para morar, alugar ou revender — e assim garantir uma renda estável e duradoura no futuro.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sem juros, com parcelas acessíveis e total flexibilidade, o consórcio é o caminho ideal para quem quer investir no agora pensando no amanhã.
                </p>
                <p className="text-gray-800 font-semibold text-lg">
                  Construa o seu futuro com solidez. Invista em consórcio. Invista na sua aposentadoria imobiliária.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3: "Por que investir para aposentadoria?"
            Estilo: Baseado no banner "Vantagens do Consórcio" (bloco verde com lista)
          */}
          <div className={`${bgGradientGreen} rounded-2xl p-8 md:p-12 mb-12`}>
            <h3 className="text-3xl font-bold text-white mb-4">Por que investir para aposentadoria?</h3>
            <p className="text-white/95 leading-relaxed mb-8">
              Pense no amanhã com a segurança que você merece. Depender apenas da Previdência Social pode não garantir o padrão de vida que você deseja. Os valores pagos muitas vezes não acompanham o custo de vida — justo quando conforto e bem-estar se tornam prioridade. Invista hoje em um plano que valoriza o seu futuro e conquiste uma aposentadoria tranquila, estável e cheia de liberdade para viver como sempre sonhou.
            </p>
            
            <h4 className="text-2xl font-bold text-white mb-6">Principais benefícios:</h4>
            
            {/* Lista de benefícios agora usa o .map() da sua array */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className={`${textYellow} mr-3 mt-1 flex-shrink-0`} size={24} />
                  <p className="text-white/95">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}