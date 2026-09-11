import { WHATSAPP_URL } from '../constants';

export default function About() {
  return (
    <div className="animate-on-scroll animate-fade-in-up">
      <section id="sobre" className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span
                className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-5"
                style={{ backgroundColor: 'rgb(255, 220, 2)', color: 'rgb(0, 0, 0)' }}
              >
                Quem somos
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5"
                style={{ color: 'rgb(0, 0, 0)' }}
              >
                Boa Massa
              </h2>
              <p
                className="text-base lg:text-lg leading-relaxed mb-8"
                style={{ color: 'rgb(51, 51, 51)' }}
              >
                Na Boa Massa, somos especializados na venda de argamassas colantes
                e rejuntes para construção civil. Com a missão de oferecer sempre o
                melhor, garantimos a qualidade dos nossos produtos, que passam por
                rigorosos testes antes de chegarem até você.
              </p>
              <p
                className="text-base lg:text-lg leading-relaxed mb-8"
                style={{ color: 'rgb(51, 51, 51)' }}
              >
                Temos um compromisso com a sustentabilidade, fazendo entregas e
                descarregamento sem cobrança de taxas extras, valorizando o meio
                ambiente e a economia dos nossos clientes. Seja para pequenas
                reformas ou grandes obras, estamos prontos para atendê-lo com
                excelência e rapidez.
              </p>
              <div
                className="inline-block px-8 py-4 rounded-lg text-lg lg:text-xl font-bold mb-8"
                style={{ backgroundColor: 'rgb(255, 220, 2)', color: 'rgb(0, 0, 0)' }}
              >
                10+ anos de experiência
              </div>
              <div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-9 py-4 rounded-lg font-semibold transition-all hover:scale-105"
                  style={{
                    backgroundColor: 'rgb(0, 0, 0)',
                    color: 'rgb(255, 220, 2)',
                  }}
                >
                  Solicite um Orçamento
                </a>
              </div>
            </div>
            <div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/boamassa%2FPor%20Que%20Escolher%20a%20Boa%20Massa.jpg"
                alt="Boa Massa - Materiais de Construção"
                className="w-full rounded-xl shadow-2xl object-cover"
                loading="lazy"
                style={{ aspectRatio: '4 / 3' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
