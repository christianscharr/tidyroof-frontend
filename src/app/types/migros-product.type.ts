export interface Product {
  id: string;
  name: string;
  description?: string;
  image: string;
  brand: string;
  categories: {
    id: string;
    name: string;
  }[];
  ingredients: string;
  allergenText: string;
  healthy: boolean;
  nutrients: {
    name: string;
    quantity: number;
    quantityUnit: string;
  }[];
  allergens: {
    code: string,
    name: string,
    contamination_code: "ENTHALTEN" | "KANN_ENTHALTEN",
    contamination: string,
  }[];
  price: number;
  origin: string;
}
