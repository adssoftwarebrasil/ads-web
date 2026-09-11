export const WHATSAPP_NUMBER = '554491116604';
export const WHATSAPP_MESSAGE = 'Olá, vim pelo site. Gostaria de fazer um orçamento.';

export function whatsappLink(number: string = WHATSAPP_NUMBER) {
  return `https://wa.me/${number}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}
