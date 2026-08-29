import { ArrowRight, Shield, X, User, Briefcase } from 'lucide-react';
import { useState } from 'react';

const whatsappNumber = "5549991197311";
const messagePF = "Olá, sou Pessoa Física e gostaria de um orçamento para locação de equipamentos.";
const messagePJ = "Olá, sou Pessoa Jurídica e gostaria de um orçamento para locação de equipamentos.";

const createWhatsappLink = (number, message) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${number}?text=${encodedMessage}`;
};

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="home" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white from-20% via-blue-100 via-55% to-[#0072BA] to-100%"></div>

            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-4000 opacity-30"></div>
            </div>

            <div className="relative pt-24 pb-24 md:pt-32 md:pb-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center space-y-6">
                            
                            {/* LOGOMARCA AUMENTADA: de h-36 para h-48 no mobile e h-64 no desktop */}
                            <img
                                src="https://storage.lucasmendes.dev/site-sp/locadorasul%2Flogo.png"
                                alt="Logomarca Locadora Sul"
                                className="mx-auto w-auto h-42 md:h-54 pt-2" 
                            />

                            {/* TÍTULO DIMINUÍDO: de text-6xl para text-4xl no desktop */}
                            <h1 className="text-2xl md:text-4xl lg:text-4xl font-black leading-tight tracking-tight">
                                <span className="block text-[#004E9C]">Locação de Equipamentos</span>
                                <span className="block bg-gradient-to-r from-[#0072BA] to-[#004688] bg-clip-text text-transparent">para Construção Civil</span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                                Todos os equipamentos estão em conformidade com as normas de segurança.
                            </p>

                            <p className="text-base md:text-lg text-[#003366] max-w-2xl mx-auto font-medium">
                                Venha e conheça a Locadora Sul, a mais completa empresa de locação de equipamentos!
                            </p>
                            
                            <div className="inline-flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-full border border-blue-100 shadow-sm">
                                <Shield className="w-5 h-5 text-[#0072BA]" />
                                <span className="text-sm font-semibold text-[#004E9C]">Equipamentos Certificados e Seguros</span>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                                <a
                                    href="#contato"
                                    className="group bg-white text-[#0072BA] px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl hover:shadow-white/20 hover:scale-105 flex items-center gap-3 min-w-[280px] justify-center"
                                >
                                    Solicite um Orçamento
                                    <ArrowRight className="group-hover:translate-x-2 transition-transform" size={22} />
                                </a>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-[#0072BA] transition-all shadow-xl hover:scale-105 min-w-[280px]"
                                >
                                    Fale no WhatsApp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 120"
                    className="w-full h-[80px] md:h-[100px] block"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#ffffff"
                        fillOpacity="1"
                        d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                    ></path>
                </svg>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300" onClick={() => setIsModalOpen(false)}>
                    <div 
                        className="bg-white rounded-xl shadow-2xl p-6 w-11/12 max-w-md transform transition-all duration-300 scale-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-start border-b pb-3 mb-4">
                            <h3 className="text-xl font-bold text-[#004E9C]">Fale Conosco no WhatsApp</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                                <X size={24} />
                            </button>
                        </div>
                        
                        <p className="text-gray-600 mb-6">Escolha o tipo de atendimento que você precisa:</p>

                        <div className="space-y-4">
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
        </section>
    );
}