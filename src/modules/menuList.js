const basePath = "../../menu_items/";

export const menu = {
  coffee: [
    {
      title: "Irish coffee",
      desc: "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
      price: "$7.00",
      image: basePath + "coffee/coffee-1.png",
      sizes: {
        s: { size: "200 ml", "add-price": "0.00" },
        m: { size: "300 ml", "add-price": "0.50" },
        l: { size: "400 ml", "add-price": "1.00" },
      },
      additives: [
        { name: "Sugar", "add-price": "0.50" },
        { name: "Cinnamon", "add-price": "0.50" },
        { name: "Syrup", "add-price": "0.50" },
      ],
    },
    {
      title: "Kahlua coffee",
      desc: "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
      price: "$7.00",
      image: basePath + "coffee/coffee-2.png",
      sizes: {
        s: { size: "200 ml", "add-price": "0.00" },
        m: { size: "300 ml", "add-price": "0.50" },
        l: { size: "400 ml", "add-price": "1.00" },
      },
      additives: [
        { name: "Sugar", "add-price": "0.50" },
        { name: "Cinnamon", "add-price": "0.50" },
        { name: "Syrup", "add-price": "0.50" },
      ],
    },
    {
      title: "Honey raf",
      desc: "Espresso with frothed milk, cream and aromatic honey",
      price: "$5.50",
      image: basePath + "coffee/coffee-3.png",
      sizes: {
        s: { size: "200 ml", "add-price": "0.00" },
        m: { size: "300 ml", "add-price": "0.50" },
        l: { size: "400 ml", "add-price": "1.00" },
      },
      additives: [
        { name: "Sugar", "add-price": "0.50" },
        { name: "Cinnamon", "add-price": "0.50" },
        { name: "Syrup", "add-price": "0.50" },
      ],
    },
    {
      title: "Ice cappuccino",
      desc: "Cappuccino with soft thick foam in summer version with ice",
      price: "$5.00",
      image: basePath + "coffee/coffee-4.png",
      sizes: {
        s: { size: "200 ml", "add-price": "0.00" },
        m: { size: "300 ml", "add-price": "0.50" },
        l: { size: "400 ml", "add-price": "1.00" },
      },
      additives: [
        { name: "Sugar", "add-price": "0.50" },
        { name: "Cinnamon", "add-price": "0.50" },
        { name: "Syrup", "add-price": "0.50" },
      ],
    },
    {
      title: "Espresso",
      desc: "Classic black coffee",
      price: "$4.50",
      image: basePath + "coffee/coffee-5.png",
      sizes: {
        s: { size: "200 ml", "add-price": "0.00" },
        m: { size: "300 ml", "add-price": "0.50" },
        l: { size: "400 ml", "add-price": "1.00" },
      },
      additives: [
        { name: "Sugar", "add-price": "0.50" },
        { name: "Cinnamon", "add-price": "0.50" },
        { name: "Syrup", "add-price": "0.50" },
      ],
    },
    {
      title: "Latte",
      desc: "Espresso coffee with the addition of steamed milk and dense milk foam",
      price: "$5.50",
      image: basePath + "coffee/coffee-6.png",
      sizes: {
        s: { size: "200 ml", "add-price": "0.00" },
        m: { size: "300 ml", "add-price": "0.50" },
        l: { size: "400 ml", "add-price": "1.00" },
      },
      additives: [
        { name: "Sugar", "add-price": "0.50" },
        { name: "Cinnamon", "add-price": "0.50" },
        { name: "Syrup", "add-price": "0.50" },
      ],
    },
    {
      title: "Latte macchiato",
      desc: "Espresso with frothed milk and chocolate",
      price: "$5.50",
      image: basePath + "coffee/coffee-7.png",
      sizes: {
        s: { size: "200 ml", "add-price": "0.00" },
        m: { size: "300 ml", "add-price": "0.50" },
        l: { size: "400 ml", "add-price": "1.00" },
      },
      additives: [
        { name: "Sugar", "add-price": "0.50" },
        { name: "Cinnamon", "add-price": "0.50" },
        { name: "Syrup", "add-price": "0.50" },
      ],
    },
    {
      title: "Coffee with cognac",
      desc: "Fragrant black coffee with cognac and whipped cream",
      price: "$6.50",
      image: basePath + "coffee/coffee-8.png",
      sizes: {
        s: { size: "200 ml", "add-price": "0.00" },
        m: { size: "300 ml", "add-price": "0.50" },
        l: { size: "400 ml", "add-price": "1.00" },
      },
      additives: [
        { name: "Sugar", "add-price": "0.50" },
        { name: "Cinnamon", "add-price": "0.50" },
        { name: "Syrup", "add-price": "0.50" },
      ],
    },
  ],

  tea: [
    {
      title: "Moroccan",
      desc: "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
      price: "$4.50",
      image: basePath + "tea/tea-1.png",
      sizes: {
        s: { size: "200 ml", "add-price": "0.00" },
        m: { size: "300 ml", "add-price": "0.50" },
        l: { size: "400 ml", "add-price": "1.00" },
      },
      additives: [
        { name: "Sugar", "add-price": "0.50" },
        { name: "Lemon", "add-price": "0.50" },
        { name: "Syrup", "add-price": "0.50" },
      ],
    },
    {
      title: "Ginger",
      desc: "Original black tea with fresh ginger, lemon and honey",
      price: "$5.00",
      image: basePath + "tea/tea-2.png",
      sizes: {
        s: { size: "200 ml", "add-price": "0.00" },
        m: { size: "300 ml", "add-price": "0.50" },
        l: { size: "400 ml", "add-price": "1.00" },
      },
      additives: [
        { name: "Sugar", "add-price": "0.50" },
        { name: "Lemon", "add-price": "0.50" },
        { name: "Syrup", "add-price": "0.50" },
      ],
    },
    {
      title: "Cranberry",
      desc: "Invigorating black tea with cranberry and honey",
      price: "$5.00",
      image: basePath + "tea/tea-3.png",
      sizes: {
        s: { size: "200 ml", "add-price": "0.00" },
        m: { size: "300 ml", "add-price": "0.50" },
        l: { size: "400 ml", "add-price": "1.00" },
      },
      additives: [
        { name: "Sugar", "add-price": "0.50" },
        { name: "Lemon", "add-price": "0.50" },
        { name: "Syrup", "add-price": "0.50" },
      ],
    },
    {
      title: "Sea buckthorn",
      desc: "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
      price: "$5.50",
      image: basePath + "tea/tea-4.png",
      sizes: {
        s: { size: "200 ml", "add-price": "0.00" },
        m: { size: "300 ml", "add-price": "0.50" },
        l: { size: "400 ml", "add-price": "1.00" },
      },
      additives: [
        { name: "Sugar", "add-price": "0.50" },
        { name: "Lemon", "add-price": "0.50" },
        { name: "Syrup", "add-price": "0.50" },
      ],
    },
  ],

  dessert: [
    {
      title: "Marble cheesecake",
      desc: "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
      price: "$3.50",
      image: basePath + "dessert/dessert-1.png",
      sizes: {
        s: { size: "50 g", "add-price": "0.00" },
        m: { size: "100 g", "add-price": "0.50" },
        l: { size: "200 g", "add-price": "1.00" },
      },
      additives: [
        { name: "Berries", "add-price": "0.50" },
        { name: "Nuts", "add-price": "0.50" },
        { name: "Jam", "add-price": "0.50" },
      ],
    },
    {
      title: "Red velvet",
      desc: "Layer cake with cream cheese frosting",
      price: "$4.00",
      image: basePath + "dessert/dessert-2.png",
      sizes: {
        s: { size: "50 g", "add-price": "0.00" },
        m: { size: "100 g", "add-price": "0.50" },
        l: { size: "200 g", "add-price": "1.00" },
      },
      additives: [
        { name: "Berries", "add-price": "0.50" },
        { name: "Nuts", "add-price": "0.50" },
        { name: "Jam", "add-price": "0.50" },
      ],
    },
    {
      title: "Cheesecakes",
      desc: "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
      price: "$4.50",
      image: basePath + "dessert/dessert-3.png",
      sizes: {
        s: { size: "50 g", "add-price": "0.00" },
        m: { size: "100 g", "add-price": "0.50" },
        l: { size: "200 g", "add-price": "1.00" },
      },
      additives: [
        { name: "Berries", "add-price": "0.50" },
        { name: "Nuts", "add-price": "0.50" },
        { name: "Jam", "add-price": "0.50" },
      ],
    },
    {
      title: "Creme brulee",
      desc: "Delicate creamy dessert in a caramel basket with wild berries",
      price: "$4.00",
      image: basePath + "dessert/dessert-4.png",
      sizes: {
        s: { size: "50 g", "add-price": "0.00" },
        m: { size: "100 g", "add-price": "0.50" },
        l: { size: "200 g", "add-price": "1.00" },
      },
      additives: [
        { name: "Berries", "add-price": "0.50" },
        { name: "Nuts", "add-price": "0.50" },
        { name: "Jam", "add-price": "0.50" },
      ],
    },
    {
      title: "Pancakes",
      desc: "Tender pancakes with strawberry jam and fresh strawberries",
      price: "$4.50",
      image: basePath + "dessert/dessert-5.png",
      sizes: {
        s: { size: "50 g", "add-price": "0.00" },
        m: { size: "100 g", "add-price": "0.50" },
        l: { size: "200 g", "add-price": "1.00" },
      },
      additives: [
        { name: "Berries", "add-price": "0.50" },
        { name: "Nuts", "add-price": "0.50" },
        { name: "Jam", "add-price": "0.50" },
      ],
    },
    {
      title: "Honey cake",
      desc: "Classic honey cake with delicate custard",
      price: "$4.50",
      image: basePath + "dessert/dessert-6.png",
      sizes: {
        s: { size: "50 g", "add-price": "0.00" },
        m: { size: "100 g", "add-price": "0.50" },
        l: { size: "200 g", "add-price": "1.00" },
      },
      additives: [
        { name: "Berries", "add-price": "0.50" },
        { name: "Nuts", "add-price": "0.50" },
        { name: "Jam", "add-price": "0.50" },
      ],
    },
    {
      title: "Chocolate cake",
      desc: "Cake with hot chocolate filling and nuts with dried apricots",
      price: "$5.50",
      image: basePath + "dessert/dessert-7.png",
      sizes: {
        s: { size: "50 g", "add-price": "0.00" },
        m: { size: "100 g", "add-price": "0.50" },
        l: { size: "200 g", "add-price": "1.00" },
      },
      additives: [
        { name: "Berries", "add-price": "0.50" },
        { name: "Nuts", "add-price": "0.50" },
        { name: "Jam", "add-price": "0.50" },
      ],
    },
    {
      title: "Black forest",
      desc: "A combination of thin sponge cake with cherry jam and light chocolate mousse",
      price: "$6.50",
      image: basePath + "dessert/dessert-8.png",
      sizes: {
        s: { size: "50 g", "add-price": "0.00" },
        m: { size: "100 g", "add-price": "0.50" },
        l: { size: "200 g", "add-price": "1.00" },
      },
      additives: [
        { name: "Berries", "add-price": "0.50" },
        { name: "Nuts", "add-price": "0.50" },
        { name: "Jam", "add-price": "0.50" },
      ],
    },
  ],
};
