export const SITE = {
  name: 'Rezende Odontologia',
  whatsapp: '5531999739123',
  phoneLabel: '(31) 99973-9123',
  email: 'Rezendeodontologia2021@gmail.com',
  instagram: 'https://www.instagram.com/pedrorezzendefilho/',
  instagramHandle: '@pedrorezzendefilho',
  maps: 'https://maps.app.goo.gl/ux85vq9ae65xgm4m7',
  mapEmbed: 'https://www.google.com/maps?q=-19.4794335,-42.5834961&z=17&output=embed',
  address: {
    street: 'Av. Orquídea, 1136',
    district: 'Esperança',
    city: 'Ipatinga',
    state: 'MG',
    zip: '35162-290',
  },
  doctor: {
    name: 'Dr. Pedro Rezende Filho',
    role: 'Cirurgião-dentista',
    cro: 'CRO-MG 57.431',
  },
  defaultMessage: 'Olá! Vim pelo site da Rezende Odontologia e gostaria de agendar uma avaliação.',
} as const;

const serviceMessages: Record<string, string> = {
  'implantes dentários': 'Olá! Vim pelo site da Rezende Odontologia e gostaria de saber mais sobre implantes dentários.',
  'próteses dentárias': 'Olá! Vim pelo site da Rezende Odontologia e gostaria de saber mais sobre próteses dentárias.',
  'clareamento dental': 'Olá! Vim pelo site da Rezende Odontologia e gostaria de saber mais sobre clareamento dental.',
  'facetas dentárias': 'Olá! Vim pelo site da Rezende Odontologia e gostaria de saber mais sobre facetas dentárias.',
  'reabilitação oral': 'Olá! Vim pelo site da Rezende Odontologia e gostaria de saber mais sobre reabilitação oral.',
};

export function whatsappUrl(message: string = SITE.defaultMessage): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function serviceWhatsappUrl(service?: string): string {
  return whatsappUrl((service && serviceMessages[service]) || SITE.defaultMessage);
}
