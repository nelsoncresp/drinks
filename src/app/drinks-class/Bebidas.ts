export class Bebidas {
  bebidas: Bebida[] = [
    {
      "nombre": "Margarita",
      "descripcion": "Una deliciosa bebida mexicana a base de tequila, jugo de lima y triple sec.",
      "precio": 8.99,
      "imagen": "assets/bebidas/margarita.jpg"
    },
    {
      "nombre": "Mojito",
      "descripcion": "Una refrescante mezcla de ron, menta, lima, azúcar y soda.",
      "precio": 7.99,
      "imagen": "assets/bebidas/mojito.jpg"
    },
    {
      "nombre": "Piña Colada",
      "descripcion": "Un cóctel tropical hecho con ron, crema de coco y jugo de piña.",
      "precio": 9.99,
      "imagen": "assets/bebidas/piña.jpg"
    },
    {
      "nombre": "Daiquiri",
      "descripcion": "Una bebida clásica a base de ron, jugo de limón y azúcar.",
      "precio": 8.49,
      "imagen": "assets/bebidas/dq.png"
    },
    {
      "nombre": "Old Fashioned",
      "descripcion": "Un cóctel elegante hecho con whisky, azúcar y amargos.",
      "precio": 10.99,
      "imagen": "assets/bebidas/old.jpg"
    },
    {
      "nombre": "Cosmopolitan",
      "descripcion": "Un cóctel sofisticado hecho con vodka, jugo de arándano y triple sec.",
      "precio": 9.99,
      "imagen": "assets/bebidas/cosmo.jpg"
    },
    {
      "nombre": "Gin Tonic",
      "descripcion": "Una bebida clásica hecha con ginebra, agua tónica y limón.",
      "precio": 7.49,
      "imagen": "assets/bebidas/gin.jpg"
    },
    {
      "nombre": "Mai Tai",
      "descripcion": "Un cóctel tropical a base de ron, jugo de limón, almíbar de almendra y triple sec.",
      "precio": 9.99,
      "imagen": "assets/bebidas/mai.jpg"
    },
    {
      "nombre": "Mimosa",
      "descripcion": "Una combinación de champán y jugo de naranja, ideal para el brunch.",
      "precio": 6.99,
      "imagen": "assets/bebidas/mimosa.jpg"
    },
    {
      "nombre": "Bloody Mary",
      "descripcion": "Un cóctel con vodka, jugo de tomate, salsa picante y condimentos.",
      "precio": 8.99,
      "imagen": "assets/bebidas/bloody.jpg"
    },
    {
      "nombre": "Pisco Sour",
      "descripcion": "Un clásico de América del Sur hecho con pisco, jugo de limón y clara de huevo.",
      "precio": 9.49,
      "imagen": "assets/bebidas/pisco.jpg"
    },
    {
      "nombre": "Caipirinha",
      "descripcion": "Una refrescante bebida brasileña a base de cachaça, lima y azúcar.",
      "precio": 8.99,
      "imagen": "assets/bebidas/caipi.jpg"
    },
    {
      "nombre": "Whisky Sour",
      "descripcion": "Un cóctel simple pero delicioso hecho con whisky, jugo de limón y azúcar.",
      "precio": 8.49,
      "imagen": "assets/bebidas/whiskey-sour.webp"
    },
    {
      "nombre": "Negroni",
      "descripcion": "Un cóctel amargo y equilibrado hecho con ginebra, vermut y Campari.",
      "precio": 9.99,
      "imagen": "assets/bebidas/negroni.jpg"
    },
    {
      "nombre": "Moscow Mule",
      "descripcion": "Una combinación refrescante de vodka, cerveza de jengibre y lima.",
      "precio": 7.99,
      "imagen": "assets/bebidas/moscow.jpg"
    },
    {
      "nombre": "Manhattan",
      "descripcion": "Un cóctel clásico hecho con whisky, vermut y amargos.",
      "precio": 10.49,
      "imagen": "assets/bebidas/manha.jpg"
    },
  ]
}
interface Bebida {
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}
