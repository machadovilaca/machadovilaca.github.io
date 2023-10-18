import { Restaurant } from "@app/FoodMap/FoodMap";

const bucketBaseUrl = "https://pub-567bc98a830042fbb2c7a6f479f9de3d.r2.dev"

const sushis: Restaurant[] = [
  {
    key: "Michizaki",
    name: "Michizaki",
    types: ["Japanese", "Sushi"],
    address: {
      street: "Rua Dom Frei Caetano Brandão, 169, 4700-031",
      city: "Braga",
      country: "Portugal"
    },
    website: "https://www.facebook.com/michizaki.braga/",
    googleMaps: "https://maps.app.goo.gl/C4wG7ZVNCbPQrHT36",
    rating: 4.7,
    position: [41.5484696893659, -8.428208906909544],
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
    key: "AlmadEca",
    name: "Alma d'Eça",
    types: ["Italian", "Japanese", "Fusion", "Sushi"],
    address: {
      street: "R. Eça de Queirós 28, 4700-315",
      city: "Braga",
      country: "Portugal"
    },
    website: "https://almadeca.eatbu.com/",
    googleMaps: "https://maps.app.goo.gl/jNZXvqeiPFf2jE6NA",
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
    key: "Kanji",
    name: "Kanji Restaurant Garden & Bar",
    types: ["Japanese", "Sushi", "Fusion"],
    address: {
      street: "R. João Lopes de Faria 71, 4800-414",
      city: "Guimarães",
      country: "Portugal"
    },
    website: "https://www.tripadvisor.pt/Restaurant_Review-g189174-d20944018-Reviews-Kanji_Restaurant_Garden_Bar-Guimaraes_Braga_District_Northern_Portugal.html",
    googleMaps: "https://maps.app.goo.gl/c9SQtyq1cxqJfBbBA",
    rating: 4.1,
    position: [41.44431046042532, -8.293703813781669],
    images: [
      `${bucketBaseUrl}/kanji_2480.jpg`,
      `${bucketBaseUrl}/kanji_2483.jpg`,
      `${bucketBaseUrl}/kanji_2487.jpg`,
    ]
  },
  {
    key: "Nikko",
    name: "Nikko",
    types: ["Japanese", "Sushi", "Fusion"],
    address: {
      street: "R. Dom Frei Caetano Brandão 177, 4700-031",
      city: "Braga",
      country: "Portugal"
    },
    website: "https://www.facebook.com/Nikko-773733622771533/",
    googleMaps: "https://maps.app.goo.gl/3XXKKcZBkCeKCyAG8",
    rating: 4.1,
    position: [41.54850345951748, -8.428248089697492],
    images: [
      `${bucketBaseUrl}/nikko_3725.jpg`,
      `${bucketBaseUrl}/nikko_3728.jpg`,
      `${bucketBaseUrl}/nikko_5428.jpg`,
      `${bucketBaseUrl}/nikko_5430.jpg`,
      `${bucketBaseUrl}/nikko_3730.jpg`,
      `${bucketBaseUrl}/nikko_3731.jpg`,
    ]
  },
  {
    key: "Omakase",
    name: "Omakase Braga",
    types: ["Japanese", "Sushi"],
    address: {
      street: "R. do Raio 6, 4710-925",
      city: "Braga",
      country: "Portugal"
    },
    website: "https://omakasebraga.business.site",
    googleMaps: "https://maps.app.goo.gl/h54TzPKPkqxFsMd58",
    rating: 4.9,
    position: [41.5511421202459, -8.4181537201536],
    images: [
      `${bucketBaseUrl}/omakasebraga_5184.jpg`,
      `${bucketBaseUrl}/omakasebraga_5181.jpg`,
      `${bucketBaseUrl}/omakasebraga_5186.jpg`,
    ]
  }
]

