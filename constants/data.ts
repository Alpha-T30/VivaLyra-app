const IMAGE_URL: string = "https://picsum.photos/700";

export type productType = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export var products: productType[] = [
  {
    id: 1,
    name: "Product 1",
    description: "A short description of Product 1.",
    image: IMAGE_URL,
  },
  {
    id: 2,
    name: "Product 2",
    description: "A short description of Product 2.",
    image: IMAGE_URL,
  },
  {
    id: 3,
    name: "Product 3",
    description: "A short description of Product 3.",
    image: IMAGE_URL,
  },
  {
    id: 4,
    name: "Product 4",
    description: "A short description of Product 4.",
    image: IMAGE_URL,
  },
  {
    id: 5,
    name: "Product 5",
    description: "A short description of Product 5.",
    image: IMAGE_URL,
  },
  {
    id: 6,
    name: "Product 6",
    description: "A short description of Product 6.",
    image: IMAGE_URL,
  },
  {
    id: 7,
    name: "Product 7",
    description: "A short description of Product 7.",
    image: IMAGE_URL,
  },
  {
    id: 8,
    name: "Product 8",
    description: "A short description of Product 8.",
    image: IMAGE_URL,
  },
  {
    id: 9,
    name: "Product 9",
    description: "A short description of Product 9.",
    image: IMAGE_URL,
  },
  {
    id: 10,
    name: "Product 10",
    description: "A short description of Product 10.",
    image: IMAGE_URL,
  },
  {
    id: 11,
    name: "Product 11",
    description: "A short description of Product 11.",
    image: IMAGE_URL,
  },
  {
    id: 12,
    name: "Product 12",
    description: "A short description of Product 12.",
    image: IMAGE_URL,
  },
  {
    id: 13,
    name: "Product 13",
    description: "A short description of Product 13.",
    image: IMAGE_URL,
  },
  {
    id: 14,
    name: "Product 14",
    description: "A short description of Product 14.",
    image: IMAGE_URL,
  },
  {
    id: 15,
    name: "Product 15",
    description: "A short description of Product 15.",
    image: IMAGE_URL,
  },
  {
    id: 16,
    name: "Product 16",
    description: "A short description of Product 16.",
    image: IMAGE_URL,
  },
  {
    id: 17,
    name: "Product 17",
    description: "A short description of Product 17.",
    image: IMAGE_URL,
  },
  {
    id: 18,
    name: "Product 18",
    description: "A short description of Product 18.",
    image: IMAGE_URL,
  },
  {
    id: 19,
    name: "Product 19",
    description: "A short description of Product 19.",
    image: IMAGE_URL,
  },
  {
    id: 20,
    name: "Product 20",
    description: "A short description of Product 20.",
    image: IMAGE_URL,
  },
];

type cartItems = {
  id: number;
  name: string;
  category: string;
  quantity: number;
  price: number;
  totalPrice: number;
};

export const cartItems: cartItems[] = [
  {
    id: 1,
    name: "Men's T-Shirt",
    category: "Clothing",
    quantity: 2,
    price: 15.99,
    totalPrice: 31.98,
  },
  {
    id: 2,
    name: "Women's Jeans",
    category: "Clothing",
    quantity: 1,
    price: 39.99,
    totalPrice: 39.99,
  },
  {
    id: 3,
    name: "Bluetooth Headphones",
    category: "Electronics",
    quantity: 1,
    price: 59.99,
    totalPrice: 59.99,
  },
  {
    id: 4,
    name: "Running Shoes",
    category: "Footwear",
    quantity: 1,
    price: 75.0,
    totalPrice: 75.0,
  },
  {
    id: 5,
    name: "Leather Wallet",
    category: "Accessories",
    quantity: 1,
    price: 19.99,
    totalPrice: 19.99,
  },
  {
    id: 6,
    name: "Smart Watch",
    category: "Electronics",
    quantity: 1,
    price: 129.99,
    totalPrice: 129.99,
  },
  {
    id: 7,
    name: "Kids' Backpack",
    category: "Bags",
    quantity: 1,
    price: 24.99,
    totalPrice: 24.99,
  },
  {
    id: 8,
    name: "Wireless Mouse",
    category: "Electronics",
    quantity: 2,
    price: 14.99,
    totalPrice: 29.98,
  },
  {
    id: 9,
    name: "Notebook Pack (3)",
    category: "Stationery",
    quantity: 1,
    price: 12.49,
    totalPrice: 12.49,
  },
  {
    id: 10,
    name: "Sports Water Bottle",
    category: "Accessories",
    quantity: 3,
    price: 8.99,
    totalPrice: 26.97,
  },
];
