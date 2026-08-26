export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-[#cba26c]/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            A Felicidade de Quem{' '}
            <span style={{ color: 'rgb(203, 162, 108)' }}>Confia em Nós</span>
          </h2>
        </div>
        <div
          className="rounded-3xl p-8 sm:p-12 md:p-16 max-w-4xl mx-auto text-center shadow-2xl border-4 border-white"
          style={{
            background:
              'linear-gradient(135deg, rgb(203, 162, 108) 0%, rgb(184, 149, 106) 50%, rgb(203, 162, 108) 100%)',
            boxShadow: 'rgba(203, 162, 108, 0.4) 0px 20px 60px',
          }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
            Histórias de Família
          </h3>
          <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-md">
            Temos o orgulho de fazer parte da história de muitas famílias. Como o
            caso de duas irmãs que celebraram seus casamentos conosco no mesmo
            ano, ou da filha que se casou e, no ano seguinte, sua mãe também
            escolheu o Espaço Nobre para seu grande dia. Essas conexões nos
            mostram que estamos fazendo mais do que organizar festas – estamos
            criando memórias duradouras.
          </p>
        </div>
      </div>
    </section>
  );
}
