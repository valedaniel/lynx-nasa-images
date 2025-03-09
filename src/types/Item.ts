import type { Data } from './Data.js';
import type { Link } from './Link.js';

export interface Item {
  href: string;
  data: Data[];
  links: Link[];
}
