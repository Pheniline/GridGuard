const mongoose = require("mongoose");

const transformerSchema = new mongoose.Schema(
  {
    transformerId: {
      type: String,
      required: true,
      unique: true,
    },

    voltage: {
      type: Number,
      required: true,
    },

    current: {
      type: Number,
      required: true,
    },

    temperature: {
      type: Number,
      required: true,
    },

    load: {
      type: Number,
      required: true,
    },

    overloadRisk: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH"],
      default: "LOW",
    },

    theftDetected: {
      type: Boolean,
      default: false,
    },
  },

  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Transformer", transformerSchema);
