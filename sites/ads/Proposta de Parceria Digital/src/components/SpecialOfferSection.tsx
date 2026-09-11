export default function SpecialOfferSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white" aria-label="Oferta Especial">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-bold mb-6">
            OFERTA ESPECIAL
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa Condição Especial para sua Parceria</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Ao contratar a solução completa de fundação e performance (Site + Google Ads + Meta Ads), ativamos um
            desconto especial de <span className="font-bold text-yellow-300">10%</span> sobre o valor mensal total da
            gestão de tráfego pago.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-blue-200 mb-2 line-through text-lg">De: R$ 1.500,00/mês</div>
                <div className="text-4xl font-bold">
                  R$ 1.350<span className="text-xl">/mês</span>
                </div>
                <div className="text-blue-200 mt-2">Gestão de Tráfego Completa</div>
              </div>
              <div className="text-right">
                <div className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-bold text-xl">
                  Economia de R$ 150/mês
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
