const db = require("_helpers/db");

module.exports = {
  getAll,
  getById,
};

async function getAll() {
  const country = await db.Country.findAll();
  return country;
}

async function getById(id) {
  const state = await getState(id);
  return state;
}

// helper functions
async function getState(id) {
  const state = await db.State.findAll({ where: { countryId: id } });
  if (!state) throw "State not found";
  return state;
}
