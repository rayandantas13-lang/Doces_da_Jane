export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  emoji: string;
  category: string;
  tag?: string;
};

export const CATEGORIES = [
  "Mais amados",
  "Brigadeiros gourmet",
  "Brownies & cookies",
  "Doces finos",
  "Kits & festas",
] as const;

export const PRODUCTS: Product[] = [
  {
    id: "brig-trad",
    name: "Brigadeiro Tradicional",
    description: "O clássico que abraça: chocolate nobre, ponto de colher e granulado belga.",
    price: 4.5,
    emoji: "🍫",
    category: "Mais amados",
    tag: "Queridinho",
  },
  {
    id: "brig-pistache",
    name: "Brigadeiro de Pistache",
    description: "Cremoso, com pasta de pistache tostado e final crocante por cima.",
    price: 7.0,
    emoji: "💚",
    category: "Brigadeiros gourmet",
    tag: "Novidade",
  },
  {
    id: "brig-avela",
    name: "Brigadeiro de Avelã",
    description: "Inspirado no gianduia, com avelãs caramelizadas moídas na hora.",
    price: 6.5,
    emoji: "🌰",
    category: "Brigadeiros gourmet",
  },
  {
    id: "brig-cafe",
    name: "Brigadeiro de Café",
    description: "Pra quem ama um cafezinho: intenso, com grãos moídos por cima.",
    price: 6.0,
    emoji: "☕",
    category: "Brigadeiros gourmet",
  },
  {
    id: "morango-choc",
    name: "Morango com Chocolate",
    description: "Morango fresquinho envolto em ganache meio amargo. Puro romance.",
    price: 6.0,
    emoji: "🍓",
    category: "Doces finos",
  },
  {
    id: "beijinho",
    name: "Beijinho de Coco",
    description: "Coco ralado queimadinho por fora, macio por dentro. Um carinho.",
    price: 4.5,
    emoji: "🥥",
    category: "Brigadeiros gourmet",
  },
  {
    id: "ninho-nutella",
    name: "Ninho com Nutella",
    description: "Leite Ninho aerado com um coração de Nutella derretendo dentro.",
    price: 6.5,
    emoji: "🍼",
    category: "Mais amados",
    tag: "Top",
  },
  {
    id: "bolo-pote",
    name: "Bolo de Pote",
    description: "Camadas de bolo, brigadeiro e morango num potinho. Come com os olhos.",
    price: 16.0,
    emoji: "🍨",
    category: "Mais amados",
    tag: "Trend",
  },
  {
    id: "brownie",
    name: "Brownie Recheado",
    description: "Casquinha craquelada, interior molhadinho e recheio de doce de leite.",
    price: 12.0,
    emoji: "🟫",
    category: "Brownies & cookies",
    tag: "Top",
  },
  {
    id: "cookie",
    name: "Cookie Gigante",
    description: "Bordas crocantes, centro macio e gotas de chocolate belga aos montes.",
    price: 10.0,
    emoji: "🍪",
    category: "Brownies & cookies",
  },
  {
    id: "donut",
    name: "Donut Recheado",
    description: "Massa fofinha, recheio cremoso e cobertura que pede uma foto antes.",
    price: 13.0,
    emoji: "🍩",
    category: "Brownies & cookies",
  },
  {
    id: "cupcake",
    name: "Cupcake Red Velvet",
    description: "Massa aveludada com cobertura generosa de cream cheese e frutinhas.",
    price: 14.0,
    emoji: "🧁",
    category: "Doces finos",
  },
  {
    id: "macaron",
    name: "Macaron de Framboesa",
    description: "Casquinha delicada e recheio de framboesa, feito um a um com calma.",
    price: 8.0,
    emoji: "🌸",
    category: "Doces finos",
  },
  {
    id: "pudim",
    name: "Pudim de Leite",
    description: "Aquele da vovó, com caldinha escorrendo e furinhos no ponto certo.",
    price: 9.0,
    emoji: "🍮",
    category: "Doces finos",
    tag: "Da vovó",
  },
  {
    id: "pirulito",
    name: "Pirulito Trufado",
    description: "Chocolate em forma de pirulito, recheado e decorado à mão. Lindo na mesa.",
    price: 7.5,
    emoji: "🍭",
    category: "Doces finos",
  },
  {
    id: "pao-de-mel",
    name: "Pão de Mel",
    description: "Especiarias, mel e banho de chocolate. Aquele gostinho de aconchego.",
    price: 7.0,
    emoji: "🍯",
    category: "Brownies & cookies",
  },
  {
    id: "caixa-12",
    name: "Caixa Presente · 12 un",
    description: "Seleção da Jane com 12 docinhos sortidos em caixa com laço. Pra emocionar.",
    price: 72.0,
    emoji: "🎁",
    category: "Kits & festas",
    tag: "Presente",
  },
  {
    id: "kit-festa",
    name: "Kit Festa · 50 un",
    description: "Mesa posta resolvida: 50 docinhos variados, prontos pra festa acontecer.",
    price: 180.0,
    emoji: "🎉",
    category: "Kits & festas",
  },
  {
    id: "torta-morango",
    name: "Torta de Morango",
    description: "Base amanteigada, creme de baunilha e morangos frescos por cima. Inteira.",
    price: 95.0,
    emoji: "🍰",
    category: "Kits & festas",
  },
  {
    id: "torta-limao",
    name: "Torta de Limão",
    description: "Azedinha na medida, com suspiro maçaricado por cima. Refresca a alma.",
    price: 88.0,
    emoji: "🥧",
    category: "Kits & festas",
  },
];

export const PRODUCT_MAP: Record<string, Product> = Object.fromEntries(
  PRODUCTS.map((p) => [p.id, p]),
);

export const formatBRL = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
