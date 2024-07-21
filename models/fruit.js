const mongoose = require("mongoose");
//create Shema
const FruitSchema = new mongoose.Schema({
  name: String,
  isReadyToEat: Boolean,
});
// create model (model represent one instance->(one)) link schema to model
const Fruit = mongoose.model("Fruit", FruitSchema);
//exporting the model
module.exports = Fruit;
