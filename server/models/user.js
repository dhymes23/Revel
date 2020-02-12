const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

UserSchema.pre("save", function(next) {
  const user = this;

  if (!user.isModified("password")) {
    next();
  } else {
    bycrypt.hash(user.password, 10).then(hashedPassword => {
      user.password = hashedPassword;
      next();
    });
  }
});

UserSchema.method("comparePassword", function(candidatePassword) {
  const user = this;

  return bycrypt.compare(candidatePassword, user.password);
});

module.exports = mongoose.model("User", UserSchema);
