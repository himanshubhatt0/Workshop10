const User = require("./model/user");
const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "thisismytoken");
    const user = await User.findOne({
      _id: decoded._id,
    });
    if (!user) {
      throw new Error();
    }
    (req.user = user), next();
  } catch (e) {
    res.status(401).send({ message: "False" });
  }
};

module.exports = auth;
