import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, X, User, Store } from 'lucide-react';

export default function ContactSection() {
  const [nome, setNome] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');
  
  // Estados para o Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingMessage, setPendingMessage] = useState(''); // Guarda a mensagem para enviar depois de escolher o contato

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Constrói a mensagem com os dados do formulário
    const mensagemCompleta = `Olá, me chamo ${nome}. Gostaria de falar sobre ${assunto}. Mensagem: ${mensagem}`;
    
    // 2. Salva a mensagem no estado temporário
    setPendingMessage(mensagemCompleta);
    
    // 3. Abre o modal para escolha do vendedor
    setIsModalOpen(true);

    // 4. Limpa o formulário
    setNome('');
    setAssunto('');
    setMensagem('');
  };

  const handleQuickContact = () => {
    setPendingMessage("Olá, preciso de atendimento rápido");
    setIsModalOpen(true);
  };

  const handleContactClick = (numero: string) => {
    const mensagemCodificada = encodeURIComponent(pendingMessage);
    window.open(`https://wa.me/${numero}?text=${mensagemCodificada}`, '_blank');
    setIsModalOpen(false); // Fecha o modal após o clique (opcional)
  };

  return (
    <>
      <section id="contato" className="py-20 md:py-32 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#eeb932] font-bold text-sm uppercase tracking-wider">
                Entre em Contato
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#525152] mb-6">
              Vamos Conversar Sobre Seu Projeto?
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa equipe está pronta para atender você. Preencha o formulário ou entre em contato pelos canais abaixo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="mb-6">
                  <label htmlFor="nome" className="block text-sm font-semibold text-[#525152] mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#eeb932] focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="assunto" className="block text-sm font-semibold text-[#525152] mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="assunto"
                    value={assunto}
                    onChange={(e) => setAssunto(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#eeb932] focus:border-transparent outline-none transition-all"
                    placeholder="Ex: Impermeabilização, Tintas, Orçamento"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="mensagem" className="block text-sm font-semibold text-[#525152] mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#eeb932] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Conte-nos mais sobre seu projeto..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#eeb932] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#d9a829] transition-all shadow-lg hover:shadow-xl flex items-center justify-center group cursor-pointer"
                >
                  <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                  Enviar via WhatsApp
                </button>

                <p className="text-sm text-gray-500 mt-4 text-center">
                  Você poderá escolher um vendedor na próxima etapa
                </p>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg flex items-start">
                <div className="w-12 h-12 bg-[#eeb932]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="text-[#eeb932]" size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#525152] mb-2">Endereço</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Rua José Theodoro Ribeiro, 1405<br />
                    Sala 02 – Ilha da Figueira<br />
                    Jaraguá do Sul - SC
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg flex items-start">
                <div className="w-12 h-12 bg-[#eeb932]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="text-[#eeb932]" size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#525152] mb-2">Telefone</h3>
                  <button
                    onClick={handleQuickContact}
                    className="text-gray-600 hover:text-[#eeb932] transition-colors text-sm md:text-base text-left"
                  >
                    (47) 99963-4067
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg flex items-start">
                <div className="w-12 h-12 bg-[#eeb932]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="text-[#eeb932]" size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#525152] mb-2">E-mail</h3>
                  <a
                    href="mailto:contato@djimpermeabilizantes.com.br"
                    className="text-gray-600 hover:text-[#eeb932] transition-colors break-words text-sm md:text-base"
                  >
                    contato@djimpermeabilizantes.com.br
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg flex items-start">
                <div className="w-12 h-12 bg-[#eeb932]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="text-[#eeb932]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#525152] mb-2">Horário de Atendimento</h3>
                  <p className="text-gray-600">
                    Segunda a Sexta: 07:30 às 12:00 e 13:30 às 17:00<br />
                    Sábado e Domingo: Fechado
                  </p>
                </div>
              </div>

              <div className="bg-[#eeb932] p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold text-white mb-2 text-lg">Atendimento Rápido</h3>
                <p className="text-white/90 mb-4">
                  Precisa de atendimento imediato? Fale conosco pelo WhatsApp!
                </p>
                <button
                  onClick={handleQuickContact}
                  className="inline-block bg-white text-[#eeb932] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors w-full text-center cursor-pointer"
                >
                  Chamar no WhatsApp
                </button>
              </div>
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
              <h3 className="text-white font-bold text-lg">Selecione o Contato</h3>
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
              Escolha quem irá receber sua mensagem
            </div>
          </div>
        </div>
      )}
    </>
  );
}