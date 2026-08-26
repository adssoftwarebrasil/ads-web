export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 opacity-100 translate-y-0">
          <div className="order-2 md:order-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/CHOPP%20NATTOS%20BRASIL/img/homem-cerveja-sorrindo.webp"
              alt="Cliente satisfeito"
              className="rounded-2xl shadow-xl w-full hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <p className="text-sm font-semibold text-[rgb(176,146,71)] uppercase tracking-wider">QUEM SOMOS</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(40,44,115)] leading-tight">
              Levando Excelência aos Seus Melhores Momentos
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Desde maio de 2018, a Chopp Nattos Brasil nasceu com o propósito de expandir a distribuição dos
                produtos da cervejaria Nattos Beer, levando qualidade superior e atendimento diferenciado a todos os
                nossos clientes.
              </p>
              <p>
                Seja em festas, casamentos, aniversários ou momentos casuais de celebração, estamos presentes para
                transformar sonhos em realidade, oferecendo um chopp extremamente gelado e saboroso que marca seus
                melhores momentos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
