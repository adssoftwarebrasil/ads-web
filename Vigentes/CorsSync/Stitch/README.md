# Kadima Soluções em Informática

Site institucional da Kadima Soluções em Informática, criado como uma aplicação local Vite + React.

## Requisitos

- Node.js 20.19+ ou 22.12+
- npm

## Executar localmente

```bash
npm install
npm run dev
```

O Vite exibirá o endereço local no terminal, normalmente `http://localhost:5173`.

## Gerar a versão de produção

```bash
npm run build
```

A build otimizada será criada no diretório `dist`.

Para conferir a build localmente:

```bash
npm run preview
```

## Estrutura principal

- `src/components`: componentes compartilhados, navegação, marca, ícones e rodapé.
- `src/sections`: seções comerciais e institucionais da página.
- `src/data/siteData.js`: contatos, navegação, serviços e áreas atendidas.
- `src/styles`: estilos globais, componentes e adaptações responsivas.
- `public/assets`: imagens locais da Kadima utilizadas no site.

## Variáveis de ambiente

Nenhuma variável de ambiente é necessária.

## Publicação na Vercel

O arquivo `vercel.json` já configura o projeto como Vite. No painel da Vercel,
confirme também as opções abaixo em **Settings → Build and Deployment**:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`
- Root Directory: vazio (a raiz do repositório)

Depois de salvar as configurações, faça um novo deploy da branch `main`.
