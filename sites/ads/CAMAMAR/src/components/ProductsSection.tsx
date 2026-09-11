import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowLeft, Check, ChevronLeft, ChevronRight, Package, X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import parafuso from "@/assets/parafuso_auto_perfurante.png";
import ancoragemMecanica from "@/assets/ancoragem_mecanica.png";
import ancoragemQuimica from "@/assets/produto-ancoragem-quimica.png";
import policarbonatos from "@/assets/produto-policarbonatos.png";
import acessoriosTelhas from "@/assets/produto-acessorios-telhas.png";
import vedacao from "@/assets/produto-vedacao.png";
import ArruelaNeobond from "@/assets/ArruelaNeobond.png";
import fitaEpdm from "@/assets/fitaEPDM.jpeg";
import gaxetaBase from "@assets/gaxetaBase.png";
import perfilBarraChata from "@assets/perfilBarraChata.png";
import parafusoProduct from "@/assets/parafusoProduct.png";
import fitaAluminio from "@/assets/fitaAluminio.png";
import aluminioNaturalTrapezio from "@/assets/aluminioNaturalTrapezio.png";
import guarnicao from "@/assets/guarnicao.jpeg";
import selanteuniversal440g from "@/assets/selante-universal440g.jpeg";
import selante900gr from "/produtos/selante-900gr.png";
import porosa from "@/assets/Porosa.png";
const chapaAlveolarImages = Array.from(
  { length: 10 },
  (_, i) => `/produtos/chapa-alveolar-${i + 1}.jpeg`,
);

const chapaCompactaImages = Array.from(
  { length: 5 },
  (_, i) => `/produtos/chapa-compacta-${i + 1}.jpg`,
);

const chapaRefletivaImages = Array.from(
  { length: 10 },
  (_, i) => `/produtos/chapa-refletiva-${i + 1}.jpeg`,
);

const venezianasImages = Array.from(
  { length: 5 },
  (_, i) => `/produtos/venezianas-industriais-${i + 1}.jpg`,
);


const WHATSAPP = "https://wa.me/5562982972917";

type Product = {
  code: string;
  name: string;
  description: string;
  features: string[];
  image: string;
  images?: string[];
};

type Subcategory = {
  name: string;
  products: Product[];
};

type Category = {
  title: string;
  desc: string;
  image: string;
  subtitle: string;
  subcategories: Subcategory[];
};

const mk = (image: string, code: string, name: string, description: string, features: string[]): Product => ({
  code,
  name,
  description,
  features,
  image,
});

