# A Solução Engenharia

Site institucional da A Solução Engenharia — prevenção contra incêndio e
pânico em Aracaju e em todo o estado de Sergipe.

React 18 + Vite 5 + TypeScript + Tailwind 3 + lucide-react.

```bash
npm install
npm run build
```

## Origem do código

O fonte original se perdeu. Este projeto foi **remontado a partir do site que
estava no ar** em `asolucaoengenharia.netlify.app`, em 03/09/2026: o CSS e o
JavaScript publicados foram baixados e traduzidos de volta para componentes
React.

Não é saída de build — é fonte de verdade, editável normalmente.

Duas conferências mostram que a cópia ficou fiel ao original:

- o `npm run build` gera um CSS **byte a byte igual** ao que está publicado
  (20.900 bytes);
- o HTML que o navegador monta nos dois sites é **idêntico**, tag por tag.

## Imagens

No site da Netlify as imagens eram servidas por `storage.lucasmendes.dev`, um
servidor de terceiros. Aqui elas foram baixadas para `public/img` e
`public/produtos`, e o site passou a servi-las por conta própria — se aquele
servidor sair do ar, este site continua inteiro.
