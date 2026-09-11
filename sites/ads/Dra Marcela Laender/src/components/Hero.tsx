import { ArrowRight } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/553399711500';
const INSTAGRAM_URL = 'https://www.instagram.com/dramarcelalaender/';

const stats = [
  { value: '+10', label: 'Anos de Experiência' },
  { value: '+5K', label: 'Pacientes Atendidas' },
  { value: '100%', label: 'Dedicação' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-white via-[#F8F4F5] to-[#FDF5F7]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 space-y-6 sm:space-y-8">
            <div className="inline-block">
              <span className="bg-[#D88B9B]/20 text-[#613C45] px-4 py-2 rounded-full text-sm font-medium">
                Ginecologia e Estética Íntima
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#613C45] leading-tight">
              Cuidado Integral com a <span className="text-[#D88B9B]">Saúde Feminina</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Sou especialista em ginecologia regenerativa e estética íntima, oferecendo tratamentos
              avançados com laser íntimo, ninfoplastia e reposição hormonal. Tecnologia de ponta
              aliada ao cuidado humanizado para seu bem-estar e autoestima.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#613C45] text-white px-8 py-4 rounded-full hover:bg-[#D88B9B] transition-all duration-300 font-medium shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Agendar Consulta
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#613C45] px-8 py-4 rounded-full border-2 border-[#613C45] hover:bg-[#613C45] hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Siga no Instagram
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl font-bold text-[#613C45]">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-2 relative">
            <div className="relative z-10">
              <img
                src="https://storage.lucasmendes.dev/site-sp/dra%20marcela%20laender%2Fimg%2Ffoto-dra-roupa-branca-sorrindo.webp"
                alt="Dra. Marcela Laender"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#D88B9B]/20 rounded-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#613C45]/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
