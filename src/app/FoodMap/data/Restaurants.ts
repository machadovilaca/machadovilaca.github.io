import { Restaurant } from "@app/FoodMap/FoodMap";

const bucketBaseUrl = "https://pub-567bc98a830042fbb2c7a6f479f9de3d.r2.dev"

const sushis: Restaurant[] = [
  {
    name: "Michizaki",
    types: ["Japanese", "Sushi", "Traditional"],
    address: "Rua Dom Frei Caetano Brandão, 169 Braga, 4700-031, Portugal",
    website: "https://www.facebook.com/michizaki.braga/",
    rating: 4.7,
    position: [41.54843, -8.42825],
    images: [
      `${bucketBaseUrl}/michizaki_3611.jpg`,
      `${bucketBaseUrl}/michizaki_4400.jpg`,
      `${bucketBaseUrl}/michizaki_3612.jpg`,
      `${bucketBaseUrl}/michizaki_4397.jpg`,
      `${bucketBaseUrl}/michizaki_3609.jpg`,
      `${bucketBaseUrl}/michizaki_4395.jpg`,
      `${bucketBaseUrl}/michizaki_4748.jpg`,
      `${bucketBaseUrl}/michizaki_3892.jpg`,
      `${bucketBaseUrl}/michizaki_4750.jpg`,
      `${bucketBaseUrl}/michizaki_4593.jpg`,
      `${bucketBaseUrl}/michizaki_4592.jpg`,
    ]
  },
  {
    name: "Alma d'Eça",
    types: ["Italian", "Japanese", "Fusion"],
    address: "R. Eça de Queirós 28, 4700-315 Braga, Portugal",
    website: "https://almadeca.eatbu.com/",
    rating: 4.3,
    position: [41.5518643962061, -8.42592195980869],
    images: [
      `${bucketBaseUrl}/almadeca_3634.jpg`,
      `${bucketBaseUrl}/almadeca_1541.jpg`,
      `${bucketBaseUrl}/almadeca_1556.jpg`,
      `${bucketBaseUrl}/almadeca_2626.jpg`,
      `${bucketBaseUrl}/almadeca_2628.jpg`,
    ]
  },
  {
    name: "Kanji Restaurant Garden & Bar",
    types: ["Japanese", "Sushi", "Fusion"],
    address: "R. João Lopes de Faria 71, 4800-414 Guimarães, Portugal",
    website: "https://www.tripadvisor.pt/Restaurant_Review-g189174-d20944018-Reviews-Kanji_Restaurant_Garden_Bar-Guimaraes_Braga_District_Northern_Portugal.html",
    rating: 4.1,
    position: [41.44431046042532, -8.293703813781669],
    images: [
      `${bucketBaseUrl}/kanji_2480.jpg`,
      `${bucketBaseUrl}/kanji_2483.jpg`,
      `${bucketBaseUrl}/kanji_2487.jpg`,
    ]
  },
  {
    name: "Nikko",
    types: ["Japanese", "Sushi", "Fusion"],
    address: "R. Dom Frei Caetano Brandão 177, 4700-031 Braga, Portugal",
    website: "https://www.facebook.com/Nikko-773733622771533/",
    rating: 4.1,
    position: [41.54850345951748, -8.428248089697492],
    images: [
      `${bucketBaseUrl}/nikko_3725.jpg`,
      `${bucketBaseUrl}/nikko_3728.jpg`,
      `${bucketBaseUrl}/nikko_3730.jpg`,
      `${bucketBaseUrl}/nikko_3731.jpg`,
    ]
  }
]

