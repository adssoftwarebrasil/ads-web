import { WHATSAPP_URL } from './icons';

export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-[hsl(211,66%,90%)]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/gabricioguincho%2Fquemsomos.webp"
              alt="Quem Somos"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-[hsl(211,66%,41%)] font-semibold text-lg mb-3">Quem somos</h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(211,66%,25%)] mb-6">
              Fabricio Guincho Auto Socorro
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Fabrício Guincho Auto Socorro disponibiliza serviços especializados em reboque e assistência automotiva,
              prontos para atuar em casos de pane, acidentes ou necessidade de transporte de veículos. Nossa equipe está
              à disposição 7h até 23h30, sete dias por semana, assegurando um atendimento ágil, seguro e eficiente.
              Operamos no Residencial Zanetti, em Franca – SP, e em regiões próximas, sempre preparados para oferecer o
              melhor suporte automotivo.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F97316] text-white px-8 py-4 rounded-lg hover:bg-[#ea580c] transition-all hover:scale-105 font-semibold shadow-lg"
            >
              Enviar WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
