import { Member } from "./Model/types";
import { faker } from "@faker-js/faker";

export const generateFakeMembers = (nb: number) => {
  const members: Member[] = [];

  for (let i = 0; i < nb; i++)
    members.push({
      id: i,
      pseudo: faker.name.firstName(),
      balance: Number(faker.finance.amount(-100, 100, 1)),
    });

  return members;
};
