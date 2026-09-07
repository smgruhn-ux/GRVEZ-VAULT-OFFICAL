import React from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "../Breadcrumb";

const details: Record<string, { title: string; date: string; source: string; provenance: string; context: string; interpretation: string; image?: string; card: string }> = {
  "visual-evolution": { title: "Visual Evolution", date: "March 29, 2018; February 11, 2019; July 15, 2019; December 16, 2019", source: "Primary source, Facebook screenshots", provenance: "Water / Fish, Butterfly / Roses, Ariel / Mirror, and Cosmic / Galaxy tattoo documentation supplied to the archive.", context: "The records establish documented artifact dates and visual provenance.", interpretation: "Motif relationships remain later interpretation.", card: "Visual 004" },
  "hourglass-tattoo": { title: "Hourglass Tattoo", date: "March 25, 2019", source: "Primary source, Facebook screenshot", provenance: "Completed tattoo documented on the back of the neck.", context: "The supplied image documents a completed tattoo, not an original sketch.", interpretation: "No later motif meaning is established by this source.", image: "https://u234214232.p.clickup-attachments.com/u234214232/ed4a7ca3-6901-410f-bbe7-4d077c491a73/ariel_mirror_2019.png?view=open", card: "Visual 003" },
  "butterfly-roses-tattoo": { title: "Butterfly / Roses Tattoo", date: "February 11, 2019", source: "Primary source, Facebook screenshot", provenance: "Right upper-arm tattoo documented in the supplied social media record.", context: "The supplied image documents the tattoo and its recorded date.", interpretation: "Transformation or continuity meaning is not presented as verified fact.", image: "https://u234214232.p.clickup-attachments.com/u234214232/4f31948a-adeb-4e05-9218-367c28cd2010/butterfly_roses_2019.png?view=open", card: "Visual 004" },
  "ariel-mirror-tattoo": { title: "Ariel / Mirror Tattoo", date: "July 15, 2019", source: "Primary source, Facebook screenshot", provenance: "Left upper-arm tattoo documented in the supplied social media record, styled around Ariel / mirror imagery.", context: "The supplied image documents the tattoo and its recorded date.", interpretation: "Mirror or continuity meaning remains later interpretation.", image: "https://u234214232.p.clickup-attachments.com/u234214232/56ad0121-c4ef-47f5-a584-79d42d7080e1/hourglass_2019.png?view=open", card: "Visual 004" },
  "cosmic-galaxy-coverup": { title: "Cosmic / Galaxy Cover-Up", date: "December 16, 2019", source: "Primary source, Facebook screenshot", provenance: "Right forearm cover-up over the earlier Water / Fish tattoo, incorporating cosmic and clock elements.", context: "The supplied image documents the later cover-up record.", interpretation: "The cover-up relationship is documented provenance. Substrate-continuity language remains interpretation.", image: "https://u234214232.p.clickup-attachments.com/u234214232/62b9cd30-9fcd-434c-bdb3-4c493483e12c/cosmic_coverup_2019.png?view=open", card: "Visual 004" },
  "water-fish-tattoo": { title: "Water / Fish Tattoo", date: "March 29, 2018", source: "Primary visual source / Facebook post screenshot", provenance: "Right forearm tattoo.", context: "Original water/fishing intent is documented.", interpretation: "Later motif meaning remains interpretation.", image: "/WATER_TATTOO.png", card: "Visual 006" },
};

export function VisualDetailPage() {
  const { slug = "visual-evolution" } = useParams();
  const detail = details[slug] || details["visual-evolution"];
  return <section className="page-section"><div className="page-content">
    <Breadcrumb items={[{ label: "Archive", to: "/archive" }, { label: "Visual Documentation", to: "/media" }, { label: detail.title }]} />
    <p className="eyebrow">{detail.card} // SOURCE RECORD</p><h1>{detail.title}</h1>
    <img src={detail.image} alt={`${detail.title} source image`} style={{ width: "100%", maxWidth: "900px", display: "block", margin: "2rem 0", borderRadius: "2px" }} />
    <section className="archive-note"><p className="eyebrow">SOURCE RECORD</p><h2>{detail.title}</h2><p><strong>Documented date:</strong> {detail.date}</p><p><strong>Primary visual source:</strong> {detail.source}</p><p><strong>Provenance:</strong> {detail.provenance}</p></section>
    <section className="archive-note"><p className="eyebrow">DOCUMENTED CONTEXT</p><p>{detail.context}</p><p><strong>Later interpretation:</strong> {detail.interpretation}</p></section>
    <section className="archive-note"><p className="eyebrow">OPEN QUESTIONS</p><p>Any date or meaning not directly established by the source remains open for later research.</p></section>
    <div className="record-nav"><Link to="/media">← Visual Documentation</Link></div>
  </div></section>;
}
