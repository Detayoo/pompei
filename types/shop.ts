export interface Product {
    id: string;
    name: string;
    brand: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    imageUrl: string;
    images: string[];
    description: string;
    category: string;
    tags: string[];
    isNew: boolean;
    isFeatured: boolean;
    rating: number;
    reviewCount: number;
    sizes?: string[];
    colors?: string[];
    stock: number;
  }
  
  export interface ShopCategory {
    id: string;
    name: string;
    imageUrl: string;
    productCount: number;
  }
  
  export interface Collection {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    products: string[]; 
  }