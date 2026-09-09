export const business = {
  name: 'Primavera Gás',
  phone: '+5566999610258',
  phoneDisplay: '(66) 99961-0258',
  email: 'Trabalhoprimaveragas2014@gmail.com',
  address: 'Av. Senador Jonas Pinheiro, 1880',
  neighborhood: 'Jardim Azaleias',
  city: 'Sinop – MT',
  hours: '7h às 20h',
};

export function whatsappUrl(
  message = 'Olá, Primavera Gás! Gostaria de fazer um pedido em Sinop.',
) {
  return `https://wa.me/${business.phone.replace('+', '')}?text=${encodeURIComponent(message)}`;
}

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${business.name}, ${business.address}, ${business.neighborhood}, ${business.city}`,
)}`;

export const navigation = [
  { label: 'Gás e água', href: '#produtos' },
  { label: 'Nossa história', href: '#historia' },
  { label: 'Onde estamos', href: '#contato' },
];
