# De onde veio este site

> **Onde esta no ar:** `https://cirurgica-campmed.vercel.app`
> (projeto `cirurgica-campmed` na Vercel).
> O dominio `cirurgicacampmed.com.br` **ainda nao aponta para ca** — ele
> continua servindo o WordPress antigo na Hostinger. Trocar o DNS e um passo
> separado, que precisa ser pedido.


O codigo-fonte original da CAMPMED estava perdido. O que existe aqui foi
remontado, e este arquivo registra de onde veio cada parte — para nao se
perder de novo.

## O que estava no ar antes

`https://cirurgicacampmed.com.br/` rodava em WordPress, na conta 2 da
Hostinger. Esse WordPress **nao tinha o site de verdade**: as imagens eram
puxadas de fora, de `https://campmedlp.lovable.app/`, que era um site em
React/Vite publicado pelo Lovable. O WordPress era uma copia do visual.

Existe ainda uma instalacao antiga e diferente em
`campmed.sitesdeclientesads.site` (conta 1 da Hostinger, pasta
`domains/sitesdeclientesads.site/public_html/campmed`), com WooCommerce. Nao
foi usada — nao e o site que estava no ar.

## Como o conteudo foi recuperado

- **Textos**: baixados das 9 paginas publicadas em `cirurgicacampmed.com.br`
  (inicio, catalogo e as 7 categorias) e transcritos para
  `src/data/site.ts`. Nenhum texto foi inventado; o que mudou foi so a
  organizacao na tela.
- **Imagens**: baixadas de `campmedlp.lovable.app/assets/`, recomprimidas e
  renomeadas para nomes legiveis em `public/img/`.
- **Logotipo**: veio da instalacao antiga na Hostinger, ja recortado
  (`logo-campmed-...-e1772765860378.png`), com o fundo branco removido.
- **Nao havia sourcemap** no bundle do Lovable, entao o codigo React nao pode
  ser recuperado. O que esta aqui foi escrito do zero, com o conteudo original.

## O que mudou em relacao ao site antigo

- O topo era uma foto de cartao de visita da loja; virou o video
  institucional (`public/media/`), a pedido do cliente.
- A paleta era verde-agua e nao combinava com o logotipo, que e azul. Agora as
  cores saem do proprio logotipo.
- Cada produto e cada categoria tem botao de WhatsApp com a mensagem ja
  escrita, para o visitante cair na conversa certa.

## Video do topo

Original entregue pelo cliente: `herocampmed.mp4`, 1280x720, 10s, 1,8 MB, com
audio.

Publicado em `public/media/` em duas versoes, sem audio (o video tem legendas
embutidas, entao o som nao faz falta e o navegador so toca sozinho no mudo):

| Arquivo | Tamanho |
|---|---|
| `hero-campmed.webm` (VP9) | 407 KB |
| `hero-campmed.mp4` (H.264) | 457 KB |
| `hero-campmed-poster.jpg` | 10 KB |

O navegador escolhe o `.webm` quando consegue, e cai no `.mp4` quando nao.
