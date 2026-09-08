# De onde veio este codigo

O codigo-fonte da versao final deste site tinha se perdido. O que existia aqui
na pasta era uma versao antiga, de pagina unica, bem diferente do site que o
cliente aprovou.

A versao final estava publicada em **https://veranita2.netlify.app** e foi
**remontada a partir do proprio site no ar**, em 08/09/2026: o JavaScript e o
CSS que o navegador baixa foram lidos e traduzidos de volta para codigo-fonte
React. Nao havia `sourcemap` (o endereco `.js.map` existe, mas devolve a pagina
inicial, nao o arquivo), entao a leitura foi manual.

## Como foi conferido que ficou igual

- **CSS**: a folha de estilo gerada aqui tem as mesmas 449 regras da publicada,
  na mesma ordem. A unica diferenca e um prefixo `-webkit-` a mais na lista de
  propriedades da regra `.transition`, que vem da tabela de navegadores do
  autoprefixer e nao muda nada na tela.
- **Textos e classes**: todos os textos e todas as classes de estilo do site
  publicado aparecem nesta build, e nao ha nenhum sobrando.
- **Paginas renderizadas**: as seis paginas (inicio, nossa historia, produtos,
  ficha de produto, receitas e contato) foram abertas em navegador nos dois
  lugares — nesta build local e no site publicado — e o HTML resultante e
  **identico**, tirando os valores intermediarios das animacoes, que dependem
  do instante em que a foto do HTML foi tirada.

## O que depende de terceiros

1. **As imagens nao estao aqui.** Fotos de produto e logotipo vem de
   `storage.lucasmendes.dev`, e as fotos de ambiente vem do banco de imagens
   Pexels. Se esse armazenamento sair do ar, o site perde as imagens. Trazer os
   arquivos para dentro do projeto e um trabalho a parte.
2. **Os formularios gravam num banco Supabase de terceiro** (`mhxiichubzwnhgknyliy`),
   nas tabelas `contact_messages` e `whatsapp_leads`. A chave que esta em
   `src/lib/supabase.ts` e a chave publica (`anon`), a mesma que ja ia dentro do
   JavaScript baixado por qualquer visitante — nao e segredo. Nao temos acesso
   ao painel desse banco: se for preciso ler as mensagens recebidas, isso tem
   que ser pedido a quem criou o projeto. Os dois formularios tambem abrem o
   WhatsApp, entao o contato chega mesmo que o banco falhe.
3. **As fontes FinalSix nunca funcionaram no site publicado.** O CSS aponta para
   `/src/assets/fonts/FinalSix/*.otf`, endereco que so existe durante o
   desenvolvimento; no ar, esses arquivos dao erro e o navegador cai na fonte do
   sistema. Isso foi mantido igual de proposito, para o site ficar identico ao
   que o cliente ve hoje. Se alguem tiver os nove arquivos `.otf`, basta
   coloca-los em `src/assets/fonts/FinalSix/` e o site passa a usar a fonte
   certa — e ai a aparencia muda um pouco, para melhor.

## Situacao da publicacao

- O site que o cliente usa continua sendo o da Netlify (`veranita2.netlify.app`).
- O projeto na Vercel (`veranita`, em `veranita.vercel.app`) ainda serve a
  versao antiga, de pagina unica. Publicar esta versao nova la e um passo
  separado, que ainda nao foi dado.
- O `vercel.json` desta pasta ja deixa preparado o desvio de rotas de que o site
  precisa: sem ele, abrir `/produtos` direto no navegador daria erro 404.
