const base = 'https://storage.lucasmendes.dev/site-sp/ferraricont%20contabilidade/logo-dos-clientes/';

const logos = [
  'banner-supermercado-mercado-ks_1754x735.webp',
  'logo-auto-eletrica-vianorte-lucas-rio-verde_900x712.webp',
  'logo-geremia-materiais-eletricos-azul_857x791.webp',
  'logo-influx-lucas-rio-verde_1563x1563.webp',
  'logo-preto-branco-choperia-e-petiscaria_961x965.webp',
  'logo-white-cotton-qualidade-confianca_1124x570.webp',
  'logotipo-d-lucas-planejados-marrom-preto_811x337.webp',
  'logotipo-farmatem-fundo-vermelho-circulo-amarelo_1600x1600.webp',
  'logotipo-gt-manutencao_652x570.webp',
  'logotipo-metalurgica-prestare-azul-contato_1303x901.webp',
  'logotipo-mp1-dr-paulo-montecelli-branco_1280x491.webp',
  'logotipo-ouzuse-branco-fundo-preto_500x500.webp',
  'logotipo-perfil-metais-anel-vermelho-cinza_1600x1600.webp',
  'logotipo-safra-cotton-fundo-azul-escuro_1350x280.webp',
  'logotipo-sofia-motos-lrv-moto-azul-preto_973x480.webp',
];

export default function Clients() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Empresas que confiam em nosso trabalho
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Parcerias de sucesso que construímos ao longo da nossa trajetória.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {logos.map((file, i) => (
            <div
              key={file}
              className="w-full flex justify-center items-center p-4 transition-transform hover:scale-105 duration-300"
            >
              <img
                src={base + file}
                alt={`Logo Cliente ${i + 1}`}
                className="max-h-16 md:max-h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
