const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 9,
    max: 100,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  createdAt: {
    immutable: true,
    type: Date,
    default: () => Date.now(),
  },
  updateAt: Date,
  hobbies: [String],
  address: addressSchema,
});
userSchema.

module.exports = mongoose.model("User", userSchema);
