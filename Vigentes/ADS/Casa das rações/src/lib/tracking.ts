import { stores } from '../data/stores';
import { Store } from '../types';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Unidade padrão dos CTAs gerais do site (Matriz - São Cristóvão). */
export const mainStore = stores[0];

interface WhatsAppClickPayload {
  storeName: string;
  phone: string;
  url: string;
  location: string;
  message?: string;
}

/**
 * Dispara o evento de clique no WhatsApp para o GTM/Google Ads.
 * O gatilho no GTM pode usar o evento personalizado `whatsapp_click`
 * ou a variável Click URL, que agora sempre contém `wa.me`.
 */
export function trackWhatsAppClick({
  storeName,
  phone,
  url,
  location,
  message,
}: WhatsAppClickPayload) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'whatsapp_click',
    whatsapp_store: storeName,
    whatsapp_phone: phone,
    whatsapp_url: url,
    whatsapp_location: location,
    whatsapp_message: message || '',
  });
}

/** Garante https, para o clique bater com o filtro `wa.me` do GTM. */
export function normalizeWhatsAppUrl(url: string) {
  return url.replace(/^http:\/\//i, 'https://');
}

/** Monta a URL final do WhatsApp já com a mensagem pré-preenchida. */
export function buildWhatsAppUrl(url: string, message?: string) {
  const base = normalizeWhatsAppUrl(url);
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * Props prontas para qualquer <a> que leva ao WhatsApp: href `wa.me`,
 * abertura em nova aba, atributos de rastreio e o push no dataLayer.
 */
export function whatsappLink(
  location: string,
  message?: string,
  store: Store = mainStore
) {
  const href = buildWhatsAppUrl(store.whatsapp, message);
  return {
    href,
    target: '_blank',
    rel: 'noopener noreferrer',
    'data-gtm': 'whatsapp',
    'data-gtm-location': location,
    'data-gtm-store': store.name,
    onClick: () =>
      trackWhatsAppClick({
        storeName: store.name,
        phone: store.phone,
        url: href,
        location,
        message,
      }),
  };
}
