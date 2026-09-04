const express = require("express");

const router = express.Router();

const Transformer = require("../models/Transformer");

/*
GET ALL TRANSFORMERS
*/

router.get("/", async (req, res) => {
  try {
    const transformers = await Transformer.find();

    res.json(transformers);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch transformers",
      error: error.message,
    });
  }
});

/*
GET ONE TRANSFORMER
*/

router.get("/:id", async (req, res) => {
  try {
    const transformer = await Transformer.findById(req.params.id);

    if (!transformer) {
      return res.status(404).json({
        message: "Transformer not found",
      });
    }

    res.json(transformer);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching transformer",
      error: error.message,
    });
  }
});

/*
CREATE TRANSFORMER
*/

router.post("/", async (req, res) => {
  try {
    const transformer = new Transformer(req.body);

    const savedTransformer = await transformer.save();

    res.status(201).json(savedTransformer);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create transformer",
      error: error.message,
    });
  }
});

/*
UPDATE TRANSFORMER
*/

router.patch("/:id", async (req, res) => {
  try {
    const transformer = await Transformer.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!transformer) {
      return res.status(404).json({
        message: "Transformer not found",
      });
    }

    res.json(transformer);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update transformer",
      error: error.message,
    });
  }
});

/*
DELETE TRANSFORMER
*/

router.delete("/:id", async (req, res) => {
  try {
    const transformer = await Transformer.findByIdAndDelete(req.params.id);

    if (!transformer) {
      return res.status(404).json({
        message: "Transformer not found",
      });
    }

    res.json({
      message: "Transformer deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete transformer",
      error: error.message,
    });
  }
});

module.exports = router;