const categories: Category[] = [
  {
    title: "PARAFUSO AUTO PERFURANTE",
    desc: "O parafuso auto perfurante não necessita de um pré furo, dispensa porca e já vem com arruela de vedação.",
    image: parafuso,
    subtitle: "Fixadores autoperfurantes para telhas e estruturas metálicas",
    subcategories: [
      {
        name: "Parafuso Autoperfurante",
        products: [
          mk(parafusoProduct, "CAM-001", "Parafuso Auto Perfurante Ponta Broca 4,2x19", "Parafuso para coberturas em policarbonato vai depender da estrutura de apoio. Se for para estrutura de aço, o recomendado é o PB 12-14x1.1/4 (ponta broca). Se for para estrutura de madeira (pergolado), o recomendado é o Woodtite 4,8x38 (ponta agulha).\n\nOs parafusos autoperfurantes são fabricados com revestimento Ecoseal, garantindo alta durabilidade. Possuem ponta broca super bit para alta velocidade de furação e design exclusivo para vedação perfeita.\n\n* Rápida instalação: A ponta broca superbit proporciona instalação 4x mais rápida que outros do mercado.\n* Cobertura sem goteiras: Cabeça flangeada com design DUH aloja perfeitamente a arruela EPDM e absorve até 10° de inclinação sem risco de vazamento.\n* Alta durabilidade: Revestimento Ecoseal® aplicado em 6 etapas, garantindo resistência à corrosão e intempéries.", ["Aço carbono zincado", "Arruela de vedação EPDM", "Cabeça sextavada", "Dispensa pré-furo"]),
        ],
      },
    ],
  },
  {
    title: "ANCORAGEM MECÂNICA",
    desc: "Confira mais sobre a Ancoragem Mecânica Não Expansiva da Camamar.",
    image: ancoragemMecanica,
    subtitle: "Sistemas de fixação mecânica em concreto e alvenaria",
    subcategories: [
      {
        name: "Chumbador Parabolt",
        products: [
          mk(ancoragemMecanica, "CAM-101", "Chumbador Parabolt 1/2'' x 4''", "Chumbador de expansão para fixação pesada em concreto.", ["Alta resistência ao arrancamento", "Aço zincado", "Indicado para concreto C20+"]),
        ],
      },
      {
        name: "Ancoragem Não Expansiva",
        products: [
          mk(ancoragemMecanica, "CAM-102", "Ancoragem Mecânica Não Expansiva M12", "Sistema patenteado sem expansão, ideal para borda de laje.", ["Sem tensão na peça", "Permite reaperto", "Aço galvanizado"]),
        ],
      },
    ],
  },
  {
    title: "ANCORAGEM QUÍMICA",
    desc: "Utilizada por aplicação de cargas e fixação de aço e estruturas de concreto.",
    image: ancoragemQuimica,
    subtitle: "Resinas e barras roscadas para fixação química",
    subcategories: [
      {
        name: "Aplicadores",
        products: [
          mk(ancoragemQuimica, "CAM-201", "Resina Epóxi Bicomponente 410ml", "Resina química de alta performance para fixação em concreto fissurado e não fissurado.", ["Cura rápida", "Livre de estireno", "Bisnaga 410ml"]),
        ],
      },
      {
        name: "Bomba Sopradora",
        products: [
          mk(ancoragemQuimica, "CAM-202", "Bomba Sopradora", "Barra roscada para uso com resinas químicas.", ["Classe 5.8", "Zincada eletrolítica", "Rosca métrica"]),
        ],
      },
      {
        name: "Chumbadores Químicos",
        products: [
          mk(ancoragemQuimica, "CAM-202", "Chumbadores Químicos", "Os chumbadores químicos são sistemas de ancoragem de alto desempenho usados para fixar barras roscadas ou vergalhões em concreto e alvenaria. Diferente dos modelos mecânicos, eles utilizam resinas (como epóxi ou viniléster) para aderir perfeitamente ao furo, transferindo cargas extremas sem causar expansão ou danificar o material base. Resina de Injeção (Poliéster, Viniléster ou Epóxi): Aplicada com pistola aplicadora e bico misturador. Preenche todo o espaço vazio e é ideal para bases maciças ou ocas. Quando utilizar: Cargas pesadas, dinâmicas ou que exigem altíssima resistência (máquinas, vigas, pontes rolantes).Fixações próximas às bordas do concreto.Instalações em blocos cerâmicos ou bases ocas (com o uso de camisas ou telas).Ancoragem de vergalhões em emendas de estruturas. Passo a passo da aplicação: ", ["Furação: Faça o furo no diâmetro e profundidade de acordo com seu projeto.", "Limpeza (Crucial): Remova todo o pó e detritos do interior do furo usando uma escova e bomba de ar ou soprador. Isso garante que a resina cole no concreto, e não na poeira.", "Aplicação: Injete o produto do fundo para a boca do furo para evitar a formação de bolhas de ar.", "Inserção: Introduza a barra roscada com um leve movimento de rotação.", " Cura: Respeite o tempo de secagem indicado pelo fabricante (que varia conforme a temperatura ambiente) antes de aplicar carga ou apertar a porca."]),
        ],
      },
      {
        name: "Escovas de aço",
        products: [
          mk(ancoragemQuimica, "CAM-202", "Escovas de aço", "Barra roscada para uso com resinas químicas.", ["Classe 5.8", "Zincada eletrolítica", "Rosca métrica"]),
        ],
      },
      {
        name: "Camisas Plásticas",
        products: [
          mk(ancoragemQuimica, "CAM-202", "Camisas Plásticas", "Barra roscada para uso com resinas químicas.", ["Classe 5.8", "Zincada eletrolítica", "Rosca métrica"]),
        ],
      },
      {
        name: "Barras Roscadas",
        products: [
          mk(ancoragemQuimica, "CAM-202", "Barra Roscada", "Barra roscada para uso com resinas químicas.", ["Classe 5.8", "Zincada eletrolítica", "Rosca métrica"]),
        ],
      },
    ],
  },
  {
    title: "POLICARBONATO",
    desc: "Material leve, resistente e versátil, utilizado na fabricação de diversas coberturas.",
    image: policarbonatos,
    subtitle: "Chapas, telhas e acessórios em policarbonato",
    subcategories: [
      {
        name: "Acessórios",
        products: [
          mk(ArruelaNeobond, "CAM-301", "Arruela Neobond Alumínio", "Arruelas metálicas com EPDM vulcanizado", ["Borracha de EPDM com alta resistência a intemperies", "Arruela metálica confeccionada em aço galvanizado, aço inox ou alumínio", "Borracha de EPDM de alta pureza. Teor de cinzas menor ou igual a 2,5%"]),
          mk(fitaAluminio, "CAM-302", "Fita Alumínio", "A fita alumínio é essencial na instalação de chapas de policarbonato alveolar para vedar a parte superior (topo) da chapa, impedindo a entrada de água, poeira e insetos nos alvéolos. Ela garante a durabilidade e a estética da cobertura, evitando mofo e sujeira interna, geralmente vendida em rolos de 30m de comprimento e 25mm de largura.", ["Fechamento dos alveólos", "Fácil instalação (fita adesivada)", "Aumento da vida útil da chapa"]),
          mk(porosa, "CAM-303", "Fita Porosa", "A fita porosa (ou respirante) para policarbonato é essencial para o selamento inferior de chapas alveolares. Ela permite que o material transpire, dissipando a umidade interna (condensação) e prevenindo fungos, ao mesmo tempo que bloqueia a entrada de sujeira, pó e pequenos insetos. Geralmente vendida em rolos de 25 a 50m de comprimento por 25mm de largura.", ["Fechamento dos alveólos", "Fácil instalação (fita adesivada)", "Aumento da vida útil da chapa"]),
          mk(fitaEpdm, "CAM-303", "Fita EPDM", "A fita EPDM (borracha de etileno-propileno-dieno monômero) é uma fita adesiva de espuma emborrachada de células fechadas, amplamente utilizada para vedação, isolamento termoacústico e amortecimento de impactos em ambientes internos e externos. Sua principal vantagem é a altíssima resistência a intempéries, raios UV, ozônio e variações extremas de temperatura. Principais aplicações:", ["Vedar a cobertura em policarbonato, prevenindo goteiras, vazamentos e ruídos de trepidação.", "Evitar o atrito da estrutura metálica com a chapa de policarbonato", "Permitir a dilatação da chapa (movimentação)."]),
          mk(gaxetaBase, "CAM-303", "Gaxeta", "A gaxeta é uma borracha de epdm, resistente aos raios UV, e tem como principal função realizar a vedação estanque entre a chapa e o perfil de fixação (alumínio), impedindo infiltrações de água, passagem de ar e entrada de sujeira, ao mesmo tempo que permite a dilatação térmica natural do material. Outras funções incluem: * Vedação e Impermeabilização: Evita o retorno de água e veda a estrutura contra chuvas. * Permissão de Dilatação: O policarbonato expande e contrai com as variações de temperatura. A gaxeta segura a chapa com firmeza, mas com flexibilidade, evitando que ela rache ou faça barulhos durante a movimentação.* Fixação Firme e Segura: Encaixa-se nos perfis garantindo um acabamento profissional e evitando que as chapas saiam do lugar. * Amortecimento de Vibrações: A borracha flexível atua como um amortecedor, reduzindo vibrações provocadas pelo vento. As gaxetas são essenciais em coberturas, fachadas, toldos e fechamentos laterais, garantindo durabilidade ao policarbonato por não ressecarem facilmente com a exposição ao tempo.", ["Design diferenciado para proporcionar excelente vedação em sua cobertura"]),
          mk(guarnicao, "CAM-304", "Guarnição", "A guarnição de borracha EPDM é um componente essencial na instalação de coberturas e fechamentos de policarbonato, com a função primária de vedação estanque contra água, poeira e vento. Ela acomoda o material em perfis de alumínio, permitindo a dilatação térmica sem causar rachaduras. Principais Funções e Vantagens:", ["Vedação: Impede infiltrações de água e sujeira entre as chapas de policarbonato e a estrutura.", "Resistência às Intempéries: O EPDM suporta alta exposição ao ozônio, raios UV, oxidação e variações extremas de temperatura.", "Dilatação Térmica: Flexível, absorve os movimentos de expansão e contração do policarbonato sob o sol, evitando tensões que quebrariam o material."]),
          mk(parafusoProduct, "CAM-305", "Parafuso Autoperfurante", "O parafuso ideal para coberturas em policarbonato depende da estrutura de apoio.\n\n• Para estruturas de aço, recomenda-se o PB 12-14x1.1/4 ou PB 12-14x1.1/2 com ponta broca.\n\n• Para estruturas de madeira (pergolados), recomenda-se o Woodtite 4,8x38 com ponta agulha.\n\nOs parafusos autoperfurantes possuem revestimento Ecoseal, garantindo maior durabilidade para a obra, além de contarem com ponta broca Super Bit para alta velocidade de furação e design exclusivo que proporciona vedação eficiente da cobertura.", ["Rápida instalação: A ponta broca superbit proporciona a instalação do parafuso 4x mais rápida que outros do mercado.", "Cobertura sem goteiras: Cabeça flangeada com design DUH aloja perfeitamente a arruela EPDM e absorve até 10° de inclinação sem risco de vazamento.", "Alta durabilidade: Exclusivo revestimento Ecoseal® em toda a superfície do fixador, garantindo maior durabilidade para a sua obra. Este revestimento é aplicado em 6 etapas, aumenta a longevidade e atua como isolante, garantindo assim alta resistência à corrosão e a intempéries."]),
          mk(perfilBarraChata, "CAM-306", "Perfil Alumínio Natural Barra Chata", "O perfil barra chata de alumínio é um dos componentes mais práticos para a união, fixação e emenda de chapas de policarbonato (tanto alveolares quanto compactas). Ele atua pressionando as chapas contra a estrutura metálica ou de madeira, garantindo uma montagem firme, alinhada e com excelente acabamento estético", ["União das chapas", "50mm espessura e 6m comprimento", "Utilizar com gaxeta e guarnição"]),
          mk(aluminioNaturalTrapezio, "CAM-307", "Perfil Alumínio Natural Trapézio", "O perfil união trapézio de alumínio é utilizado para junção, fixação e vedação de chapas de policarbonato em coberturas.\n\nCaracterísticas:\n* Material: Alumínio estrutural de alta durabilidade, imune a ferrugem e oxidação.\n* Medidas: Barras de 6 metros, larguras de 50 mm ou 70 mm.\n* Acabamentos: Alumínio natural anodizado, branco ou preto.\n* Vedação: Funciona em conjunto com gaxetas de borracha EPDM, que absorvem a dilatação térmica e impedem infiltrações.\n\nInstalação: As chapas são posicionadas com folga de 10 mm entre elas, o perfil é encaixado por cima com as gaxetas nas abas laterais e fixado com parafusos autobrocantes a cada 25–30 cm.", ["União das chapas", "50mm espessura e 6m comprimento", "Utilizar com gaxeta e guarnição"]),
          mk(selante900gr, "CAM-308", "Embalagem Cartucho - 900GR", "Adesivo e selante híbrido de silicone poliuretano, o SMP 340 Universal é um produto versátil, indicado para vedação entre diversos materiais da construção civil. Formulado para proporcionar elevada durabilidade, também pode ser pintado e aplicado sobre superfícies úmidas.", ["Durabilidade e resistência: Os aditivos Anti UV-B presentes na composição do SMP 340, proporcionam um selante com elevada durabilidade ao tempo e aos agentes climáticos.", "A obra não para depois da chuva: O alto percentual de polímeros base em sua composição permitem que o produto possa ser aplicado sobre superfícies úmidas, evitando que você tenha que esperar o sol aparecer para secar a obra.", "Versatilidade para sua obra: Desenvolvido em médio módulo de elasticidade para atender os mais variados coeficientes de dilatação dos materiais de construção civil. Desta forma permite a vedação entre elementos diferente, como concreto, alumínio, madeira, aço, mármores, granitos, cerâmicas e pvc."]),
          mk(selanteuniversal440g, "CAM-309", "Embalagem Cartucho - 440gr", "Adesivo e selante híbrido de silicone poliuretano, o SMP 340 Universal é um produto versátil, indicado para vedação entre diversos materiais da construção civil. Formulado para proporcionar elevada durabilidade, também pode ser pintado e aplicado sobre superfícies úmidas.", ["Durabilidade e resistência: Os aditivos Anti UV-B presentes na composição do SMP 340, proporcionam um selante com elevada durabilidade ao tempo e aos agentes climáticos.", "A obra não para depois da chuva: O alto percentual de polímeros base em sua composição permitem que o produto possa ser aplicado sobre superfícies úmidas, evitando que você tenha que esperar o sol aparecer para secar a obra.", "Versatilidade para sua obra: Desenvolvido em médio módulo de elasticidade para atender os mais variados coeficientes de dilatação dos materiais de construção civil. Desta forma permite a vedação entre elementos diferente, como concreto, alumínio, madeira, aço, mármores, granitos, cerâmicas e pvc."]),
          mk("/produtos/perfil-u-de-aluminio.jpg", "CAM-310", "Perfil U de Acabamento 6mm", "Perfil de alumínio para acabamento de chapas alveolares.", ["Alumínio anodizado", "Vedação completa"]),
          

        ],
      },
      {
        name: "Chapas Alveolares Convencionais",
        products: [
          {
            code: "CAM-310",
            name: "Chapas Alveolares Convencionais",
            image: chapaAlveolarImages[0],
            images: chapaAlveolarImages,
            description:
              "A CAMAMAR tem as melhores soluções em policarbonato para o ideal aproveitamento da luz natural. Temos uma linha completa de chapas e acessórios desenvolvidos para sua instalação correta, mais ágil e eficiente. Os produtos são fabricados com moderníssima tecnologia de produção para assegurar a alta qualidade dos mesmos. Resistência, beleza e funcionalidade com interessantes efeitos de luz. CONFIRA!\n\nPolicarbonato é um produto translúcido à base de polímeros de plástico extrudado a alta temperatura, termoplástico, ou seja, amolece quando aquecido e endurece quando resfriado, permitindo que se façam curvas sem nenhuma emenda, desde que observados os limites do produto.",
            features: [
              "Alta resistência a impactos (250 vezes maior que o vidro)",
              "Elevado índice de transmissão luminosa",
              "Eficiente isolamento térmico",
              "Leves (80% mais leves que o vidro), exigindo estruturas mais leves e de menor custo",
              "Podem ser cortadas e curvadas a frio na própria obra",
              "Economia sensível de energia (aproveitamento da luz natural)",
              "Autoextinguíveis e não liberam gases tóxicos (ABNT/NBR9441-ASTME 1621981 e UL-94 classificação HB)",
              "Resistência a altas e baixas temperaturas (de -40°C até 130°C)",
              "Tratamento anti-UV",
            ],
          },
        ],
      },
      {
        name: "Chapas Alveolares Refletivas",
        products: [
          {
            code: "CAM-320",
            name: "Chapas Alveolares Refletivas",
            image: chapaRefletivaImages[0],
            images: chapaRefletivaImages,
            description:
              "Refletem a luz natural incidente, reduzindo a transmissão de calor para o ambiente interno. São largamente utilizadas em projetos onde se quer o aproveitamento da luz natural com a redução de transmissão de calor para o ambiente.\n\nCom uma camada refletiva extrudada na face externa da chapa, aumenta a reflexão da luminosidade externa, reduzindo com eficiência o índice de transmissão de calor para o ambiente interno.\n\nVANTAGENS\n• Elevada transmissão luminosa;\n• Ótimo índice de reflexão da luminosidade externa, reduzindo a transmissão de calor para o ambiente interno;\n• Bloqueio de 100% dos raios UV (ultravioleta);\n• Garantia contra o amarelamento, perda da transmissão de luz e perda da resistência;\n• Maior conforto térmico em relação à chapa alveolar convencional;\n• São leves, de fácil instalação e podem ser curvadas a frio na obra;\n• Redução sensível no custo de refrigeração do ambiente e nos gastos com iluminação.\n\nPRINCIPAIS APLICAÇÕES\nPara cobertura, fachadas, entradas, túneis e passarelas em:\n• Shopping centers;\n• Aeroportos;\n• Projetos industriais, comerciais e residenciais;\n• Escolas, universidades, igrejas;\n• Terminais rodoviários e ferroviários (Metrô);\n• Clubes, academias, estádios;\n• Hotéis, resorts e complexos hoteleiros;\n• Galpões industriais;\ne onde se deseja o aproveitamento da luz natural com menor índice de transmissão térmica para o ambiente interior.\n\nIdeais para coberturas e fachadas, onde se deseja a luz natural com maior conforto térmico!\n\nINSTALAÇÃO\nPara o cálculo das medidas de apoio e fixação, utilizar números múltiplos de largura e/ou do comprimento da chapa para economizar chapas e reduzir tempo de instalação e mão de obra.\n\nO lado da chapa a ser exposto ao sol (lado anti-UV) é devidamente identificado. As chapas alveolares podem ser cortadas e furadas com ferramentas comuns: estilete (preferencialmente), serra circular e tico-tico.\n\nNo caso de instalações curvas, as chapas alveolares são curvadas a frio (obedecer mínimo de curvatura). Após o corte e/ou a furação, utilizar jatos de ar para limpar as câmaras dos resíduos e retirar as rebarbas. Os alvéolos devem correr sempre no mesmo sentido do caimento de água.\n\nAs películas de proteção das chapas devem ser mantidas durante a instalação, retire-as apenas nas áreas de engastamento. Após a instalação, retire o restante das películas de proteção.",
            features: [
              "Camada refletiva extrudada que reduz a transmissão de calor",
              "Elevada transmissão luminosa com maior conforto térmico",
              "Bloqueio de 100% dos raios UV (ultravioleta)",
              "Garantia contra amarelamento e perda de resistência",
              "Leves, fáceis de instalar e curváveis a frio na obra",
              "Reduz custos de refrigeração e iluminação do ambiente",
              "Ideais para coberturas, fachadas, passarelas e entradas",
            ],
          },
        ],
      },
      {
        name: "Chapas Compactas",
        products: [
          {
            code: "CAM-330",
            name: "Chapas Compactas",
            image: chapaCompactaImages[0],
            images: chapaCompactaImages,
            description:
              "A chapa de Policarbonato Compacto constitui um material praticamente inquebrável. Sua grande resistência ao impacto proporciona eficaz proteção anti-roubo, somada a uma excelente transmissão luminosa, sendo a opção ideal para proteção contra vandalismo, coberturas e janelas. Sua aplicação evita os elevados custos de substituição dos vidros partidos, bem como os danos causados pelos estilhaços.\n\nOferece proteção sem igual para pessoas e bens e liberdade arquitetônica virtualmente ilimitada — pode ser curvada a frio, possibilitando aplicações em claraboias, passarelas, abóbadas e todo tipo de recinto onde se deseje uma cobertura transparente. É muito mais leve que o vidro e proporciona bom isolamento térmico, gerando economia adicional em aquecimento e ar condicionado.\n\nRESISTÊNCIA À RADIAÇÃO ULTRAVIOLETA\nPossui superfície especialmente concebida contra radiação U.V., protegendo o material contra o envelhecimento, o amarelecimento e a perda de transmissão luminosa, garantindo a conservação das propriedades óticas mesmo sob exposição intensa à radiação solar.\n\nPROPRIEDADES EM FUNÇÃO DA TEMPERATURA\nConservam suas características mecânicas em uma larga faixa de temperaturas — por exemplo, mantêm 85% do módulo de flexão de temperatura ambiente quando submetidas a 82°C.\n\nRESISTÊNCIA AO IMPACTO\nAbsorvem energia de forma excepcional: suportam marteladas sem partir nem abrir fendas, oferecendo proteção contra vandalismo e tentativas de roubo, mesmo em temperaturas tão baixas quanto -40°C.\n\nMATERIAL LEVE\nDensidade de apenas 1,2 — comparada ao vidro de mesma espessura, representa redução de peso da ordem de 50%, com vantagens significativas em transporte, manipulação, instalação e estruturas mais leves.\n\nPRECAUÇÕES\n• Não empregar produtos de limpeza abrasivos nem altamente alcalinos.\n• Não usar Butilo Celuloso nem Isopropanol na superfície protetora.\n• Não lavar as chapas quando a temperatura ambiente for muito elevada (sol forte).\n• Não aplicar esforços físicos nas chapas e estruturas sem orientação prévia.\n\nDIMENSÕES\nEspessuras disponíveis: 2, 3, 4, 5, 6, 8, 10 e 12 mm.\nLargura x comprimento: 1x2, 2x3 e 2x6 m (espessuras a partir de 8 mm apenas na medida 2x3 m).",
            features: [
              "Praticamente inquebrável — alta proteção anti-vandalismo e anti-roubo",
              "Excelente transmissão luminosa e clareza ótica",
              "Pode ser curvada a frio para projetos arquitetônicos diferenciados",
              "Proteção UV — não amarela e mantém as propriedades óticas",
              "Resistência ao impacto mantida de -40°C a temperaturas elevadas",
              "Cerca de 50% mais leve que o vidro de mesma espessura",
              "Bom isolamento térmico — economia em aquecimento e ar condicionado",
              "Espessuras de 2 a 12 mm em chapas 1x2, 2x3 e 2x6 m",
            ],
          },
        ],
      },
      {
        name: "Telhas Onduladas e Trapezoidais",
        products: [
          mk("/produtos/telhas-policarbonato.jpg", "CAM-340", "Telhas Onduladas e Trapezoidais", "As TELHAS em Policarbonato oferecem vantagens sobre as telhas translúcidas em outros materiais como os de PVC, Fibra de vidro e Poliéster. São fabricadas em dois modelos: Ondulada e Greca (trapezoidal).", [
            "Alta resistência a impactos",
            "Excelente transmissão luminosa, superior ao PVC e Fibra de Vidro",
            "Maior economia de energia",
            "São leves e praticamente inquebráveis",
            "Suportam variações bruscas de temperaturas sem deformar (-40ºC e 130ºC)",
            "Alta resistência a produtos químicos em suspensão no ar",
            "São autoextinguíveis",
            "Tratamento anti-UV",
            "Compatíveis com diversas telhas de alumínio, aço e amianto",
            "Durabilidade superior ao PVC e Fibra de Vidro",
          ]),
        ],
      },
      {
        name: "Venezianas Industriais",
        products: [
          {
            code: "CAM-350",
            name: "Venezianas Industriais",
            image: venezianasImages[0],
            images: venezianasImages,
            description:
              "As venezianas em policarbonato são um sistema econômico para uma ventilação constante combinada com iluminação natural em aplicações verticais.\n\nO sistema consiste em módulos de até 1,10m de largura, distribuídos ao longo da altura dos montantes metálicos em \"U\". As aletas possuem vincos de dobra extrudado, facilitando a sua adequação em qualquer montante.\n\nPossuem proteção UV em ambas as faces.\n\nGraças ao baixo peso das aletas e dos perfis montantes, esse sistema é uma grande solução econômica para uma ventilação constante com aproveitamento da luz natural.",
            features: [
              "Ventilação constante combinada com iluminação natural",
              "Módulos de até 1,10m de largura",
              "Aletas com vincos de dobra extrudado para fácil adequação",
              "Proteção UV em ambas as faces",
              "Baixo peso das aletas e perfis montantes",
              "Solução econômica para aplicações verticais",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "ACESSÓRIOS TELHAS",
    desc: "Acessórios para telhas, fita anti-corrosiva, parafusos autoperfurantes e muito mais.",
    image: acessoriosTelhas,
    subtitle: "Linha completa para fixação e acabamento de coberturas",
    subcategories: [
      {
        name: "Fitas e Vedações",
        products: [
          mk(acessoriosTelhas, "CAM-401", "Fita Anti-Corrosiva 50mm x 10m", "Proteção contra corrosão entre telha e estrutura.", ["Adesiva", "Resistente a UV", "Fácil aplicação"]),
        ],
      },
      {
        name: "Arruelas",
        products: [
          mk(acessoriosTelhas, "CAM-410", "Arruela de Vedação EPDM 5/16''", "Arruela para vedação em parafusos autoperfurantes.", ["Vulcanizada", "Diversos diâmetros"]),
        ],
      },
    ],
  },
  {
    title: "VEDAÇÃO",
    desc: "Adesivo selante poliuretano, flange para tubos e muito mais.",
    image: vedacao,
    subtitle: "Selantes, adesivos e acessórios de vedação profissional",
    subcategories: [
      {
        name: "Selantes",
        products: [
          mk(vedacao, "CAM-501", "Adesivo Selante PU 310ml Cinza", "Selante de poliuretano para juntas estruturais.", ["Alta aderência", "Resistente a intempéries", "Pintável"]),
        ],
      },
      {
        name: "Flanges e Acessórios",
        products: [
          mk(vedacao, "CAM-502", "Flange para Tubos 100mm", "Flange para vedação de passagem de tubos em coberturas.", ["EPDM flexível", "Compatível com diversos diâmetros"]),
        ],
      },
    ],
  },
];

const ProductsSection = () => {
  return <ProductsSectionInner />;
};

const ProductMedia = ({ product }: { product: Product }) => {
  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const [idx, setIdx] = useState(0);
  const hasMany = images.length > 1;
  const go = (delta: number) => setIdx((i) => (i + delta + images.length) % images.length);
  return (
    <div className="md:w-[45%] shrink-0 bg-[hsl(0_0%_96%)] relative min-h-[300px] md:min-h-full md:self-stretch overflow-hidden group/media">
      <img
        src={images[idx]}
        alt={product.name}
        className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300"
        loading="lazy"
      />
      {hasMany && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/90 border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition flex items-center justify-center shadow"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Próxima"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/90 border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition flex items-center justify-center shadow"
          >
            <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIdx(i)}
                aria-label={`Ir para imagem ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-6 bg-primary" : "w-1.5 bg-background/80 border border-border"
                }`}
              />
            ))}
          </div>
          <span className="absolute top-2 right-2 bg-background/90 border border-border text-foreground text-[10px] font-bold tracking-wider px-2 py-0.5 rounded">
            {idx + 1}/{images.length}
          </span>
        </>
      )}
    </div>
  );
};

