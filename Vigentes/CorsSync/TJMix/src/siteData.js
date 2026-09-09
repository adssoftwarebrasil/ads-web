export const whatsappNumber = "5562994776727";
export const whatsappDisplay = "(62) 99477-6727";
export const whatsappMessage =
  "Olá! Vim pelo site da TJ Mix e gostaria de ajuda para encontrar materiais para minha obra.";
export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const instagramHref = "https://www.instagram.com/tjmixmateriais/";
export const instagramDisplay = "@tjmixmateriais";

export const locationShort = "Av. Tóquio, 876";
export const locationStreet = "Avenida Tóquio, Quadra 56, Lote 15, nº 876";
export const locationDistrict = "Parque João Braz · Cidade Industrial";
export const locationPostalCode = "CEP 74483-550";
export const locationDisplay = `${locationStreet} – ${locationDistrict} – ${locationPostalCode}`;
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationDisplay)}`;
