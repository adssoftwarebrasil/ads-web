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

Todos os sites migrados de `ads-software` estao em `Vigentes/ADS/`. A separacao
entre CorsSync, ADS e nao vigentes ainda precisa ser feita: basta mover a pasta
do site para o diretorio correspondente.

## vercel-projects.json

Mapa de `pasta do site` -> projeto na Vercel (`projectId`, `orgId`,
`projectName`). Existe porque o slug do projeto nem sempre corresponde ao nome
da pasta, e os `.vercel/project.json` sao gitignored — este manifesto e a copia
versionada desse vinculo. Para relinkar um site, recrie
`<pasta>/.vercel/project.json` a partir da entrada correspondente.
