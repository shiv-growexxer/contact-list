const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

var route = require("./routes/route");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// static files
app.use(express.static(path.join(__dirname, 'public')));



app.use("/api",route);

module.exports = app.listen(8080, () => {
    console.log("Server Started At Port 3000");
});
