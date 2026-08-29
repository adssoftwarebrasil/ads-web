import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Activity,
  Eye,
  Droplets,
  Snowflake,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface Procedure {
  title: string;
  text: string;
  icon: LucideIcon;
  image: string;
  reverse: boolean;
  dots?: boolean[];
}

const procedures: Procedure[] = [
  {
    title: 'Técnica ATTA',
    text: 'A Ablação Térmica Total Assistida é uma inovação minimamente invasiva para o tratamento da veia safena. Através de uma pequena punção guiada por ultrassom, o laser trata a veia por dentro com precisão, eliminando a necessidade de extração cirúrgica e reduzindo o desconforto pós-operatório.',
    icon: Zap,
    image: 'https://storage.lucasmendes.dev/site-sp/HUGO%20DA%20CUNHA%2Fnovas%2Ftecnica-atta-01.png',
    reverse: false,
  },
  {
    title: 'Técnica LEST',
    text: 'Procedimento minimamente invasivo, seguro e eficaz, realizado com anestesia local, que utiliza o calor do laser para fechar as veias doentes, incluindo safenas e tributárias, sem cortes ou remoção cirúrgica (safenectomia).',
    icon: Sparkles,
    image: 'https://storage.lucasmendes.dev/site-sp/HUGO%20DA%20CUNHA%2Fnovas%2Ftecnica-atta-02.png',
    reverse: false,
  },
  {
    title: 'Ecodoppler Vascular',
    text: 'Tecnologia padrão-ouro para o diagnóstico vascular preciso. O exame mapeia detalhadamente o fluxo sanguíneo e a anatomia das veias em tempo real, servindo como um "GPS" para o planejamento do tratamento mais adequado e seguro, garantindo resultados superiores e duradouros.',
    icon: Activity,
    image: 'https://storage.lucasmendes.dev/site-sp/HUGO%20DA%20CUNHA%2Fnovas%2Fecodopleer-colorido-02.png',
    reverse: true,
    dots: [false, true, false],
  },
  {
    title: 'Realidade Aumentada (VeinViewer)',
    text: 'Sistema de visualização infravermelha que projeta um mapa das veias diretamente sobre a pele. Permite identificar "veias nutridoras" invisíveis a olho nu, tornando as sessões de escleroterapia muito mais precisas e eficazes, elevando drasticamente o nível de segurança do procedimento.',
    icon: Eye,
    image: 'https://storage.lucasmendes.dev/site-sp/HUGO%20DA%20CUNHA%2Fnovas%2Frealidade-aumentada-02.png',
    reverse: false,
    dots: [false, true],
  },
  {
    title: 'Laser Transdérmico',
    text: 'Tecnologia de alta performance para a eliminação de vasinhos e microvarizes sem agulhas. O feixe de luz atua seletivamente no vaso, preservando a pele íntegra. Associado ao resfriamento térmico, proporciona um tratamento confortável, rápido e com excelente resultado estético.',
    icon: Sparkles,
    image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=HUGO%20DA%20CUNHA%2Fnovas%2Flaser-transdermico-aplicac%CC%A7a%CC%83o-img.png&version_id=null',
    reverse: true,
  },
  {
    title: 'Técnica de Espuma Densa',
    text: 'Procedimento versátil que utiliza uma substância esclerosante em forma de espuma para tratar varizes de diversos calibres. É uma alternativa eficaz à cirurgia tradicional, realizada em consultório, sem necessidade de cortes ou internação, permitindo retorno imediato às atividades.',
    icon: Droplets,
    image: 'https://storage.lucasmendes.dev/site-sp/HUGO%20DA%20CUNHA%2Fnovas%2Ftecnica-espuma.png',
    reverse: false,
  },
  {
    title: 'Termografia Vascular',
    text: 'Ferramenta diagnóstica avançada que detecta padrões de calor emitidos pelo corpo. Na angiologia, auxilia na identificação de focos inflamatórios e alterações circulatórias sutis, permitindo um acompanhamento funcional detalhado e um refinamento constante do plano terapêutico.',
    icon: Snowflake,
    image: 'https://storage.lucasmendes.dev/site-sp/HUGO%20DA%20CUNHA%2Fnovas%2Ftermografia-02.png',
    reverse: true,
    dots: [false, true],
  },
];

const beforeAfterImages = Array.from({ length: 8 }, () =>
  'https://storage.lucasmendes.dev/site-sp/HUGO%20DA%20CUNHA%2Fprocedimento%2Fimage%20%2823%29.png'
);

