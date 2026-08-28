/** Dados de contato do cliente — fonte unica para todo o site. */
export const WHATSAPP_NUMBER = '5566996123349';
export const WHATSAPP_DISPLAY = '(66) 9 9612-3349';
export const WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}`;

/** Monta o link do WhatsApp com uma mensagem pre-preenchida. */
export function whatsappLink(message: string): string {
  return `${WHATSAPP}?text=${encodeURIComponent(message)}`;
}
