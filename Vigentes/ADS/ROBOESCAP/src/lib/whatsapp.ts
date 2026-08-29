import { site } from '../config/site';

export function whatsappLink(message?: string): string {
  const text = message ?? `Olá! Tenho interesse em saber mais sobre ${site.empresa.nome}.`;
  return `https://wa.me/${site.contato.whatsapp}?text=${encodeURIComponent(text)}`;
}
