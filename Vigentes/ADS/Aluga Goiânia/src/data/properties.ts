export interface Property {
  id: string;
  image: string;
  price: number;
  location: string;
  title: string;
  description: string;
  guests: number;
  beds: number;
}

const BASE = 'https://storage.lucasmendes.dev/alugargoiania/';

export const properties: Property[] = [
  {
    id: 'AE05J',
    image: BASE + 'apartamento_mobiliado%2Ffoto_1.webp',
    price: 210,
    location: 'Jardim América, Goiânia',
    title: 'APARTAMENTO MOBILIADO - 303',
    description:
      'O Jardim América é um dos bairros mais tradicionais e valorizados de Goiânia, conhecido por sua mistura de tranquilidade residencial e uma vibrante vida comercial.',
    guests: 3,
    beds: 1,
  },
  {
    id: 'AE02J',
    image: BASE + 'apartamento_mobiliado_103%2Fapartamento_mobiliado_103.webp',
    price: 210,
    location: 'Jardim América, Goiânia',
    title: 'APARTAMENTO MOBILIADO - 103',
    description:
      'O bairro é tranquilo e familiar, oferecendo segurança e conveniências locais aos hóspedes. Com fácil acesso a supermercados, restaurantes e outras comodidades.',
    guests: 3,
    beds: 1,
  },
  {
    id: 'AE04J',
    image: BASE + 'apartamento_mobiliado_203%2Ffoto_1.webp',
    price: 210,
    location: 'Jardim América, Goiânia',
    title: 'APARTAMENTO MOBILIADO - 203',
    description:
      'O Jardim América é um dos bairros mais tradicionais e valorizados de Goiânia, conhecido por sua mistura de tranquilidade residencial e uma vibrante vida comercial.',
    guests: 3,
    beds: 1,
  },
  {
    id: 'QT07I',
    image: BASE + 'loft_mobiliado_goia%CC%82niaa%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Sudoeste, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA - 11',
    description:
      'Residência completa, oferecendo privacidade e conforto aos hóspedes, com acesso a Internet, televisão, ar condicionado, estacionamento, entre outros.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'PH06I',
    image: BASE + 'loft_mobiliado_goia%CC%82nia_02%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Sudoeste, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA - 02',
    description:
      'Experimente a combinação perfeita de praticidade e conforto em nosso loft totalmente mobiliado, projetado para oferecer uma experiência completa.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'PH01I',
    image: BASE + 'loft_mobiliado_goia%CC%82nia_06%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Sudoeste, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA - 06',
    description:
      'Este loft mobiliado oferece uma hospedagem completa e confortável no tranquilo bairro Sudoeste, com quarto, banheiro privativo, sala, cozinha equipada e ar-condicionado.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'PH04I',
    image: BASE + 'loft_mobiliado_goia%CC%82nia_14%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Sudoeste, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA - 14',
    description:
      'Residência completa oferecendo privacidade e conforto, com Internet, TV, ar condicionado, estacionamento e acesso a todas as áreas da casa.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'TP08H',
    image: BASE + 'loft_mobiliado_goia%CC%82nia_101%2Ffoto_1.webp',
    price: 210,
    location: 'Setor Leste Vila Nova, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA 101 - G',
    description:
      'Viva a experiência de se sentir em casa mesmo longe dela. Nossos quartos para alugar por temporada são a escolha perfeita para quem busca conforto, praticidade e flexibilidade.',
    guests: 4,
    beds: 1,
  },
  {
    id: 'TP09H',
    image: BASE + 'loft_mobiliado_goia%CC%82nia_102%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Leste Vila Nova, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA 102 - P',
    description:
      'Curta uma experiência elegante neste lugar bem-localizado. Próximo à 44, rodoviária e a 15 minutos do aeroporto.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'TP16H',
    image: BASE + 'loft_mobiliado_goia%CC%82nia_103%2Ffoto_1.webp',
    price: 210,
    location: 'Setor Leste Vila Nova, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA 103 - G',
    description:
      'Viva a experiência de se sentir em casa mesmo longe dela. Oferecemos quartos completamente equipados, com tudo que você precisa para uma estadia confortável.',
    guests: 4,
    beds: 1,
  },
  {
    id: 'CE03I',
    image: BASE + 'loft_mobiliado_goia%CC%82nia_104%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Leste Vila Nova, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA 104 - P',
    description:
      'Nossos quartos para alugar por temporada são a escolha perfeita para quem busca conforto, praticidade e flexibilidade.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'CE02I',
    image: BASE + 'loft_mobiliado_goia%CC%82nia_202%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Leste Vila Nova, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA 202 - P',
    description:
      'Nossos quartos para alugar por temporada são a escolha perfeita para quem busca conforto, praticidade e flexibilidade.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'TP05H',
    image: BASE + 'loft_mobiliado_goia%CC%82nia_204%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Leste Vila Nova, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA 204 - P',
    description:
      'Sinta-se em casa durante a sua viagem, sem abrir mão da privacidade e liberdade que deseja. Nossos quartos foram cuidadosamente projetados para oferecer o máximo em conforto.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'TP12H',
    image: BASE + 'loft_mobiliado_goia%CC%82nia_205%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Leste Vila Nova, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA 205 - M',
    description:
      'Sinta-se em casa durante a sua viagem. Nossos quartos foram cuidadosamente projetados para oferecer o máximo em conforto e praticidade.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'TP15H',
    image: BASE + 'loft_mobiliado_goia%CC%82nia_206%2Ffoto_1.webp',
    price: 210,
    location: 'Setor Leste Vila Nova, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA 206 - G',
    description:
      'Quer se sentir em casa mesmo fora de casa? Temos quartos incríveis para alugar, que vão fazer você se sentir confortável e acolhido.',
    guests: 4,
    beds: 1,
  },
  {
    id: 'TP07H',
    image: BASE + 'loft_mobiliado_goia%CC%82nia_208%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Leste Vila Nova, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA 208 - P',
    description:
      'Abrace a simplicidade neste lugar tranquilo e bem-localizado. Espaço confortável e super aconchegante, próximo à 44 e a 15 minutos do aeroporto.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'TP01H',
    image: BASE + 'loft_mobiliado_goia%CC%82nia_301_m%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Leste Vila Nova, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA 301 - M',
    description:
      'Encontre quartos confortáveis e aconchegantes com todas as comodidades que precisa. Nossos quartos são espaçosos, bem decorados e equipados.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'TP11H',
    image: BASE + 'loft_mobiliado_goia%CC%82nia_303%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Leste Vila Nova, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA 303 - M',
    description:
      'Não precisa mais se preocupar com acomodações durante sua viagem! Aqui, você encontra quartos confortáveis e aconchegantes.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'TP03H',
    image: BASE + 'loft_mobiliado_goia%CC%82nia_304%2Ffoto_1.webp',
    price: 210,
    location: 'Setor Leste Vila Nova, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA 304 - G',
    description:
      'Quer se sentir em casa mesmo fora de casa? Temos quartos incríveis para alugar, totalmente equipados com mobília e roupa de cama.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'TP17H',
    image: BASE + 'loft_mobiliado_goia%CC%82nia_305%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Leste Vila Nova, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA 305 - M',
    description:
      'Sinta-se em casa durante a sua viagem, sem abrir mão da privacidade e liberdade que deseja. Projetado para o máximo em conforto e praticidade.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'TP14H',
    image: BASE + 'loft_mobiliado_goia%CC%82nia_307%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Leste Vila Nova, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA 307 - M',
    description:
      'Não precisa mais se preocupar com acomodações. Aqui, você encontra quartos confortáveis, espaçosos e bem decorados para relaxar e se sentir em casa.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'TP04H',
    image: BASE + 'loft_mobiliado_goia%CC%82nia_308%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Leste Vila Nova, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA 308 - P',
    description:
      'Encontre quartos confortáveis e aconchegantes com todas as comodidades que precisa para relaxar e se sentir em casa.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'FS02I',
    image: BASE + 'loft_mobiliado_goia%CC%82nia_02%2Ffoto_9.webp',
    price: 180,
    location: 'Setor Sudoeste, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA - 20',
    description:
      'Residência completa, oferecendo privacidade e conforto aos hóspedes, com acesso à Internet, televisão, ar condicionado e estacionamento.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'AE03J',
    image: BASE + 'apartamento_mobiliado_104%2Ffoto_1.webp',
    price: 210,
    location: 'Jardim América, Goiânia',
    title: 'APARTAMENTO MOBILIADO - 104',
    description:
      'O Jardim América é um dos bairros mais tradicionais e valorizados de Goiânia, conhecido por sua mistura de tranquilidade residencial e uma vibrante vida comercial.',
    guests: 3,
    beds: 1,
  },
  {
    id: 'DK01I',
    image: BASE + 'edificio_gervasio_01%2Ffoto_1.webp',
    price: 200,
    location: 'Setor Sudoeste, Goiânia',
    title: 'EDIFICIO GERVASIO - 01',
    description:
      'Residência completa, oferecendo privacidade e conforto aos hóspedes, com acesso à Internet, televisão, ar condicionado e estacionamento.',
    guests: 3,
    beds: 1,
  },
  {
    id: 'QT04I',
    image: BASE + 'loft_mobiliado_goiania_04%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Sudoeste, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA - 04',
    description:
      'Residência completa que oferece privacidade e conforto, com acesso à Internet, ar condicionado, e cozinha equipada em bairro tranquilo.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'AP03I',
    image: BASE + 'loft_mobiliado_goiania_05%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Sudoeste, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA - 05',
    description:
      'Residência completa com Internet, TV, ar condicionado e estacionamento em um bairro seguro e tranquilo.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'AP02I',
    image: BASE + 'loft_mobiliado_goiania_07%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Sudoeste, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA - 07',
    description:
      'Residência completa, oferecendo privacidade e conforto, com acesso à Internet, televisão e ar condicionado em bairro tranquilo.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'QT05I',
    image: BASE + 'loft_mobiliado_goiania_09%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Sudoeste, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA - 09',
    description:
      'Residência completa em bairro tranquilo, com acesso à Internet, ar condicionado e cozinha completa para uma estadia confortável.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'FS05I',
    image: BASE + 'loft_mobiliado_goiania_10%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Sudoeste, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA - 10',
    description:
      'Residência completa em bairro tranquilo e seguro, com ar condicionado, TV a cabo e cozinha equipada.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'QT06I',
    image: BASE + 'loft_mobiliado_goiania_15%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Sudoeste, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA - 15',
    description:
      'Residência completa e confortável, com Wi-Fi, ar condicionado e cozinha equipada em um bairro tranquilo e seguro.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'PH02I',
    image: BASE + 'loft_mobiliado_goiania_16%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Sudoeste, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA - 16',
    description:
      'Residência completa em bairro tranquilo, com acesso a todas as áreas, incluindo quarto, sala, cozinha e banheiro.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'PH03I',
    image: BASE + 'loft_mobiliado_goiania_18%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Sudoeste, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA - 18',
    description:
      'Residência completa em um bairro tranquilo e seguro, com ar condicionado, cozinha e Wi-Fi.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'PH05I',
    image: BASE + 'loft_mobiliado_goiania_22%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Sudoeste, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA - 22',
    description:
      'Bairro tranquilo e familiar, oferecendo segurança e conveniências locais para uma estadia confortável.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'FS04I',
    image: BASE + 'loft_mobiliado_goiania_23%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Sudoeste, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA - 23',
    description:
      'Residência completa em bairro seguro, com Wi-Fi, ar condicionado, TV e café da manhã incluso.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'TP10H',
    image: BASE + 'loft_mobiliado_goiania_302_p%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Leste Vila Nova, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA 302 - P',
    description:
      'Este lugar especial fica perto de tudo e é ideal para planejar sua visita. A poucos metros da 44 e a 15 minutos do aeroporto.',
    guests: 2,
    beds: 1,
  },
  {
    id: 'QT03I',
    image: BASE + 'loft_mobiliado_goiania_o3%2Ffoto_1.webp',
    price: 180,
    location: 'Setor Sudoeste, Goiânia',
    title: 'LOFT MOBILIADO GOIÂNIA - 03',
    description:
      'Residência completa, com Internet, TV a cabo, ar condicionado e estacionamento, ideal para uma estadia segura e confortável.',
    guests: 2,
    beds: 1,
  },
];
