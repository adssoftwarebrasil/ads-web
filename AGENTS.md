# Instrucoes para agentes de IA

Leia antes de mexer neste repositorio ou na conta da Vercel da ADS.

## 1. Escala: nunca opere no repositorio inteiro

Sao **646 pastas de site** (648 ao todo, tirando `sites/corssync/tmp` e
`sites/corssync/DPServicos`, que nao sao site),
cada uma um projeto independente, num `.git` de centenas de MB. Nao existe
build, lint, teste ou `install` na raiz — nao ha `package.json` raiz, e nao
deve haver.

Um pedido como "atualize as dependencias" ou "rode o lint" significa **em uma
pasta de site especifica**. Se o pedido nao disser qual, pergunte. Rodar
qualquer coisa em todas as pastas trava a maquina e nao e o que se quer.

Trabalhe sempre de dentro da pasta do site:

```bash
cd "sites/ads/NOME DA PASTA"
npm install && npm run build
```

## 2. Nao assuma stack uniforme

O README diz "React + Vite + TypeScript" e isso vale para a maioria, nao para
todos. Antes de rodar qualquer comando, olhe o que a pasta tem.

| Excecao | O que ela e |
|---|---|
| `BRAZITEC EMPILHADEIRAS E BATERIAS TRACI` | HTML/CSS/JS puro, sem build |
| `TANCERVA CONVENIENCIA` | HTML estatico, migrado da Hostinger |
| `HOUSE CODE` | HTML estatico, migrado da Hostinger |
| `GLOBO TRANSPORTES` | saida de build, sem fonte — ver `NOTA-FONTE.md` |
| `CIA FIBRA` | codigo dentro de `project/`, nao na raiz da pasta |
| `SOLENE CONSTRUCTION` | pnpm, com `patches/` — `npm install` quebra o patch |
| `AM CLINICA DE MEDICINA DO TRABALHO` | bun (`bun.lockb`) |
| `_material` | nao e site, e a pasta de assets compartilhados |

Regra pratica: `pnpm-lock.yaml` -> use pnpm; `bun.lockb` -> use bun;
`package-lock.json` ou nenhum -> npm. Nunca troque de gerenciador num site que
ja tem lockfile de outro.

## 3. Lockfiles: so 245 dos 645 tem

Dos 645 sites, 116 sao HTML estatico e nao usam dependencia nenhuma. Sobram
529 com `package.json`, e **284 desses nao tem lockfile**. Neles,
`npm install` resolve versoes diferentes a cada execucao, entao um site que
funcionava pode quebrar sem ninguem ter mudado uma linha de codigo.

**Se voce rodar install num site sem lockfile, commite o lockfile gerado.** E
o unico jeito de o proximo build ser igual ao seu. Se o build quebrar num site
sem lockfile, considere que a causa provavel e uma dependencia que subiu de
versao sozinha, e nao o codigo.

## 4. Ambiente Windows

O repositorio vive em `C:\dev\ads-web` e os nomes de pasta tem espaco, acento,
`&`, `!` e parenteses. Isso quebra comando mal escrito.

- **Sempre cite os caminhos**: `cd "sites/ads/A PRIORI, CAFE!"`.
- **Nome de pasta nao pode** conter `/ \ : * ? " < > |`, nem terminar em ponto
  ou espaco. Ao criar pasta a partir de um nome de cliente, troque a barra por
  hifen e remova o ponto final.
- **Renomear so mudando a caixa** (`Althus` -> `ALTHUS`) precisa de duas
  etapas, com um nome temporario no meio: o Windows nao distingue maiuscula e
  o rename direto vira no-op.
- **CRLF**: o git converte na saida e avisa a cada `add`. E esperado. Nao
  "conserte" finais de linha em massa — geraria um diff de milhares de
  arquivos sem mudanca real.
- Heredoc com aspas simples no conteudo (`Alba's`) quebra no Bash; use a
  ferramenta de escrita de arquivo.

## 5. Nome de pasta = nome do cliente no sistema de vendas

Nao e o nome fantasia nem o titulo do site: e a razao social ou o nome com que
o cliente aparece no sistema de vendas. Foi por isso que 85 pastas foram
renomeadas — `Salon` virou `137 SALON BY GABRIEL`, `Sia Solda` virou
`CIA SOLDA E FERRAMENTAS`.

Quando dois sites sao do mesmo cliente, o segundo leva sufixo entre
parenteses: `ALINE RODRIGUES - SERVICOS DE PSICOLOGIA (TRC)`.

