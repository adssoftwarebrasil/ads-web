# Sr Burgone

Site comercial local da hamburgueria Sr Burgone, criado com React 19, Vite 8, JavaScript e CSS. Projeto estático, sem backend, cadastro, banco de dados, rastreamento ou serviço de formulário. Nenhuma publicação foi realizada.

## Executar

Requer Node.js 20.19+ ou 22.12+ (validado com Node 24) e npm. Dentro da pasta `SrBurgone`:

```bash
npm install
npm run dev
```

Abra o endereço local informado pelo Vite. Para compilar e conferir a versão de produção:

```bash
npm run build
npm run preview
```

A saída é `dist/`, incluindo todas as fotos, fontes e o favicon. Não mova somente o `index.html`: os arquivos em `dist/assets/` também fazem parte da aplicação. A pasta deve ser servida por HTTP; não abra o HTML diretamente pelo explorador de arquivos.

## Estrutura

```text
SrBurgone/
├── public/
│   ├── favicon.png
│   └── licenses/
├── src/
│   ├── assets/
│   │   ├── client/ (WebP e originais preservados)
│   │   └── images/ (materiais ilustrativos da primeira versão)
│   ├── components/
│   ├── data/ (site.js e clientImages.js)
│   ├── sections/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── scripts/prepare-assets.mjs
├── tests/site.spec.js
├── ASSETS.md
├── index.html
├── package.json
├── package-lock.json
├── playwright.config.js
├── vite.config.js
└── README.md
```

## Editar o conteúdo

- `src/data/site.js`: dados do negócio, mensagens de WhatsApp, opções de produtos, filtros, perguntas e navegação.
- `src/data/clientImages.js`: mapeamento dos 12 materiais do cliente, dimensões, textos alternativos e itens da galeria.
- `src/sections/`: apresentação inicial, sabores, molhos e geleia, história, galeria ampliável, contato e perguntas.
- `src/components/`: logotipo fornecido, cabeçalho, rodapé, revelação no scroll e ícones/links sociais.
- `src/styles/global.css`: paleta, tipografia, componentes compartilhados e regras gerais.
- `src/styles/sections.css`: composição das seções e ajustes por largura e altura.
- `src/styles/gallery.css`: apresentação dos materiais do cliente e galeria com modal acessível.
- `index.html`: título, descrição, idioma, favicon e metadados Open Graph.

As imagens são importadas pelo React e as fontes pelos pacotes Fontsource, sendo incorporadas pelo Vite. O visitante não faz requisições ao Unsplash ou ao Google Fonts. Os links de WhatsApp, Instagram e Maps abrem os respectivos serviços apenas quando acionados.

## Conteúdo e materiais

A primeira versão foi criada sem materiais do cliente. A atualização incorpora os 12 arquivos enviados posteriormente: logotipo, fotografias dos lanches, bebida e ambiente, além de duas artes promocionais. O logo aparece completo no cabeçalho e no rodapé; o favicon também é derivado do arquivo fornecido. A composição original foi preservada, com os materiais reais incorporados às seções existentes e a uma galeria de seis imagens com ampliação.

As imagens dos lanches e da bebida são do cliente. A categoria sobremesas ainda utiliza uma fotografia ilustrativa, identificada somente nesse card e no aviso abaixo dos produtos; não foi fornecida foto específica de sobremesa. As artes promocionais são identificadas como artes, não como fotografias documentais. A foto dos sachês Heinz é mostrada como acompanhamento, sem confundi-los com os molhos caseiros. Consulte `ASSETS.md` para o mapeamento completo.

Uma arte enviada contém a inscrição “desde 2023”, divergente do briefing. O texto do site mantém a fundação em **5 de setembro de 2024** e a legenda ampliada dessa arte esclarece a divergência; o arquivo original não foi retocado. Nomes de pratos, ingredientes, formas de pagamento e outras mensagens nas artes não foram automaticamente incorporados ao texto comercial.

Os 12 originais estão preservados em `src/assets/client/originals/`. As versões WebP, geradas localmente, somam cerca de 2,75 MiB, contra 19,18 MiB dos originais (redução aproximada de 85,7%). Somente as versões otimizadas são importadas e incluídas na build. Não há caminhos dependentes do computador no código da aplicação. Para regenerá-las a partir dos originais:

```bash
npm run assets:prepare
```

