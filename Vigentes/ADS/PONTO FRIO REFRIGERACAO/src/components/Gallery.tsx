const Gallery = () => {
  const images = [
    {
      url: 'https://storage.lucasmendes.dev/site-sp/kipontofrio%2Floja-materiais-construcao.webp',
      title: 'Nossa Loja'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/kipontofrio%2Fprodutos-vitrine-ferramentas.webp',
      title: 'Vitrine de Ferramentas'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/kipontofrio%2Fferramentas-penduradas-parede.webp',
      title: 'Ferramentas Organizadas'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/kipontofrio%2Fferramentas-prateleira-loja.webp',
      title: 'Prateleiras Completas'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/kipontofrio%2Ffitas-adesivas-empilhadas.webp',
      title: 'Fitas e Acessórios'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/kipontofrio%2Fprodutos-limpeza-ferramentas-loja.webp',
      title: 'Variedade de Produtos'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#082432] to-[#166188]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Conheça Nossa <span className="text-[#6ed2e1]">Estrutura</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Loja completa e organizada para você encontrar tudo o que precisa com facilidade
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082432] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/556332152711?text=Olá!%20Gostaria%20de%20visitar%20a%20loja"
            className="inline-block bg-[#6ed2e1] text-[#082432] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
          >
            Visite Nossa Loja
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
