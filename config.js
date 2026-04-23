// ============================================================
//  DELMELA CAFÉ & RESTAURANT — config.js
//  Edit this file only. All site content lives here.
// ============================================================

const CONFIG = {

  restaurant: {
    name: "Delmela",
    tagline: "Café & Restaurant · Where Every Bite Feels Like Home",
    about: `Delmela is Addis Ababa's favourite neighbourhood café — the kind of place you come for breakfast and end up staying for lunch. With two locations across the city, we bring together the best of Ethiopian comfort food and global café favourites, made fresh every morning.

From our signature waffles and shakshuka to rice bowls, wraps, and homemade pastries — every dish is crafted with care. Pull up a chair, order something good, and take your time.`,
    hours: "Open daily · Closes at 10:00 PM",
  },

  images: {
    hero:  "images/hero.jpg",
    about: "images/about.jpg",
  },

  social: {
    instagram: "http://instagram.com/_delmela/",
  },

  locations: [
    {
      name:       "Summit",
      address:    "Around Summit Feyele Bet, next to Chanoly, Addis Ababa",
      phone:      "+251 980 635 959",
      googleMaps: "https://maps.app.goo.gl/nqgFNPMPVQsxvQS57",
    },
    {
      name:       "Sarbet",
      address:    "Across from Tutto Gelato, The Nest Residence, Addis Ababa",
      phone:      "+251 996 153 422",
      googleMaps: "https://maps.app.goo.gl/tHDk2icFaRMnffTC9",
    },
  ],

  delivery: [
    { name: "Deliver Addis", url: "https://deliveraddis.com/restaurants/delmela-summit", emoji: "🛵" },
    { name: "Ride Foods",    url: "https://www.ridefood.app/en/addis-ababa/vendor/174",  emoji: "🍽️" },
  ],

  menu: [
    {
      category: "Breakfast",
      description: "Waffles, pancakes, eggs & Ethiopian classics to start your day",
      cover: "images/menu-breakfast.jpg",
      gradient: "linear-gradient(135deg, #7a4a1e 0%, #c47c3a 100%)",
      items: [
        { name: "Egg & Waffle",                     description: "A classic done right" },
        { name: "Banana Foster Waffle",             description: "Caramelised banana, warm spice" },
        { name: "Fresh n' Fruity Pancake",          description: "Light pancakes with seasonal fruit" },
        { name: "Shakshuka",                        description: "Eggs poached in spiced tomato sauce" },
        { name: "Special Foul Bowl",                description: "Ethiopian-style spiced fava beans" },
        { name: "Scrambled Egg",                    description: "With Ethiopian butter & vegetables" },
        { name: "Eggs & Avocado Toast",             description: "Creamy avocado on toasted bread" },
        { name: "Egg Sandwich",                     description: "Soft bread, egg, fresh fillings" },
        { name: "Kinche",                           description: "Cracked wheat Ethiopian comfort bowl" },
        { name: "Special Chechebsa",                description: "Shredded injera in spiced butter" },
        { name: "Garden Omelette",                  description: "Fresh vegetables and herbs" },
        { name: "Chicken & Egg Sandwich",           description: "Hearty and satisfying" },
        { name: "Honey Peanut Butter Banana Toast", description: "Sweet, filling, and delicious" },
        { name: "Chicken & Waffle",                 description: "Crispy chicken meets fluffy waffle" },
        { name: "Breakfast Combos",                 description: "Waffles, oatmeal or croissant options" },
      ],
    },
    {
      category: "Salads",
      description: "Fresh, filling salads with chickpeas, egg and protein options",
      cover: "images/menu-salads.jpg",
      gradient: "linear-gradient(135deg, #2a4a2e 0%, #4a8a52 100%)",
      items: [
        { name: "House Salad",         description: "Chickpeas, egg, vegetable mix" },
        { name: "Tuna House Salad",    description: "House salad with tuna" },
        { name: "Chicken House Salad", description: "House salad with grilled chicken" },
        { name: "Beef House Salad",    description: "House salad with seasoned beef" },
      ],
    },
    {
      category: "Rice Bowls",
      description: "Hearty bowls inspired by global flavours",
      cover: "images/menu-bowls.jpg",
      gradient: "linear-gradient(135deg, #4a2a10 0%, #8a5a30 100%)",
      items: [
        { name: "Tika Tika Bowl",        description: "Chicken curry rice bowl" },
        { name: "Cado Bowl",             description: "Avocado, chickpeas, beets, vegetables" },
        { name: "Vegetarian Curry Bowl", description: "Fragrant, plant-based, warming" },
        { name: "Chicken Teriyaki Bowl", description: "Japanese-style glazed chicken on rice" },
        { name: "Keto Bowl",             description: "Eggs, avocado and protein options" },
        { name: "Burrito Bowl",          description: "Rice or kinche, beans, vegetables" },
      ],
    },
    {
      category: "Sandwiches & Wraps",
      description: "Signature builds and classic combos, your way",
      cover: "images/menu-sandwiches.jpg",
      gradient: "linear-gradient(135deg, #3a2a18 0%, #7a5a38 100%)",
      items: [
        { name: "Signature Delmela Sandwich", description: "Our house special — a must-try" },
        { name: "Chicken Sandwich",           description: "Grilled or crispy chicken" },
        { name: "Beef Sandwich",              description: "Seasoned beef, fresh build" },
        { name: "Tuna Sandwich",              description: "Light and flavourful" },
        { name: "Veggie Sandwich",            description: "Garden-fresh, fully loaded" },
        { name: "Chicken Wrap",               description: "Tzatziki, potatoes, vegetables" },
        { name: "Beef Wrap",                  description: "Seasoned beef, wrapped fresh" },
        { name: "Tuna Wrap",                  description: "Tuna, vegetables, light sauce" },
        { name: "Veggie Wrap",                description: "Colourful vegetables and herbs" },
      ],
    },
    {
      category: "Desserts & Pastries",
      description: "Waffles, cinnamon rolls, croissants and more",
      cover: "images/menu-desserts.jpg",
      gradient: "linear-gradient(135deg, #5a2a3a 0%, #b06070 100%)",
      items: [
        { name: "Chocolate Waffle",         description: "Rich, indulgent, warm" },
        { name: "Classic Waffle",           description: "Golden, light, perfect" },
        { name: "Country Apple Pie Waffle", description: "Cinnamon-spiced apple topping" },
        { name: "Frutopia Waffle",          description: "Fresh fruit-topped waffle" },
        { name: "Cinnamon Rolls",           description: "Soft, glazed, warm from the oven" },
        { name: "Croissant",               description: "Buttery classic or chocolate-filled" },
        { name: "Danish Pastries",         description: "Freshly baked daily" },
        { name: "Frappuccino",             description: "Blended coffee dessert drink" },
      ],
    },
    {
      category: "Drinks",
      description: "Coffee, fresh juices, smoothies, shakes and more",
      cover: "images/menu-drinks.jpg",
      gradient: "linear-gradient(135deg, #1a0e08 0%, #4a2e1a 100%)",
      items: [
        { name: "Latte",        description: "Smooth espresso with steamed milk" },
        { name: "Iced Coffee",  description: "Cold, bold, refreshing" },
        { name: "Macchiato",    description: "Ethiopian-style or classic" },
        { name: "Fresh Juices", description: "Seasonal selection, made to order" },
        { name: "Smoothies",    description: "Blended fruit, thick and fresh" },
        { name: "Milkshakes",   description: "Thick, creamy, various flavours" },
        { name: "Soft Drinks",  description: "Cold cans and bottles" },
      ],
    },
  ],

  stats: [
    { number: "2",    label: "Locations" },
    { number: "50+",  label: "Menu items" },
    { number: "100%", label: "Fresh daily" },
  ],

  theme: {
  primary:   "#8A6A52",
  secondary: "#C9A882",
  accent:    "#D4956A",
  dark:      "#A07850",   // beige-brown instead of near-black
  cream:     "#FDF9F4",
  text:      "#3A3A3A",
  muted:     "#9A8878",
  border:    "#EFE3D6",
},
};
