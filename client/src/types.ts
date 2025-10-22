interface Trainer {
  _id: string;
  name: string;
  age: number;
}

interface Zone {
  _id: string;
  name: string;
  region: string;
}

interface Pokemon {
  _id: string;
  number: number;
  name: string;
  types: string[];
  imageUrl?: string;
  trainer?: Trainer;
  zone?: Zone[];
}

export type { Trainer, Zone, Pokemon };
