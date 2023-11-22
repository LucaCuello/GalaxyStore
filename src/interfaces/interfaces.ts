export interface Product {
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  imageURL: string;
}

export interface ProductWithId extends Product {
  id: string;
}

export interface FormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
