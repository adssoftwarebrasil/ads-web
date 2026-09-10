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

Os 117 sites com contrato vencido ja foram separados em `Não vigentes/`. Os
vigentes estao em `Vigentes/ADS/` (383 pastas) e `Vigentes/CorsSync/`
(148 pastas). Em 10/09/2026 os sites da CorsSync que ainda nao tinham projeto
na Vercel foram publicados: **132 entraram no ar de uma vez**, e hoje toda
pasta da CorsSync que e site esta publicada.

## vercel-projects.json

Mapa de `pasta do site` -> projeto na Vercel (`path`, `projectId`, `orgId`,
`projectName`). Existe porque o slug do projeto nem sempre corresponde ao nome
da pasta, e os `.vercel/project.json` sao gitignored — este manifesto e a copia
versionada desse vinculo. Para relinkar um site, recrie
`<path>/.vercel/project.json` a partir da entrada correspondente.

O campo `path` da o diretorio completo, ja que as pastas vivem sob
`Vigentes/ADS/`, `Vigentes/CorsSync/` ou `Não vigentes/`. Cobre 627 das 648
pastas.

## Balanco com a Vercel

627 pastas vinculadas a um projeto na Vercel. Faltam 21, e nenhuma delas por
esquecimento:

- **oito nunca chegaram ao ar** — `Alba's Cleaning Services`,
  `EXCLUSIVE CONSTRUTORA E reformadora`, `GERENCIAL CONTABIL 1`,
  `Premium Cleaning Services`, `Proposta de Parceria Digital`,
  `RETOCARS AUTO SERVICE LTDA`, `Royall` e `Veacci`;
- **dez sao pastas da CorsSync de clientes que ja tem site no ar** por um
  projeto da ADS — ver a secao abaixo;
- **tres nao sao site**: `_material` (assets compartilhados),
  `Vigentes/CorsSync/tmp` (uns PDFs) e `Vigentes/CorsSync/DPServicos`
  (pasta vazia).

### O endereco publico nem sempre e o nome do projeto

O subdominio `.vercel.app` e **global**, nao e so da nossa conta: se o nome
curto ja pertence a outra empresa na Vercel, o nosso projeto nao o recebe e a
Vercel entrega um endereco com sufixo. `<nome-do-projeto>.vercel.app` pode
existir, responder 200 e mostrar **o site de outra empresa**.

Aconteceu em 13 dos 132 sites publicados em 10/09/2026. O endereco bom de cada
um:

| Pasta | Endereco a divulgar |
|---|---|
| Agrocampo | `agrocampo-mu.vercel.app` |
| DGL | `dgl-gamma.vercel.app` |
| DrogariaSaoPaulo | `drogaria-sao-paulo-zeta.vercel.app` |
| MaisVida | `mais-vida-sooty.vercel.app` |
| MartelinhoDeOuro | `martelinho-de-ouro-alpha.vercel.app` |
| Monark | `monark-liart.vercel.app` |
| PizzaDoPaulista | `pizza-do-paulista-five.vercel.app` |
| RenovaClinica | `renova-clinica-eight.vercel.app` |
| Rovet | `rovet-six.vercel.app` |
| SaborDaCasa | `sabor-da-casa-silk.vercel.app` |
| SaoBenedito | `sao-benedito-zeta.vercel.app` |
| Stitch (Kadima) | `kadima-swart.vercel.app` |
| TWA | `twa-eta-one.vercel.app` |

Nunca monte a URL de um site a partir do nome do projeto. Pegue o alias real
em `GET /v13/deployments/<id>` e confirme que o HTML servido e mesmo do
cliente, comparando o `<title>` com o do `index.html` local.

### Pastas da CorsSync que repetem cliente ja publicado

Estas dez pastas sao de clientes que ja tem site no ar por um projeto da ADS,
e por isso ficaram sem publicar — publicar daria ao mesmo cliente dois
enderecos concorrentes. Em cinco delas o arquivo local e **igual byte a byte**
ao que ja esta no ar.

`CasaDasBombas`, `ColegioSinapse`, `GoldenHouse`, `KalyAgon`, `Mecanica277`,
`NovaOpcao`, `PortalDaPaz`, `SupercasaImoveis`, `TorreEngenharia` e
`ZeDaBateria`.

Dois cuidados antes de mexer nelas:

- **TorreEngenharia**: a copia da CorsSync nao tem o pixel do Facebook que o
  site no ar tem. Publicar essa copia por cima faz o cliente parar de medir
  os anuncios.
- **NovaOpcao**: o projeto no ar atende o dominio proprio
  `novaopcaopersianasgo.com.br`. Nao e um `.vercel.app` descartavel.

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

`GV AUTOS` veio pelo mesmo caminho: era um WordPress em `gvautos.com.br`, saiu
do ar com a suspensao da conta, e foi remontado a partir dos arquivos da
hospedagem mais o banco de dados do backup (`.dbdumps`). E um site de uma
pagina so, com mais 9 paginas que existem em endereco proprio mas nunca
estiveram no menu. **Ja esta no ar** em `gv-autos.vercel.app`. O formulario de
contato nao envia mais e ainda precisa de decisao — ver `NOTA-FONTE.md` dentro
da pasta.

`IDEAL DESIGN E INTERIORES` veio pelo mesmo caminho: era um WordPress em
`idealdesigneinteriores.com.br`, saiu do ar com a suspensao da conta
`u257781368`, e foi remontado a partir dos arquivos da hospedagem mais o banco
de dados do backup (`.dbdumps` de `sites-hostinger3`). As 14 paginas foram
gravadas prontas e o site **ja esta no ar** em
`ideal-design-e-interiores.vercel.app`. Aqui o formulario de contato nao ficou
pendente: ele passou a abrir o WhatsApp da loja com a mensagem pronta. Ver
`NOTA-FONTE.md` dentro da pasta.

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
