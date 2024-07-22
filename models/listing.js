const mongoose = require("mongoose");
const { title } = require("process");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required:true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://free4kwallpapers.com/uploads/originals/2022/05/09/dragon-forest-fantasy-wallpaper.jpg",
    set: (v) =>
      v ===""
        ? "https://free4kwallpapers.com/uploads/originals/2022/05/09/dragon-forest-fantasy-wallpaper.jpg"
        : v,
  },
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
