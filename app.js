const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/register", (req, res) => {
    res.render("register");
})
app.get("/forgotPassword", (req, res) => {
    res.render("forgotPassword");
})
app.listen(3000, () => {
    console.log("Started Server on Port 3000");
})