const asian: Restaurant[] = [
  {
    key: "RO",
    name: "RO",
    types: ["Ramen", "Japanese"],
    address: {
      street: "R. de Ramalho Ortigão 61, 4000-407",
      city: "Porto",
      country: "Portugal"
    },
    website: "https://www.tripadvisor.com/Restaurant_Review-g189180-d11894384-Reviews-Ro-Porto_Porto_District_Northern_Portugal.html",
    googleMaps: "https://maps.app.goo.gl/6Z5ih6t2BsfnQDS38",
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
    key: "LeongsLegend",
    name: "Leongs Legend",
    types: ["Taiwanese", "Dim Sum", "Dumplings"],
    address: {
      street: "39 Gerrard St, W1D 5QD",
      city: "London",
      country: "United Kingdom"
    },
    website: "https://chinatown.co.uk/en/restaurant/leongs-legend/",
    googleMaps: "https://maps.app.goo.gl/RhiUc2s4CocAxNQMA",
    rating: 4.6,
    position: [51.51219837825268, -0.13075197516503045],
    images: [
      `${bucketBaseUrl}/leongslegend_4017.jpg`,
      `${bucketBaseUrl}/leongslegend_4018.jpg`,
    ]
  },
  {
    key: 'RamenMakotoyaRATHAUS',
    name: "Ramen Makotoya RATHAUS",
    types: ["Ramen", "Japanese"],
    address: {
      street: "Reichsratsstraße 11, 1010",
      city: "Vienna",
      country: "Austria"
    },
    website: "https://www.ramen-makotoya.at/",
    googleMaps: "https://maps.app.goo.gl/LvrtAuPukumTetjw9",
    rating: 4.6,
    position: [48.214174658392594, 16.358442538757554],
    images: [
      `${bucketBaseUrl}/makotoya_5016.jpg`,
      `${bucketBaseUrl}/makotoya_5015.jpg`,
      `${bucketBaseUrl}/makotoya_5019.jpg`,
    ]
  },
  {
    key: "Wagamama-CoventGarden",
    name: "wagamama covent garden",
    types: ["Ramen", "Japanese"],
    address: {
      street: "17 Bedford St, WC2E 9HP",
      city: "London",
      country: "United Kingdom"
    },
    website: "https://www.wagamama.com/restaurants/london/bedford-street-covent-garden",
    googleMaps: "https://maps.app.goo.gl/wXampWYuvSivLW1b8",
    rating: 3.9,
    position: [51.51316279977156, -0.12424355957350237],
    images: [
      `${bucketBaseUrl}/wagamama_1244.jpg`,
      `${bucketBaseUrl}/wagamama_1249.jpg`,
    ]
  },
  {
    key: "ArslanBuuz",
    name: "Arslan Buuz",
    types: ["Dim Sum", "Dumplings", "Asian"],
    address: {
      street: "Slovákova 8, 602 00",
      city: "Brno",
      country: "Czechia"
    },
    website: "https://www.arslanbuuz.cz/",
    googleMaps: "https://maps.app.goo.gl/WRKdqRHt7PB8rQSM6",
    rating: 4.7,
    position: [49.20045764794219, 16.60233092420062],
    images: [
      `${bucketBaseUrl}/arslanbuuz_5136.jpg`,
    ]
  },
  {
    key: "DIANDI",
    name: "DIANDI",
    types: ["Vietnamese", "Asian", "Sushi"],
    address: {
      street: "nám. Svobody 91/20, 602 00",
      city: "Brno",
      country: "Czechia"
    },
    website: "https://diandi.cz/",
    googleMaps: "https://maps.app.goo.gl/MmEnvipYx3JPDip26",
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
    key: "MarketRestaurant",
    name: "Market Restaurant",
    types: ["Asian", "Dim Sum", "Dumplings", "Sushi"],
    address: {
      street: "Linke Viennazeile 36, 1060",
      city: "Vienna",
      country: "Austria"
    },
    website: "https://www.market-restaurant.at/",
    googleMaps: "https://maps.app.goo.gl/cLUZ4bmqsyMucgY38",
    rating: 4.2,
    position: [48.19790050539049, 16.360549252980444],
    images: [
      `${bucketBaseUrl}/marketrestaurant_4908.jpg`,
    ]
  },
  {
    key: "SeoulChicken",
    name: "Seoul Chicken",
    types: ["Korean", "Fried Chicken", "Asian"],
    address: {
      street: "Praça do Comércio 88, 3000-179",
      city: "Coimbra",
      country: "Portugal"
    },
    website: "https://seoulchicken.eatbu.com/?lang=en",
    googleMaps: "https://maps.app.goo.gl/Kao3UmWf2zszjazY7",
    rating: 4.2,
    position: [40.20936666753622, -8.42909226957717],
    images: [
      `${bucketBaseUrl}/seoulchicken_3873.jpg`,
      `${bucketBaseUrl}/seoulchicken_3875.jpg`,
      `${bucketBaseUrl}/seoulchicken_3878.jpg`,
    ]
  },
  {
    key: "RamenBreak",
    name: "Ramen Break",
    types: ["Ramen", "Japanese"],
    address: {
      street: "Praça Conde de Agrolongo 180, 4700-312",
      city: "Braga",
      country: "Portugal"
    },
    website: "https://www.instagram.com/ramenbreak",
    googleMaps: "https://maps.app.goo.gl/wYeEzjcDprMcTepEA",
    rating: 4.4,
    position: [41.552816077695226, -8.426455275828902],
    images: [
      `${bucketBaseUrl}/ramenbreak_6137.jpg`,
      `${bucketBaseUrl}/ramenbreak_6139.jpg`,
    ]
  },
  {
    key: "AKAI",
    name: "AKAI",
    types: ["Japanese", "Sushi"],
    address: {
      street: "R. Brg. Pinho Freire 169, 3880-342",
      city: "Ovar",
      country: "Portugal"
    },
    website: "https://akaistreetfood.wixsite.com/akai",
    googleMaps: "https://maps.app.goo.gl/ifnWrpZGwnXhAxdH6",
    rating: 4.6,
    position: [40.87529034876151, -8.665243182836386],
    images: [
      `${bucketBaseUrl}/akai_5567.jpg`,
      `${bucketBaseUrl}/akai_5568.jpg`,
      `${bucketBaseUrl}/akai_5569.jpg`,
      `${bucketBaseUrl}/akai_5570.jpg`,
      `${bucketBaseUrl}/akai_5565.jpg`,
      `${bucketBaseUrl}/akai_5573.jpg`,
    ]
  }
]

