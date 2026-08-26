import { Award, Users, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#f0e92c] font-semibold text-sm uppercase tracking-wider">Sobre a Mecânica 277</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-6">Tradição e Excelência em Mecânica Automotiva</h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>Com uma <span className="text-[#f0e92c] font-semibold">sólida trajetória</span> no mercado automotivo de Foz do Iguaçu, a Mecânica 277 consolidou-se como referência em manutenção preventiva e corretiva de veículos.</p>
              <p>Oferecemos um <span className="text-[#f0e92c] font-semibold">amplo leque de serviços</span> especializados em mecânica automotiva leve, pesada e injeção a diesel, sempre com foco em qualidade, agilidade e satisfação do cliente.</p>
              <p>Nossa experiência no atendimento a <span className="text-[#f0e92c] font-semibold">frotas de grande porte</span>, plataformas orçamentárias e órgãos governamentais nos capacitou a desenvolver processos eficientes e soluções técnicas de alto nível.</p>
              <p>Dispomos de <span className="text-[#f0e92c] font-semibold">plena capacidade técnica e operacional</span> para prestar nossos serviços com profissionalismo, prezando sempre pela confiança e segurança que nossos clientes merecem.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-[#f0e92c]/10 backdrop-blur-sm p-4 rounded-lg border border-[#f0e92c]/30">
                <Award className="lucide lucide-award text-[#f0e92c] mb-2" width={32} height={32} />
                <p className="text-2xl font-bold text-white">20+</p>
                <p className="text-gray-400 text-sm">Anos de Experiência</p>
              </div>
              <div className="bg-[#f0e92c]/10 backdrop-blur-sm p-4 rounded-lg border border-[#f0e92c]/30">
                <Users className="lucide lucide-users text-[#f0e92c] mb-2" width={32} height={32} />
                <p className="text-2xl font-bold text-white">5000+</p>
                <p className="text-gray-400 text-sm">Clientes Atendidos</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/mecanica%20277/img/oficina-mecanica-fachada.webp"
                alt="Fachada Mecânica 277"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#f0e92c] p-6 rounded-xl shadow-xl max-w-xs">
              <Target className="lucide lucide-target text-[#0a0a0a] mb-2" width={32} height={32} />
              <p className="text-[#0a0a0a] font-bold text-lg mb-1">Nossa Missão</p>
              <p className="text-[#0a0a0a] text-sm">Ser reconhecida como a mecânica mais confiável e profissional de Foz do Iguaçu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
