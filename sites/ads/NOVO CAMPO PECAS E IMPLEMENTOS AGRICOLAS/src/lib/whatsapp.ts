export const WHATSAPP_MESSAGE = 'Olá vim pelo site e quero fazer um orçamento';

export const WHATSAPP_NUMBERS = {
  dourados: '5567991581881',
  saoGabriel: '5567996859727',
  rioBrilhante: '5567998078170',
  r8: '5567992464062',
  agrimec: '5567993217022',
} as const;

export const WHATSAPP_MATRIZ = WHATSAPP_NUMBERS.dourados;

export function whatsappLink(phone: string = WHATSAPP_MATRIZ) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

export const WHATSAPP_URL = whatsappLink();
