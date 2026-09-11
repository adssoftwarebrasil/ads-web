# Ribertec Hospitalar — de onde veio este site

Esta pasta **nao e o codigo-fonte** do site: e uma copia estatica das paginas
publicadas em `https://www.ribertechospitalar.com.br/`, baixada em 04/09/2026.
Da para republicar e corrigir texto e imagem direto no HTML; nao da para
"rodar o projeto" nem editar por painel.

## Por que foi feito assim

O site original e um sistema em PHP (loja com carrinho, login e cadastro),
hospedado fora da nossa conta, no IP 179.190.5.180. Nao temos esse codigo.

No backup da Hostinger (`C:\dev\sites-hostinger\domains\ribertechospitalar.com.br`)
existe um site **novo**, em WordPress com Elementor e WooCommerce, trabalhado
entre fevereiro e julho de 2026 — mas **sem o banco de dados**, que era a conta
Hostinger `u941738490`, cancelada e expirada em 29/07/2026. Sem banco, o
WordPress nao tem textos, paginas nem produtos: nao e publicavel. A conta ja
nao aparece na API da Hostinger, entao o banco so voltaria se alguem achar um
backup fora dali.

## O que funciona nesta copia

- as 153 paginas: institucionais, News, fabricantes, categorias e as 79 fichas
  de produto, com fotos e os catalogos em PDF;
- a navegacao inteira e a paginacao das listagens (viraram arquivos
  `pagina-2.html`, `pagina-3.html`, porque endereco com `?pagina=2` nao existe
  em site estatico).

## O que NAO funciona (depende de servidor)

- carrinho de compras, login, cadastro e "meus pedidos";
- a busca de produtos — foi redirecionada para a pagina de produtos pelo
  `vercel.json`, para nao cair em erro 404;
- o formulario de contato e o cadastro de newsletter: as caixas aparecem, mas
  nada e enviado. **Pendente**: ligar o formulario a um servico de envio.

## Detalhes tecnicos da copia

- a tag `<base href>` de todas as paginas passou a apontar para a raiz, e os
  enderecos absolutos do dominio viraram relativos, para o site abrir tanto no
  `.vercel.app` quanto no dominio proprio;
- os links do menu apontavam para `/conteudos/...`, que no servidor original
  redireciona para `/conteudo/...`; foram corrigidos para o destino final;
- 3 arquivos continuam faltando porque **ja dao erro no site do cliente**:
  `area_publica/js/html5shiv.js`, `area_publica/js/respond.js` (compatibilidade
  com Internet Explorer) e algumas fotos antigas de noticias em `/rgbshop07/`.