const asian: Restaurant[] = [
  {
    name: "RO",
    types: ["Ramen", "Japanese"],
    address: "R. de Ramalho Ortigão 61, 4000-407 Porto, Portugal",
    website: "https://www.tripadvisor.com/Restaurant_Review-g189180-d11894384-Reviews-Ro-Porto_Porto_District_Northern_Portugal.html",
    rating: 4.1,
    position: [41.14894146929367, -8.611914015640227],
    images: [
      `${bucketBaseUrl}/ro_2548.jpg`,
      `${bucketBaseUrl}/ro_2550.jpg`,
      `${bucketBaseUrl}/ro_3691.jpg`,
      `${bucketBaseUrl}/ro_3695.jpg`,
    ]
  },
  {
    name: "Leongs Legend",
    types: ["Taiwanese", "Dim Sum"],
    address: "39 Gerrard St, London W1D 5QD, United Kingdom",
    website: "http://www.leongslegend.co.uk/",
    rating: 4.6,
    position: [51.51219837825268, -0.13075197516503045],
    images: [
      `${bucketBaseUrl}/leongslegend_4017.jpg`,
      `${bucketBaseUrl}/leongslegend_4018.jpg`,
    ]
  },
  {
    name: "Ramen Makotoya RATHAUS",
    types: ["Ramen", "Japanese"],
    address: "Reichsratsstraße 11, 1010 Wien, Austria",
    website: "http://www.ramen-makotoya.at/",
    rating: 4.6,
    position: [48.214174658392594, 16.358442538757554],
    images: [
      `${bucketBaseUrl}/makotoya_5016.jpg`,
      `${bucketBaseUrl}/makotoya_5015.jpg`,
      `${bucketBaseUrl}/makotoya_5019.jpg`,
    ]
  },
  {
    name: "wagamama covent garden",
    types: ["Ramen", "Japanese"],
    address: "17 Bedford St, London WC2E 9HP, United Kingdom",
    website: "https://www.wagamama.com/restaurants/london/bedford-street-covent-garden",
    rating: 3.9,
    position: [51.51316279977156, -0.12424355957350237],
    images: [
      `${bucketBaseUrl}/wagamama_1244.jpg`,
      `${bucketBaseUrl}/wagamama_1249.jpg`,
    ]
  },
  {
    name: "Arslan Buuz",
    types: ["Dim sum", "Dumplings"],
    address: "Slovákova 8, 602 00 Brno-střed, Czechia",
    website: "https://www.arslanbuuz.cz/",
    rating: 4.7,
    position: [49.20045764794219, 16.60233092420062],
    images: [
      `${bucketBaseUrl}/arslanbuuz_5136.jpg`,
    ]
  },
  {
    name: "DIANDI",
    types: ["Vietnamese", "Asian", "Sushi"],
    address: "nám. Svobody 91/20, 602 00 Brno-střed, Czechia",
    website: "https://diandi.cz/",
    rating: 3.7,
    position: [49.19492422556868, 16.607550849916393],
    images: [
      `${bucketBaseUrl}/diandi_5050.jpg`,
      `${bucketBaseUrl}/diandi_5051.jpg`,
      `${bucketBaseUrl}/diandi_5052.jpg`,
      `${bucketBaseUrl}/diandi_5053.jpg`,
    ]
  },
  {
    name: "Market Restaurant",
    types: ["Pan-Asian", "Dim Sum", "Sushi"],
    address: "Linke Wienzeile 36, 1060 Wien, Austria",
    website: "http://www.market-restaurant.at/",
    rating: 4.2,
    position: [48.19790050539049, 16.360549252980444],
    images: [
      `${bucketBaseUrl}/marketrestaurant_4908.jpg`,
    ]
  },
  {
    name: "Seoul Chicken",
    types: ["Korean", "Fried Chicken"],
    address: "Praça do Comércio 88, 3000-179 Coimbra, Portugal",
    website: "https://seoulchicken.eatbu.com/?lang=en",
    rating: 4.2,
    position: [40.20936666753622, -8.42909226957717],
    images: [
      `${bucketBaseUrl}/seoulchicken_3873.jpg`,
      `${bucketBaseUrl}/seoulchicken_3875.jpg`,
      `${bucketBaseUrl}/seoulchicken_3878.jpg`,
    ]
  }
]

