# Rezende Odontologia

Landing page da Rezende Odontologia (Ipatinga/MG), migrada do HTML/CSS/JS estático para o padrão da casa: **Vite + React 18 + TypeScript + Tailwind + lucide-react**.

```bash
npm install
npm run dev       # ambiente local
npm run build     # gera dist/
npm run typecheck # tsc --noEmit
```

## Estrutura

```
src/
  components/        uma seção da página por arquivo
    ui/              blocos reutilizados (WhatsAppLink, Carousel, MarqueeGallery)
  data/content.ts    todo o texto e as listas de imagens da página
  hooks/             useReveal, useInViewport, useMediaQuery, useImageTrail
  lib/site.ts        contatos, endereço e montagem dos links de WhatsApp
  lib/analytics.ts   camada dataLayer (whatsapp_click, form_submit, faq_open…)
public/media/        imagens em WebP + vídeo do hero
```

Para trocar textos, fotos ou perguntas do FAQ, mexa em `src/data/content.ts`.
Para trocar telefone, endereço ou redes, mexa em `src/lib/site.ts`.

## O que mudou em relação à versão estática

**Performance**
- Todas as imagens convertidas para WebP e redimensionadas conforme o tamanho real de exibição: **12,6 MB → 2,0 MB (-84%)**.
- Vídeo do hero não é mais baixado no mobile, com `prefers-reduced-motion` ou com economia de dados ativa; nesses casos fica só o pôster. No desktop ele entra 250 ms após o primeiro paint, para não disputar banda com o LCP.
- Pôster do hero em `<link rel="preload">` com `fetchpriority="high"`.
- Iframe do Google Maps só é montado quando a seção se aproxima da viewport (economiza ~1 MB de terceiros no carregamento).
- As faixas de rolagem contínua (rotina clínica e resultados) cancelam o `requestAnimationFrame` quando saem da tela ou quando a aba perde o foco — antes o loop rodava o tempo todo.
- Arquivos de mídia sem uso foram descartados e o vídeo virou `hero.mp4` (o nome antigo tinha acento).

**SEO**
- JSON-LD `Dentist` ampliado com `geo`, `priceRange` e `availableService`.
- JSON-LD `FAQPage` adicionado, espelhando as perguntas da seção de dúvidas.

**UX / acessibilidade**
- Campo de WhatsApp com máscara `(00) 00000-0000` e validação com mensagem em `role="alert"` antes de abrir a conversa.
- Faixa de reforço abaixo do CTA do hero (desde 1979 · scanner intraoral · planejamento individual).
- Ícones do lucide-react no lugar de setas em texto, com `aria-hidden` nos decorativos.
- Trilha de fotos da seção de história continua exclusiva de ponteiro fino e sem `prefers-reduced-motion` — no toque os nós nem são criados.

## Pendências antes de publicar

O briefing não confirma o domínio oficial. Depois de definido, acrescente em `index.html` a URL absoluta em `canonical` e no `og:image`/`og:url`, e publique um `sitemap.xml` referenciado no `public/robots.txt`.

O `hero.mp4` está com 2,3 MB. Se houver acesso a um encoder, vale gerar uma versão em WebM/AV1 e servir com `<source>` duplo — foi o único item de performance que não deu para resolver aqui por falta de ffmpeg no ambiente.
