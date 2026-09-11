export const phoneDisplay = '(62) 99953-6730'
export const phoneHref = 'tel:+5562999536730'
export const email = 'wanessafono34@gmail.com'
export const instagramHandle = '@fga.wanessa.ferreira'
export const instagramUrl = 'https://www.instagram.com/fga.wanessa.ferreira/'

const whatsappMessage = encodeURIComponent(
  'Olá, Wanessa! Gostaria de saber mais sobre o atendimento fonoaudiológico.',
)

export const whatsappUrl = `https://wa.me/5562999536730?text=${whatsappMessage}`

const address =
  'Av. São Luiz, 597, Qd. 01, Lt. 29, Santa Rita, Goiânia - GO, CEP 74370-476'

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
