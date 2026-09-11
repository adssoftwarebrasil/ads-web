type TrackParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: TrackParams[];
  }
}

export function track(event: string, params: TrackParams = {}): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

type WhatsAppContext = {
  section: string;
  position: string;
  service?: string;
};

export function trackWhatsApp({ section, position, service }: WhatsAppContext): void {
  track('whatsapp_click', {
    section,
    service: service || 'general',
    cta_position: position,
  });
}
