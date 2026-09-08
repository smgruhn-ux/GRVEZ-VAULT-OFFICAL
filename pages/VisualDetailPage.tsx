import React from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "../Breadcrumb";

type Card = { label: string; image: string; caption: string };
type Detail = {
  title: string; date: string; source: string; provenance: string; context: string;
  interpretation: string; card: string; image?: string; integrationCards?: Card[];
  subRecords?: { title: string; slug: string }[];
  stages?: { label: string; text: string }[];
  motifs?: { title: string; text: string }[];
};

const characterCards: Card[] = [
  { label: "DMONIX / Ω SIGIL", image: "/dmonix-sinreaper-card.jpg", caption: "Later-system integration graphic, not primary historical evidence." },
  { label: "GIZZY GRAVES / α MARK", image: "/gizzy-graves-alpha-card.jpg", caption: "Alpha-side counterpart, not primary historical evidence." },
];

const details: Record<string, Detail> = {
  "visual-evolution": {
    title: "Visual Evolution", card: "Visual 004", date: "March 29, 2018; February 11, 2019; March 25, 2019; July 15, 2019; December 16, 2019",
    source: "Primary source, Facebook screenshots",
    provenance: "Master chronological motif record for Water / Fish, Butterfly / Roses, Hourglass, Ariel / Mirror, and Cosmic / Galaxy tattoo documentation. Water/Fish and Hourglass remain integrated here rather than top-level public cards.",
    context: "The records establish documented artifact dates and visual provenance across the tattoo chronology.",
    interpretation: "Motif relationships and symbolic continuity claims remain later interpretation. Hourglass date-to-image mapping remains flagged as uncertain; Ariel/Mirror image-to-date mapping remains open for confirmation.",
    image: "/HALF_BUTTERFLY_TATTOO.png",
    subRecords: ["Water / Fish Tattoo|water-fish-tattoo", "Butterfly / Roses Tattoo|butterfly-roses-tattoo", "Hourglass Tattoo|hourglass-tattoo", "Ariel / Mirror Tattoo|ariel-mirror-tattoo", "Cosmic / Galaxy Cover-Up|cosmic-galaxy-coverup"].map((x) => { const [title, slug] = x.split("|"); return { title, slug }; }),
  },
  "water-fish-tattoo": { title: "Water / Fish Tattoo", card: "Visual 006", date: "March 29, 2018", source: "Primary visual source / Facebook post screenshot", provenance: "Right forearm tattoo, later covered by the Cosmic / Galaxy tattoo.", context: "Original water/fishing intent is documented.", interpretation: "Later motif meaning remains interpretation.", image: "/WATER_TATTOO.png" },
  "butterfly-roses-tattoo": { title: "Butterfly / Roses Tattoo", card: "Visual 004", date: "February 11, 2019", source: "Primary source, Facebook screenshot", provenance: "Right upper-arm tattoo documented in the supplied social media record.", context: "The supplied image documents the tattoo and its recorded date.", interpretation: "Transformation or continuity meaning is not presented as verified fact.", image: "/HALF_BUTTERFLY_TATTOO.png" },
  "hourglass-tattoo": { title: "Hourglass Tattoo", card: "Visual 003", date: "March 25, 2019 (date-to-image mapping flagged as uncertain)", source: "Primary source, Facebook screenshot", provenance: "Completed tattoo documented on the back of the neck. The archive source index flags the mapping against July 2019 records.", context: "The supplied image documents a completed tattoo, not an original sketch. Do not treat the current date/image pairing as finally resolved.", interpretation: "No later motif meaning is established by this source.", image: "/HOURGLASS_TATTOO.png" },
  "ariel-mirror-tattoo": { title: "Ariel / Mirror Tattoo", card: "Visual 004", date: "July 15, 2019 (image-to-date mapping flagged for confirmation)", source: "Primary source, Facebook screenshot", provenance: "Left upper-arm tattoo documented in the supplied social media record, styled around Ariel / mirror imagery. Original Ariel context is preserved.", context: "The supplied image documents the tattoo and its recorded date, but the archive keeps the mapping open rather than silently resolving it.", interpretation: "Mirror or continuity meaning remains later interpretation.", image: "/MIRROR_TATTOO.png" },
  "cosmic-galaxy-coverup": { title: "Cosmic / Galaxy Cover-Up", card: "Visual 004", date: "December 16, 2019", source: "Primary source, Facebook screenshot", provenance: "Right forearm cover-up over the earlier Water / Fish tattoo, incorporating cosmic and clock elements.", context: "The supplied image documents the later cover-up record.", interpretation: "The cover-up relationship is documented provenance. Substrate-continuity language remains interpretation.", image: "/COSMIC-SPIRAL-HANDLESS_CLOCK_TATTOO.png" },
  "omega-development": {
    title: "Omega Development", card: "Visual 002", date: "Documented across multiple design iterations", source: "Design Archive",
    provenance: "Early exploration of the Omega (Ω) mark, eight-spoke vault star, and developing geometric systems.",
    context: "The sequence below preserves early design investigation separately from later consolidated meaning.",
    interpretation: "Later Omega/fracture/DMONIX integration must not be projected backward onto the earliest attempts.",
    stages: [
      { label: "EARLY RING / CIRCLE ATTEMPTS", text: "Repeated red circle and ring forms occurred during attempts to generate the Omega. The recurrence is part of the development record, not a confirmed later meaning." },
      { label: "EARLY EIGHT-SPOKE / EIGHT-POINT EXPLORATION", text: "Eight-spoke and eight-point geometry appeared during early GRVEZ creative development while the Vault, star forms, gates, and related shapes were being investigated." },
      { label: "STRUCTURAL QUESTION", text: "The eight-point relationship was being investigated because the Vault, star, and other developing forms repeatedly used eight. This records an active design question, not a final interpretation." },
      { label: "LATER OMEGA / FRACTURE INTEGRATION", text: "More explicit Omega versions, fracture/rupture imagery, and later DMONIX/GRVEZ integration came afterward." },
    ],
    integrationCards: characterCards,
  },
  "recurring-symbols": {
    title: "Recurring Symbols", card: "Visual 005", date: "Cross-referenced across archive timeline", source: "Cross Reference",
    provenance: "Recurring imagery appears across artwork, journals, tattoo documentation, and later visual identity. The Vault System graphic belongs here as a later system-integration artifact.",
    context: "This record catalogs observed recurrences across the archive.",
    interpretation: "Pattern identification is observational. It is not proof of intent or causation.", integrationCards: characterCards,
  },
  "death-of-deceit": {
    title: "Death of Deceit", card: "Visual 001", date: "Pre-May 23, 2026 (exact creation date not supplied)", source: "Death of Deceit Tattoo Concept Pre May 23.png",
    provenance: "Primary tattoo concept supplied for the archive. The source establishes that the concept predates May 23, 2026; it does not establish an exact creation date or complete provenance chain.",
    context: "Visible elements: a large symmetrical black-and-white wing structure; central vertical spear, blade, or spine-like axis; skull or rib-like central skeletal forms; hanging chains; dark dripping or dissolving lower structure; detached organic or flower-like forms near the upper-right and lower-left; and gothic black-metal style title treatment at the bottom.",
    interpretation: "Later GRVEZ interpretation remains separate. The concept may be compared with later fracture, threshold, death, gate, raven, or Omega language only as a later reading. The source does not establish those meanings were consciously intended when made.",
  },
  "raven-motif": { title: "Raven Motif", card: "Visual 007", date: "Recurring across archive timeline", source: "Cross Reference: artwork, tattoo records, lyrics, visual identity", provenance: "Raven imagery appears across multiple artifact types within the archive.", context: "This record catalogs raven appearances across the archive timeline.", interpretation: "Symbolic meaning attributed to the raven remains later interpretation." },
  "dmonix-tattoo-record": {
    title: "DMONIX / Jerry Tattoo Motif Record", card: "Visual 008", date: "Dates not supplied in the accessible source package", source: "Primary tattoo images supplied for the consolidated record; source package requires reattachment for public image wiring",
    provenance: "One consolidated record for the documented Jerry / DMONIX tattoo motif set. No separate public cards are created for individual motifs.",
    context: "Direct tattoo evidence is catalogued below by visible motif. The accessible workspace contains the motif list but not the nine source images or per-motif dates, locations, and provenance metadata.",
    interpretation: "Later GRVEZ comparison is limited to possible visual correspondences: eye/awareness forms, diamond and star geometry, water/fish and wave imagery, spiral/spear geometry, flames, chains, and death/threshold imagery. These are comparison prompts, not claims of shared intent, supernatural meaning, or historical causation.",
    motifs: ["One-Eyed Skull", "Anubis / Jackal-Headed Figure", "Diamond / Pyramid Form with Small Star", "All-Seeing Eye / Eye Motif", "Flames", "Beetle / Scarab-Like Figure Holding a Sphere", "Fish and Waves", "Spiral with Spear-Like Elements", "Mummy with Chains"].map((title) => ({ title, text: "Visible motif supplied for the consolidated record. Source image, date, location, and provenance still require reattachment or confirmation." })),
  },
};

