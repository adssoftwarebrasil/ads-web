# Flor de Maio Floricultura — leia antes de mexer

## O que tem nesta pasta

**Não é o código-fonte do site.** É o site já compilado, do jeito que o
navegador recebe: um `index.html`, um JavaScript e um CSS, dentro de `assets/`.

O fonte de verdade nunca esteve com a ADS. O site foi feito por um
desenvolvedor de fora, está hospedado na Netlify, e não temos acesso a essa
conta. O que dava para recuperar era o resultado do build — foi o que está
aqui, baixado do próprio ar em 04/09/2026.

Consequência prática: **dá para republicar, não dá para editar com conforto.**
Qualquer mudança nova tem que ser feita no JavaScript já compactado, à mão,
como foi feito com as correções abaixo.

## A pasta `landing-antiga/`

É o fonte de uma versão **anterior** do site, que era só uma página de
apresentação — sem catálogo, sem carrinho e sem painel. Ficou guardada como
histórico. Não é o que está no ar e não entra no deploy (veja `.vercelignore`).

## As correções aplicadas em 04/09/2026

O site tinha quatro defeitos, todos confirmados contra a API de produção antes
de mexer. As alterações foram feitas direto em `assets/index-DJt-oqVM.js`:

**1. A cliente não conseguia cadastrar produto em 4 categorias.**
O painel pedia à API só as 20 primeiras categorias, de um total de 24, e a
lista do formulário de produto reaproveitava essa mesma lista cortada. Como a
API devolve da mais nova para a mais antiga, sumiam justamente as 4 mais
antigas — Buquês de Rosas, Cestas de Rosas e Flores, Combos e Buquês de Rosas
Vermelhas, que juntas somam 75 produtos. Passou a pedir 100, e as 24 cabem
numa página só.

**2. O filtro do catálogo só oferecia 10 das 24 categorias.**
A página `/produtos` pedia a lista sem dizer quantas queria, e caía no padrão
da API, que é 10. Passou a pedir 100 também.

**3. As páginas 2 e 3 das categorias jogavam o visitante para o topo do site.**
Na página inicial, trocar de página de categorias disparava uma rolagem para o
topo absoluto. As categorias novas carregavam certo, mas fora de vista, e dava
a impressão de que o botão tinha voltado para a capa. Agora rola até a própria
seção de categorias, descontando os 80 px da barra fixa — o mesmo cálculo que o
menu do topo já usava.

**4. Dois botões levavam para um site que saiu do ar.**
"Ver Todos os Produtos", no banner de abertura, e "Conhecer Nossos Produtos",
no fim do texto sobre a história da loja, abriam `giovannaflores.net` em aba
nova. Agora vão para `/produtos`, o catálogo do próprio site, sem abrir aba —
igual aos outros botões de catálogo da página.

Depois de aplicar, o arquivo foi conferido com `node --check` e compila.

## O que NÃO é nosso, e é o risco de verdade

- **A API.** Roda em `api.flordemaiobygiovannaflores.com.br`, num servidor de
  terceiro (Express sobre nginx). É ela que guarda todos os produtos, as
  categorias, os pedidos e as fotos que a cliente subiu. Não temos acesso nem
  backup. Se esse servidor sair do ar, o site vira uma casca vazia.
- **Parte das imagens.** Logo, banner e algumas fotos fixas vêm de
  `storage.lucasmendes.dev`, domínio pessoal do desenvolvedor original. As
  fotos de produto que a cliente cadastrou não correm esse risco — essas estão
  na API.

## Se for repontar o domínio

O domínio está no Registro.br (`d.sec.dns.br` / `e.sec.dns.br`).

- Repontar **apenas** o apex e o `www`, que hoje vão para a Netlify.
- **Não encostar no registro `api.`**, que aponta para `217.196.60.25`. É onde
  vivem os dados da loja. Alterar esse registro derruba a loja inteira.
- O endereço do site precisa continuar o mesmo. A API tem controle de origem
  ativo e não é nossa para reconfigurar — publicar num domínio diferente
  quebraria a comunicação e não teríamos como consertar.
- Para reverter, basta voltar o apontamento para a Netlify.