const ProductsSectionInner = () => {
  useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeSubIndex, setActiveSubIndex] = useState<number | null>(null);

  const handleOpenChange = (open: boolean, index: number) => {
    if (open) {
      setOpenIndex(index);
      setActiveSubIndex(null);
    } else {
      setOpenIndex(null);
      setActiveSubIndex(null);
    }
  };

  return (
    <section id="produtos" className="py-24 bg-secondary">
      <div className="text-center mb-16 reveal">
        <p className="text-primary font-bold tracking-[0.3em] text-sm mb-3 uppercase">Nossas categorias</p>
        <h2 className="font-display font-black text-4xl md:text-6xl uppercase text-foreground leading-none">
          Tudo para sua <span className="text-primary">obra</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-6" />
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {categories.map((category, i) => {
          const isOpen = openIndex === i;
          const activeSub = activeSubIndex !== null ? category.subcategories[activeSubIndex] : null;
          return (
            <Drawer
              key={category.title}
              open={isOpen}
              onOpenChange={(o) => handleOpenChange(o, i)}
            >
              <article
                className="reveal group bg-background rounded-xl border border-border hover:border-primary p-6 flex flex-col items-center text-center h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)] relative overflow-hidden"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500" />
                <div className="w-full aspect-[4/3] bg-white flex items-center justify-center overflow-hidden mb-6 rounded-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="max-w-[80%] max-h-[80%] object-contain transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <h3 className="min-h-[64px] flex items-center justify-center font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors tracking-wide uppercase mb-4">
                  {category.title}
                </h3>
                <div className="w-12 h-0.5 bg-primary mb-5" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {category.desc}
                </p>
                <DrawerTrigger asChild>
                  <button
                    type="button"
                    className="mt-auto inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-md text-sm font-bold tracking-widest hover:bg-primary hover:text-primary-foreground transition"
                  >
                    VER MAIS
                  </button>
                </DrawerTrigger>
              </article>

              <DrawerContent className="h-[90vh] rounded-t-[20px] bg-secondary">
                {/* Header */}
                <div className="px-6 md:px-10 pt-2 pb-4 border-b border-border bg-background">
                  <div className="max-w-6xl mx-auto flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setActiveSubIndex(null)}
                      className={`inline-flex items-center gap-1.5 text-primary font-bold text-sm tracking-wider uppercase transition-opacity hover:opacity-70 ${
                        activeSub ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                      aria-hidden={!activeSub}
                    >
                      <ArrowLeft size={16} />
                      Voltar
                    </button>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-xl md:text-2xl font-bold uppercase text-foreground truncate">
                        {activeSub ? activeSub.name : category.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground mt-0.5 truncate">
                        {activeSub ? `${activeSub.products.length} produto(s)` : category.subtitle}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleOpenChange(false, i)}
                      className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
                      aria-label="Fechar"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto px-6 md:px-10 py-8">
                  <div className="max-w-6xl mx-auto">
                    {!activeSub ? (
                      <div
                        key="subs"
                        className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-in fade-in slide-in-from-bottom-2 duration-300"
                      >
                        {category.subcategories.map((sub, idx) => (
                          <button
                            key={sub.name}
                            type="button"
                            onClick={() => setActiveSubIndex(idx)}
                            className="group flex items-center gap-4 bg-background border border-border rounded-xl p-5 text-left transition-all duration-200 hover:border-primary hover:shadow-[var(--shadow-card)]"
                          >
                            <div className="w-14 h-14 rounded-lg bg-[hsl(0_85%_95%)] flex items-center justify-center text-primary shrink-0">
                              <Package size={26} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-foreground uppercase tracking-wide text-base">
                                {sub.name}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                {sub.products.length} produto{sub.products.length > 1 ? "s" : ""}
                              </p>
                            </div>
                            <ChevronRight
                              size={22}
                              className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                            />
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div
                        key={`prods-${activeSubIndex}`}
                        className="flex flex-col gap-5 animate-in fade-in slide-in-from-bottom-2 duration-300"
                      >
                        {activeSub.products.map((product) => (
                          <article
                            key={product.code}
                            className="bg-background border border-border rounded-xl overflow-hidden flex flex-col md:flex-row md:items-start"
                          >
                            <ProductMedia product={product} />
                            <div className="flex-1 p-6 flex flex-col">
                              <div className="flex items-start justify-between gap-3 mb-2">
                                <h4 className="font-display text-xl font-bold text-foreground uppercase tracking-wide">
                                  {product.name}
                                </h4>
                                <span className="text-xs font-bold tracking-wider text-primary bg-[hsl(0_85%_95%)] px-2.5 py-1 rounded shrink-0">
                                  {product.code}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                                {product.description}
                              </p>
                              <ul className="space-y-2 mb-6">
                                {product.features.map((f) => (
                                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                                    <span>{f}</span>
                                  </li>
                                ))}
                              </ul>
                              <a
                                href={`${WHATSAPP}?text=${encodeURIComponent(
                                  `Olá! Gostaria de um orçamento para: ${product.name} (${product.code}).`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-bold tracking-widest uppercase hover:bg-primary/90 transition"
                              >
                                Solicitar Orçamento
                              </a>
                            </div>
                          </article>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsSection;
