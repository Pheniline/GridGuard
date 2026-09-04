import React from "react";

function TransformerCard({ data }) {
  if (!data) {
    return <div className="card">Loading transformer data...</div>;
  }

  const riskClass = data.overloadRisk.toLowerCase();

  return (
    <div className="card">
      <div className="card-header">
        <h2>🔌 Transformer</h2>

        <span className="transformer-id">{data.transformerId}</span>
      </div>

      <div className="data-grid">
        <div className="data-item">
          <span>Voltage</span>

          <strong>{data.voltage} kV</strong>
        </div>

        <div className="data-item">
          <span>Current</span>

          <strong>{data.current} A</strong>
        </div>

        <div className="data-item">
          <span>Temperature</span>

          <strong>{data.temperature.toFixed(1)} °C</strong>
        </div>

        <div className="data-item">
          <span>Loading</span>

          <strong>{data.load.toFixed(1)}%</strong>
        </div>
      </div>

      <div className={`risk-box ${riskClass}`}>
        <span>Overload Risk</span>

        <strong>{data.overloadRisk}</strong>
      </div>

      <div className="theft-box">
        <span>Theft Detection</span>

        <strong>
          {data.theftDetected ? "⚠️ THEFT DETECTED" : "✓ NO THEFT DETECTED"}
        </strong>
      </div>
    </div>
  );
}

export default TransformerCard;
