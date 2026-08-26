import { WHATSAPP_URL } from '../constants';

const regions = [
  { code: 'MT', label: 'Mato Grosso' },
  { code: 'MS', label: 'Mato Grosso do Sul' },
  { code: 'PR / RS', label: 'Sul do Brasil' },
  { code: 'PA', label: 'Pará e mais' },
];

export default function CtaBrasil() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/Estofaria%20js%20soares/interior-caminhao-volvo-bancos-pretos-cortinas_960x1280.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-brand-blue/90"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-brand-red text-sm font-semibold uppercase tracking-widest block mb-4">
          Atendemos todo o Brasil
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
          Pronto para transformar o interior
          <span className="block text-brand-red">do seu veículo?</span>
        </h2>
        <p className="text-white/70 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Seja você um caminhoneiro que percorre o Brasil ou alguém que quer
          renovar o seu carro, a Estofaria JS Soares tem a solução perfeita para
          você. Entre em contato agora mesmo!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-4 rounded-full inline-block transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Solicitar Orçamento Grátis
          </a>
          <a
            href="tel:+5566996340695"
            className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-full inline-block transition-all duration-300 hover:bg-white/10"
          >
            (66) 9 9634-0695
          </a>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {regions.map((region) => (
            <div key={region.code} className="text-center">
              <div className="text-xl font-black text-white">{region.code}</div>
              <div className="text-white/50 text-xs mt-1">{region.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
