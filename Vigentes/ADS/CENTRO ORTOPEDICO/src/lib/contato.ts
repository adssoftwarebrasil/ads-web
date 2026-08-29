export const EMPRESA = 'Centro Ortopédico';
export const ANOS_DE_TRADICAO = 28;

export const ENDERECO = {
  logradouro: 'Av. Heráclito Graça, 641',
  bairro: 'Centro',
  cidade: 'Fortaleza',
  uf: 'CE',
  cep: '60140-061',
};

export const ENDERECO_COMPLETO = `${ENDERECO.logradouro} – ${ENDERECO.bairro}, ${ENDERECO.cidade}/${ENDERECO.uf} – CEP ${ENDERECO.cep}`;

export const TELEFONES = [
  { rotulo: '(85) 3226-5265', href: 'tel:+558532265265' },
  { rotulo: '(85) 3253-2490', href: 'tel:+558532532490' },
  { rotulo: '(85) 3253-5893', href: 'tel:+558532535893' },
];

export const EMAIL = 'centroortopedico@hotmail.com.br';
export const CNPJ = '01.666.709/0001-93';
export const FACEBOOK = 'https://www.facebook.com/centrortopedico/';

const WHATSAPP_NUMERO = '5585987360151';
export const WHATSAPP_ROTULO = '(85) 98736-0151';

export function whatsapp(mensagem: string) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMERO}&text=${encodeURIComponent(mensagem)}`;
}

export const WHATSAPP_PADRAO = whatsapp(
  'Olá! Vim pelo site e gostaria de mais informações sobre os produtos do Centro Ortopédico.'
);
