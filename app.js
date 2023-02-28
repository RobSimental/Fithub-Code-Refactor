const express = require("express");
const route = require("./routes/routes");
const Event = require("./models/events");
const app = express();
const bodyParser = require("body-parser");


// Middle Ware
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//Routes
app.use("/", route);

app.get("/events", (req, res) => {
    Event.find({}, (err, events) => {
        err ? console.log(err) : res.render("events/events", {events: events});
    })
})
app.get("/events/:eventID", (req, res) => {
    const eventID = req.params.eventID;
    Event.findById((eventID), (err, event) => {
        err ? console.log(err) : res.render("events/eventProfile", {event: event});
    });
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
    //TODO temp bugfix, might cause problems later 
    postEvent.date.setDate(postEvent.date.getDate() + 1);
    postEvent.save((err) => {
        err ? console.log(err) : res.redirect("events")
    });
})

app.listen(3000, () => {
    console.log("Started Server on Port 3000");
})