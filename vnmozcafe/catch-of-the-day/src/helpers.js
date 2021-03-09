export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getFunName() {
  const adjectives = [
    "adorable",
    "angry",
    "awesome",
    "beautiful",
    "bewildered",
    "best",
    "clean",
    "cool",
    "clumsy",
    "drab",
    "elegant",
    "fancy",
    "glamorous",
    "handsome",
    "long",
    "magnificent",
    "old-fashioned",
    "plain",
    "quaint",
    "sparkling",
    "universal",
    "unicorn",
    "defeated",
    "embarrassed",
    "expensive",
    "fierce",
    "grumpy",
    "helpless",
    "itchy",
    "jealous",
    "lazy",
    "mysterious",
    "nervous",
    "obnoxious",
    "panicky",
    "repulsive",
    "scary",
    "popular",
    "thoughtless",
    "uptight",
    "worried",
    "Tasty",
    "Thai",
    "Chinese",
    "Vietnamese",
    "African",
    "Italian",
    "French",
    "Japanese",
    "Korean",
    "Jewish",
    "Indian",
    "fusion"

  ];

  const nouns = [
    "Abundance",
    "Board",
    "Chow",
    "Cantina",
    "Crisp",
    "Flame",
    "Dished",
    "Local",
    "Dashing",
    "Grill",
    "Hearty",
    "Gala",
    "Bazaar",
    "Cellar",
    "Bit",
    "Desire",
    "Sumo",
    "Wrap",
    "Restaurantopolis",
    "Zest",
    "Palate",
    "Palace",
    "House",
    "Steakhouse",
    "Fantasy",
    "Oasis",
    "Town",
    "Gourmet",
    "Tapas",
    "Taco",
    "Point",
    "Gnaw"
  ];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}
