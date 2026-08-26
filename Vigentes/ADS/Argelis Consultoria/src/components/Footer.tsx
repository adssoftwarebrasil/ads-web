import { Instagram, Linkedin, Facebook, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

const solucoes = [
  'Consultoria Financeira',
  'Gestão de Operações',
  'Treinamentos Corporativos',
  'Valuation & M&A',
  'Diagnóstico Gratuito',
];

const institucional = ['Início', 'Nossa Equipe', 'Casos de Sucesso', 'Trabalhe Conosco', 'Fale Conosco'];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[rgb(64,102,215)] to-[rgb(62,215,252)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <img
              src="https://storage.lucasmendes.dev/site-sp/argelis%20consultoria%2Fimg%2Flogo-sem-fundo.png"
              alt="Argelis Consultoria"
              className="h-20 w-auto"
            />
            <p className="text-gray-400 leading-relaxed text-sm">
              Transformamos gestão em resultados. Consultoria especializada para empresas que buscam crescimento
              sustentável e organização financeira.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/argelisconsultoria/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gradient-to-br hover:from-purple-600 hover:to-orange-500 hover:text-white flex items-center justify-center transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram width={20} height={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://br.linkedin.com/company/argelis-consultoria-e-treinamento"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#0077b5] hover:text-white flex items-center justify-center transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin width={20} height={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.facebook.com/ArgelisConsultoriaeTreinamento/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook width={20} height={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              Soluções<span className="w-2 h-2 rounded-full bg-[rgb(62,215,252)]"></span>
            </h4>
            <ul className="space-y-3">
              {solucoes.map((s) => (
                <li key={s}>
                  <button className="text-gray-400 hover:text-[rgb(62,215,252)] hover:translate-x-1 transition-all duration-200 flex items-center gap-1 text-sm">
                    <ChevronRight width={14} height={14} className="opacity-50" />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              Institucional<span className="w-2 h-2 rounded-full bg-[rgb(64,102,215)]"></span>
            </h4>
            <ul className="space-y-3">
              {institucional.map((s) => (
                <li key={s}>
                  <button className="text-gray-400 hover:text-[rgb(62,215,252)] hover:translate-x-1 transition-all duration-200 flex items-center gap-1 text-sm">
                    <ChevronRight width={14} height={14} className="opacity-50" />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              Canais<span className="w-2 h-2 rounded-full bg-white"></span>
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center flex-shrink-0 text-[rgb(62,215,252)]">
                  <Phone width={16} height={16} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">Comercial</div>
                  <a
                    href="http://wa.me/5516991931444"
                    className="text-white hover:text-[rgb(62,215,252)] transition-colors duration-200 font-medium"
                  >
                    (16) 99193-1444
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center flex-shrink-0 text-[rgb(62,215,252)]">
                  <Mail width={16} height={16} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">Email</div>
                  <a
                    href="mailto:contato@argelis.com.br"
                    className="text-white hover:text-[rgb(62,215,252)] transition-colors duration-200 text-sm"
                  >
                    contato@argelis.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center flex-shrink-0 text-[rgb(62,215,252)]">
                  <MapPin width={16} height={16} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">Sede</div>
                  <span className="text-gray-400 text-sm">Ribeirão Preto - SP</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2026 Argelis Consultoria. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6">
              <span className="cursor-default hover:text-gray-400 transition-colors">Política de Privacidade</span>
              <span className="cursor-default hover:text-gray-400 transition-colors">Termos de Uso</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
