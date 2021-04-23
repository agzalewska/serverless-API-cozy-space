const items = [
  {
    id: 'rec5sOFh0qMAJWdxu',
    name: 'Woodrow 6-Drawer Dresser',
    image:
      'https://dl.airtable.com/.attachments/a8f1afc780ce48dd410dacdc77306112/dfcbf23f/0520341230034_014_b.jpg',
    price: 82000,
    category: 'Bedroom',
    reviews: 32,
    stock: 13,
    company: 'Urban Outfitters',
    shipping: true,
    description:
      'Rustic bohemian textures meet modern construction in this 6-drawer dresser. Featuring a mango wood build with round double knobs on each drawer and a standing base. Top drawers feature strands of jute for added dimension. Three rows of two drawers each with metal channel glides. This custom furniture piece will be made to order just for you. Two people recommended for assembly.',
    colors: ['#00ff00', '#ff0000', '#000', '#0000ff'],
  },
  {
    id: 'rec6KPpd1cCxZa6jZ',
    name: 'Lerhamn Table',
    image:
      'https://dl.airtable.com/.attachments/052f9dd94dee10c5cbe2a65feafe5dab/7029a7bd/a0e23e11e764ebf01c2eec2bc00a9936.jpg',
    price: 30000,
    category: 'kitchen',
    reviews: 54,
    stock: 4,
    company: 'Ikea',
    shipping: true,
    description:
      "It's nice to have a bit of elbow room and our 10-seater dining tables give everyone a comfortable place at the table. Your guests and you can focus on enjoying the conversation and your great food. Most of our tables are extendable, so they even save you space when the party's over.",
    colors: ['#f5efdc', '#f5e3dc', '#000'],
  },
  {
    id: 'rec7P3XUwcf8Ny6D8',
    name: 'Boho Single Bed',
    image:
      'https://dl.airtable.com/.attachments/b6b5824d1ebe6669cb0dbcac7e272634/12bfc342/30073654_020_h.jpg',
    price: 50000,
    category: 'Bedroom',
    reviews: 38,
    stock: 55,
    company: 'Urban Outfitters',
    description:
      'Carved from sustainable mango wood, our boho double bed adds an understated rustic touch. Complete with a sturdy slatted design so no box spring is needed! Mattress and bedding sold separately.',
    colors: ['#ff0000'],
  },
  {
    id: 'rec8FGQEhpKVA5FF1',
    name: 'Painted Loom Satelite Chair',
    image:
      'https://dl.airtable.com/.attachments/4c53ab3d20c813211ee07824b09e17f4/f33e937a/0520641760190_010_b.jpg',
    price: 12000,
    category: 'Office',
    reviews: 36,
    stock: 15,
    company: 'Ashley Furniture',
    description:
      "Original 1970s satellite chair that's been painted white. Features a rounded rattan construction with stylish steel legs - a mid-century staple for your vintage interiors.",
    colors: ['#f5e3dc', '#000', '#e3dcf5'],
  },
  {
    id: 'recG8UIUixrOsnZEr',
    name: 'Upholstered Greta Armchair',
    image:
      'https://dl.airtable.com/.attachments/54f63e23fe2c95f02fc8e417b51ca707/058f57a5/di_an_h-g_8MrEZAvyE-unsplash.jpg',
    price: 60000,
    category: 'Office',
    reviews: 4,
    stock: 6,
    company: 'Urban Outfitters',
    shipping: true,
    description:
      'Button back chair with pristine original upholstery, a true vintage piece sourced from the 1970s. Features a rounded construction with a plush cushioned seat and swivel steel base.',
    colors: ['#f5efdc', '#000'],
  },
  {
    id: 'recHSu3wbLCT70zAn',
    name: 'Upholstered Sofa Bench',
    image:
      'https://dl.airtable.com/.attachments/26b6a9564c476299c48e6582ee5aadb8/b6eddefa/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg',
    price: 120000,
    category: 'Living Room',
    reviews: 32,
    stock: 3,
    company: 'Ashley Furniture',
    description:
      'Comfort and class combine to create the stunning Rivington upholstered sofa bench. With glamorous diamond stitching and gentle curves, the irresistibly inviting seat is a beautiful contrast against the sleek shape of its black metal legs. Foam padding and a quilted finish ensure a moment’s rest will turn into a long-lasting lounge.',
    colors: ['#0000ff', '#000'],
  },
  {
    id: 'recHWPGUwx4EE1XFq',
    name: 'Miles Extendable Dining Table',
    image:
      'https://dl.airtable.com/.attachments/7ec3c388f491abd019f941d952b3f086/4da37d15/717eb7b5a12fdf1832331651f4750147.jpg',
    price: 54000,
    category: 'Dining Room',
    reviews: 32,
    stock: 25,
    company: 'Ashley Furniture',
    description:
      'Bringing family and friends together is its extendable feature which fits at least two to four extra guests. Just extend and go with the simple butterfly mechanism and then reinforce the expandable timber tabletops for a sturdy dining top.',
    colors: ['#000', '#f5efdc', '#e3dcf5'],
  },
  {
    id: 'recLdTpx5h2FO6Nvi',
    name: 'STIG Bar stool with backrest',
    image:
      'https://dl.airtable.com/.attachments/94637555051ac4d5c385f4fac9134757/fe159c42/ac0d304afc60121e46117d26ac8163ee.jpg',
    price: 21000,
    category: 'kitchen',
    reviews: 21,
    stock: 13,
    company: 'Ikea',
    shipping: true,
    description:
      'This comfy bar stool/counter stool is the perfect height for lazy breakfasts, casual meals or snacks at the counter or kitchen island. Made of easy-care materials so occasional spills are easy to wipe off.',
    colors: ['#000', '#0000ff'],
  },
  {
    id: 'recLqr7BIgCJ6OHWa',
    name: 'Comfy Sofa XL',
    image:
      'https://dl.airtable.com/.attachments/60b79b19c7107d53a9dbda7f23d037aa/b96e9d92/sidekix-media-zLT3VqWEgOQ-unsplash.jpg',
    price: 13000,
    category: 'Living Room',
    reviews: 85,
    stock: 26,
    company: 'Urban Outfitters',
    shipping: true,
    description:
      "Extra-large sofa bed that's the perfect addition to your small space. Features a legless design with pin-tucked recycled leather cushions that are padded for extra comfort. Inner metal structure allows the sofa to sit upright, half-reclined or completely flat, perfect for lounging around or getting a full night's sleep.",
    colors: ['#000', '#e3dcf5'],
  },
  {
    id: 'recRQaUJ63nuoDGC1',
    name: 'Snuggler Patchwork Sofa',
    image:
      'https://dl.airtable.com/.attachments/e51b8ea8617ae7b9967fbe231cf7f395/ccb73a54/0520901410001_000_b.jpg',
    price: 56000,
    category: 'Kids Room',
    reviews: 44,
    stock: 3,
    company: 'Francis',
    description:
      'A stand-out addition to your living space, this handmade sofa is topped with a vintage-inspired patchwork design and distressed wood feet.',
    colors: ['#f5efdc'],
  },
  {
    id: 'recTYdGAuXw5vLiI8',
    name: 'Lounge Gina Chair',
    image:
      'https://dl.airtable.com/.attachments/ab24b1bfb2af4999382cf33b006bde86/51bfcb1f/tati-visual-w8ZvNb6YWkw-unsplash.jpg',
    price: 48000,
    category: 'Office',
    reviews: 32,
    stock: 49,
    company: 'Urban Outfitters',
    shipping: true,
    description:
      'Luxe vintage desk chair, a true vintage piece from the 1960s. Originally designed by Olli Mannermaa for Martela Oy, this adjustable chair features a jacquard fabric with a floral finish.',
    colors: ['#000', '#00ff00'],
  },
  {
    id: 'recTpipatktJeuZdZ',
    name: 'Kitchen Bar Stools',
    image:
      'https://dl.airtable.com/.attachments/3e41850d1a3d427dadca9fc620a509c7/4c11a303/fran-hogan-fBV0ExfOvxw-unsplash.jpg',
    price: 53000,
    category: 'kitchen',
    reviews: 4,
    stock: 7,
    company: 'Francis',
    shipping: true,
    description:
      'Amalia kitchen counter stools have a modern style to its unique frame with its curved leg angles and 360° swivel seat',
    colors: ['#f5efdc', '#000'],
  },
  {
    id: 'recVCy5mABZkMoRRV',
    name: 'Greta Leather Sofa',
    image:
      'https://dl.airtable.com/.attachments/dcb903497693e335e487ae7e98180f82/1e96eea2/spacejoy-hWwP4LTGEQA-unsplash.jpg',
    price: 15000,
    category: 'Living Room',
    reviews: 52,
    stock: 36,
    company: 'Ikea',
    description:
      "Extra-large sofa bed that's the perfect addition to your small space. Features a legless design with pin-tucked recycled leather cushions that are padded for extra comfort.",
    colors: ['#f5efdc', '#000'],
  },
  {
    id: 'recXVbBy3cRzH4S9Y',
    name: 'Tabitha Tall Dresser',
    image:
      'https://dl.airtable.com/.attachments/14fb0e9ab86915686d4d248704725ce9/fb70753d/0520397350142_020_b.jpg',
    price: 35000,
    category: 'Living Room',
    reviews: 24,
    stock: 25,
    company: 'Francis',
    shipping: true,
    description:
      "Five-drawer dresser that's part of the UO exclusive Tabitha range. Made from a white oak construction with a two smaller drawers to top and three larger at the bottom, perfect for any getting ready space. Features mod-style rounded corners and oversized circular handles. Assembly required.",
    colors: ['#f5efdc', '#ff0000', '#0000ff', '#000'],
  },
  {
    id: 'recXhCBDaPdiyMhzS',
    name: 'Sofa Serenity Comfort',
    image:
      'https://dl.airtable.com/.attachments/fb45b6bd7d1d01c9b324311a43ea3cbf/a252673f/sidekix-media-KRjDLU5j1K8-unsplash.jpg',
    price: 120000,
    category: 'Living Room',
    reviews: 32,
    stock: 7,
    company: 'Urban Outfitters',
    shipping: true,
    description:
      "Extra-large sofa bed that's the perfect addition to your small space. Features a legless design with pin-tucked recycled leather cushions that are padded for extra comfort. Inner metal structure allows the sofa to sit upright, half-reclined or completely flat, perfect for lounging around or getting a full night's sleep.",
    colors: ['#f5efdc', '#ff0000'],
  },
  {
    id: 'recYEc7x36vJolPm9',
    name: 'Woodrow Coffee Table',
    image:
      'https://dl.airtable.com/.attachments/ebb748dcff3649f19e58deb0bb633f5d/8cefb1c9/Urban_Oufitters_Mikko_Coffee_Table.jpg',
    price: 42000,
    category: 'Living Room',
    reviews: 90,
    stock: 80,
    company: 'Urban Outfitters',
    shipping: true,
    description:
      'Elegantly modern coffee table featuring a round metal tabletop in a brushed, antique brass finish, topping mango wood legs with tapering dowel construction for a mid-century modern-inspired design. This custom furniture piece will be made to order just for you. Assembly required.',
    featured: true,
    colors: ['#0000ff', '#ff0000', '#00ff00', '#000'],
  },
  {
    id: 'recZ6Nodb3ahlxuaG',
    name: 'Urban Renewal Vintage Armchair',
    image:
      'https://dl.airtable.com/.attachments/cad03d4c86dfd53a02f6c4fc33963f0a/a72e139d/0520641760077_012_d.jpg',
    price: 25000,
    category: 'kitchen',
    reviews: 23,
    stock: 8,
    company: 'Ikea',
    description:
      'Fully refurbished vintage armchair, originally designed by Magnus Olesen Denmark circa 1960. Features a solid rosewood construction with a deep wool-blend cushion and back.',
    featured: true,
    colors: ['#ff0000', '#000', '#0000ff'],
  },
  {
    id: 'recZVZjRO213YdOE9',
    name: 'Woodrow Double Bed',
    image:
      'https://dl.airtable.com/.attachments/ab794254c81eeab3bb61a175b3d7fb7f/38aa3ef9/36517e6e8f8f7b8a00d3f639fb74462d.png',
    price: 80000,
    category: 'Bedroom',
    reviews: 50,
    stock: 90,
    company: 'Urban Outfitters',
    shipping: true,
    description:
      'Dream sweet boho dreams in this rustic bed frame. Made from mango and acacia wood with dowel legs and natural, woven jute strands forming a headboard and footboard. Finished with slatted base and support legs underneath. This custom furniture piece will be made to order just for you. Two people recommended for assembly.',
    colors: ['#0000ff'],
  },
  {
    id: 'reccposBfCPazjTj0',
    name: 'Office Armchair',
    image:
      'https://dl.airtable.com/.attachments/7d2d8ca01113e319f777821d93a82eeb/d3d5e95a/kam-idris-_HqHX3LBN18-unsplash.jpg',
    price: 50000,
    category: 'Office',
    reviews: 3,
    stock: 9,
    company: 'Francis',
    description:
      'Hay Denmark AAL 81 “About A Lounge” chair sourced by the vintage experts at Originall Creations. This retro-style Scandinavian design is finished in a teal woven fabric seat with black swivel base. A practical and stylish chair for any space.',
    colors: ['#f5efdc', '#00ff00'],
  },
  {
    id: 'receKabg41hVoVGk5',
    name: 'Akina Tall 4-Drawer Dresser',
    image:
      'https://dl.airtable.com/.attachments/0cf840bb7e3824bfd30bbcc979897aaa/e3aaf77b/58118530_020_b.jpg',
    price: 43000,
    category: 'Bedroom',
    reviews: 9,
    stock: 5,
    company: 'Ikea',
    description:
      'Acacia wood dresser from our Urban Outfitters-exclusive Akina collection, cut tall with four drawers, featuring front panels set at an angle for easy pull with a minimalist-meets-rustic aesthetic. Featuring wooden dovetail drawer glides. Crafted from natural acacia wood with a live edge finish, the dresser you receive will vary in hue, tone and grain pattern from what’s pictured here.',
    colors: ['#f5efdc', '#0000ff', '#ff0000'],
  },
];

module.exports = items;
