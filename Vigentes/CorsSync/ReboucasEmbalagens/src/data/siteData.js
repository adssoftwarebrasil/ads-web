import bobinasPicotadas from "../assets/bobinas-picotadas.jpg";
import coposDescartaveis from "../assets/copos-descartaveis.png";
import coposPotesTermicos from "../assets/copos-potes-termicos.png";
import filmesPvc from "../assets/filmes-pvc.jpg";
import luvasDescartaveis from "../assets/luvas-descartaveis.jpg";
import marmitasRedondas from "../assets/marmitas-redondas.png";
import marmitasRefeicoes from "../assets/marmitas-refeicoes.png";
import potesTermicosAlimentos from "../assets/potes-termicos-alimentos.png";
import produtosPapelLimpeza from "../assets/produtos-papel-limpeza.jpg";
import sacolasPapel from "../assets/sacolas-papel.png";
import sacosPapelSos from "../assets/sacos-papel-sos.jpg";
import talheresDescartaveis from "../assets/talheres-descartaveis.png";

export const contact = {
  phoneDisplay: "(75) 3223-1925",
  phoneHref: "tel:+557532231925",
  email: "reboucasembalagens@gmail.com",
  whatsapp:
    "https://wa.me/557532231925?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Rebou%C3%A7as%20Embalagens%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos.",
  instagram: "https://www.instagram.com/reboucasembalagens/",
  facebook: "https://www.facebook.com/reboucasembalagens",
  address: "Rua Desembargador Felinto Bastos, 658 — Centro, Feira de Santana — BA",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Rua%20Desembargador%20Felinto%20Bastos%2C%20658%2C%20Centro%2C%20Feira%20de%20Santana%2C%20Bahia",
};

export const categories = [
  {
    title: "Sacolas",
    description: "Diversos tamanhos e cores para o dia a dia do seu negócio.",
    image: sacolasPapel,
    alt: "Sacolas de papel em diversos tamanhos",
    groups: ["delivery", "loja"],
    tone: "paper",
  },
  {
    title: "Copos descartáveis",
    description: "Opções para diferentes bebidas, porções e rotinas.",
    image: coposDescartaveis,
    alt: "Copos descartáveis transparentes com bebidas",
    groups: ["bebidas", "loja"],
    tone: "blue",
  },
  {
    title: "Filmes PVC",
    description: "Diversas medidas para cozinha e uso profissional.",
    image: filmesPvc,
    alt: "Rolos e caixas de filme PVC em diversas medidas",
    groups: ["cozinha", "loja"],
    tone: "green",
  },
  {
    title: "Marmitex",
    description: "Modelos de isopor e alumínio para suas refeições.",
    image: marmitasRefeicoes,
    alt: "Marmitas descartáveis com refeições prontas",
    groups: ["delivery"],
    tone: "orange",
  },
  {
    title: "Copos e potes térmicos",
    description: "Vários tamanhos para bebidas e alimentos.",
    image: coposPotesTermicos,
    alt: "Linha de copos e potes térmicos de vários tamanhos",
    groups: ["bebidas", "delivery"],
    tone: "orange",
  },
  {
    title: "Sacos de papel",
    description: "Soluções para delivery, cereais e diferentes produtos.",
    image: sacosPapelSos,
    alt: "Sacos de papel kraft em tamanhos variados",
    groups: ["delivery", "loja"],
    tone: "blue",
  },
  {
    title: "Talheres",
    description: "Praticidade para servir refeições e lanches.",
    image: talheresDescartaveis,
    alt: "Talheres descartáveis sobre prato",
    groups: ["delivery", "cozinha"],
    tone: "paper",
  },
  {
    title: "Sacos plásticos",
    description: "Todas as medidas para atender diferentes necessidades.",
    image: bobinasPicotadas,
    alt: "Bobinas picotadas de sacos plásticos",
    groups: ["cozinha", "loja"],
    tone: "green",
  },
  {
    title: "Limpeza e cozinha",
    description: "Produtos para apoiar a rotina da casa e do comércio.",
    image: produtosPapelLimpeza,
    alt: "Produtos de papel para limpeza",
    groups: ["cozinha"],
    tone: "paper",
  },
  {
    title: "Potes para alimentos",
    description: "Kits em diversos tamanhos para organizar e servir.",
    image: potesTermicosAlimentos,
    alt: "Potes térmicos com diferentes alimentos",
    groups: ["delivery", "cozinha"],
    tone: "orange",
  },
  {
    title: "Marmitas redondas",
    description: "Formatos e capacidades para diferentes porções.",
    image: marmitasRedondas,
    alt: "Três marmitas redondas descartáveis",
    groups: ["delivery"],
    tone: "orange",
  },
  {
    title: "Itens de proteção",
    description: "Opções para complementar os cuidados da rotina.",
    image: luvasDescartaveis,
    alt: "Par de luvas descartáveis pretas",
    groups: ["cozinha"],
    tone: "dark",
  },
];

export const filters = [
  { label: "Todos", value: "todos" },
  { label: "Delivery", value: "delivery" },
  { label: "Bebidas", value: "bebidas" },
  { label: "Cozinha e limpeza", value: "cozinha" },
  { label: "Lojas e comércio", value: "loja" },
];
