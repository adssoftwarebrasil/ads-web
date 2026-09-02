# Migração — House Code Peruíbe (landing page)

Landing page da House Code Imobiliária para Peruíbe/SP, migrada da Hostinger
para a Vercel.

## Origem

| Campo | Valor |
|---|---|
| Subdomínio Hostinger | `housecode-lp.sitesdeclientesads.site` |
| Caminho na origem | `domains/housecode-lp.sitesdeclientesads.site/public_html/` |
| Tamanho do site | 15 MB · 25 arquivos |
| Cliente | HOUSE CODE |

## Auditoria

| Item | Resultado |
|---|---|
| Tipo | HTML/CSS/JS estático, página única, sem build |
| Banco de dados | Nenhum — site não usa |
| Formulários | Nenhum (conversão é por WhatsApp e link externo) |
| Analytics / GTM / Pixel | Nenhum detectado |
| URLs absolutas do próprio domínio | Nenhuma — nada a reescrever |
| Recursos externos | Google Fonts, YouTube (vídeo de fundo do topo), WhatsApp, Instagram, site principal `housecode.com.br` |
| robots.txt | Ausente na origem — **criado nesta migração** |
| sitemap.xml | Ausente na origem — **pendente**, depende da URL definitiva |

Todas as chamadas para ação apontam para
`https://www.housecode.com.br/imoveis/a-venda/peruibe`.

## Conversão do `.htaccess`

O `.htaccess` do Apache foi removido (a Vercel não o lê) e traduzido para
`vercel.json`:

| Regra Apache | Equivalente na Vercel |
|---|---|
| `Options -Indexes` | Padrão da plataforma (sem listagem de diretório) |
| `DirectoryIndex index.html` | Padrão da plataforma |
| Forçar HTTPS (301) | Automático na Vercel + `Strict-Transport-Security` |
| `ErrorDocument 404 /index.html` | `rewrites` (aplicado depois da checagem de arquivos) |
| `mod_deflate` (gzip) | Automático na Vercel (gzip/brotli) |
| `mod_expires` | `headers` com `Cache-Control` por caminho |
| `X-Content-Type-Options` | `headers` |
| `X-Frame-Options` | `headers` |
| `Referrer-Policy` | `headers` |

`Strict-Transport-Security` foi **adicionado** (não existia no original).

Uma diferença de propósito: o Apache mandava o navegador guardar o HTML por uma
hora. Na Vercel a página revalida a cada acesso, então uma correção publicada
aparece na hora, em vez de o visitante poder ver a versão antiga por até uma
hora. Imagens, CSS e JS mantêm o cache longo do original.

O `README.txt` da origem, com instruções de upload para a Hostinger, foi
removido: não vale mais para a Vercel, e o que ele documentava está aqui.

## Pontos em aberto

1. **Número de WhatsApp divergente.** Os botões de WhatsApp da página chamam o
   `5511916128082` — (11) 91612-8082. Esse número não aparece em nenhum outro
   lugar do site: o bloco de contato e o README da origem trazem
   (11) 99778-3498 e (13) 99712-7750. Confirmar com o cliente qual é o número
   certo antes de rodar tráfego pago para a página.
2. **Peso das imagens.** A pasta `assets/` tem 15 MB, quase toda em
   `assets/bairros/*.png` (de 437 KB a 2,9 MB cada). No celular isso deixa a
   página lenta. Converter esses PNG para JPG/WebP resolveria sem perda
   visível — não foi feito aqui para não alterar o site na migração.
3. **Domínio próprio.** A página não tem domínio próprio; hoje depende só da
   URL da Vercel. Se um domínio for anexado, vale acrescentar ao `vercel.json`
   a regra de `X-Robots-Tag: noindex` para o endereço `*.vercel.app`, evitando
   que o Google indexe as duas versões.
4. **sitemap.xml** a criar quando a URL definitiva estiver decidida.
