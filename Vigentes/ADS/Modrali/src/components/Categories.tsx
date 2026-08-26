const STORE_URL = 'https://www.lojamodrali.com.br';

const categories = [
  {
    name: 'Bombas Hidráulicas',
    image: 'https://storage.lucasmendes.dev/site-sp/lojamodrali/bombas_hidrulicas.webp',
    path: '/bomba-hidraulica'
  },
  {
    name: 'Tomadas de Força',
    image: 'https://storage.lucasmendes.dev/site-sp/lojamodrali/tomadas_de_fora.webp',
    path: '/tomada-de-forca'
  },
  {
    name: 'Comandos Hidráulicos',
    image: 'https://storage.lucasmendes.dev/site-sp/lojamodrali/comandos_hidrulicos.webp',
    path: '/comando-hidraulico'
  },
  {
    name: 'Kits Hidráulicos',
    image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=lojamodrali%2Fkit_hidraulico_modrali_tanque_180_litros_bomba_sae_b_dois_furos_p_cacamba_ls_1029_3_a59ecaf37e539b298bb4fff8fc6bf0dd.webp&version_id=null',
    path: '/kit-hidraulico'
  },
  {
    name: 'Acessórios',
    image: 'https://storage.lucasmendes.dev/site-sp/lojamodrali/acessrios.webp',
    path: '/acessorios'
  },
  {
    name: 'Manutenção',
    image: 'https://storage.lucasmendes.dev/site-sp/lojamodrali/manutencao.webp',
    path: '/manutencao'
  }
];

export function Categories() {
  return (
    <section id="categorias" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00476F] mb-3">
            Escolha por Categoria
          </h2>
          <div className="w-20 h-1 bg-[#FF8337] mx-auto rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {categories.map((category, index) => (
            <a
              key={index}
              href={`${STORE_URL}${category.path}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 w-24 md:w-28"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-[#FF8337] group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-center text-sm font-semibold text-[#00476F] group-hover:text-[#FF8337] transition-colors duration-300 leading-tight">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}