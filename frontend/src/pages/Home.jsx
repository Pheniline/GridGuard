import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(".slide-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 },
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div>
      {/* HERO + NAVIGATION */}
      <section className="hero slide-section">
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
          <h1>Smart Transformer & Theft Detection System</h1>
          <p>Reinventing Power Distribution Infrastructure</p>
        </div>
      </section>

      {/* ABOUT / INTRO */}
      <section id="about" className="section light slide-section">
        <h2>Introduction</h2>

        <p className="intro-text">
          At 8:30 PM, lights begin to flicker. Minutes later — darkness.
          Businesses shut down. Students stop studying. Essential services are
          interrupted. The transformer failed without warning.
        </p>

        <p className="highlight">
          What if engineers received a real-time alert 12 hours before failure?
        </p>

        <h3>Problem Statement</h3>

        <ul className="bullet-list">
          <li>Electricity theft and illegal connections</li>
          <li>Meter bypass and revenue leakage</li>
          <li>Transformer overloading</li>
          <li>Delayed fault detection</li>
          <li>Limited real-time monitoring</li>
        </ul>

        <p className="highlight">
          This is reactive infrastructure. Kenya needs predictive
          infrastructure.
        </p>
      </section>

      {/* PROPOSED SOLUTION */}
      <section className="section dark slide-section">
        <h2>Proposed Solution</h2>

        <p>
          GRIDGUARD transforms passive transformers into intelligent, connected,
          data-driven assets.
        </p>

        <ul className="bullet-list">
          <li>Real-time current measurement</li>
          <li>Voltage stability monitoring</li>
          <li>Temperature tracking</li>
          <li>Load imbalance detection</li>
          <li>Consumption anomaly analysis</li>
        </ul>

        <p className="highlight">
          GridGuard does not wait for failure — it prevents it.
        </p>
      </section>

      {/* TECHNOLOGY STACK */}
      <section id="tech" className="section light slide-section">
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
      <section className="section dark slide-section demo">
        <h2>Live System Demonstration</h2>
        <p>Experience real-time transformer intelligence.</p>
        <Link to="/dashboard">
          <button className="demo-btn">Launch Live Demo</button>
        </Link>
      </section>

      {/* SYSTEM ARCHITECTURE */}
      <section className="section light slide-section">
        <h2>System Architecture</h2>
        <img
          src="images/system-diagram.png"
          alt="GridGuard System Architecture"
          className="architecture-img"
        />
      </section>

      {/* ECONOMIC IMPACT */}
      <section id="impact" className="section dark slide-section">
        <h2>Economic Impact</h2>

        <ul className="bullet-list">
          <li>Increased revenue collection</li>
          <li>Reduced transformer replacement costs</li>
          <li>Lower outage response costs</li>
          <li>Higher customer satisfaction</li>
        </ul>

        <p className="highlight">
          A 5% loss reduction can recover millions in annual revenue.
        </p>
      </section>

      {/* BUSINESS MODEL */}
      <section id="business" className="section light slide-section">
        <h2>Business Model</h2>

        <p>Monitoring-as-a-Service (MaaS)</p>

        <p className="highlight">
          5,000 transformers × KSh 2,000 per month =
          <br />
          KSh 10,000,000 recurring monthly revenue
        </p>

        <p>Scalable. Sustainable. Profitable.</p>
      </section>

      {/* QUOTE */}
      <section className="quote slide-section">
        <p>
          Today: Kenya. Tomorrow: East Africa. Future: Smart Grids Across
          Emerging Markets.
        </p>
        <span>~ Kemboi Pheniline Jerono</span>
      </section>
    </div>
  );
}

export default Home;
