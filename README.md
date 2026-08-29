# ads-web

Acervo dos sites desenvolvidos pela **ADS**. Cada pasta de site e um projeto
independente (React + Vite + TypeScript).

## Estrutura

```
Vigentes/
  CorsSync/      sites vigentes sob a CorsSync
  ADS/           sites vigentes sob a ADS
Não vigentes/    sites que sairam do ar ou foram encerrados
```

## Estado atual

Os 117 sites com contrato vencido ja foram separados em `Não vigentes/`; os
365 vigentes seguem em `Vigentes/ADS/`. A separacao entre ADS e CorsSync ainda
precisa ser feita: basta mover a pasta do site para o diretorio correspondente.

## vercel-projects.json

Mapa de `pasta do site` -> projeto na Vercel (`path`, `projectId`, `orgId`,
`projectName`). Existe porque o slug do projeto nem sempre corresponde ao nome
da pasta, e os `.vercel/project.json` sao gitignored — este manifesto e a copia
versionada desse vinculo. Para relinkar um site, recrie
`<path>/.vercel/project.json` a partir da entrada correspondente.

O campo `path` da o diretorio completo, ja que as pastas vivem sob
`Vigentes/ADS/` ou `Não vigentes/`. Cobre 472 das 482 pastas: as 10 restantes
nao tem projeto correspondente na Vercel (`Alba's Cleaning Services`,
`EXCLUSIVE CONSTRUTORA E reformadora`, `GERENCIAL CONTABIL 1`, `IMPERIAL GAS`,
`Premium Cleaning Services`, `Proposta de Parceria Digital`,
`RETOCARS AUTO SERVICE LTDA`, `Royall`, `Veacci`) ou nao sao site
(`_material`).

## Balanco com a Vercel

479 projetos na Vercel para 482 pastas, 472 delas vinculadas. As 32 duplicatas
(projetos antigos que serviam o mesmo site de uma pasta ja mapeada) foram
removidas.

Sete projetos seguem sem pasta no repositorio:

- **Falta o codigo-fonte** — `arthurautotruckcenter`, `globotransportes`,
  `solene-construction` (dominio proprio www.soleneconstruction.com) e
  `tancerva conveniencia`. Sao clientes no ar; o codigo precisa ser trazido
  para ca.
- **A conferir** — `imperatrizcolchoes`, `marcuswerneck` e
  `starlit-begonia-818f64` tem o mesmo titulo de uma pasta existente
  (`Ortobom Afonso Pena`, `Clinica Weneck` e `TRC`, respectivamente), mas com
  nome de cliente diferente. Podem ser duplicatas ou sites distintos usando o
  mesmo template.
