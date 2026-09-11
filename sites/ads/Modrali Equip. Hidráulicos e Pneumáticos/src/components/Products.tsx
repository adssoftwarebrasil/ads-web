import { ExternalLink } from 'lucide-react';

const STORE_URL = 'https://www.lojamodrali.com.br';

const products = [
  {
    name: 'Comando Hidráulico Monobloco Marrucci 60/2',
    image: 'https://storage.lucasmendes.dev/site-sp/lojamodrali/algunsprodutos/180_comando_hidraulico_monobloco_marrucci_60_2_655_2_a5a30afdb35fc57f49966dd99d4a110a.webp'
  },
  {
    name: 'Bomba Hidráulica BHM 200 68 4065',
    image: 'https://storage.lucasmendes.dev/site-sp/lojamodrali/algunsprodutos/180_bomba_bhm_200_68_4065_b_r_alav_sae_b_13_16_101_2_2b573e6dd57eadf663254c21dd3c9c15.webp'
  },
  {
    name: 'Bomba Hidráulica BHT 9101',
    image: 'https://storage.lucasmendes.dev/site-sp/lojamodrali/algunsprodutos/180_bomba_bht_9101_01_88cm3_a_h_sae_b_tras_7_8_13z_3p_3v_9535_281_2_0a18a7ef604c4595d0d209871966f4cc.webp'
  },
  {
    name: 'Comando Pneumático BHM Marrucci 3P/3V',
    image: 'https://storage.lucasmendes.dev/site-sp/lojamodrali/algunsprodutos/180_comando_pneumatico_bomba_hidr_bhm_marrucci_3p_3v_6477_725_2_b480318383e4fe4f33bfb877f8aa2ea5.webp'
  },
  {
    name: 'Filtro Hidráulico de Sucção Newtec HS015CN',
    image: 'https://storage.lucasmendes.dev/site-sp/lojamodrali/algunsprodutos/180_filtro_hidraulico_de_succao_newtec_hs015cn_733_2_37dc0095c0bf559abb9b2234c0350ae3.webp'
  },
  {
    name: 'Joystick Pneumático BH4512DUMP',
    image: 'https://storage.lucasmendes.dev/site-sp/lojamodrali/algunsprodutos/180_joystick_pneu_bh4512dump_829_2_ac7007a2792386582374760564d4df01.webp'
  },
  {
    name: 'Tomada de Força TORK GRSO 900',
    image: 'https://storage.lucasmendes.dev/site-sp/lojamodrali/algunsprodutos/180_t_forca_tork_22lc62_072_grso_900_1077_2_98b14cbe448a9727e701ab0db4513488.webp'
  },
  {
    name: 'Tomada de Força Marrucci 7030',
    image: 'https://storage.lucasmendes.dev/site-sp/lojamodrali/algunsprodutos/180_tomada_de_forca_marrucci_7030_413_2_f028478bff3d40f6d2d31161a69932f9.webp'
  },
  {
    name: 'Válvula Direcional Marrucci 3P/3V 6440',
    image: 'https://storage.lucasmendes.dev/site-sp/lojamodrali/algunsprodutos/180_valvula_direcional_marrucci_3p_3v_6440_715_2_d049c3f9bb3baebd134c9a89406f09ce.webp'
  }
];

export function Products() {
  return (
    <section id="produtos" className="py-16 bg-gray-50">
      {/* max-w-5xl (menor que o 7xl) para os cards não ficarem esticados */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00476F] mb-3">
            Produtos em Destaque
          </h2>
          <div className="w-16 h-1.5 bg-[#FF8337] mx-auto rounded-full mb-4" />
          <p className="text-gray-500 text-base max-w-lg mx-auto">
            Equipamentos hidráulicos e pneumáticos de alta performance.
          </p>
        </div>

        {/* Grade ajustada: Espaçamento menor (gap-5) e 3 colunas (lg:grid-cols-3) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {products.map((product, index) => (
            <a
              key={index}
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Imagem com altura fixa (h-48) para não ficar gigante */}
              <div className="relative p-4 h-48 flex items-center justify-center bg-white border-b border-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Área de Texto mais enxuta */}
              <div className="p-4 flex flex-col flex-1 bg-gray-50/30">
                <h3 className="text-sm md:text-base font-bold text-[#00476F] line-clamp-2 mb-4 leading-snug group-hover:text-[#FF8337] transition-colors duration-300">
                  {product.name}
                </h3>
                
                <div className="mt-auto">
                  {/* Botão menor e mais delicado */}
                  <div className="flex items-center justify-center gap-1.5 bg-white text-[#00476F] text-sm font-semibold py-2 px-3 rounded-lg border border-gray-200 group-hover:bg-[#FF8337] group-hover:text-white group-hover:border-[#FF8337] transition-all duration-300">
                    <ExternalLink size={16} />
                    Ver na Loja
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Botão de Ver Todos */}
        <div className="text-center mt-12">
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#00476F] text-white px-8 py-3 rounded-full text-base font-bold hover:bg-[#003858] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <ExternalLink size={18} />
            Ver Todos os Produtos
          </a>
        </div>
      </div>
    </section>
  );
}