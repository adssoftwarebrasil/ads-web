import { Target, Eye, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(1,0,104)] mb-4">Sobre a Central Ferragens</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">A <strong className="text-[rgb(1,0,104)]">Central Ferragens</strong>, fundada em <strong>1991</strong>, é uma empresa com bases sólidas que busca sempre colocar à disposição dos seus clientes os principais itens do ramo de ferro e aço para atender suas necessidades.</p>
            <p className="text-lg text-gray-700 leading-relaxed">Sediada em <strong>Unaí - MG</strong>, vem acompanhando e contribuindo para o desenvolvimento da cidade e região. Sempre entendemos que nosso desenvolvimento é reflexo do sucesso e crescimento de nossos clientes.</p>
            <p className="text-lg text-gray-700 leading-relaxed">Com ótima localização e espaço adequado para receber nossos clientes, a Central Ferragens sempre focou em fornecer <strong className="text-[rgb(1,0,104)]">ferro e aço com qualidade</strong> para Unaí e região.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[rgb(1,0,104)] rounded-2xl blur-xl opacity-10"></div>
            <img src="https://storage.lucasmendes.dev/site-sp/central%20ferragens/img/barras-aco-empilhadas.webp" alt="Barras de Aço" className="relative rounded-2xl shadow-2xl w-full h-auto" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-[rgb(1,0,104)] to-[rgb(15,23,138)] text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target width={32} height={32} className="text-[rgb(1,0,104)]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Missão</h3>
            <p className="text-gray-100 leading-relaxed">Ser referência regional no setor de distribuição de ferro e aço, fornecendo produtos de qualidade com excelência no atendimento.</p>
          </div>
          <div className="bg-gradient-to-br from-[rgb(1,0,104)] to-[rgb(15,23,138)] text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Eye width={32} height={32} className="text-[rgb(1,0,104)]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Visão</h3>
            <p className="text-gray-100 leading-relaxed">Fornecer produtos de ferro e aço com qualidade, empenhando-se para alcançar a satisfação do cliente com nossos produtos e atendimento.</p>
          </div>
          <div className="bg-gradient-to-br from-[rgb(1,0,104)] to-[rgb(15,23,138)] text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Heart width={32} height={32} className="text-[rgb(1,0,104)]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Valores</h3>
            <ul className="text-gray-100 leading-relaxed space-y-2">
              <li>• Valorização e respeito às pessoas</li>
              <li>• Credibilidade no mercado</li>
              <li>• Responsabilidade social e ambiental</li>
              <li>• Relacionamento forte com os clientes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
