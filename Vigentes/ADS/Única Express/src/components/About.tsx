export default function About() {
  return (
    <section id="sobre" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(0,38,100)]">Sobre Nós</h2>
            <p className="text-xl text-[rgb(163,61,55)] font-semibold">Trajetória de excelência e compromisso</p>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                A Única Express é uma empresa especializada em soluções logísticas, com foco em entregas rápidas e urgentes em Goiânia e região metropolitana. Nossa missão é conectar pessoas e empresas através de serviços de transporte eficientes, confiáveis e personalizados.
              </p>
              <p>
                Com uma equipe dedicada e uma frota moderna, atendemos tanto pessoas físicas quanto jurídicas, oferecendo desde entregas bancárias e cartoriais até transporte de malotes corporativos. Nossa versatilidade nos permite adaptar nossos serviços às necessidades específicas de cada cliente.
              </p>
              <p>
                Comprometidos com a excelência, investimos constantemente em tecnologia, treinamento de equipe e manutenção de frota para garantir que cada entrega seja realizada com segurança, pontualidade e profissionalismo.
              </p>
            </div>
            <div className="bg-[rgb(38,129,196)]/10 border-l-4 border-[rgb(38,129,196)] p-6 rounded-r-lg">
              <p className="text-[rgb(0,38,100)] font-bold text-xl">Seja parte da nossa história de sucesso!</p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl shadow-2xl overflow-hidden aspect-square">
              <video
                controls
                preload="metadata"
                poster="https://storage.lucasmendes.dev/site-sp/unicaexpressoficial%2Fsobrenos.webp"
                className="w-full h-full object-contain bg-black"
              >
                <source src="https://storage.lucasmendes.dev/site-sp/unicaexpressoficial%2Fvideo-hostoriadesucesso.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
