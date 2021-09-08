const express = require("express");
const router = express.Router();
const User = require("../model/user");
const auth = require("../auth");

router.get("/validationCheck", auth, async (req, res) => {
  try {
    res.send({ message: "true" });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/signUp", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/loginUser", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.username,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
