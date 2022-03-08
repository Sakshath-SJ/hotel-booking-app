const mongoose = require("mongoose");

var mongoDBURL =
  "mongodb+srv://sakshath:sakshath@cluster0.ox1f7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoDBURL);

var dbconnect = mongoose.connection;

dbconnect.on("error", () => {
  console.log(`Mongo DB Connection Failed`);
});

dbconnect.on("connected", () => {
  console.log(`Mongo DB Connection Successfull`);
});

module.exports = mongoose;
