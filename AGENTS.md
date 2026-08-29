# Instrucoes para agentes de IA

Leia antes de mexer neste repositorio ou na conta da Vercel da ADS.

## Regra obrigatoria: manter o vercel-projects.json em dia

`vercel-projects.json` e a unica copia versionada do vinculo entre cada pasta
de site e seu projeto na Vercel. Os `.vercel/project.json` sao gitignored e
vivem so na maquina de quem fez o deploy, entao se esse manifesto ficar
desatualizado o vinculo se perde e a unica forma de recuperar e comparar, um a
um, o `<title>` de cada site publicado com o do codigo local. Isso ja precisou
ser feito uma vez.

**Toda acao abaixo obriga a atualizar o manifesto no mesmo commit:**

| Acao | O que fazer no manifesto |
|---|---|
| Criar projeto na Vercel | adicionar entrada, com os quatro campos |
| Apagar projeto na Vercel | remover a entrada |
| Renomear projeto na Vercel | atualizar `projectName` |
| Criar pasta de site | adicionar entrada assim que houver projeto |
| Renomear pasta | atualizar a chave e o `path` |
| Mover pasta entre `Vigentes/` e `Não vigentes/` | atualizar o `path` |
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

## Ao renomear projeto na Vercel, cuidado com a URL

O nome do projeto define o endereco `<nome>.vercel.app`. Renomear troca esse
endereco e derruba o antigo. A maioria dos sites daqui nao tem dominio proprio
e depende so dele, entao **nunca renomeie um projeto sem autorizacao explicita
do responsavel** — nem para "arrumar" o padrao do nome.

Nao e preciso renomear projeto para casar com o nome da pasta: o manifesto
existe justamente para absorver essa divergencia.

## Antes de apagar qualquer projeto

Exclusao na Vercel e irreversivel. Antes de apagar, confirme que o projeto
nao tem dominio proprio, que nao esta vinculado a nenhuma pasta no manifesto,
e que o site que ele serve e realmente duplicata de outro projeto — comparando
o HTML servido pelos dois, nao so o titulo.

## Mantenha o README coerente

O `README.md` cita numeros (quantidade de pastas, de projetos, quais faltam
vincular). Se sua alteracao mudar algum deles, corrija o texto no mesmo commit.
