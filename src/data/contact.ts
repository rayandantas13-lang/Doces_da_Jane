// ============================================================
//  Troque aqui pelos dados reais da Docinhos da Jane 💕
//  WhatsApp: formato internacional SÓ com dígitos
// ============================================================
export const WHATSAPP_NUMBER = "5599991426465";
export const INSTAGRAM_HANDLE = "docinhosdajane";
export const EMAIL = "encomendas@docinhosdajane.com";
export const CITY = "Entregas na região · sob consulta";

export const whatsappLink = (message?: string) => {
  if (!message) return `https://wa.me/${WHATSAPP_NUMBER}`;
  // URLSearchParams garante encoding UTF-8 correto inclusive para emojis (evita �)
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${WHATSAPP_NUMBER}?${params.toString()}`;
};

export const whatsappApiLink = (message?: string) => {
  if (!message) return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`;
  const params = new URLSearchParams({ phone: WHATSAPP_NUMBER, text: message });
  return `https://api.whatsapp.com/send?${params.toString()}`;
};

export const instagramLink = () => `https://instagram.com/${INSTAGRAM_HANDLE}`;
