const app = require("../../util/configureApi");
const connectDB = require("../../util/db");
const User = require("../../models/user");

app.post("*", (req, res) => {
  connectDB()
    .then(user => {
      if (user) {
        throw new Error("user exists");
      }
      const { userName, email, password } = req.body;
      return User.create({ userName, email, password });
    })
    .then(result => {
      res.status(200).json({
        result
      });
    })
    .catch(err => {
      res.status(err.statusCode || 500).json({
        error: err.message
      });
    });
});

module.exports = app;
