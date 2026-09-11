import { useState } from 'react';
import { Clock, ShieldCheck, Users, TrendingUp, Award, Headphones, ArrowRight, Check, X, User, Store } from 'lucide-react';

const features = [
  {
    titulo: 'Atendimento Ágil',
    descricao: 'Não perca tempo na obra. Nossa logística é otimizada para entregas rápidas.',
    icone: Clock,
  },
  {
    titulo: 'Qualidade Garantida',
    descricao: 'Trabalhamos apenas com produtos normatizados e das melhores marcas do setor.',
    icone: ShieldCheck,
  },
  {
    titulo: 'Equipe Técnica',
    descricao: 'Vendedores que entendem de obra para te orientar na solução técnica correta.',
    icone: Users,
  },
  {
    titulo: 'Custo-Benefício',
    descricao: 'Preço justo para produtos que resolvem o problema definitivamente.',
    icone: TrendingUp,
  },
  {
    titulo: 'Consistência',
    descricao: 'Desde 2018 construindo uma reputação sólida em Jaraguá do Sul.',
    icone: Award,
  },
  {
    titulo: 'Pós-Venda Real',
    descricao: 'Dúvidas na aplicação? Nosso time oferece suporte completo.',
    icone: Headphones,
  },
];

export default function FeaturesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lista de Contatos
  const contatos = [
    {
      nome: "André Luiz",
      cargo: "Vendedor",
      numero: "5547999235654",
      numeroVisual: "(47) 99923-5654",
      icon: <User size={20} />
    },
    {
      nome: "DJ Impermeabilizantes e Tintas",
      cargo: "Loja",
      numero: "5547996340671",
      numeroVisual: "(47) 99634-0671",
      icon: <Store size={20} />
    }
  ];

  const handleContactClick = (numero: string) => {
    const mensagem = encodeURIComponent("Olá, gostaria de conhecer mais sobre os produtos");
    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
  };

  return (
    <>
      {/* SEÇÃO 1: GRID DE DIFERENCIAIS */}
      <section id="vantagens" className="py-16 md:py-24 bg-gray-50 relative">
        <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#525152 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#eeb932] font-bold text-sm uppercase tracking-widest mb-4 block">
              Nossos Diferenciais
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#525152] mb-6 tracking-tight">
              Por que a DJ é a escolha certa?
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
              Mais do que vender produtos, entregamos a tranquilidade de uma obra bem feita.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icone;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#eeb932] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#eeb932]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#eeb932] transition-colors duration-300">
                    <Icon className="text-[#eeb932] group-hover:text-white transition-colors duration-300" size={24} />
                  </div>

                  <h3 className="text-lg font-bold text-[#525152] mb-2 group-hover:text-[#eeb932] transition-colors">
                    {feature.titulo}
                  </h3>

                  <p className="text-gray-500 leading-relaxed text-sm">
                    {feature.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: POR QUE CONTRATAR */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* --- IMAGEM DESKTOP (SÓ APARECE EM TELAS GRANDES) --- */}
            <div className="relative hidden lg:block">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/djimpermeabilizantes%2Famostras-cores-mesa.webp"
                  alt="Consultoria de cores DJ Impermeabilizantes"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-[#eeb932] rounded-2xl -z-0"></div>
            </div>

            {/* --- CONTEÚDO DE TEXTO --- */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-10 h-[2px] bg-[#eeb932]"></span>
                <span className="text-[#eeb932] font-bold text-sm uppercase tracking-widest">
                  Consultoria Especializada
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-[#525152] mb-6 leading-tight">
                Seu Projeto Merece <br/>o <span className="text-[#eeb932]">Melhor Acabamento</span>
              </h2>

              {/* --- IMAGEM MOBILE (SÓ APARECE NO CELULAR/TABLET) --- */}
              <div className="lg:hidden mb-8 relative overflow-hidden rounded-xl">
                <div className="rounded-xl overflow-hidden shadow-lg">
                   <img
                    src="https://storage.lucasmendes.dev/site-sp/djimpermeabilizantes%2Famostras-cores-mesa.webp"
                    alt="Consultoria de cores"
                    className="w-full h-56 object-cover"
                  />
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Na DJ Impermeabilizantes, você encontra muito mais do que latas de tinta. Oferecemos uma experiência completa de consultoria para garantir que cada centavo investido traga retorno em durabilidade e beleza.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { title: "Variedade", desc: "Mix completo de impermeabilizantes e tintas." },
                  { title: "Desde 2018", desc: "Experiência comprovada no mercado regional." },
                  { title: "Parceria", desc: "Conexão direta com os maiores fabricantes." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-[#eeb932] p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                      <Check size={12} className="text-white" />
                    </div>
                    <div>
                      <strong className="block text-[#525152] text-base">{item.title}</strong>
                      <span className="text-gray-500 text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botão Modificado para abrir o Modal */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full md:w-auto inline-flex items-center justify-center bg-[#525152] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#333] transition-all shadow-lg hover:shadow-xl group cursor-pointer"
              >
                Fale com Nossa Equipe
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL DE CONTATO */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Cabeçalho do Modal */}
            <div className="bg-[#eeb932] p-4 flex justify-between items-center">
              <h3 className="text-white font-bold text-lg">Fale com Nossa Equipe</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:bg-white/20 p-1 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Lista de Contatos */}
            <div className="p-4 space-y-3">
              {contatos.map((contato, index) => (
                <button
                  key={index}
                  onClick={() => handleContactClick(contato.numero)}
                  className="w-full flex items-center p-4 bg-gray-50 hover:bg-yellow-50 border border-gray-100 hover:border-yellow-200 rounded-xl transition-all duration-200 group text-left"
                >
                  <div className="w-10 h-10 bg-yellow-100 text-[#eeb932] rounded-full flex items-center justify-center mr-3 group-hover:bg-[#eeb932] group-hover:text-white transition-colors">
                    {contato.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                      {contato.cargo}
                    </p>
                    <p className="font-bold text-[#525152]">
                      {contato.nome}
                    </p>
                    <p className="text-sm text-gray-500 group-hover:text-[#eeb932] transition-colors">
                      {contato.numeroVisual}
                    </p>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="p-4 bg-gray-50 text-center text-xs text-gray-400">
              Escolha uma opção para iniciar a conversa no WhatsApp
            </div>
          </div>
        </div>
      )}
    </>
  );
}