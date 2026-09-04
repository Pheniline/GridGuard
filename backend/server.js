const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/*
==================================================
GRIDGUARD SIMULATED SYSTEM DATA
==================================================
*/

let gridData = {
  voltage: 240,
  current: 15,
  frequency: 50,
  powerFactor: 0.95,
  power: 3.42,
  energy: 24.5,
};

let solarData = {
  voltage: 380,
  current: 13.2,
  power: 5.02,
  energyToday: 31.4,
  status: "GENERATING",
};

let batteryData = {
  soc: 78,
  voltage: 48,
  power: 2.4,
  capacity: 20,
  status: "CHARGING",
};

let transformerData = {
  transformerId: "TR-001",
  voltage: 11,
  current: 185,
  temperature: 67,
  load: 72,
  overloadRisk: "LOW",
  theftDetected: false,
};

/*
==================================================
ENERGY MANAGEMENT
==================================================
*/

function calculateEnergyManagement() {
  const solarPower = solarData.power;
  const loadPower = gridData.power;
  const batterySOC = batteryData.soc;

  let action;
  let batteryStatus;

  if (solarPower > loadPower) {
    const surplus = solarPower - loadPower;

    if (batterySOC < 100) {
      action = `Solar supplies load and ${surplus.toFixed(2)} kW charges battery`;
      batteryStatus = "CHARGING";
    } else {
      action = `Solar supplies load and ${surplus.toFixed(2)} kW is exported to grid`;
      batteryStatus = "FULL";
    }
  } else if (solarPower < loadPower && batterySOC > 20) {
    const deficit = loadPower - solarPower;

    action = `Battery supplies approximately ${deficit.toFixed(2)} kW deficit`;
    batteryStatus = "DISCHARGING";
  } else {
    const deficit = loadPower - solarPower;

    action = `Grid supplies approximately ${deficit.toFixed(2)} kW deficit`;
    batteryStatus = "GRID SUPPLY";
  }

  return {
    solarPower,
    loadPower,
    batterySOC,
    action,
    batteryStatus,
  };
}

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
SMART METER API
==================================================
*/

app.get("/api/smart-meter", (req, res) => {
  res.json(gridData);
});

/*
==================================================
SOLAR API
==================================================
*/

app.get("/api/solar", (req, res) => {
  res.json(solarData);
});

/*
==================================================
BATTERY API
==================================================
*/

app.get("/api/battery", (req, res) => {
  res.json(batteryData);
});

/*
==================================================
TRANSFORMER API
==================================================
*/

app.get("/api/transformer", (req, res) => {
  res.json(transformerData);
});

/*
==================================================
ENERGY MANAGEMENT API
==================================================
*/

app.get("/api/energy-management", (req, res) => {
  const result = calculateEnergyManagement();

  res.json(result);
});

/*
==================================================
ALL GRID DATA
==================================================
*/

app.get("/api/grid", (req, res) => {
  res.json({
    smartMeter: gridData,
    solar: solarData,
    battery: batteryData,
    transformer: transformerData,
    energyManagement: calculateEnergyManagement(),
  });
});

/*
==================================================
SIMULATE CHANGING DATA
==================================================
*/

setInterval(() => {
  // Simulate solar changes
  solarData.power = Math.max(0, 3 + Math.random() * 3);

  // Simulate household load
  gridData.power = Math.max(1, 2 + Math.random() * 3);

  // Calculate current
  gridData.current = (gridData.power * 1000) / gridData.voltage;

  // Simulate transformer temperature
  transformerData.temperature = 60 + Math.random() * 15;

  // Simulate transformer loading
  transformerData.load = 60 + Math.random() * 30;

  // Determine overload risk

  if (transformerData.load >= 90) {
    transformerData.overloadRisk = "HIGH";
  } else if (transformerData.load >= 75) {
    transformerData.overloadRisk = "MEDIUM";
  } else {
    transformerData.overloadRisk = "LOW";
  }

  // Simulate battery

  const energyResult = calculateEnergyManagement();

  if (energyResult.batteryStatus === "CHARGING") {
    batteryData.soc = Math.min(100, batteryData.soc + 0.2);

    batteryData.status = "CHARGING";

    batteryData.power = 1 + Math.random() * 2;
  } else if (energyResult.batteryStatus === "DISCHARGING") {
    batteryData.soc = Math.max(20, batteryData.soc - 0.2);

    batteryData.status = "DISCHARGING";

    batteryData.power = 1 + Math.random() * 2;
  } else {
    batteryData.status = "STANDBY";

    batteryData.power = 0;
  }
}, 3000);

/*
==================================================
START SERVER
==================================================
*/

app.listen(PORT, () => {
  console.log(`GRIDGUARD backend running on port ${PORT}`);
});
