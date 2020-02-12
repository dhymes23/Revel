const connectDB = require("../util/db");
const User = require("../models/user");

const seed = () => {
  connectDB()
    .then(() => Promise.all([User.deleteMany()]))
    .then(() => {
      User.create({
        userName: "Test",
        email: "testuser@example.com",
        password: "password"
      });
    })
    .then(() => console.log("DB Seeded."))
    .catch(error => {
      console.log("error while seeding database.", error);
    })
    .finally(() => process.exit());
};

seed();
