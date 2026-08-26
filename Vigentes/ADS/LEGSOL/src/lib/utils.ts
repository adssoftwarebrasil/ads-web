export const WHATSAPP_URL = 'https://wa.me/5516997631055';

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export function formatBRL(value: number): string {
  return (
    'R$ ' +
    value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}
