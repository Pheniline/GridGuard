const mongoose = require("mongoose");

const smartMeterSchema = new mongoose.Schema(
  {
    meterId: {
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

    energy: {
      type: Number,
      required: true,
    },

    powerFactor: {
      type: Number,
      required: true,
      min: 0,
      max: 1,
    },

    frequency: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("SmartMeter", smartMeterSchema);
