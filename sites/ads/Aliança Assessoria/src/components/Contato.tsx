import { MapPin, Phone, Clock, Mail, ExternalLink } from 'lucide-react';

export default function Contato() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B2447]/8 border border-[#0B2447]/20 rounded-full text-[#0B2447] text-sm font-semibold mb-4">
            <MapPin className="lucide lucide-map-pin text-amber-500" width={14} height={14} />
            Onde Estamos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B2447] mb-4">
            Fale com a <span className="text-amber-500">Aliança</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Nossa localização estratégica nos permite servir nossos clientes de forma eficaz. Venha nos
            visitar e conhecer a equipe que irá te ajudar!
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-amber-200 transition-all">
            <div className="w-12 h-12 bg-[#0B2447] rounded-2xl flex items-center justify-center mb-5">
              <Phone className="lucide lucide-phone text-white" width={22} height={22} />
            </div>
            <p className="text-sm font-semibold text-slate-500 mb-1">WhatsApp</p>
            <p className="text-slate-900 font-semibold text-sm md:text-base whitespace-pre-line leading-relaxed">
              +55 (61) 8500-9000
            </p>
            <a
              href="https://wa.me/556185009000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-amber-600 hover:text-amber-500 font-semibold text-sm transition-colors"
            >
              Falar no WhatsApp
              <ExternalLink className="lucide lucide-external-link" width={13} height={13} />
            </a>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-amber-200 transition-all">
            <div className="w-12 h-12 bg-[#0B2447] rounded-2xl flex items-center justify-center mb-5">
              <Clock className="lucide lucide-clock text-white" width={22} height={22} />
            </div>
            <p className="text-sm font-semibold text-slate-500 mb-1">Horário de Atendimento</p>
            <p className="text-slate-900 font-semibold text-sm md:text-base whitespace-pre-line leading-relaxed">
              {'Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h'}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-amber-200 transition-all">
            <div className="w-12 h-12 bg-[#0B2447] rounded-2xl flex items-center justify-center mb-5">
              <Mail className="lucide lucide-mail text-white" width={22} height={22} />
            </div>
            <p className="text-sm font-semibold text-slate-500 mb-1">E-mail</p>
            <p className="text-slate-900 font-semibold text-sm md:text-base whitespace-pre-line leading-relaxed">
              contato@aliancassessoria.com.br
            </p>
            <a
              href="mailto:contato@aliancassessoria.com.br"
              className="inline-flex items-center gap-1.5 mt-4 text-amber-600 hover:text-amber-500 font-semibold text-sm transition-colors"
            >
              Enviar E-mail
              <ExternalLink className="lucide lucide-external-link" width={13} height={13} />
            </a>
          </div>
        </div>
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B2447] mb-4">
                  Acompanhe sua Negociação Online
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  Você pode acompanhar o andamento do seu processo de negociação diretamente pelo nosso
                  portal exclusivo para clientes, com acesso 24 horas por dia, 7 dias por semana.
                </p>
                <ul className="space-y-3 text-sm text-slate-600">
                  {[
                    'Status em tempo real do seu contrato',
                    'Histórico de todas as negociações',
                    'Documentos e comprovantes digitais',
                    'Comunicação direta com seu consultor',
                  ].map((li) => (
                    <li key={li} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      </div>
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="http://cliente.aliancassessoria.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0B2447] hover:bg-[#19376D] text-white font-bold rounded-2xl shadow-lg transition-all hover:scale-105"
              >
                <ExternalLink className="lucide lucide-external-link" width={18} height={18} />
                Acessar Área do Cliente
              </a>
            </div>
            <div className="relative min-h-64 lg:min-h-0 bg-[#0B2447] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-500/30">
                    <ExternalLink className="lucide lucide-external-link text-white" width={40} height={40} />
                  </div>
                  <p className="text-white text-2xl font-black mb-2">Portal do Cliente</p>
                  <p className="text-slate-400 text-base mb-6">Acesse quando e onde quiser</p>
                  <p className="text-amber-400 font-bold text-sm">cliente.aliancassessoria.com.br</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
