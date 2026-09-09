export const business = {
  name: 'Taiti Pneus',
  phone: '5565992622844',
  phoneDisplay: '(65) 99262-2844',
  address: 'Av. Historiador Rubens de Mendonça, 280',
  neighborhood: 'Baú, Cuiabá – MT',
  postalCode: '78000-000',
  hours: '7h30 às 18h',
  emails: [
    'Trabalhotaitiautocenter@terra.com.br',
    'Outrobarbosacba@bol.com.br',
    'Casabarbosacba@bol.com.br',
  ],
};

export const whatsappUrl = (message = 'Olá, Taiti Pneus! Gostaria de saber mais sobre os serviços e agendar um atendimento.') =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Taiti Pneus, ${business.address}, ${business.neighborhood}`)}`;

export const services = [
  {
    id: 'alinhamento', number: '01', icon: 'alignment',
    name: 'Alinhamento e balanceamento',
    shortName: 'Alinhamento e balanceamento',
    description: 'Mais equilíbrio na direção e cuidado com o desgaste dos seus pneus.',
    detail: 'Seu carro puxa para um lado ou o volante vibra? Converse com a nossa equipe sobre a avaliação do alinhamento e do balanceamento das rodas.',
    signs: ['Direção puxando para um lado', 'Vibração no volante', 'Desgaste irregular dos pneus'],
  },
  {
    id: 'pneus', number: '02', icon: 'tire',
    name: 'Pneus', shortName: 'Pneus',
    description: 'O contato com o asfalto merece atenção. Encontre pneus para o seu caminho.',
    detail: 'Informe o modelo do seu carro e, se souber, a medida dos pneus. Nossa equipe ajuda você a consultar as opções e a disponibilidade para o seu veículo.',
    signs: ['Consulta de medidas e modelos', 'Avaliação do desgaste', 'Orientação para a troca'],
  },
  {
    id: 'mecanica', number: '03', icon: 'wrench',
    name: 'Mecânica', shortName: 'Mecânica',
    description: 'Atenção ao funcionamento do seu carro, da rotina de cuidados ao reparo.',
    detail: 'Manter os cuidados em dia faz parte de uma boa rotina com o carro. Conte o que está acontecendo e consulte nossa equipe sobre a avaliação mecânica e os serviços necessários.',
    signs: ['Manutenção do veículo', 'Avaliação de ruídos', 'Consulta de reparos'],
  },
  {
    id: 'suspensao', number: '04', icon: 'suspension',
    name: 'Suspensão', shortName: 'Suspensão',
    description: 'Conforto e estabilidade para encarar as ruas do dia a dia.',
    detail: 'Barulhos ao passar por irregularidades ou mudanças no comportamento do carro merecem atenção. Fale com a Taiti Pneus sobre a avaliação dos componentes da suspensão.',
    signs: ['Ruídos em pisos irregulares', 'Mudanças na estabilidade', 'Avaliação dos componentes'],
  },
  {
    id: 'freios', number: '05', icon: 'brake',
    name: 'Freios', shortName: 'Freios',
    description: 'Cuidado com o sistema que precisa responder em cada parada.',
    detail: 'Percebeu ruídos ou uma resposta diferente ao frear? Entre em contato para conversar sobre a avaliação do sistema de freios do seu veículo.',
    signs: ['Ruídos na frenagem', 'Avaliação do sistema', 'Manutenção dos componentes'],
  },
  {
    id: 'injecao', number: '06', icon: 'engine',
    name: 'Injeção eletrônica', shortName: 'Injeção eletrônica',
    description: 'Um olhar atento aos sinais e ao funcionamento do motor.',
    detail: 'Luz de injeção acesa, falhas ou alterações no funcionamento do motor? Relate os sinais para a nossa equipe e consulte o atendimento de injeção eletrônica.',
    signs: ['Luz de injeção acesa', 'Falhas no funcionamento', 'Avaliação da injeção'],
  },
];