**Nome da pasta nao precisa casar com o nome do projeto na Vercel**, e
frequentemente nao casa. Isso e proposital: o `vercel-projects.json` existe
para absorver a divergencia. Nao renomeie projeto so para "alinhar" — ver
secao 8.

## 6. Uma arvore por equipe: sites/ads e sites/corssync

`sites/ads/` sao os sites feitos pela ADS e `sites/corssync/` os feitos pela
CorsSync. A divisao e por **quem fez**, nao por situacao de contrato.

Ate 11/09/2026 existia uma terceira arvore, `Não vigentes/`, para contrato
encerrado. Ela acabou: situacao de contrato e informacao comercial que muda, e
guarda-la no caminho fazia um evento de vendas virar movimentacao em massa de
arquivos — a operacao mais perigosa num repositorio onde duas equipes escrevem
na mesma `main`. Quem responde "este contrato esta ativo?" e o sistema de
vendas, nao a pasta. **Nao recrie essa separacao.**

Fora das duas arvores fica `material/`: fotos e material bruto de trabalho,
organizado por cliente. Nao e site e nao vai para o ar.

`sites/corssync/` tem 149 pastas e desde 10/09/2026 praticamente todas estao
no `vercel-projects.json` — 132 foram publicadas de uma vez. As dez que
ficaram de fora sao de clientes que ja tem site no ar por um projeto da ADS;
o README explica cada uma, e duas delas tem armadilha (`TorreEngenharia`
perde o pixel do Facebook, `NovaOpcao` mexe com dominio proprio).

Ao procurar o site de um cliente, olhe nas duas arvores. **O mesmo cliente
aparece nas duas com frequencia**, com nome grafado de outro jeito
(`ZeDaBateria` e `ZE DA BATERIA`, `Mecanica277` e `Mecânica 277`), entao
antes de publicar pasta da CorsSync confira se o cliente ja nao esta no ar.
O jeito rapido e comparar o `<title>` do `index.html` com o da outra arvore.

## 7. Segredos

O `.gitignore` cobre `.env`, `.env.*`, `*.local` e `.vercel/`, mas isso nao
protege de tudo — ao trazer um projeto de fora, um `.env.local` com
`VERCEL_OIDC_TOKEN` quase entrou junto.

- Ao copiar projeto de outra pasta, exclua `node_modules`, `dist`, `.git`,
  `.env*` e logs de ferramenta antes de copiar.
- **Token da Vercel nunca entra em arquivo do repositorio**, nem em exemplo,
  nem em comentario. Use variavel de ambiente na sessao.
- Antes de commitar algo que veio de fora, varra o que esta estagiado:

```bash
git diff --cached --name-only | grep -iE "\.env|\.pem$|\.key$|credential"
git diff --cached -U0 | grep -oiE "(vcp_[A-Za-z0-9]{20,}|sk-[A-Za-z0-9]{20,})"
```

## 8. Vercel: as duas acoes irreversiveis

### Renomear projeto troca a URL publica

O nome do projeto define o endereco `<nome>.vercel.app`. Renomear troca esse
endereco e o antigo morre. **A grande maioria dos sites daqui nao tem dominio
proprio e depende so dele** — links salvos, anuncios e QR codes impressos
passam a dar 404.

Nunca renomeie projeto sem autorizacao explicita do responsavel, e nunca para
"arrumar" o padrao do nome: o manifesto ja resolve isso.

### Apagar projeto e definitivo

Antes de apagar, confirme os tres:

1. nao tem dominio proprio;
2. nao esta vinculado a nenhuma pasta no manifesto;
3. o site que ele serve e mesmo duplicata de outro projeto — **comparando o
   HTML servido pelos dois, nao so o `<title>`**.

Titulo igual nao prova duplicata: varios sites compartilham template. E o
projeto com nome "feio" pode ser justamente o que carrega o dominio do cliente
— foi o caso de `ourofinojoiasfabrica`, que quase foi apagado enquanto o
`ourofino-joias`, sem dominio, e que era o descartavel.

## 9. Regra obrigatoria: manter o vercel-projects.json em dia

`vercel-projects.json` e a unica copia versionada do vinculo entre cada pasta
de site e seu projeto na Vercel. Os `.vercel/project.json` sao gitignored e
vivem so na maquina de quem fez o deploy, entao se esse manifesto ficar
desatualizado o vinculo se perde.

**Toda acao abaixo obriga a atualizar o manifesto no mesmo commit:**

