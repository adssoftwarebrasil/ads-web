export const WHATSAPP_NUMBER = '556296857030';

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá, vim do site e gostaria de saber mais';

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string = DEFAULT_WHATSAPP_MESSAGE): void {
  window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
}
