const express = require('express');
const path = require('path');
const router = express.Router();

//Serve main dashboard
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"../views/index.html"));
});

//Serve favourite page
router.get("/favourites", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/favourites.html"));
});

module.exports = router;