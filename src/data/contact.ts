// ============================================================
//  Troque aqui pelos dados reais da Docinhos da Jane 💕
//  WhatsApp: formato internacional SÓ com dígitos
//  (ex.: 55 + DDD + número → 5511999999999)
// ============================================================
export const WHATSAPP_NUMBER = "5511999999999";
export const INSTAGRAM_HANDLE = "docinhosdajane";
export const EMAIL = "encomendas@docinhosdajane.com";
export const CITY = "Entregas na região · sob consulta";

export const whatsappLink = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const instagramLink = () => `https://instagram.com/${INSTAGRAM_HANDLE}`;
