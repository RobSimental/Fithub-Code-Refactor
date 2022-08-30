const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/eventDB');

const eventSchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    zipcode: Number,
    date: Date
});


const Event = mongoose.model("event", eventSchema);

module.exports = Event;