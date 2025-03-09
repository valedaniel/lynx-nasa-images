import type { Item } from './Item.js';

export interface Response {
  collection: {
    version: string;
    href: string;
    items: Item[];
  };
}
