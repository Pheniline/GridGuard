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
      </section>
      <section id="about" className="section dark slide-section">
        <h3>Problem Statement</h3>
        <p>
          Kenya Power and Lighting Company is our country’s pride aimed to
          transmit, distribute & retail electricity to customers throughout
          Kenya ; an entity that manages the power lines and your electricity
          bills.Although Kenya’s power grid losses billions due to ;
        </p>

        <ul className="bullet-list">
          <li>Electricity is stolen through illegal connections.</li>
          <li>Faults are detected too late.</li>
          <li>Transformer overload and explode unexpectedly.</li>
          <li>Engineers only respond after customers complain.</li>
        </ul>

        <p className="highlight">
          This is reactive infrastructure. Kenya needs predictive
          infrastructure.
        </p>
      </section>

      {/* PROPOSED SOLUTION */}
      <section className="section light slide-section">
        <h2>Proposed Solution</h2>

        <p>GRIDGUARD a small smart device installed on transformers.It:</p>

        <ul className="bullet-list">
          <li>Report its transformer's health in real time</li>
          <li>Detect illegal connections instantly</li>
          <li>Predict overload before explosion</li>
          <li> Alert engineers automatically</li>
          <li> Provide live dashboards nationwide</li>
        </ul>

        <p>It then compares:</p>
        <p> Transformer Output vs Total Registered Customer Consumption</p>
        <p>
          If there is a mismatch beyond acceptable tolerance → 🚨 Theft alert
          triggered.
        </p>
        <p>
          {" "}
          If temperature rises abnormally → 🚨 Predictive overload warning.
        </p>

        <p className="highlight">
          GridGuard does not wait for failure — it prevents it.GridGuard
          transforms passive transformers into intelligent assets.
        </p>
      </section>

      {/* TECHNOLOGY STACK */}
      <section id="tech" className="section dark slide-section">
        <h2>Technological Stack</h2>

        <div className="grid">
          <div className="card">Current Transformers (CT Sensors)</div>
          <div className="card">Voltage Sensors</div>
          <div className="card">Temperature Probes</div>
          <div className="card">ESP32 Microcontroller</div>
          <div className="card">GSM / LoRa Communication</div>
          <div className="card">Cloud Analytics Engine</div>
          <div className="card">Cloud dashboard</div>
          <div className="card">Anomaly detection algorithm</div>
          <div className="card">Predictive load model</div>
          <div className="card"> Real-time alert system</div>
          <div className="card">AI-based consumption pattern learning</div>
          <div className="card">Automated maintenance scheduling</div>
        </div>
      </section>

      {/* LIVE DEMO */}
      <section className="section light slide-section demo">
        <h2>Live System Demonstration</h2>
        <p>Experience real-time transformer intelligence.</p>
        <Link to="/dashboard">
          <button className="demo-btn">Launch Live Demo</button>
        </Link>
      </section>

      {/* SYSTEM ARCHITECTURE */}
      <section className="section dark slide-section">
        <h2>System Architecture</h2>
        <img
          src="images/system-diagram.png"
          alt="GridGuard System Architecture"
          className="architecture-img"
        />
      </section>

      {/* ECONOMIC IMPACT */}
      <section id="impact" className="section light slide-section">
        <h2>Economic Impact</h2>
        <p>
          GridGuard reduces non-technical losses by just 5% this translates to;
        </p>

        <ul className="bullet-list">
          <li>Recover millions in lost revenue annually</li>
          <li>Reduce emergency transformer replacements</li>
          <li>Cut outage response costs</li>
          <li>Improve customer satisfaction</li>
        </ul>

        <p className="highlight">
          The percentage may seem small but improvement generates massive
          financial returns.
        </p>
      </section>

      {/* BUSINESS MODEL */}
      <section id="business" className="section dark slide-section">
        <h2>Business Model</h2>

        <p>
          Once GridGuard starts operating instead as selling as a hardware we
          may operate as Monitoring-as-a-Service (MaaS) KPLC pays per
          transformer monthly subscription
        </p>
        <p>Example scenario:</p>

        <p className="highlight">
          5,000 transformers × KSh 2,000 per month =
          <br />
          KSh 10,000,000 recurring monthly revenue
        </p>

        <p className="highlight">Scalable. Sustainable. Profitable.</p>
      </section>

      {/* QUOTE */}
      <section className="quote slide-section">
        <p>
          Today: Kenya. Tomorrow: East Africa. Future: Smart Grids Across
          Emerging Markets.GridGuard is just not a device but a foundation of a
          smarter African Power infrastructure.”
        </p>
        <span>~ Kemboi Pheniline Jerono</span>
        <span>Electical Engineer Student</span>
      </section>
    </div>
  );
}

export default Home;