function Integration({ cards }: { cards: Card[] }) {
  return <section className="archive-note visdoc-detail-integration"><p className="eyebrow">LATER INTERPRETATION GRAPHICS</p><h2>System Integration</h2><p style={{ color: "var(--muted)" }}>Designed graphics represent later-system synthesis, not primary historical evidence.</p><div className="visdoc-detail-integration-grid">{cards.map((card) => <figure key={card.label} className="visdoc-detail-integration-item" style={{ margin: 0 }}><img src={card.image} alt={card.label} loading="lazy" /><figcaption>{card.label}<span>{card.caption}</span></figcaption></figure>)}</div></section>;
}

export function VisualDetailPage() {
  const { slug = "visual-evolution" } = useParams();
  const detail = details[slug] || details["visual-evolution"];
  return <section className="page-section"><div className="page-content"><Breadcrumb items={[{ label: "Archive", to: "/archive" }, { label: "Visual Documentation", to: "/media" }, { label: detail.title }]} /><p className="eyebrow">{detail.card} // SOURCE RECORD</p><h1>{detail.title}</h1>
    {detail.image ? <img src={detail.image} alt={`${detail.title} source image`} style={{ width: "100%", maxWidth: "900px", display: "block", margin: "2rem 0" }} /> : detail.title === "Death of Deceit" ? <section className="archive-note"><p className="eyebrow">PRIMARY ARTIFACT IMAGE</p><h2>Source image pending reattachment</h2><p>The supplied filename and visible composition are documented below, but the PNG is not present in the accessible ClickUp attachment bundle or staging branch. It is not being replaced with a placeholder.</p></section> : null}
    <section className="archive-note"><p className="eyebrow">SOURCE RECORD</p><h2>{detail.title}</h2><p><strong>Documented date:</strong> {detail.date}</p><p><strong>Primary visual source:</strong> {detail.source}</p><p><strong>Provenance:</strong> {detail.provenance}</p></section>
    <section className="archive-note"><p className="eyebrow">DOCUMENTED CONTEXT</p><p>{detail.context}</p><p><strong>Later interpretation:</strong> {detail.interpretation}</p></section>
    {detail.stages && <section className="archive-note"><p className="eyebrow">DOCUMENTED DEVELOPMENT SEQUENCE</p><h2>What developed, and when</h2><div style={{ display: "grid", gap: "1rem", marginTop: "1.5rem" }}>{detail.stages.map((stage) => <div key={stage.label} style={{ borderTop: "1px solid rgba(201,210,218,.11)", paddingTop: "1rem" }}><p className="eyebrow" style={{ marginBottom: ".35rem" }}>{stage.label}</p><p style={{ margin: 0 }}>{stage.text}</p></div>)}</div></section>}
    {detail.motifs && <section className="archive-note"><p className="eyebrow">DIRECT TATTOO EVIDENCE</p><h2>Nine motifs, one consolidated record</h2><p style={{ color: "var(--muted)" }}>These are not separate public cards. The source images, dates, and body/location metadata still need to be reattached before image panels can be locked.</p><div style={{ display: "grid", gap: ".75rem", marginTop: "1.5rem" }}>{detail.motifs.map((motif) => <div key={motif.title} style={{ border: "1px solid rgba(201,210,218,.11)", padding: "1rem" }}><p className="eyebrow" style={{ marginBottom: ".35rem" }}>DIRECT EVIDENCE / IMAGE PENDING</p><h3 style={{ marginBottom: ".35rem", fontSize: "1.15rem" }}>{motif.title}</h3><p style={{ margin: 0, color: "var(--muted)" }}>{motif.text}</p></div>)}</div></section>}
    {detail.subRecords && <section className="archive-note"><p className="eyebrow">INTEGRATED RECORDS</p><h2>Motif Progression Detail</h2><p style={{ color: "var(--muted)" }}>These records remain inside the Visual Evolution master chronology, not as top-level public cards.</p><div style={{ display: "grid", gap: ".5rem" }}>{detail.subRecords.map((sub) => <Link key={sub.slug} to={`/media/${sub.slug}`} style={{ display: "block", padding: ".75rem 1rem", border: "1px solid rgba(201,210,218,.11)" }}>{sub.title} →</Link>)}</div></section>}
    {detail.integrationCards && <Integration cards={detail.integrationCards} />}
    <section className="archive-note"><p className="eyebrow">OPEN QUESTIONS</p><p>Any date, identity, provenance, or meaning not directly established by the source remains open for later research.</p></section><div className="record-nav"><Link to="/media">← Visual Documentation</Link></div>
  </div></section>;
}
