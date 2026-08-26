import { useState } from 'react';
import { ArrowRight, Droplet, Layers, Paintbrush, Shield, X, User, Store } from 'lucide-react';

interface ServiceCardProps {
  titulo: string;
  descricao: string;
  imagem: string;
  icone: React.ElementType;
  mensagemWhatsApp: string;
  onOpenModal: (mensagem: string) => void; // Nova prop para abrir o modal
}

const services = [
  {
    titulo: 'Manta Líquida',
    descricao: 'Impermeabilização flexível de alta performance para lajes, coberturas e áreas molhadas. Fácil aplicação e excelente aderência.',
    imagem: 'https://storage.lucasmendes.dev/site-sp/djimpermeabilizantes%2Falessi-borracha-liquida.webp',
    icone: Droplet,
    mensagemWhatsApp: 'Olá, tenho interesse em Manta Líquida para impermeabilização',
  },
  {
    titulo: 'Aditivos e Impermeabilizantes',
    descricao: 'Soluções completas para proteção contra umidade: cristalizantes, seladores e impermeabilizantes para concreto.',
    imagem: 'https://storage.lucasmendes.dev/site-sp/djimpermeabilizantes%2Fbalde-impermeabilizante-amarelo.webp',
    icone: Shield,
    mensagemWhatsApp: 'Olá, gostaria de informações sobre Aditivos e Impermeabilizantes',
  },
  {
    titulo: 'Revestimentos e Massas',
    descricao: 'Massas niveladoras, reboco pronto e argamassas de alta qualidade para preparação e acabamento perfeito.',
    imagem: 'https://storage.lucasmendes.dev/site-sp/djimpermeabilizantes%2Fsacos-massa-niveladora.webp',
    icone: Layers,
    mensagemWhatsApp: 'Olá, preciso de Revestimentos e Massas para meu projeto',
  },
  {
    titulo: 'Tintas Profissionais',
    descricao: 'Amplo catálogo de tintas acrílicas, látex, esmaltes e texturas. Cores vibrantes e acabamento durável.',
    imagem: 'https://storage.lucasmendes.dev/site-sp/djimpermeabilizantes%2Flatas-tintas-estante.webp',
    icone: Paintbrush,
    mensagemWhatsApp: 'Olá, estou procurando Tintas Profissionais para minha obra',
  },
];

function ServiceCard({ titulo, descricao, imagem, icone: Icon, mensagemWhatsApp, onOpenModal }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img
          src={imagem}
          alt={titulo}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#eeb932] rounded-full flex items-center justify-center">
          <Icon className="text-white" size={24} />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#525152] mb-3">{titulo}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{descricao}</p>

        <button
          onClick={() => onOpenModal(mensagemWhatsApp)}
          className="inline-flex items-center text-[#eeb932] font-semibold hover:text-[#d9a829] transition-colors group/btn cursor-pointer"
        >
          Solicitar Informações
          <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={20} />
        </button>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(''); // Estado para guardar a mensagem do card clicado

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

  const handleOpenModal = (mensagem: string) => {
    setCurrentMessage(mensagem);
    setIsModalOpen(true);
  };

  const handleContactClick = (numero: string) => {
    const encodedMessage = encodeURIComponent(currentMessage);
    window.open(`https://wa.me/${numero}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <section id="servicos" className="py-20 md:py-32 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#eeb932] font-bold text-sm uppercase tracking-wider">
                Nossos Serviços
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#525152] mb-6">
              Soluções Completas para Sua Obra
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma linha completa de produtos para todas as etapas da construção, com qualidade garantida e suporte técnico especializado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                {...service} 
                onOpenModal={handleOpenModal} // Passando a função para o card
              />
            ))}
          </div>
        </div>
      </section>

      {/* MODAL DE CONTATO */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Cabeçalho do Modal */}
            <div className="bg-[#eeb932] p-4 flex justify-between items-center">
              <h3 className="text-white font-bold text-lg">Solicitar Informações</h3>
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
              Escolha com quem deseja falar sobre este produto
            </div>
          </div>
        </div>
      )}
    </>
  );
}