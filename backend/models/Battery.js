const mongoose = require("mongoose");

const batterySchema = new mongoose.Schema(
  {
    batteryId: {
      type: String,
      required: true,
      unique: true,
    },

    soc: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },

    voltage: {
      type: Number,
      required: true,
    },

    power: {
      type: Number,
      required: true,
    },

    capacity: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["CHARGING", "DISCHARGING", "STANDBY", "FULL", "FAULT"],
      default: "STANDBY",
    },
  },

  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Battery", batterySchema);
