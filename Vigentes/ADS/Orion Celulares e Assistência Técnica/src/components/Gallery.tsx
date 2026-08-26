export default function Gallery() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-black fade-in">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl group">
          <img
            src="/interna-estoque.webp"
            alt="Prateleiras da loja Órion com acessórios, caixas de som e fones em estoque"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-white text-2xl md:text-4xl font-bold text-center px-4">Estoque Sempre Atualizado</h3>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl group">
          <img
            src="/interna-atendimento.webp"
            alt="Área de atendimento da loja Órion, com mesa e cadeiras para clientes"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-white text-2xl md:text-4xl font-bold text-center px-4">Atendimento personalizado Presencial{' '}e{' '}on-line</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
