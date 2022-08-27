const express = require("express");
const rout = require("./routes/routes");
const Event = require("./models/events");
const app = express();
const bodyParser = require("body-parser");


// Middle Ware
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//Routes
app.use("/", rout);

app.get("/events", (req, res) => {
    Event.find({}, (err, events) => {
        err ? console.log(err) : res.render("events/events", {events: events});
    })
})
app.get("/events/:eventID", (req, res) => {
    const eventID = req.params.eventID;
    console.log(eventID);
    res.render("events/eventProfile");
})
app.get("/create", (req, res) => {
    res.render("events/createEvent");
})
app.post("/create", (req, res) => {
    const postEvent = new Event({
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        zipcode: req.body.zipcode,
        date: req.body.date,
    });
    postEvent.save((err) => {
        err ? console.log(err) : res.redirect("/events")
    });
})

app.listen(3000, () => {
    console.log("Started Server on Port 3000");
})