# Parcela Amiga — parcelaamiga.com.br

Site de página única em React + Vite + TypeScript.

## Como o código voltou

O backup do fonte se perdeu. O site que estava no ar (hospedado na Netlify,
sob `parcelaamiga.com.br`) foi remontado a partir do que ele mesmo entrega ao
navegador: o CSS publicado veio inteiro e sem alteração de regra
(`src/styles.css`), e a estrutura das seções e todos os textos foram lidos do
JavaScript publicado e reescritos como componentes React.

Ou seja: o layout, as cores, os espaçamentos e o comportamento são os mesmos do
site que estava no ar — o que mudou foi só o que o cliente pediu no documento de
alterações (setembro de 2026).

As duas imagens do site ficam em `public/`. O logotipo antes era carregado de um
servidor de terceiros (`storage.lucasmendes.dev`); foi baixado e passou a ser
servido pelo próprio site, para não depender de um domínio que não é do cliente.

## Rodar

```bash
npm install
npm run dev     # desenvolvimento
npm run build   # gera a pasta dist/
```
