import React from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumb } from "../Breadcrumb";

const restoredRecords = [
  {
    id: "001",
    type: "RECOVERED POEM",
    title: "Forevermore",
    preview: '"Forevermore\nShall our souls\nBe intertwined..."',
    source: "Early Poetry Archive",
  },
  {
    id: "002",
    type: "RECOVERED POEM",
    title: "Angel of Death",
    preview: '"What is calling me\nAs I gasp for air\nTrying to breathe..."',
    source: "Early Poetry Archive",
  },
  {
    id: "003",
    type: "RECOVERED POEM",
    title: "Agony",
    preview: '"Pondering me in agony\nAs you load your barrel..."',
    source: "Early Poetry Archive",
  },
  {
    id: "004",
    type: "RECOVERED POEM",
    title: "Embers",
    preview: '"Once the fire dies,\nSo do I.\nFor I am drawn to the shadows..."',
    source: "Early Poetry Archive",
  },
];

export function ManuscriptsPage() {
  const navigate = useNavigate();
  return (
    <section className="page-section manuscripts-page">
      <div className="page-content">

        <Breadcrumb items={[
          { label: "Archive", to: "/archive" },
          { label: "Manuscripts" },
        ]} />

        <p className="eyebrow">ARCHIVE RECORD // 002</p>
        <h1>Written Record</h1>

        <p className="page-description">
          A recovered evidentiary archive of poetry, journals, manuscripts,
          and research notes. Each fragment is part of a chronology that
          converges on the Founding Edition and its twelve-stage model of
          relational consciousness.
        </p>

        <section className="archive-note">
          <p className="eyebrow">ARCHIVIST'S NOTE</p>
          <h2>Recovery In Progress</h2>
          <p>
            The written archive is being reconstructed from original poems,
            journal entries, research notes, and the recovered Founding Edition
            manuscript.
          </p>
          <p>
            The Founding Edition introduces a structured twelve-stage framework
            for relational consciousness and preserves the methodological
            backbone of this investigation, including case studies, symbolic
            analysis, and phenomenological observations.
          </p>
        </section>

        <section className="archive-section">
          <div className="section-heading">
            <p className="eyebrow">RECOVERED MATERIAL</p>
            <h2>Restored Records</h2>
          </div>
          <div className="fragment-grid">
            {restoredRecords.map((record) => (
              <article
                key={record.id}
                className="fragment-card"
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/record/${record.id}`)}
              >
                <div className="fragment-header">
                  <span className="fragment-id">RECORD {record.id}</span>
                  <span className="fragment-type">{record.type}</span>
                </div>
                <h3>{record.title}</h3>
                <pre className="fragment-preview">{record.preview}</pre>
                <div className="fragment-footer">
                  <p>
                    <strong>Recovered From</strong><br />
                    {record.source}
                  </p>
                  <div className="fragment-status">CLICK TO OPEN →</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="archive-note" style={{ marginTop: "4rem" }}>
          <p className="eyebrow">ARCHIVIST'S NOTE</p>
          <h2>Investigation Active</h2>
          <p>
            This archive is presented as an active investigation rather than
            a complete collection. Every recovered record represents one piece
            of a larger chronology preserved across poems, journals,
            manuscripts, symbols, photographs, and documentary evidence.
          </p>
          <p>
            Some records remain sealed. Others are incomplete. The Founding Edition
            has been published and is available now.
          </p>
        </section>

      </div>
    </section>
  );
}