const italian: Restaurant[] = [
  {
    key: "AnticaNapoliSLBarcelona",
    name: "Pizzeria & Vermuteria L' Antica Napoli SL",
    types: ["Italian", "Pizza"],
    address: {
      street: "C/ de la Concòrdia, 53, 08004",
      city: "Barcelona",
      country: "Spain"
    },
    website: "https://www.facebook.com/watch/PizzeriaLanticaNapoli/",
    googleMaps: "https://maps.app.goo.gl/pR4tV5FMTyRmHQwm6",
    rating: 4.8,
    position: [41.372740121728086, 2.1587960613731183],
    images: [
      `${bucketBaseUrl}/anticanapoli_2277.jpg`,
      `${bucketBaseUrl}/anticanapoli_2278.jpg`,
    ]
  },
  {
    key: "Casanostra",
    name: "Casanostra",
    types: ["Italian", "Pizza", "Pasta"],
    address: {
      street: "Tv. do Poço da Cidade 60, 1200-334",
      city: "Lisboa",
      country: "Portugal"
    },
    website: "https://www.thefork.pt/restaurante/casanostra-r461795?cc=18174-54f",
    googleMaps: "https://maps.app.goo.gl/bQ1XeZUQjewH37cLA",
    rating: 4.0,
    position: [38.712538561474126, -9.145145873374128],
    images: [
      `${bucketBaseUrl}/casanostra_0942.jpg`,
      `${bucketBaseUrl}/casanostra_0943.jpg`,
    ]
  },
  {
    key: "SaleDolce",
    name: "Sale&Dolce",
    types: ["Italian", "Pizza", "Pasta"],
    address: {
      street: "R. de Sao Paulo 1, 4700-042",
      city: "Braga",
      country: "Portugal"
    },
    website: "https://saledolce.eatbu.com/",
    googleMaps: "https://maps.app.goo.gl/ybu8kLjAaHrN1dXW7",
    rating: 3.6,
    position: [41.54841091259618, -8.427569457958027],
    images: [
      `${bucketBaseUrl}/saledolce_1107.jpg`,
      `${bucketBaseUrl}/saledolce_1112.jpg`,
    ]
  },
  {
    key: "ALAngolo",
    name: "A L’Angolo",
    types: ["Italian", "Pizza", "Pasta"],
    address: {
      street: "Rue du Marché aux Poulets 2, 1000",
      city: "Brussels",
      country: "Belgium"
    },
    website: "https://alangolo.be/en",
    googleMaps: "https://maps.app.goo.gl/mRnK1SNHhkQ2eJog8",
    rating: 3.9,
    position: [50.849530507500184, 4.349848067031891],
    images: [
      `${bucketBaseUrl}/alangolo_4258.jpg`,
    ]
  },
  {
    key: "GustoPizza",
    name: "Gusto Pizza by Gusto DiVino",
    types: ["Italian", "Pizza"],
    address: {
      street: "R. Maestro David de Sousa 99A, 3080-079",
      city: "Figueira da Foz",
      country: "Portugal"
    },
    website: "https://www.gustopizza.pt/",
    googleMaps: "https://maps.app.goo.gl/zH2kMSG9fjmNoxU56",
    rating: 4.8,
    position: [40.150982083540306, -8.865948274421342],
    images: [
      `${bucketBaseUrl}/gustopizza_4854.jpg`,
    ]
  },
  {
    key: "PizzeriaMammaMia",
    name: "Mamma Mia",
    types: ["Italian", "Pizza", "Pasta"],
    address: {
      street: "Praceta Amândio Ferreira Pinto 8 10, 4710-074",
      city: "Braga",
      country: "Portugal"
    },
    website: "http://ristorante-mammamia.pt/",
    googleMaps: "https://maps.app.goo.gl/XynhrMusBhXTB6pZ8",
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
    key: "JoesPizza",
    name: "Joe's Pizza",
    types: ["Italian", "Pizza"],
    address: {
      street: "Av. de São Lourenço 86, 4705-444",
      city: "Braga",
      country: "Portugal"
    },
    website: "https://www.facebook.com/joespizzaCeleiros",
    googleMaps: "https://maps.app.goo.gl/bEDpqbQrdBwmBu8X6",
    rating: 4.1,
    position: [41.51360865652946, -8.450963909729941],
    images: [
      `${bucketBaseUrl}/joespizza_4865.jpg`,
    ]
  },
  {
    key: "ForneriaDaVilla",
    name: "Forneria da Villa",
    types: ["Italian", "Pizza", "Pasta"],
    address: {
      street: "R. da Indústria, 4805-270",
      city: "Ponte",
      country: "Portugal"
    },
    website: "https://www.thefork.pt/restaurante/forneria-da-villa-r733529?cc=18174-54f",
    googleMaps: "https://maps.app.goo.gl/URV31qQ1hatL3HeY6",
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
    key: "LaPiola",
    name: "La Piola",
    types: ["Italian", "Pizza", "Pasta"],
    address: {
      street: "R. Dom Afonso Henriques 33, 4700-030",
      city: "Braga",
      country: "Portugal"
    },
    website: "https://www.omeumenu.pt/menu/0e6a6e99-b6ed-4130-9988-f44fdc9e8025",
    googleMaps: "https://maps.app.goo.gl/L269Sog6b2HQepoeA",
    rating: 4.2,
    position: [41.54918720451603, -8.427533516680867],
    images: [
      `${bucketBaseUrl}/lapiola_3617.jpg`,
      `${bucketBaseUrl}/lapiola_3618.jpg`,
    ]
  },
  {
    key: "IlFiumeNogueiro",
    name: "Il Fiume Nogueiró",
    types: ["Italian", "Pizza", "Pasta"],
    address: {
      street: "Rua professor, R. Dr. Carlos Lloyd Braga 13, 4715-319",
      city: "Braga",
      country: "Portugal"
    },
    website: "https://www.facebook.com/IlFiumeNogueiro/",
    googleMaps: "https://maps.app.goo.gl/PQag7PZnpMLwpaPE8",
    rating: 4.0,
    position: [41.55294427444706, -8.401172545768592],
    images: [
      `${bucketBaseUrl}/ilfiumenogueiro_2735.jpg`,
      `${bucketBaseUrl}/ilfiumenogueiro_2737.jpg`,
    ]
  },
  {
    key: "LaPiazzaAmsterdam",
    name: "La Piazza Amsterdam",
    types: ["Italian", "Pizza", "Pasta"],
    address: {
      street: "Paleisstraat 3, 1012 RB",
      city: "Amsterdam",
      country: "Netherlands"
    },
    website: "https://pizzerialapiazza.nl/",
    googleMaps: "https://maps.app.goo.gl/iReE9SoqjagSqwXC8",
    rating: 3.7,
    position: [52.37278477631322, 4.891644639834464],
    images: [
      `${bucketBaseUrl}/lapiazzaamsterdam_3466.jpg`,
      `${bucketBaseUrl}/lapiazzaamsterdam_3468.jpg`,
      `${bucketBaseUrl}/lapiazzaamsterdam_3471.jpg`,
    ]
  },
  {
    key: "RistorantePeppino",
    name: "Ristorante Italiano Peppino",
    types: ["Italian", "Pizza", "Pasta"],
    address: {
      street: "Leidsekruisstraat 30-32, 1017 RJ",
      city: "Amsterdam",
      country: "Netherlands"
    },
    website: "https://peppinoamsterdam.nl/",
    googleMaps: "Ristorante Italiano Peppino",
    rating: 3.6,
    position: [52.36359981255532, 4.884562666820148],
    images: [
      `${bucketBaseUrl}/ristorantepeppino_3561.jpg`,
      `${bucketBaseUrl}/ristorantepeppino_3563.jpg`,
    ]
  },
  {
    key: "LaPorta",
    name: "La Porta",
    types: ["Italian", "Pizza", "Pasta"],
    address: {
      street: "R. Dom Diogo de Sousa 19, 4700-421",
      city: "Braga",
      country: "Portugal"
    },
    website: "https://www.thefork.pt/restaurante/la-porta-braga-r568401",
    googleMaps: "https://maps.app.goo.gl/tNf34Z9hnDkT9qwC7",
    rating: 3.8,
    position: [41.55052635449664, -8.429036289320154],
    images: [
      `${bucketBaseUrl}/laporta_4408.jpg`,
    ]
  },
  {
    key: "CaffeItaly",
    name: "Caffé Italy",
    types: ["Italian", "Pizza", "Pasta"],
    address: {
      street: "Praça da República, 4710-245",
      city: "Braga",
      country: "Portugal"
    },
    website: "https://www.thefork.pt/restaurante/caffe-italy-r572183?cc=18174-54f",
    googleMaps: "https://maps.app.goo.gl/PRMU9CDETPnjnHd87",
    rating: 4.0,
    position: [41.55171466448018, -8.423731248846567],
    images: [
      `${bucketBaseUrl}/caffeitaly_3716.jpg`,
      `${bucketBaseUrl}/caffeitaly_3718.jpg`,
      `${bucketBaseUrl}/caffeitaly_3721.jpg`,
    ]
  }
]

