import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { trackWhatsApp } from '../../lib/analytics';
import { serviceWhatsappUrl } from '../../lib/site';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  section: string;
  position: string;
  service?: string;
  children: ReactNode;
};

/**
 * Todo CTA de WhatsApp passa por aqui: monta a mensagem conforme o tratamento
 * e envia o evento para o dataLayer com o contexto de origem do clique.
 */
export default function WhatsAppLink({ section, position, service, children, onClick, ...rest }: Props) {
  return (
    <a
      href={serviceWhatsappUrl(service)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        trackWhatsApp({ section, position, service });
        onClick?.(event);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
