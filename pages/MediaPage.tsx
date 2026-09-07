import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "../Breadcrumb";

const records = [
  { id: "001", type: "CONCEPT ART", title: "Death of Deceit", preview: "Concept artwork exploring the earliest visual language of the archive.", source: "Artwork Archive", status: "UNDER RESTORATION", route: "/record/005" },
  { id: "002", type: "SYMBOL", title: "Omega Development", preview: "Early exploration of the Omega mark and eight-point star.", source: "Design Archive", status: "UNDER RESTORATION", route: "/record/006" },
  { id: "003", type: "TATTOO", title: "Hourglass Tattoo", preview: "Primary Facebook screenshot documenting the completed tattoo.", source: "Primary source, Facebook screenshot", status: "SOURCE MATCHED", route: "/media/hourglass-tattoo", image: "https://u234214232.p.clickup-attachments.com/u234214232/ed4a7ca3-6901-410f-bbe7-4d077c491a73/ariel_mirror_2019.png?view=open" },
  { id: "004", type: "PHOTOGRAPH", title: "Visual Evolution", preview: "Five primary-source tattoo records documenting the visual chronology.", source: "Primary source, Facebook screenshots", status: "SOURCE MATCHED", route: "/media/visual-evolution", image: "https://u234214232.p.clickup-attachments.com/u234214232/5b262759-e576-49a4-a049-4c36c03c8484/water_fish_2018.png?view=open" },
  { id: "005", type: "TATTOO", title: "Water / Fish Tattoo", preview: "Primary visual source documenting the original water/fishing intent.", source: "Primary visual source, Facebook post screenshot", status: "PRE-FRAMEWORK VISUAL DOCUMENTATION", route: "/media/water-fish-tattoo", image: "/WATER_TATTOO.png" },
  { id: "006", type: "ARCHIVIST'S OBSERVATION", title: "Recurring Symbolism", preview: "Recurring imagery appears across artwork, journals, and later visual identity, aligning with the evidence used to support the recovered manuscript.", source: "Cross Reference", status: "UNDER RESTORATION", route: "/record/007" },
];

export function MediaPage() {
  useEffect(() => { document.title = "Visual Documentation | GRVEZ VAULT"; return () => { document.title = "GRVEZ VAULT | Music · Archive · Manuscripts · Media"; }; }, []);
  return <section className="page-section manuscripts-page" aria-labelledby="media-heading"><div className="page-content">
    <Breadcrumb items={[{ label: "Archive", to: "/archive" }, { label: "Visual Documentation" }]} />
    <p className="eyebrow">ARCHIVE RECORD // 003</p><h1 id="media-heading">Visual Documentation</h1>
    <p className="page-description">Artwork. Photography. Concepts. Symbols. Visual evidence preserved throughout the archive's investigation.</p>
    <section className="archive-note"><p className="eyebrow">SOURCE-GROUNDED RESTORATION</p><h2>Images now matched.</h2><p>Redacted primary-source screenshots are wired to their detail shells. Names and photos of third-party commenters are blurred; artifact and provenance dates remain visible.</p><p style={{ marginTop: "1rem", color: "var(--muted)", fontSize: "0.95rem" }}>Interpretive claims remain labeled as interpretation. The archive does not turn motif comparison into proof.</p></section>
    <section className="archive-section"><div className="section-heading"><p className="eyebrow">RECOVERED VISUAL RECORDS</p><h2>Catalogued Evidence</h2></div><div className="fragment-grid">{records.map((record) => { const content = <><div className="fragment-header"><span className="fragment-id">VISUAL {record.id}</span><span className="fragment-type">{record.type}</span></div>{record.image && <img src={record.image} alt={`${record.title} source image`} style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover", margin: "1rem 0", borderRadius: "2px" }} />}<h3>{record.title}</h3><p className="fragment-preview">{record.preview}</p><div className="fragment-footer"><p><strong>Recovered From</strong><br />{record.source}</p><div className="fragment-status">{record.status} →</div></div></>; return record.image ? <Link key={record.id} to={record.route} className="fragment-card" style={{ textDecoration: "none" }}>{content}</Link> : <article key={record.id} className="fragment-card">{content}</article>; })}</div></section>
    <section className="archive-note" style={{ marginTop: "4rem" }}><p className="eyebrow">ARCHIVIST'S NOTE</p><h2>Restoration ongoing.</h2><p>These records preserve what the supplied sources actually establish: artifact identity, documented date, source type, and provenance context. Open questions stay open.</p></section>
  </div></section>;
}
