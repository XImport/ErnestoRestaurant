export default function MenuItems() {
  const data = [
    {
      categorieName: "Pizza",
      title : 'Classic Italian Pizzas',
      items: [
        {
          name: "Margherita",
          ingredients:
            "Tomatensoße San Marzano | Grana Padano DOP | Fior di Latte | Basilikum | kalt gepresstes Olivenöl",
          price: "9,00 EUR",
          notes: "Auch Vegan! mit veganer Parmesan und veganer Mozzarella",
          pic: "Margherita.png",
        },
        {
          name: "Marinara",
          type: "VEGAN",
          ingredients:
            "Tomatensoße San Marzano | Knoblauchöl | Oregano | halbgetrocknete rote Tomaten | Basilikum",
          price: "10,80 EUR",
          pic: "Marinara.png",
        },
        {
          name: "Bufala",
          type: "VEGGIE",
          ingredients:
            "Tomatensoße San Marzano | Grana Padano DOP | Büffelmozzarella | halbgetrocknete rote Tomaten | Basilikum",
          price: "13,50 EUR",
          pic: "Bufala.png",
          notes:
            "Auch Vegan! mit veganer Parmesan und veganer Büffelmozzarella",
        },
        {
          name: "Salami",
          type: "FLEISCH",
          ingredients:
            "Tomatensoße San Marzano | Fior di Latte | Salami | Basilikum",
          price: "12,50 EUR",
          pic: "Salami.png",
          notes: "Auch Vegan! mit veganer Mozzarella und veganer Schinken",
        },
        {
          name: "Diavola",
          type: "FLEISCH",
          ingredients:
            "Tomatensoße San Marzano | Fior di Latte | scharfe Salami | karamellisierte Zwiebeln | Basilikum",
          price: "14,00 EUR",
          pic: "Diavola.png",
        },
        {
          name: "Prosciutto E Funghi",
          type: "FLEISCH",
          ingredients:
            "Tomatensoße San Marzano | Fior di Latte | Kochschinken | Champignons | Basilikum",
          price: "14,00 EUR",
          pic: "Prosciutto E Funghi.png",
        },
        {
          name: "Salsiccia E Friarielli",
          type: "FLEISCH",
          pic: "Salsiccia E Friarielli.png",
          ingredients:
            "Sahne | Fior di Latte | Salsiccia Fresca | Friarielli (Stängelkohl) | Knoblauchöl | Basilikum | HappyCow",
          price: "13,50 EUR",
        },
        {
          name: "Tonno",
          type: "FISCH",
          ingredients:
            "Tomatensoße San Marzano | Fior di Latte | Thunfisch | rote Zwiebel | Oliven | Basilikum",
          price: "11,50 EUR",
          pic: "Tonno.png",
          notes: "Auch Vegan! mit veganer Mozzarella und veganer Thunfisch",
        },
        {
          name: "Napoletana",
          type: "VEGGIE",
          pic: "Napoletana.png",
          ingredients:
            "Tomatensoße San Marzano | Sardellen | Oliven | Kapern | Oregano | Basilikum",
          price: "11,00 EUR",
        },
        {
          name: "Funghi",
          type: "VEGGIE",
          pic: "Funghi.png",
          ingredients:
            "Tomatensoße San Marzano | Grana Padano DOP | Fior di Latte | frische Champignons | Basilikum",
          price: "11,00 EUR",
          notes: "Auch Vegan! mit veganer Mozzarella und veganer Thunfisch",
        },
      ],
    },
    {
      categorieName: "Pizza NEAPOLITANISCH",
      title : 'Authentic Neapolitan Pizzas',
      items: [
        {
          name: "Formaggi",
          type: "VEGGIE",
          pic: "Formaggi.png",
          ingredients:
            "Fior di Latte | Grana Padano DOP | Gorgonzola | Pecorino",
          price: "13,00 EUR",
        },
        {
          name: "Verdura",
          type: "VEGGIE",
          pic: "Verdura.png",
          ingredients:
            "Tomatensoße San Marzano | Fior di Latte | Grana Padano Dop | gelbe Tomaten | Grillgemüse | Champignons",
          price: "12,50 EUR",
          notes: "Auch Vegan! mit veganer Parmesan und veganer Mozzarella",
        },
        {
          name: "Capricciosa",
          pic: "Capricciosa.png",
          type: "FLEISCH",
          ingredients:
            "Tomatensoße San Marzano | Fior di Latte | Kochschinken | Champignons | Oliven | Artischocken",
          price: "14,00 EUR",
          notes: "Auch Vegan! mit veganer Mozzarella und veganer Schinken",
        },
        {
          name: "Parmigiana",
          type: "VEGGIE",
          pic: "Parmigiana.png",
          ingredients:
            "Tomatensoẞe San Marzano | Fior di Latte | gegrillte Auberginen | Parmigiano Reggiano | Basilikum",
          price: "13,50 EUR",
          notes: "Auch Vegan! mit veganer Mozzarella und veganer Mozzarella",
        },
        {
          name: "Bresaola",
          pic: "Bresaola.png",
          type: "FLEISCH",
          ingredients:
            "Tomatensoẞe San Marzano | Fior di Latte | Rucola | Bresaola gehobelter | Grana Padano | Basilikum",
          price: "14,00 EUR",
        },
        {
          name: "Salsiccia E Patata",
          pic: "Salsiccia E Patata.png",
          type: "FLEISCH",
          ingredients:
            "Sahne | Fior di Latte | Salsiccia Fresca | Rosmarinkartoffeln | Salz und Pfeffer | Basilikum",
          price: "14,00 EUR",
        },
        {
          name: "Mortadella E Buratta",
          pic: "Mortadella E Buratta.png",
          type: "FLEISCH",
          ingredients:
            "Fior di Latte | Mortadella | Buratta | Pistazien Crunch | Pistazien | Pesto | Basilikum",
          price: "15,00 EUR",
        },
        {
          name: "Buratta",
          type: "VEGGIE",
          pic: "Buratta.png",
          ingredients:
            "Fior di Latte | Rucola | halbgetrocknete rote Tomaten | Buratta | Balsamico Creme | Basilikum",
          price: "14,00 EUR",
        },
        {
          name: "Tartufata",
          type: "VEGGIE",
          pic: "Tartufata.png",
          ingredients:
            "Trüffel Creme | Fior di Latte | Champignons | gehobelter Grana Padano | Basilikum",
          price: "16,00 EUR",
        },
        {
          name: "Avocado",
          type: "VEGAN",
          pic: "Avocado.png",
          ingredients:
            "Tomatensoße San Marzano | Oregano | Knoblauchol | Rucola | halbgetrocknete rote u. gelbe Tomaten | Avocado Creme | geröstete Sonnenblumenkerne | Basilikum",
          price: "16,00 EUR",
        },
        {
          name: "Pizza Bianca",
          pic: "Bianca.png",
          ingredients: "Crème Fraîche | Hähnchen | Rosmarinkartoffeln | Chilli",
          price: "13,00 EUR",
        },
        {
          name: "Pizza Leonardo",
          pic: "Leonardo.png",
          ingredients: "Crème Fraîche | Sucuk | Zwiebeln | Paprika",
          price: "12,50 EUR",
        },
        {
          name: "Pizza Colzone",
          pic: "Colzone.png",
          ingredients: "Salami, Pilze",
          price: "13,00 EUR",
        },
      ],
    },
    {
      categorieName: "Pasta & Lasagne",
      title : 'Delicious Pasta & Lasagne',
      description:
        "Nudelsorten: Penne | Campanelle | Fusilli | Spaghetti | Linguine | Tagliatelle",
      items: [
        {
          name: "Pomodoro",
          pic: "Pomodoro.png",
          ingredients: "Tomatensoẞe, Zwiebel, Cherrytomaten",
          price: "9,90 EUR",
        },
        {
          name: "Arabiata",
          ingredients: "Tomatensoẞe, Knoblauch, Chili, Zwiebeln",
          pic: "Arabiata.png",
          price: "10,90 EUR",
        },
        {
          name: "Aljo Olio",
          pic: "Aljo Olio.png",
          ingredients: "Frische Knoblauch, Petersilie, Chili, Olivenöl",
          price: "10,90 EUR",
        },
        {
          name: "Pesto Basilikum",
          pic: "Pesto Basilikum.png",
          ingredients: "Hausgemachtes Basilikumpesto",
          price: "11,50 EUR",
        },
        {
          name: "Carbonara",
          pic: "Carbonara.png",
          ingredients:
            "Pancheta Affumicata, Zwiebel, Sahne, Eigelb, Petersilie",
          price: "9,90 EUR",
        },
        {
          name: "Crema Di fungi",
          pic: "Crema Di fungi.png",
          ingredients: "Pilze, Zwiebel, Weißwein, Sahne, Hähnchen",
          price: "13,00 EUR",
        },
        {
          name: "Gamberetti",
          pic: "Gamberetti.png",
          ingredients:
            "Garnelen, Zwiebel, Sahne, Grana Padano DOP, Pesto, Baby Spinat, Cherrytomaten",
          price: "14,90 EUR",
        },
        {
          name: "Bolognese",
          pic: "Bolognese.png",
          ingredients:
            "Rinderhackfleisch, Tomatensoße, Zwiebel, Karotten, Cherrytomaten",
          price: "11,90 EUR",
        },
        {
          name: "Pasta El Manzo",
          pic: "Pasta El Manzo.png",
          ingredients:
            "Rindfleisch, Pilze, Lauchzwiebeln, Karotten, Tomatenmark, Rotwein, Sahne",
          price: "13,90 EUR",
        },
        {
          name: "Ratatouille",
          pic: "Ratatouille.png",
          ingredients:
            "Pilze, Lauchzwiebeln, Zucchini, Paprika, Cherrytomaten, Tomatensoẞe, Pesto",
          price: "13,90 EUR",
        },
        {
          name: "Pasta Burata",
          pic: "Pasta Burata.png",
          ingredients:
            "Tomatensoße, Cherrytomaten, Chili, Knoblauch, Burata, Lauchzwiebeln",
          price: "16,50 EUR",
        },
        {
          name: "Salmone",
          pic: "Salmone.png",
          ingredients: "Lachs, Lauchzwiebeln, Cherrytomaten, Safran-Sahnesauce",
          price: "12,00 EUR",
        },
        {
          name: "Lasagne",
          pic: "Lasagne.png",
          ingredients:
            "Gefüllt mit Rinderhackfleisch, Käse in Tomaten-Béchamelsouce und mit Käse überbacken",
          price: "12,00 EUR",
        },
        {
          name: "Quattro Formaggi",
          pic: "Quattro Formaggi.png",
          ingredients: "Gorgonzola, Mozzarella, Grana Padano, Sahnesauce",
          price: "12,00 EUR",
        },
        {
          name: "Gnocchi Pomodoro",
          pic: "Gnocchi Pomodoro.png",
          ingredients:
            "Tomatensoße, Mozzarella, Cherrytomaten, Knoblauch, Grana padano",
          price: "13,50 EUR",
          notes: "Auch Vegan! mit veganer Parmesan und veganem Mozzarella",
        },
        {
          name: "Gnocchi Pesto",
          pic: "Gnocchi Pesto.png",
          ingredients: "Cherrytomaten, Mozzarella, Grana Padano",
          price: "12,50 EUR",
        },
      ],
    },
    {
      categorieName: "Salat & Dessert",
      title : 'Fresh Salads & Decadent Desserts',

      items: [
        {
          name: "Salata Manzo",
          pic: "Salata Manzo.png",
          ingredients:
            "Rinderfilet, Schafskäse, angebratene Pilze, Baby-Spinat, Avocado, Tomaten",
          price: "14,00 EUR",
        },
        {
          name: "Salata Pollo",
          pic: "Salata Pollo.png",
          ingredients:
            "Hähnchenbrust, Baby-Spinat, Schafskäse, angebratene Pilze, Gurke, Cherrytomaten",
          price: "12,50 EUR",
        },
        {
          name: "Salat Gamberetto",
          pic: "Salat Gamberetto.png",
          ingredients:
            "Garnelen, Avocado, Edamame, Baby-Spinat, Paprika, Tomaten",
          price: "14,00 EUR",
        },
        {
          name: "Salat Tooni",
          pic: "Salat Tooni.png",
          ingredients:
            "Salatmix, Rucola, Tomaten, Gurken, Lauchzwiebeln, Rote Zwiebeln, Ei, Thunfisch",
          price: "11,50 EUR",
        },
        {
          name: "Tiramisu",
          pic: "Tiramisu.png",
          price: "5,00 EUR",
        },
        {
          name: "Schoko Souffle",
          description: "mit versch. Eis-Früchten",
          pic: "Schoko Souffle.png",
          price: "6,50 EUR",
        },
        {
          name: "Pizza Nutella",
          ingredients: "Nutella und Pistazien",
          pic: "Pizza Nutella.png",
          price: "8,00 EUR",
        },
        {
          name: "Nutella Calzone",
          pic: "Nutella Calzone.png",
          ingredients: "Nutella und Pistazien",
          price: "9,00 EUR",
        },
      ],
    },

    {
      categorieName: "Getrainke",
      title : 'Refreshing Beverages',

      items: [
        {
          name: "Whiskey Sour's",
          pic: "whiskey_sours.png",
          price: "8,50 EUR",
        },
        {
          name: "Gin Sour's",
          pic: "gin_sours.png",
          price: "8,50 EUR",
        },
        {
          name: "Aperol Sour's",
          pic: "aperol_sours.png",
          price: "8,50 EUR",
        },
        {
          name: "Baileys auf Eis",
          pic: "baileys_auf_eis.png",
          volume: "4cl",
          price: "5,00 EUR",
        },
        {
          name: "Jägermeister",
          pic: "jagermeister.png",
          volume: "2cl",
          price: "3,00 EUR",
        },
        {
          name: "Tequila",
          pic: "tequila.png",
          volume: "2cl",
          price: "3,00 EUR",
        },
        {
          name: "Sambuca",
          pic: "sambuca.png",
          volume: "4cl",
          price: "3,50 EUR",
        },
        {
          name: "Ramazotti auf Eis mit Zitrone",
          pic: "ramazotti_auf_eis_mit_zitrone.png",
          volume: "4cl",
          price: "3,50 EUR",
        },
        {
          name: "Pinot grigio vero vitae",
          pic: "Pinot grigio vero vitae.png",
          volume: "0,2litr.",
          price: "6,00 EUR",
        },
        {
          name: "Wurttemberger Blanc de Noir",
          pic: "Wurttemberger Blanc de Noir.png",
          volume: "0,2litr.",
          price: "5,00 EUR",
        },
        {
          name: "Weinschorle",
          pic: "weinschorle.png",
          price: "6,50 EUR",
        },
        {
          name: "Pinot meunier Rose Halbtrocken",
          pic: "pinot_meunier_rose_halbtrocken.png",
          volume: "0,2litr.",
          price: "5,00 EUR",
        },

        {
          name: "Württemberger Trollinger Halbtrocken",
          pic: "wurttemberger_trollinger_halbtrocken.png",
          volume: "0,2litr.",
          price: "5,00 EUR",
        },

        {
          name: "Lambrusco Fruchtig",
          pic: "lambrusco_fruchtig.png",
          volume: "0,2litr.",
          price: "5,00 EUR",
        },

        {
          name: "Primitivo Trocken",
          pic: "primitivo_trocken.png",
          volume: "0,2litr.",
          price: "5,50 EUR",
        },

        {
          name: "Chianti Trocken",
          pic: "chianti_trocken.png",
          volume: "0,2litr.",
          price: "6,00 EUR",
        },

        {
          name: "Cola",
          pic: "cola.png",
          volume: "0,2litr.",
          price: "3,00 EUR",
        },
        {
          name: "Fanta",
          pic: "fanta.png",
          volume: "0,2litr.",
          price: "3,00 EUR",
        },
        {
          name: "Cola Zero",
          pic: "cola_zero.png",
          volume: "0,2litr.",
          price: "3,00 EUR",
        },
        {
          name: "Mezzo Mix",
          pic: "mezzo_mix.jpg",
          volume: "0,2litr.",
          price: "3,00 EUR",
        },
        {
          name: "Sprite",
          pic: "sprite.png",
          volume: "0,2litr.",
          price: "3,00 EUR",
        },

        {
          name: "Schwarzer Tee",
          pic: "SchwarzerTee.png",
          price: "3,00 EUR",
        },
        {
          name: "Frischer Minztee",
          pic: "FrischerMinztee.png",
          price: "3,00 EUR",
        },
        {
          name: "Kamillentee",
          pic: "Kamillentee.png",
          price: "3,00 EUR",
        },
        {
          name: "Café Creme",
          pic: "CafeCreme.png",
          price: "3,00 EUR",
        },
        {
          name: "Cappuccino",
          pic: "Cappuccino.png",
          price: "3,50 EUR",
        },
        {
          name: "Latte Macchiato",
          pic: "LatteMacchiato.png",
          price: "4,00 EUR",
        },
        {
          name: "Espresso",
          pic: "Espresso.png",
          price: "2,50 EUR",
        },
        {
          name: "Espresso Corretto",
          pic: "EspressoCorretto.png",
          price: "4,50 EUR",
        },
        {
          name: "Espresso Macchiato",
          pic: "EspressoMacchiato.png",
          price: "3,00 EUR",
        },
        {
          name: "Doppelter Espresso",
          pic: "DoppelterEspresso.png",
          price: "3,00 EUR",
        },
        {
          name: "Milchkaffee",
          pic: "Milchkaffee.png",
          price: "3,00 EUR",
        },
        {
          name: "Bitburger Pils",
          volume: "0,3litr.",
          pic: "BitburgerPils.png",
          price: "3,50 EUR",
        },
        {
          name: "Erdinger Weizen",
          volume: "0,5litr.",
          pic: "ErdingerWeizen.png",
          price: "4,50 EUR",
        },
        {
          name: "Radler",
          volume: "0,3litr.",
          pic: "Radler.png",
          price: "4,50 EUR",
        },
        {
          name: "Bananenweizen",
          volume: "0,4litr.",
          pic: "Bananenweizen.png",
          price: "4,50 EUR",
        },
        {
          name: "Bier Alkoholfrei",
          volume: "0,3litr.",
          pic: "BierAlkoholfrei.png",
          price: "3,00 EUR",
        },
        {
          name: "Bitburger Alkoholfrei",
          volume: "0,5litr.",
          pic: "BitburgerAlkoholfrei.png",
          price: "4,00 EUR",
        },
        {
          name: "Jack Daniels Cola",
          pic: "JackDanielsCola.png",
          price: "7,50 EUR",
        },
        {
          name: "Johnny Walker Cola",
          pic: "JohnnyWalkerCola.png",
          price: "8,50 EUR",
        },
        {
          name: "Bombay, Gin Tonic Water",
          pic: "BombayGinTonicWater.png",
          price: "8,00 EUR",
        },
        {
          name: "Bombay Gin Wild Berry",
          pic: "BombayGinWildBerry.png",
          price: "8,50 EUR",
        },
        {
          name: "9 Mile Wodka saft nach Wahl",
          pic: "9MileWodka.png",
          price: "8,50 EUR",
        },
        {
          name: "Aperol Spritz",
          volume: "0,2litr.",
          pic: "AperolSpritz.png",
          price: "6,50 EUR",
        },
        {
          name: "Hugo",
          volume: "0,2litr.",
          pic: "Hugo.png",
          price: "6,50 EUR",
        },
        {
          name: "Lillet Berry",
          volume: "0,2litr.",
          pic: "LilletBerry.png",
          price: "6,50 EUR",
        },
        {
          name: "Hugo alkoholfrei",
          volume: "0,2litr.",
          pic: "HugoAlkoholfrei.png",
          price: "6,50 EUR",
        },
        {
          name: "Lillet alkoholfrei",
          volume: "0,2litr.",
          pic: "LilletAlkoholfrei.png",
          price: "6,50 EUR",
        },
        {
          name: "Prosecco Spumante alkoholfrel",
          volume: "0,1litr.",
          pic: "ProseccoSpumanteAlkoholfrei.png",
          price: "6,50 EUR",
        },
      ],
    },
  ];

  return data;
}
