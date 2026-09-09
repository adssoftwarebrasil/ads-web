# Materiais visuais

## Arquivos do cliente

Os 12 arquivos enviados pelo cliente foram copiados integralmente para `src/assets/client/originals/`. Nenhum original foi alterado ou removido. As versões WebP abaixo ficam em `src/assets/client/`, com orientação correta e resolução otimizada.

| Original                                    | WebP                          | Local de uso                                         |
| ------------------------------------------- | ----------------------------- | ---------------------------------------------------- |
| `483ae3d3-2933-46b2-8617-d743e05edbd6.jpeg` | `lanche-queijo.webp`          | Galeria: capricho em cada camada                     |
| `778E87D9-1113-441B-A3E5-72F4157CD6EE.jpeg` | `saches-acompanhamentos.webp` | Galeria: acompanhamentos                             |
| `IMG_1689.jpeg`                             | `bebida-cremosa.webp`         | Card de sucos e cremes                               |
| `IMG_0751.jpeg`                             | `logo-sr-burgone.webp`        | Cabeçalho e rodapé; também origina o favicon PNG     |
| `fb2d4d23-76d6-45a0-a5e3-1335f86231f0.jpeg` | `lanche-aberto.webp`          | Galeria: sabor por todos os lados                    |
| `f2eff019-12dc-40c7-834a-21ceb4aec320.jpeg` | `hamburguer-da-casa.webp`     | Imagem principal e card de lanches com salada        |
| `d3d62ef0-74d5-4d6f-9869-d8f748499e3b.jpeg` | `hamburguer-duplo.webp`       | Card de hambúrgueres                                 |
| `f3f028b0-75fa-4e50-8922-a6bd81fa1ee5.jpeg` | `lanche-no-prato.webp`        | Galeria: mais jeitos de matar a fome                 |
| `3C1A9B2A-C294-4A0B-9AD6-5E3FF869B675.png`  | `arte-geleia.webp`            | Seção sobre molhos e geleia; arte completa ampliável |
| `70AD6653-AB64-45FB-B050-85B06D58532A.png`  | `arte-sr-burgone.webp`        | Galeria: arte da marca                               |
| `107D6608-BC19-4D7B-B3F5-29B9E56457A4.jpeg` | `espaco-infantil.webp`        | Galeria: espaço infantil                             |
| `IMG_4202.jpeg`                             | `ambiente-da-casa.webp`       | Seção de história e ambiente                         |

As imagens não recebem ingredientes, nomes comerciais ou preços inventados. Os recortes das miniaturas são somente CSS: na galeria ampliada o arquivo é exibido inteiro, usando `object-fit: contain`. O logotipo também é exibido inteiro.

### Distinções de conteúdo

- A imagem dos sachês é de ketchup e maionese industrializados e não representa os molhos caseiros.
- As duas artes são identificadas como peças promocionais, sem apresentar a ilustração do cozinheiro como um registro fotográfico.
- A arte `70AD6653-AB64-45FB-B050-85B06D58532A.png` menciona “desde 2023”. O briefing informa fundação em **5 de setembro de 2024**. Essa data foi mantida no texto, e a divergência é explicada na legenda ampliada. A arte original permanece intacta.
- Informações presentes nas artes não são instruções de desenvolvimento e não substituem automaticamente o briefing.

## Otimização e manutenção

Execute `npm run assets:prepare` para regenerar os arquivos WebP e o favicon a partir dos originais. O script `scripts/prepare-assets.mjs` usa Sharp localmente; não envia fotos a serviços externos. Rotação EXIF e compressão são aplicadas somente às cópias. Os arquivos otimizados não conservam os metadados EXIF dos originais.

A resolução máxima é 1400 × 1800, preservando a proporção e sem ampliar imagens menores. Qualidade WebP 84 para fotos e 90 para artes com texto. Não é necessário rodar esse script a cada build.

Os dados de exibição, textos alternativos e a galeria ficam em `src/data/clientImages.js`. Ao substituir fotos, confira também dimensões e posições de recorte. Execute `npm run build` e `npm test` depois das alterações.

## Fotografia ilustrativa ainda utilizada

Como não veio uma foto de sobremesa, a categoria mantém `src/assets/images/sobremesa.webp`, identificada como ilustrativa. [Origem no Unsplash](https://images.unsplash.com/photo-1563805042-7684c019e1cb), [licença](https://unsplash.com/license). Ela é servida localmente.

Os arquivos `hamburguer.webp`, `x-salada.webp` e `suco.webp` da primeira versão foram preservados em `src/assets/images/` para referência, mas não são mais importados e não entram na build. Origens anteriores:

- [Hambúrguer](https://images.unsplash.com/photo-1571091718767-18b5b1457add)
- [Sanduíche](https://images.unsplash.com/photo-1568901346375-23c9450c58cd)
- [Suco](https://images.unsplash.com/photo-1600271886742-f049cd451bba)

## Fontes e ícones

Barlow Condensed e DM Sans são distribuídas localmente pelos pacotes Fontsource. Suas licenças estão preservadas em `public/licenses/` e entram em `dist/licenses/`. Ícones de interface são do Lucide React, com ícones de WhatsApp e Instagram em SVG local.
