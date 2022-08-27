const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.render("index");
})

router.get("/register", (req, res) => {
    res.render("account/register");
})
router.get("/forgotPassword", (req, res) => {
    res.render("account/forgotPassword");
})
router.get("/profile", (req, res) => {
    res.render("account/myProfile");
})

router.get("/match", (req, res) => {
    res.render("match/match")
})
router.get("/support", (req, res) => {
    res.render("other/support")
})
router.get("/tnc", (req, res) => {
    res.render("other/tnc")
})
router.get("/404", (req, res) => {
    res.render("other/underConstruction")
})

module.exports = router;