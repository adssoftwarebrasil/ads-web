#!/usr/bin/env bash
#
# Guarda contra exclusao acidental de arquivos do outro lado da fronteira.
#
# A ADS cuida das pastas da ADS e a CorsSync das pastas da CorsSync. Apagar
# arquivo do outro lado nunca foi trabalho normal: em todo o historico do
# repositorio isso aconteceu uma vez so, e foi o acidente do commit 5c90b9f,
# que levou junto duas imagens do site do Ecodescarte.
#
# Alterar arquivo do outro lado e permitido (acontece de verdade). So a
# EXCLUSAO e barrada.
#
# Uso:
#   scripts/conferir-exclusoes.sh                 # confere ORIG_HEAD..HEAD
#   scripts/conferir-exclusoes.sh <base> <topo>   # confere um intervalo
#
# Para apagar de proposito uma pasta do outro lado, escreva
# [remove-autorizado] no titulo do commit e a conferencia deixa passar.

set -uo pipefail

EMAIL_CORSSYNC='coresyncweb@gmail.com'
MARCA_LIBERADA='[remove-autorizado]'

# Pastas de cada equipe. Os caminhos antigos continuam na lista para a guarda
# valer tambem no historico ja gravado, antes da mudanca para sites/.
PREFIXOS_ADS=('sites/ads/' 'Vigentes/ADS/' 'Não vigentes/')
PREFIXOS_CORSSYNC=('sites/corssync/' 'Vigentes/CorsSync/')

lado_do_arquivo() {
  local caminho="$1" p
  for p in "${PREFIXOS_ADS[@]}";      do [[ "$caminho" == "$p"* ]] && { echo ads; return; }; done
  for p in "${PREFIXOS_CORSSYNC[@]}"; do [[ "$caminho" == "$p"* ]] && { echo corssync; return; }; done
  echo ''
}

lado_do_autor() {
  [[ "$1" == "$EMAIL_CORSSYNC" ]] && echo corssync || echo ads
}

# --- intervalo a conferir -----------------------------------------------
base="${1:-}"
topo="${2:-HEAD}"

if [[ -z "$base" ]]; then
  base=$(git rev-parse --verify --quiet ORIG_HEAD) || base=''
fi
# hash so de zeros = branch nova no GitHub; nao ha antes com que comparar
[[ "$base" =~ ^0+$ ]] && base=''
if [[ -n "$base" ]] && ! git rev-parse --verify --quiet "$base^{commit}" >/dev/null; then
  base=''
fi

if [[ -n "$base" ]]; then
  intervalo="$base..$topo"
else
  intervalo=$(git rev-parse --verify --quiet "$topo^" >/dev/null && echo "$topo^..$topo" || echo "$topo")
fi

# --- varredura ----------------------------------------------------------
# -M detecta renomeacao (arquivo movido nao conta como apagado) e -l0 tira o
# limite de deteccao, que a mudanca de estrutura estouraria.
mapfile -t linhas < <(
  git -c core.quotepath=false log --no-merges -M -l0 \
      --diff-filter=D --name-only \
      --format=$'\x01%H\x1f%ae\x1f%s' "$intervalo" 2>/dev/null
)

achados=0
commit=''; autor=''; titulo=''; lado_autor=''
declare -a problemas=()

for linha in "${linhas[@]}"; do
  if [[ "$linha" == $'\x01'* ]]; then
    IFS=$'\x1f' read -r commit autor titulo <<< "${linha:1}"
    lado_autor=$(lado_do_autor "$autor")
    continue
  fi
  [[ -z "$linha" ]] && continue
  [[ "$titulo" == *"$MARCA_LIBERADA"* ]] && continue

  lado_arquivo=$(lado_do_arquivo "$linha")
  if [[ -n "$lado_arquivo" && "$lado_arquivo" != "$lado_autor" ]]; then
    problemas+=("$commit|$autor|$titulo|$linha")
    achados=$((achados + 1))
  fi
done

if [[ "$achados" -eq 0 ]]; then
  echo "ok: nenhuma exclusao entre as pastas das duas equipes em $intervalo"
  exit 0
fi

echo ""
echo "=================================================================="
echo " ATENCAO: $achados arquivo(s) apagado(s) da pasta da outra equipe"
echo "=================================================================="
echo ""

ultimo=''
for p in "${problemas[@]}"; do
  IFS='|' read -r c a t f <<< "$p"
  if [[ "$c" != "$ultimo" ]]; then
    [[ -n "$ultimo" ]] && echo ""
    echo "commit ${c:0:7} - $a"
    echo "  titulo: $t"
    echo "  apagou:"
    ultimo="$c"
  fi
  echo "    $f"
done

cat <<'AJUDA'

------------------------------------------------------------------
Provavelmente foi sem querer: sobra de um "git add -A" na maquina de
quem commitou. Commitar nao poe o site no ar, entao o estrago so
apareceria na proxima republicacao daquele site - semanas depois.

Para trazer os arquivos de volta, de dentro do repositorio:

    git checkout <commit-anterior> -- "<caminho do arquivo>"

Se a exclusao era mesmo para acontecer, refaca o commit com
[remove-autorizado] no titulo.
------------------------------------------------------------------
AJUDA

exit 1
