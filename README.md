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
369 vigentes seguem em `Vigentes/ADS/`. A separacao entre ADS e CorsSync ainda
precisa ser feita: basta mover a pasta do site para o diretorio correspondente.

## vercel-projects.json

Mapa de `pasta do site` -> projeto na Vercel (`path`, `projectId`, `orgId`,
`projectName`). Existe porque o slug do projeto nem sempre corresponde ao nome
da pasta, e os `.vercel/project.json` sao gitignored — este manifesto e a copia
versionada desse vinculo. Para relinkar um site, recrie
`<path>/.vercel/project.json` a partir da entrada correspondente.

O campo `path` da o diretorio completo, ja que as pastas vivem sob
`Vigentes/ADS/` ou `Não vigentes/`. Cobre 476 das 486 pastas: as 10 restantes
nao tem projeto correspondente na Vercel (`Alba's Cleaning Services`,
`EXCLUSIVE CONSTRUTORA E reformadora`, `GERENCIAL CONTABIL 1`, `IMPERIAL GAS`,
`Premium Cleaning Services`, `Proposta de Parceria Digital`,
`RETOCARS AUTO SERVICE LTDA`, `Royall`, `Veacci`) ou nao sao site
(`_material`).

## Balanco com a Vercel

476 projetos na Vercel e 476 pastas vinculadas: **todo projeto tem pasta**.
As 35 duplicatas — projetos antigos ou builds superados que serviam o mesmo
site de uma pasta ja mapeada — foram removidas.

Faltam vincular 10 pastas, que nunca chegaram a ser publicadas:
`Alba's Cleaning Services`, `EXCLUSIVE CONSTRUTORA E reformadora`,
`GERENCIAL CONTABIL 1`, `IMPERIAL GAS`, `Premium Cleaning Services`,
`Proposta de Parceria Digital`, `RETOCARS AUTO SERVICE LTDA`, `Royall` e
`Veacci`. A decima, `_material`, nao e site — e a pasta de assets
compartilhados.

`TANCERVA CONVENIENCIA` e `GLOBO TRANSPORTES` foram recuperadas do proprio
deploy na Vercel, via `/v6/deployments/<id>/files`, por nao haver copia local.
A do tancerva veio do `source.tgz` que o CLI subiu, entao e o fonte real. A do
globo veio dos arquivos servidos, que sao a saida do build — ver
`NOTA-FONTE.md` dentro da pasta.
