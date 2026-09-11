# Nota sobre a origem deste site

**Este site nao tem codigo-fonte. E uma copia congelada, que da para
republicar, mas nao para editar.** Leia antes de aceitar qualquer pedido de
alteracao do cliente.

## De onde vieram os arquivos

O site original era um WordPress com Elementor e WooCommerce, hospedado na
Hostinger em `carretaseengatesemanuel.com.br`. Esse dominio esta fora do ar e
a conta da Hostinger onde ele vivia esta suspensa.

A copia local da hospedagem (`C:\dev\sites-hostinger2\domains\`) tem os
arquivos do WordPress, mas nao tem, dentro da pasta do dominio, o banco de
dados — e e no banco que moram todo o texto, os produtos e o layout do
Elementor, nao nos arquivos.

**O banco existe, so fica em outro lugar:**
`C:\dev\sites-hostinger2\.dbdumps\u293911618_jjEx0.20260827193948.sql.gz`,
do backup de 27/08/2026. Ele confirma 50 produtos publicados e 8 paginas, o
que bate com o que foi recuperado aqui.

O que salvou o site foi o **cache do plugin WP-Optimize**
(`wp-content/cache/wpo-cache/`), que guardava as paginas ja montadas em HTML,
como o visitante as via. A ultima gravacao desse cache e de **06/08/2026**.

Foram aproveitadas as **74 paginas** que estavam no cache — home, loja, blog,
politica de privacidade, as 12 categorias de produto e 55 paginas de produto —
mais as imagens e os arquivos de estilo que essas paginas usam.

## O que foi mudado na copia

Nada de conteudo. Apenas os enderecos: as paginas apontavam para
`https://carretaseengatesemanuel.com.br/...` e passaram a apontar para
caminhos internos, para o site funcionar no endereco novo.

Nao foram copiados para este repositorio: o WordPress em si, os plugins em
PHP, o `wp-config.php` (que tem a senha do banco) e o resto da hospedagem.
A pasta caiu de 653 MB para 55 MB.

## O que funciona e o que nao funciona

Funciona: navegar por todas as 74 paginas, ver os produtos, as fotos, e o
botao de WhatsApp (que leva para `55 62 9932-4671`).

Nao funciona, porque dependia do WordPress rodando por tras:

- os **filtros de produto** em duas paginas de categoria — os botoes aparecem,
  mas nao filtram;
- a **pagina 2 da categoria "engate fixo"** — nao estava no cache, da erro;
- comentarios, busca e a area de administracao do WordPress.

Nao havia carrinho nem checkout ligados no site, entao nada de venda online
foi perdido: a loja ja funcionava como catalogo, com o contato pelo WhatsApp.

## Se o cliente pedir alteracao

**Do jeito que esta publicado**, nao da para editar como se edita um WordPress:
nao existe painel, e mexer no HTML congelado de uma pagina do Elementor e
trabalhoso e arriscado.

Mas o site nao esta condenado a isso. Como o dump do banco existe (endereco
acima), da para levantar o WordPress de novo — restaurando o banco e apontando
os arquivos para ele — e voltar a ter o painel do WordPress e o Elementor
funcionando. Isso exige uma hospedagem com PHP e MySQL, que a Vercel nao e.

Entao, diante de um pedido de alteracao, ha dois caminhos:

1. **mudanca pontual** (um telefone, um preco, um texto curto): editar direto
   no HTML da pagina aqui, com cuidado, e republicar;
2. **mudanca de verdade** (produtos novos, secao nova, o cliente querendo
   mexer sozinho): remontar o WordPress a partir do dump numa hospedagem com
   PHP, ou refazer o site, como foi feito para o Centro Ortopedico.
