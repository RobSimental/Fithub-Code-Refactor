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
    res.render("account/register");
})
app.get("/forgotPassword", (req, res) => {
    res.render("account/forgotPassword");
})
app.get("/profile", (req, res) => {
    res.render("account/myProfile");
})
app.get("/events", (req, res) => {
    res.render("events/events");
})
app.get("/event/:eventTitle", (req, res) => {
    console.log(req.params);
    res.render("events/eventProfile");
})
app.get("/create", (req, res) => {
    res.render("events/createEvent");
})
app.get("/match", (req, res) => {
    res.render("match/match")
})
app.get("/support", (req, res) => {
    res.render("other/support")
})
app.get("/tnc", (req, res) => {
    res.render("other/tnc")
})
app.get("/404", (req, res) => {
    res.render("other/underConstruction")
})





app.listen(3000, () => {
    console.log("Started Server on Port 3000");
})