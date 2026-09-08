import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "../Breadcrumb";

export function MediaPage() {
  useEffect(() => {
    document.title = "Visual Documentation | GRVEZ VAULT";
    return () => { document.title = "GRVEZ VAULT | Music \u00b7 Archive \u00b7 Manuscripts \u00b7 Media"; };
  }, []);

  return (
    <section className="page-section manuscripts-page" aria-labelledby="media-heading">
      <div className="page-content">
        <Breadcrumb items={[{ label: "Archive", to: "/archive" }, { label: "Visual Documentation" }]} />
        <p className="eyebrow">ARCHIVE RECORD // 003</p>
        <h1 id="media-heading">Visual Documentation</h1>
        <p className="page-description">
          Artwork. Photography. Symbols. Concept art. Visual evidence preserved and catalogued throughout the archive{"\u2019"}s investigation.
        </p>

        <section className="archive-note">
          <p className="eyebrow">SOURCE-GROUNDED RESTORATION</p>
          <h2>Images now matched.</h2>
          <p>
            Redacted primary-source screenshots are wired to their detail shells.
            Names and photos of third-party commenters are blurred; artifact and
            provenance dates remain visible.
          </p>
          <p style={{ marginTop: "1rem", color: "var(--muted)", fontSize: "0.95rem" }}>
            Original documented artifacts are distinguished from later interpretation graphics.
            The archive does not turn motif comparison into proof.
          </p>
        </section>

        {/* \u2500\u2500 TIER 1: ORIGINAL DOCUMENTED ARTIFACTS \u2500\u2500 */}
        <div className="visdoc-tier-label">
          <p className="eyebrow">ORIGINAL DOCUMENTED ARTIFACTS</p>
          <h2>Primary Evidence</h2>
        </div>

        {/* FEATURED: Visual Evolution (master motif progression) */}
        <Link to="/media/visual-evolution" className="visdoc-exhibit-featured">
          <img
            src="/HALF_BUTTERFLY_TATTOO.png"
            alt="Visual Evolution source compilation"
            loading="lazy"
          />
          <div className="visdoc-exhibit-copy">
            <p className="eyebrow">MASTER MOTIF PROGRESSION</p>
            <h3>Visual Evolution</h3>
            <p>
              Primary-source tattoo records documenting the full visual
              chronology: Water/Fish (March 2018), Butterfly/Roses (February
              2019), Hourglass (March 2019), Ariel/Mirror (July 2019), and
              Cosmic/Spiral cover-up with handless clock (December 2019).
            </p>
            <div className="visdoc-absorbed">
              <strong>Integrated Records</strong>
              Water / Fish Tattoo {"\u00b7"} Hourglass Tattoo {"\u00b7"} Butterfly / Roses {"\u00b7"} Ariel / Mirror {"\u00b7"} Cosmic / Galaxy Cover-Up
            </div>
            <div className="visdoc-status matched">SOURCE MATCHED {"\u2192"}</div>
          </div>
        </Link>

        {/* Standard primary cards */}
        <div className="visdoc-grid" style={{ marginTop: "1.25rem" }}>
          <Link to="/media/death-of-deceit" className="visdoc-exhibit-card">
            <p className="eyebrow">CONCEPT ART</p>
            <h3>Death of Deceit</h3>
            <p>
              Concept artwork exploring the earliest visual language of the archive.
            </p>
            <div className="visdoc-status">UNDER RESTORATION</div>
          </Link>

          <Link to="/media/raven-motif" className="visdoc-exhibit-card">
            <p className="eyebrow">SYMBOL / MOTIF</p>
            <h3>Raven Motif</h3>
            <p>
              Recurring raven imagery across artwork, tattoo documentation,
              lyrics, and visual identity.
            </p>
            <div className="visdoc-status">UNDER RESTORATION</div>
          </Link>
        </div>

        {/* \u2500\u2500 TIER 2: SYMBOL DEVELOPMENT & SYSTEM INTEGRATION \u2500\u2500 */}
        <div className="visdoc-tier-label">
          <p className="eyebrow">SYMBOL DEVELOPMENT & SYSTEM INTEGRATION</p>
          <h2>Interpretation Records</h2>
        </div>

        <div className="visdoc-grid">
          {/* Omega Development */}
          <Link to="/media/omega-development" className="visdoc-exhibit-card">
            <p className="eyebrow">SYMBOL DEVELOPMENT</p>
            <h3>Omega Development</h3>
            <p>
              Early exploration of the Omega mark, eight-spoke star, and the
              development of vault-system geometry.
            </p>
            <div className="visdoc-integration">
              <div className="visdoc-integration-card">
                <img src="/dmonix-sinreaper-card.jpg" alt="DMONIX Omega Sigil integration graphic" loading="lazy" />
                <div className="visdoc-integration-label">
                  DMONIX / {"\u03a9"} SIGIL
                  <span>LATER INTERPRETATION</span>
                </div>
              </div>
              <div className="visdoc-integration-card">
                <img src="/gizzy-graves-alpha-card.jpg" alt="Gizzy Graves Alpha Mark integration graphic" loading="lazy" />
                <div className="visdoc-integration-label">
                  GIZZY GRAVES / {"\u03b1"} MARK
                  <span>LATER INTERPRETATION</span>
                </div>
              </div>
            </div>
            <div className="visdoc-status">UNDER RESTORATION</div>
          </Link>

          {/* Recurring Symbols */}
          <Link to="/media/recurring-symbols" className="visdoc-exhibit-card">
            <p className="eyebrow">CROSS REFERENCE / SYSTEM INTEGRATION</p>
            <h3>Recurring Symbols</h3>
            <p>
              Recurring imagery across artwork, journals, tattoo records, and
              later visual identity. Includes vault-system integration graphics.
            </p>
            <div className="visdoc-integration">
              <div className="visdoc-integration-card">
                <img src="/dmonix-sinreaper-card.jpg" alt="DMONIX Omega Sigil system integration" loading="lazy" />
                <div className="visdoc-integration-label">
                  DMONIX / {"\u03a9"} SIGIL
                  <span>SYSTEM INTEGRATION</span>
                </div>
              </div>
              <div className="visdoc-integration-card">
                <img src="/gizzy-graves-alpha-card.jpg" alt="Gizzy Graves Alpha Mark system integration" loading="lazy" />
                <div className="visdoc-integration-label">
                  GIZZY GRAVES / {"\u03b1"} MARK
                  <span>SYSTEM INTEGRATION</span>
                </div>
              </div>
            </div>
            <div className="visdoc-status">UNDER RESTORATION</div>
          </Link>
        </div>

        {/* DMONIX / Jerry Tattoo Motif Record */}
        <div className="visdoc-grid" style={{ marginTop: "1.25rem" }}>
          <Link to="/media/dmonix-tattoo-record" className="visdoc-exhibit-card">
            <p className="eyebrow">TATTOO / MOTIF RECORD</p>
            <h3>DMONIX / Jerry Tattoo Motif Record</h3>
            <p>
              Parallel tattoo motif documentation recording visual
              correspondences and independent motif development.
            </p>
            <div className="visdoc-status">UNDER RESTORATION</div>
          </Link>
        </div>

        {/* METHODOLOGY NOTE */}
        <div className="visdoc-methodology">
          <p className="eyebrow">ARCHIVAL METHODOLOGY</p>
          <h2>Restoration ongoing.</h2>
          <p>
            These records preserve what the supplied sources actually establish:
            artifact identity, documented date, source type, and provenance
            context. Open questions stay open.
          </p>
          <p style={{ marginTop: "1rem", fontSize: "0.85rem" }}>
            Designed integration cards are labeled as later interpretation and
            are not presented as primary historical evidence.
          </p>
        </div>
      </div>
    </section>
  );
}
