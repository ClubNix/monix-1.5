import { HistoryEntry, Member, Product } from "./Model/types";
import { faker } from "@faker-js/faker";

export const generateFakeMembers = (nb: number) => {
  const members: Member[] = [];

  for (let i = 0; i < nb; i++) {
    let history: HistoryEntry[] = generateFakeHistory(10);

    members.push({
      id: i,
      avatar: faker.internet.avatar(),
      pseudo: faker.name.firstName(),
      balance: Number(faker.finance.amount(-100, 100, 1)),
      history: history,
    });
  }

  return members;
};

export const generateFakeProducts = (nb: number) => {
  const products: Product[] = [];

  for (let i = 0; i < nb; i++)
    products.push({
      id: i,
      image: faker.image.food(),
      name: faker.commerce.product(),
      stock: Number(faker.finance.amount(0, 100, 0)),
      price: Number(faker.commerce.price(0, 4, 1)),
    });

  return products;
};

export const generateFakeHistory = (nb: number) => {
  const history: HistoryEntry[] = [];

  for (let i = 0; i < nb; i++)
    history.push({
      id: i,
      date: faker.date.past().getTime(),
      amount: Number(faker.finance.amount(-50, 50, 1)),
    });

  return history;
};

export const createEmptyProduct: () => Product = () => ({
  image: "https://via.placeholder.com/150",
  name: "",
  price: 0,
  stock: 0,
});

export const createEmptyMember: () => Member = () => ({
  avatar: "https://via.placeholder.com/150",
  balance: 0,
  history: [],
  pseudo: "",
});