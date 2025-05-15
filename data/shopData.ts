import { Product, ShopCategory, Collection } from "@/types";

export const shopCategories: ShopCategory[] = [
  {
    id: "womens",
    name: "Women's",
    imageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 248
  },
  {
    id: "mens",
    name: "Men's",
    imageUrl: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 156
  },
  {
    id: "accessories",
    name: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 89
  },
  {
    id: "beauty",
    name: "Beauty",
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 112
  },
  {
    id: "home",
    name: "Home",
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 76
  }
];

export const collections: Collection[] = [
  {
    id: "summer2023",
    name: "Summer Essentials",
    description: "Effortless pieces for warm days and balmy nights",
    imageUrl: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    products: ["1", "3", "5", "7", "9"]
  },
  {
    id: "sustainable",
    name: "Sustainable Edit",
    description: "Consciously crafted fashion with the planet in mind",
    imageUrl: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    products: ["2", "4", "6", "8", "10"]
  },
  {
    id: "workwear",
    name: "Modern Workwear",
    description: "Sophisticated staples for the contemporary professional",
    imageUrl: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    products: ["11", "12", "13", "14", "15"]
  }
];

export const products: Product[] = [
  {
    id: "1",
    name: "Silk Slip Dress",
    brand: "Maison Noir",
    price: 295,
    imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    description: "Crafted from 100% silk, this elegant slip dress drapes beautifully for an effortless silhouette. Perfect for evening events or dressed down with a cardigan for day.",
    category: "womens",
    tags: ["dress", "silk", "evening", "luxury"],
    isNew: true,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 24,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Ivory", "Navy"],
    stock: 18
  },
  {
    id: "2",
    name: "Organic Cotton Oversized Shirt",
    brand: "Eco Studio",
    price: 120,
    imageUrl: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    description: "This relaxed-fit shirt is made from GOTS-certified organic cotton. Versatile and comfortable, it's a sustainable wardrobe essential.",
    category: "womens",
    tags: ["shirt", "organic", "sustainable", "casual"],
    isNew: true,
    isFeatured: false,
    rating: 4.5,
    reviewCount: 42,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Blue", "Striped"],
    stock: 35
  },
  {
    id: "3",
    name: "Tailored Wool Blazer",
    brand: "Atelier Moderne",
    price: 450,
    originalPrice: 550,
    discount: 18,
    imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    description: "A timeless investment piece, this impeccably tailored blazer is crafted from premium Italian wool. Features a single-button closure and subtle shoulder padding for a refined silhouette.",
    category: "womens",
    tags: ["blazer", "wool", "tailored", "workwear"],
    isNew: false,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 56,
    sizes: ["34", "36", "38", "40", "42", "44"],
    colors: ["Black", "Camel", "Grey"],
    stock: 12
  },
  {
    id: "4",
    name: "Recycled Cashmere Sweater",
    brand: "Eco Studio",
    price: 225,
    imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    description: "Luxuriously soft and environmentally conscious, this sweater is knitted from recycled cashmere. Features a relaxed fit and ribbed trims.",
    category: "womens",
    tags: ["sweater", "cashmere", "sustainable", "knitwear"],
    isNew: false,
    isFeatured: false,
    rating: 4.7,
    reviewCount: 38,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Sage", "Burgundy"],
    stock: 22
  },
  {
    id: "5",
    name: "Linen Wide-Leg Trousers",
    brand: "Maison Noir",
    price: 185,
    imageUrl: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    images: [
      "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    description: "These breezy linen trousers feature a high waist and wide leg for a relaxed yet polished look. Perfect for warm weather and resort wear.",
    category: "womens",
    tags: ["trousers", "linen", "summer", "resort"],
    isNew: true,
    isFeatured: true,
    rating: 4.6,
    reviewCount: 29,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Natural", "Black", "Terracotta"],
    stock: 31
  },
  {
    id: "6",
    name: "Merino Wool Crewneck",
    brand: "Northland",
    price: 165,
    imageUrl: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    images: [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    description: "This versatile crewneck is crafted from fine merino wool for natural temperature regulation and comfort. Features a classic fit and ribbed trims.",
    category: "mens",
    tags: ["sweater", "wool", "merino", "essential"],
    isNew: false,
    isFeatured: false,
    rating: 4.8,
    reviewCount: 47,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "Charcoal", "Forest Green"],
    stock: 28
  },
  {
    id: "7",
    name: "Leather Crossbody Bag",
    brand: "Atelier Moderne",
    price: 320,
    imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    description: "Handcrafted from full-grain leather, this elegant crossbody features a minimalist design with an adjustable strap and secure magnetic closure.",
    category: "accessories",
    tags: ["bag", "leather", "crossbody", "accessory"],
    isNew: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 32,
    colors: ["Tan", "Black", "Burgundy"],
    stock: 15
  },
  {
    id: "8",
    name: "Selvedge Denim Jeans",
    brand: "Northland",
    price: 210,
    imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    description: "These premium jeans are made from Japanese selvedge denim with a straight leg fit. Designed to age beautifully with wear for a personalized patina.",
    category: "mens",
    tags: ["jeans", "denim", "selvedge", "sustainable"],
    isNew: false,
    isFeatured: false,
    rating: 4.7,
    reviewCount: 65,
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Indigo", "Washed Black"],
    stock: 24
  },
  {
    id: "9",
    name: "Botanical Face Oil",
    brand: "Pure Elements",
    price: 85,
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    description: "This nourishing face oil blends rosehip, jojoba, and evening primrose oils with botanical extracts to hydrate and rejuvenate skin. Suitable for all skin types.",
    category: "beauty",
    tags: ["skincare", "face oil", "natural", "botanical"],
    isNew: true,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 53,
    stock: 42
  },
  {
    id: "10",
    name: "Handwoven Throw Blanket",
    brand: "Casa Verde",
    price: 145,
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    description: "Handwoven by artisans using organic cotton, this throw blanket adds texture and warmth to any space. Features a contemporary geometric pattern.",
    category: "home",
    tags: ["home", "blanket", "handwoven", "sustainable"],
    isNew: false,
    isFeatured: false,
    rating: 4.6,
    reviewCount: 28,
    colors: ["Natural/Indigo", "Natural/Terracotta", "Natural/Grey"],
    stock: 19
  },
  {
    id: "11",
    name: "Structured Tote Bag",
    brand: "Atelier Moderne",
    price: 275,
    originalPrice: 350,
    discount: 21,
    imageUrl: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    images: [
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    description: "This sophisticated tote combines form and function with a structured silhouette and multiple interior compartments. Crafted from premium leather with a cotton lining.",
    category: "accessories",
    tags: ["bag", "tote", "leather", "workwear"],
    isNew: false,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 41,
    colors: ["Black", "Cognac", "Navy"],
    stock: 16
  },
  {
    id: "12",
    name: "Silk Scarf",
    brand: "Maison Noir",
    price: 125,
    imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    description: "This luxurious silk scarf features an exclusive print inspired by botanical illustrations. Versatile enough to wear as a neck scarf, hair accessory, or bag accent.",
    category: "accessories",
    tags: ["scarf", "silk", "accessory", "print"],
    isNew: true,
    isFeatured: false,
    rating: 4.8,
    reviewCount: 23,
    colors: ["Botanical Print", "Geometric Print", "Abstract Print"],
    stock: 27
  },
  {
    id: "13",
    name: "Tailored Wool Trousers",
    brand: "Atelier Moderne",
    price: 245,
    imageUrl: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    description: "These sophisticated trousers are tailored from fine Italian wool with a straight leg and front pleats. A versatile foundation for professional wardrobes.",
    category: "mens",
    tags: ["trousers", "wool", "tailored", "workwear"],
    isNew: false,
    isFeatured: false,
    rating: 4.9,
    reviewCount: 37,
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Charcoal", "Navy", "Black"],
    stock: 21
  },
  {
    id: "14",
    name: "Ceramic Vase Set",
    brand: "Casa Verde",
    price: 95,
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    description: "This set of three handcrafted ceramic vases features organic shapes and a matte finish. Each piece is unique with subtle variations in glaze.",
    category: "home",
    tags: ["home", "vase", "ceramic", "decor"],
    isNew: true,
    isFeatured: false,
    rating: 4.7,
    reviewCount: 19,
    colors: ["White", "Sand", "Terracotta"],
    stock: 14
  },
  {
    id: "15",
    name: "Vitamin C Serum",
    brand: "Pure Elements",
    price: 68,
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    description: "This potent serum combines 15% vitamin C with hyaluronic acid and vitamin E to brighten skin, reduce fine lines, and improve texture. Suitable for all skin types.",
    category: "beauty",
    tags: ["skincare", "serum", "vitamin c", "brightening"],
    isNew: false,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 76,
    stock: 38
  }
];