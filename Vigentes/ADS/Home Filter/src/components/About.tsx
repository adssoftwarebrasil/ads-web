import { ShieldCheck, CheckCircle2, Droplets, MessageCircle } from 'lucide-react';

const features = [
  { Icon: ShieldCheck, cls: 'lucide lucide-shield-check text-blue-500', label: 'Produtos Originais' },
  { Icon: CheckCircle2, cls: 'lucide lucide-check-circle2 text-blue-500', label: 'Instalação Especializada' },
  { Icon: Droplets, cls: 'lucide lucide-droplets text-blue-500', label: 'Filtros de Alta Tecnologia' },
  { Icon: MessageCircle, cls: 'lucide lucide-message-circle text-blue-500', label: 'Suporte Pós-Venda' },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full mb-6">
              <span className="text-xs font-bold uppercase tracking-wider">Nossa História</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
              Excelência em <span className="text-blue-600">Água Pura</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-slate-600 mb-8 italic">
              Home Filter — Revenda Autorizada Soft Everest
            </h3>
            <div className="space-y-6 text-slate-700 text-lg leading-relaxed mb-10">
              <p>
                A <span className="font-bold text-slate-900">HOME FILTER</span> nasceu com o propósito de transformar a forma como você consome água. Somos especialistas em soluções de filtragem de alta performance.
              </p>
              <p>
                Nosso compromisso vai além da venda: oferecemos saúde e bem-estar através de tecnologias que eliminam impurezas, bactérias e o excesso de cloro, garantindo uma hidratação segura para sua família ou empresa.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {features.map(({ Icon, cls, label }) => (
                <div key={label} className="flex items-center space-x-3 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                  <Icon className={cls} width={24} height={24} />
                  <span className="text-sm font-semibold text-slate-800">{label}</span>
                </div>
              ))}
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=556284455153&text=Ol%C3%A1..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-700 hover:shadow-2xl transition-all duration-300 group"
            >
              Falar com Especialista
              <MessageCircle className="lucide lucide-message-circle ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" width={24} height={24} />
            </a>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="relative">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=homefilt%2Fhomefiltros.png&version_id=null"
                alt="Quem somos - HOME FILTER"
                className="w-full h-auto rounded-[2rem] shadow-2xl border-8 border-white relative z-10 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
