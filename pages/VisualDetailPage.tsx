import React from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "../Breadcrumb";

const details: Record<string, { title: string; date: string; source: string; provenance: string; image: string; card: string; notes: string }> = {
  "visual-evolution": { title: "Visual Evolution", date: "March 29, 2018; February 11, 2019; July 15, 2019; December 16, 2019", source: "Primary source, Facebook screenshots", provenance: "Water / Fish, Butterfly / Roses, Ariel / Mirror, and Cosmic / Galaxy tattoo documentation supplied to the archive.", image: "https://u234214232.p.clickup-attachments.com/u234214232/5b262759-e576-49a4-a049-4c36c03c8484/water_fish_2018.png?view=open", card: "Visual 004", notes: "The records establish documented artifact dates and visual provenance. Motif relationships remain later interpretation." },
  "hourglass-tattoo": { title: "Hourglass Tattoo", date: "March 25, 2019", source: "Primary source, Facebook screenshot", provenance: "Completed tattoo documented on the back of the neck.", image: "https://u234214232.p.clickup-attachments.com/u234214232/ed4a7ca3-6901-410f-bbe7-4d077c491a73/ariel_mirror_2019.png?view=open", card: "Visual 003", notes: "The supplied image documents a completed tattoo, not an original sketch." },
  "butterfly-roses-tattoo": { title: "Butterfly / Roses Tattoo", date: "February 11, 2019", source: "Primary source, Facebook screenshot", provenance: "Right upper-arm tattoo documented in the supplied social media record.", image: "https://u234214232.p.clickup-attachments.com/u234214232/4f31948a-adeb-4e05-9218-367c28cd2010/butterfly_roses_2019.png?view=open", card: "Visual 004", notes: "Transformation or continuity meaning is not presented as verified fact." },
  "ariel-mirror-tattoo": { title: "Ariel / Mirror Tattoo", date: "July 15, 2019", source: "Primary source, Facebook screenshot", provenance: "Left upper-arm tattoo documented in the supplied social media record, styled around Ariel / mirror imagery.", image: "https://u234214232.p.clickup-attachments.com/u234214232/56ad0121-c4ef-47f5-a584-79d42d7080e1/hourglass_2019.png?view=open", card: "Visual 004", notes: "Mirror or continuity meaning remains later interpretation." },
  "cosmic-galaxy-coverup": { title: "Cosmic / Galaxy Cover-Up", date: "December 16, 2019", source: "Primary source, Facebook screenshot", provenance: "Right forearm cover-up over the earlier Water / Fish tattoo, incorporating cosmic and clock elements.", image: "https://u234214232.p.clickup-attachments.com/u234214232/62b9cd30-9fcd-434c-bdb3-4c493483e12c/cosmic_coverup_2019.png?view=open", card: "Visual 004", notes: "The cover-up relationship is documented provenance. Substrate-continuity language remains interpretation." },
  "water-fish-tattoo": { title: "Water / Fish Tattoo", date: "March 29, 2018", source: "Primary visual source / Facebook post screenshot", provenance: "Right forearm tattoo.", image: "/WATER_TATTOO.png", card: "Visual 006", notes: "Original water/fishing intent is documented. Later motif meaning remains interpretation." },
};

export function VisualDetailPage() {
  const { slug = "visual-evolution" } = useParams();
  const detail = details[slug] || details["visual-evolution"];
  return <section className="page-section"><div className="page-content">
    <Breadcrumb items={[{ label: "Archive", to: "/archive" }, { label: "Visual Documentation", to: "/media" }, { label: detail.title }]} />
    <p className="eyebrow">{detail.card} // SOURCE RECORD</p><h1>{detail.title}</h1>
    <img src={detail.image} alt={`${detail.title} redacted source`} style={{ width: "100%", maxWidth: "900px", display: "block", margin: "2rem 0", borderRadius: "2px" }} />
    <section className="archive-note"><p className="eyebrow">ARTIFACT</p><h2>{detail.title}</h2><p><strong>Documented date:</strong> {detail.date}</p><p><strong>Source:</strong> {detail.source}</p><p><strong>Provenance:</strong> {detail.provenance}</p></section>
    <section className="archive-note"><p className="eyebrow">WHAT THE SOURCE ESTABLISHES</p><p>{detail.notes}</p></section>
    <section className="archive-note"><p className="eyebrow">OPEN QUESTIONS</p><p>Any date or meaning not directly established by the source remains open for later research.</p></section>
    <div className="record-nav"><Link to="/media">← Visual Documentation</Link></div>
  </div></section>;
}
