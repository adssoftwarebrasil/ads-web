# Nota sobre a origem deste site

**Este e o site ORIGINAL do Centro Ortopedico, o mesmo que o cliente tinha na
Hostinger, recuperado por inteiro.** Ele nao substitui sozinho o site que esta
no ar hoje — leia a secao "Qual site vai ficar no ar" antes de mexer.

## De onde veio

O site original era um WordPress com Elementor, em
`centroortopedicoce.com.br`. O dominio saiu do ar em 28/08/2026, quando a
conta da Hostinger `u293911618` foi suspensa. Na epoca ele foi dado como
perdido, e por isso um site novo foi escrito do zero, em React, a partir do que
aparecia no Google — e esse novo esta no ar em `centro-ortopedico.vercel.app`,
na pasta `CENTRO ORTOPEDICO`.

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

## Qual site vai ficar no ar

Existem hoje dois sites para o mesmo cliente, e a escolha e comercial, nao
tecnica:

| Pasta | O que e | Endereco |
|---|---|---|
| `CENTRO ORTOPEDICO` | site novo, refeito em React a partir do Google | `centro-ortopedico.vercel.app` |
| `CENTRO ORTOPEDICO (ORIGINAL)` | este, o site original recuperado | `centro-ortopedico-original.vercel.app` |

O site novo tem a informacao certa, mas layout diferente do que o cliente
conhecia, e nao tem as fotos reais. Este aqui e exatamente o que o cliente
tinha. **Trocar qual deles atende o endereco principal precisa de decisao do
responsavel** — e, se o dominio `centroortopedicoce.com.br` for apontado para a
Vercel um dia, preservar os registros de e-mail da zona, senao o e-mail cai.

## Se o cliente pedir alteracao

Como o banco de dados existe, este site **nao esta congelado**: da para
levantar o WordPress de novo a partir do dump, numa hospedagem que rode PHP e
MySQL, e o painel de administracao volta a funcionar. A Vercel nao serve para
isso, porque nao roda PHP.

Para mudanca pontual (um telefone, um texto curto), da para editar o HTML aqui
e republicar. Para mudanca de verdade, o caminho e remontar o WordPress.
