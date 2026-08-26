import { useState } from 'react';
import { X, User, Briefcase, ArrowRight } from 'lucide-react';

const whatsappNumber = "5549991197311";
const messagePF = "Olá, sou Pessoa Física e gostaria de um orçamento para locação de equipamentos.";
const messagePJ = "Olá, sou Pessoa Jurídica e gostaria de um orçamento para locação de equipamentos.";
// Mensagem genérica para o botão principal (serve para o link 'copiável')
const messageGeneral = "Olá, gostaria de entrar em contato sobre locação de equipamentos.";

const createWhatsappLink = (number: string, message: string) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${number}?text=${encodedMessage}`;
};

export default function FloatingWhatsApp() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMainClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Previne o comportamento padrão do link (ir para o WhatsApp)
        e.preventDefault();
        // Abre o modal
        setIsOpen(true);
    };

    return (
        <>
            {/* ALTERAÇÃO: Mudamos de <button> para <a>.
                Isso permite o "Copiar Endereço do Link" e ajuda no rastreamento de conversão,
                mas o onClick intercepta o clique para abrir o modal.
            */}
            <a
                href={createWhatsappLink(whatsappNumber, messageGeneral)}
                onClick={handleMainClick}
                className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex items-center justify-center"
                aria-label="Fale no WhatsApp"
            >
                <svg 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-8 h-8"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                
                {/* Tooltip opcional */}
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
                    Fale Conosco
                </span>
            </a>

            {/* Modal (Mantido Igual) */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300" onClick={() => setIsOpen(false)}>
                    <div 
                        className="bg-white rounded-xl shadow-2xl p-6 w-11/12 max-w-md transform transition-all duration-300 scale-100 animate-in fade-in zoom-in duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-start border-b pb-3 mb-4">
                            <h3 className="text-xl font-bold text-[#004E9C]">Fale Conosco no WhatsApp</h3>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                                <X size={24} />
                            </button>
                        </div>
                        
                        <p className="text-gray-600 mb-6">Escolha o tipo de atendimento que você precisa:</p>

                        <div className="space-y-4">
                            <a
                                href={createWhatsappLink(whatsappNumber, messagePF)}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-4 p-4 border border-blue-200 rounded-lg text-[#0072BA] bg-blue-50 hover:bg-blue-100 transition duration-200 font-semibold shadow-sm group"
                            >
                                <div className="bg-white p-2 rounded-full text-[#0072BA] group-hover:text-[#004E9C]">
                                    <User size={20} />
                                </div>
                                <span>Pessoa Física</span>
                                <ArrowRight size={20} className="ml-auto opacity-60 group-hover:opacity-100 transition-opacity" />
                            </a>

                            <a
                                href={createWhatsappLink(whatsappNumber, messagePJ)}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-4 p-4 border border-blue-200 rounded-lg text-[#0072BA] bg-blue-50 hover:bg-blue-100 transition duration-200 font-semibold shadow-sm group"
                            >
                                <div className="bg-white p-2 rounded-full text-[#0072BA] group-hover:text-[#004E9C]">
                                    <Briefcase size={20} />
                                </div>
                                <span>Pessoa Jurídica (PJ)</span>
                                <ArrowRight size={20} className="ml-auto opacity-60 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}