import { getAPIUrl } from '../utils/constants.js';

export const ImagesService = {
  fetchImages: async (searchValue: string) => {
    const response = await fetch(getAPIUrl(searchValue));
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    const data = await response.json();
    return data;
  },
};
