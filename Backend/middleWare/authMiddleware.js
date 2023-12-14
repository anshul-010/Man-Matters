const jwt = require("jsonwebtoken")
const auth = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).send({ msg: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, "jwt_secret_key");
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).send({ msg: "Invalid token" });
  }
};


module.exports = {auth}
