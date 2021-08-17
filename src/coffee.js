const coffeeData = [
  {
    title: "Black",
    praise: "Korean's Favorite",
    price: "5000₩",
    description:
      "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.",
    ingredients: ["Coffee"],
    img: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    id: 1,
  },
  {
    title: "Latte",
    praise: "Korean's Favorite",
    price: "5000₩",
    description:
      "As the most popular coffee drink out there, the latte is comprised of a shot of espresso and steamed milk with just a touch of foam. It can be ordered plain or with a flavor shot of anything from vanilla to pumpkin spice.",
    ingredients: ["Espresso", "Steamed Milk"],
    id: 2,
    img: "https://images.unsplash.com/photo-1593829111182-8a237d2bb024?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cappuccino",
    praise: "Korean's Favorite",
    price: "5000₩",
    description:
      "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top. Sometimes you can find variations that use cream instead of milk or ones that throw in flavor shot, as well.",
    ingredients: ["Espresso", "Steamed Milk", "Foam"],
    img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=847&q=80",
    id: 3,
  },
  {
    title: "Americano",
    praise: "Korean's Favorite",
    price: "5000₩",
    description:
      "With a similar flavor to black coffee, the americano consists of an espresso shot diluted in hot water.",
    ingredients: ["Espresso", "Hot Water"],
    img: "https://images.unsplash.com/photo-1565065963005-92ba391a8ebc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    id: 4,
  },
  {
    title: "Espresso",
    praise: "Korean's Favorite",
    price: "5000₩",
    description:
      "An espresso shot can be served solo or used as the foundation of most coffee drinks, like lattes and macchiatos.",
    ingredients: ["1oz Espresso"],
    img: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1175&q=80",
    id: 5,
  },
  {
    title: "Doppio",
    praise: "Korean's Favorite",
    price: "5000₩",
    description:
      "A double shot of espresso, the doppio is perfect for putting extra pep in your step.",
    ingredients: ["2oz Espresso"],
    img: "https://images.unsplash.com/photo-1611691934391-5a8805e0bd1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    id: 6,
  },
  {
    title: "Cortado",
    praise: "Korean's Favorite",
    price: "5000₩",
    description:
      "Like yin and yang, a cortado is the perfect balance of espresso and warm steamed milk. The milk is used to cut back on the espresso’s acidity.",
    ingredients: ["1oz Espresso", "1oz Steamed Milk"],
    img: "https://images.unsplash.com/photo-1605690958425-0a7dae081dd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    id: 7,
  },
  {
    title: "Red Eye",
    praise: "Korean's Favorite",
    price: "5000₩",
    description:
      "Named after those pesky midnight flights, a red eye can cure any tiresome morning. A full cup of hot coffee with an espresso shot mixed in, this will definitely get your heart racing.",
    ingredients: ["Coffee", "Espresso"],
    img: "https://images.unsplash.com/photo-1515283709260-ee29296f1534?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=847&q=80",
    id: 8,
  },
  {
    title: "Galão",
    praise: "Korean's Favorite",
    price: "5000₩",
    description:
      "Originating in Portugal, this hot coffee drink is closely related to the latte and cappuccino. Only difference is it contains about twice as much foamed milk, making it a lighter drink compared to the other two.",
    ingredients: ["Espresso", "Foamed milk"],
    img: "https://images.unsplash.com/photo-1576670392954-38b1fdb78b1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    id: 9,
  },
  {
    title: "Lungo",
    praise: "Korean's Favorite",
    price: "5000₩",
    description:
      "A lungo is a long-pull espresso. The longer the pull, the more caffeine there is and the more ounces you can enjoy.",
    ingredients: ["Long pulled espresso"],
    id: 10,
    img: "https://images.unsplash.com/photo-1587578855694-7e2c29dfd6c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Macchiato",
    praise: "Korean's Favorite",
    price: "5000₩",
    description:
      "The macchiato is another espresso-based drink that has a small amount of foam on top. It’s the happy medium between a cappuccino and a doppio.",
    ingredients: ["Espresso", "Foam"],
    id: 11,
    img: "https://images.unsplash.com/photo-1578088928514-30fde9f07604?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mocha",
    praise: "Korean's Favorite",
    price: "5000₩",
    description:
      "For all you chocolate lovers out there, you’ll fall in love with a mocha (or maybe you already have). The mocha is a chocolate espresso drink with steamed milk and foam.",
    ingredients: ["Espresso", "Steamed Milk", "Chocolate"],
    id: 12,
    img: "https://images.unsplash.com/photo-1623350200189-14fc9c29c98d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Ristretto",
    praise: "Korean's Favorite",
    price: "5000₩",
    description:
      "Ristretto is an espresso shot. It uses less hot water which creates a sweeter flavor compared to the bitter taste of a traditional shot of espresso or a doppio.",
    ingredients: ["Short pulled espresso"],
    id: 13,
    img: "https://images.unsplash.com/photo-1577968897411-6973c2e2452a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Flat White",
    praise: "Korean's Favorite",
    price: "5000₩",
    description:
      "This Aussie-born drink is basically a cappuccino without the foam or chocolate sprinkle. It’s an espresso drink with steamed milk.",
    ingredients: ["Espresso", "Steamed Milk"],
    id: 14,
    img: "https://images.unsplash.com/photo-1607945610118-903b1bc6716a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Affogato",
    praise: "Korean's Favorite",
    price: "5000₩",
    description:
      "The affogato is an excuse to enjoy a scoop of ice cream any time of day (and any time of year in my opinion). Served with a scoop of ice cream and a shot of espresso, or two.",
    ingredients: ["Espresso", "Ice cream"],
    id: 15,
    img: "https://images.unsplash.com/photo-1592663527144-3afb8d150556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80",
  },
  {
    title: "Café au Lait",
    praise: "Korean's Favorite",
    price: "5000₩",
    description:
      "Café au lait is perfect for the coffee minimalist who wants a bit more flavor. Just add a splash of warm milk to your coffee and you’re all set!",
    ingredients: ["Coffee", "Steamed Milk"],
    id: 16,
    img: "https://images.unsplash.com/photo-1502471602546-17554aac1160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Irish",
    praise: "Korean's Favorite",
    price: "5000₩",
    description:
      "Irish coffee consists of black coffee, whiskey and sugar, topped with whipped cream.",
    ingredients: ["Coffee", "Whiskey", "Sugar", "Cream"],
    id: 17,
    img: "https://images.unsplash.com/photo-1553578615-ee00f2db2c5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Guayoyo",
    praise: "Korean's Favorite",
    price: "5000₩",
    description:
      "Traditional venezuelan coffee prepared by filtering the ground coffee in a cone of cloth and pouring hot water on top of it. It's prefferably drinked wihout milk nor cream.",
    ingredients: ["Coffee", "Traditional", "Hot Water"],
    id: 18,
    img: "",
  },
  {
    title: "Cortadito",
    praise: "Korean's Favorite",
    price: "5000₩",
    description:
      "Traditional cuban coffee method where a bit of freshly brewed coffee is mixed with sugar to create a highly sugared paste. Then add the rest of the coffee and stir adding milk until a 50/50 ratio is achieved.",
    ingredients: ["Coffee", "Traditional", "Sugar", "Milk"],
    id: 19,
    img: "https://images.unsplash.com/photo-1495121864268-11b119abeba0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvZmZlZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Aguapanela Coffee",
    praise: "Korean's Favorite",
    price: "5000₩",
    description:
      "Bring panela and coffee to a boil in a small pan for 30 minutes until panela is melted. Brew your coffee using your favorite brewing technique but add the hot aguapanela instead of hot water. Delicious sweetened coffee is ready.",
    ingredients: ["Coffee", "Sweet", "Panela", "Traditional"],
    id: 20,
    img: "https://images.unsplash.com/photo-1527683040093-3a2b80ed1592?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=830&q=80",
  },
  {
    title: "Latte11",
    praise: "Korean's Favorite",
    price: "5000₩",
    description:
      "As the most popular coffee drink out there, the latte is comprised of a shot of espresso and steamed milk with just a touch of foam. It can be ordered plain or with a flavor shot of anything from vanilla to pumpkin spice.",
    ingredients: ["Espresso11", "Steamed Milk11"],
    id: 211,
    img: "https://images.unsplash.com/photo-1567914558993-072090d91286?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=762&q=80",
  },
];

export default coffeeData;
