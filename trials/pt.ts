function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
function getAbility() {
  const ability = Array.from({ length: 4 }, rollDice);
  ability.sort((a, b) => a - b);
  return ability
    .slice(1)
    .reduce((value, accumulator) => accumulator + value, 0);
}

const getModifier = (score: number) => {
  return Math.floor((score - 10) / 2);
};

function getCharacter() {
  const abilities = {
    strength: getAbility(),
    dexterity: getAbility(),
    constitution: getAbility(),
    intelligence: getAbility(),
    wisdom: getAbility(),
    charisma: getAbility(),
  };
  const constitutionModifier = getModifier(abilities.constitution);
  return {
    abilities,
    hitpionts: 10 + constitutionModifier,
  };
}

console.log(getCharacter());

const order = [];
type Menu = {
  id: number;
  name: string;
  price: number;
};

const menu: Menu[] = [
  {
    id: 1,
    name: "one",
    price: 20,
  },
  {
    id: 4,
    name: "four",
    price: 20,
  },
  {
    id: 3,
    name: "three",
    price: 20,
  },
  {
    id: 2,
    name: "two",
    price: 20,
  },
];

const addOrder = (newOrder: Omit<Menu, "id">): void => {
  menu.push({ id: menu.length + 1, ...newOrder });
};

// addOrder({ name: "five", price: 20 });
// addOrder({ name: "six", price: 20 });
// console.log(menu);

type identity = number | string;

function findOrder(identifier: identity): Menu | undefined {
  if (typeof identifier === "number") {
    return menu.find((content) => content.id === identifier);
  } else if (typeof identifier === "string") {
    return menu.find((content) => content.name === identifier);
  } else {
    throw new Error("identifier must either number of string");
  }
}

type User = {
  id: number;
  name: string;
  role: "member" | "admin" | "contributor" | "auditor";
};

const users: User[] = [
  {
    id: 1,
    name: "one",
    role: "contributor",
  },
  {
    id: 4,
    name: "four",
    role: "admin",
  },
  {
    id: 3,
    name: "three",
    role: "auditor",
  },
  {
    id: 2,
    name: "two",
    role: "member",
  },
];

const updateRole = (id: number, updater: string) => {
  const founduser = users.find((user) => user.id === id);
  if (founduser?.id === id) {
    const update = Object.assign(founduser, updater);
  }
};
