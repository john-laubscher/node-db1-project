const router = require("express").Router();
const Accounts = require("../accounts/accounts-model");

router.get("/", (req, res, next) => {
  Accounts.getAll()
    .then((accounts) => {
      res.json(accounts);
    })
    .catch(next);
});

router.get("/:id", async (req, res, next) => {
  try {
    const account = await Accounts.getById(req.params.id);
    res.json(account);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const name = req.body.name.trim();
    const budget = req.body.budget.trim();
    const newAccount = await Accounts.create({ name, budget });
    res.status(201).json({
      message: "Success! You have created a new account",
      newAccount,
    });
  } catch (err) {
    next(err);
  }
});

router.put("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  // DO YOUR MAGIC
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    customMessage: "something tragic inside posts router happned",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
