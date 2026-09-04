const express = require("express");
const router = express.Router();

const Solar = require("../models/Solar");

/*
==================================================
GET ALL SOLAR SYSTEMS
==================================================
*/

router.get("/", async (req, res) => {
  try {
    const solarSystems = await Solar.find().sort({
      createdAt: -1,
    });

    res.json(solarSystems);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch solar systems",
      error: error.message,
    });
  }
});

/*
==================================================
GET ONE SOLAR SYSTEM
==================================================
*/

router.get("/:id", async (req, res) => {
  try {
    const solar = await Solar.findById(req.params.id);

    if (!solar) {
      return res.status(404).json({
        message: "Solar system not found",
      });
    }

    res.json(solar);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch solar system",
      error: error.message,
    });
  }
});

/*
==================================================
CREATE SOLAR SYSTEM
==================================================
*/

router.post("/", async (req, res) => {
  try {
    const solar = new Solar(req.body);

    const savedSolar = await solar.save();

    res.status(201).json(savedSolar);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create solar system",
      error: error.message,
    });
  }
});

/*
==================================================
UPDATE SOLAR SYSTEM
==================================================
*/

router.patch("/:id", async (req, res) => {
  try {
    const solar = await Solar.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!solar) {
      return res.status(404).json({
        message: "Solar system not found",
      });
    }

    res.json(solar);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update solar system",
      error: error.message,
    });
  }
});

/*
==================================================
DELETE SOLAR SYSTEM
==================================================
*/

router.delete("/:id", async (req, res) => {
  try {
    const solar = await Solar.findByIdAndDelete(req.params.id);

    if (!solar) {
      return res.status(404).json({
        message: "Solar system not found",
      });
    }

    res.json({
      message: "Solar system deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete solar system",
      error: error.message,
    });
  }
});

module.exports = router;
