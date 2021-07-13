const db = require("../../data/db-config");

async function getAll() {
  const records = await db("accounts");
  console.log(records);
  return records;
}

async function getById(id) {
  const account = await db("accounts").where("id", id).first();
  return account;
}

async function create(account) {
  const [id] = await db("accounts").insert(account);
  const newlyCreatedAccount = await getById(id);
  return newlyCreatedAccount;
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
};

const deleteById = (id) => {
  // DO YOUR MAGIC
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
