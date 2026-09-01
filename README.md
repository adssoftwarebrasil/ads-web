# ads-web

Acervo dos sites desenvolvidos pela **ADS**. Cada pasta de site e um projeto
independente (React + Vite + TypeScript).

## Para agentes de IA

As regras de quem mexe neste repositorio estao em [AGENTS.md](AGENTS.md), que
o `CLAUDE.md` tambem aponta. A principal: manter o `vercel-projects.json`
atualizado a cada mudanca de pasta ou de projeto na Vercel.

## Estrutura

```
Vigentes/
  CorsSync/      sites vigentes sob a CorsSync
  ADS/           sites vigentes sob a ADS
Não vigentes/    sites que sairam do ar ou foram encerrados
```

## Estado atual

Os 117 sites com contrato vencido ja foram separados em `Não vigentes/`; os
374 vigentes seguem em `Vigentes/ADS/`. A separacao entre ADS e CorsSync ainda
precisa ser feita: basta mover a pasta do site para o diretorio correspondente.

## vercel-projects.json

Mapa de `pasta do site` -> projeto na Vercel (`path`, `projectId`, `orgId`,
`projectName`). Existe porque o slug do projeto nem sempre corresponde ao nome
da pasta, e os `.vercel/project.json` sao gitignored — este manifesto e a copia
versionada desse vinculo. Para relinkar um site, recrie
`<path>/.vercel/project.json` a partir da entrada correspondente.

O campo `path` da o diretorio completo, ja que as pastas vivem sob
`Vigentes/ADS/` ou `Não vigentes/`. Cobre 480 das 491 pastas: as 11 restantes
nao tem projeto correspondente na Vercel (`Alba's Cleaning Services`,
`AURORA ODONTOLOGIA`, `EXCLUSIVE CONSTRUTORA E reformadora`,
`GERENCIAL CONTABIL 1`, `IMPERIAL GAS`, `Premium Cleaning Services`,
`Proposta de Parceria Digital`, `RETOCARS AUTO SERVICE LTDA`, `Royall`,
`Veacci`) ou nao sao site (`_material`).

## Balanco com a Vercel

480 projetos na Vercel e 480 pastas vinculadas: **todo projeto tem pasta**.
As 35 duplicatas — projetos antigos ou builds superados que serviam o mesmo
site de uma pasta ja mapeada — foram removidas.

Faltam vincular 11 pastas. Nove nunca chegaram a ser publicadas:
`Alba's Cleaning Services`, `EXCLUSIVE CONSTRUTORA E reformadora`,
`GERENCIAL CONTABIL 1`, `IMPERIAL GAS`, `Premium Cleaning Services`,
`Proposta de Parceria Digital`, `RETOCARS AUTO SERVICE LTDA`, `Royall` e
`Veacci`. A decima, `AURORA ODONTOLOGIA`, esta no ar, mas na Netlify e nao
na Vercel. A decima primeira, `_material`, nao e site — e a pasta de assets
compartilhados.

`TANCERVA CONVENIENCIA` e `GLOBO TRANSPORTES` foram recuperadas do proprio
deploy na Vercel, via `/v6/deployments/<id>/files`, por nao haver copia local.
A do tancerva veio do `source.tgz` que o CLI subiu, entao e o fonte real. A do
globo veio dos arquivos servidos, que sao a saida do build — ver
`NOTA-FONTE.md` dentro da pasta.

`Carretas e engates Emanuel` tambem nao tem fonte: era um WordPress cuja
hospedagem foi suspensa, e o site foi remontado a partir das paginas que o
cache do proprio WordPress tinha guardado. O banco de dados dele existe no
backup da conta (`.dbdumps`), entao o site nao esta congelado: da para
remontar o WordPress numa hospedagem com PHP se for preciso editar — ver
`NOTA-FONTE.md` dentro da pasta.

`ECODESCARTE RECICLAGEM E MANUFATURA REVERSA` veio pelo mesmo caminho: era um
WordPress em `ecodescarte.com`, saiu do ar com a suspensao da conta, e foi
remontado a partir dos arquivos da hospedagem mais o banco de dados do backup
(`.dbdumps`). As 11 paginas foram gravadas prontas e o site **ja esta no ar**
em `ecodescarte-reciclagem-e-manufatura.vercel.app` — o endereco saiu cortado
porque a Vercel encurta nomes longos de projeto. O formulario de contato nao
envia mais e ainda precisa de decisao — ver `NOTA-FONTE.md` dentro da pasta.

`CENTRO ORTOPEDICO` e o site original do Centro Ortopedico, recuperado por
inteiro: os arquivos estavam na copia da hospedagem e o banco de dados no
backup da conta, em `.dbdumps`. O WordPress foi levantado numa instalacao
temporaria e as 23 paginas foram gravadas prontas.

Por um tempo existiram dois sites do mesmo cliente — este e um refeito em
React, de quando o original era dado como perdido. Em 01/09/2026 a escolha foi
feita: **fica o original**. Ele ocupou a pasta `CENTRO ORTOPEDICO`, a pasta
`CENTRO ORTOPEDICO (ORIGINAL)` deixou de existir, e o projeto na Vercel passou
a se chamar `centro-ortopedico`. O site em React nao esta mais no repositorio
nem na Vercel. Ver `NOTA-FONTE.md` dentro da pasta.
