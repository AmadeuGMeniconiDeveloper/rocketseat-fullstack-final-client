interface Food {
  id: string;
  name: string;
  favorited: boolean;
  category: "Refeicao" | "Bebida" | "Sobremesa";
  description: string;
  price: string;
  imageUrl: string;
}

export const USER_ROLES = {
  ADMIN: "admin",
  CUSTOMER: "customer",
};

interface User {
  email: string;
  name: string;
  role: "admin" | "customer";
}

interface Auth {
  user: User;
  token: string;
}
export type { Food, User, Auth };
