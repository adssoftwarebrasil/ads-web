import { siteConfig } from '../data/siteConfig'

export function whatsappLink(mensagem) {
  const texto = mensagem ?? `Olá! Tenho interesse em saber mais sobre ${siteConfig.empresa.nome}.`
  return `https://wa.me/${siteConfig.contato.whatsapp}?text=${encodeURIComponent(texto)}`
}
