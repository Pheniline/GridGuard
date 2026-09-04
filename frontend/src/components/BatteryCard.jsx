import React from "react";

function BatteryCard({ data }) {
  if (!data) {
    return <div className="card">Loading battery data...</div>;
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2>🔋 Battery Storage</h2>

        <span className="status">{data.status}</span>
      </div>

      <div className="battery-container">
        <div className="battery">
          <div
            className="battery-level"
            style={{
              width: `${data.soc}%`,
            }}
          ></div>
        </div>

        <div className="battery-percentage">{data.soc.toFixed(0)}%</div>
      </div>

      <div className="data-grid">
        <div className="data-item">
          <span>State of Charge</span>

          <strong>{data.soc.toFixed(0)}%</strong>
        </div>

        <div className="data-item">
          <span>Voltage</span>

          <strong>{data.voltage} V</strong>
        </div>

        <div className="data-item">
          <span>Power</span>

          <strong>{data.power.toFixed(2)} kW</strong>
        </div>

        <div className="data-item">
          <span>Capacity</span>

          <strong>{data.capacity} kWh</strong>
        </div>
      </div>
    </div>
  );
}

export default BatteryCard;
