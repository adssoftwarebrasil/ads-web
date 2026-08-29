interface GalleryItem {
  src: string;
  label: string;
}

const items: GalleryItem[] = [
  { src: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fcriancas-bandeira-brasil.jpg', label: 'Eventos cívicos e celebrações' },
  { src: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fcriancas-fantasia-escola.jpg', label: 'Atividades lúdicas e recreativas' },
  { src: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fdesenhos-criancas-papel.jpg', label: 'Desenvolvimento artístico' },
  { src: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fsala-criancas-cartazes.jpg', label: 'Salas temáticas' },
  { src: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fmural-colorido-crianca.jpg', label: 'Ambiente colorido e acolhedor' },
  { src: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fmural-laranja-texto.jpg', label: 'Decoração inspiradora' },
  { src: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fparede-graffiti-letras.jpg', label: 'Arte e cultura' },
  { src: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fcriancas-escola-bandeira.jpg', label: 'Momentos especiais' },
  { src: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fimg2%2FDEVOCIONAL%20DIA%CC%81RIO.jpg', label: 'Devocional Diário' },
  { src: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fimg2%2FProjeto%20%20Semeadura%20e%20Colheita(1).jpg', label: 'Projeto Semeadura e Colheita - Parte 1' },
  { src: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fimg2%2FProjeto%20%20Semeadura%20e%20Colheita(2).jpg', label: 'Projeto Semeadura e Colheita - Parte 2' },
  { src: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fimg2%2FProjeto%20%20Semeadura%20e%20Colheita(3).jpg', label: 'Projeto Semeadura e Colheita - Parte 3' },
  { src: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fimg2%2FProjeto%20%20Semeadura%20e%20Colheita(4).jpg', label: 'Projeto Semeadura e Colheita - Parte 4' },
  { src: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fimg2%2FProjeto%20%20Semeadura%20e%20Colheita(5).jpg', label: 'Projeto Semeadura e Colheita - Parte 5' },
  { src: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fimg2%2FProjeto%20%20Semeadura%20e%20Colheita(6).jpg', label: 'Projeto Semeadura e Colheita - Parte 6' },
  { src: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fimg2%2FProjeto%20%20Semeadura%20e%20Colheita(7).jpg', label: 'Projeto Semeadura e Colheita - Parte 7' },
  { src: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fimg2%2FProjeto%20%20Semeadura%20e%20Colheita(8).jpg', label: 'Projeto Semeadura e Colheita - Parte 8' },
  { src: 'https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fimg2%2FProjeto%20%20Semeadura%20e%20Colheita.jpg', label: 'Projeto Semeadura e Colheita' },
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance" style={{ color: 'rgb(2, 73, 119)' }}>
            Um Ambiente Preparado Para Seu Filho
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'rgb(246, 174, 9)' }}></div>
          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça nossa estrutura acolhedora, segura e pensada para o desenvolvimento integral das crianças
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {items.map((item) => (
            <div key={item.label} className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square">
              <img src={item.src} alt={item.label} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <p className="text-white font-semibold text-xs md:text-sm">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
