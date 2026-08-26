# Total Sport Bike

Site institucional da **Total Sport Bike** — bicicletaria em Sinop/MT.

Landing page de página única (Vite + React + Tailwind CSS + Framer Motion) com hero em tela cheia,
seção de produtos e serviços, sobre, galeria com lightbox, contato com formulário que envia para o
WhatsApp e mapa do Google.

## Stack

- [Vite](https://vitejs.dev/) — build e dev server
- [React 19](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animações de entrada e lightbox
- [lucide-react](https://lucide.dev/) — ícones

## Como rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # gera a pasta dist/
npm run preview  # pré-visualiza o build
```

## Estrutura

```
public/images/          fotos da loja, oficina e produtos (webp) + logo
src/data/siteConfig.js  TODO o conteúdo do site (textos, contatos, serviços, galeria)
src/utils/              helpers de link do WhatsApp e fallback de imagem
src/components/         componentes de cada seção
```

## Editar o conteúdo

Praticamente tudo do site sai de [`src/data/siteConfig.js`](src/data/siteConfig.js): dados da empresa,
telefone/WhatsApp, endereço, redes sociais, menu, textos do hero, lista de serviços, texto do sobre,
fotos da galeria e o embed do mapa.

As seções `processo`, `depoimentos`, `areas` e `faq` estão vazias — cada componente se esconde
sozinho quando a lista correspondente não tem itens. Basta preencher o array para a seção aparecer.

Os ícones de cada serviço/diferencial são referenciados pelo nome (ex.: `"Wrench"`, `"ShieldCheck"`);
a lista de nomes válidos está em [`src/components/iconMap.js`](src/components/iconMap.js).

## Deploy

Publicado na Netlify. Build: `npm run build`, diretório de publicação: `dist`.
O `netlify.toml` já traz o redirect de SPA.
