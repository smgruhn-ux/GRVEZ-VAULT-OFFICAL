import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function DxxdGrvezPage() {
  useEffect(() => {
    document.title = "DXXD GRVEZ | GRVEZ VAULT";
    return () => { document.title = "GRVEZ VAULT | Music \u00b7 Archive \u00b7 Manuscripts \u00b7 Media"; };
  }, []);

  return (
    <section className="page-section" aria-labelledby="dxxd-heading">
      <div className="page-content">

        <div className="page-intro">
          <p className="eyebrow">BAND PROJECT</p>
          <h1 id="dxxd-heading">DXXD GRVEZ</h1>
          <p>
            The current band and music project identity within the GRVEZ VAULT
            creative world, connecting Gizzy Graves and DMONIX.
          </p>
        </div>

        <section className="archive-note">
          <p className="eyebrow">THE PROJECT</p>
          <h2>A Different Frequency</h2>
          <p>
            DXXD GRVEZ represents the heavier collaborative dimension of the
            GRVEZ VAULT music world. It brings together the creative identities
            of Gizzy Graves and DMONIX under a single project.
          </p>
        </section>

        <section className="archive-note">
          <p className="eyebrow">CONNECTED</p>
          <h2>Within the Vault</h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
            <Link to="/about/gizzy-graves" className="metal-button">Gizzy Graves</Link>
            <Link to="/about/dmonix" className="metal-button secondary">DMONIX</Link>
            <Link to="/music" className="metal-button secondary">All Releases</Link>
          </div>
        </section>

      </div>
    </section>
  );
}
