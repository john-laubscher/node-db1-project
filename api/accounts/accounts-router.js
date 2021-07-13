const router = require("express").Router();
const Accounts = require("../accounts/accounts-model");

router.get("/", (req, res, next) => {
  //   try {
  //     const allAccounts = await Accounts.getAll();
  //     res.json(allAccounts);
  //   } catch (err) {
  //     next(err);
  //   }
  // });
  Accounts.getAll()
    .then((accounts) => {
      res.json(accounts);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.post("/", (req, res, next) => {
  // DO YOUR MAGIC
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
