import { useState, useEffect } from 'react';
import { Menu, X, Phone, User, Store } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    const mensagem = encodeURIComponent("Olá, gostaria de solicitar um orçamento.");
    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#eeb932] ${
          isScrolled ? 'shadow-lg py-2' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* LOGO */}
            <div className="flex-shrink-0 bg-white/20 rounded-lg p-1 backdrop-blur-sm">
              <img
                src="https://storage.lucasmendes.dev/site-sp/djimpermeabilizantes%2FLogo-Sem-Fundo-header.png"
                alt="DJ Impermeabilizantes"
                className="h-12 w-auto md:h-14"
              />
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center space-x-8">
              {['Sobre', 'Serviços', 'Depoimentos', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                  className="text-[#525152] hover:text-white transition-colors font-bold text-base uppercase tracking-wide"
                >
                  {item}
                </button>
              ))}
              
              {/* Botão Desktop - Abre Modal */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#525152] text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <Phone size={18} />
                Solicitar Orçamento
              </button>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#525152] hover:text-white transition-colors focus:outline-none"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU (Dropdown) */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-xl absolute w-full left-0 top-full">
            <div className="px-4 py-6 space-y-3">
              {['Sobre', 'Serviços', 'Depoimentos', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                  className="block w-full text-left px-4 py-3 text-[#525152] font-medium hover:bg-gray-50 hover:text-[#eeb932] transition-colors rounded-lg border border-transparent hover:border-gray-100"
                >
                  {item}
                </button>
              ))}
              {/* Botão Mobile - Fecha Menu e Abre Modal */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#525152] text-white px-6 py-4 rounded-lg font-bold hover:bg-gray-700 transition-colors shadow-md mt-4 cursor-pointer"
              >
                <Phone size={18} />
                Solicitar Orçamento
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* MODAL DE ORÇAMENTO (Global) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Cabeçalho do Modal */}
            <div className="bg-[#eeb932] p-4 flex justify-between items-center">
              <h3 className="text-white font-bold text-lg">Solicitar Orçamento</h3>
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
              Escolha um contato para orçar via WhatsApp
            </div>
          </div>
        </div>
      )}
    </>
  );
}