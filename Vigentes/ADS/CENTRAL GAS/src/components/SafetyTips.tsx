import { AlertTriangle } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/central%20gas/imagens/cilindro-gas-azul-lacrado-seguranca-obrigatorio_1080x1070.webp',
    alt: 'Cilindro de gás deve ser lacrado - segurança obrigatória',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/central%20gas/imagens/teste-vazamento-gas-primeiro-lugar-azul-verde_1080x1073.webp',
    alt: 'Teste de vazamento de gás - faça sempre',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/central%20gas/imagens/ilustracao-nao-deite-seu-botijao-azul_1080x1071.webp',
    alt: 'Nunca deite o botijão de gás',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/central%20gas/imagens/cilindro-gas-regulador-mensagem-nao-esqueca_1080x1070.webp',
    alt: 'Não esqueça do regulador de pressão',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/central%20gas/imagens/aviso-mangueira-atras-fogao-ilustracao-seguranca_1080x1083.webp',
    alt: 'Atenção com a mangueira atrás do fogão',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/central%20gas/imagens/mulher-cozinhando-fogao-mensagem-terminou-de-cozinhar_1080x1052.webp',
    alt: 'Feche o registro ao terminar de cozinhar',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/central%20gas/imagens/cilindro-gas-selo-inviolavel-aviso_1080x1059.webp',
    alt: 'Verifique o selo inviolável do cilindro',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/central%20gas/imagens/propaganda-botija-azul-8kg-vantagens-troca_720x669.webp',
    alt: 'Vantagens do botijão azul',
  },
];

export default function SafetyTips() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <AlertTriangle size={16} className="lucide lucide-alert-triangle " />
            Segurança em Primeiro Lugar
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary leading-tight mb-4">
            Dicas de Segurança para <span className="text-accent">seu gás</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            A segurança da sua família é a nossa maior prioridade. Siga estas orientações essenciais para usar o gás com
            tranquilidade.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img) => (
            <div
              key={img.src}
              className="group relative overflow-hidden rounded-2xl shadow-md card-hover bg-white border border-primary-light/20"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="mt-12 bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 md:p-10 text-center shadow-xl">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center">
              <AlertTriangle size={28} className="lucide lucide-alert-triangle text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-white mb-3">Suspeita de vazamento?</h3>
          <p className="text-white/80 mb-6 max-w-lg mx-auto text-sm leading-relaxed">
            Não acenda nenhuma chama ou interruptor. Abra janelas e portas para ventilar o ambiente. Entre em contato
            imediatamente com nossa equipe.
          </p>
          <a
            href="http://wa.me/556696555500?text=Preciso%20de%20ajuda%20urgente%20com%20vazamento%20de%20gás!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-bright text-primary font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Falar com a Central Gás
          </a>
        </div>
      </div>
    </section>
  );
}
