/* ============================================================
   SCNT — Store configuration & product catalogue
   ------------------------------------------------------------
   HOW TO EDIT:
   • WhatsApp number  -> SITE.whatsapp  (use full intl. format,
                         digits only, no + or spaces)
   • Currency / prices-> change SITE.currency and each `price`
   • Add a product    -> copy a block in PRODUCTS and edit
   ============================================================ */

const SITE = {
  brand: "SCNT",
  tagline: "Bold · Elegant · Unforgettable",
  // WhatsApp number (country code + number, digits only)
  whatsapp: "923021560290",
  email: "info@scntperfume.com",
  currency: "Rs.",
  freeShipOver: 3000,
  imageBase: "Images/"
};

/* Helper: build an image path from a product folder + file name */
function img(folder, file) {
  return SITE.imageBase + folder + "/" + file;
}

const PRODUCTS = [
  {
    id: "sauvage",
    name: "Sauvage",
    inspired: "Inspired by Dior Sauvage",
    gender: "Men",
    price: 1499,
    rating: 4.9,
    bestseller: true,
    notes: ["Bergamot", "Sichuan Pepper", "Ambroxan"],
    desc: "A radically fresh composition — raw and noble. Bright bergamot opens into a warm, woody-ambered trail that lasts from day into night.",
    images: [img("SAUVAGE", "svg 1.png"), img("SAUVAGE", "svg 2.png"), img("SAUVAGE", "svg 3.png")]
  },
  {
    id: "one-million",
    name: "1 Million",
    inspired: "Inspired by Paco Rabanne 1 Million",
    gender: "Men",
    price: 2000,
    rating: 4.8,
    bestseller: true,
    notes: ["Blood Mandarin", "Cinnamon", "Leather"],
    desc: "Bold and seductive. Spicy cinnamon and rose meet a warm leather base for a scent that commands the room.",
    images: [img("1MILLION", "1millon.png"), img("1MILLION", "1millon2.png"), img("1MILLION", "1millon3.png")]
  },
  {
    id: "creed-aventus",
    name: "Aventus",
    inspired: "Inspired by Creed Aventus",
    gender: "Men",
    price: 1799,
    rating: 5.0,
    bestseller: true,
    premium: true,
    notes: ["Pineapple", "Birch", "Musk"],
    desc: "The icon of confidence. Fruity pineapple and smoky birch build a rich, sophisticated signature for the modern gentleman.",
    images: [img("CREED", "creed1.png"), img("CREED", "creed2.png"), img("CREED", "creed3.png")]
  },
  {
    id: "bleu",
    name: "Bleu",
    inspired: "Inspired by Bleu de Chanel",
    gender: "Men",
    price: 1499,
    rating: 4.8,
    notes: ["Citrus", "Cedar", "Sandalwood"],
    desc: "Timeless and clean. Crisp citrus over aromatic cedar — an effortless, elegant everyday signature.",
    images: [img("BLUE", "blu1.png"), img("BLUE", "blu2.png"), img("BLUE", "blu3.png")]
  },
  {
    id: "eros-blue",
    name: "Eros Blue",
    inspired: "Inspired by Versace Eros",
    gender: "Men",
    price: 1499,
    rating: 4.7,
    notes: ["Mint", "Green Apple", "Tonka Bean"],
    desc: "Passionate and fresh. Cool mint and green apple melt into a sweet tonka warmth — irresistibly magnetic.",
    images: [img("EROS BLUE", "ERos blu1.png"), img("EROS BLUE", "ERos blu2.png"), img("EROS BLUE", "ERos blu3.png")]
  },
  {
    id: "homme-intense",
    name: "Homme Intense",
    inspired: "Inspired by Dior Homme Intense",
    gender: "Men",
    price: 1599,
    rating: 4.8,
    notes: ["Lavender", "Iris", "Ambergris"],
    desc: "Refined and powdery. A velvet iris heart wrapped in warm amber — sophistication in a bottle.",
    images: [img("Homme intense", "homme intense1.png"), img("Homme intense", "hmoe intense2.png"), img("Homme intense", "home intense3.png")]
  },
  {
    id: "silver",
    name: "Silver Mountain",
    inspired: "Inspired by Creed Silver Mountain Water",
    gender: "Men",
    price: 1699,
    rating: 4.7,
    premium: true,
    notes: ["Bergamot", "Blackcurrant", "Musk"],
    desc: "Crisp alpine freshness. Sparkling blackcurrant and green tea over a clean musk — like mountain air.",
    images: [img("CR Silver", "CR Silver1.png"), img("CR Silver", "CR Silver2.png"), img("CR Silver", "CR Silver3.png")]
  },
  {
    id: "212-silver",
    name: "212 Silver",
    inspired: "Inspired by Carolina Herrera 212",
    gender: "Men",
    price: 1499,
    rating: 4.6,
    notes: ["Bergamot", "Violet", "Sandalwood"],
    desc: "Metropolitan and modern. Sparkling citrus with a smooth woody-musk drydown — the scent of the city.",
    images: [img("212 Silver", "212 silver1.png"), img("212 Silver", "212 silver2.png"), img("212 Silver", "212 silver3.png")]
  },
  {
    id: "acqua-glow",
    name: "Acqua Glow",
    inspired: "Inspired by Acqua di Giò",
    gender: "Men",
    price: 1499,
    rating: 4.7,
    notes: ["Sea Notes", "Bergamot", "Patchouli"],
    desc: "Aquatic freshness bottled. Marine accords and bright citrus evoke a breeze off the Mediterranean.",
    images: [img("ACqua Glo white", "Aquaglo white1.png"), img("ACqua Glo white", "aquaglo white2.png"), img("ACqua Glo white", "Aquawite3.png")]
  },
  {
    id: "guilty",
    name: "Guilty",
    inspired: "Inspired by Gucci Guilty",
    gender: "Unisex",
    price: 1499,
    rating: 4.6,
    notes: ["Pink Pepper", "Lilac", "Patchouli"],
    desc: "Daring and sensual. Pink pepper and lilac over earthy patchouli — for those who live without regret.",
    images: [img("GC Guilty", "GC Guilty1.png"), img("GC Guilty", "GC Gulity2.png"), img("GC Guilty", "GC Guilty 3.png")]
  },
  {
    id: "oud-wood",
    name: "Oud Wood",
    inspired: "Inspired by Tom Ford Oud Wood",
    gender: "Unisex",
    price: 1799,
    rating: 4.9,
    premium: true,
    bestseller: true,
    notes: ["Oud", "Rosewood", "Cardamom"],
    desc: "Rare and exotic. Smoky oud and spicy cardamom over creamy sandalwood — pure understated luxury.",
    images: [img("OUD WOOD", "Oud1.png"), img("OUD WOOD", "Oud2.png"), img("OUD WOOD", "Oud3.png")]
  },
  {
    id: "black-orchid",
    name: "Black Orchid",
    inspired: "Inspired by Tom Ford Black Orchid",
    gender: "Unisex",
    price: 1799,
    rating: 4.8,
    premium: true,
    notes: ["Black Truffle", "Orchid", "Patchouli"],
    desc: "Dark, opulent, mysterious. A luxurious blend of black orchid and spice with a deep, sensual base.",
    images: [img("Black Orchid", "Blck Orchd1.png"), img("Black Orchid", "Blck Orchd2.png"), img("Black Orchid", "Blck Orchd3.png")]
  },
  {
    id: "jadore",
    name: "J'adore",
    inspired: "Inspired by Dior J'adore",
    gender: "Women",
    price: 1499,
    rating: 4.9,
    bestseller: true,
    notes: ["Ylang-Ylang", "Rose", "Jasmine"],
    desc: "A golden bouquet. Lush ylang-ylang, damascena rose and jasmine — timeless, radiant femininity.",
    images: [img("JADORE", "jorde1.png"), img("JADORE", "jorde2.png"), img("JADORE", "jorde3.png")]
  },
  {
    id: "coco",
    name: "Coco Mademoiselle",
    inspired: "Inspired by Chanel Coco Mademoiselle",
    gender: "Women",
    price: 1499,
    rating: 4.9,
    bestseller: true,
    notes: ["Orange", "Rose", "Patchouli"],
    desc: "Elegant and spirited. Fresh orange and rose over a sensual patchouli base — a modern classic.",
    images: [img("COCO MDmislle", "Coco1.png"), img("COCO MDmislle", "Coco2.png"), img("COCO MDmislle", "Coco3.png")]
  },
  {
    id: "flora",
    name: "Flora",
    inspired: "Inspired by Gucci Flora",
    gender: "Women",
    price: 1499,
    rating: 4.7,
    notes: ["Citrus", "Peony", "Rose"],
    desc: "A blooming garden. Delicate peony and rose with a sparkling citrus lift — light, joyful, feminine.",
    images: [img("Flora", "Flora1.png"), img("Flora", "Flora2.png"), img("Flora", "Flora3.png")]
  },
  {
    id: "poison",
    name: "Poison",
    inspired: "Inspired by Dior Poison",
    gender: "Women",
    price: 1499,
    rating: 4.6,
    notes: ["Wild Berry", "Tuberose", "Amber"],
    desc: "Bewitching and bold. Dark berries and opulent tuberose over warm amber — impossible to forget.",
    images: [img("POISON", "Poison1.png"), img("POISON", "Posin2.png"), img("POISON", "Posin3.png")]
  },
  {
    id: "good-girl",
    name: "Good Girl",
    inspired: "Inspired by Carolina Herrera Good Girl",
    gender: "Women",
    price: 1599,
    rating: 4.8,
    bestseller: true,
    notes: ["Almond", "Coffee", "Tonka Bean"],
    desc: "Sweet meets fierce. Roasted almond and coffee over a creamy tonka base — daring and addictive.",
    images: [img("GD Girl", "GD Girl1.png"), img("GD Girl", "GD Girl2.png"), img("GD Girl", "GD Girl3.png")]
  },
  {
    id: "vs-pink",
    name: "Pink",
    inspired: "Inspired by Victoria's Secret",
    gender: "Women",
    price: 1399,
    rating: 4.5,
    notes: ["Mandarin", "Peony", "Vanilla Musk"],
    desc: "Playful and flirty. Juicy mandarin and soft peony over a sweet vanilla musk — youthful and fun.",
    images: [img("VS Pink", "VS pnk1.png"), img("VS Pink", "VS pink2.png"), img("VS Pink", "VS pink3.png")]
  },
  {
    id: "signature",
    name: "Signature",
    inspired: "The SCNT house signature",
    gender: "Unisex",
    price: 1599,
    rating: 4.8,
    notes: ["Amber", "Vanilla", "Musk"],
    desc: "Our own creation. A warm, versatile amber-vanilla musk designed to become uniquely yours.",
    images: [img("Signature", "Signature1.png"), img("Signature", "Signature2.png"), img("Signature", "Signature3.png")]
  }
];

