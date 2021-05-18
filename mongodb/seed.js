const seeder = require("mongoose-seed");
const { MONGODB_URI } = require("../util/secrets.js");

const db = MONGODB_URI;

// Data array containing seed data - documents organized by Model
const data = [
  {
    model: "Option",
    documents: [
      {
        option: "Hola",
      },
      {
        option: "mundo",
      },
      {
        option: "Casa",
      },
      {
        option: "manzana",
      },
      {
        option: "pera",
      },
      {
        option: "carro",
      },
      {
        option: "cafe",
      },
      {
        option: "gato",
      },
      {
        option: "perro",
      },
      {
        option: "perrote",
      },
    ],
  },
];

seeder.connect(db, () => {
  seeder.loadModels(["./models/option"]);

  seeder.clearModels(["Option"], () => {
    seeder.populateModels(data, () => {
      seeder.disconnect();
    });
  });
});
