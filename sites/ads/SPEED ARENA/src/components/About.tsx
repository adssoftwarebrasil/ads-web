export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Uma Paixão Transformada em Propósito
            </h2>

            <div className="space-y-4 text-lg text-neutral-dark leading-relaxed">
              <p>
                Fundada em maio de 2022 no coração do Setor Sul de Goiânia, a Speed Arena
                nasceu do sonho de criar um espaço onde esporte, lazer e gastronomia se
                encontram perfeitamente.
              </p>

              <p>
                Nossa missão é tornar cada visita uma experiência inesquecível, seja você
                um atleta buscando aprimoramento ou alguém em busca de momentos de
                descontração com amigos e família.
              </p>

              <div className="bg-accent-green/30 p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-3 text-xl">Nossos Valores</h3>
                <div className="grid grid-cols-2 gap-2 text-base">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-green-vibrant rounded-full"></div>
                    <span>Lealdade</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-green-vibrant rounded-full"></div>
                    <span>Ética</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-green-vibrant rounded-full"></div>
                    <span>Garra</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-green-vibrant rounded-full"></div>
                    <span>Honestidade</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-green-vibrant rounded-full"></div>
                    <span>Humildade</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-green-vibrant rounded-full"></div>
                    <span>Respeito</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-green-vibrant rounded-full"></div>
                    <span>Exigência</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-green-vibrant rounded-full"></div>
                    <span>Competência</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <img
              src="https://storage.lucasmendes.dev/site-sp/speedarena%2Fspeed%205%20(1)_ultra.webp"
              alt="Quadras Speed Arena"
              className="rounded-lg shadow-xl w-full h-64 object-cover hover:scale-105 transition-transform"
            />
            <img
              src="https://storage.lucasmendes.dev/site-sp/speedarena%2Fspeed%206%20(1)_ultra.webp"
              alt="Ambiente Speed Arena"
              className="rounded-lg shadow-xl w-full h-64 object-cover hover:scale-105 transition-transform mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
