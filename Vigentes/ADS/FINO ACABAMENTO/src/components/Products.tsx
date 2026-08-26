import { useState } from 'react';
import { Search, MessageCircle, X, ArrowRight, ArrowDown } from 'lucide-react';

// LISTA DE CATEGORIAS
const CATEGORIES = [
  'Todos',
  'Eliane',
  'Elizabeth',
  'Debacco',
  'Épiso',
  'Gart',
  'Gauss',
  'Obi',
  'Studio Vetro',
  'Vexa',
  'Arquitech',
  'E-home',
  'Grupo Linear Elleve',
  'Domestre'
];

// DADOS DAS IMAGENS
const portfolioItems = [
  // --- STUDIO VETRO ---
  { id: 101, category: 'Studio Vetro', title: 'Azulejo Axial', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F1%20-%20Studio%20Vetro%2FAzulejo-Axial-Studio-Vetro-2.png', alt: 'Studio Vetro' },
  { id: 102, category: 'Studio Vetro', title: 'Azulejo Bambu', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F1%20-%20Studio%20Vetro%2FAzulejo-Bambu-Studio-Vetro-2.png', alt: 'Studio Vetro' },
  { id: 103, category: 'Studio Vetro', title: 'Coleção Silhuetas', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F1%20-%20Studio%20Vetro%2FColecao-Silhuetas-Tons-Azuis-17-07-2025.png', alt: 'Studio Vetro' },
  { id: 104, category: 'Studio Vetro', title: 'Coleção Arco', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F1%20-%20Studio%20Vetro%2FIMAGEM_Colecao-Arco-1.png', alt: 'Studio Vetro' },
  { id: 105, category: 'Studio Vetro', title: 'Ambiente 90 Graus', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F1%20-%20Studio%20Vetro%2FIMAGENS-AMBIENTES_90o-1.png', alt: 'Studio Vetro' },
  { id: 106, category: 'Studio Vetro', title: 'Ambiente Andorinha', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F1%20-%20Studio%20Vetro%2FIMAGENS-AMBIENTES_Andorinha-1.png', alt: 'Studio Vetro' },

  // --- VEXA ---
  { id: 201, category: 'Vexa', title: 'Alameda Home Office', src: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=FINOACABAMENTO%2Fnovas%2F2%20-%20Vexa%2Fnew%2FAlameda%20-%20Home%20Office_1_11zon.jpg&version_id=null', alt: 'Vexa' },
  { id: 202, category: 'Vexa', title: 'Amazônia Coworking', src: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=FINOACABAMENTO%2Fnovas%2F2%20-%20Vexa%2Fnew%2FAmaz%C3%B4nia%20-%20Coworking_2.jpg&version_id=null', alt: 'Vexa' },
  { id: 203, category: 'Vexa', title: 'Jatobá Café', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F2%20-%20Vexa%2FJatoba%CC%81%20-%20Cafe%CC%81.jpg.jpeg', alt: 'Vexa' },
  { id: 204, category: 'Vexa', title: 'Marins Quarto', src: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=FINOACABAMENTO%2Fnovas%2F2%20-%20Vexa%2Fnew%2FMarins%20-%20Quarto%20-%20Vista%20Adicional_3_11zon.jpg&version_id=null', alt: 'Vexa' },
  { id: 205, category: 'Vexa', title: 'Travessa Infantil', src: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=FINOACABAMENTO%2Fnovas%2F2%20-%20Vexa%2Fnew%2FTravessa%20-%20Quarto%20Infantil_4_11zon.jpg&version_id=null', alt: 'Vexa' },
  { id: 207, category: 'Vexa', title: 'Vereda Living', src: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=FINOACABAMENTO%2Fnovas%2F2%20-%20Vexa%2Fnew%2FVereda%20-%20Living_5_11zon.jpg&version_id=null', alt: 'Vexa' },
  { id: 208, category: 'Vexa', title: 'Vértice Quarto', src: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=FINOACABAMENTO%2Fnovas%2F2%20-%20Vexa%2Fnew%2FV%C3%A9rtice%20-%20Quarto%20Casa_6.jpg&version_id=null', alt: 'Vexa' },

  // --- ARQUITECH ---
  { id: 301, category: 'Arquitech', title: 'Vinílico Chateau Decor Saumur', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F3%20-%20Arquitech%2FPiso%20Vin%C3%ADlico%2092x92%20Chateau%20Decor%20Saumur-%20Arquitech.jpg', alt: 'Arquitech' },
  { id: 302, category: 'Arquitech', title: 'Vinílico Chateau Decor Ussé', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F3%20-%20Arquitech%2FPiso%20Vin%C3%ADlico%2092x92%20Chateau%20Decor%20Uss%C3%A9%20-%20Arquitech.jpg', alt: 'Arquitech' },
  { id: 303, category: 'Arquitech', title: 'Lumiere Surprise', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F3%20-%20Arquitech%2FPiso%20Vin%C3%ADlico%20Arquitech%20Lumiere%20-%20Surprise.png', alt: 'Arquitech' },
  { id: 304, category: 'Arquitech', title: 'Rodapé Branco Slim', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F3%20-%20Arquitech%2FRodap%C3%A9%20Branco%20Slim%20Liso%2050910.jpg', alt: 'Arquitech' },
  { id: 305, category: 'Arquitech', title: 'Rodapé Frisado', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F3%20-%20Arquitech%2FRodap%C3%A9%20Frisado%2051015%20Branco.png', alt: 'Arquitech' },

  // --- E-HOME ---
  { id: 401, category: 'E-home', title: 'E-Home Showroom', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F4%20-%20E-Home%2FE-Home%20Showrrom.jpeg', alt: 'E-home' },
  { id: 402, category: 'E-home', title: 'Painel Ripado Teak Flow', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F4%20-%20E-Home%2FPAINEL%20RIPADO%20EXTERNO%20-%20TEAK%20FLOW%20.jpeg', alt: 'E-home' },
  { id: 403, category: 'E-home', title: 'Ripados Externos', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F4%20-%20E-Home%2FRipados%20Externos.jpeg', alt: 'E-home' },

  // --- GRUPO LINEAR ELLEVE ---
  { id: 501, category: 'Grupo Linear Elleve', title: 'Ralo Infinity PVC Luxo', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F5%20-%20Grupo%20Linear%20Elleve%2FRalo%20Linear%20Elleve%20Infinity%20PVC%20com%20Tampa%20Oculta%20-%20Luxo%20120cm.jpg', alt: 'Grupo Linear' },
  { id: 502, category: 'Grupo Linear Elleve', title: 'Ralo Smart Sifonado', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F5%20-%20Grupo%20Linear%20Elleve%2FRalo%20Linear%20Elleve%20Smart%20Sifonado%20Tampa%20Oculta%2070cm%20Linear.png', alt: 'Grupo Linear' },
  { id: 503, category: 'Grupo Linear Elleve', title: 'Ralo Linear Touch', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F5%20-%20Grupo%20Linear%20Elleve%2FRalo%20Linear%20Elleve%20Touch.jpg', alt: 'Grupo Linear' },
  { id: 504, category: 'Grupo Linear Elleve', title: 'Ralo Tampa Oculta Inox', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F5%20-%20Grupo%20Linear%20Elleve%2FRalo%20Linear%20Tampa%20Oculta%20Elleve%20Smart%2070cm%20Inox%20-%20Ralo%20Linear.png', alt: 'Grupo Linear' },

  // --- DOMESTRE ---
  { id: 601, category: 'Domestre', title: 'Rejuntes Siliconados', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F6%20-%20Domestre%2FRejuntes%20Siliconados.jpeg', alt: 'Domestre' },
  { id: 602, category: 'Domestre', title: 'Argamassa AC III Alta Performance', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F6%20-%20Domestre%2Fargamassa%20Branca%20Domestre%20AC%20III%20-%20Alta%20Performance.png', alt: 'Domestre' },
  { id: 603, category: 'Domestre', title: 'Argamassa AC II', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F6%20-%20Domestre%2Fargamassa%20Domestre%20AC%20II.png', alt: 'Domestre' },
  { id: 604, category: 'Domestre', title: 'Argamassa AC III', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F6%20-%20Domestre%2Fargamassa%20Domestre%20AC%20III.png', alt: 'Domestre' },

  // --- DEBACCO ---
  { id: 701, category: 'Debacco', title: 'Cooktop Zurique', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FDebacco%2F20.07.41209-Cooktop-Zurique-Ambientada-scaled-1.jpg', alt: 'Debacco' },
  { id: 703, category: 'Debacco', title: 'Cervejeira Beer Center', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FDebacco%2Fcervejeira_de_embutir_debacco_beer_center_85_litros_abertura_para_direita_220v_2_.png', alt: 'Debacco' },
  { id: 704, category: 'Debacco', title: 'Cuba Primaccore Nano Black', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FDebacco%2Fcuba-para-cozinha-debacco-primaccore-dupla-nano-black-2.jpg', alt: 'Debacco' },
  { id: 705, category: 'Debacco', title: 'Cuba Quadratino Reversível', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FDebacco%2Fcuba-para-cozinha-quadratino-reversivel-com-canal-450-debacco-3153.jpg', alt: 'Debacco' },
  { id: 706, category: 'Debacco', title: 'Cuba Funzionale', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FDebacco%2Fcuba_debacco_inox_funzionale_66cm_com_monocomando_e_aramado_2_.png', alt: 'Debacco' },
  { id: 707, category: 'Debacco', title: 'Cuba Quadratino Inox', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FDebacco%2Fcuba_para_cozinha_debacco_quadratino_600_inox_65x45_20.03.60400_2_.jpg', alt: 'Debacco' },

  // --- ELIANE ---
  { id: 801, category: 'Eliane', title: 'Munari Branco AC', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FEliane%2Fambiente-eliane-munari-branco-ac-90x90cm-projeto-marques-piumbini-arquitetura-amb04.jpg', alt: 'Eliane' },
  { id: 802, category: 'Eliane', title: 'Risca Corda Externa', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FEliane%2Feliane-fgmf-risca-corda-ext-7%2C3x60cm-fgmf-risca-corda-ext-60x120cm-fgmf-risca-corda-ext-30x120cm-fgmf-risca-corda-ext-14%2C8x120cm-poa-off-white-ac-90x90cm-amb01.jpg', alt: 'Eliane' },
  { id: 803, category: 'Eliane', title: 'Java Lago Mesh', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FEliane%2Feliane-isabela-de-andrade-java-lago-mesh-br-7%2C5x7%2C5cm-amb01.jpg', alt: 'Eliane' },
  { id: 804, category: 'Eliane', title: 'Neutral Marfim / Ardosia', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FEliane%2Feliane-neutral-marfim-mesh-br-7%2C5x7%2C5cm-cite-ita-ardosia-carbono-ma-90x90cm-amb01.jpg', alt: 'Eliane' },
  { id: 805, category: 'Eliane', title: 'Onyx Cristal', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FEliane%2Feliane-onix-cristal-ac-100x100cm-onix-cristal-po-100x100cm-amb01.jpg', alt: 'Eliane' },
  { id: 806, category: 'Eliane', title: 'Java Mar Mesh', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FEliane%2Feliane-piscina-cristina-da-luz-java-mar-mesh-br-7%2C5x7%2C5cm-foto-marcelo-donadussi-amb02.jpg', alt: 'Eliane' },
  { id: 807, category: 'Eliane', title: 'Prisma Greige', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FEliane%2Feliane-prisma-greige-mesh-br-7%2C5x7%2C5cm-sacara-gris-po-100x100cm-amb01.jpg', alt: 'Eliane' },
  { id: 808, category: 'Eliane', title: 'Prisma Off White', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FEliane%2Feliane-prisma-off-white-br-7x25cm-amb01.jpg', alt: 'Eliane' },

  // --- ELIZABETH ---
  { id: 901, category: 'Elizabeth', title: 'Torres / Piquiri', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FElizabeth%2Fambiente-elizabeth-torres-esm-acet-100x100cm-pipa-esm-pol-49x99cm-piquiri-esm-acet-100x100cm-foto-arturcurval-amb01.jpg', alt: 'Elizabeth' },
  { id: 902, category: 'Elizabeth', title: 'Aurora Polido', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FElizabeth%2Felizabeth-aurora-po-101x101cm-amb01.jpg', alt: 'Elizabeth' },
  { id: 903, category: 'Elizabeth', title: 'Bianco Master', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FElizabeth%2Felizabeth-bianco-master-tecn-pol-60x60cm-amb01.jpg', alt: 'Elizabeth' },
  { id: 904, category: 'Elizabeth', title: 'Cristal Cinza', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FElizabeth%2Felizabeth-cristal-cinza-po-101x101cm-amb01.jpg', alt: 'Elizabeth' },
  { id: 905, category: 'Elizabeth', title: 'Itajaí Cerejeira', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FElizabeth%2Felizabeth-itajai-cerejeira-esm-acet-19%2C7x120cm-palha-branco-esm-acet-60x120cm-amb01%20%281%29.jpg', alt: 'Elizabeth' },
  { id: 906, category: 'Elizabeth', title: 'Memorial Brasília', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FElizabeth%2Felizabeth-memorial-esm-acet-19%2C7x120cm-brasilia-esm-acet-100x100cm-amb01.jpg', alt: 'Elizabeth' },
  { id: 907, category: 'Elizabeth', title: 'Pietra de Bergamo', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FElizabeth%2Felizabeth-pietra-de-bergamo-ac-101x101cm-itajai-amber-ac-62%2C5x125cm-tasos-21x21cm-ac-amb01.jpg', alt: 'Elizabeth' },
  { id: 908, category: 'Elizabeth', title: 'Senda / Ripado Rocha', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FElizabeth%2Felizabeth-senda-po-101x101cm-ripado-rocha-ext-62%2C5x125cm-amb01%20%281%29.jpg', alt: 'Elizabeth' },

  // --- GART ---
  { id: 1001, category: 'Gart', title: 'Sala BBB24', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FGart%2FGART_BBB24%20SALA%202.jpg', alt: 'Gart' },
  { id: 1002, category: 'Gart', title: 'Canele L e S', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FGart%2FGART_Canele%20L%20e%20S%20%281%29.jpg', alt: 'Gart' },
  { id: 1003, category: 'Gart', title: 'Perfil IL10 + Rodameio', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FGart%2FPerfil%20IL10%2BRodameio%20S2.jpg', alt: 'Gart' },
  { id: 1004, category: 'Gart', title: 'Perfil IL11 + Rodateto', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FGart%2FPerfil%20IL11%2BRodateto%20M1.jpg', alt: 'Gart' },
  { id: 1006, category: 'Gart', title: 'Rodameios S2 + IL12', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FGart%2FRodameios%20S2%2BIL12.jpg', alt: 'Gart' },
  { id: 1007, category: 'Gart', title: 'Rodameios S4 + S2', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FGart%2FRodameios%20S4%2BS2%2BRodap%C3%A9%20FZ20.jpg', alt: 'Gart' },
  { id: 1008, category: 'Gart', title: 'Rodateto A2', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FGart%2FRodateto%20A2.jpg', alt: 'Gart' },
  { id: 1009, category: 'Gart', title: 'Rodateto F', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FGart%2FRodateto%20F_Ambientada_Full.jpg', alt: 'Gart' },

  // --- GAUSS ---
  { id: 1101, category: 'Gauss', title: 'Interior Moderno', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FGauss%2Finterior-moderno-capa.jpg', alt: 'Gauss' },
  { id: 1102, category: 'Gauss', title: 'Interiores Casa Moderna', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FGauss%2Finteriores-de-casa-moderna-15.jpg', alt: 'Gauss' },
  { id: 1103, category: 'Gauss', title: 'Design Moderno', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FGauss%2Finteriores-de-casas-modernas.jpg', alt: 'Gauss' },
  { id: 1104, category: 'Gauss', title: 'Ambiente Gauss', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FGauss%2Fmoderna.jpg', alt: 'Gauss' },
  { id: 1105, category: 'Gauss', title: 'Revestimento Cinza', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FGauss%2Frevestimento-cinza-01-2.jpg.webp', alt: 'Gauss' },

  // --- OBI ---
  { id: 1201, category: 'Obi', title: 'Ambiente Obi 1', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FObi%2F1640635201008-f7ddd4335e7d32927f17207111289703-1024-1024.jpg', alt: 'Obi' },
  { id: 1202, category: 'Obi', title: 'Ambiente Obi 2', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FObi%2F64a78657-d79c-43e6-89e2-0b2212323ccd.jpg', alt: 'Obi' },
  { id: 1203, category: 'Obi', title: 'Ambiente Obi 3', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FObi%2F6f9a11bf-b818-4d30-ad75-36a2f9d2d2d6.jpg', alt: 'Obi' },
  { id: 1204, category: 'Obi', title: 'Detalhe Obi', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FObi%2FCaptura%20de%20tela%202025-07-22%20115613.png', alt: 'Obi' },
  { id: 1205, category: 'Obi', title: 'Detalhe Obi 2', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FObi%2FCaptura%20de%20tela%202025-07-22%20120332.png', alt: 'Obi' },
  { id: 1206, category: 'Obi', title: 'Ambiente Obi 4', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FObi%2FWhatsApp%20Image%202025-03-11%20at%2016.29.50%20%281%29.jpeg', alt: 'Obi' },
  { id: 1207, category: 'Obi', title: 'Ambiente Obi 5', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2FObi%2FWhatsApp%20Image%202025-03-11%20at%2016.29.51.jpeg', alt: 'Obi' },
  

  // --- ÉPISO ---
  { id: 1301, category: 'Épiso', title: 'Modelo AFF7003', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F%C3%89piso%2FAFF7003.jpg', alt: 'Épiso' },
  { id: 1302, category: 'Épiso', title: 'Ambiente Épiso', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F%C3%89piso%2FIMG_1850-773x1030.jpeg', alt: 'Épiso' },
  { id: 1303, category: 'Épiso', title: 'Private Investimento', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F%C3%89piso%2FPrivate-Investimento-UrbanHaus5-773x1030.jpeg', alt: 'Épiso' },
  { id: 1304, category: 'Épiso', title: 'Urban House EcoCorp', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F%C3%89piso%2FUrban-House-Episo-EcoCorp-Fran%C3%A7a-1030x687.jpg', alt: 'Épiso' },
  { id: 1305, category: 'Épiso', title: 'Urban House Detalhe', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F%C3%89piso%2FUrban-House-Episo-EcoCorp-Fran%C3%A7a3-1030x687.jpg', alt: 'Épiso' },
  { id: 1306, category: 'Épiso', title: 'Modelo 5574', src: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2F%C3%89piso%2Fepiso-5574-1030x687.jpg', alt: 'Épiso' },
];

export default function Catalogos() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(9); // Começa mostrando 9 itens

  // 1. Filtragem Completa
  const allFilteredItems = portfolioItems.filter((item) => {
    const matchesCategory = activeCategory === 'Todos' || item.category === activeCategory;
    
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      item.title.toLowerCase().includes(query) || 
      item.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  // 2. Paginação (Mostra apenas 'visibleCount' itens)
  const itemsToShow = allFilteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < allFilteredItems.length;

  // Função para carregar mais itens
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  // Resetar visualização ao trocar categoria ou buscar
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(9);
    setSearchQuery('');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setVisibleCount(9); // Reseta paginação na busca
  };

  const clearSearch = () => {
    setSearchQuery('');
    setActiveCategory('Todos');
    setVisibleCount(9);
  };

  return (
    <section id="catalogos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 tracking-tight">
            Catálogos e Ambientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Explore nossa coleção exclusiva. Use os filtros abaixo ou pesquise pelo nome.
          </p>

          {/* BARRA DE PESQUISA */}
          <div className="relative max-w-lg mx-auto mb-10">
            <div className="relative group">
              <input
                type="text"
                placeholder="Ex: Alameda, Metrô White..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-10 py-4 rounded-full border border-gray-300 focus:border-black focus:ring-1 focus:ring-black shadow-sm outline-none transition-all text-gray-800 placeholder-gray-400 group-hover:shadow-md"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filtro de Categorias */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap border
                ${activeCategory === category
                  ? 'bg-black text-white border-black shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-black hover:text-black hover:shadow-sm'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de Resultados */}
        {itemsToShow.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {itemsToShow.map((item) => (
                <div 
                  key={item.id} 
                  className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  {/* Imagem com Zoom */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = '<div class="flex items-center justify-center h-full text-gray-400 text-sm">Imagem indisponível</div>';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  
                  {/* Conteúdo do Card */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="mb-4">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                        {item.category}
                      </p>
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    {/* Botão Personalizado do WhatsApp */}
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <a
                        href={`https://wa.me/5581992928284?text=Olá, tudo bem? Gostaria de saber mais sobre o ${encodeURIComponent(item.title)}!`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gray-50 hover:bg-[#25D366] text-gray-700 hover:text-white rounded-lg font-medium transition-all duration-300 group/btn"
                      >
                        <MessageCircle size={18} />
                        <span>Consultar Disponibilidade</span>
                        <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* BOTÃO VER MAIS (Aparece só se tiver mais itens) */}
            {hasMore && (
              <div className="mt-12 text-center">
                <button
                  onClick={handleLoadMore}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  Carregar Mais Produtos
                  <ArrowDown size={18} />
                </button>
                <p className="text-sm text-gray-400 mt-3">
                  Exibindo {visibleCount} de {allFilteredItems.length} produtos
                </p>
              </div>
            )}
          </>
        ) : (
          
          /* --- FALLBACK (SEM RESULTADOS) --- */
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-10 md:p-14 text-center border border-gray-200 shadow-xl animate-fade-in-up">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="text-gray-300" size={40} />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ops! Não encontramos "{searchQuery}"
            </h3>
            
            <p className="text-gray-500 mb-8 leading-relaxed max-w-md mx-auto">
              Nosso catálogo online é uma amostra. Temos milhares de produtos na loja física e catálogos completos em PDF.
            </p>

            <a
              href={`https://wa.me/5581992928284?text=Olá, procurei por "${searchQuery}" no site e não encontrei. Poderia me ajudar a encontrar?`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 group w-full sm:w-auto"
            >
              <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
              Falar com Consultor Agora
            </a>
            
            <button 
              onClick={clearSearch}
              className="block w-full mt-6 text-sm text-gray-400 hover:text-gray-600 underline"
            >
              Limpar busca e ver tudo
            </button>
          </div>
        )}
      </div>
    </section>
  );
}