import { Locale } from '../enums/locale.js';

export const locales = [Locale.en, Locale.ptBR];

export const getAPIUrl = (searchValue: string) =>
  `https://images-api.nasa.gov/search?q=${searchValue}&media_type=image`;
