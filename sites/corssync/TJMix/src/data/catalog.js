const catalogAssets = import.meta.glob("../assets/catalog/*", {
  eager: true,
  import: "default",
});

const resolveAsset = (file) => catalogAssets[`../assets/catalog/${file}`];

export const catalogCategories = [
  "Todos",
  "Construção",
  "Pintura",
  "Ferramentas",
  "Impermeabilização",
  "Louças & metais",
  "Pisos & revestimentos",
  "Cobertura",
  "Elétrica",
  "Limpeza & utilidades",
  "Institucional",
];

const rawCatalogItems = [
  { file: "01-pintura-davila-ambiente.jpeg", title: "D’Ávila Acrílica Pro", category: "Pintura", description: "Cores e cobertura para transformar ambientes.", format: "landscape" },
  { file: "02-carrinho-mao-reforcado.png", title: "Carrinho de mão reforçado", category: "Ferramentas", description: "Resistência e praticidade para o trabalho pesado.", format: "square" },
  { file: "03-thinner-luztol.jpeg", title: "Thinner Luztol", category: "Pintura", description: "Diluição e limpeza para diferentes serviços." },
  { file: "04-armario-astra.jpeg", title: "Armário Astra A41", category: "Louças & metais", description: "Organização e praticidade para o banheiro." },
  { file: "05-rastelo-tramontina.jpeg", title: "Rastelo regulável Tramontina", category: "Ferramentas", description: "Uma solução leve e resistente para jardins." },
  { file: "06-telhas.jpeg", title: "Linha de telhas", category: "Cobertura", description: "Opções para proteger e completar a cobertura." },
  { file: "07-imperkal-ipe.jpeg", title: "Imperkal IPÊ", category: "Impermeabilização", description: "Aditivo para massas de assentamento e reboco." },
  { file: "08-tanque-triplo.jpeg", title: "Tanque triplo", category: "Louças & metais", description: "Mais capacidade para obras e áreas de serviço.", format: "landscape" },
  { file: "09-vedacit-vedalit.jpeg", title: "Vedacit e Vedalit", category: "Impermeabilização", description: "Proteção e durabilidade contra água e umidade.", format: "landscape" },
  { file: "10-vassouras.jpeg", title: "Vassouras Onix", category: "Limpeza & utilidades", description: "Limpeza eficiente para diferentes ambientes." },
  { file: "11-tintas-prateleira.jpeg", title: "Linha completa de tintas", category: "Pintura", description: "Cores, esmaltes e complementos para pintar." },
  { file: "12-torneiras-kelly.jpeg", title: "Torneiras Kelly", category: "Louças & metais", description: "Modelos para cozinhas, banheiros e áreas externas." },
  { file: "13-cozinha-completa.jpeg", title: "Cozinha completa", category: "Louças & metais", description: "Pia, torneira e revestimentos para compor o ambiente.", format: "landscape" },
  { file: "14-torneiras-ducha-kelly.jpeg", title: "Torneiras e ducha Kelly", category: "Louças & metais", description: "Metais sanitários para cozinha e banheiro." },
  { file: "15-ferramentas-pedreiro.jpeg", title: "Ferramentas para pedreiro", category: "Ferramentas", description: "Itens essenciais do preparo ao acabamento." },
  { file: "16-vedacit-impermeabilizante.jpeg", title: "Linha Vedacit", category: "Impermeabilização", description: "Impermeabilização para concretos e argamassas.", format: "landscape" },
  { file: "17-cozinha-piso-organic.jpeg", title: "Piso Organic Black", category: "Pisos & revestimentos", description: "Acabamento marcante para cozinhas modernas.", format: "landscape" },
  { file: "18-marmotec-tanques.png", title: "Pias e tanques Marmotec", category: "Louças & metais", description: "Resistência e acabamento para diferentes espaços." },
  { file: "19-tinta-davila-oferta.png", title: "Tinta D’Ávila Acrílica Pro", category: "Pintura", description: "Cobertura e proteção para áreas internas e externas." },
  { file: "20-pintura-davila-pro.jpeg", title: "Pintura com D’Ávila Pro", category: "Pintura", description: "Mais cor e resistência para renovar o ambiente.", format: "landscape" },
  { file: "21-materiais-obra.jpeg", title: "Materiais para obra", category: "Construção", description: "Soluções para começar a construção com confiança.", format: "landscape" },
  { file: "22-cabos-eletricos.jpeg", title: "Cabos elétricos", category: "Elétrica", description: "Fios e cabos para instalações elétricas." },
  { file: "23-impermeabilizantes.jpeg", title: "Impermeabilizantes", category: "Impermeabilização", description: "Proteção para paredes, lajes, fundações e áreas úmidas." },
  { file: "24-pisos-cozinha.jpeg", title: "Pisos Rochamaxx", category: "Pisos & revestimentos", description: "Duas propostas de acabamento para a cozinha.", format: "landscape" },
  { file: "25-louca-onix-banheiro.jpeg", title: "Louça sanitária Onix", category: "Louças & metais", description: "Design e resistência para transformar o banheiro." },
  { file: "26-area-servico-onix.jpeg", title: "Área de serviço Onix", category: "Louças & metais", description: "Tanques, torneiras e louças para o dia a dia." },
  { file: "27-logo-tj-mix.jpeg", title: "Identidade TJ Mix", category: "Institucional", description: "A marca que reúne soluções para sua obra.", format: "landscape" },
  { file: "28-cortador-pisos-cortag.jpeg", title: "Cortador Cortag TEC-50", category: "Ferramentas", description: "Precisão para cortes em pisos e azulejos." },
  { file: "29-fachada-loja.png", title: "Loja TJ Mix", category: "Institucional", description: "Atendimento presencial e variedade para construir.", format: "landscape" },
  { file: "30-assento-sanitario.jpeg", title: "Assento sanitário Astra", category: "Louças & metais", description: "Conforto, praticidade e opções de cores." },
  { file: "31-linha-cortag.jpeg", title: "Linha completa Cortag", category: "Ferramentas", description: "Corte, perfuração e acabamento profissional." },
  { file: "32-assentamento-piso.jpeg", title: "Piso Linhares Artec", category: "Pisos & revestimentos", description: "Elegância e durabilidade para diferentes ambientes." },
  { file: "33-batedor-argamassa.jpeg", title: "Batedor de argamassa Cortag", category: "Ferramentas", description: "Agilidade para misturar argamassas e rejuntes." },
  { file: "34-banheiro-completo.jpeg", title: "Banheiro completo Onix", category: "Louças & metais", description: "Louças e complementos para completar o ambiente." },
  { file: "35-rodel-cortag-uso.jpeg", title: "Rodel Cortag em uso", category: "Ferramentas", description: "Precisão no rejunte para um resultado uniforme." },
  { file: "36-rodel-cortag-produto.jpeg", title: "Rodel Cortag", category: "Ferramentas", description: "Acabamento profissional nos últimos detalhes." },
  { file: "37-texturas-davila.jpeg", title: "Texturas D’Ávila", category: "Pintura", description: "Cores e relevos para personalizar paredes." },
  { file: "38-kit-sanitario-onix.png", title: "Kit sanitário Onix", category: "Louças & metais", description: "Uma composição completa e pronta para instalar." },
];

export const catalogItems = rawCatalogItems.map((item, index) => ({
  ...item,
  id: `produto-${index + 1}`,
  image: resolveAsset(item.file),
}));
