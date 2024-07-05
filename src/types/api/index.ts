type Food = {
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
};

interface User {
  id: string;
  email: string;
  name: string;
  role: "USER" | "ADMIN";
}

interface Auth {
  user: User;
  token: string;
}
export type { Food, User, Auth };
