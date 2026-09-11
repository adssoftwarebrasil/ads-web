import { ArrowRight, Mail, Phone } from 'lucide-react';

export default function CtaSection() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
      aria-label="Chamada para Ação"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Vamos Começar?</h2>
        <p className="text-xl text-slate-300 mb-12">
          Estamos prontos para ser seu parceiro estratégico e ajudar a Ellas Business Solution a entregar resultados
          excepcionais para seus clientes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:vitor@veacci.com?subject=Aceitar%20Proposta%20-%20Ellas%20Business%20Solution"
            className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-10 py-5 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
            aria-label="Enviar email para aceitar proposta"
          >
            Aceitar Proposta e Iniciar Parceria
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
          <a
            href="mailto:vitor@veacci.com?subject=Agendar%20Reuni%C3%A3o%20-%20Ellas%20Business%20Solution"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-lg font-semibold text-lg transition-all border border-white/20"
            aria-label="Enviar email para agendar reunião"
          >
            Agendar reunião para tirar dúvidas
          </a>
        </div>
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-300">
            <a
              href="mailto:vitor@veacci.com"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              aria-label="Enviar email para vitor@veacci.com"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              vitor@veacci.com
            </a>
            <a
              href="tel:+5538992399135"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              aria-label="Ligar para (38) 9 9239-9135"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              (38) 9 9239-9135
            </a>
            <a
              href="https://veacci.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors font-semibold"
              aria-label="Visitar website veacci.com.br"
            >
              veacci.com.br
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
