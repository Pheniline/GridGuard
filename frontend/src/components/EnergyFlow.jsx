import React from "react";

function EnergyFlow({ solar, load, battery }) {
  if (solar === undefined || load === undefined || !battery) {
    return null;
  }

  let source;
  let message;

  if (solar > load) {
    source = "☀️ SOLAR";

    message = `Solar is supplying the load. 
             Surplus energy is available for battery charging.`;
  } else if (solar < load && battery.soc > 20) {
    source = "🔋 BATTERY";

    message = `Solar is insufficient. 
             Battery can support the load.`;
  } else {
    source = "⚡ GRID";

    message = `Solar and battery are insufficient. 
             Grid supplies the remaining demand.`;
  }

  return (
    <div className="energy-flow card">
      <h2>🔄 Energy Management</h2>

      <div className="energy-source">
        <div className="source">
          ☀️
          <span>Solar</span>
          <strong>{solar.toFixed(2)} kW</strong>
        </div>

        <div className="arrow">→</div>

        <div className="source">
          🏠
          <span>Load</span>
          <strong>{load.toFixed(2)} kW</strong>
        </div>

        <div className="arrow">→</div>

        <div className="source">
          🔋
          <span>Battery</span>
          <strong>{battery.soc.toFixed(0)}%</strong>
        </div>
      </div>

      <div className="energy-decision">
        <p>Current preferred source:</p>

        <h3>{source}</h3>

        <p>{message}</p>
      </div>
    </div>
  );
}

export default EnergyFlow;
