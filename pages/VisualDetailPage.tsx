import React from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "../Breadcrumb";

interface DetailEntry {
  title: string;
  date: string;
  source: string;
  provenance: string;
  context: string;
  interpretation: string;
  image?: string;
  card: string;
  integrationCards?: { label: string; image: string; caption: string }[];
  subRecords?: { title: string; slug: string }[];
}

const details: Record<string, DetailEntry> = {
  "visual-evolution": {
    title: "Visual Evolution",
    date: "March 29, 2018; February 11, 2019; March 25, 2019; July 15, 2019; December 16, 2019",
    source: "Primary source, Facebook screenshots",
    provenance: "Master chronological motif record. Water / Fish, Butterfly / Roses, Hourglass, Ariel / Mirror, and Cosmic / Galaxy tattoo documentation supplied to the archive. Formerly separate records for Water/Fish and Hourglass are now integrated into this master progression.",
    context: "The records establish documented artifact dates and visual provenance across the full tattoo chronology.",
    interpretation: "Motif relationships and symbolic continuity claims remain later interpretation.",
    image: "/HALF_BUTTERFLY_TATTOO.png",
    card: "Visual 004",
    subRecords: [
      { title: "Water / Fish Tattoo", slug: "water-fish-tattoo" },
      { title: "Butterfly / Roses Tattoo", slug: "butterfly-roses-tattoo" },
      { title: "Hourglass Tattoo", slug: "hourglass-tattoo" },
      { title: "Ariel / Mirror Tattoo", slug: "ariel-mirror-tattoo" },
      { title: "Cosmic / Galaxy Cover-Up", slug: "cosmic-galaxy-coverup" },
    ],
  },
  "hourglass-tattoo": {
    title: "Hourglass Tattoo",
    date: "March 25, 2019",
    source: "Primary source, Facebook screenshot",
    provenance: "Completed tattoo documented on the back of the neck.",
    context: "The supplied image documents a completed tattoo, not an original sketch.",
    interpretation: "No later motif meaning is established by this source.",
    image: "/HOURGLASS_TATTOO.png",
    card: "Visual 003",
  },
  "butterfly-roses-tattoo": {
    title: "Butterfly / Roses Tattoo",
    date: "February 11, 2019",
    source: "Primary source, Facebook screenshot",
    provenance: "Right upper-arm tattoo documented in the supplied social media record.",
    context: "The supplied image documents the tattoo and its recorded date.",
    interpretation: "Transformation or continuity meaning is not presented as verified fact.",
    image: "/HALF_BUTTERFLY_TATTOO.png",
    card: "Visual 004",
  },
  "ariel-mirror-tattoo": {
    title: "Ariel / Mirror Tattoo",
    date: "July 15, 2019",
    source: "Primary source, Facebook screenshot",
    provenance: "Left upper-arm tattoo documented in the supplied social media record, styled around Ariel / mirror imagery.",
    context: "The supplied image documents the tattoo and its recorded date.",
    interpretation: "Mirror or continuity meaning remains later interpretation.",
    image: "/MIRROR_TATTOO.png",
    card: "Visual 004",
  },
  "cosmic-galaxy-coverup": {
    title: "Cosmic / Galaxy Cover-Up",
    date: "December 16, 2019",
    source: "Primary source, Facebook screenshot",
    provenance: "Right forearm cover-up over the earlier Water / Fish tattoo, incorporating cosmic and clock elements.",
    context: "The supplied image documents the later cover-up record.",
    interpretation: "The cover-up relationship is documented provenance. Substrate-continuity language remains interpretation.",
    image: "/COSMIC-SPIRAL-HANDLESS_CLOCK_TATTOO.png",
    card: "Visual 004",
  },
  "water-fish-tattoo": {
    title: "Water / Fish Tattoo",
    date: "March 29, 2018",
    source: "Primary visual source / Facebook post screenshot",
    provenance: "Right forearm tattoo.",
    context: "Original water/fishing intent is documented.",
    interpretation: "Later motif meaning remains interpretation.",
    image: "/WATER_TATTOO.png",
    card: "Visual 006",
  },
  "omega-development": {
    title: "Omega Development",
    date: "Documented across multiple design iterations",
    source: "Design Archive",
    provenance: "Early exploration of the Omega (\u03a9) mark, eight-spoke vault star, and the development of geometric systems later adopted into the GRVEZ VAULT identity.",
    context: "These records document the evolution of geometric and symbolic marks through successive design stages.",
    interpretation: "The designed integration cards (DMONIX Sigil / Omega Mark and Gizzy Graves / \u03b1 Mark) represent later-system synthesis. They are not primary historical evidence of original symbol development.",
    card: "Visual 002",
    integrationCards: [
      { label: "DMONIX / \u03a9 SIGIL", image: "/dmonix-sinreaper-card.jpg", caption: "Later-system integration graphic showing the DMONIX sigil combined with Omega. Not primary historical evidence." },
      { label: "GIZZY GRAVES / \u03b1 MARK", image: "/gizzy-graves-alpha-card.jpg", caption: "Alpha-side counterpart to the DMONIX/Omega integration. Not primary historical evidence." },
    ],
  },
  "recurring-symbols": {
    title: "Recurring Symbols",
    date: "Cross-referenced across archive timeline",
    source: "Cross Reference",
    provenance: "Recurring imagery appears across artwork, journals, tattoo documentation, and later visual identity, aligning with evidence used to support the recovered manuscript.",
    context: "This record catalogs observed recurrences across the archive. The Vault System graphic belongs under this record as a system-integration artifact.",
    interpretation: "Pattern identification is observational. The archive does not assert that recurring imagery constitutes proof of any specific claim.",
    card: "Visual 005",
    integrationCards: [
      { label: "DMONIX / \u03a9 SIGIL", image: "/dmonix-sinreaper-card.jpg", caption: "System-integration graphic. Vault-system identity synthesis for the DMONIX persona." },
      { label: "GIZZY GRAVES / \u03b1 MARK", image: "/gizzy-graves-alpha-card.jpg", caption: "System-integration graphic. \u03b1 counterpart to the \u03a9 integration within the vault system." },
    ],
  },
  "death-of-deceit": {
    title: "Death of Deceit",
    date: "Under restoration",
    source: "Artwork Archive",
    provenance: "Concept artwork exploring the earliest visual language of the archive.",
    context: "This record is currently being preserved and catalogued.",
    interpretation: "Contextual meaning remains under investigation.",
    card: "Visual 001",
  },
  "raven-motif": {
    title: "Raven Motif",
    date: "Recurring across archive timeline",
    source: "Cross Reference: artwork, tattoo records, lyrics, visual identity",
    provenance: "Raven imagery appears across multiple artifact types within the archive, including the documented raven forearm tattoo, concept artwork, song lyrics, and the Gizzy Graves visual identity.",
    context: "This record catalogs raven appearances across the archive timeline.",
    interpretation: "Symbolic meaning attributed to the raven remains later interpretation. The archive documents recurrence, not intent.",
    card: "Visual 007",
  },
  "dmonix-tattoo-record": {
    title: "DMONIX / Jerry Tattoo Motif Record",
    date: "Under restoration",
    source: "Primary visual sources / parallel documentation",
    provenance: "Parallel tattoo motif documentation recording visual correspondences and independent motif development.",
    context: "This record preserves the DMONIX tattoo documentation alongside the archive timeline.",
    interpretation: "Motif correspondence is documented observation. The archive does not assert shared intent without primary evidence.",
    card: "Visual 008",
  },
};

