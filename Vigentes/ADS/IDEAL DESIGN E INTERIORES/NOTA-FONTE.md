# Nota sobre a origem deste site

Este site era um WordPress na Hostinger, em `idealdesigneinteriores.com.br`.
Ele **saiu do ar** quando a conta `u257781368` foi suspensa: o dominio parou de
responder (nao resolve mais) e nao ha nada publicado nesse endereco. O que esta
nesta pasta e o site recuperado por inteiro a partir do backup, em 01/09/2026.

## De onde veio

Duas metades, guardadas em lugares diferentes da mesma maquina:

- os arquivos, em
  `C:\dev\sites-hostinger3\domains\idealdesigneinteriores.com.br\public_html`
  (WordPress, tema Hello Elementor com tema-filho, paginas montadas no
  Elementor Pro mais JetEngine);
- **o banco de dados**, em
  `C:\dev\sites-hostinger3\.dbdumps\u257781368_aVsUs.20260828145202.sql.gz`,
  do backup de 28/08/2026.

O WordPress foi remontado numa maquina local (PHP e MariaDB portateis), o site
foi percorrido pagina a pagina e gravado como HTML. **Nao ha mais WordPress
aqui**: o que esta nesta pasta e o site pronto, em HTML, CSS, JavaScript e
imagens. Da para editar o texto e as fotos direto nos arquivos; nao da para
usar o painel do WordPress.

## O que esta publicado

14 enderecos, todos conferidos:

- `/` — a home, com todas as secoes (sobre, servicos, produtos, galeria,
  vantagens, depoimentos e contato);
- `/produtos/` e as 10 paginas de produto (Area Gourmet, Banheiro / Lavabo,
  Closet, Cozinha, Escritorio - Home Office, Projetos Organicos e Especiais,
  Quarto Adulto, Quarto Infantojuvenil, Sala e Suite);
- `/blog/` e `/politica-de-privacidade/`;
- uma pagina de erro (`404.html`) para endereco que nao existe.

## Tres coisas que mudaram em relacao ao site antigo

1. **O formulario de contato agora manda para o WhatsApp.** Em site sem
   WordPress nao existe quem envie o e-mail. O botao "Enviar mensagem" monta a
   mensagem com o que a pessoa preencheu e abre o WhatsApp da loja
   ((62) 99435-9946) com o texto pronto. O codigo esta em
   `assets/formulario-whatsapp.js`. Se um dia o cliente quiser voltar a receber
   por e-mail, da para ligar num servico externo (Formspree, Web3Forms e
   parecidos).

2. **Uma foto da home foi trocada.** Na secao "Por Que Escolher a Ideal Design
   & Interiores?" havia uma foto que nunca esteve neste site: ela era servida
   pelo site de modelo da agencia (`md3.nossosclientes.com.br`), que ja apagou
   o arquivo. No lugar entrou uma foto de cozinha do proprio cliente
   (`wp-content/uploads/2025/06/C13.jpg`). Trocar por outra e so mudar esse
   caminho no `index.html`.

3. **As fontes passaram a ser servidas por nos.** Elas tambem vinham do site de
   modelo da agencia. Os arquivos foram trazidos para
   `wp-content/uploads/elementor/google-fonts/`, entao o site nao depende mais
   de servidor de terceiro para aparecer com a letra certa.

## Revisao de 01/09/2026

Depois de publicar, o codigo foi revisto inteiro. O que se achou e o que foi
feito:

- **Faltavam os pacotes que o Elementor carrega sob demanda.** O nome deles
  (`<hash>.bundle.min.js`) e montado por JavaScript na hora, entao nenhum
  percorredor os descobre e nenhum aparece no HTML. Sem eles, contador,
  carrossel de depoimentos, menu e galeria ficariam sem funcionar. Os 119
  arquivos (0,9 MB) foram trazidos do backup para
  `wp-content/plugins/elementor{,-pro}/assets/js/`. **Confira isso em qualquer
  outro site recuperado do mesmo jeito.**
- **O telefone (62) 98427-8289 foi retirado** do cabecalho e do rodape das 15
  paginas, a pedido. Ficou so o (62) 99435-9946.
- **Tags mortas no cabecalho da pagina**: o WordPress anunciava feed RSS,
  `wp-json`, `xmlrpc` e oEmbed, que nao existem mais. Foram removidas (110 no
  total). Nada disso aparecia na tela; eram avisos para robos de busca.
- **O link "Ir para o conteudo"** (usado por leitor de tela) apontava para uma
  ancora que nao existia. Corrigido nas 15 paginas.
- Conferido tambem: os 26 arquivos de JavaScript compilam, o
  `frontend.min.js` do Elementor esta inteiro (32098 bytes, nao e a copia
  truncada que apareceu em outros sites), nenhum arquivo esta com a caixa das
  letras trocada (o que quebraria so na Vercel, que roda Linux) e nenhum dos
  153 links internos aponta para pagina inexistente.

### Duas coisas do site antigo que continuam erradas e precisam de decisao

No menu do topo, **"Produtos" e "Galeria" nao levam a lugar nenhum**. Eles
apontam para `/#produtos` e `/#galeria`, e essas marcacoes nunca existiram na
pagina — o defeito ja era assim no site no ar, nao veio da recuperacao. A
secao que lista os 10 ambientes se chama "Nossos servicos" e responde por
`/#servicos`; galeria de fotos, propriamente, a home nao tem. Decidir para
onde esses dois itens devem apontar e escolha de quem cuida do cliente.

## O que continua igual

O codigo que mede as visitas (Google Tag Manager, GTM-NWZHGP6R) segue instalado
em todas as paginas. Os botoes de WhatsApp, o e-mail, o mapa e o telefone
(62) 99435-9946 continuam como estavam.
