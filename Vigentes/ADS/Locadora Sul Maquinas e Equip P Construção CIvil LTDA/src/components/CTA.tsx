import { MessageCircle, Mail, X, User, Briefcase, ArrowRight } from 'lucide-react';
import { useState } from 'react'; // Importamos useState para gerenciar o estado do modal

// Variáveis de configuração do WhatsApp (As mesmas usadas no componente Hero)
const whatsappNumber = "5549991197311";
const messagePF = "Olá, sou Pessoa Física e gostaria de um orçamento para locação de equipamentos.";
const messagePJ = "Olá, sou Pessoa Jurídica e gostaria de um orçamento para locação de equipamentos.";

// Função auxiliar para gerar o link do WhatsApp com mensagem
const createWhatsappLink = (number, message) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${number}?text=${encodedMessage}`;
};

export default function CTA() {
    // Estado para controlar a visibilidade do modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-gradient-to-br from-[#0072BA] to-[#004E9C] rounded-3xl shadow-2xl p-12 md:p-16 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10">
                            <span className="inline-block text-blue-200 font-bold text-sm tracking-widest uppercase mb-4">Fale Conosco</span>
                            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
                                Tem Alguma Dúvida?
                            </h2>

                            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>

                            <p className="text-xl text-blue-50 mb-12 font-light">
                                Entre em contato conosco. Estamos prontos para atender você!
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                {/* BOTÃO WHATSAPP - AGORA ABRE O MODAL */}
                                <button
                                    onClick={() => setIsModalOpen(true)} // Abre o modal
                                    className="group inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#20BA5A] transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                                >
                                    <MessageCircle size={24} />
                                    Fale Conosco pelo WhatsApp
                                </button>
                                {/* FIM BOTÃO WHATSAPP */}

                                <a
                                    href="mailto:ivanor@locadorasul.com.br"
                                    className="group inline-flex items-center justify-center gap-3 bg-white text-[#0072BA] px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                                >
                                    <Mail size={24} />
                                    Envie um E-mail
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* === MODAL WHATSAPP === */}
            {isModalOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300 p-4" 
                    onClick={() => setIsModalOpen(false)} // Fecha ao clicar fora
                >
                    <div 
                        className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md transform transition-all duration-300 scale-100"
                        onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar dentro
                    >
                        <div className="flex justify-between items-start border-b pb-3 mb-4">
                            <h3 className="text-xl font-bold text-[#004E9C]">Fale Conosco no WhatsApp</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                                <X size={24} />
                            </button>
                        </div>
                        
                        <p className="text-gray-600 mb-6">Escolha o tipo de atendimento que você precisa:</p>

                        <div className="space-y-4">
                            {/* Opção Pessoa Física */}
                            <a
                                href={createWhatsappLink(whatsappNumber, messagePF)}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsModalOpen(false)} 
                                className="flex items-center gap-4 p-4 border border-blue-200 rounded-lg text-[#0072BA] bg-blue-50 hover:bg-blue-100 transition duration-200 font-semibold shadow-sm"
                            >
                                <User size={20} />
                                <span>Pessoa Física</span>
                                <ArrowRight size={20} className="ml-auto" />
                            </a>

                            {/* Opção Pessoa Jurídica */}
                            <a
                                href={createWhatsappLink(whatsappNumber, messagePJ)}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsModalOpen(false)} 
                                className="flex items-center gap-4 p-4 border border-blue-200 rounded-lg text-[#0072BA] bg-blue-50 hover:bg-blue-100 transition duration-200 font-semibold shadow-sm"
                            >
                                <Briefcase size={20} />
                                <span>Pessoa Jurídica (PJ)</span>
                                <ArrowRight size={20} className="ml-auto" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
            {/* === FIM MODAL WHATSAPP === */}
        </section>
    );
}