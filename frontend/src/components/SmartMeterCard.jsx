import React from "react";

function SmartMeterCard({ data }) {
  if (!data) {
    return <div className="card">Loading smart meter...</div>;
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2>⚡ Smart Meter</h2>

        <span className="status online">ONLINE</span>
      </div>

      <div className="data-grid">
        <div className="data-item">
          <span>Voltage</span>
          <strong>{data.voltage} V</strong>
        </div>

        <div className="data-item">
          <span>Current</span>
          <strong>{data.current.toFixed(2)} A</strong>
        </div>

        <div className="data-item">
          <span>Power</span>
          <strong>{data.power.toFixed(2)} kW</strong>
        </div>

        <div className="data-item">
          <span>Energy</span>
          <strong>{data.energy} kWh</strong>
        </div>

        <div className="data-item">
          <span>Power Factor</span>
          <strong>{data.powerFactor}</strong>
        </div>

        <div className="data-item">
          <span>Frequency</span>
          <strong>{data.frequency} Hz</strong>
        </div>
      </div>
    </div>
  );
}

export default SmartMeterCard;
