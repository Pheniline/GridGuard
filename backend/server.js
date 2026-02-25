const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

function generateData() {
  const load = 60 + Math.random() * 50;
  const theft = load > 95; // More logical detection

  return {
    transformerId: "TX-014-KEN",
    voltage: (11 + Math.random()).toFixed(2),
    current: (200 + Math.random() * 80).toFixed(2),
    temperature: (55 + Math.random() * 30).toFixed(2),
    load: load.toFixed(2),
    theftDetected: theft,
    overloadRisk: load > 90,
  };
}

app.get("/api/transformer", (req, res) => {
  res.json(generateData());
});

app.listen(5000, () => {
  console.log("GRIDGUARD Server running on port 5000");
});
