import { useEffect } from 'react';

const TITULO_PADRAO = 'CAMPMED — Produtos Hospitalares em Campinas';
const DESCRICAO_PADRAO =
  'Cirúrgica CAMPMED: loja especializada em produtos hospitalares, ortopédicos, cadeiras de rodas e equipamentos médicos no Cambuí, Campinas. Mais de 25 anos com atendimento técnico consultivo.';

/**
 * Ajusta título, descrição e canônica a cada página. Como o site é uma
 * aplicação de página única, isso precisa ser feito na navegação.
 */
export default function useTitulo(titulo?: string, descricao?: string) {
  useEffect(() => {
    document.title = titulo ?? TITULO_PADRAO;

    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = descricao ?? DESCRICAO_PADRAO;

    const canon = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canon) canon.href = `https://cirurgicacampmed.com.br${window.location.pathname}`;

    return () => {
      document.title = TITULO_PADRAO;
      if (meta) meta.content = DESCRICAO_PADRAO;
    };
  }, [titulo, descricao]);
}
