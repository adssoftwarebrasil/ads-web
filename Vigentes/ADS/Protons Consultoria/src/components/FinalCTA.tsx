import { Mail, MessageCircle, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#2c2c5b] via-[#3d3d7a] to-[#2c2c5b] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#c9a962] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4a90a4] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para Transformar a Gestão Tributária da Sua Empresa?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Agende uma conversa sem compromisso com nossos especialistas e descubra como podemos ajudar sua empresa a crescer
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://wa.me/5562998005803"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-5 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center space-x-3 animate-pulse-slow"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Falar com Especialista via WhatsApp</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="mailto:fernando@protonsconsultoria.com"
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-5 rounded-lg font-semibold text-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50 flex items-center space-x-3"
            >
              <Mail className="w-6 h-6" />
              <span>Enviar E-mail</span>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/70 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#c9a962] rounded-full"></div>
              <span>Resposta em até 24h</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#c9a962] rounded-full"></div>
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#c9a962] rounded-full"></div>
              <span>Análise gratuita</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
