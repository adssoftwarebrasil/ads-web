import { Play } from 'lucide-react';

const VIDEO_SRC =
  'https://storage.lucasmendes.dev/site-sp/alianca-credito%2Fvideo%2FVideo%20Alianca.mp4';
const MULHER_IMG =
  'https://storage.lucasmendes.dev/site-sp/alianca-credito%2Fimg%2FMulher-Feliz-Dentro-Do-Carro.webp';
const WA_ANALISE =
  'https://wa.me/556185009000?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20an%C3%A1lise%20gratuita%20do%20meu%20contrato.';

export default function Sobre() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B2447]/8 border border-[#0B2447]/20 rounded-full text-[#0B2447] text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>Nossa História
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B2447] mb-6 leading-tight">
              Conheça a <span className="text-amber-500">Aliança</span> Assessoria de Crédito
            </h2>
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                Somos especialistas em identificar cobranças irregulares e juros abusivos em contratos
                de financiamento de veículos, há mais de{' '}
                <strong className="text-[#0B2447]">10 anos</strong> ajudando brasileiros a recuperar o
                controle financeiro.
              </p>
              <p>
                Nossa equipe jurídica atua diretamente com as financeiras para garantir que você pague
                apenas o que é justo, sem taxas ocultas ou encargos abusivos.
              </p>
              <p>
                Já negociamos mais de{' '}
                <strong className="text-amber-600">5.000 contratos</strong> e devolvemos a liberdade
                financeira para milhares de famílias brasileiras.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                <p className="text-3xl font-black text-[#0B2447]">10+</p>
                <p className="text-slate-600 text-sm mt-1">Anos no Mercado</p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                <p className="text-3xl font-black text-amber-500">80%</p>
                <p className="text-slate-600 text-sm mt-1">Desconto Máximo</p>
              </div>
            </div>
            <button
              onClick={() => scrollTo('simulacao')}
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[#0B2447] hover:bg-[#19376D] text-white font-bold text-lg rounded-2xl shadow-lg transition-all hover:scale-105"
            >
              Solicitar Análise Gratuita
            </button>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 to-[#0B2447]/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-[#0B2447] rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative aspect-video">
                <video src={VIDEO_SRC} className="w-full h-full object-cover" playsInline></video>
                <div className="absolute inset-0 bg-[#0B2447]/40 flex items-center justify-center">
                  <div className="text-center">
                    <button className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/50 hover:bg-amber-400 transition-all hover:scale-110 mx-auto">
                      <Play className="lucide lucide-play text-white ml-2" width={30} height={30} />
                    </button>
                    <p className="text-white font-semibold mt-4 text-sm">Assista ao Vídeo Institucional</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white rounded-2xl px-5 py-3 shadow-xl shadow-amber-500/30">
              <p className="font-black text-lg">+5.000</p>
              <p className="text-xs font-medium opacity-90">Clientes Atendidos</p>
            </div>
          </div>
        </div>
        <div className="mt-16 md:mt-20 relative">
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <img
              src={MULHER_IMG}
              alt="Cliente feliz dentro do carro"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B2447]/95 to-[#0B2447]/70"></div>
          </div>
          <div className="relative z-10 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Você merece dirigir o seu carro <span className="text-amber-400">sem dívidas abusivas</span>
            </h3>
            <p className="text-slate-300 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Não deixe os juros abusivos tomarem o seu veículo. A Aliança está pronta para lutar pelos
              seus direitos.
            </p>
            <a
              href={WA_ANALISE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-white font-bold text-lg rounded-2xl shadow-xl shadow-amber-500/30 transition-all hover:scale-105"
            >
              Quero Análise Gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