| Acao | O que fazer no manifesto |
|---|---|
| Criar projeto na Vercel | adicionar entrada, com os quatro campos |
| Apagar projeto na Vercel | remover a entrada |
| Renomear projeto na Vercel | atualizar `projectName` |
| Criar pasta de site | adicionar entrada assim que houver projeto |
| Renomear pasta | atualizar a chave e o `path` |
| Mover pasta de uma arvore para a outra | atualizar o `path` |
| Apagar pasta | remover a entrada |

### Formato

Chave = nome exato da pasta. Ordenacao = slug da chave, para o diff ficar
estavel. Indentacao de 2 espacos, UTF-8, quebra de linha LF.

```json
"2TJ Telas e Telhas": {
  "orgId": "team_8CpVlkQfLGC3Fu3T7KO5baee",
  "path": "sites/ads/2TJ Telas e Telhas",
  "projectId": "prj_...",
  "projectName": "2tj-telas-e-telhas"
}
```

### Validacao antes de commitar

```bash
python - <<'PY'
import io, json, os
m = json.load(io.open("vercel-projects.json", encoding="utf-8"))
assert len(m) == len({v["projectId"] for v in m.values()}), "projectId repetido"
faltam = [k for k, v in m.items() if not os.path.isdir(v["path"])]
assert not faltam, "path inexistente: %s" % faltam
print("ok: %d entradas" % len(m))
PY
```

Confirme tambem que nenhuma entrada aponta para projeto que nao existe mais,
cruzando com `GET https://api.vercel.com/v9/projects?teamId=<orgId>`.

## 10. Como recuperar o que se perdeu

Dois procedimentos que ja foram necessarios e nao sao obvios.

**Vinculo pasta-projeto perdido.** Baixe o `<title>` de cada site publicado e
compare com o `<title>` do `index.html` local. Casa com precisao mesmo quando
os nomes divergem muito — foi assim que `faculdadefinan` foi ligado a
`FINAN - FACULDADE DE DIREITO DE NOVA ANDRADINA`. Para desempatar dois
projetos com o mesmo conteudo, vence o que tem dominio proprio; sem dominio,
o de deploy de producao mais recente.

**Codigo-fonte perdido.** Se o site esta no ar mas nao ha copia local, os
arquivos do deploy podem ser baixados:

```
GET /v6/deployments/<deploymentId>/files          -> arvore, com uid de cada arquivo
GET /v7/deployments/<id>/files/<uid>?teamId=<org> -> conteudo
```

Deploy feito por CLI as vezes guarda `.vercel/source.tgz`, que e o **fonte
original** compactado — foi assim que `TANCERVA CONVENIENCIA` voltou inteiro.
Quando so ha os arquivos servidos, o que se recupera e a saida do build: da
para republicar, nao para editar. Registre isso num `NOTA-FONTE.md` dentro da
pasta, como foi feito em `GLOBO TRANSPORTES`.

## 11. Git

- Nao faca `push` sem pedir.
- O trabalho vai para a `main`.
- Ao renomear muitas pastas, renomeie no sistema de arquivos e depois
  `git add -A`: o git detecta os renames sozinho e preserva o historico.

### Duas equipes na mesma main: a guarda contra exclusao acidental

A ADS e a CorsSync (`coresync-web <coresyncweb@gmail.com>`) empurram para a
mesma `main`. Cada uma cuida da sua arvore de sites. **Alterar** arquivo do
outro lado e permitido e acontece de verdade; **apagar** nunca foi trabalho
normal — em todo o historico isso aconteceu uma vez so, no commit `5c90b9f`,
que levou junto duas imagens do site do Ecodescarte sem ninguem notar.

`scripts/conferir-exclusoes.sh` confere isso, e roda em dois lugares:

| Onde | Quando | O que faz |
|---|---|---|
| GitHub Actions | a cada envio para a `main` | falha a verificacao e lista os arquivos |
| Hook `post-merge` | a cada `pull`/`merge` na sua maquina | avisa na hora, antes de voce enviar |

O hook e versionado em `.githooks/`, mas cada clone precisa liga-lo uma vez:

```bash
git config core.hooksPath .githooks
```

Para apagar de proposito uma pasta do outro lado, escreva
`[remove-autorizado]` no titulo do commit.

**Por que isso importa mais do que parece:** o git aceita exclusao sem avisar
e commitar nao poe o site no ar, entao o estrago so apareceria na proxima
republicacao daquele site — semanas depois, longe da causa.

