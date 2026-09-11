# Nota sobre a origem deste site

O site do GV Autos era um WordPress na Hostinger, em `gvautos.com.br`. Ele
**saiu do ar** com a suspensao da conta `u293911618`: o dominio parou de
responder e nao ha mais nada publicado nesse endereco. O que esta nesta pasta e
o site recuperado por inteiro a partir do backup, em 01/09/2026.

**Ele voltou ao ar em 01/09/2026, em `https://gv-autos.vercel.app`.** O
endereco antigo, `gvautos.com.br`, continua morto: o dominio nao responde
desde a suspensao da conta.

## De onde veio

Duas metades, guardadas em lugares diferentes da mesma maquina:

- os arquivos, em `C:\dev\sites-hostinger2\domains\gvautos.com.br\public_html`
  (WordPress 7.0.4, tema Hello Elementor com tema filho, paginas montadas no
  Elementor Pro mais os plugins Jet);
- **o banco de dados**, em
  `C:\dev\sites-hostinger2\.dbdumps\u293911618_KlBTZ.20260827193948.sql.gz`,
  do backup de 27/08/2026.

No WordPress, todo o texto e o layout do Elementor moram no banco, nao nos
arquivos. Separadas, nenhuma das duas metades servia para nada; juntas, sao o
site completo.

## Como foi remontado

O WordPress foi levantado de novo numa instalacao temporaria (PHP 8.2 e
MariaDB portateis, fora deste repositorio), o banco foi restaurado, e cada
pagina foi gravada ja pronta, do jeito que o visitante a via. Depois os
enderecos `gvautos.com.br` foram trocados por caminhos internos.

Nao ha PHP nem banco de dados aqui — so HTML, CSS, JS e imagens. A Vercel
serve isso direto, sem build e sem `npm install`. A pasta tem `wp-content/` e
`wp-includes/` porque os caminhos das imagens, fontes e estilos foram mantidos
exatamente como estavam, para nada quebrar.

Cinco plugins foram desativados por nao servirem fora da Hostinger ou por nao
fazerem sentido num site estatico: `hostinger`, `hostinger-ai-assistant`,
`hostinger-easy-onboarding`, `litespeed-cache` e `duplicate-page`. Nada do que
o visitante ve depende deles.

Havia tambem uma referencia a `md1.nossosclientes.com.br`, um endereco de
testes que nao e do cliente, de onde a home carregava uma imagem de recorte.
O arquivo foi trazido para dentro da pasta e essa referencia sumiu.

## O que esta aqui

**O site e de uma pagina so**: o menu leva a ancoras da propria home (sobre,
servicos, produtos, galeria, vantagens, depoimentos, contato).

Alem dela existem, em enderecos proprios, a Politica de privacidade, a pagina
Blog, a listagem de Produtos e as **5 paginas de servico** — Troca de Oleo e
Filtros, Suspensao e Direcao, Manutencao Preventiva, Manutencao de Freios e
Cambio Automatico. Elas **nunca estiveram no menu**, ja era assim no site
original, mas ficaram gravadas aqui porque tem endereco proprio e podem estar
salvas ou indexadas por ai. Sao 10 paginas no total, contando a de erro
(`404.html`), e 109 arquivos de imagem, estilo e fonte — nenhuma referencia
ficou quebrada.

## O que funciona e o que nao funciona

Funciona: todas as paginas, as fotos, o telefone `(85) 99612-2422`, o e-mail
`contato@gvautos.com.br`, os botoes de WhatsApp, o mapa da
Avenida Jose Leon, 1131, Jardim das Oliveiras — Fortaleza/CE, os depoimentos
do Google e o link do Instagram (`instagram.com/gvautos_`).

O codigo que mede as visitas (Google Tag Manager) veio junto, mas chegou
**quebrado**: a limpeza dos enderecos comeu o `?id=` do endereco de onde o
arquivo do Google e baixado, entao ele pedia um arquivo inexistente e nenhuma
visita era registrada. Isso foi corrigido nas 10 paginas em 02/09/2026 e o
medidor voltou a carregar. **Se o site for gerado de novo a partir do banco,
confira essa linha de novo.** Sao **duas contas de medicao** no site,
`GTM-KPMJZP9X` e `GTM-MWLC9W9J` — provavelmente uma da agencia e uma do
cliente. Vale conferir se as duas ainda sao para manter.

**Nao funciona: o formulario de contato da home.** Ele era do Elementor Pro e
dependia do PHP do WordPress para mandar o e-mail. Num site estatico nao ha
para onde enviar: quem preencher e clicar nao recebe resposta e o contato se
perde. **O site ja esta no ar assim**, entao vale resolver logo: ligar o
formulario a um servico externo de envio, ou tirar o formulario e deixar o
WhatsApp e o e-mail, que ja aparecem na mesma pagina.

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
