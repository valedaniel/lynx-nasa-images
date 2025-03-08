import { Locale } from '../enums/locale.js';

export const formatLocale = (locale: Locale) => {
  switch (locale) {
    case Locale.en:
      return 'EN';
    case Locale.ptBR:
      return 'BR';
    default:
      return '';
  }
};
