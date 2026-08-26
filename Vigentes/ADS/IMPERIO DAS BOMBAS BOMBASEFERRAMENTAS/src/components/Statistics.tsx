const Statistics = () => {
  return (
    <section className="bg-imperio-dark text-white py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ligue e Fale Conosco</h2>
          <p className="text-xl text-imperio-ice/90">
            Estamos prontos para atender suas demandas, desde o uso doméstico
            até aplicações industriais.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold text-imperio-light-blue mb-2">
              1+
            </div>
            <div className="text-lg text-imperio-ice">Anos no Mercado</div>
          </div>
          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold text-imperio-light-blue mb-2">
              1000+
            </div>
            <div className="text-lg text-imperio-ice">
              Clientes Atendidos
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold text-imperio-light-blue mb-2">
              500+
            </div>
            <div className="text-lg text-imperio-ice">
              Produtos Disponíveis
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold text-imperio-light-blue mb-2">
              10+
            </div>
            <div className="text-lg text-imperio-ice">
              Marcas de Confiança
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
