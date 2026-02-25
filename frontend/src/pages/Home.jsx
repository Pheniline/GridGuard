import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* NAVIGATION + HERO */}
      <section className="hero">
        <nav className="nav">
          <h2 className="logo">GRIDGUARD</h2>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#tech">Technology Stack</a>
            <a href="#impact">Economic Impact</a>
            <a href="#business">Business Model</a>
          </div>
        </nav>
      </section>

      <section id="about" className="section">
        <h2>Introduction</h2>

        <p className="intro-text">
          “At 8:30 PM in a residential estate, lights begin to flicker. Moments
          later, a loud explosion plunges the neighborhood into darkness.
          Businesses shut down. Students stop studying. Essential services are
          interrupted. The transformer has failed due to overload — without
          warning. Now imagine if engineers had received a real-time alert 12
          hours before failure.”
        </p>

        <p>This is the problem GRIDGUARD is designed to solve.</p>

        <h3>Problem Statement</h3>

        <p>
          Kenya Power and Lighting Company is mandated to transmit, distribute
          and retail electricity across Kenya. However, the national grid faces
          major challenges including:
        </p>

        <ul className="bullet-list">
          <li>Electricity theft and illegal connections</li>
          <li>Meter bypass and revenue leakage</li>
          <li>Transformer overloading</li>
          <li>Delayed fault detection</li>
          <li>Limited real-time monitoring infrastructure</li>
        </ul>

        <p>
          This is reactive infrastructure. Kenya requires predictive
          infrastructure.
        </p>
      </section>
      <section className="section">
        <h2>Proposed Solution</h2>

        <p>
          GRIDGUARD is an IoT-based smart monitoring system installed directly
          at distribution transformers.
        </p>

        <ul className="bullet-list">
          <li>Measures total outgoing current</li>
          <li>Monitors voltage stability</li>
          <li>Tracks transformer temperature</li>
          <li>Detects load imbalance</li>
          <li>Analyzes consumption irregularities</li>
        </ul>

        <p>
          The system compares transformer output against total registered
          customer consumption. Any mismatch beyond acceptable tolerance
          triggers a theft alert.
        </p>

        <p>GRIDGUARD does not wait for failure — it prevents it.</p>
      </section>
      {/* TECHNOLOGICAL STACK */}
      <section id="tech" className="tech">
        <h2>Technological Stack</h2>
        <div className="grid">
          <div className="card">Current Transformers (CT Sensors)</div>
          <div className="card">Voltage Sensors</div>
          <div className="card">Temperature Probes</div>
          <div className="card">ESP32 Microcontroller</div>
          <div className="card">GSM / LoRa Communication</div>
          <div className="card">Cloud Analytics Engine</div>
        </div>
      </section>

      {/* LIVE DEMO */}
      <section className="section demo">
        <h2>Live System Demonstration</h2>
        <p>Experience the GRIDGUARD real-time transformer dashboard.</p>
        <Link to="/dashboard">
          <button className="demo-btn">Launch Live Demo</button>
        </Link>
      </section>

      {/* SYSTEM ARCHITECTURE */}
      <section className="section">
        <h2>System Architecture</h2>
        <img
          src="/system-diagram.png"
          alt="GridGuard System Architecture"
          className="architecture-img"
        />
      </section>

      {/* ECONOMIC IMPACT */}
      <section id="impact" className="section">
        <h2>Economic Impact</h2>

        <p>Even a 5% reduction in non-technical losses can generate:</p>

        <ul className="bullet-list">
          <li>Increased revenue collection</li>
          <li>Reduced transformer replacement costs</li>
          <li>Lower outage response costs</li>
          <li>Higher customer satisfaction</li>
        </ul>
      </section>

      <section id="business" className="section">
        <h2>Business Model</h2>

        <p>GRIDGUARD operates under a Monitoring-as-a-Service (MaaS) model.</p>

        <p>
          Example Projection:
          <br />
          5,000 transformers × KSh 2,000 per month
          <br />= KSh 10,000,000 monthly recurring revenue
        </p>

        <p>Scalable. Sustainable. Profitable.</p>
      </section>

      {/* QUOTE SECTION */}
      <section className="quote">
        <p>
          “Today: Kenya. Tomorrow: East Africa. Future: Smart Grids Across
          Emerging Markets.GridGuard is just not a device but a foundation of a
          smarter African Power infrastructure.”
        </p>
        <span>~ Kemboi Pheniline Jerono</span>
      </section>
    </div>
  );
}

export default Home;