function ProcedureBlock({ procedure }: { procedure: Procedure }) {
  const Icon = procedure.icon;
  return (
    <div className={`flex flex-col gap-12 items-center ${procedure.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <div className="w-full md:w-1/2 h-[400px]">
        <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl">
          <img src={procedure.image} alt="Procedimento" className="h-full w-full object-cover transition-all duration-1000 scale-105" />
          {procedure.dots && (
            <div className="absolute bottom-4 right-4 flex gap-1">
              {procedure.dots.map((active, i) => (
                <div key={i} className={`h-1.5 w-6 rounded-full transition-all ${active ? 'bg-sky-400 w-8' : 'bg-white/50'}`}></div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-6">
        <div className="flex items-center gap-4">
          <div className="bg-[#024074] p-3 rounded-xl shadow-lg">
            <Icon className="w-6 h-6 text-sky-400" />
          </div>
          <h3 className="text-3xl font-bold text-[#024074]">{procedure.title}</h3>
        </div>
        <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-sky-400 pl-6 italic">{procedure.text}</p>
      </div>
    </div>
  );
}

export default function Procedures() {
  const [current, setCurrent] = useState(0);
  const total = beforeAfterImages.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section id="procedures" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-sky-50 px-6 py-2 rounded-full mb-6 border border-sky-100">
            <Sparkles className="w-5 h-5 text-[#024074]" />
            <span className="text-[#024074] font-semibold tracking-wide uppercase text-sm">Tecnologia e Formação de Excelência</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#024074] mb-6">Procedimentos Realizados</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-slate-600 leading-relaxed">Combinamos anos de especialização com as tecnologias mais avançadas do mundo para oferecer tratamentos seguros, indolores e de rápida recuperação.</p>
            <p className="text-xl font-semibold text-[#024074] leading-relaxed">Fazemos tratamento de varizes e veias safenas com Endolaser pelas técnicas: Atta, Tetha e LEST.</p>
          </div>
        </div>
        <div className="space-y-24">
          <ProcedureBlock procedure={procedures[0]} />
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-center">
              <div className="flex items-center justify-center gap-4">
                <div className="bg-[#024074] p-3 rounded-xl shadow-lg">
                  <ShieldCheck className="w-6 h-6 text-sky-400" />
                </div>
                <h3 className="text-3xl font-bold text-[#024074]">Técnica TEThA</h3>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-sky-400 pl-6 italic text-left inline-block">Método minimamente invasivo, inovador e seguro, que utiliza o endolaser para tratar tanto a veia safena quanto as veias tributárias (varizes calibrosas e tortuosas) sem a necessidade de cortes ou remoção cirúrgica de veias.</p>
            </div>
          </div>
          {procedures.slice(1).map((p) => (
            <ProcedureBlock key={p.title} procedure={p} />
          ))}
        </div>
        <div className="mt-32">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-sky-50 px-6 py-2 rounded-full mb-6 border border-sky-100">
              <Droplets className="w-5 h-5 text-[#024074]" />
              <span className="text-[#024074] font-semibold tracking-wide uppercase text-sm">Resultados Comprovados</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-[#024074] mb-6">Crioescleroterapia, Escleroterapia Ampliada e Outros</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">Veja os resultados transformadores dos nossos tratamentos. Cada imagem representa uma história de sucesso e renovação da confiança.</p>
          </div>
          <div className="relative max-w-5xl mx-auto">
            <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img src={beforeAfterImages[current]} alt={`Antes e Depois ${current + 1}`} className="w-full h-full object-contain bg-gradient-to-br from-slate-50 to-slate-100" />
              <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#024074] p-3 rounded-full shadow-lg transition-all hover:scale-110" aria-label="Anterior">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#024074] p-3 rounded-full shadow-lg transition-all hover:scale-110" aria-label="Próximo">
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#024074]/90 text-white px-6 py-2 rounded-full font-semibold">{current + 1} / {total}</div>
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {beforeAfterImages.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all ${i === current ? 'bg-[#024074] w-8' : 'bg-slate-300 w-2'}`} aria-label={`Ir para imagem ${i + 1}`}></button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-24 bg-gradient-to-br from-[#024074] via-[#0369A1] to-[#024074] rounded-[3rem] p-12 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110"></div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Sua Saúde Vascular em Mãos Especialistas</h3>
          <p className="text-xl text-sky-100 mb-10 max-w-2xl mx-auto relative z-10">Agende uma consulta para uma avaliação completa e descubra o tratamento ideal para você.</p>
          <a href="https://wa.me/556285815846" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-sky-400 hover:bg-white text-[#024074] px-10 py-5 rounded-full font-extrabold text-xl transition-all duration-300 hover:scale-105 shadow-2xl relative z-10">Agendar Avaliação agora</a>
        </div>
      </div>
    </section>
  );
}
