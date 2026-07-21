type ProductImage = {
  src: string;
  alt: string;
};

// Troque as URLs abaixo pelas fotos reais dos seus produtos.
// Pode usar link externo ou importar arquivos locais depois, se preferir.
export const PRODUCT_IMAGES: Record<string, ProductImage> = {
  "brig-trad": {
    src: "https://images.pexels.com/photos/8498186/pexels-photo-8498186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Brigadeiro tradicional em close",
  },
  "brig-pistache": {
    src: "https://images.pexels.com/photos/37857736/pexels-photo-37857736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Docinho gourmet em caixa",
  },
  "brig-avela": {
    src: "https://images.pexels.com/photos/18784856/pexels-photo-18784856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Docinhos com chocolate em prato",
  },
  "brig-cafe": {
    src: "https://images.pexels.com/photos/5665639/pexels-photo-5665639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Doce de chocolate com acabamento artesanal",
  },
  "morango-choc": {
    src: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Sobremesa com morango e chocolate",
  },
  beijinho: {
    src: "https://images.pexels.com/photos/14122743/pexels-photo-14122743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Docinho claro com cobertura delicada",
  },
  "ninho-nutella": {
    src: "https://images.pexels.com/photos/14206178/pexels-photo-14206178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Docinho rosa em fundo de confeitaria",
  },
  "bolo-pote": {
    src: "https://images.pexels.com/photos/34563914/pexels-photo-34563914.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Sobremesas variadas em pratos",
  },
  brownie: {
    src: "https://images.pexels.com/photos/34718258/pexels-photo-34718258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Brownie ou bolo de chocolate em close",
  },
  cookie: {
    src: "https://images.pexels.com/photos/34563914/pexels-photo-34563914.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Cookie e doces variados",
  },
  donut: {
    src: "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Doce confeitado com cobertura cremosa",
  },
  cupcake: {
    src: "https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Cupcake com chantilly e frutas",
  },
  macaron: {
    src: "https://images.pexels.com/photos/36455120/pexels-photo-36455120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Macarons coloridos em prato",
  },
  pudim: {
    src: "https://images.pexels.com/photos/34718258/pexels-photo-34718258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Sobremesa cremosa em prato",
  },
  pirulito: {
    src: "https://images.pexels.com/photos/14206178/pexels-photo-14206178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Docinho colorido de festa",
  },
  "pao-de-mel": {
    src: "https://images.pexels.com/photos/8498186/pexels-photo-8498186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Doce de chocolate artesanal",
  },
  "caixa-12": {
    src: "https://images.pexels.com/photos/37857736/pexels-photo-37857736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Caixa presente com doces",
  },
  "kit-festa": {
    src: "https://images.pexels.com/photos/34563914/pexels-photo-34563914.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Mesa com doces variados para festa",
  },
  "torta-morango": {
    src: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Torta ou doce com morango",
  },
  "torta-limao": {
    src: "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Torta clara com cobertura cremosa",
  },
};

export const FALLBACK_PRODUCT_IMAGE: ProductImage = {
  src: "https://images.pexels.com/photos/34563914/pexels-photo-34563914.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  alt: "Doce artesanal da Docinhos da Jane",
};

export const getProductImage = (id: string) => PRODUCT_IMAGES[id] ?? FALLBACK_PRODUCT_IMAGE;