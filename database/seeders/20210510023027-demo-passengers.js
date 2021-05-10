module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      `passengers`,
      [
        {
          id: 5435,
          name: "Nadia Gincoff",
          flightNumber: "fas23",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5436,
          name: "Joaquin Phoenix",
          flightNumber: "sd231",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5437,
          name: "Snow Elliot",
          flightNumber: "fa423",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5438,
          name: "Alonso Camargo",
          flightNumber: "f5412",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5439,
          name: "Rodolfo Urbante",
          flightNumber: "fas23",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
        return queryInterface.bulkDelete(
      `passengers`,
      [
        {
          id: 1,
          name: "Nadia Gincoff",
          flightNumber: "fas23",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Joaquin Phoenix",
          flightNumber: "sd231",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Snow Elliot",
          flightNumber: "fa423",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "Alonso Camargo",
          flightNumber: "f5412",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "Rodolfo Urbante",
          flightNumber: "fas23",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
};
