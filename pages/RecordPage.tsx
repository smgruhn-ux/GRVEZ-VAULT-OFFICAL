import React from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "../Breadcrumb";

const navStyle = {
  display: "flex" as const,
  justifyContent: "space-between" as const,
  marginTop: "3rem",
  borderTop: "1px solid rgba(255,255,255,.08)",
  paddingTop: "2rem",
};

const subtitleStyle = {
  color: "#999",
  letterSpacing: ".15em",
  textTransform: "uppercase" as const,
  fontSize: ".8rem",
  marginTop: "-.5rem",
  marginBottom: "2rem",
};

const poemStyle = {
  fontSize: "1.05rem",
  lineHeight: "2",
  whiteSpace: "pre-line" as const,
  color: "#ddd",
};

export function RecordPage() {
  const { id } = useParams();

  // ==========================================================
  // RECORD 001 — FOREVERMORE
  // ==========================================================
  if (id === "001") {
    return (
      <section className="page-section">
        <div className="page-content">
          <Breadcrumb items={[
            { label: "Archive", to: "/archive" },
            { label: "Manuscripts", to: "/manuscripts" },
            { label: "Forevermore" },
          ]} />
          <p className="eyebrow">RECOVERED POEM // 001</p>
          <h1>Forevermore</h1>
          <p style={subtitleStyle}>EARLY POETRY ARCHIVE</p>
          <section className="archive-note">
            <p className="eyebrow">ARCHIVE METADATA</p>
            <p><strong>Archive ID:</strong> 001</p>
            <p><strong>Document Type:</strong> Poem</p>
            <p><strong>Date Written:</strong> September 5, 2024</p>
            <p><strong>Recovery Status:</strong> Complete</p>
          </section>
          <section className="archive-note">
            <p className="eyebrow">RECOVERED TEXT</p>
            <blockquote style={poemStyle}>
{`Forevermore
Shall our souls
Be intertwined

For an eternity
Would cease to exist
Without you and I

Therefore
As our bones turn to dust
We will forevermore
Remain in peacefulness`}
            </blockquote>
          </section>
          <section className="archive-note">
            <p className="eyebrow">ARCHIVIST'S NOTE</p>
            <p>
              The earliest recovered poetic record currently preserved
              within the archive. Themes of permanence, devotion,
              mortality, and continuity introduced here echo throughout
              later poems, manuscripts, and documentary material.
            </p>
          </section>
          <div style={navStyle}>
            <Link to="/manuscripts">\u2190 Archive</Link>
            <Link to="/record/002">Angel of Death \u2192</Link>
          </div>
        </div>
      </section>
    );
  }

  // ==========================================================
  // RECORD 002 — ANGEL OF DEATH
  // ==========================================================
  if (id === "002") {
    return (
      <section className="page-section">
        <div className="page-content">
          <Breadcrumb items={[
            { label: "Archive", to: "/archive" },
            { label: "Manuscripts", to: "/manuscripts" },
            { label: "Angel of Death" },
          ]} />
          <p className="eyebrow">RECOVERED POEM // 002</p>
          <h1>Angel of Death</h1>
          <p style={subtitleStyle}>EARLY POETRY ARCHIVE</p>
          <section className="archive-note">
            <p className="eyebrow">ARCHIVE METADATA</p>
            <p><strong>Archive ID:</strong> 002</p>
            <p><strong>Document Type:</strong> Poem</p>
            <p><strong>Date Written:</strong> April 17, 2025</p>
            <p><strong>Recovery Status:</strong> Complete</p>
          </section>
          <section className="archive-note">
            <p className="eyebrow">RECOVERED TEXT</p>
            <blockquote style={poemStyle}>
{`What is calling me
As I gasp for air
Trying to breathe
From the epitome of darkness
That is haunting me

I have been swindled
Of my Liberty
As I can no longer grapple
The shadows that have summoned me

Alone I fall
To my prophesy
As the Angel of Death
Is what's calling me`}
            </blockquote>
          </section>
          <section className="archive-note">
            <p className="eyebrow">ARCHIVIST'S NOTE</p>
            <p>
              This record expands the archive's developing themes of
              darkness, prophecy, mortality, and loss of liberty.
              Several symbolic elements introduced here later reappear
              throughout the broader archive.
            </p>
          </section>
          <div style={navStyle}>
            <Link to="/record/001">\u2190 Forevermore</Link>
            <Link to="/record/003">Agony \u2192</Link>
          </div>
        </div>
      </section>
    );
  }

  // ==========================================================
  // RECORD 003 — AGONY
  // ==========================================================
  if (id === "003") {
    return (
      <section className="page-section">
        <div className="page-content">
          <Breadcrumb items={[
            { label: "Archive", to: "/archive" },
            { label: "Manuscripts", to: "/manuscripts" },
            { label: "Agony" },
          ]} />
          <p className="eyebrow">RECOVERED POEM // 003</p>
          <h1>Agony</h1>
          <p style={subtitleStyle}>EARLY POETRY ARCHIVE</p>
          <section className="archive-note">
            <p className="eyebrow">ARCHIVE METADATA</p>
            <p><strong>Archive ID:</strong> 003</p>
            <p><strong>Document Type:</strong> Poem</p>
            <p><strong>Date Written:</strong> April 19, 2025</p>
            <p><strong>Recovery Status:</strong> Complete</p>
          </section>
          <section className="archive-note">
            <p className="eyebrow">RECOVERED TEXT</p>
            <blockquote style={poemStyle}>
{`Pondering me in agony
As you load your barrel
So pistic in supremacy
Just to watch me
Bleed here in peril

Superior you must feel
Forsaken me in betrayal
Though too naive to
Resignate a bare quiver
As I pierce your unholy veil

Inferior you are to me
As I nock my bow & arrow
To solemnly cease your supremacy
For I scrutinize you
Pleading in Agony`}
            </blockquote>
          </section>
          <section className="archive-note">
            <p className="eyebrow">ARCHIVIST'S NOTE</p>
            <p>
              This recovered record introduces imagery of conflict,
              betrayal, resistance, and moral confrontation. The weapon
              symbolism and emotional tension continue themes that
              evolve throughout later works in the archive.
            </p>
          </section>
          <div style={navStyle}>
            <Link to="/record/002">\u2190 Angel of Death</Link>
            <Link to="/record/004">Embers \u2192</Link>
          </div>
        </div>
      </section>
    );
  }

  // ==========================================================
  // RECORD 004 — EMBERS
  // ==========================================================
  if (id === "004") {
    return (
      <section className="page-section">
        <div className="page-content">
          <Breadcrumb items={[
            { label: "Archive", to: "/archive" },
            { label: "Manuscripts", to: "/manuscripts" },
            { label: "Embers" },
          ]} />
          <p className="eyebrow">RECOVERED POEM // 004</p>
          <h1>Embers</h1>
          <p style={subtitleStyle}>EARLY POETRY ARCHIVE</p>
          <section className="archive-note">
            <p className="eyebrow">ARCHIVE METADATA</p>
            <p><strong>Archive ID:</strong> 004</p>
            <p><strong>Document Type:</strong> Poem</p>
            <p><strong>Date Written:</strong> April 23, 2025</p>
            <p><strong>Source:</strong> Poetry Nation</p>
            <p><strong>Recovery Status:</strong> Complete</p>
          </section>
          <section className="archive-note">
            <p className="eyebrow">RECOVERED TEXT</p>
            <blockquote style={poemStyle}>
{`The fire cracks and the embers brew
Whilst the stars sing as I cry and plead,
For I render you, my love
To please come back to me

As I watch you go up in flames
I'm pondering your face that's
Burning a hole
Into my memory

This pain is just too real
I beg the fire to lie and bring you back to me
As my heart bleeds for you and
Your flames smolder into ember,
My soul aches to remember the love
That you gave me..
As you are my forever

Once the fire dies,
So do I.
For I am drawn to the shadows
That have left me ridden in despair
As this life I cannot battle
Without you here..

I can no longer bear this pain,
So, I must follow you
As I surrender my life to be
The embers in your flame.`}
            </blockquote>
          </section>
          <section className="archive-note">
            <p className="eyebrow">ARCHIVIST'S NOTE</p>
            <p>
              This record marks a significant evolution in the archive.
              Fire, memory, loss, shadows, and enduring attachment begin
              converging into recurring motifs that continue throughout
              later poems, manuscripts, songs, symbols, and documentary
              material.
            </p>
          </section>
          <div style={navStyle}>
            <Link to="/record/003">\u2190 Agony</Link>
            <Link to="/record/005">Next Record \u2192</Link>
          </div>
        </div>
      </section>
    );
  }

  // ==========================================================
  // RECORD 005 — UNDER RESTORATION
  // ==========================================================
  if (id === "005") {
    return (
      <section className="page-section">
        <div className="page-content">
          <Breadcrumb items={[
            { label: "Archive", to: "/archive" },
            { label: "Manuscripts", to: "/manuscripts" },
            { label: "Record 005" },
          ]} />
          <p className="eyebrow">RECOVERED RECORD // 005</p>
          <h1>Archive Fragment</h1>
          <section className="archive-note">
            <p className="eyebrow">STATUS</p>
            <h2>Under Restoration</h2>
            <p>
              This archive record has been identified within the
              chronology but has not yet been fully restored.
            </p>
          </section>
          <div style={navStyle}>
            <Link to="/record/004">\u2190 Embers</Link>
            <Link to="/record/006">Next \u2192</Link>
          </div>
        </div>
      </section>
    );
  }

  // ==========================================================
  // RECORD 006 — UNDER RESTORATION
  // ==========================================================
  if (id === "006") {
    return (
      <section className="page-section">
        <div className="page-content">
          <Breadcrumb items={[
            { label: "Archive", to: "/archive" },
            { label: "Manuscripts", to: "/manuscripts" },
            { label: "Record 006" },
          ]} />
          <p className="eyebrow">RECOVERED RECORD // 006</p>
          <h1>Archive Fragment</h1>
          <section className="archive-note">
            <p className="eyebrow">STATUS</p>
            <h2>Under Restoration</h2>
            <p>
              This recovered record is currently being preserved and
              catalogued within the archive.
            </p>
          </section>
          <div style={navStyle}>
            <Link to="/record/005">\u2190 Previous</Link>
            <Link to="/record/007">Next \u2192</Link>
          </div>
        </div>
      </section>
    );
  }

  // ==========================================================
  // RECORD 007 — UNDER RESTORATION
  // ==========================================================
  if (id === "007") {
    return (
      <section className="page-section">
        <div className="page-content">
          <Breadcrumb items={[
            { label: "Archive", to: "/archive" },
            { label: "Manuscripts", to: "/manuscripts" },
            { label: "Record 007" },
          ]} />
          <p className="eyebrow">RECOVERED RECORD // 007</p>
          <h1>Archive Fragment</h1>
          <section className="archive-note">
            <p className="eyebrow">STATUS</p>
            <h2>Under Restoration</h2>
            <p>
              Restoration of this record is still in progress. Additional
              documents and supporting material will be added as the
              archive expands.
            </p>
          </section>
          <div style={navStyle}>
            <Link to="/record/006">\u2190 Previous</Link>
            <Link to="/record/008">Founding Edition \u2192</Link>
          </div>
        </div>
      </section>
    );
  }

  // ==========================================================
  // RECORD 008 — FOUNDING EDITION (dual role: documentation + discovery)
  // ==========================================================
  if (id === "008") {
    return (
      <section className="page-section">
        <div className="page-content">
          <Breadcrumb items={[
            { label: "Archive", to: "/archive" },
            { label: "Manuscripts", to: "/manuscripts" },
            { label: "Founding Edition" },
          ]} />
          <p className="eyebrow">RECOVERED FRAGMENT // 008</p>
          <h1>Relational Continuity Hypothesis</h1>
          <p style={subtitleStyle}>FOUNDING EDITION</p>

          {/* PRIMARY ACTIONS: Discovery + Purchase */}
          <section className="archive-note">
            <p className="eyebrow">STATUS</p>
            <h2>AVAILABLE NOW</h2>
            <p>
              The Founding Edition is now published and available. It documents
              the Relational Continuity Hypothesis and its twelve-stage model of
              relational consciousness, the core research that anchors this archive.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
              <Link to="/relational-continuity" className="metal-button">
                EXPLORE THE FRAMEWORK
              </Link>
              <a
                className="metal-button secondary"
                href="https://a.co/d/0jeiip0w"
                target="_blank"
                rel="noopener noreferrer"
              >
                BUY THE BOOK
              </a>
            </div>
          </section>

          {/* ARCHIVAL DOCUMENTATION */}
          <section className="archive-note">
            <p className="eyebrow">ARCHIVE RECORD</p>
            <h2>Manuscript Documentation</h2>
            <p>
              This archival record preserves the provenance, publication history,
              and documentary role of the Founding Edition within GRVEZ VAULT.
              The manuscript anchors the archive by linking symbolic evidence,
              continuity research, and the larger narrative of relational
              development that appears throughout the recovered documents.
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
                  width: "340px",
                  maxWidth: "100%",
                  display: "block",
                  margin: "2rem auto",
                  borderRadius: "12px",
                  boxShadow: "0 20px 50px rgba(0,0,0,.45)",
                }}
              />
            </a>
          </section>

          <section className="archive-note">
            <p className="eyebrow">MANUSCRIPT STRUCTURE</p>
            <p>
              The recovered manuscript is organized as a research investigation.
              It traces the hypothesis from abstract and literature review through
              operational definitions, twelve relational stages, historical case
              studies, phenomenological analysis, methodology, and ethical
              limitations.
            </p>
            <p>
              Its structure anchors the archive by linking symbolic evidence,
              continuity research, and the larger narrative of relational
              development that appears throughout the recovered documents.
            </p>
          </section>

          <section className="archive-note">
            <p className="eyebrow">ARCHIVIST'S NOTE</p>
            <p>
              The Founding Edition represents the current endpoint of
              the recovered archive chronology. Earlier records preserve
              the creative works that preceded its publication and form
              part of the broader documentary timeline presented
              throughout this archive.
            </p>
          </section>

          <div style={navStyle}>
            <Link to="/record/007">\u2190 Previous</Link>
            <Link to="/manuscripts">Return to Archive \u2192</Link>
          </div>
        </div>
      </section>
    );
  }

  // ==========================================================
  // DEFAULT PAGE
  // ==========================================================
  return (
    <section className="page-section">
      <div className="page-content">
        <Breadcrumb items={[
          { label: "Archive", to: "/archive" },
          { label: "Manuscripts", to: "/manuscripts" },
          { label: `Record ${id}` },
        ]} />
        <p className="eyebrow">ARCHIVE RECORD</p>
        <h1>Record {id}</h1>
        <p>This archive record is currently undergoing restoration.</p>
        <div style={{ marginTop: "2rem" }}>
          <Link to="/manuscripts">\u2190 Return to Archive</Link>
        </div>
      </div>
    </section>
  );
}