/* Bundle packs — sold at a saving vs. buying singles */
const PACKS = [
  {
    id: "pack-flora-poison",
    name: "Flora & Poison Duo",
    gender: "Women",
    count: 2,
    price: 2699,
    was: 2998,
    desc: "Two feminine icons — the blooming Flora and the bewitching Poison — paired at a special price.",
    images: [
      img("Pack of Images/Flora + Poison", "Flora + Poison (2).png"),
      img("Pack of Images/Flora + Poison", "Flora + Poison(1).png"),
      img("Pack of Images/Flora + Poison", "Flora + Poison.png")
    ]
  },
  {
    id: "pack-jadore-coco",
    name: "J'adore & Coco Duo",
    gender: "Women",
    count: 2,
    price: 2699,
    was: 2998,
    desc: "The two most-loved women's classics together — golden J'adore and elegant Coco Mademoiselle.",
    images: [
      img("Pack of Images/jadore, coco", "jadore, coco (2).png"),
      img("Pack of Images/jadore, coco", "jadore, coco (1).png"),
      img("Pack of Images/jadore, coco", "jadore, coco (3).png")
    ]
  },
  {
    id: "pack-women-trio",
    name: "Women's Trio",
    gender: "Women",
    count: 3,
    price: 3999,
    was: 4497,
    desc: "J'adore, Coco Mademoiselle and Flora — the ultimate women's collection in one gift set.",
    images: [
      img("Pack of Images/Jadore + Coco Mademoiselle + Flora", "Jadore + Coco Mademoiselle + Flora (2).png"),
      img("Pack of Images/Jadore + Coco Mademoiselle + Flora", "Jadore + Coco Mademoiselle + Flora(1).png"),
      img("Pack of Images/Jadore + Coco Mademoiselle + Flora", "Jadore + Coco Mademoiselle + Flora.png")
    ]
  },
  {
    id: "pack-women-quad",
    name: "Women's Signature Set",
    gender: "Women",
    count: 4,
    price: 5199,
    was: 5996,
    desc: "The complete women's edit — J'adore, Coco Mademoiselle, Flora and Poison. Our best value gift.",
    images: [
      img("Pack of Images/Jadore + Coco Mademoiselle + Flora + Poison", "Jadore + Coco Mademoiselle + Flora + Poison (2).png"),
      img("Pack of Images/Jadore + Coco Mademoiselle + Flora + Poison", "Jadore + Coco Mademoiselle + Flora + Poison (3).png"),
      img("Pack of Images/Jadore + Coco Mademoiselle + Flora + Poison", "Jadore + Coco Mademoiselle + Flora + Poison.png")
    ]
  },
  {
    id: "pack-men-duo",
    name: "Sauvage & Aventus Duo",
    gender: "Men",
    count: 2,
    price: 2999,
    was: 3298,
    desc: "The two most requested men's scents — fresh Sauvage and iconic Aventus — bundled together.",
    images: [
      img("Pack of Images/svg cred_", "svg cred .png"),
      img("Pack of Images/svg cred_", "svg cred.png"),
      img("Pack of Images/svg cred_", "svg cred (3).png")
    ]
  },
  {
    id: "pack-men-trio-blue",
    name: "Men's Fresh Trio",
    gender: "Men",
    count: 3,
    price: 3999,
    was: 4497,
    desc: "Sauvage, Aventus and Bleu — three fresh, versatile crowd-pleasers for the modern man.",
    images: [
      img("Pack of Images/svg cred  blu", "svg cred  blu (2).png"),
      img("Pack of Images/svg cred  blu", "svg cred  blu.png"),
      img("Pack of Images/svg cred  blu", "svg cred (4).png")
    ]
  },
  {
    id: "pack-men-trio-mil",
    name: "Men's Bold Trio",
    gender: "Men",
    count: 3,
    price: 3999,
    was: 4497,
    desc: "Sauvage, Aventus and 1 Million — a bold, confident set that turns heads.",
    images: [
      img("Pack of Images/svg cred  mil", "svg cred  mil (2).png"),
      img("Pack of Images/svg cred  mil", "svg cred  mil.png"),
      img("Pack of Images/svg cred  mil", "svg cred  mil (3).png")
    ]
  },
  {
    id: "pack-men-quad",
    name: "Men's Signature Set",
    gender: "Men",
    count: 4,
    price: 5199,
    was: 5996,
    desc: "The full men's edit — Sauvage, Aventus, 1 Million and Bleu. The ultimate gift for him.",
    images: [
      img("Pack of Images/svg cred  mil blu", "svg cred  mil blu (2).png"),
      img("Pack of Images/svg cred  mil blu", "svg cred  mil blu.png"),
      img("Pack of Images/svg cred  mil blu", "svg cred  mil blu (3).png")
    ]
  }
];
