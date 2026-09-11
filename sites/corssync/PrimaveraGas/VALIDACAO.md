# Validação local

Verificação realizada em 3 de setembro de 2026, com Node.js 24.18.0, npm 11.16.0 e Chromium 151.

## Execução

- `npm install`: concluído.
- `npm run dev`: servidor local funcionando.
- `npm run build`: concluído com sucesso, com saída em `dist/`.
- `npm run preview`: versão de produção servida e verificada localmente.
- Nenhum deploy foi realizado.

## Resoluções

| Resolução | Rolagem horizontal | Imagens quebradas |
| --- | --- | --- |
| 320 × 740 | Nenhuma | Nenhuma |
| 360 × 800 | Nenhuma | Nenhuma |
| 390 × 844 | Nenhuma | Nenhuma |
| 768 × 1024 | Nenhuma | Nenhuma |
| 1024 × 768 | Nenhuma | Nenhuma |
| 1366 × 768 | Nenhuma | Nenhuma |
| 1440 × 900 | Nenhuma | Nenhuma |
| 1536 × 864 | Nenhuma | Nenhuma |
| 1920 × 1080 | Nenhuma | Nenhuma |
| 2560 × 1440 | Nenhuma | Nenhuma |

Inspeção visual realizada em desktop e celular. Em 1366 × 768, a seção inicial termina aproximadamente em 642 px, incluindo o cabeçalho. Nas resoluções 1440 × 900 e 1536 × 864, termina aproximadamente em 720 px e 728 px.

## Comportamentos

- Menu móvel: abre, navega até a seção, fecha por Escape e devolve o foco ao botão.
- Galeria: amplia as duas fotos, navega entre os quatro itens e fecha pelo botão ou por Escape, devolvendo o foco ao acionador.
- Ambos os vídeos reproduzem e usam controles nativos. São carregados apenas ao abrir a galeria e removidos ao fechar. O cancelamento da transferência de mídia ao fechar é esperado.
- WhatsApp: número e mensagens codificadas conferidos em todos os links.
- Telefone, e-mail, destino do Google Maps e todas as âncoras conferidos. Nenhuma mensagem foi enviada e nenhuma chamada foi efetuada.
- Preferência por movimento reduzido respeitada.
- Nenhuma requisição externa automática durante a navegação testada; fotos, vídeos, fontes e código são locais.
- Nenhum erro de JavaScript ou console na verificação final.
- Análise automatizada axe-core em 390 × 844 e 1366 × 768 sem violações nas regras WCAG 2 A/AA e WCAG 2.1 A/AA verificadas. Isso não constitui certificação completa de acessibilidade.

As ferramentas de teste e arquivos temporários foram removidos da entrega. As dependências necessárias ao aplicativo permanecem registradas em `package.json` e `package-lock.json`.
