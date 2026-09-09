export const business = {
  name: "Wilson Estofados",
  phone: "5562991351345",
  displayPhone: "(62) 99135-1345",
  email: "wilsonestofados@hotmail.com",
  address: "Avenida João Florentino, Qd. 05, Lt. 19",
  location: "Anápolis — GO",
  hours: "Das 8h às 18h",
  instagram: "https://www.instagram.com/wilsonestofados/",
};

export function whatsappUrl(
  message = "Olá, Wilson Estofados! Vim pelo site e gostaria de solicitar um orçamento.",
) {
  return `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;
}

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${business.address}, ${business.location}`)}`;
