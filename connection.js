const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Contactlist", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Connected To DataBase..");
});

module.exports = mongoose;