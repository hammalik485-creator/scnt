/* ============================================================
   SCNT — Store configuration & combo-pack catalogue (KSA)
   ============================================================ */

const SITE = {
  brand: "SCNT",
  tagline: "Bold · Elegant · Unforgettable",
  // WhatsApp number (country code + number, digits only)
  whatsapp: "966568526824",
  email: "info@scntperfume.com",
  currency: "SAR",
  freeShipOver: 0,   // delivery is always free across Saudi Arabia
  imageBase: "Images/"
};

/* Helper: build an image path from a product folder + file name */
function img(folder, file) {
  return SITE.imageBase + folder + "/" + file;
}

/* The eight fragrances used inside the combo packs */
const PRODUCTS = [
  { id: "sauvage", name: "Dior Sauvage", inspired: "Inspired by Dior Sauvage", gender: "Men",
    price: 0, rating: 4.9, notes: ["Bergamot", "Sichuan Pepper", "Ambroxan"],
    desc: "A radically fresh composition — raw and noble.",
    images: [img("SAUVAGE", "svg 1.png"), img("SAUVAGE", "svg 2.png"), img("SAUVAGE", "svg 3.png")] },
  { id: "creed-aventus", name: "Creed Aventus", inspired: "Inspired by Creed Aventus", gender: "Men",
    price: 0, rating: 5.0, notes: ["Pineapple", "Birch", "Musk"],
    desc: "The icon of confidence — fruity pineapple and smoky birch.",
    images: [img("CREED", "creed1.png"), img("CREED", "creed2.png"), img("CREED", "creed3.png")] },
  { id: "bleu", name: "Bleu de Chanel", inspired: "Inspired by Bleu de Chanel", gender: "Men",
    price: 0, rating: 4.8, notes: ["Citrus", "Cedar", "Sandalwood"],
    desc: "Timeless and clean — crisp citrus over aromatic cedar.",
    images: [img("BLUE", "blu1.png"), img("BLUE", "blu2.png"), img("BLUE", "blu3.png")] },
  { id: "one-million", name: "1 Million", inspired: "Inspired by Paco Rabanne 1 Million", gender: "Men",
    price: 0, rating: 4.8, notes: ["Blood Mandarin", "Cinnamon", "Leather"],
    desc: "Bold and seductive — spicy cinnamon over a warm leather base.",
    images: [img("1MILLION", "1millon.png"), img("1MILLION", "1millon2.png"), img("1MILLION", "1millon3.png")] },
  { id: "coco", name: "Coco Chanel", inspired: "Inspired by Chanel Coco Mademoiselle", gender: "Women",
    price: 0, rating: 4.9, notes: ["Orange", "Rose", "Patchouli"],
    desc: "Elegant and spirited — a modern classic.",
    images: [img("COCO MDmislle", "Coco1.png"), img("COCO MDmislle", "Coco2.png"), img("COCO MDmislle", "Coco3.png")] },
  { id: "jadore", name: "Dior J'adore", inspired: "Inspired by Dior J'adore", gender: "Women",
    price: 0, rating: 4.9, notes: ["Ylang-Ylang", "Rose", "Jasmine"],
    desc: "A golden bouquet — timeless, radiant femininity.",
    images: [img("JADORE", "jorde1.png"), img("JADORE", "jorde2.png"), img("JADORE", "jorde3.png")] },
  { id: "flora", name: "Gucci Flora", inspired: "Inspired by Gucci Flora", gender: "Women",
    price: 0, rating: 4.7, notes: ["Citrus", "Peony", "Rose"],
    desc: "A blooming garden — light, joyful, feminine.",
    images: [img("Flora", "Flora1.png"), img("Flora", "Flora2.png"), img("Flora", "Flora3.png")] },
  { id: "poison", name: "Dior Poison", inspired: "Inspired by Dior Poison", gender: "Women",
    price: 0, rating: 4.6, notes: ["Wild Berry", "Tuberose", "Amber"],
    desc: "Bewitching and bold — impossible to forget.",
    images: [img("POISON", "Poison1.png"), img("POISON", "Posin2.png"), img("POISON", "Posin3.png")] }
];

