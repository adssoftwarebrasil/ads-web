# GRA Distribuidora de Peças

Site institucional da GRA Distribuidora de Peças, desenvolvido como aplicação estática em React + Vite.

## Requisitos

- Node.js 20.19 ou superior
- npm

## Executar localmente

```bash
npm install
npm run dev
```

O Vite exibirá no terminal o endereço local para acesso no navegador.

## Gerar a versão de produção

```bash
npm run build
npm run preview
```

A saída de produção é gerada em `dist/`.

## Estrutura principal

- `src/components/`: cabeçalho e botão flutuante de WhatsApp.
- `src/sections/`: seções de apresentação, serviços, estrutura, história, contato e rodapé.
- `src/assets/`: logo e fotografias fornecidas pela empresa.
- `public/videos/`: vídeos institucionais fornecidos pela empresa.
- `src/styles/`: estilos globais, responsivos e específicos da página.

## Variáveis de ambiente

O projeto não utiliza variáveis de ambiente.

## Publicação manual na Vercel

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

Não é necessário `vercel.json`, pois a página não utiliza rotas do React Router.
