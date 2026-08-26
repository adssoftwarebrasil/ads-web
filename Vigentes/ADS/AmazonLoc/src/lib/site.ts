export const WHATSAPP_NUMBER = '5565992766111';
export const PHONE_TEL = '6539274720';

export function waLink(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
