const jwt = require("jsonwebtoken");
const app = require("../../util/configureApi");
const connectDB = require("../../util/db");
const User = require("../../models/user");
const config = require("../../config");

app.post("*", (req, res) => {
  let finalUser;
  connectDB()
    .then(() => User.findOne({ email: req.body.email }))
    .then(user => {
      if (!user) {
        throw new Error("No user found.");
      }

      finalUser = user;
      return user.comparePassword(req.body.password);
    })
    .then(isPasswordCorrect => {
      if (!isPasswordCorrect) {
        throw new Error("Invalid password!");
      }

      return jwt.sign({ userId: finalUser._id }, config.JWT_SECRET, {
        expiresIn: "1m"
      });
    })
    .then(token => {
      res.status(200).json({
        result: {
          userName: finalUser.userName,
          email: finalUser.email,
          token
        }
      });
    })
    .catch(err => {
      res.status(err.statusCode || 500).json({
        error: err.message
      });
    });
});

module.exports = app;
