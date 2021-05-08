module.exports = {
  up:  (queryInterface) => {
    queryInterface.bulkInsert(
      `PackageTypes`,
      [{ id: 1, name: `In storage` }, { id: 2, name: `Retired` }],
      { updateOnDuplicate: [`name`] },
    )
  },

  down:  (queryInterface) => {
    queryInterface.delete(
      `PackageTypes`,
      [{ id: 1 }, { id: 2 }],
      { updateOnDuplicate: [`name`] },
    )
  }
};