export function VisualDetailPage() {
  const { slug = "visual-evolution" } = useParams();
  const detail = details[slug] || details["visual-evolution"];

  return (
    <section className="page-section">
      <div className="page-content">
        <Breadcrumb items={[{ label: "Archive", to: "/archive" }, { label: "Visual Documentation", to: "/media" }, { label: detail.title }]} />
        <p className="eyebrow">{detail.card} // SOURCE RECORD</p>
        <h1>{detail.title}</h1>

        {detail.image && (
          <img
            src={detail.image}
            alt={`${detail.title} source image`}
            style={{ width: "100%", maxWidth: "900px", display: "block", margin: "2rem 0", borderRadius: "2px" }}
          />
        )}

        <section className="archive-note">
          <p className="eyebrow">SOURCE RECORD</p>
          <h2>{detail.title}</h2>
          <p><strong>Documented date:</strong> {detail.date}</p>
          <p><strong>Primary visual source:</strong> {detail.source}</p>
          <p><strong>Provenance:</strong> {detail.provenance}</p>
        </section>

        <section className="archive-note">
          <p className="eyebrow">DOCUMENTED CONTEXT</p>
          <p>{detail.context}</p>
          <p><strong>Later interpretation:</strong> {detail.interpretation}</p>
        </section>

        {/* Sub-records (for Visual Evolution master record) */}
        {detail.subRecords && detail.subRecords.length > 0 && (
          <section className="archive-note">
            <p className="eyebrow">INTEGRATED RECORDS</p>
            <h2>Motif Progression Detail</h2>
            <p style={{ marginBottom: "1.5rem", color: "var(--muted)" }}>
              The following records are integrated into the master chronological progression.
              Each can be viewed individually for source-level detail.
            </p>
            <div style={{ display: "grid", gap: "0.5rem" }}>
              {detail.subRecords.map((sub) => (
                <Link
                  key={sub.slug}
                  to={`/media/${sub.slug}`}
                  style={{
                    display: "block",
                    padding: "0.75rem 1rem",
                    border: "1px solid rgba(201,210,218,.11)",
                    background: "rgba(255,255,255,.02)",
                    textDecoration: "none",
                    color: "inherit",
                    fontSize: "0.88rem",
                    letterSpacing: "0.06em",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  {sub.title} {"\u2192"}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Integration cards (for Omega Development, Recurring Symbols) */}
        {detail.integrationCards && detail.integrationCards.length > 0 && (
          <section className="archive-note visdoc-detail-integration">
            <p className="eyebrow">LATER INTERPRETATION GRAPHICS</p>
            <h2>System Integration</h2>
            <p style={{ color: "var(--muted)", marginBottom: "0.5rem" }}>
              The following designed graphics represent later-system synthesis.
              They are not primary historical evidence of original symbol development.
            </p>
            <div className="visdoc-detail-integration-grid">
              {detail.integrationCards.map((ic) => (
                <figure key={ic.label} className="visdoc-detail-integration-item" style={{ margin: 0 }}>
                  <img src={ic.image} alt={ic.label} loading="lazy" />
                  <figcaption>
                    {ic.label}
                    <span>{ic.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <section className="archive-note">
          <p className="eyebrow">OPEN QUESTIONS</p>
          <p>
            Any date or meaning not directly established by the source remains
            open for later research.
          </p>
        </section>

        <div className="record-nav">
          <Link to="/media">{"\u2190"} Visual Documentation</Link>
        </div>
      </div>
    </section>
  );
}
