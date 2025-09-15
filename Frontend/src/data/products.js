// src/data/products.js
export const products = [
  {
    id:1,
    title: "Men's Grey Textured Nehru Jacket for Weddings and Formal Events",
    description:
      "Elevate your ethnic style with this smart men's Nehru jacket in a sophisticated grey. Made from a unique textured fabric with a classic mandarin collar, perfect for layering over a kurta or shirt.",
    category: "mens-ethnic-jackets",
    price: 2499.0,
    old_price: 4999.0,
    discount: "50% OFF",
    rating: 4.8,
    tags: [
      "Nehru jacket",
      "Modi jacket",
      "Bundi jacket",
      "Wedding guest jacket",
      "Ethnic wear",
      "Festive wear"
    ],
    weight: 0.5,
    dimensions: {
      width: 30,
      height: 4,
      depth: 38
    },
    size: ["S", "M", "L", "XL", "XXL"], // ✅ Always include
    shippingInformation: "🚚 Ships in 3 weeks",
    reviews: [
      {
        user: "Amit",
        comment: "Perfect fit and very elegant. Got many compliments!",
        rating: 5
      },
      {
        user: "Rahul",
        comment: "Fabric quality is excellent, but delivery took time.",
        rating: 4
      }
    ],
    images: [
      "https://res.cloudinary.com/dlcms5ngo/image/upload/v1757787361/Men_green_white_Striped_Round_Neck_Cotton_Oversized_T-shirt_wqiifb.webp",
      "https://res.cloudinary.com/demo/image/upload/sample.jpg"
    ],
    embedding: []
  },

  {
    id:2,
    title: "Women's Elegant Red Saree with Golden Border",
    description:
      "A premium chiffon saree with a rich red tone and golden zari border. Lightweight, flowy and ideal for weddings and festive occasions.",
    category: "womens-ethnic-sarees",
    price: 3499.0,
    old_price: 6999.0,
    discount: "50% OFF",
    rating: 4.5,
    tags: ["Saree", "Wedding saree", "Festive wear", "Traditional Indian wear"],
    weight: 0.7,
    dimensions: {
      width: 50,
      height: 1,
      depth: 600
    },
    size: ["Free Size"], // ✅ Saree ke liye Free Size
    shippingInformation: "🚚 Ships in 2 weeks",
    reviews: [
      {
        user: "Neha",
        comment: "Absolutely stunning saree! Fabric drapes beautifully.",
        rating: 5
      }
    ],
    images: [
      "https://res.cloudinary.com/demo/image/upload/woman_saree.jpg"
    ],
    embedding: []
  }
];
export default products.js