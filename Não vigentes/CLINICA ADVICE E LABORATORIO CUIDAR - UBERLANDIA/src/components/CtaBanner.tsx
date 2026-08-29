import { useInView } from '../hooks/useInView';

const BG_IMG =
  'https://storage.lucasmendes.dev/site-sp/advice%2Fimg%2Fhero-opcao.webp';

export default function CtaBanner({
  onWhatsAppClick,
}: {
  onWhatsAppClick: () => void;
}) {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={BG_IMG}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-900/80" />
      </div>

      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transition-all duration-700 ${
          isInView
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Pronto para garantir a segurança da sua equipe?
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
          Entre em contato agora e descubra como podemos ajudar sua empresa a
          estar em conformidade com todas as normas de segurança e saúde do
          trabalho.
        </p>
        <button
          onClick={onWhatsAppClick}
          className="bg-brand-500 hover:bg-brand-600 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5"
        >
          Fale com um Especialista
        </button>
      </div>
    </section>
  );
}
