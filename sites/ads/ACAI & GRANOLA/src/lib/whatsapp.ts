export const WHATSAPP_NUMBER = '5583998415555';

export function openWhatsApp(message: string = 'Olá! Gostaria de mais informações sobre os produtos da ACAI & GRANOLA.') {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
