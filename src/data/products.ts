export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory: string;
  description: string;
  details: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  images: string[];
  featured?: boolean;
  newArrival?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Oversized Wool Coat",
    price: 289,
    category: "Women",
    subcategory: "Outerwear",
    description: "A beautifully tailored oversized wool coat with clean lines and a relaxed silhouette. Perfect for layering during the colder months.",
    details: [
      "80% Wool, 20% Polyamide",
      "Oversized fit",
      "Button closure",
      "Side pockets",
      "Fully lined",
      "Dry clean only"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Camel", hex: "#C4A77D" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Ivory", hex: "#FFFFF0" }
    ],
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800"
    ],
    featured: true,
    newArrival: true
  },
  {
    id: "2",
    name: "Cashmere Blend Sweater",
    price: 159,
    category: "Women",
    subcategory: "Knitwear",
    description: "Luxuriously soft cashmere blend sweater with a relaxed fit and ribbed details. An everyday essential.",
    details: [
      "70% Wool, 30% Cashmere",
      "Relaxed fit",
      "Ribbed cuffs and hem",
      "Hand wash cold"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Oatmeal", hex: "#D4C4B0" },
      { name: "Black", hex: "#1A1A1A" },
      { name: "Sage", hex: "#9CAF88" }
    ],
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800"
    ],
    featured: true
  },
  {
    id: "3",
    name: "High-Waisted Wool Trousers",
    price: 189,
    category: "Women",
    subcategory: "Pants",
    description: "Elegantly tailored high-waisted trousers with a wide leg. Crafted from premium wool for all-day comfort.",
    details: [
      "100% Virgin Wool",
      "High waist",
      "Wide leg",
      "Side zip closure",
      "Dry clean only"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#1A1A1A" },
      { name: "Navy", hex: "#1B2951" },
      { name: "Grey", hex: "#808080" }
    ],
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800",
      "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=800"
    ]
  },
  {
    id: "4",
    name: "Structured Blazer",
    price: 249,
    category: "Men",
    subcategory: "Outerwear",
    description: "A refined structured blazer with peak lapels and a slim silhouette. Perfect for both formal and casual occasions.",
    details: [
      "98% Wool, 2% Elastane",
      "Slim fit",
      "Two-button closure",
      "Chest pocket",
      "Dry clean only"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Charcoal", hex: "#36454F" },
      { name: "Navy", hex: "#1B2951" }
    ],
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800"
    ],
    featured: true
  },
  {
    id: "5",
    name: "Merino Crew Neck",
    price: 129,
    category: "Men",
    subcategory: "Knitwear",
    description: "Essential merino wool crew neck sweater. Ultra-soft and temperature regulating for year-round wear.",
    details: [
      "100% Extra Fine Merino Wool",
      "Regular fit",
      "Ribbed collar, cuffs and hem",
      "Machine washable"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Forest", hex: "#228B22" },
      { name: "Burgundy", hex: "#722F37" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Cream", hex: "#FFFDD0" }
    ],
    images: [
      "https://images.unsplash.com/photo-1614975059251-992f11792b9f?w=800",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800"
    ],
    newArrival: true
  },
  {
    id: "6",
    name: "Linen Blend Shirt",
    price: 98,
    category: "Men",
    subcategory: "Shirts",
    description: "Relaxed linen blend shirt with a casual collar. Breathable and effortlessly stylish.",
    details: [
      "55% Linen, 45% Cotton",
      "Relaxed fit",
      "Button-down collar",
      "Machine washable"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Sky Blue", hex: "#87CEEB" },
      { name: "Sand", hex: "#C2B280" }
    ],
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=800"
    ]
  },
  {
    id: "7",
    name: "Silk Midi Dress",
    price: 329,
    originalPrice: 429,
    category: "Women",
    subcategory: "Dresses",
    description: "Elegant silk midi dress with a flattering wrap silhouette and subtle sheen.",
    details: [
      "100% Mulberry Silk",
      "Wrap style",
      "Self-tie belt",
      "Dry clean only"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Champagne", hex: "#F7E7CE" },
      { name: "Emerald", hex: "#50C878" }
    ],
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800"
    ],
    featured: true
  },
  {
    id: "8",
    name: "Cotton Oxford Shirt",
    price: 89,
    category: "Women",
    subcategory: "Shirts",
    description: "Classic cotton oxford shirt with a relaxed fit. A wardrobe staple that works for any occasion.",
    details: [
      "100% Organic Cotton",
      "Relaxed fit",
      "Button-down collar",
      "Machine washable"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Light Blue", hex: "#ADD8E6" },
      { name: "Pink", hex: "#FFB6C1" }
    ],
    images: [
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800",
      "https://images.unsplash.com/photo-1604695573706-53170668f6a6?w=800"
    ]
  },
  {
    id: "9",
    name: "Tailored Chinos",
    price: 139,
    category: "Men",
    subcategory: "Pants",
    description: "Perfectly tailored chinos in premium stretch cotton. Comfortable enough for all-day wear.",
    details: [
      "98% Cotton, 2% Elastane",
      "Slim fit",
      "Mid rise",
      "Machine washable"
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: [
      { name: "Khaki", hex: "#C3B091" },
      { name: "Navy", hex: "#1B2951" },
      { name: "Olive", hex: "#808000" }
    ],
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800"
    ]
  },
  {
    id: "10",
    name: "Leather Crossbody Bag",
    price: 198,
    category: "Accessories",
    subcategory: "Bags",
    description: "Minimalist leather crossbody bag with adjustable strap. Handcrafted from full-grain leather.",
    details: [
      "Full-grain leather",
      "Adjustable strap",
      "Interior zip pocket",
      "Magnetic closure"
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Tan", hex: "#D2B48C" },
      { name: "Black", hex: "#1A1A1A" }
    ],
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800"
    ],
    featured: true
  },
  {
    id: "11",
    name: "Wool Scarf",
    price: 79,
    category: "Accessories",
    subcategory: "Scarves",
    description: "Luxuriously soft wool scarf with fringed ends. Generously sized for versatile styling.",
    details: [
      "100% Lambswool",
      "Fringed ends",
      "Dry clean only"
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Camel", hex: "#C4A77D" },
      { name: "Grey", hex: "#808080" },
      { name: "Burgundy", hex: "#722F37" }
    ],
    images: [
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800"
    ],
    newArrival: true
  },
  {
    id: "12",
    name: "Knit Beanie",
    price: 49,
    category: "Accessories",
    subcategory: "Hats",
    description: "Cozy ribbed knit beanie in soft merino wool. Essential cold-weather accessory.",
    details: [
      "100% Merino Wool",
      "Ribbed knit",
      "One size fits most",
      "Hand wash cold"
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Black", hex: "#1A1A1A" },
      { name: "Oatmeal", hex: "#D4C4B0" },
      { name: "Forest", hex: "#228B22" }
    ],
    images: [
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800",
      "https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?w=800"
    ]
  }
];

export const categories = [
  { name: "Women", slug: "women", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600" },
  { name: "Men", slug: "men", image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=600" },
  { name: "Accessories", slug: "accessories", image: "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?w=600" }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(p => p.newArrival);
};
