# Goiatuba Hotel

Site institucional do Goiatuba Hotel, em Goianésia/GO, desenvolvido como uma aplicação local React + Vite.

## Como executar

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

A build é gerada em `dist/`.

## Estrutura

- `src/components/`: cabeçalho, rodapé, identidade e componentes reutilizáveis.
- `src/sections/`: seções comerciais da página.
- `src/assets/hotel/`: fotos e vídeo fornecidos pelo cliente.
- `src/styles/`: estilos globais, responsividade e animações.

## Variáveis de ambiente

Nenhuma variável de ambiente é necessária.

## Publicação manual na Vercel

- Framework Preset: Vite
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`

Não é necessário `vercel.json`, pois o site usa navegação por âncoras em uma única página.
