import { useEffect, useState, useRef } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState(null);
  const alarmRef = useRef(null);

  useEffect(() => {
    // Initialize alarm audio
    alarmRef.current = new Audio("/alarm.mp3");
    alarmRef.current.loop = false;

    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://gridguard.onrender.com/api/transformer",
        );
        console.log("Fetched data:", res.data); // <- ADD THIS
        setData(res.data);

        if (res.data.theftDetected || res.data.overloadRisk) {
          alarmRef.current.play().catch((err) => {
            console.warn("Audio failed:", err);
          });
        }
      } catch (err) {
        console.error("API error:", err);
      }
    };
    // Fetch immediately, then every 2 seconds
    fetchData();
    const interval = setInterval(fetchData, 2000);

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

      {status && <div className="alert-text blink">⚠ ALERT ACTIVE</div>}
    </div>
  );
}

export default Dashboard;
