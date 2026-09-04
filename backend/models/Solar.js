const mongoose = require("mongoose");

const solarSchema = new mongoose.Schema(
  {
    systemId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    voltage: {
      type: Number,
      required: true,
    },

    current: {
      type: Number,
      required: true,
    },

    power: {
      type: Number,
      required: true,
    },

    energyToday: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["GENERATING", "OFF", "FAULT"],
      default: "OFF",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Solar", solarSchema);
