const mongoose = require("mongoose");

const contact = new mongoose.Schema({
    Title: String,
    ages: Number,
    emails: String,
    messages: String,
})
module.exports = mongoose.model("Contact", contact);