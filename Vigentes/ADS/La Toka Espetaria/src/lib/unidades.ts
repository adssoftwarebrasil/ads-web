export interface Unidade {
  id: string;
  nome: string;
  endereco: string[];
  enderecoCurto: string[];
  mapsEmbed: string;
  mapsDir: string;
  ifood: string;
}

export const unidades: Unidade[] = [
  {
    id: 'setor-bueno',
    nome: 'Setor Bueno',
    endereco: ['R. C-235, 148 - Qd 540 Lt 03 casa 2', 'Jardim América, Goiânia - GO', 'CEP: 74290-050'],
    enderecoCurto: ['R. C-235, 148 - Jardim América', 'Goiânia - GO, 74290-050'],
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d955.3497227678318!2d-49.276372430671934!3d-16.70693728793707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1474d7fe7c3%3A0x59cdbd541bc27249!2sLa%20Toka%20Espetaria%20e%20Cozinha%20(jantinha%2C%20espetinho%2C%20almo%C3%A7o%2C%20pestiscos%2C%20pratos%20executivos)!5e0!3m2!1spt-BR!2sbr!4v1764855450741!5m2!1spt-BR!2sbr',
    mapsDir: 'https://www.google.com/maps/dir/?api=1&destination=-16.70693728793707,-49.276372430671934',
    ifood:
      'https://www.ifood.com.br/delivery/goiania-go/la-toka-espetinho-jantinha-churrasco-jardim-america/4ee2d17a-d4a6-42ad-aa3f-5d7a4683eec9?UTM_Medium=share',
  },
  {
    id: 'jardim-atlantico',
    nome: 'Jardim Atlântico',
    endereco: ['Avenida Leblon, Qd. 131, Lt. 26', 'Esquina com a Avenida do Parque', 'Jardim Atlântico, Goiânia - GO'],
    enderecoCurto: ['Av. Leblon, Qd. 131, Lt. 26 - esquina', 'com a Av. do Parque, Jardim Atlântico'],
    mapsEmbed: 'https://www.google.com/maps?q=-16.7350763,-49.2917014&z=17&hl=pt-BR&output=embed',
    mapsDir: 'https://www.google.com/maps/dir/?api=1&destination=-16.7350763,-49.2917014',
    ifood:
      'https://www.ifood.com.br/delivery/goiania-go/la-toka---espetinho-jantinha-churrasco-jardim-atlantico/97141cc1-3d74-4763-8333-824a318589c1?UTM_Medium=share',
  },
];
