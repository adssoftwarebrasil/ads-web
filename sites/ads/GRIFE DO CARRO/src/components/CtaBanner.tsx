import { WHATSAPP_URL } from '../data';

export default function CtaBanner() {
  return (
    <section className="bg-black pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl bg-gold px-8 py-8 lg:px-12">
          <div className="text-center md:text-left">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-black">
              Pronto para encontrar seu próximo carro?
            </h3>
            <p className="mt-2 text-sm font-medium text-black/80">
              Fale agora com um consultor da Grife do Carro.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="shrink-0 rounded-full bg-black px-8 py-3.5 text-sm font-bold tracking-wider text-white hover:bg-ink-soft transition-colors"
          >
            ENVIAR WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}
