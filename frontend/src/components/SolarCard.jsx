import React from "react";

function SolarCard({ data }) {
  if (!data) {
    return <div className="card">Loading solar data...</div>;
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2>☀️ Solar PV</h2>

        <span className="status online">{data.status}</span>
      </div>

      <div className="solar-main">
        <div className="big-value">
          {data.power.toFixed(2)}
          <span> kW</span>
        </div>

        <p>Current Solar Generation</p>
      </div>

      <div className="data-grid">
        <div className="data-item">
          <span>PV Voltage</span>

          <strong>{data.voltage} V</strong>
        </div>

        <div className="data-item">
          <span>PV Current</span>

          <strong>{data.current.toFixed(2)} A</strong>
        </div>

        <div className="data-item">
          <span>Today's Energy</span>

          <strong>{data.energyToday} kWh</strong>
        </div>
      </div>
    </div>
  );
}

export default SolarCard;
