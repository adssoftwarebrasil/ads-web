# Aurora Odontologia

Site institucional de pagina unica da Aurora Odontologia (Rondonopolis - MT),
desenvolvido pela **ADS**.

## Tecnologias
- React + Vite + TypeScript
- CSS puro (`src/index.css`), sem framework de estilo

## Como rodar localmente
```bash
npm install
npm run dev
```

Build de producao:
```bash
npm run build
```

## Onde o site esta publicado

Endereco publico atual: **https://aurora-odontologia-gamma.vercel.app**

Atencao ao sufixo `-gamma`: `aurora-odontologia.vercel.app` (sem sufixo) ja
pertence a outra conta, de outra clinica com o mesmo nome, e serve um site que
nao e o nosso. O endereco valido e sempre o com `-gamma`.

Projeto na Vercel: `aurora-odontologia`
(`prj_GtVsYTGPNFAXcXpCVdKw7okshHwS`), registrado no `vercel-projects.json`.
A protecao de acesso da Vercel (`ssoProtection`) foi desligada, senao o
endereco `.vercel.app` pediria login e o cliente nao conseguiria abrir.

O site tambem continua no ar na Netlify (`auroraodonto.netlify.app`), agora
com uma versao **antiga**: sem as fotos do cliente e com os textos antigos dos
servicos. Enquanto a clinica nao apontar um dominio proprio, o endereco que
deve ser divulgado e o da Vercel. Desligar a Netlify e decisao do responsavel.

Publicar uma alteracao:

```bash
npm run build   # confirma que o build passa
vercel deploy --prod --yes --token="$VERCEL_TOKEN"
```

## Origem deste codigo

O codigo-fonte original desta pasta se perdeu. O conteudo aqui foi
reconstruido a partir do site publicado em `auroraodonto.netlify.app`, em
31/08/2026, seguindo o procedimento da secao 10 do `AGENTS.md`.

O que foi conferido contra o site no ar:
- `src/index.css` e a folha de estilo do site no ar, verbatim (identica
  desconsiderando espacos e indentacao);
- todos os textos, links, telefones, precos e imagens conferem um a um com o
  bundle publicado.

Diferente do caso `GLOBO TRANSPORTES`, aqui **o codigo e editavel**: os
componentes React foram reescritos a partir do bundle, nao apenas copiados da
saida de build. A divisao em arquivos dentro de `src/components/` e uma
reconstrucao razoavel da original, que nao era recuperavel.

## Imagens

- `public/logo.png` veio do proprio site publicado.
- `public/antes-e-depois-1.jpg` ate `-6.jpg` sao fotos de casos reais da
  clinica, entregues pelo cliente, ja com a marca da Aurora aplicada. Elas
  giram no carrossel da secao da promocao, no lugar da antiga arte de
  divulgacao (`post.jpeg`). Todas foram padronizadas em 880x1100 (4:5).

  A ordem importa: a 1 e o caso de protese, porque e o que aquela promocao
  vende, e por isso aparece primeiro. Depois vem os demais casos de dente
  (2 a 4) e por fim os dois de estetica facial (5 e 6), que se sustentam
  porque Botox, preenchimento e bioestimulador estao na lista de Servicos.

  Duas das originais vieram quase quadradas (a de protese e a de facetas).
  Nelas a altura foi completada em cima e embaixo com `#0e1c2f`, o mesmo azul
  do fundo da secao, em vez de cortar as laterais: as duas sao composicoes
  lado a lado ou com os rotulos Antes/Depois na borda, e o corte central
  destruia a logo da Aurora e os rotulos. Como o preenchimento e da cor do
  fundo, ele fica invisivel na pagina.

  Para trocar ou acrescentar um caso, mexa na lista `CASOS` em
  `src/components/BeforeAfterCarousel.tsx` e ponha o arquivo em `public/`,
  ja recortado em 4:5.
