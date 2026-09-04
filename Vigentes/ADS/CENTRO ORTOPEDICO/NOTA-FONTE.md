# Nota sobre a origem deste site

**Este e o site ORIGINAL do Centro Ortopedico, o mesmo que o cliente tinha na
Hostinger, recuperado por inteiro — e desde 01/09/2026 e o unico site do
cliente.** O site em React que existia antes foi descartado; ver a secao
"Qual site ficou no ar".

## De onde veio

O site original era um WordPress com Elementor, em
`centroortopedicoce.com.br`. O dominio saiu do ar em 28/08/2026, quando a
conta da Hostinger `u293911618` foi suspensa. Na epoca ele foi dado como
perdido, e por isso um site novo foi escrito do zero, em React, a partir do que
aparecia no Google. Esse site novo foi descartado em 01/09/2026.

O site original, porem, **nao estava perdido**. Faltavam duas metades que
estavam guardadas em lugares diferentes da mesma maquina:

- os arquivos, em `C:\dev\sites-hostinger2\domains\centroortopedicoce.com.br`;
- **o banco de dados**, em
  `C:\dev\sites-hostinger2\.dbdumps\u293911618_Jfvvn.20260827193948.sql.gz`,
  do backup de 27/08/2026.

No WordPress, todo o texto, os produtos e o layout do Elementor moram no banco,
nao nos arquivos — por isso, separadas, nenhuma das duas metades servia para
nada. Juntas, sao o site completo.

## Como foi remontado

O WordPress foi levantado de novo numa instalacao temporaria (PHP 8.2 e MariaDB
portateis, fora deste repositorio), o banco foi restaurado, e as paginas foram
gravadas ja prontas, como o visitante as via. Depois os enderecos foram
trocados por caminhos internos.

Foram recuperadas **23 paginas**: a home, a politica de privacidade, o blog, a
listagem de produtos com sua segunda pagina, e as **18 paginas de produto**.
Todos os 211 arquivos de imagem, estilo e fonte que essas paginas usam vieram
junto — nada ficou faltando.

Tres plugins da Hostinger (`hostinger`, `hostinger-ai-assistant`,
`hostinger-easy-onboarding`) foram desativados: eles quebravam fora do
ambiente da Hostinger e nao mudam nada do que o visitante ve.

Havia tambem referencias a `centroortopedi.nossosclientes.com.br`, um endereco
de testes antigo que hoje esta morto e de onde as fontes do site eram
carregadas. As fontes foram trazidas para dentro da pasta e essas referencias
sumiram.

## As fotos que faltaram na primeira publicacao

Na primeira vez que este site foi publicado, o fundo de uma das secoes da home
ficou sem foto. Vale entender por que, porque o mesmo erro pode acontecer em
qualquer outro site recuperado assim.

Ao gravar as paginas, so vieram as fotos escritas de forma direta no HTML. Mas
essa secao usa um **fundo em slideshow**: as duas fotos dela nao estao no HTML
como imagem, e sim dentro de uma lista em JSON que o Elementor le e monta com
JavaScript depois que a pagina abre. Como a lista usa barras escapadas
(`\/wp-content\/uploads\/...`), a leitura nao a reconhecia como endereco de
imagem, e as duas fotos nunca foram copiadas.

Das 44 fotos que as paginas pedem, **eram essas 2 que faltavam** — as outras 42
sempre estiveram certas. Para nao correr o risco de novo, a pasta de imagens do
site foi copiada inteira, e nao so o que estava sendo citado: sao 362 arquivos,
46 MB. Boa parte deles sao versoes em tamanhos diferentes que o WordPress gera
sozinho e que talvez nunca sejam usadas — e barato manter, e garante que nenhuma
foto suma.

Verificado depois no ar: as 23 paginas abrem e nenhuma imagem quebra.

## A foto de capa da home

