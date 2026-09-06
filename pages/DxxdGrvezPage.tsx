import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function DxxdGrvezPage() {
  useEffect(() => { document.title = "DXXD GRVEZ | GRVEZ VAULT"; return () => { document.title = "GRVEZ VAULT | Music · Archive · Manuscripts · Media"; }; }, []);
  return (
    <section className="page-section dxxd-page" aria-labelledby="dxxd-heading">
      <div className="dxxd-hero"><img src="/DXXD_GRVEZ.PNG" alt="DXXD GRVEZ" loading="eager" onError={(e) => { e.currentTarget.src = "/dmonix-hero.png"; }} /></div>
      <div className="page-content">
        <div className="page-intro"><p className="eyebrow">BAND PROJECT</p><h1 id="dxxd-heading">DXXD GRVEZ</h1><p>The current band and music project identity within the GRVEZ VAULT creative world, connecting Gizzy Graves and DMONIX.</p></div>
        <section className="archive-note"><p className="eyebrow">THE PROJECT</p><h2>Project Description</h2><p>The fuller DXXD GRVEZ project description will be added here when provided.</p></section>
        <section className="archive-note"><p className="eyebrow">CONNECTED</p><h2>Within the Vault</h2><div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}><Link to="/about/gizzy-graves" className="metal-button">Gizzy Graves</Link><Link to="/about/dmonix" className="metal-button secondary">DMONIX</Link><Link to="/music" className="metal-button secondary">All Releases</Link></div></section>
      </div>
    </section>
  );
}
