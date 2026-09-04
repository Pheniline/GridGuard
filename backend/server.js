require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Routes
const transformerRoutes = require("./routes/transformerRoutes");
const smartMeterRoutes = require("./routes/smartMeterRoutes");
const solarRoutes = require("./routes/solarRoutes");
const batteryRoutes = require("./routes/batteryRoutes");

// Models
const Transformer = require("./models/Transformer");
const SmartMeter = require("./models/SmartMeter");
const Solar = require("./models/Solar");
const Battery = require("./models/Battery");

const app = express();
const PORT = process.env.PORT || 5000;

/*
==================================================
MIDDLEWARE
==================================================
*/

app.use(cors());
app.use(express.json());

/*
==================================================
MONGODB CONNECTION
==================================================
*/

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });

/*
==================================================
API ROUTES
==================================================
*/

app.use("/api/transformers", transformerRoutes);

app.use("/api/smart-meters", smartMeterRoutes);

app.use("/api/solar", solarRoutes);

app.use("/api/batteries", batteryRoutes);

/*
==================================================
MAIN ROUTE
==================================================
*/

app.get("/", (req, res) => {
  res.json({
    message: "GRIDGUARD backend is running",
    status: "ONLINE",
  });
});

/*
==================================================
ALL GRID DATA
==================================================
*/

app.get("/api/grid", async (req, res) => {
  try {
    const smartMeter = await SmartMeter.findOne().sort({
      createdAt: -1,
    });

    const solar = await Solar.findOne().sort({
      createdAt: -1,
    });

    const battery = await Battery.findOne().sort({
      createdAt: -1,
    });

    const transformer = await Transformer.findOne().sort({
      createdAt: -1,
    });

    /*
    ==============================================
    ENERGY MANAGEMENT
    ==============================================
    */

    let energyManagement = null;

    if (solar && smartMeter && battery) {
      const solarPower = solar.power;
      const loadPower = smartMeter.power;
      const batterySOC = battery.soc;

      let action;
      let batteryStatus;

      if (solarPower > loadPower) {
        const surplus = solarPower - loadPower;

        if (batterySOC < 100) {
          action = `Solar supplies load and ${surplus.toFixed(
            2,
          )} kW charges battery`;

          batteryStatus = "CHARGING";
        } else {
          action = `Solar supplies load and ${surplus.toFixed(
            2,
          )} kW is exported to grid`;

          batteryStatus = "FULL";
        }
      } else if (solarPower < loadPower && batterySOC > 20) {
        const deficit = loadPower - solarPower;

        action = `Battery supplies approximately ${deficit.toFixed(
          2,
        )} kW deficit`;

        batteryStatus = "DISCHARGING";
      } else {
        const deficit = loadPower - solarPower;

        action = `Grid supplies approximately ${deficit.toFixed(2)} kW deficit`;

        batteryStatus = "GRID SUPPLY";
      }

      energyManagement = {
        solarPower,
        loadPower,
        batterySOC,
        action,
        batteryStatus,
      };
    }

    /*
    ==============================================
    RESPONSE
    ==============================================
    */

    res.json({
      smartMeter,
      solar,
      battery,
      transformer,
      energyManagement,
    });
  } catch (error) {
    console.error("Error fetching grid data:", error.message);

    res.status(500).json({
      message: "Failed to fetch grid data",
      error: error.message,
    });
  }
});

/*
==================================================
START SERVER
==================================================
*/

app.listen(PORT, () => {
  console.log(`GRIDGUARD backend running on port ${PORT}`);
});
