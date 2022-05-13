const mongoose = require("mongoose");
const User = require("./User");
const Contact = require("./Contact");

const DB = 'mongodb+srv://CodeRatic:mongo0code0me0tech@cluster0.q9joa.mongodb.net/test'

mongoose.connect(DB);

async function run() {
  try {
    const user = await User.create({
      name: "Kyle",
      age: 26,
      email: "techratic@yahoo.com",
      hobbies: ["Coding", "Football"],
      address: {
        street: "Main St",
      },
    });
    user.name = "Satyam Mishra";
    await user.save();
    //   const user = new User({ name: "Kyle", age: 26 });
    //   await user.save();
    console.log(user);
  } catch (e) {
      console.log(e.message)
  }
}

async function Contacts() {
    try{
        const contact = await Contact.create({
            Title: "Satyam",
            emails: "techratic@yahoo.com",
            messages: "You are Nice",
            ages: 14,
        })
        contact.Title = "CodingWithSatyam"
        await contact.save()
        console.log(contact)
    }
    catch (e){
        console.log(e.message)
    }
}

run();
Contacts();