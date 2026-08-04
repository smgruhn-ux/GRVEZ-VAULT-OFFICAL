import React from "react";
import { useParams } from "react-router-dom";

export function RecordPage() {
  const { id } = useParams();

  if (id === "008") {
    return (
      <section className="page-section">
        <div className="page-content">

          <p className="eyebrow">
            RECOVERED FRAGMENT // 001
          </p>

          <h1>
            Relational Continuity Hypothesis
          </h1>

          <p
            style={{
              color: "#999",
              letterSpacing: ".15em",
              textTransform: "uppercase",
              fontSize: ".8rem",
              marginTop: "-.5rem",
              marginBottom: "2rem",
            }}
          >
            FOUNDING EDITION
          </p>

          <p>
            The preserved first published edition documenting the
            Relational Continuity Hypothesis. This record serves as the
            current endpoint of the recovered archive chronology.
          </p>

          <section className="archive-note">
            <p className="eyebrow">STATUS</p>

            <h2>Publication Pending</h2>

            <p>
              The Founding Edition is currently under review for publication
              on Amazon KDP.
            </p>
          </section>

          <section className="archive-note">
            <p className="eyebrow">PREVIEW</p>

            <h2>Coming Soon</h2>

            <p>
              While publication is pending, a preview of the Founding Edition
              is available below.
            </p>

            <a
              href="/founding-edition.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/founding-edition.jpeg"
                alt="Relational Continuity Hypothesis Founding Edition"
                style={{
                  width: "320px",
                  maxWidth: "100%",
                  display: "block",
                  margin: "2rem auto",
                  borderRadius: "12px",
                  boxShadow: "0 20px 50px rgba(0,0,0,.45)",
                }}
              />
            </a>

            <div
              style={{
                marginTop: "2rem",
                padding: "1.5rem",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: "12px",
                background: "rgba(255,255,255,.02)",
              }}
            >
              <p className="eyebrow">
                ARCHIVE EXCERPT
              </p>

              <blockquote
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  fontStyle: "italic",
                  margin: "1rem 0",
                  color: "#ddd",
                }}
              >
                “The pages that follow are not presented as conclusions.
                <br /><br />
                They are presented as evidence.
                <br /><br />
                Each recovered record preserves one fragment of a chronology
                that ultimately led to the Founding Edition.”
              </blockquote>

              <p
                style={{
                  opacity: 0.75,
                  fontSize: ".9rem",
                }}
              >
                This is a preview excerpt from the Founding Edition.
                The complete manuscript will become available after publication.
              </p>
            </div>

          </section>

        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="page-content">

        <p className="eyebrow">
          ARCHIVE RECORD
        </p>

        <h1>
          Record {id}
        </h1>

        <p>
          This archive record is currently undergoing restoration.
        </p>

      </div>
    </section>
  );
}