# Validação local

Data: 3 de setembro de 2026.

## Instalação e build

- `npm install`: concluído; nenhuma vulnerabilidade reportada na instalação.
- `npm run dev`: aplicação carregada em servidor local.
- `npm run build`: concluído com sucesso; diretório `dist/` gerado.
- `npm run preview`: build de produção carregada e testada em servidor local.
- Ambiente de verificação: Node.js 24, navegador Microsoft Edge/Chromium com Playwright.
- Nenhuma publicação ou conexão com serviço de hospedagem foi realizada.

## Resoluções verificadas

| Resolução   | Rolagem horizontal | Imagens    | Ação principal na primeira tela |
| ----------- | ------------------ | ---------- | ------------------------------- |
| 320 × 740   | Ausente            | Carregadas | Sim                             |
| 360 × 800   | Ausente            | Carregadas | Sim                             |
| 390 × 844   | Ausente            | Carregadas | Sim                             |
| 768 × 1024  | Ausente            | Carregadas | Sim                             |
| 1024 × 768  | Ausente            | Carregadas | Sim                             |
| 1366 × 768  | Ausente            | Carregadas | Sim                             |
| 1440 × 900  | Ausente            | Carregadas | Sim                             |
| 1536 × 864  | Ausente            | Carregadas | Sim                             |
| 2560 × 1440 | Ausente            | Carregadas | Sim                             |

Em 1366 × 768, o bloco principal termina na coordenada vertical de 586 px e o botão principal na coordenada de 507 px. O título, o conteúdo e o botão permanecem visíveis sem exigir rolagem inicial.

As capturas `validacao-desktop.png` e `validacao-mobile.png` registram a primeira tela da build final.

## Interações

- Menu mobile: abertura, estado expandido, fechamento por Escape e por navegação.
- Perfis: todos os quatro conteúdos, alternância por clique, setas e Home, sem overflow.
- Galeria: abertura, troca de imagem por botão e teclado, Escape, contenção do foco e retorno ao botão de origem.
- FAQ: alternância dos acordeões nativos, com uma resposta aberta por vez.
- Formulário: obrigatoriedade, rejeição de nome composto apenas por espaços, montagem da mensagem, codificação de acentos e caracteres especiais e link alternativo quando a janela não abre.
- Botão flutuante: oculto quando o contato está em tela e quando a galeria está aberta, para preservar os controles dessas áreas.
- Mensagens e ligações reais não foram disparadas. A abertura do WhatsApp foi interceptada no teste e a URL foi validada para o número informado no briefing.
- Links internos apontam para seções existentes. PDF e favicon responderam com sucesso. A fonte local carregou corretamente.

## Acessibilidade e qualidade

- Auditoria automatizada com axe-core nos tamanhos 390 × 844 e 1366 × 768: zero violações nas regras WCAG 2 A/AA e WCAG 2.1 A/AA verificadas.
- Contrastes secundários corrigidos após a primeira auditoria.
- Respeito a `prefers-reduced-motion` confirmado.
- Nenhum erro ou aviso de console durante o teste final.
- Nenhum recurso com erro HTTP e nenhuma imagem quebrada.
- Nenhuma solicitação de rede externa durante o carregamento e as interações locais verificadas. Imagens, fonte, ícones e PDF são servidos pelo próprio projeto.
- Código formatado e dependências da aplicação verificadas com `npm ls --depth=0`.
- Não há caminhos de arquivos dependentes do computador, imports não resolvidos ou serviços externos inventados.

A auditoria automatizada foi complementada por inspeção visual em desktop e mobile e por testes de teclado. Ela não substitui uma avaliação completa com todos os navegadores e tecnologias assistivas.
