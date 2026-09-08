import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HeroArtwork } from "../HeroArtwork";

export function DmonixPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute("content");
    document.title = "DMONIX | GRVEZ VAULT";
    description?.setAttribute("content", "DMONIX, a distinct creative identity within the GRVEZ VAULT archive and the counterpart to Gizzy Graves.");
    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.setAttribute("content", previousDescription);
    };
  }, []);

  return (
    <section className="page-section profile-page dmonix-profile" aria-labelledby="dmonix-heading">
      <div className="page-hero">
        <HeroArtwork image="/dmonix-hero.png" alt="DMONIX" loading="eager" />
        <div className="profile-hero-title">
          <p className="eyebrow">CREATIVE IDENTITY</p>
          <h1 id="dmonix-heading">DMONIX</h1>
        </div>
      </div>

      <div className="page-content">
        <section className="profile-editorial" aria-labelledby="dmonix-profile-heading">
          <figure className="profile-portrait">
            <img src="/dmonix-portrait.PNG" alt="Portrait of DMONIX" loading="lazy" />
          </figure>
          <div className="profile-copy">
            <p className="eyebrow">THE IDENTITY</p>
            <h2 id="dmonix-profile-heading">DMONIX</h2>
            <p>
              DMONIX is a distinct creative identity within GRVEZ VAULT and the counterpart
              to Gizzy Graves. He exists within the same creative world while maintaining
              his own presence across the music and visual identity surrounding the project.
            </p>
            <p style={{ marginTop: '1rem' }}>
              DMONIX is also one half of DXXD GRVEZ, the heavy music project formed with
              Gizzy Graves. Within that project, the two identities operate as a paired
              creative unit rather than separate solo acts placed beside one another. DMONIX
              also appears as a featured collaborator on select Gizzy Graves releases,
              including {"\u201c"}Voodoo Bane,{"\u201d"} {"\u201c"}Warning Sign,{"\u201d"} and {"\u201c"}Forevermore.{"\u201d"}
            </p>
            <p style={{ marginTop: '1rem' }}>
              His role within GRVEZ VAULT is therefore both individual and collaborative:
              a standalone identity, a recurring featured presence, and part of the
              DXXD GRVEZ project.
            </p>
          </div>
        </section>

        {/* SYMBOLIC DOSSIER CARD */}
        <section className="profile-symbol-card">
          <p className="eyebrow">THE SINREAPER // {"\u03a9"} MARK</p>
          <h2>Symbolic Dossier</h2>
          <p>
            Supporting visual documenting the DMONIX identity within
            the GRVEZ VAULT symbolic system. The {"\u03a9"} (Omega) mark represents
            completion, return, and the truth beyond both sides.
          </p>
          <img
            src="/dmonix-sinreaper-card.jpg"
            alt="DMONIX symbolic dossier. The SinReaper. Omega Mark."
            loading="lazy"
          />
        </section>

        <div className="inline-actions profile-actions">
          <Link className="metal-button" to="/dxxd-grvez">DXXD GRVEZ</Link>
          <Link className="metal-button secondary" to="/music">Music</Link>
          <Link className="metal-button secondary" to="/about">About</Link>
        </div>
      </div>
    </section>
  );
}
