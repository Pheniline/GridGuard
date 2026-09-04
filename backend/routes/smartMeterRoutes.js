const express = require("express");

const router = express.Router();

const SmartMeter = require("../models/SmartMeter");

/*
GET ALL SMART METERS
*/

router.get("/", async (req, res) => {
  try {
    const meters = await SmartMeter.find();

    res.json(meters);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch smart meters",
      error: error.message,
    });
  }
});

/*
GET ONE SMART METER
*/

router.get("/:id", async (req, res) => {
  try {
    const meter = await SmartMeter.findById(req.params.id);

    if (!meter) {
      return res.status(404).json({
        message: "Smart meter not found",
      });
    }

    res.json(meter);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching smart meter",
      error: error.message,
    });
  }
});

/*
CREATE SMART METER
*/

router.post("/", async (req, res) => {
  try {
    const meter = new SmartMeter(req.body);

    const savedMeter = await meter.save();

    res.status(201).json(savedMeter);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create smart meter",
      error: error.message,
    });
  }
});

/*
UPDATE SMART METER
*/

router.patch("/:id", async (req, res) => {
  try {
    const meter = await SmartMeter.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!meter) {
      return res.status(404).json({
        message: "Smart meter not found",
      });
    }

    res.json(meter);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update smart meter",
      error: error.message,
    });
  }
});

/*
DELETE SMART METER
*/

router.delete("/:id", async (req, res) => {
  try {
    const meter = await SmartMeter.findByIdAndDelete(req.params.id);

    if (!meter) {
      return res.status(404).json({
        message: "Smart meter not found",
      });
    }

    res.json({
      message: "Smart meter deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete smart meter",
      error: error.message,
    });
  }
});

module.exports = router;
