export const WHATSAPP_NUMBER = '558738617180';

export function openWhatsApp(message?: string) {
  const text = message ?? 'Olá! Gostaria de agendar um atendimento no Ateliê Noiva e Cia.';
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
