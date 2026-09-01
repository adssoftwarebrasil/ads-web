# Nota sobre a origem deste site

**Este site nao tem codigo-fonte. E uma copia congelada, que da para
republicar, mas nao para editar.** Leia antes de aceitar qualquer pedido de
alteracao do cliente.

## De onde vieram os arquivos

O site original era um WordPress com Elementor e WooCommerce, hospedado na
Hostinger em `carretaseengatesemanuel.com.br`. Esse dominio esta fora do ar e
a conta da Hostinger onde ele vivia esta suspensa.

A copia local da hospedagem (`C:\dev\sites-hostinger2\domains\`) tem os
arquivos do WordPress, mas **nao tem o banco de dados** — o `wp-config.php`
aponta para `DB_HOST = 127.0.0.1`, ou seja, o banco so existia dentro do
servidor da Hostinger. Sem esse banco, os arquivos do WordPress nao montam
pagina nenhuma: todo o texto, os produtos e o layout do Elementor moram no
banco, nao nos arquivos.

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

Nao da para editar como se edita um WordPress: nao existe painel, e mexer no
HTML congelado de uma pagina do Elementor e trabalhoso e arriscado. Para
qualquer mudanca de conteudo que nao seja pontual, o caminho e refazer o site,
como ja foi feito para o Centro Ortopedico.
