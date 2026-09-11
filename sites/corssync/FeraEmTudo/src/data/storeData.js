const photoModules = import.meta.glob('../assets/photos/*.jpeg', {
  eager: true,
  query: '?url',
  import: 'default',
})

export const photo = (filename) => photoModules[`../assets/photos/${filename}`]

const galleryData = [
  ['fachada-02.jpeg', 'Fachada da Ferragista Fera em Tudo em Goiânia'],
  ['entrada-loja.jpeg', 'Entrada da loja com corredores de produtos'],
  ['loja-ampla-02.jpeg', 'Visão ampla da variedade de produtos no interior da loja'],
  ['ferramentas-manuais.jpeg', 'Painel com grande variedade de ferramentas manuais'],
  ['limpeza-automotiva-01.jpeg', 'Prateleiras com produtos para limpeza automotiva'],
  ['utilidades-cozinha.jpeg', 'Utensílios e utilidades para cozinha e casa'],
  ['tintas.jpeg', 'Tintas e complementos disponíveis na loja'],
  ['ferramentas-eletricas.jpeg', 'Ferramentas elétricas e máquinas profissionais'],
  ['eletronicos.jpeg', 'Cabos e acessórios eletrônicos'],
  ['acessorios-celular.jpeg', 'Capas, carregadores e acessórios para celular'],
  ['utilidades-corredor.jpeg', 'Corredor com utilidades domésticas'],
  ['maquinas-profissionais.jpeg', 'Máquinas e equipamentos para serviços profissionais'],
  ['pet-e-cabos.jpeg', 'Itens para pets, cabos e produtos variados'],
  ['embalagens-e-fitas.jpeg', 'Fitas, embalagens e materiais para organização'],
  ['loja-ampla-01.jpeg', 'Interior amplo da Ferragista Fera em Tudo'],
  ['ferramentas-jardim.jpeg', 'Ferramentas para jardim e manutenção externa'],
  ['fachada-01.jpeg', 'Vista externa da loja Fera em Tudo'],
  ['sprays-e-tintas.jpeg', 'Sprays, tintas e produtos para acabamento'],
  ['controles.jpeg', 'Controles remotos e acessórios eletrônicos'],
  ['limpeza-automotiva-02.jpeg', 'Linha variada de produtos automotivos'],
  ['aviamentos-e-papelaria.jpeg', 'Aviamentos, papelaria e itens para o dia a dia'],
  ['limpeza-domestica-01.jpeg', 'Produtos de limpeza e higiene doméstica'],
  ['limpeza-domestica-02.jpeg', 'Cestos e produtos para limpeza da casa'],
  ['aviamentos-e-cuidados.jpeg', 'Aviamentos e itens de cuidados pessoais'],
  ['cuidados-pessoais-01.jpeg', 'Produtos de cuidados pessoais'],
  ['cuidados-pessoais-02.jpeg', 'Prateleira com itens de beleza e cuidados pessoais'],
  ['fios-e-cordas.jpeg', 'Fios, cordas e materiais para manutenção'],
  ['embalagens.jpeg', 'Embalagens para alimentos e uso diário'],
  ['utilidades-domesticas.jpeg', 'Garrafas térmicas, caixas e utilidades domésticas'],
  ['itens-banheiro.jpeg', 'Itens e acessórios para banheiro'],
  ['materiais-eletricos.jpeg', 'Materiais elétricos e acessórios para instalação'],
  ['iluminacao.jpeg', 'Lâmpadas, luminárias e soluções de iluminação'],
  ['torneiras.jpeg', 'Torneiras e acessórios hidráulicos'],
  ['interior-loja-01.jpeg', 'Corredores organizados com variedade de produtos'],
  ['interior-loja-02.jpeg', 'Tintas e materiais em exposição no interior da loja'],
  ['escadas.jpeg', 'Escadas de diferentes tamanhos na área externa'],
  ['vassouras.jpeg', 'Vassouras, rodos e ferramentas de limpeza'],
  ['telas-e-caixa-dagua.jpeg', 'Telas, lonas e caixa d’água'],
  ['hidraulica.jpeg', 'Conexões e peças hidráulicas'],
]

export const galleryImages = galleryData.map(([filename, alt]) => ({
  src: photo(filename),
  alt,
}))

export const whatsappUrl =
  'https://wa.me/5562992572952?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Fera%20em%20Tudo%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.'

export const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Av.+S%C3%A3o+Domingos%2C+Qd.+19%2C+Lote+27%2C+Goi%C3%A2nia%2C+GO'
