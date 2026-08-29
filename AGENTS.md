# Instrucoes para agentes de IA

Leia antes de mexer neste repositorio ou na conta da Vercel da ADS.

## 1. Escala: nunca opere no repositorio inteiro

Sao **486 pastas de site**, cada uma um projeto independente, somando 13.905
arquivos versionados e um `.git` de 611 MB. Nao existe build, lint, teste ou
`install` na raiz — nao ha `package.json` raiz, e nao deve haver.

Um pedido como "atualize as dependencias" ou "rode o lint" significa **em uma
pasta de site especifica**. Se o pedido nao disser qual, pergunte. Rodar
qualquer coisa em todas as pastas trava a maquina e nao e o que se quer.

Trabalhe sempre de dentro da pasta do site:

```bash
cd "Vigentes/ADS/NOME DA PASTA"
npm install && npm run build
```

## 2. Nao assuma stack uniforme

O README diz "React + Vite + TypeScript" e isso vale para a maioria, nao para
todos. Antes de rodar qualquer comando, olhe o que a pasta tem.

| Excecao | O que ela e |
|---|---|
| `BRAZITEC EMPILHADEIRAS E BATERIAS TRACI` | HTML/CSS/JS puro, sem build |
| `TANCERVA CONVENIENCIA` | HTML estatico, migrado da Hostinger |
| `GLOBO TRANSPORTES` | saida de build, sem fonte — ver `NOTA-FONTE.md` |
| `CIA FIBRA` | codigo dentro de `project/`, nao na raiz da pasta |
| `SOLENE CONSTRUCTION` | pnpm, com `patches/` — `npm install` quebra o patch |
| `AM CLINICA DE MEDICINA DO TRABALHO` | bun (`bun.lockb`) |
| `_material` | nao e site, e a pasta de assets compartilhados |

Regra pratica: `pnpm-lock.yaml` -> use pnpm; `bun.lockb` -> use bun;
`package-lock.json` ou nenhum -> npm. Nunca troque de gerenciador num site que
ja tem lockfile de outro.

## 3. Lockfiles: so 188 dos 486 tem

Cerca de 300 sites nao tem lockfile nenhum. Neles, `npm install` resolve
versoes diferentes a cada execucao, entao um site que funcionava pode quebrar
sem ninguem ter mudado uma linha de codigo.

**Se voce rodar install num site sem lockfile, commite o lockfile gerado.** E
o unico jeito de o proximo build ser igual ao seu. Se o build quebrar num site
sem lockfile, considere que a causa provavel e uma dependencia que subiu de
versao sozinha, e nao o codigo.

## 4. Ambiente Windows

O repositorio vive em `C:\dev\ads-web` e os nomes de pasta tem espaco, acento,
`&`, `!` e parenteses. Isso quebra comando mal escrito.

- **Sempre cite os caminhos**: `cd "Vigentes/ADS/A PRIORI, CAFE!"`.
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

## 6. Vigentes e Não vigentes

`Vigentes/ADS/` sao os sites com contrato ativo. `Não vigentes/` sao os
encerrados. O criterio e comercial, nao tecnico, entao **so mova pasta quando
o responsavel disser que o contrato mudou**.

Mover e so mover a pasta e atualizar o `path` no manifesto. Mover para
`Não vigentes` **nao** tira o site do ar: o projeto na Vercel continua
publicado. Se a intencao for tirar do ar, isso e um passo separado e precisa
ser pedido explicitamente.

`Vigentes/CorsSync/` existe mas esta vazia: a separacao entre ADS e CorsSync
ainda nao foi feita.

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
| Mover entre `Vigentes/` e `Não vigentes/` | atualizar o `path` |
| Apagar pasta | remover a entrada |

### Formato

Chave = nome exato da pasta. Ordenacao = slug da chave, para o diff ficar
estavel. Indentacao de 2 espacos, UTF-8, quebra de linha LF.

```json
"2TJ Telas e Telhas": {
  "orgId": "team_8CpVlkQfLGC3Fu3T7KO5baee",
  "path": "Vigentes/ADS/2TJ Telas e Telhas",
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

- Mensagens de commit em portugues, explicando **por que**, nao so o que.
- Nao faca `push` sem pedir.
- O trabalho vai para a `main`.
- Ao renomear muitas pastas, renomeie no sistema de arquivos e depois
  `git add -A`: o git detecta os renames sozinho e preserva o historico.

## 12. Mantenha o README coerente

O `README.md` cita numeros — quantidade de pastas, de projetos, quais faltam
vincular. Se sua alteracao mudar algum deles, corrija o texto no mesmo commit.
