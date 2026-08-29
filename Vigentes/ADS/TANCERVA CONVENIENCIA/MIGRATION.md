# Migração — tancervaconveniencia.com.br

Site piloto da migração Hostinger → Vercel.

## Origem

| Campo | Valor |
|---|---|
| Conta Hostinger | `u941738490` |
| Servidor | `srv1551.hstgr.io` |
| Backup | `u941738490.20260730102231.tar.gz` (7.254.660.459 bytes) |
| Data do backup | 2026-07-30 |
| Caminho no backup | `./domains/tancervaconveniencia.com.br/public_html/` |
| Tamanho do site | 29 MB · 85 arquivos |

## Auditoria

| Item | Resultado |
|---|---|
| Tipo | HTML/CSS/JS estático (página única, gerado via Lovable) |
| Banco de dados | Nenhum — site não usa |
| Formulários | Nenhum |
| Analytics / GTM / Pixel | Nenhum detectado |
| URLs absolutas do domínio | Nenhuma — `canonical` é relativo (`./`) |
| Recursos externos | Google Fonts, `wa.me` (WhatsApp), Instagram |
| sitemap.xml / robots.txt | Ausentes na origem — **criados nesta migração** |

Contato do site: WhatsApp (65) 99670-3746 · Tangará da Serra/MT.

## Conversão do `.htaccess`

O Apache original foi traduzido para `vercel.json`:

| Regra Apache | Equivalente na Vercel |
|---|---|
| `Options -Indexes` | Padrão da plataforma (sem listagem de diretório) |
| `DirectoryIndex index.html` | Padrão da plataforma |
| Forçar HTTPS (301) | Automático na Vercel + `Strict-Transport-Security` |
| Fallback SPA → `index.html` | `rewrites` (aplicado após a checagem de filesystem) |
| `ErrorDocument 404 /index.html` | Coberto pelo mesmo `rewrites` |
| `mod_deflate` (gzip) | Automático na Vercel (gzip/brotli) |
| `mod_expires` | `headers` com `Cache-Control` por tipo |
| `X-Content-Type-Options` | `headers` |
| `X-Frame-Options` | `headers` |
| `Referrer-Policy` | `headers` |

`Strict-Transport-Security` foi **adicionado** (não existia no original).

## Estado

- [x] Backup baixado e íntegro (tamanho conferido)
- [x] Site extraído e auditado
- [x] Projeto preparado para Vercel
- [ ] Publicado em URL temporária `*.vercel.app`
- [ ] Testado na URL temporária
- [ ] Domínio adicionado ao projeto na Vercel
- [ ] DNS alterado no Registro.br

## DNS — ainda não executado

O domínio `tancervaconveniencia.com.br` continua apontado para a Hostinger.
Nada de DNS deve ser alterado antes da validação na URL temporária.

Os registros exatos devem ser lidos do painel da Vercel após adicionar o domínio —
não presumir valores. Ver `05-relatorios/plano-dns-registro-br.md` (a gerar).

**Atenção:** verificar registros MX/SPF/DKIM/DMARC antes de qualquer alteração,
para não interromper e-mail.
