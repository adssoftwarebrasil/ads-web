# Nota sobre a origem deste site

O site do Pisar Certo era um WordPress na Hostinger, em `pisarcerto.com.br`.
Ele **saiu do ar** com a suspensao da conta `u293911618`: o dominio parou de
responder e nao ha mais nada publicado nesse endereco. O que esta nesta pasta e
o site recuperado por inteiro a partir do backup, em 01/09/2026.

## De onde veio

Duas metades, guardadas em lugares diferentes da mesma maquina:

- os arquivos, em `C:\dev\sites-hostinger2\domains\pisarcerto.com.br\public_html`
  (WordPress 6.7.7, tema Hello Elementor com tema filho, paginas montadas no
  Elementor Pro mais os plugins Jet);
- **o banco de dados**, em
  `C:\dev\sites-hostinger2\.dbdumps\u293911618_69STW.20260827193948.sql.gz`,
  do backup de 27/08/2026.

No WordPress, todo o texto e o layout do Elementor moram no banco, nao nos
arquivos. Separadas, nenhuma das duas metades servia para nada; juntas, sao o
site completo.

## Como foi remontado

O WordPress foi levantado de novo numa instalacao temporaria (PHP 8.2 e
MariaDB portateis, fora deste repositorio), o banco foi restaurado, e cada
pagina foi gravada ja pronta, do jeito que o visitante a via. Depois os
enderecos `pisarcerto.com.br` foram trocados por caminhos internos.

Nao ha PHP nem banco de dados aqui — so HTML, CSS, JS e imagens. A Vercel
serve isso direto, sem build e sem `npm install`. A pasta tem `wp-content/` e
`wp-includes/` porque os caminhos das imagens, fontes e estilos foram mantidos
exatamente como estavam, para nada quebrar.

Cinco plugins foram desativados por nao servirem fora da Hostinger ou por nao
fazerem sentido num site estatico: `hostinger`, `hostinger-ai-assistant`,
`hostinger-easy-onboarding`, `litespeed-cache` e `duplicate-page`. Nada do que
o visitante ve depende deles.

Duas coisas precisaram de conserto e vale registrar, porque nao apareceriam
sozinhas:

- **As letras do site.** As fontes ficam guardadas dentro do proprio site, mas
  o arquivo que as chama continuava apontando para `pisarcerto.com.br`, o
  endereco morto. Do jeito que estava, o site abriria com a fonte errada assim
  que fosse publicado. Foram trazidas as 106 fontes para dentro da pasta.
- Havia uma referencia a `md5.nossosclientes.com.br`, um endereco de testes que
  nao e do cliente, de onde vinha uma imagem de fundo. O arquivo foi trazido
  para dentro e essa referencia sumiu.

## O que esta aqui

**O site e de uma pagina so**: o menu leva a ancoras da propria home (sobre,
palmilhas, servicos, produtos, vantagens, depoimentos, contato).

Alem dela existem, em enderecos proprios, a Politica de privacidade, a pagina
Blog, a listagem de Produtos e as **19 paginas de produto e servico** —
Acupuntura, Fisioterapia, Palmilhas Ortopedicas, Palmilhas Esportivas,
Baropodometria, Reabilitacao, Fascite Plantar, Esporao de Calcaneo,
Metatarsalgias, Neuroma de Morton, Sesamoidite, Dores nos tornozelos e
joelhos, Joanete, Dedos em garra e dedos em martelo, Palmilhas para pes
diabeticos, Palmilhas para Criancas, Palmilhas para a terceira idade,
Palmilhas de Fibra de Carbono e Palmilhas para salto alto. Elas **nunca
estiveram no menu**, ja era assim no site original, mas ficaram gravadas aqui
porque tem endereco proprio e podem estar salvas ou indexadas por ai.

Ha ainda as duas listagens por categoria (Produto e Servico) e as paginas de
continuacao dessas listas. Sao 28 paginas no total, contando a de erro
(`404.html`), e 225 arquivos de imagem, estilo e fonte — nenhuma referencia
ficou quebrada.

## O que funciona e o que nao funciona

Funciona: todas as paginas, as fotos, o telefone `(62) 3638 2931`, o e-mail
`contato@pisarcerto.com.br`, os botoes de WhatsApp (`(62) 98156-5601`), o mapa
da R. 94 A, Qd-F-18, Lt-02, Nº 30 — Setor Sul, Goiania/GO, os depoimentos e os
links do Instagram (`instagram.com/pisarcerto`) e do Facebook.

O codigo que mede as visitas (Google Tag Manager) veio junto e continua
funcionando, na conta `GTM-M7K8WMZ8`.

**Nao funciona: o formulario de contato da home.** Ele era do Elementor Pro e
dependia do PHP do WordPress para mandar o e-mail. Num site estatico nao ha
para onde enviar: quem preencher e clicar nao recebe resposta e o contato se
perde. Foi decidido publicar assim mesmo, mantendo o formulario na tela como
estava no site original. **Isso continua pendente de decisao comercial**:
ligar o formulario a um servico externo de envio, ou tirar o formulario e
deixar so o WhatsApp e o e-mail, que ja aparecem na mesma secao.

Tambem ficaram para tras, e nao fazem falta para o visitante: a area de
administracao (`/wp-admin`), o feed RSS, a busca do WordPress e os
comentarios.

## Duas observacoes para quem for cuidar do site

**A galeria de fotos estava escondida.** No site original havia uma secao de
galeria e um item de menu para ela, mas os dois estavam desligados por
configuracao (`display: none`), entao o visitante nunca os via. Aqui ficou
igual: escondidos. As fotos existem no backup e podem voltar, se o cliente
pedir.

**Tres fotos sao muito pesadas** — 10 MB, 9 MB e 5 MB — e sozinhas respondem
por mais da metade do tamanho do site. Ja era assim no site original e deixa o
carregamento lento, principalmente no celular. Reduzi-las e uma melhoria facil
e vale propor.

## Se o cliente pedir alteracao

Como o banco de dados existe, este site **nao esta congelado**: da para
levantar o WordPress de novo a partir do dump, numa hospedagem que rode PHP e
MySQL, e o painel do Elementor volta a funcionar. A Vercel nao serve para
isso, porque nao roda PHP.

Para mudanca pontual (um telefone, um texto curto, uma foto), da para editar o
HTML aqui e republicar. O HTML gerado pelo Elementor e verboso — o texto
visivel fica no meio de muita marcacao —, entao para mudanca de layout de
verdade o caminho e remontar o WordPress.