Em 01/09/2026 o fundo da primeira secao da home passou a ser a **foto da
fachada da loja**, a pedido do responsavel. Em 03/09/2026 essa foto foi
trocada por uma nova foto da fachada, enviada pelo responsavel, que hoje esta
em `wp-content/uploads/2026/09/foto-de-capa-2026-09.jpg`. A foto anterior
(`foto-de-capa.jpg`) saiu da pasta e so existe no historico do git.

O nome do arquivo muda de proposito a cada troca: o `vercel.json` manda o
navegador guardar tudo que esta em `wp-content/uploads` por um ano
(`immutable`), entao gravar por cima do mesmo nome faria quem ja visitou o
site continuar vendo a foto velha.

Antes dela, essa secao usava o fundo em slideshow do Elementor, com duas fotos
que trocavam sozinhas. Esse slideshow foi desligado: as duas fotos so entravam
na tela por JavaScript, e sem isso a secao aparecia como um bloco cinza. Agora
a foto e um fundo comum, escrito direto no CSS, e aparece mesmo que o
JavaScript nao rode.

O veu escuro por cima da foto foi mantido como estava (preto a 46%): e ele que
deixa o texto branco legivel em cima da imagem.

As duas fotos antigas do slideshow continuam guardadas na pasta
(`wp-content/uploads/2025/04/b746ff71-....jpg` e `10c01b41-....jpg`). Nenhuma
pagina as usa hoje; ficaram para o caso de alguem querer voltar atras.

## O que funciona e o que nao funciona

O site e de **uma pagina so**: o menu leva a ancoras da propria home (sobre,
servicos, produtos, vantagens, galeria, depoimentos, contato). As paginas de
produto existem em `/produtos/<nome-do-produto>/`, mas nunca estiveram no menu
— era assim no site original tambem.

Funciona: todas as 23 paginas, as fotos, os telefones `(85) 3226-5265` e
`(85) 3253-5893`, o e-mail `centroortopedico@hotmail.com.br`, os botoes de
WhatsApp e os links de Facebook e Instagram.

Nao funciona, porque dependia do WordPress ligado: busca, comentarios,
formularios que enviam para o servidor e a area de administracao.

## Qual site ficou no ar

Por um tempo existiram dois sites para o mesmo cliente: este, o original
recuperado, e um refeito em React a partir do que aparecia no Google, de quando
o original era dado como perdido.

**Em 01/09/2026 ficou decidido: fica o original.** O site em React foi
descartado. Este aqui ocupou a pasta `CENTRO ORTOPEDICO`, a pasta
`CENTRO ORTOPEDICO (ORIGINAL)` deixou de existir, e o projeto na Vercel passou
a se chamar `centro-ortopedico`.

Enderecos, hoje:

| Endereco | Situacao |
|---|---|
| `centro-ortopedico-original.vercel.app` | e o que abre; continua valendo mesmo depois da troca de nome |
| `centroortopedicoce.com.br` | esta ligado ao projeto na Vercel, mas **o DNS nao resolve** — nao abre para ninguem |

Duas coisas para quem for mexer nisso:

- O projeto tem **protecao de acesso ligada** ("tudo, menos dominio proprio"),
  entao o endereco `.vercel.app` responde 403 para quem nao esta logado na
  conta da Vercel. Enquanto estiver assim, o site nao serve para divulgar.
- Se o dominio `centroortopedicoce.com.br` for apontado para a Vercel, preserve
  os registros de e-mail da zona, senao o e-mail do cliente cai.

## Se o cliente pedir alteracao

Como o banco de dados existe, este site **nao esta congelado**: da para
levantar o WordPress de novo a partir do dump, numa hospedagem que rode PHP e
MySQL, e o painel de administracao volta a funcionar. A Vercel nao serve para
isso, porque nao roda PHP.

Para mudanca pontual (um telefone, um texto curto), da para editar o HTML aqui
e republicar. Para mudanca de verdade, o caminho e remontar o WordPress.
