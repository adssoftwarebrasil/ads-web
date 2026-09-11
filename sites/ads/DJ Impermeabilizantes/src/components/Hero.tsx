import { useState } from 'react';
import { ArrowRight, MapPin, X, User, Store } from 'lucide-react';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dados dos contatos (Mesma lista do botão flutuante)
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
    const mensagem = encodeURIComponent("Olá, visitei o site e gostaria de falar com um especialista.");
    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      
      {/* 1. IMAGEM DE FUNDO COM PARALLAX SUTIL (fixa) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/djimpermeabilizantes%2Floja-tintas-fachada.webp"
          alt="Fachada DJ Impermeabilizantes e Tintas"
          className="w-full h-full object-cover"
        />
        {/* Overlay degradê otimizado para leitura de texto branco */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 md:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      </div>

      {/* 2. CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 md:pb-40">
        <div className="max-w-4xl">
          
          {/* Badge de Localização (Glassmorphism) */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8 shadow-lg animate-fade-in">
            <MapPin size={16} className="text-[#eeb932]" />
            <span className="text-sm font-semibold tracking-wide uppercase">Jaraguá do Sul e Região SC</span>
          </div>

          {/* Título Responsivo */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Qualidade e Eficiência em <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eeb932] to-yellow-400">
              Impermeabilização
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light">
            Desde 2018 oferecendo soluções completas para construção civil. Proteja seu patrimônio com produtos de alta performance e suporte técnico especializado.
          </p>

          {/* Botões de Ação (Stack no mobile, Row no desktop) */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* Botão Alterado para abrir o Modal */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative flex items-center justify-center w-full sm:w-auto bg-[#eeb932] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d9a829] transition-all shadow-lg hover:shadow-[#eeb932]/50 hover:-translate-y-1 cursor-pointer"
            >
              Falar com Especialista
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            <button
              onClick={scrollToServices}
              className="flex items-center justify-center w-full sm:w-auto bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#525152] transition-all hover:-translate-y-1 backdrop-blur-sm"
            >
              Nossos Produtos
            </button>
          </div>
        </div>
      </div>
      
      {/* 3. SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 animate-bounce hidden md:flex">
        <span className="text-white text-xs uppercase tracking-widest">Role para ver mais</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>

      {/* 4. MODAL DE CONTATO (ADICIONADO) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Cabeçalho do Modal */}
            <div className="bg-[#eeb932] p-4 flex justify-between items-center">
              <h3 className="text-white font-bold text-lg">Falar com Especialista</h3>
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

    </section>
  );
}