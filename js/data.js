/* ============================================================
   SCNT — Store configuration & combo-pack catalogue (KSA)
   ============================================================ */

const SITE = {
  brand: "SCNT",
  tagline: "Bold · Elegant · Unforgettable",
  // WhatsApp number (country code + number, digits only)
  whatsapp: "966568526824",
  currency: "SAR",
  freeShipOver: 0,   // delivery is always free across Saudi Arabia
  imageBase: "Images/"
};

/* Helper: build an image path from a product folder + file name */
function img(folder, file) {
  return SITE.imageBase + folder + "/" + file;
}

/* The eight fragrances used inside the combo packs */
const PRODUCTS = [];  /* singles are not sold — combo packs only */

/* Perfume combo offers — the only things sold on the site */
const PACKS = [
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
      img("Pack of Images/New", "pack4-1.png"), img("Pack of Images/New", "pack4-2.png"), img("Pack of Images/New", "pack4-3.png")]
  },
  {
    id: "pack-8-collection",
    name: "Pack of 8 — Complete Collection",
    gender: "Unisex",
    count: 8,
    price: 360,
    desc: "Dior Sauvage · Creed Aventus · Bleu de Chanel · 1 Million · Coco Chanel · Dior J'adore · Gucci Flora · Dior Poison",
    images: [
      img("Pack of Images/New", "pack8-1.png"), img("Pack of Images/New", "pack8-2.png"), img("Pack of Images/New", "pack8-3.png")]
  }
];
