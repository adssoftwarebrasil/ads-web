import { Target, Heart, TrendingUp, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Excelência',
      description: 'Buscamos a excelência em cada detalhe do nosso trabalho, desde a escolha dos fornecedores até a entrega final.'
    },
    {
      icon: TrendingUp,
      title: 'Inovação',
      description: 'Investimos em tecnologias e processos inovadores para oferecer sempre o melhor aos nossos clientes.'
    },
    {
      icon: Heart,
      title: 'Comprometimento',
      description: 'Nossa equipe é dedicada a garantir a satisfação total de nossos clientes em cada projeto.'
    },
    {
      icon: Users,
      title: 'Segurança',
      description: 'Atuamos com responsabilidade, respeitando todas as normas e regulamentos de segurança.'
    }
  ];

  const differentials = [
    'Alta Qualidade com materiais e tecnologias avançadas',
    'Compromisso com Pontualidade e prazos precisos',
    'Atendimento Personalizado e consultoria especializada',
    'Suporte Técnico qualificado sempre à disposição',
    'Oficina Autorizada Mercosul',
    'Redução de custos operacionais para seu negócio'
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Seção Inicial: Texto + Imagens */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre a Feira Fios
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#01904B] to-[#0379CB] mb-6"></div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                A <strong className="text-gray-900">Feira Fios LTDA</strong> é uma empresa especializada em manutenção de motores elétricos com <strong className="text-[#01904B]">15 anos de experiência</strong> no setor, oferecendo soluções altamente qualificadas e personalizadas para atender às necessidades de nossos clientes.
              </p>

              <p>
                Com uma equipe altamente capacitada e comprometida com a excelência, somos <strong className="text-[#0379CB]">referência no mercado</strong> pela qualidade, eficiência e inovação de nossos serviços.
              </p>

              <div className="bg-gradient-to-r from-[#01904B]/10 to-[#0379CB]/10 rounded-2xl p-6 border-l-4 border-[#01904B]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nossa Missão</h3>
                <p className="text-gray-700">
                  Fornecer soluções de manutenção em motores elétricos que agreguem valor ao seu negócio, garantindo alta performance, segurança e redução de custos operacionais. Buscamos ser parceiros estratégicos de nossos clientes, oferecendo a melhor experiência no mercado.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#01904B] to-[#0379CB] rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <img
                src="https://storage.lucasmendes.dev/site-sp/feira%20fios%2Fgaleria%2Fbobina-motor-azul.webp"
                alt="Trabalho de qualidade"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img
                src="https://storage.lucasmendes.dev/site-sp/feira%20fios%2Fgaleria%2Fmotor-eletrico-componentes.webp"
                alt="Componentes"
                className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8"
              />
              <img
                src="https://storage.lucasmendes.dev/site-sp/feira%20fios%2Fgaleria%2Fbobina-fio-cobre.webp"
                alt="Fio de cobre"
                className="w-full h-64 object-cover rounded-2xl shadow-lg -mt-8"
              />
              <img
                src="https://storage.lucasmendes.dev/site-sp/feira%20fios%2Fgaleria%2Fmotor-bobina-cobre.webp"
                alt="Motor com bobina"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Seção Diferenciais */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nossos Diferenciais
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((differential, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-[#01904B]/5 hover:to-[#0379CB]/5 transition-colors duration-300"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-[#01904B] to-[#0379CB] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">{differential}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Seção Valores */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#01904B] to-[#0379CB] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Seção do Vídeo */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Palavra de Nosso Fundador
          </h3>
          <div className="max-w-4xl mx-auto relative group">
            {/* Efeito de brilho atrás do vídeo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#01904B] to-[#0379CB] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-white p-2 rounded-2xl shadow-xl">
              <video
                controls
                className="w-full rounded-xl aspect-video bg-gray-100"
                preload="metadata"
              >
                <source 
                  src="https://storage.lucasmendes.dev/site-sp/feira%20fios%2Fvideo%2Ffundados-feira-fios.mp4" 
                  type="video/mp4" 
                />
                Seu navegador não suporta a reprodução de vídeos.
              </video>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}