const italian: Restaurant[] = [
  {
    name: "Pizzeria & Vermuteria L' Antica Napoli SL",
    types: ["Italian", "Pizza"],
    address: "C/ de la Concòrdia, 53, 08004 Barcelona, Spain",
    website: "https://www.facebook.com/watch/PizzeriaLanticaNapoli/",
    rating: 4.8,
    position: [41.372740121728086, 2.1587960613731183],
    images: [
      `${bucketBaseUrl}/anticanapoli_2277.jpg`,
      `${bucketBaseUrl}/anticanapoli_2278.jpg`,
    ]
  },
  {
    name: "Casanostra",
    types: ["Italian", "Pizza", "Pasta"],
    address: "Tv. do Poço da Cidade 60, 1200-334 Lisboa, Portugal",
    website: "https://www.thefork.pt/restaurante/casanostra-r461795?cc=18174-54f",
    rating: 4.0,
    position: [38.712538561474126, -9.145145873374128],
    images: [
      `${bucketBaseUrl}/casanostra_0942.jpg`,
      `${bucketBaseUrl}/casanostra_0943.jpg`,
    ]
  },
  {
    name: "Sale&Dolce",
    types: ["Italian", "Pizza", "Pasta"],
    address: "R. de Sao Paulo 1, 4700-042 Braga, Portugal",
    website: "https://saledolce.eatbu.com/",
    rating: 3.6,
    position: [41.54841091259618, -8.427569457958027],
    images: [
      `${bucketBaseUrl}/saledolce_1107.jpg`,
      `${bucketBaseUrl}/saledolce_1112.jpg`,
    ]
  },
  {
    name: "A L’Angolo",
    types: ["Italian", "Pizza", "Pasta"],
    address: "Rue du Marché aux Poulets 2, 1000 Bruxelles, Belgium",
    website: "https://cdn0.centralappstatic.com/file/place-12640-innnweyocx.pdf",
    rating: 3.9,
    position: [50.849530507500184, 4.349848067031891],
    images: [
      `${bucketBaseUrl}/alangolo_4258.jpg`,
    ]
  },
  {
    name: "Gusto Pizza by Gusto DiVino",
    types: ["Italian", "Pizza"],
    address: "R. Maestro David de Sousa 99A, 3080-079 Figueira da Foz, Portugal",
    website: "http://www.gustopizza.pt/",
    rating: 4.8,
    position: [40.150982083540306, -8.865948274421342],
    images: [
      `${bucketBaseUrl}/gustopizza_4854.jpg`,
    ]
  },
  {
    name: "Mamma Mia",
    types: ["Italian", "Pizza", "Pasta"],
    address: "Praceta Amândio Ferreira Pinto 8 10, 4710-074 Braga",
    website: "http://ristorante-mammamia.pt/",
    rating: 3.0,
    position: [41.56905030118558, -8.386247825872683],
    images: [
      `${bucketBaseUrl}/mammamia_4883.jpg`,
      `${bucketBaseUrl}/mammamia_4884.jpg`,
      `${bucketBaseUrl}/mammamia_4885.jpg`,
      `${bucketBaseUrl}/mammamia_4886.jpg`,
    ]
  },
  {
    name: "Joe's Pizza",
    types: ["Italian", "Pizza"],
    address: "Av. de São Lourenço 86, 4705-444 Celeirós, Portugal",
    website: "https://www.facebook.com/joespizzaCeleiros",
    rating: 4.1,
    position: [41.51360865652946, -8.450963909729941],
    images: [
      `${bucketBaseUrl}/joespizza_4865.jpg`,
    ]
  },
  {
    name: "Forneria da villa",
    types: ["Italian", "Pizza", "Pasta"],
    address: "R. da Indústria, 4805-270 Ponte, Portugal",
    website: "https://www.thefork.pt/restaurante/forneria-da-villa-r733529?cc=18174-54f",
    rating: 4.4,
    position: [41.47560960439733, -8.332615779214917],
    images: [
      `${bucketBaseUrl}/forneriadavilla_2715.jpg`,
      `${bucketBaseUrl}/forneriadavilla_2717.jpg`,
      `${bucketBaseUrl}/forneriadavilla_2718.jpg`,
      `${bucketBaseUrl}/forneriadavilla_2720.jpg`,
      `${bucketBaseUrl}/forneriadavilla_4793.jpg`,
      `${bucketBaseUrl}/forneriadavilla_4795.jpg`,
    ]
  },
  {
    name: "La Piola",
    types: ["Italian", "Pizza", "Pasta"],
    address: "R. Dom Afonso Henriques 33, 4700-030 Braga, Portugal",
    website: "https://www.omeumenu.pt/menu/0e6a6e99-b6ed-4130-9988-f44fdc9e8025",
    rating: 4.2,
    position: [41.54918720451603, -8.427533516680867],
    images: [
      `${bucketBaseUrl}/lapiola_3617.jpg`,
      `${bucketBaseUrl}/lapiola_3618.jpg`,
    ]
  }
]