/* Perfume combo offers — the only things sold on the site */
const PACKS = [
  {
    id: "pack-4-men",
    name: "Pack of 4 — Men",
    gender: "Men",
    count: 4,
    price: 199,
    desc: "Dior Sauvage · Creed Aventus · Bleu de Chanel · 1 Million",
    images: [
      img("Pack of Images/svg cred  mil blu", "svg cred  mil blu (2).png"),
      img("Pack of Images/svg cred  mil blu", "svg cred  mil blu.png"),
      img("Pack of Images/svg cred  mil blu", "svg cred  mil blu (3).png")
    ]
  },
  {
    id: "pack-4-women",
    name: "Pack of 4 — Women",
    gender: "Women",
    count: 4,
    price: 199,
    desc: "Coco Chanel · Dior J'adore · Gucci Flora · Dior Poison",
    images: [
      img("Pack of Images/Jadore + Coco Mademoiselle + Flora + Poison", "Jadore + Coco Mademoiselle + Flora + Poison (2).png"),
      img("Pack of Images/Jadore + Coco Mademoiselle + Flora + Poison", "Jadore + Coco Mademoiselle + Flora + Poison (3).png"),
      img("Pack of Images/Jadore + Coco Mademoiselle + Flora + Poison", "Jadore + Coco Mademoiselle + Flora + Poison.png")
    ]
  },
  {
    id: "pack-4-mixed",
    name: "Pack of 4 — Mixed",
    gender: "Unisex",
    count: 4,
    price: 199,
    desc: "Dior Sauvage · Creed Aventus · Dior J'adore · Coco Chanel",
    images: [
      img("Pack of Images/Jadore + Coco Mademoiselle + Flora", "Jadore + Coco Mademoiselle + Flora (2).png"),
      img("Pack of Images/Jadore + Coco Mademoiselle + Flora", "Jadore + Coco Mademoiselle + Flora(1).png"),
      img("Pack of Images/Jadore + Coco Mademoiselle + Flora", "Jadore + Coco Mademoiselle + Flora.png")
    ]
  },
  {
    id: "pack-2-men",
    name: "Pack of 2 — Men",
    gender: "Men",
    count: 2,
    price: 149,
    desc: "Dior Sauvage · Creed Aventus",
    images: [
      img("Pack of Images/svg cred_", "svg cred .png"),
      img("Pack of Images/svg cred_", "svg cred.png"),
      img("Pack of Images/svg cred_", "svg cred (3).png")
    ]
  },
  {
    id: "pack-2-women",
    name: "Pack of 2 — Women",
    gender: "Women",
    count: 2,
    price: 149,
    desc: "Dior J'adore · Coco Chanel",
    images: [
      img("Pack of Images/jadore, coco", "jadore, coco (2).png"),
      img("Pack of Images/jadore, coco", "jadore, coco (1).png"),
      img("Pack of Images/jadore, coco", "jadore, coco (3).png")
    ]
  },
  {
    id: "pack-3-men",
    name: "Pack of 3 — Men",
    gender: "Men",
    count: 3,
    price: 180,
    desc: "Dior Sauvage · Creed Aventus · 1 Million",
    images: [
      img("Pack of Images/svg cred  mil", "svg cred  mil (2).png"),
      img("Pack of Images/svg cred  mil", "svg cred  mil.png"),
      img("Pack of Images/svg cred  mil", "svg cred  mil (3).png")
    ]
  },
  {
    id: "pack-8-collection",
    name: "Pack of 8 — Complete Collection",
    gender: "Unisex",
    count: 8,
    price: 360,
    desc: "Dior Sauvage · Creed Aventus · Bleu de Chanel · 1 Million · Coco Chanel · Dior J'adore · Gucci Flora · Dior Poison",
    images: [
      img("Pack of Images/Jadore + Coco Mademoiselle + Flora + Poison", "Jadore + Coco Mademoiselle + Flora + Poison.png"),
      img("Pack of Images/svg cred  mil blu", "svg cred  mil blu.png"),
      img("Pack of Images/jadore, coco", "jadore, coco (2).png")
    ]
  }
];
