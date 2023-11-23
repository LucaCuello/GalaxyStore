export interface Product {
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  imageURL: string;
  imageURLsmall: string
}

export interface ProductWithId extends Product {
  id: string;
}

export interface RegisterValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginValues {
  email: string;
  password: string;
}

export interface AlertProps {
  severity: "warning" | "error";
  message: string;
  recomendation: string;
  route: string;
}

export type AuthProviderProps = {
  children: React.ReactNode;
};

export type UserData = {
  fullName: string;
  email: string;
};
