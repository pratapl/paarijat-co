// Paarijat — Site Configuration

const CONFIG = {
  brand: {
    name: "Paarijat",
    tagline: "Crafted for Quiet Moments",
    description: "Slow fashion, handcrafted in Nepal. Built by women, for women.",
    email: "hello@paarijat.co",
    instagram: "https://instagram.com/paarijat.co",
    instagramHandle: "@paarijat.co",
    website: "https://paarijat.co"
  },

  pricing: {
    costPerUnit: 41.28,   // USD — production + shipping + customs + packaging + marketing
    margin: 0.25,         // 25% — update when ready to increase
    currency: "USD",
    // Retail price = costPerUnit / (1 - margin) = $55.04 → $55
  },

  collection: {
    name: "Dreaming of Spring",
    season: "Spring 2025",
    launchStatus: "coming-soon", // "coming-soon" | "live"
  },

  shipping: {
    origin: "Nepal",
    destinations: ["US"],  // expand as needed
    note: "All orders ship within 2–3 weeks. Each piece is made to order."
  },

  sizing: {
    available: ["S", "M", "L"],
    note: "Each piece is cut generously. When in doubt, size down."
  },

  seo: {
    title: "Paarijat — Crafted for Quiet Moments",
    description: "Slow fashion, handcrafted in Nepal. Timeless linen pieces designed by Neena Luitel, built by women, for women.",
    keywords: ["slow fashion", "linen clothing", "sustainable fashion", "handcrafted", "Nepal", "women"]
  }
};
