import { Member, Product } from "./Model/types";
import { faker } from "@faker-js/faker";

export const generateFakeMembers = (nb: number) => {
  const members: Member[] = [];

  for (let i = 0; i < nb; i++)
    members.push({
      id: i,
      avatar: faker.internet.avatar(),
      pseudo: faker.name.firstName(),
      balance: Number(faker.finance.amount(-100, 100, 1)),
    });

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
