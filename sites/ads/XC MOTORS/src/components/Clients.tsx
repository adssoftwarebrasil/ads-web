const BASE = 'https://storage.lucasmendes.dev/site-sp/xc%20motors/clientes';

const gallery = [
  { file: 'carro-branco-la-o-familia-xc-motors_959x1280.webp', alt: 'Família feliz com carro novo' },
  { file: 'casal-comprando-carro-novo-xc-motors_960x1280.webp', alt: 'Casal comprando carro novo' },
  { file: 'casal-parabens-carro-novo-xc-motors_960x1280.webp', alt: 'Casal parabéns carro novo' },
  { file: 'homem-carro-prata-la-o-vermelho-concessionaria_960x1280.webp', alt: 'Cliente com carro prata' },
  { file: 'homem-entrega-carro-branco-la-o-vermelho_960x1280.webp', alt: 'Entrega de carro branco' },
  { file: 'homem-feliz-concessionaria-carro-novo-branco_960x1280.webp', alt: 'Cliente feliz com carro branco' },
  { file: 'homens-concessionaria-xc-motors-caminhonete-branca_960x1280.webp', alt: 'Clientes com caminhonete branca' },
  { file: 'homens-congratulando-entrega-carro-laco-vermelho_960x1280.webp', alt: 'Entrega com laço vermelho' },
  { file: 'homens-segurando-chaves-fiat-com-laco-vermelho_959x1280.webp', alt: 'Entrega das chaves Fiat' },
  { file: 'jeep-preto-laco-vermelho-concessionaria-mulher_960x1280.webp', alt: 'Cliente com Jeep preto' },
  { file: 'mulher-carro-novo-laco-vermelho-xc-motors_959x1280.webp', alt: 'Mulher com carro novo' },
  { file: 'mulher-feliz-carro-novo-laco-vermelho_959x1280.webp', alt: 'Mulher feliz com carro novo' },
  { file: 'mulher-ganhando-carro-branco-com-laco-vermelho_960x1280.webp', alt: 'Entrega de carro branco' },
];

export default function Clients() {
  return (
    <section id="clientes" className="py-24 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#f8c102]"></div>
            <span className="text-[#f8c102] text-sm font-semibold tracking-widest uppercase">Clientes felizes</span>
            <div className="h-px w-8 bg-[#f8c102]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#fefefe] mb-4">
            Momentos que valem <span className="text-[#f8c102]">ouro</span>
          </h2>
          <p className="text-[#fefefe]/50 text-lg max-w-xl mx-auto">
            Cada entrega é uma história de realização. Veja quem já fez negócio com a XC Motors.
          </p>
        </div>
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {gallery.map((g) => (
            <div key={g.file} className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl">
              <img
                src={`${BASE}/${g.file}`}
                alt={g.alt}
                className="w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#f8c102]/0 group-hover:bg-[#f8c102]/10 transition-colors duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
