import { CheckCircle } from 'lucide-react';

const itens = [
  'Manutenção preventiva',
  'Reparos e consertos',
  'Peças originais',
  'Garantia estendida',
];

export default function Assistencia() {
  return (
    <section
      id="assistencia"
      className="py-20 md:py-24"
      style={{
        background:
          'linear-gradient(135deg, rgba(244, 95, 38, 0.05), rgba(19, 57, 94, 0.05))',
      }}
    >
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 opacity-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/MAXXIMUS%2Finternadaloja2.jpg"
              alt="Interior da Loja"
              className="rounded-2xl shadow-2xl w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="inline-block bg-[rgba(244,95,38,0.1)] text-[rgb(244,95,38)] px-5 py-2 rounded-full text-sm font-medium mb-5 opacity-0">
              Suporte Completo
            </span>
            <h2 className="text-[rgb(19,57,94)] text-3xl md:text-5xl font-bold mb-5 opacity-0">
              Assistência Técnica Especializada
            </h2>
            <p className="text-[rgb(173,173,175)] text-base md:text-lg leading-relaxed mb-8 opacity-0">
              Manutenção e assistência técnica especializada para Husqvarna,
              Stihl e demais marcas. Nossa equipe está preparada para garantir o
              melhor desempenho e durabilidade dos seus equipamentos.
            </p>
            <ul className="space-y-4 mb-8 opacity-0">
              {itens.map((item) => (
                <li key={item} className="flex items-center space-x-3">
                  <CheckCircle
                    size={24}
                    strokeWidth={2}
                    className="lucide text-[rgb(244,95,38)] flex-shrink-0"
                  />
                  <span className="text-[rgb(19,57,94)] text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/5516993268596?text=Olá! Gostaria de agendar uma manutenção - Araraquara."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(244,95,38)] text-white px-10 py-4 rounded-full font-medium hover:scale-105 transition-transform duration-300 opacity-0"
            >
              Agendar Manutenção
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
