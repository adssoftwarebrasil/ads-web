export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/impactobaterias%2Fimpactobaterias.jpeg"
              alt="Equipe Impacto Baterias"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              <span className="text-[#FFD700]">6 Anos</span> de Confiança e Energia em Niquelândia
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                A Impacto Baterias nasceu há 6 anos com um objetivo claro: oferecer a melhor solução em
                baterias automotivas com um atendimento que fizesse a diferença. Desde a nossa fundação em
                Niquelândia-GO, nos dedicamos a construir uma relação de confiança com cada cliente.
              </p>
              <p>
                Nosso maior diferencial é a nossa equipe profissional e treinada, pronta para entender a sua
                necessidade e oferecer não apenas um produto, mas a solução certa. Para nós, cada cliente é
                único e cada atendimento é uma oportunidade de demonstrar nosso compromisso com a qualidade e a
                agilidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
