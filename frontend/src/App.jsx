import React, { useEffect, useState } from "react";
import axios from "axios";

import SmartMeterCard from "./components/SmartMeterCard";
import SolarCard from "./components/SolarCard";
import BatteryCard from "./components/BatteryCard";
import TransformerCard from "./components/TransformerCard";
import EnergyFlow from "./components/EnergyFlow";

import "./App.css";

function App() {
  const [gridData, setGridData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = "http://localhost:5000/api/grid";

  const getGridData = async () => {
    try {
      const response = await axios.get(API_URL);

      setGridData(response.data);

      setLoading(false);

      setError("");
    } catch (err) {
      console.error(err);

      setError("Unable to connect to GRIDGUARD backend.");

      setLoading(false);
    }
  };

  useEffect(() => {
    getGridData();

    const interval = setInterval(getGridData, 3000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <h1>GRIDGUARD</h1>

        <p>Initializing smart grid...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-screen">
        <h1>GRIDGUARD</h1>

        <p>{error}</p>

        <button onClick={getGridData}>Retry Connection</button>
      </div>
    );
  }

  return (
    <div className="app">
      {/* HEADER */}

      <header className="header">
        <div>
          <h1>GRIDGUARD</h1>

          <p>Smart Distribution Grid Monitoring & Energy Management</p>
        </div>

        <div className="system-status">
          <span className="status-dot"></span>
          SYSTEM ONLINE
        </div>
      </header>

      {/* DASHBOARD */}

      <main className="dashboard">
        <section>
          <h2 className="section-title">Grid Monitoring</h2>

          <div className="cards">
            <TransformerCard data={gridData.transformer} />

            <SmartMeterCard data={gridData.smartMeter} />
          </div>
        </section>

        <section>
          <h2 className="section-title">Renewable Energy</h2>

          <div className="cards">
            <SolarCard data={gridData.solar} />

            <BatteryCard data={gridData.battery} />
          </div>
        </section>

        <section>
          <h2 className="section-title">Smart Energy Management</h2>

          <EnergyFlow
            solar={gridData.solar.power}
            load={gridData.smartMeter.power}
            battery={gridData.battery}
          />
        </section>

        <section className="ai-section">
          <h2 className="section-title">🤖 GRIDGUARD Intelligence</h2>

          <div className="ai-card">
            <h3>Energy Management Decision</h3>

            <p>{gridData.energyManagement.action}</p>

            <div className="ai-values">
              <div>
                <span>Solar</span>

                <strong>
                  {gridData.energyManagement.solarPower.toFixed(2)} kW
                </strong>
              </div>

              <div>
                <span>Load</span>

                <strong>
                  {gridData.energyManagement.loadPower.toFixed(2)} kW
                </strong>
              </div>

              <div>
                <span>Battery SOC</span>

                <strong>
                  {gridData.energyManagement.batterySOC.toFixed(0)}%
                </strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>GRIDGUARD © 2026 | IoT-Based Smart Grid Monitoring System</p>
      </footer>
    </div>
  );
}

export default App;
