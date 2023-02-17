const mongoose = require("mongoose");
const mongourl =
  "mongodb+srv://suppy:supritha@cluster0.ouloq3y.mongodb.net/swahar?retryWrites=true&w=majority";

const connectmongo = async () => {
  mongoose.connect(mongourl, { useNewUrlParser: true }, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connection succesful");
      const fetch_data = mongoose.connection.db.collection("foodItems");
      fetch_data.find({}).toArray(function (err, data) {
        const foodcat = mongoose.connection.db.collection("food_items");
        foodcat.find({}).toArray(function (err, catdata) {
          if (err) {
            console.log(err);
          } else {
            global.fooditems = data;
            global.foodCat = catdata;
            console.log(global.fooditems);
          }
        });
      });
    }
  });
};

module.exports = connectmongo;
