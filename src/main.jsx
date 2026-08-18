import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const features = [
  {
    icon: "⚖",
    title: "Judgment Translator",
    text: "Understand any court order in plain language."
  },
  {
    icon: "⌕",
    title: "Legal Research AI",
    text: "Ask questions, get answers with citations."
  },
  {
    icon: "▣",
    title: "eCourts Dashboard",
    text: "Keep cases, hearings, and dates in one place."
  },
  {
    icon: "◉",
    title: "Court Audio Notes",
    text: "Record hearings and get instant transcripts."
  }
];

function App() {
  const waitlistHref =
    "mailto:hello@ratioflow.in?subject=RatioFlow%20waitlist&body=Hi%20RatioFlow%2C%0A%0AI%27d%20like%20to%20join%20the%20waitlist.";

  return (
    <main className="site-shell">
      <header className="nav">
        <a className="brand" href="/" aria-label="RatioFlow home">
          Ratio<span>Flow</span>
        </a>
        <a className="nav-link" href={waitlistHref}>Join waitlist</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-glow" aria-hidden="true" />
        <p className="eyebrow"><span /> Legal intelligence, simplified</p>
        <h1 id="hero-title">
          Make sense of the law.
          <br />
          <em>Move forward.</em>
        </h1>
        <p className="hero-copy">
          RatioFlow turns complex legal information into clear, actionable
          answers — built for the people who need to understand what comes next.
        </p>
        <a className="cta" href={waitlistHref}>
          Join the waitlist
          <span aria-hidden="true">↗</span>
        </a>
        <p className="microcopy">Early access · Built for India</p>
      </section>

      <section className="coming" aria-labelledby="coming-title">
        <div className="section-heading">
          <p className="eyebrow"><span /> What’s coming</p>
          <h2 id="coming-title">Less searching. More understanding.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <a className="brand footer-brand" href="/">Ratio<span>Flow</span></a>
          <p>Legal clarity, without the legalese.</p>
        </div>
        <div className="footer-right">
          <div className="socials">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://x.com/" target="_blank" rel="noreferrer">X</a>
            <a href="mailto:hello@ratioflow.in">Email</a>
          </div>
          <small>© {new Date().getFullYear()} RatioFlow. All rights reserved.</small>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);