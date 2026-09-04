const express = require("express");
const router = express.Router();

const Battery = require("../models/Battery");

/*
==================================================
GET ALL BATTERIES
==================================================
*/

router.get("/", async (req, res) => {
  try {
    const batteries = await Battery.find().sort({
      createdAt: -1,
    });

    res.json(batteries);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch batteries",
      error: error.message,
    });
  }
});

/*
==================================================
GET ONE BATTERY
==================================================
*/

router.get("/:id", async (req, res) => {
  try {
    const battery = await Battery.findById(req.params.id);

    if (!battery) {
      return res.status(404).json({
        message: "Battery not found",
      });
    }

    res.json(battery);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch battery",
      error: error.message,
    });
  }
});

/*
==================================================
CREATE BATTERY
==================================================
*/

router.post("/", async (req, res) => {
  try {
    const battery = new Battery(req.body);

    const savedBattery = await battery.save();

    res.status(201).json(savedBattery);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create battery",
      error: error.message,
    });
  }
});

/*
==================================================
UPDATE BATTERY
==================================================
*/

router.patch("/:id", async (req, res) => {
  try {
    const battery = await Battery.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!battery) {
      return res.status(404).json({
        message: "Battery not found",
      });
    }

    res.json(battery);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update battery",
      error: error.message,
    });
  }
});

/*
==================================================
DELETE BATTERY
==================================================
*/

router.delete("/:id", async (req, res) => {
  try {
    const battery = await Battery.findByIdAndDelete(req.params.id);

    if (!battery) {
      return res.status(404).json({
        message: "Battery not found",
      });
    }

    res.json({
      message: "Battery deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete battery",
      error: error.message,
    });
  }
});

module.exports = router;
