import { FileText, Briefcase, Camera, Download } from 'lucide-react';

const materials = [
  {
    Icon: FileText,
    title: 'Release e Biografia',
    desc: 'História completa da dupla e informações para divulgação',
  },
  {
    Icon: Briefcase,
    title: 'Rider Técnico',
    desc: 'Especificações técnicas e requisitos para apresentações',
  },
  {
    Icon: Camera,
    title: 'Fotos em Alta Resolução',
    desc: 'Banco de imagens profissionais para uso promocional',
  },
];

export default function Material() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
          Material para Contratantes
          <div className="h-1 w-24 bg-[#DAA520] mx-auto mt-4"></div>
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          Tudo que você precisa para contratar a dupla
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {materials.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-[#DAA520]/50 hover:shadow-lg hover:shadow-[#DAA520]/20 group"
            >
              <div className="w-16 h-16 rounded-full bg-[#DAA520]/20 flex items-center justify-center mb-6 group-hover:bg-[#DAA520]/30 transition-colors duration-300">
                <Icon className="w-8 h-8 text-[#DAA520]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="https://drive.google.com/drive/folders/castelliethiago"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#DAA520] hover:bg-[#B8860B] text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#DAA520]/50"
          >
            <Download className="lucide lucide-download w-5 h-5" />
            Baixar Material Completo
          </a>
        </div>
      </div>
    </section>
  );
}