const others: Restaurant[] = [
  {
    name: "Inato Bistrô",
    types: ["Portuguese", "European", "Fine Dining"],
    address: "Praça do Município Nº7, 4700-435 Braga, Portugal",
    website: "https://www.inatobistro.pt/",
    rating: 4.1,
    position: [41.55076, -8.42750],
    images: [
      `${bucketBaseUrl}/inato_4892.jpg`,
      `${bucketBaseUrl}/inato_4890.jpg`,
      `${bucketBaseUrl}/inato_4891.jpg`,
      `${bucketBaseUrl}/inato_4889.jpg`,
    ]
  },
  {
    name: "O Filho da Mãe",
    types: ["Latin-American"],
    address: "Rua D.Afonso Henriques 25, Braga, Portugal",
    website: "https://www.facebook.com/ofilhodamaerestaurante/",
    rating: 4.1,
    position: [41.54885, -8.42792],
    images: [
      `${bucketBaseUrl}/filhodamae_4379.jpg`,
      `${bucketBaseUrl}/filhodamae_4380.jpg`,
      `${bucketBaseUrl}/filhodamae_4382.jpg`,
      `${bucketBaseUrl}/filhodamae_4384.jpg`,
      `${bucketBaseUrl}/filhodamae_4387.jpg`,
    ]
  },
  {
    name: "El Güero",
    types: ["Mexican"],
    address: "Rua Dom Afonso Henriques 64, Braga 4700-030 Portugal",
    website: "https://www.tripadvisor.com/Restaurant_Review-g189171-d25414277-Reviews-El_Guero-Braga_Braga_District_Northern_Portugal.html",
    rating: 3.9,
    position: [41.54896, -8.42728],
    images: [
      `${bucketBaseUrl}/elguero_4798.jpg`,
      `${bucketBaseUrl}/elguero_4800.jpg`,
      `${bucketBaseUrl}/elguero_4803.jpg`,
      `${bucketBaseUrl}/elguero_4806.jpg`,
    ]
  },
  {
    name: "Partilha Gastrobar",
    types: ["Portuguese", "European"],
    address: "R. Dom Frei Caetano Brandão 95, 4700-031 Braga, Portugal",
    website: "https://uqr.to/1858i",
    rating: 4.8,
    position: [41.55018688455191, -8.428478746316188],
    images: [
      `${bucketBaseUrl}/partilha_1349.jpg`,
      `${bucketBaseUrl}/partilha_1350.jpg`,
      `${bucketBaseUrl}/partilha_1356.jpg`,
      `${bucketBaseUrl}/partilha_1363.jpg`,
      `${bucketBaseUrl}/partilha_1364.jpg`,
      `${bucketBaseUrl}/partilha_1366.jpg`,
      `${bucketBaseUrl}/partilha_2646.jpg`,
      `${bucketBaseUrl}/partilha_2648.jpg`,
      `${bucketBaseUrl}/partilha_2652.jpg`,
    ]
  },
  {
    name: "Basílio",
    types: ["Breakfast", "Brunch"],
    address: "R. dos Bacalhoeiros 111, 1100-068 Lisboa, Portugal",
    website: "https://www.thefork.pt/restaurante/basilio-r662851?cc=18174-54f",
    rating: 3.4,
    position: [38.709232052309794, -9.13399097337424],
    images: [
      `${bucketBaseUrl}/basilio_0838.jpg`,
      `${bucketBaseUrl}/basilio_0841.jpg`,
    ]
  },
  {
    name: "Tappas Caffé",
    types: ["Portuguese", "Francesinha"],
    address: "R. Guilherme Gomes Fernandes 204, 4400-175 Vila Nova de Gaia, Portugal",
    website: "http://www.tappascaffe.pt/",
    rating: 4.2,
    position: [41.14073735809855, -8.613120762983689],
    images: [
      `${bucketBaseUrl}/tappascaffe_0596.jpg`,
    ]
  },
  {
    name: "Kianda",
    types: ["African", "Angolan"],
    address: "R. Dom Frei Caetano Brandão n.º 120, 4700-031 Braga, Portugal",
    website: "https://www.thefork.pt/restaurante/restaurante-kianda-r540063?cc=18174-54f",
    rating: 3.7,
    position: [41.550201442939915, -8.42863145795796],
    images: [
      `${bucketBaseUrl}/kianda_1458.jpg`,
      `${bucketBaseUrl}/kianda_2614.jpg`,
      `${bucketBaseUrl}/kianda_2621.jpg`,
      `${bucketBaseUrl}/kianda_2623.jpg`,
    ]
  },
  {
    name: "CactusCat Bar",
    types: ["Plant-based", "Vegan", "International"],
    address: "C/ de Valldonzella, 52, 08001 Barcelona, Spain",
    website: "http://www.cactuscatreservas.com/",
    rating: 3.8,
    position: [41.383296318960525, 2.1646239555301086],
    images: [
      `${bucketBaseUrl}/cactusbar_2255.jpg`,
      `${bucketBaseUrl}/cactusbar_2256.jpg`,
    ]
  },
  {
    name: "Colom Restaurant",
    types: ["Spanish", "Mediterranean"],
    address: "Carrer dels Escudellers, 33, 08002 Barcelona, Spain",
    website: "https://www.facebook.com/pages/Colom-Restaurant/2026230204369890",
    rating: 4.0,
    position: [41.38004597852741, 2.1764999978584094],
    images: [
      `${bucketBaseUrl}/colom_2219.jpg`,
    ]
  },
  {
    name: "Gelataria Mona Lisa",
    types: ["Ice Cream", "Dessert"],
    address: "Av. dos Banhos 252, 4490-407 Póvoa de Varzim, Portugal",
    website: "https://www.tripadvisor.pt/Restaurant_Review-g189181-d5981294-Reviews-Gelateria_Italiana_Mona_Lisa-Povoa_de_Varzim_Porto_District_Northern_Portugal.html",
    rating: 4.2,
    position: [41.39194490866414, -8.77043341457746],
    images: [
      `${bucketBaseUrl}/gelatariamonalisa_3630.jpg`,
      `${bucketBaseUrl}/gelatariamonalisa_3631.jpg`,
    ]
  },
  {
    name: "Praça GastroPub",
    types: ["Burger", "Portuguese"],
    address: "Praça Miguel Bombarda 5, 3130-257 Soure, Portugal",
    website: "https://www.instagram.com/pracagastropub/",
    rating: 4.2,
    position: [40.05822724206574, -8.626161689770194],
    images: [
      `${bucketBaseUrl}/pracagastropub_4849.jpg`,
      `${bucketBaseUrl}/pracagastropub_4850.jpg`,
    ]
  },
  {
    name: "U Tomana",
    types: ["Czech", "Traditional", "Brewery"],
    address: "nám. Svobody 22, 602 00 Brno-střed, Czechia",
    website: "http://www.utomana.cz/",
    rating: 4.4,
    position: [49.195943525670664, 16.60727230461722],
    images: [
      `${bucketBaseUrl}/utomana_5042.jpg`,
      `${bucketBaseUrl}/utomana_5043.jpg`,
    ]
  },
  {
    name: "Restaurant Mozart",
    types: ["Ribs", "Buffet", "Grill"],
    address: "Pt Rue des Bouchers 18/24, 1000 Bruxelles, Belgium",
    website: "http://mozart-resto.be/",
    rating: 3.9,
    position: [50.84834106180446, 4.353454336616686],
    images: [
      `${bucketBaseUrl}/restaurantmozart_4250.jpg`,
    ]
  },
  {
    name: "COSMOPOLIS GRILL",
    types: ["Greek", "Mediterranean"],
    address: "Kozí 5, 602 00 Brno-střed, Czechia",
    website: "https://www.cosmopolisgrill.cz/",
    rating: 4.0,
    position: [49.19671493774963, 16.609638335310628],
    images: [
      `${bucketBaseUrl}/cosmopolis_5063.jpg`,
      `${bucketBaseUrl}/cosmopolis_5064.jpg`,
      `${bucketBaseUrl}/cosmopolis_5061.jpg`,
    ]
  },
  {
    name: "William Thomas Artisan Bakery",
    types: ["Bakery", "French"],
    address: "Josefská 492/2, 602 00 Brno-střed-Brno-město, Czechia",
    website: "http://www.wtbakery.cz/",
    rating: 4.5,
    position: [49.193558535262234, 16.611609995364113],
    images: [
      `${bucketBaseUrl}/williamthomas_5145.jpg`,
    ]
  },
  {
    name: "Mikrofarma Masný trh",
    types: ["Burger", "Butcher"],
    address: "Zelný trh 10, 602 00 Brno-střed, Czechia",
    website: "http://www.mikrofarma.cz/",
    rating: 4.3,
    position: [49.192238165742125, 16.607719042344687],
    images: [
      `${bucketBaseUrl}/mikrofarma_5035.jpg`,
    ]
  },
  {
    name: "Café Schwarzenberg",
    types: ["Cafe", "Austrian"],
    address: "Kärntner Ring 17, 1010 Wien, Austria",
    website: "https://www.cafe-schwarzenberg.at/",
    rating: 4.3,
    position: [48.20222717702701, 16.373665807410518],
    images: [
      `${bucketBaseUrl}/schwarzenberg_4936.jpg`,
    ]
  },
  {
    name: "The Breakfast Club London Bridge",
    types: ["Breakfast", "Brunch"],
    address: "11 Southwark St, London SE1 1RQ, United Kingdom",
    website: "http://www.thebreakfastclubcafes.com/locations/london-bridge/",
    rating: 3.9,
    position: [51.50473345709885, -0.09135703148645392],
    images: [
      `${bucketBaseUrl}/thebreakfastclub_4066.jpg`,
    ]
  },
  {
    name: "Burger and Beyond Borough Yards",
    types: ["Burger", "American"],
    address: "Arch 231, Borough Yards, Bank End, London SE1 9FJ, United Kingdom",
    website: "https://www.burgerandbeyond.co.uk/",
    rating: 4.4,
    position: [51.50741943154522, -0.09288013656854298],
    images: [
      `${bucketBaseUrl}/burgerbeyond_4085.jpg`,
    ]
  },
  {
    name: "Bäckerei Cafe Felzl",
    types: ["Bakery", "Cafe"],
    address: "Lerchenfelder Str. 99/101, 1070 Wien, Austria",
    website: "http://www.felzl.at/",
    rating: 4.1,
    position: [48.208717897934676, 16.34382029220155],
    images: [
      `${bucketBaseUrl}/felzl_5013.jpg`,
    ]
  }
]

export const restaurantData: Restaurant[] = [
  ...sushis,
  ...asian,
  ...italian,
  ...others,
];
