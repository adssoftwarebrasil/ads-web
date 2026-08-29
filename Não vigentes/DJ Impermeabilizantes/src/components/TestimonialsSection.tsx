import { useState } from 'react';
import { Star, Quote, ArrowRight, X, User, Store } from 'lucide-react';

interface TestimonialProps {
  nome: string;
  empresa: string;
  depoimento: string;
  avaliacao: number;
}

const testimonials: TestimonialProps[] = [
  {
    nome: 'João Silva',
    empresa: 'Construtora Silva & Filhos',
    depoimento: 'Trabalho com a DJ há mais de 5 anos. Produtos de qualidade, preços justos e atendimento excepcional. Nunca tive problemas com entregas e sempre recebo orientação técnica quando preciso.',
    avaliacao: 5,
  },
  {
    nome: 'Maria Santos',
    empresa: 'Pinturas Santos',
    depoimento: 'A variedade de tintas e impermeabilizantes é impressionante. Sempre encontro o que preciso e a equipe me ajuda a escolher o produto ideal para cada projeto. Recomendo de olhos fechados!',
    avaliacao: 5,
  },
  {
    nome: 'Carlos Oliveira',
    empresa: 'Obras e Reformas CO',
    depoimento: 'Empresa séria e comprometida. Os produtos chegam no prazo, a qualidade é garantida e o suporte técnico faz toda diferença. É meu fornecedor principal de materiais de impermeabilização.',
    avaliacao: 5,
  },
];

function TestimonialCard({ nome, empresa, depoimento, avaliacao }: TestimonialProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-white/50 hover:scale-105 transition-all duration-300 relative h-full flex flex-col">
      {/* Aspas decorativas em cinza claro para não brigar com o amarelo */}
      <div className="absolute top-6 right-6 text-gray-100">
        <Quote size={64} className="transform rotate-180" />
      </div>

      <div className="flex mb-4">
        {[...Array(avaliacao)].map((_, i) => (
          <Star key={i} className="text-[#eeb932] fill-current" size={20} />
        ))}
      </div>

      <p className="text-gray-600 leading-relaxed mb-8 relative z-10 flex-grow italic">
        "{depoimento}"
      </p>

      <div className="flex items-center mt-auto border-t border-gray-100 pt-6">
        <div className="w-12 h-12 bg-[#525152] rounded-full flex items-center justify-center mr-4 shadow-md text-white font-bold text-lg">
          {nome.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-[#525152]">{nome}</h4>
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">{empresa}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
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
    const mensagem = encodeURIComponent("Olá, gostaria de iniciar uma parceria");
    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
  };

  return (
    <>
      <section id="depoimentos" className="py-20 md:py-32 bg-[#eeb932] relative overflow-hidden">
        {/* Elementos decorativos de fundo - Ajustados para não vazar */}
        <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Cabeçalho da Seção */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/30">
              <Star size={14} className="text-[#525152] fill-[#525152]" />
              <span className="text-[#525152] font-bold text-xs uppercase tracking-widest">
                Depoimentos
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#525152] mb-6 tracking-tight">
              O Que Nossos Clientes Dizem
            </h2>

            <p className="text-xl text-[#525152]/80 max-w-3xl mx-auto font-medium">
              A confiança de milhares de profissionais e empresas que escolhem a DJ Impermeabilizantes para seus projetos.
            </p>
          </div>

          {/* Grid de Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          {/* Call to Action Final - Agora abre o Modal */}
          <div className="text-center mt-16">
            <p className="text-[#525152] font-bold text-lg mb-6">
              Quer fazer parte desses casos de sucesso?
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center bg-[#525152] text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 group cursor-pointer"
            >
              Comece Agora
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* MODAL DE CONTATO */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Cabeçalho do Modal */}
            <div className="bg-[#eeb932] p-4 flex justify-between items-center">
              <h3 className="text-white font-bold text-lg">Parceria DJ</h3>
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
              Escolha um contato para iniciar a conversa
            </div>
          </div>
        </div>
      )}
    </>
  );
}