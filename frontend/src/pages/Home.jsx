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

        <div className="hero-content">
          <h1>Intelligent Transformer Monitoring System</h1>
          <p>Turning passive transformers into smart grid assets.</p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section">
        <h2>Problem & Proposed Solution</h2>
        <p>
          Grid systems face electricity theft, transformer overloading, delayed
          fault detection and limited real-time monitoring. GRIDGUARD transforms
          distribution transformers into intelligent, connected assets capable
          of predictive analysis and real-time alerts.
        </p>
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
        <p>
          A 5% reduction in non-technical losses translates into increased
          revenue collection, reduced transformer replacement costs, improved
          reliability and enhanced operational efficiency.
        </p>
      </section>

      {/* BUSINESS MODEL */}
      <section id="business" className="model">
        <h2>Business Model</h2>
        <p>
          GRIDGUARD operates under a Monitoring-as-a-Service (MaaS) model.
          Subscription per transformer enables scalable recurring revenue while
          delivering measurable financial savings.
        </p>
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
