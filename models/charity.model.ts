const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const charitySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    description: {
      type: String,
      default: "This is a very cool organization",
    },
    website: {
      type: String,
      default: "",
    },
    moneyRaised: {
      type: Number,
      default: 0,
    },
  },
  { collection: "charityorg" }
);

//export default mongoose.model("Name of table in database", Schema);
module.exports = mongoose.model("Charity", charitySchema);

export {};