Esse comando usa Sharp, apenas como dependência de desenvolvimento. Corrige a orientação EXIF, limita a resolução e comprime os arquivos sem alterar os originais. As imagens otimizadas já estão salvas: a build convencional continua sendo somente `npm run build`.

Não foram inventados preços, ingredientes dos produtos, sabores específicos à venda, promoções, avaliações, dias de funcionamento, taxas de entrega ou prazos. Esses pontos são direcionados ao atendimento. O horário informado é 18h30 à meia-noite, sem indicador automático de “aberto agora”, pois os dias de abertura não foram fornecidos.

O perfil do Instagram utiliza o identificador fornecido, `srburgone`. O Facebook aparece apenas como nome de busca, pois foi fornecido o nome da página, mas não seu endereço exato. O Maps abre uma busca pelo endereço do briefing, sem coordenadas ou pin inventados. A disponibilidade real de contas e respostas nos serviços externos depende de seus respectivos provedores e do estabelecimento; os testes locais verificam a formação correta dos links, sem enviar mensagens.

## Variáveis de ambiente

Nenhuma variável é necessária para executar ou compilar o site. Não existem chaves, senhas, endpoints ou integrações privadas. Não há necessidade de `.env.example`. Os arquivos `.env` e suas variantes estão ignorados no Git.

## Testes e formatação

Os testes usam Playwright e axe-core, somente como dependências de desenvolvimento. Para executar em uma máquina nova:

```bash
npm run build
npx playwright install chromium
npm test
```

Caso o Microsoft Edge já esteja instalado, no PowerShell é possível usá-lo sem baixar outro navegador:

```powershell
$env:PLAYWRIGHT_CHANNEL = 'msedge'
npm test
```

Essa variável é exclusiva do executor de testes e não faz parte da aplicação. O teste inicia `npm run preview` em um endereço de loopback na porta 4178, sem criar site público. Reserve essa porta antes de executar.

São verificados 320, 375, 390, 430, 768, 1024, 1366, 1440, 1536, 1920 e 2560 pixels de largura, incluindo 1366 × 768, 1440 × 900 e 1536 × 864. A suíte verifica carregamento local dos assets, console, rolagem horizontal, conteúdo principal na primeira tela de notebooks, filtros, menu mobile, Escape, navegação por teclado, perguntas, estrutura de links e acessibilidade WCAG A/AA automatizada. Auditoria automática não substitui uma avaliação completa com tecnologias assistivas.

As capturas e os resultados de QA são gerados em `test-results/`, ignorado no Git e ausente da build. Para manter os arquivos padronizados:

```bash
npm run format
npm run format:check
```

## Publicação manual futura na Vercel

### Verificação de entrega

- `npm install`: concluído; auditoria npm sem vulnerabilidades na instalação.
- `npm run build`: concluído com geração de `dist/`.
- `npm run dev` e `npm run preview`: iniciados e conferidos localmente.
- `npm test`: 21 testes aprovados no Microsoft Edge, incluindo as 11 resoluções documentadas, presença dos 12 materiais e navegação da galeria com teclado e restituição do foco.
- Auditoria axe-core WCAG A/AA: nenhuma violação detectada nos cenários desktop, mobile, menu aberto e galeria ampliada.
- Sem erros ou avisos no console do navegador, imagens quebradas, requisições externas automáticas ou rolagem horizontal nos cenários verificados.
- `npm run format:check`: aprovado.
- Nenhum deploy, configuração de hospedagem ou conexão automática a provedor foi realizado.

### Configuração futura

O projeto não se conecta automaticamente a nenhum serviço. Quando você decidir publicá-lo manualmente, configure:

| Campo            | Valor                                                            |
| ---------------- | ---------------------------------------------------------------- |
| Root Directory   | A pasta `SrBurgone`, caso o repositório contenha outros projetos |
| Framework Preset | Vite                                                             |
| Install Command  | `npm install`                                                    |
| Build Command    | `npm run build`                                                  |
| Output Directory | `dist`                                                           |

Não há React Router: a navegação é feita por âncoras na página. Não são necessários fallback de rotas nem `vercel.json`. Nenhum domínio ou URL de produção foi presumido; por isso, `canonical`, `og:url` e imagem social com URL absoluta devem ser definidos somente quando houver um domínio real.

Referência técnica: [documentação oficial do Vite](https://vite.dev/guide/).
#   S r B u r g o n e  
 