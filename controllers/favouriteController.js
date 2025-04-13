const Favourite = require("../models/Favourite");

//Get all favourite cities
const getFavourites = async(req, res) => {
    try{
        const favourites = await Favourite.find();
        res.json(favourites);
    } catch(error) {
        res.status(404).json({message:"Error fetching favourites"});
    }
};

//Add a city to fav
const addFavourite = async (req, res) => {
    const {city} = req.body;
    try{
        const favourite = new Favourite({city});
        await favourite.save();
        res.status(201).json(favourite);
    } catch(error) {
        res.status(500).json({message: "Error adding favourite", error});
    }
};

//Remove a city from favourite
const removeFavourite = async (req, res) => {
    const {city}  = req.params;
    try {
        await Favourite.findOneAndDelete({city});
        res.json({message: `${city} removed from favourite`});
    } catch(error) {
        res.status(500).json({message: "Error removing favourite"});
    }
};

module.exports = {getFavourites, addFavourite, removeFavourite};