const francesinha: Restaurant[] = [
  {
    key: "TappasCaffe",
    name: "Tappas Caffé",
    types: ["Portuguese", "Francesinha", "Regional"],
    address: {
      street: "R. Dr. António Granjo 549, 4440-452",
      city: "Vila Nova de Gaia",
      country: "Portugal"
    },
    website: "https://www.tappascaffe.pt/tappas-caffe-candal/",
    googleMaps: "https://maps.app.goo.gl/kXbm943fzafxvRSx7",
    rating: 4.2,
    position: [41.13502922129823, -8.624830129133178],
    images: [
      `${bucketBaseUrl}/tappascaffe_0596.jpg`,
    ]
  },
  {
    key: "Ohlala",
    name: "Ohlálá",
    types: ["Francesinha", "Portuguese"],
    address: {
      street: "Av. Dom João II 97, 4715-304 Nogueiró",
      city: "Braga",
      country: "Portugal"
    },
    website: "https://www.facebook.com/ohlalabraga/",
    googleMaps: "https://maps.app.goo.gl/doLJRPjXSGDTiS717",
    rating: 3.8,
    position: [41.55216936352001, -8.395142931647566],
    images: [
      `${bucketBaseUrl}/ohlala_3734.jpg`,
    ]
  }
]

const others: Restaurant[] = [
  {
    key: "InatoBistro",
    name: "Inato Bistrô",
    types: ["Portuguese", "European", "Fine Dining"],
    address: {
      street: "Praça do Município Nº7, 4700-435",
      city: "Braga",
      country: "Portugal"
    },
    website: "https://www.inatobistro.pt/",
    googleMaps: "https://maps.app.goo.gl/KH2pJdLEBRpsNEw87",
    rating: 4.1,
    position: [41.550888078860616, -8.427430900286339],
    images: [
      `${bucketBaseUrl}/inato_4892.jpg`,
      `${bucketBaseUrl}/inato_4890.jpg`,
      `${bucketBaseUrl}/inato_4891.jpg`,
      `${bucketBaseUrl}/inato_4889.jpg`,
    ]
  },
  {
    key: "OFilhoDaMae",
    name: "O_Filho da Mãe",
    types: ["Latin", "American"],
    address: {
      street: "Rua D.Afonso Henriques 25",
      city: "Braga",
      country: "Portugal"
    },
    website: "https://www.facebook.com/ofilhodamaerestaurante/",
    googleMaps: "https://maps.app.goo.gl/NSNbrfcJET9vvfsm9",
    rating: 4.1,
    position: [41.549217492444185, -8.427647002137114],
    images: [
      `${bucketBaseUrl}/filhodamae_4379.jpg`,
      `${bucketBaseUrl}/filhodamae_4380.jpg`,
      `${bucketBaseUrl}/filhodamae_4382.jpg`,
      `${bucketBaseUrl}/filhodamae_4384.jpg`,
      `${bucketBaseUrl}/filhodamae_4387.jpg`,
    ]
  },
  {
    key: "ElGuero",
    name: "El Güero",
    types: ["Mexican"],
    address: {
      street: "Rua Dom Afonso Henriques 64, 4700-030",
      city: "Braga",
      country: "Portugal"
    },
    website: "https://www.tripadvisor.com/Restaurant_Review-g189171-d25414277-Reviews-El_Guero-Braga_Braga_District_Northern_Portugal.html",
    googleMaps: "https://maps.app.goo.gl/XZCEA4FncBPL7nTB7",
    rating: 3.9,
    position: [41.549044623370875, -8.427266159808685],
    images: [
      `${bucketBaseUrl}/elguero_4798.jpg`,
      `${bucketBaseUrl}/elguero_4800.jpg`,
      `${bucketBaseUrl}/elguero_4803.jpg`,
      `${bucketBaseUrl}/elguero_4806.jpg`,
    ]
  },
  {
    key: "PartilhaGastrobar",
    name: "Partilha Gastrobar",
    types: ["Portuguese", "European"],
    address: {
      street: "R. Dom Frei Caetano Brandão 95, 4700-031",
      city: "Braga",
      country: "Portugal"
    },
    website: "https://uqr.to/1858i",
    googleMaps: "https://maps.app.goo.gl/R8M17CSNMxyK9iu97",
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
    key: "Basilio",
    name: "Basílio",
    types: ["Breakfast", "Brunch"],
    address: {
      street: "R. dos Bacalhoeiros 111, 1100-068",
      city: "Lisboa",
      country: "Portugal"
    },
    website: "https://www.thefork.pt/restaurante/basilio-r662851?cc=18174-54f",
    googleMaps: "https://maps.app.goo.gl/88e2zJsuKo6KKd7H8",
    rating: 3.4,
    position: [38.709232052309794, -9.13399097337424],
    images: [
      `${bucketBaseUrl}/basilio_0838.jpg`,
      `${bucketBaseUrl}/basilio_0841.jpg`,
    ]
  },
  {
    key: "Kianda",
    name: "Kianda",
    types: ["African", "Angolan", "Fusion"],
    address: {
      street: "R. Dom Frei Caetano Brandão n.º 120, 4700-031",
      city: "Braga",
      country: "Portugal"
    },
    website: "https://www.thefork.pt/restaurante/restaurante-kianda-r540063?cc=18174-54f",
    googleMaps: "https://maps.app.goo.gl/1aQrp85ybcHMTBsp9",
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
    key: "CactusCatBar",
    name: "CactusCat Bar",
    types: ["Plant-based", "Vegan"],
    address: {
      street: "C/ de Valldonzella, 52, 08001",
      city: "Barcelona",
      country: "Spain"
    },
    website: "https://www.instagram.com/cactuscatbar/",
    googleMaps: "https://maps.app.goo.gl/3QPed5YJwVbKTss58",
    rating: 3.8,
    position: [41.383296318960525, 2.1646239555301086],
    images: [
      `${bucketBaseUrl}/cactusbar_2255.jpg`,
      `${bucketBaseUrl}/cactusbar_2256.jpg`,
    ]
  },
  {
    key: "ColomRestaurant",
    name: "Colom Restaurant",
    types: ["Spanish", "Mediterranean", "Paella"],
    address: {
      street: "Carrer dels Escudellers, 33, 08002",
      city: "Barcelona",
      country: "Spain"
    },
    website: "https://www.facebook.com/pages/Colom-Restaurant/2026230204369890",
    googleMaps: "https://maps.app.goo.gl/28zU6ofUMoK5Rfor6",
    rating: 4.0,
    position: [41.38004597852741, 2.1764999978584094],
    images: [
      `${bucketBaseUrl}/colom_2219.jpg`,
    ]
  },
  {
    key: "GelatariaMonaLisa",
    name: "Gelataria Mona Lisa",
    types: ["Ice Cream", "Dessert"],
    address: {
      street: "Av. dos Banhos 252, 4490-407",
      city: "Póvoa de Varzim",
      country: "Portugal"
    },
    website: "https://www.tripadvisor.pt/Restaurant_Review-g189181-d5981294-Reviews-Gelateria_Italiana_Mona_Lisa-Povoa_de_Varzim_Porto_District_Northern_Portugal.html",
    googleMaps: "https://maps.app.goo.gl/1Hwf4LcnJf64hpYPA",
    rating: 4.2,
    position: [41.39194490866414, -8.77043341457746],
    images: [
      `${bucketBaseUrl}/gelatariamonalisa_3630.jpg`,
      `${bucketBaseUrl}/gelatariamonalisa_3631.jpg`,
    ]
  },
  {
    key: "PracaGastroPub",
    name: "Praça GastroPub",
    types: ["Burger", "Portuguese"],
    address: {
      street: "Praça Miguel Bombarda 5, 3130-257",
      city: "Soure",
      country: "Portugal"
    },
    website: "https://www.instagram.com/pracagastropub/",
    googleMaps: "https://maps.app.goo.gl/UZD1u5TJqqgUYu7a7",
    rating: 4.2,
    position: [40.05822724206574, -8.626161689770194],
    images: [
      `${bucketBaseUrl}/pracagastropub_4849.jpg`,
      `${bucketBaseUrl}/pracagastropub_4850.jpg`,
    ]
  },
  {
    key: "UTomana",
    name: "U Tomana",
    types: ["Czech", "Regional", "Brewery"],
    address: {
      street: "nám. Svobody 22, 602 00",
      city: "Brno",
      country: "Czechia"
    },
    website: "https://www.utomana.cz/",
    googleMaps: "https://maps.app.goo.gl/4PwvB23fpjZDFVLfA",
    rating: 4.4,
    position: [49.195943525670664, 16.60727230461722],
    images: [
      `${bucketBaseUrl}/utomana_5042.jpg`,
      `${bucketBaseUrl}/utomana_5043.jpg`,
    ]
  },
  {
    key: "RestaurantMozart",
    name: "Restaurant Mozart",
    types: ["Ribs", "Buffet", "Grill"],
    address: {
      street: "Pt Rue des Bouchers 18/24, 1000",
      city: "Brussels",
      country: "Belgium"
    },
    website: "https://mozart-resto.be/",
    googleMaps: "https://maps.app.goo.gl/ZAAcK72N9gLnqpGb7",
    rating: 3.9,
    position: [50.84834106180446, 4.353454336616686],
    images: [
      `${bucketBaseUrl}/restaurantmozart_4250.jpg`,
    ]
  },
  {
    key: "COSMOPOLISGRILL",
    name: "COSMOPOLIS GRILL",
    types: ["Greek", "Mediterranean"],
    address: {
      street: "Kozí 5, 602 00",
      city: "Brno",
      country: "Czechia"
    },
    website: "https://www.cosmopolisgrill.cz/",
    googleMaps: "https://maps.app.goo.gl/djAS32RoiheyCgF69",
    rating: 4.0,
    position: [49.19671493774963, 16.609638335310628],
    images: [
      `${bucketBaseUrl}/cosmopolis_5063.jpg`,
      `${bucketBaseUrl}/cosmopolis_5064.jpg`,
      `${bucketBaseUrl}/cosmopolis_5061.jpg`,
    ]
  },
  {
    key: "WilliamThomasArtisanBakery",
    name: "William Thomas Artisan Bakery",
    types: ["Bakery", "French"],
    address: {
      street: "Josefská 492/2, 602 00",
      city: "Brno",
      country: "Czechia"
    },
    website: "https://www.wtbakery.cz/",
    googleMaps: "https://maps.app.goo.gl/WbyQkdhYLuEAtpm9A",
    rating: 4.5,
    position: [49.193558535262234, 16.611609995364113],
    images: [
      `${bucketBaseUrl}/williamthomas_5145.jpg`,
    ]
  },
  {
    key: "MikrofarmaMasnyTrh",
    name: "Mikrofarma Masný trh",
    types: ["Burger"],
    address: {
      street: "Zelný trh 10, 602 00",
      city: "Brno",
      country: "Czechia"
    },
    website: "https://www.mikrofarma.cz/",
    googleMaps: "https://maps.app.goo.gl/gnc3gePFgyMH17cd7",
    rating: 4.3,
    position: [49.192238165742125, 16.607719042344687],
    images: [
      `${bucketBaseUrl}/mikrofarma_5035.jpg`,
    ]
  },
  {
    key: "CafeSchwarzenberg",
    name: "Café Schwarzenberg",
    types: ["Cafe", "Austrian"],
    address: {
      street: "Kärntner Ring 17, 1010",
      city: "Vienna",
      country: "Austria"
    },
    website: "https://www.cafe-schwarzenberg.at/",
    googleMaps: "https://maps.app.goo.gl/wAjCoYYVAoQhEAbM8",
    rating: 4.3,
    position: [48.20222717702701, 16.373665807410518],
    images: [
      `${bucketBaseUrl}/schwarzenberg_4936.jpg`,
    ]
  },
  {
    key: "TheBreakfastClub-LondonBridge",
    name: "The Breakfast Club London Bridge",
    types: ["Breakfast", "Brunch"],
    address: {
      street: "11 Southwark St, SE1 1RQ",
      city: "London",
      country: "United Kingdom"
    },
    website: "https://www.thebreakfastclubcafes.com/locations/london-bridge/",
    googleMaps: "https://maps.app.goo.gl/kcAs3yqqKjUhuJZu5",
    rating: 3.9,
    position: [51.50473345709885, -0.09135703148645392],
    images: [
      `${bucketBaseUrl}/thebreakfastclub_4066.jpg`,
    ]
  },
  {
    key: "BurgerandBeyond-BoroughYards",
    name: "Burger and Beyond Borough Yards",
    types: ["Burger"],
    address: {
      street: "Arch 231, Borough Yards, Bank End, SE1 9FJ",
      city: "London",
      country: "United Kingdom"
    },
    website: "https://www.burgerandbeyond.co.uk/",
    googleMaps: "https://maps.app.goo.gl/EzjZjX7sBqkdLMyRA",
    rating: 4.4,
    position: [51.50741943154522, -0.09288013656854298],
    images: [
      `${bucketBaseUrl}/burgerbeyond_4085.jpg`,
    ]
  },
  {
    key: "BackereiCafeFelzl",
    name: "Bäckerei Cafe Felzl",
    types: ["Bakery", "Cafe"],
    address: {
      street: "Lerchenfelder Str. 99/101, 1070",
      city: "Vienna",
      country: "Austria"
    },
    website: "https://www.felzl.at/",
    googleMaps: "https://maps.app.goo.gl/rNM3xsfmmBLfyqSh9",
    rating: 4.1,
    position: [48.208717897934676, 16.34382029220155],
    images: [
      `${bucketBaseUrl}/felzl_5013.jpg`,
    ]
  },
  {
    key: "BeneditoBrunch",
    name: "Benedito Brunch",
    types: ["Brunch", "Cafe"],
    address: {
      street: "R. Rainha Dona Maria II 80, 4800-431",
      city: "Guimarães",
      country: "Portugal"
    },
    website: "https://www.instagram.com/benedito_brunch",
    googleMaps: "https://maps.app.goo.gl/TLYBnZTUjL5mxHVB8",
    rating: 4.2,
    position: [41.44258152236305, -8.29405530296571],
    images: [
      `${bucketBaseUrl}/beneditobrunch_2726.jpg`,
      `${bucketBaseUrl}/beneditobrunch_2732.jpg`,
    ]
  },
  {
    key: "BurgerBistro",
    name: "Burger Bistro",
    types: ["Burger"],
    address: {
      street: "Paleisstraat 21, 1012 RB",
      city: "Amsterdam",
      country: "Netherlands"
    },
    website: "https://burgerbistro.nl",
    googleMaps: "https://maps.app.goo.gl/edopGpPDfYCLhaeK9",
    rating: 4.3,
    position: [52.37274507816547, 4.891019695656214],
    images: [
      `${bucketBaseUrl}/burgerbistroamsterdam_4536.jpg`,
    ]
  },
  {
    key: "LosToros",
    name: "Los Toros",
    types: ["Argentinian", "Steakhouse"],
    address: {
      street: "Damrak 9, 1012 LG",
      city: "Amsterdam",
      country: "Netherlands"
    },
    website: "https://www.facebook.com/pages/Los-Toros-Restaurant/151491754990324",
    googleMaps: "https://maps.app.goo.gl/YcPi2gahNCHeGvxeA",
    rating: 2.9,
    position: [52.3769325165068, 4.897582810999022],
    images: [
      `${bucketBaseUrl}/lostoros_3344.jpg`,
      `${bucketBaseUrl}/lostoros_3345.jpg`,
    ]
  },
  {
    key: "NordicoCoffeeShop",
    name: "Nórdico Coffee Shop",
    types: ["Cafe", "Breakfast", "Brunch"],
    address: {
      street: "R. do Anjo 90A, 4700-305",
      city: "Braga",
      country: "Portugal"
    },
    website: "https://www.instagram.com/nordico.coffeeshop/",
    googleMaps: "https://maps.app.goo.gl/oumB2C654LqRSd3z7",
    rating: 4.6,
    position: [41.548747217701404, -8.425288933646767],
    images: [
      `${bucketBaseUrl}/nordico_2654.jpg`,
      `${bucketBaseUrl}/nordico_4596.jpg`,
      `${bucketBaseUrl}/nordico_2656.jpg`,
    ]
  },
  {
    key: "RembrandtCorner",
    name: "Rembrandt Corner",
    types: ["Dutch", "Regional"],
    address: {
      street: "Jodenbreestraat 2, 1011 NK",
      city: "Amsterdam",
      country: "Netherlands"
    },
    website: "https://www.rembrandtcorner.nl/",
    googleMaps: "https://maps.app.goo.gl/pkHQFtL5hyw4RU2RA",
    rating: 4.1,
    position: [52.3695775936369, 4.901088539834299],
    images: [
      `${bucketBaseUrl}/rembrandtcorner_3020.jpg`,
      `${bucketBaseUrl}/rembrandtcorner_3021.jpg`,
      `${bucketBaseUrl}/rembrandtcorner_3023.jpg`,
    ]
  },
  {
    key: "Semente",
    name: "Semente - Art, Coffee & Plant Based Food",
    types: ["Cafe", "Vegan", "Plant-based"],
    address: {
      street: "Campo das Hortas 28, 4700-443",
      city: "Braga",
      country: "Portugal"
    },
    website: "https://www.tripadvisor.pt/Restaurant_Review-g189171-d15696421-Reviews-Semente_Art_Coffee_Plant_Based_Food-Braga_Braga_District_Northern_Portugal.html",
    googleMaps: "https://maps.app.goo.gl/zHpRxoYWgyYjxfHm8",
    rating: 3.9,
    position: [41.5496502395634, -8.430567614605124],
    images: [
      `${bucketBaseUrl}/semente_2346.jpg`,
    ]
  },
  {
    key: "QuintaDasLagrimas",
    name: "Quinta das Lágrimas",
    types: ["Portuguese", "European", "Fine Dining"],
    address: {
      street: "Rua António Augusto Gonçalves, 3041-901",
      city: "Coimbra",
      country: "Portugal"
    },
    website: "https://www.quintadaslagrimas.pt",
    googleMaps: "https://maps.app.goo.gl/pKbEeU4WDFXftfCw5",
    rating: 4.1,
    position: [40.198086430499785, -8.433690018207946],
    images: [
      `${bucketBaseUrl}/quintadaslagrimas_3865.jpg`,
      `${bucketBaseUrl}/quintadaslagrimas_3866.jpg`,
      `${bucketBaseUrl}/quintadaslagrimas_3867.jpg`,
    ]
  },
  {
    key: "BakeLondon",
    name: "BAKE",
    types: ["Bakery", "Japanese"],
    address: {
      street: "9 Wardour St, W1D 6PF",
      city: "London",
      country: "United Kingdom"
    },
    website: "https://www.facebook.com/pages/Bake-%E9%BA%B5%E5%8C%85%E5%B1%8B/208049219544860",
    googleMaps: "https://maps.app.goo.gl/BV2dNaiSyCXiQ4Z9A",
    rating: 3.6,
    position: [51.51101276683126, -0.13185014471207032],
    images: [
      `${bucketBaseUrl}/bakelondon_4022.jpg`,
    ]
  },
  {
    key: "TasquinhaDomFerreira",
    name: "Tasquinha Dom Ferreira",
    types: ["Portuguese", "European", "Regional"],
    address: {
      street: "R. de São Vicente 35, 4710-312",
      city: "Braga",
      country: "Portugal"
    },
    website: "https://www.tripadvisor.pt/Restaurant_Review-g189171-d6850381-Reviews-Tasquinha_Dom_Ferreira-Braga_Braga_District_Northern_Portugal.html?m=19905",
    googleMaps: "https://maps.app.goo.gl/uAT7zbaq4CTZJAgK8",
    rating: 4.3,
    position: [41.554715127612276, -8.422914089414277],
    images: [
      `${bucketBaseUrl}/tasquinhadomferreira_5326.jpg`,
      `${bucketBaseUrl}/tasquinhadomferreira_5327.jpg`,
      `${bucketBaseUrl}/tasquinhadomferreira_5329.jpg`,
    ]
  },
  {
    key: "GranturinoSteakhouse",
    name: "Granturino Steakhouse",
    types: ["Steakhouse"],
    address: {
      street: "R. António dos Santos Lé 18, 3800-105",
      city: "Aveiro",
      country: "Portugal"
    },
    website: "https://www.instagram.com/granturino.steakhouse",
    googleMaps: "https://maps.app.goo.gl/cXvv4razvXbNU7Qm7",
    rating: 4.6,
    position: [40.645027564657404, -8.65666158348872],
    images: [
      `${bucketBaseUrl}/granturino_5539.jpg`,
      `${bucketBaseUrl}/granturino_5537.jpg`,
      `${bucketBaseUrl}/granturino_5540.jpg`,
      `${bucketBaseUrl}/granturino_5541.jpg`,
    ]
  },
  {
    key: "PaulanerWirtshaus",
    name: "Paulaner Wirtshaus Berlin Potsdamer Platz",
    types: ["German", "Bavarian"],
    address: {
      street: "Alte Potsdamer Str. 1, 10785",
      city: "Berlin",
      country: "Germany"
    },
    website: "https://www.paulaner-wirtshaus-berlinpotsdamerplatz.de/en",
    googleMaps: "https://maps.app.goo.gl/MwFD2fjkxU6nkdFx5",
    rating: 4.2,
    position: [52.50820131476543, 13.374580155334934],
    images: [
      `${bucketBaseUrl}/paulanerwirtshaus_5819.jpg`,
    ]
  },
  {
    key: "MarkthalleNeun",
    name: "Markthalle Neun - Street Food Thursday",
    types: ["Street Food", "Market"],
    address: {
      street: "Eisenbahnstraße 42/43, 10997",
      city: "Berlin",
      country: "Germany"
    },
    website: "https://markthalleneun.de/en/street-food-thursday",
    googleMaps: "https://maps.app.goo.gl/BW6mybGJxRV1YDpt6",
    rating: 4.0,
    position: [52.502160522863456, 13.431999570679743],
    images: [
      `${bucketBaseUrl}/markthalleneun_5702.jpg`,
      `${bucketBaseUrl}/markthalleneun_5693.jpg`,
      `${bucketBaseUrl}/markthalleneun_5699.jpg`
    ]
  },
  {
    key: "BoxhagenerPlatz",
    name: "Boxhagener Platz - Saturday Food Market",
    types: ["Street Food", "Market"],
    address: {
      street: "Grünberger Str. 75, 10245",
      city: "Berlin",
      country: "Germany"
    },
    website: "https://www.slowtravelberlin.com/boxhagener-platz-food-market/",
    googleMaps: "https://maps.app.goo.gl/AeEqTzFwv7b9EuJu7",
    rating: 3.9,
    position: [52.5138853345523, 13.459057696277338],
    images: [
      `${bucketBaseUrl}/boxhagenerplatz_5756.jpg`,
      `${bucketBaseUrl}/boxhagenerplatz_5779.jpg`,
    ]
  },
  {
    key: "Burgermeister",
    name: "Burgermeister",
    types: ["Burger"],
    address: {
      street: "Dircksenstraße 113, 10178",
      city: "Berlin",
      country: "Germany"
    },
    website: "https://burger-meister.de/",
    googleMaps: "https://maps.app.goo.gl/x7LDMBCfUZyy92Hc7",
    rating: 4.4,
    position: [52.52050629390125, 13.41315282649925],
    images: [
      `${bucketBaseUrl}/burgermeister_5856.jpg`,
    ]
  },
  {
    key: "CasaGuedes",
    name: "Casa Guedes",
    types: ["Portuguese", "European", "Regional"],
    address: {
      street: "Praça dos Poveiros 130, 4000-393",
      city: "Porto",
      country: "Portugal"
    },
    website: "http://casaguedes.pt/?l=en",
    googleMaps: "https://maps.app.goo.gl/kjXjNmpv5hYKKJcJA",
    rating: 4.3,
    position: [41.14622602996456, -8.603400572136742],
    images: [
      `${bucketBaseUrl}/casaguedes_5531.jpg`,
      `${bucketBaseUrl}/casaguedes_5532.jpg`,
    ]
  },
  {
    key: "AHamburgueriaDoClub",
    name: "A Hamburgueria do Club",
    types: ["Burger"],
    address: {
      street: "Av. Dom João II 23, 4715-303",
      city: "Braga",
      country: "Portugal"
    },
    website: "https://www.thefork.pt/restaurante/hamburgueria-do-club-r750472?cc=18174-54f",
    googleMaps: "https://maps.app.goo.gl/XWcR4gk7jfTEGap16",
    rating: 2.9,
    position: [41.55445141686233, -8.394769687466098],
    images: [
      `${bucketBaseUrl}/ahamburgueriadoclub_5360.jpg`,
      `${bucketBaseUrl}/ahamburgueriadoclub_5358.jpg`,
    ]
  },
  {
    key: "DonaPipa",
    name: "Dona Pipa",
    types: ["Portuguese", "Steakhouse"],
    address: {
      street: "R. Dom Rodrigo da Cunha, 4715-179",
      city: "Braga",
      country: "Portugal"
    },
    website: "https://www.donapipa.pt/",
    googleMaps: "https://maps.app.goo.gl/rZZcLfWRTptuAopi7",
    rating: 4.5,
    position: [41.52982006940938, -8.41269781815723],
    images: [
      `${bucketBaseUrl}/donapipa_5332.jpg`,
    ]
  }
]

export const restaurantData: Restaurant[] = [
  ...sushis,
  ...asian,
  ...italian,
  ...francesinha,
  ...others,
];
