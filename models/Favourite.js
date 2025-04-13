const mongoose = require('mongoose');

const FavouriteSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true,
        unique: true,
    },
    addedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Favourite", FavouriteSchema);