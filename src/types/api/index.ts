export const USER_ROLES = {
  ADMIN: "admin",
  CUSTOMER: "customer",
};

interface Food {
  id: string;
  name: string;
  ingredients: string[];
  category: "Refeicao" | "Bebida" | "Sobremesa";
  description: string;
  price: string;
  image: string;
}

interface CartItem {
  product: Food;
  quantity: number;
}

interface User {
  email: string;
  name: string;
  role: "admin" | "customer";
}

interface Auth {
  user: User;
  token: string;
}

export type { Food, User, Auth, CartItem };
