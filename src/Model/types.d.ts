export type HistoryEntry = {
  id: number;
  date: number;
  amount: number;
};

export type Member = {
  id: number;
  /** Donnée en Base64 */
  avatar: string;
  pseudo: string;
  balance: number;
  history: HistoryEntry[];
};

export type Product = {
  id: number;
  /** Donnée en Base64 */
  image: string;
  name: string;
  price: number;
  stock: number;
};

export type BasketEntry = { product: Product; amount: number };
