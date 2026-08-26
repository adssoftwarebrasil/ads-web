export const BLUE = 'rgb(0, 73, 176)';
export const BLUE_LIGHT = 'rgb(96, 174, 220)';
export const YELLOW = 'rgb(254, 201, 1)';
export const YELLOW2 = 'rgb(255, 217, 7)';

export const WA_SOLAR = 'https://wa.me/5577998270291';
export const WA_POSVENDA = 'https://wa.me/5577999150105';
export const WA_MATERIAL = 'https://wa.me/5577988099543';

export const WA_SOLAR_MSG =
  'https://wa.me/5577998270291?text=Ol%C3%A1%20vim%20pelo%20Google.%20Gostaria%20de%20fazer%20um%20or%C3%A7amento.';
export const WA_POSVENDA_MSG =
  'https://wa.me/5577999150105?text=Ol%C3%A1%20vim%20pelo%20Google.%20Gostaria%20de%20fazer%20um%20or%C3%A7amento.';
export const WA_MATERIAL_MSG =
  'https://wa.me/5577988099543?text=Ol%C3%A1%20vim%20pelo%20Google.%20Gostaria%20de%20fazer%20um%20or%C3%A7amento.';

// Variante com acentos (usada em alguns CTAs no markup original)
export const WA_SOLAR_MSG_ACC =
  'https://wa.me/5577998270291?text=Olá%20vim%20pelo%20Google.%20Gostaria%20de%20fazer%20um%20orçamento.';
export const WA_POSVENDA_MSG_ACC =
  'https://wa.me/5577999150105?text=Olá%20vim%20pelo%20Google.%20Gostaria%20de%20fazer%20um%20orçamento.';

export const INSTAGRAM = 'https://instagram.com/eletroluzbarreiras';

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