### Quem le o historico e consultor comercial, nao programador

O historico deste repositorio nao e lido so por quem programa. Os consultores
abrem o log para saber **o que aconteceu com o site do cliente** — antes de
uma reuniao, ao responder uma cobranca, ao checar se um pedido foi atendido.
Eles nao leem codigo e nao vao abrir o diff.

Por isso a mensagem de commit tem que se explicar sozinha, em portugues
simples. Uma mensagem que so um programador entende, neste repositorio, e uma
mensagem quebrada — mesmo que a alteracao esteja perfeita.

**Nunca commite com mensagem generica**: `ajustes`, `correcoes`, `update`,
`wip`, `fix`, nome de arquivo solto. Se a mensagem serviria para qualquer
commit, ela nao serve para nenhum.

### Formato obrigatorio

Titulo, linha em branco, corpo. Sempre com corpo — commit de uma linha so vale
para mudanca puramente interna que nao afeta site nenhum.

**Titulo** (ate ~72 caracteres): verbo no presente + o que mudou + **nome do
cliente/pasta**. O nome do cliente e obrigatorio: o consultor procura o site
dele no log, nao o arquivo.

    Corrige o horario de funcionamento no rodape do 2TJ Telas e Telhas

**Corpo** (linhas ate ~72 colunas), cobrindo o que for aplicavel:

1. **O que o visitante do site ve de diferente**, em linguagem de leigo. Este
   e o item mais importante. Se nada muda na tela, diga isso com todas as
   letras ("nada muda visualmente; e uma mudanca interna").
2. **Por que** foi feito — pedido de quem, ou problema que estava causando.
3. **Quais sites** foram afetados, se for mais de um.
4. **O site foi republicado?** Diga sim ou nao, com o endereco. Commitar nao
   poe no ar; o consultor nao sabe disso e vai supor que sim.
5. **O que ficou pendente** ou precisa de decisao de alguem.

### Traduza o jargao

| Nao escreva | Escreva |
|---|---|
| refatorei o componente do formulario | reorganizei o codigo do formulario; para quem visita, nada muda |
| bump de dependencias | atualizei as bibliotecas que o site usa por dentro |
| fix do breakpoint mobile | o site estava desalinhado no celular e foi corrigido |
| deploy em prod | o site novo entrou no ar |
| adiciona GTM | instalei o codigo que mede as visitas do site (Google Tag Manager) |
| lockfile commitado | travei as versoes das bibliotecas, para o site nao quebrar sozinho depois |

Sigla so entra se vier explicada na primeira aparicao.

### Casos que exigem destaque no corpo

- Mudanca de **URL publica** (ver secao 8): escreva o endereco antigo e o novo,
  e avise que links antigos, anuncios e QR codes deixam de funcionar.
- Mudanca em `vercel-projects.json` (secao 9): diga em uma linha o que mudou
  no vinculo pasta-projeto.
- Movimentacao de pasta entre as arvores das equipes (secao 6): lembre que
  isso **nao** tira o site do ar nem muda o endereco.
- Site sem fonte, recuperado do deploy (secao 10): avise que da para
  republicar, nao para editar.

### Exemplo completo

```
Corrige o horario de funcionamento no rodape do 2TJ Telas e Telhas

O rodape e a pagina de contato mostravam "segunda a sexta, das 8h as
18h". A loja passou a fechar as 17h e a abrir aos sabados de manha,
entao quem procurava no site ligava fora do horario.

O que mudou para quem visita o site:
- rodape e pagina de contato agora mostram "seg a sex, 8h as 17h" e
  "sabado, 8h as 12h";
- a mensagem automatica do botao de WhatsApp foi corrigida junto.

Pedido pela Carla, no atendimento do dia 12/08.

O site ja foi republicado e esta no ar em 2tj-telas-e-telhas.vercel.app.
Nada ficou pendente.
```

### Como escrever a mensagem longa no Windows

Aspas e acentos quebram `git commit -m` no PowerShell. Escreva a mensagem num
arquivo e use `-F`:

```bash
git commit -F "$TMP/msg.txt"
```

Antes de commitar, releia a mensagem se perguntando: **um consultor que nao
abre o codigo entende, so com isso, o que mudou no site do cliente dele?** Se
a resposta for nao, reescreva.

## 12. Mantenha o README coerente

O `README.md` cita numeros — quantidade de pastas, de projetos, quais faltam
vincular. Se sua alteracao mudar algum deles, corrija o texto no mesmo commit.