- `public/familia.jpg` e **foto de banco de imagens**, nao e foto de paciente
  real da clinica. Origem: Pexels, foto 8525014, licenca Pexels (uso comercial
  liberado, sem exigencia de credito). Foi recortada em 4:5 e reduzida para
  880x1100 (118 KB).

  Se a clinica tiver foto propria, basta trocar o arquivo mantendo o nome:
  o ideal e uma imagem vertical, proporcao 4:5, com os rostos na metade de
  cima (a parte de baixo recebe um escurecimento e fica atras do selo da
  logo).

- `public/fachada.jpg` e `public/consultorio.jpg` sao fotos do espaco da
  clinica, entregues pelo cliente no documento `SITE AURORA`. Aparecem na
  secao Sobre.
- `public/servicos/*.jpg` sao as fotos dos 9 servicos que o cliente entregou. O cliente entregou
  cada servico como uma imagem 433x433 ja montada, com foto, titulo e texto
  desenhados dentro. Do arquivo dele foi recortada **so a foto** (com o icone
  redondo, que faz parte do desenho); titulo e descricao foram reescritos
  como texto de verdade na pagina.

  Isso foi de proposito: texto dentro de imagem nao e lido pelo Google nem
  por leitor de tela, e num celular a letra daquele quadrado ficaria pequena
  demais. Do jeito que ficou, o desenho do cliente foi respeitado e o texto
  continua sendo texto.

  **Tres servicos nao tem foto**: Profilaxia e Raspagem, Atendimento Infantil
  e Preenchimento Facial e Labial. Eles estao no briefing e estavam no site
  antigo, entao entram no mesmo lugar dos outros, so que com um icone grande
  em fundo azul claro no lugar da foto (`service-card__media--icon`). Se o
  cliente mandar foto desses tres, basta trocar `icon` por `img` na lista
  `SERVICES` em `src/components/Services.tsx` e por o arquivo em
  `public/servicos/`.

## Avaliacoes do Google

A secao "O que dizem nossos pacientes" (`src/components/Reviews.tsx`) fica
entre Servicos e Sobre. Ela **nao busca nada do Google sozinha**: os textos
estao escritos na lista `AVALIACOES`, copiados a mao do perfil da clinica
(https://share.google/hAbC17VhgZLR1Sl5g), que o cliente enviou em 01/09/2026.

Nao da para puxar automaticamente sem contratar: a pagina do perfil so
carrega com JavaScript e o Google barra leitura automatica (o endereco interno
`search.google.com/local/reviews` responde 400). Fazer isso sozinho exigiria
chave da API do Google Places com faturamento ativo, ou um widget pago.

Consequencia pratica: **avaliacao nova nao aparece sozinha no site**. Para
incluir, edite a lista `AVALIACOES` e republique.

O texto de cada avaliacao e copiado como a pessoa escreveu — inclusive emojis
e erros de digitacao. Isso e de proposito: e citacao de paciente real, nao
texto nosso. Nunca inventar depoimento nem "melhorar" o que a pessoa escreveu.

Se a lista ficar vazia, a secao inteira some da pagina (nao fica um espaco em
branco).

## Formulario de agendamento

A secao "Agende agora uma avaliacao" **nao envia e-mail e nao tem sistema por
tras** — o site e estatico. O botao Agendar monta uma mensagem com o nome e o
telefone que a pessoa digitou e abre o WhatsApp da clinica com esse texto
pronto.

Consequencia pratica: nao existe caixa de entrada de leads em lugar nenhum. O
que chega, chega no WhatsApp (66) 99645-6124. Se um dia a clinica quiser
receber por e-mail ou guardar os contatos, isso exige contratar um servico de
recebimento de formulario — e um pedido novo, nao esta feito.

## Contatos usados no site

- WhatsApp principal: (66) 99645-6124
- WhatsApp da promocao de protese: (66) 99607-4925
- E-mail: auroraodontologia8@gmail.com
- Endereco: Av. Tiradentes, 2164 - Centro, Rondonopolis - MT
