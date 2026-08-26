import { MessageCircle, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-br from-[#4285F4] via-[#0F9D58] to-[#4285F4]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Pronto para dominar sua presença online?
        </h2>
        <p className="text-xl text-white/90 mb-10 leading-relaxed">
          65% das pessoas buscam na internet antes de contratar um serviço.
          <br />
          Fale com um especialista agora.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://wa.me/5511958550001"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#0F9D58] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0d8a4d] transition-all transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2"
          >
            <MessageCircle size={24} />
            <span>QUERO UM ORÇAMENTO</span>
          </a>
        </div>
        <div className="flex items-center justify-center space-x-2 text-white/80">
          <Mail size={20} />
          <span>Ou envie um e-mail:</span>
          <a
            href="mailto:contato@parceirogoogle.com.br"
            className="text-white font-medium hover:underline"
          >
            contato@parceirogoogle.com.br
          </a>
        </div>
      </div>
    </section>
  );
}
