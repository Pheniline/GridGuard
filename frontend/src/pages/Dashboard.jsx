import { useEffect, useState } from "react";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
function App() {
  const [data, setData] = useState(null);
  const alarmRef = useRef(new Audio("/alarm.mp3"));
  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("http://localhost:5000/api/transformer")
        .then((res) => {
          setData(res.data);

          if (res.data.theftDetected) {
            alarmRef.current.play();
          }
        })
        .catch((err) => console.error(err));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!data) return <div className="loading">Initializing GRIDGUARD...</div>;

  return (
    <div className="container">
      <h1 className="title">GRIDGUARD Control Center</h1>

      <div className="grid">
        <Card title="Transformer ID" value={data.transformerId} />
        <Card title="Voltage (kV)" value={data.voltage} />
        <Card title="Current (A)" value={data.current} />
        <Card title="Temperature (°C)" value={data.temperature} />
        <Card title="Load (%)" value={data.load} />

        <StatusCard
          title="Theft Detection"
          status={data.theftDetected}
          trueText="THEFT ALERT"
          falseText="Normal"
        />

        <StatusCard
          title="Overload Risk"
          status={data.overloadRisk}
          trueText="OVERLOAD WARNING"
          falseText="Stable"
        />
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  );
}

function StatusCard({ title, status, trueText, falseText }) {
  return (
    <div className={`card status ${status ? "danger" : "safe"}`}>
      <h2>{title}</h2>
      <p>{status ? trueText : falseText}</p>
    </div>
  );
}

export default App;
