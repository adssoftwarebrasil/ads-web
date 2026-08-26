import { ShieldCheck, CheckCircle2, Wrench, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative transition-all duration-700 opacity-100 translate-x-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/casa%20das%20latarias/img/frente-fachada-loja.webp"
                alt="Fachada da loja Casa das Latarias"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to right top, rgba(31, 66, 131, 0.3), transparent)' }}
              ></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
              <img
                src="https://storage.lucasmendes.dev/site-sp/casa%20das%20latarias/img/produtos-prateleira.webp"
                alt="Produtos na prateleira"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="absolute -top-4 -left-4 w-20 h-20 rounded-xl hidden sm:flex items-center justify-center shadow-lg border-4 border-white"
              style={{ backgroundColor: 'rgb(31, 66, 131)' }}
            >
              <img
                src="https://storage.lucasmendes.dev/site-sp/casa%20das%20latarias/img/logo-sem-fundo.webp"
                alt="Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>
          <div className="transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
              style={{ backgroundColor: 'rgba(31, 66, 131, 0.08)', color: 'rgb(31, 66, 131)' }}
            >
              Sobre a empresa
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight"
              style={{ color: 'rgb(31, 66, 131)' }}
            >
              A referência em autopeças no Maranhão
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A <strong>Casa das Latarias</strong> nasceu com um propósito claro: ser o destino certo
              para quem busca qualidade e confiança em autopeças. Ao longo dos anos, construímos uma
              reputação sólida baseada em excelência, compromisso e atendimento diferenciado.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Localizada em São Luís – MA, nossa loja oferece uma linha completa de para-lamas,
              para-choques, faróis e muito mais, garantindo segurança, durabilidade e o melhor
              custo-benefício para o seu veículo.{' '}
              <strong>Seu carro merece o melhor — e nós entregamos isso.</strong>
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <span style={{ color: 'rgb(31, 66, 131)', flexShrink: 0, marginTop: '2px' }}>
                  <ShieldCheck width={20} height={20} className="lucide lucide-shield-check" />
                </span>
                <span className="text-gray-700 text-sm sm:text-base">
                  Peças com procedência e garantia de qualidade
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: 'rgb(31, 66, 131)', flexShrink: 0, marginTop: '2px' }}>
                  <CheckCircle2 width={20} height={20} className="lucide lucide-check-circle2" />
                </span>
                <span className="text-gray-700 text-sm sm:text-base">
                  Atendimento personalizado e especializado
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: 'rgb(31, 66, 131)', flexShrink: 0, marginTop: '2px' }}>
                  <Wrench width={20} height={20} className="lucide lucide-wrench" />
                </span>
                <span className="text-gray-700 text-sm sm:text-base">
                  Amplo estoque para os principais modelos
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span style={{ color: 'rgb(31, 66, 131)', flexShrink: 0, marginTop: '2px' }}>
                  <TrendingUp width={20} height={20} className="lucide lucide-trending-up" />
                </span>
                <span className="text-gray-700 text-sm sm:text-base">
                  Melhor custo-benefício do Maranhão
                </span>
              </div>
            </div>
            <a
              href="http://wa.me/5598985630349?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Casa%20das%20Latarias."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:scale-105 active:scale-95"
              style={{ backgroundColor: 'rgb(31, 66, 131)' }}
            >
              Fale conosco agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
