const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resolutionSchema = new Schema(
  {
    title: {
      type: String,
      deafult: "Habit",
      required: [true, "Name is required"],
    },
    userId: {
      type: String,
      default: "Testing User ID",
      //requied: [true, "User ID is required"],
    },
    observerId: {
      type: String,
      default: "Testing observer ID",
      //required: [true, "Observer ID is required"],
    },
    description: {
      type: String,
      default: "Kekw"
    },
    money:{
        type: Number,
        default: 0,
    },
    type:{
        type: String,
        enum: ["Habit", "Goal"],
        default: "Habit"
    },
    frequencyPerWeek:{
        type: Number,
        default: 1,
    },
    checkedDate:{
        type: [Date],
        default: [],
    },
    startDate:{
        type: Date,
        default: Date.now,
    },
    streakingWeeks:{
        type: Number,
        default: 0,
    },
    endGoalStreakingWeeks:{
        type: Number,
        default: 12,
    }
  },
  { collection: "resolution" }
);

//export default mongoose.model("Name of table in database", Schema);
module.exports = mongoose.model("Resolution", resolutionSchema);

export {};
