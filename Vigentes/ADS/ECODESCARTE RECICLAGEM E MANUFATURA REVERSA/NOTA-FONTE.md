# Nota sobre a origem deste site

Este site era um WordPress na Hostinger, em `ecodescarte.com`. Ele **saiu do
ar** quando a conta `u293911618` foi suspensa: o dominio parou de responder e
nao ha mais nada publicado nesse endereco. O que esta nesta pasta e o site
recuperado por inteiro a partir do backup, em 01/09/2026.

**Ele voltou ao ar em 01/09/2026, em
`https://ecodescarte-reciclagem-e-manufatura.vercel.app`.** O endereco saiu
cortado de proposito pela Vercel: o projeto se chama
`ecodescarte-reciclagem-e-manufatura-reversa`, mas ela encurta nomes longos ao
montar o `.vercel.app`. O endereco antigo, `ecodescarte.com`, continua morto —
o dominio nao e da Hostinger e a zona de DNS dele foi apagada na suspensao.
Note que `ecodescarte.vercel.app` existe, mas **nao e nosso**: e outro projeto,
de outra conta, com o mesmo nome.

## De onde veio

Duas metades, guardadas em lugares diferentes da mesma maquina:

- os arquivos, em `C:\dev\sites-hostinger2\domains\ecodescarte.com\public_html`
  (WordPress 6.9.7, tema Hello Elementor, paginas montadas no Elementor Pro);
- **o banco de dados**, em
  `C:\dev\sites-hostinger2\.dbdumps\u293911618_tkIBK.20260827193948.sql.gz`,
  do backup de 27/08/2026.

No WordPress, todo o texto e o layout do Elementor moram no banco, nao nos
arquivos. Separadas, nenhuma das duas metades servia para nada; juntas, sao o
site completo.

## Como foi remontado

O WordPress foi levantado de novo numa instalacao temporaria (PHP 8.2 e
MariaDB portateis, fora deste repositorio), o banco foi restaurado, e cada
pagina foi gravada ja pronta, do jeito que o visitante a via. Depois os
enderecos `ecodescarte.com` foram trocados por caminhos internos.

Nao ha PHP nem banco de dados aqui — so HTML, CSS, JS e imagens. A Vercel
serve isso direto, sem build e sem `npm install`. A pasta tem `wp-content/` e
`wp-includes/` porque os caminhos das imagens, fontes e estilos foram mantidos
exatamente como estavam, para nada quebrar.

Foram gravadas **11 paginas**: a home, Sobre Nos, Servicos, Contato, Blog, os
dois artigos do blog, os arquivos por data e por autor, e a pagina de erro
(`404.html`). Os 178 arquivos de imagem, video, estilo e fonte que essas
paginas usam vieram junto — nenhuma referencia ficou quebrada.

Seis plugins foram desativados por nao servirem fora da Hostinger ou por nao
fazerem sentido num site estatico: `hostinger`, `hostinger-ai-assistant`,
`hostinger-easy-onboarding`, `hostinger-reach`, `litespeed-cache` e
`template-kit-import`. Nada do que o visitante ve depende deles.

## O que funciona e o que nao funciona

Funciona: todas as paginas, as fotos e os videos, o telefone
`(65) 99322-6174`, o e-mail `contato@ecodescarte.com`, o botao flutuante de
WhatsApp (`wa.me/5565993226174`), o mapa, os depoimentos do Google e os links
de Facebook (`facebook.com/ecodescarte`) e Instagram (`instagram.com/ecodescarte`).

**Nao funciona: o formulario da pagina de Contato.** Ele era do Elementor Pro
e dependia do PHP do WordPress para mandar o e-mail. Num site estatico nao ha
para onde enviar: quem preencher e clicar nao recebe resposta e o contato se
perde. Isso precisa de decisao comercial antes de o site ir para o ar —
ligar o formulario a um servico externo de envio, ou tirar o formulario e
deixar o WhatsApp e o e-mail, que ja aparecem na mesma pagina.

Tambem ficaram para tras, e nao fazem falta para o visitante: a area de
administracao (`/wp-admin`), o feed RSS, a busca do WordPress e os
comentarios.

## Se o cliente pedir alteracao

Como o banco de dados existe, este site **nao esta congelado**: da para
levantar o WordPress de novo a partir do dump, numa hospedagem que rode PHP e
MySQL, e o painel do Elementor volta a funcionar. A Vercel nao serve para
isso, porque nao roda PHP.

Para mudanca pontual (um telefone, um texto curto, uma foto), da para editar o
HTML aqui e republicar. O HTML gerado pelo Elementor e verboso — o texto
visivel fica no meio de muita marcacao —, entao para mudanca de layout de
verdade o caminho e remontar o WordPress.

## Um ponto de atencao

O video de fundo da home (`wp-content/uploads/2026/01/IMG_4747-4.mov`) tem
44 MB e esta em formato `.mov`. Ja era assim no site original: pesa para quem
abre pelo celular e nem todo navegador toca esse formato. Vale converter para
um `.mp4` menor quando houver oportunidade.
