// Paarijat — Product Catalog
// Update stripeUrl per product once Payment Links are created in Stripe dashboard.
// Price formula: cost $41.28 / (1 - margin). Current margin: 25% → $55

const PRODUCTS = [
  {
    id: "madhavi",
    name: "Madhavi",
    subtitle: "Black Linen-Blend Skirt",
    description: "Wrap yourself in the quiet elegance of the Madhavi — a fluid black linen skirt with a timeless silhouette. Designed to flow with you through every season, it moves like a soft whisper from day to evening.",
    price: 55,
    currency: "USD",
    sizes: ["S", "M", "L"],
    fabric: "100% natural linen",
    origin: "Handcrafted in Nepal",
    images: [
      "images/madhavi skirt.jpg",
      "images/madhavi4.jpg"
    ],
    stripeUrl: "https://buy.stripe.com/placeholder-madhavi",
    available: true
  },
  {
    id: "tara-skirt",
    name: "Tara",
    subtitle: "Gingham Cotton Skirt",
    description: "The Tara — a generous, gathered skirt in black and white gingham. Soft, playful, and unmistakably handcrafted. Pair it with a simple top or let it speak for itself.",
    price: 55,
    currency: "USD",
    sizes: ["S", "M", "L"],
    fabric: "100% natural linen",
    origin: "Handcrafted in Nepal",
    images: [
      "images/tara skirt.jpeg",
      "images/tara1.jpg"
    ],
    stripeUrl: "https://buy.stripe.com/placeholder-tara",
    available: true
  },
  {
    id: "maya-skirt",
    name: "Maya",
    subtitle: "Beige Linen-Blend Skirt",
    description: "The Maya Skirt — a fluid linen midi skirt with an easy, graceful drape. Wear it with anything, go anywhere. Made to be lived in.",
    price: 55,
    currency: "USD",
    sizes: ["S", "M", "L"],
    fabric: "100% natural linen",
    origin: "Handcrafted in Nepal",
    images: [
      "images/maya skirt.jpg"
    ],
    stripeUrl: "https://buy.stripe.com/placeholder-maya-skirt",
    available: true
  }
];
