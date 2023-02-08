const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    Game_name: {
      type: String,
      default:'Gamerji'
    },
    Player_name: {
      type: String,
      required: true,
      minLength: 3,
    },
    status: {
      type: String,
    },
    startdate: {
      type: Date,
      default: Date.now(),
    },
 
});

const gameModel = new mongoose.model("Gamerji", userSchema);

module.exports = gameModel;
