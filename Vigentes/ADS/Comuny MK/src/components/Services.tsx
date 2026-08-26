const services = [
  'https://storage.lucasmendes.dev/comuny/img%2Ftrafego%20pago%20.png',
  'https://storage.lucasmendes.dev/comuny/img%2Fidentidade%20visual%20e%20logos.png',
  'https://storage.lucasmendes.dev/comuny/img%2Fmarketing%20de%20experiencia.png',
  'https://storage.lucasmendes.dev/comuny/img%2Fagenciamento%20mensal.png',
  'https://storage.lucasmendes.dev/comuny/img%2Fcaptacao-edicao.png',
  'https://storage.lucasmendes.dev/comuny/img%2Fcobertura%20de%20eventos%20.png',
  'https://storage.lucasmendes.dev/comuny/img%2Fcriacao%20de%20websites%20e%20landing%20pages.png',
  'https://storage.lucasmendes.dev/comuny/img%2Fposicionamento.png',
  'https://storage.lucasmendes.dev/comuny/img%2Ftime%20de%20vendas.png',
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(124, 7, 216, 0.3) 10px, rgba(124, 7, 216, 0.3) 11px)',
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((src, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 opacity-100 translate-y-0"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-purple-600 via-blue-500 to-green-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-[2px] rounded-2xl bg-black"></div>
              </div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className="absolute inset-0 rounded-2xl animate-spin-slow"
                  style={{
                    background:
                      'linear-gradient(90deg, rgb(124, 7, 216), rgb(16, 44, 246), rgb(1, 255, 106), rgb(124, 7, 216)) 0% 0% / 400% 400%',
                    padding: '2px',
                    mask:
                      'linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box exclude, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)',
                    WebkitMask:
                      'linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box exclude, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)',
                  }}
                ></div>
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={src}
                  alt={`Serviço ${i + 1}`}
                  className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/0 via-blue-500/0 to-green-400/0 group-hover:from-purple-600/20 group-hover:via-blue-500/10 group-hover:to-green-400/20 transition-all duration-500"></div>
              </div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div
                  className="absolute inset-0 rounded-2xl blur-xl"
                  style={{
                    boxShadow:
                      'rgba(124, 7, 216, 0.6) 0px 0px 40px, rgba(1, 255, 106, 0.3) 0px 0px 80px, rgba(16, 44, 246, 0.2) 0px 0px 120px',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
