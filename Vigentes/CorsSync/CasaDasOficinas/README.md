# Casa das Oficinas

Site institucional da Casa das Oficinas, desenvolvido como uma aplicação local em React + Vite.

## Requisitos

- Node.js 20 ou superior
- npm

## Executar localmente

```bash
npm install
npm run dev
```

O Vite informará no terminal o endereço local da aplicação.

## Gerar e conferir a versão de produção

```bash
npm run build
npm run preview
```

A build é gerada em `dist/`.

## Estrutura principal

- `src/assets/`: logotipo e fotografias otimizadas da empresa;
- `src/components/`: cabeçalho, revelação no scroll e botão de WhatsApp;
- `src/sections/`: seções comerciais e institucionais da página;
- `src/data/siteData.js`: contatos, áreas atendidas e textos repetitivos;
- `src/styles/`: estilos globais, layout e responsividade.

## Variáveis de ambiente

O projeto não requer variáveis de ambiente.

## Publicação manual na Vercel

- Framework Preset: `Vite`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`

O site usa navegação por âncoras em uma única página, portanto não precisa de `vercel.json`.
