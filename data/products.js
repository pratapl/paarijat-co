// Paarijat — Product Catalog
// Update stripeUrl per product once Payment Links are created in Stripe dashboard.
// Price formula: cost $41.28 / (1 - margin). Current margin: 25% → $55

const PRODUCTS = [
  {
    id: "maya",
    name: "Maya",
    subtitle: "Black Linen Maxi Dress",
    description: "Wrap yourself in the quiet elegance of the Maya — a floor-length linen dress with a timeless silhouette. Designed to flow with you through every season, it moves like a soft whisper from day to evening.",
    price: 55,
    currency: "USD",
    sizes: ["S", "M", "L"],
    fabric: "100% natural linen",
    origin: "Handcrafted in Nepal",
    images: [
      "images/IMG_1484_jpg.JPG"
    ],
    stripeUrl: "https://buy.stripe.com/placeholder-maya",
    available: true
  },
  {
    id: "tara",
    name: "Tara",
    subtitle: "Black Linen Two-Piece Set",
    description: "The Tara set — an off-shoulder linen crop top paired with wide-leg trousers. Each piece wears beautifully alone or together, made for women who move through the world with quiet confidence.",
    price: 55,
    currency: "USD",
    sizes: ["S", "M", "L"],
    fabric: "100% natural linen",
    origin: "Handcrafted in Nepal",
    images: [
      "images/IMG_1488_jpg.JPG",
      "images/IMG_1489_jpg.JPG",
      "images/IMG_3124.JPG"
    ],
    stripeUrl: "https://buy.stripe.com/placeholder-tara",
    available: true
  },
  {
    id: "sheetal",
    name: "Sheetal",
    subtitle: "Gingham Wide Skirt",
    description: "The Sheetal — a generous, gathered skirt in black and white gingham. Soft, playful, and unmistakably handcrafted. Pair it with a simple top or let it speak for itself.",
    price: 55,
    currency: "USD",
    sizes: ["S", "M", "L"],
    fabric: "100% natural linen",
    origin: "Handcrafted in Nepal",
    images: [
      "images/IMG_4226 2.JPG",
      "images/IMG_4256.JPG"
    ],
    stripeUrl: "https://buy.stripe.com/placeholder-sheetal",
    available: true
  }
];
