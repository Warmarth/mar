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
    id: 2,
    name: "two",
    price: 20,
  },
  {
    id: 3,
    name: "three",
    price: 20,
  },
  {
    id: 4,
    name: "four",
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
  role: "member" | "admin" | "contributor" | "auditor" | "cobby";
};

const users: User[] = [
  {
    id: 1,
    name: "one",
    role: "contributor",
  },
  {
    id: 2,
    name: "two",
    role: "admin",
  },
  {
    id: 3,
    name: "three",
    role: "auditor",
  },
  {
    id: 4,
    name: "four",
    role: "member",
  },
];

const updateRole = (id: number, updater: Partial<User>): void => {
  const founduser = users.find((u) => u.id === id);
  if (founduser) {
    Object.assign(founduser, updater);
  }
};

updateRole(4, { role: "cobby" });
updateRole(2, { name: "auditor" });
console.log(users);
