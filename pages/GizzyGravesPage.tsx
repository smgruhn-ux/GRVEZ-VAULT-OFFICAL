import React from "react";
import { Link } from "react-router-dom";
import { HeroArtwork } from "../HeroArtwork";

export function GizzyGravesPage() {
  return (
    <section className="page-section" aria-labelledby="gizzy-graves-heading">
      <div className="page-hero">
        <HeroArtwork
          image="/gizzy-graves-hero.jpg"
          alt="Gizzy Graves"
          loading="lazy"
        />
      </div>

      <div className="page-content">
        <div className="page-intro">
          <p className="eyebrow">ARTIST IDENTITY</p>
          <h1 id="gizzy-graves-heading">GIZZY GRAVES</h1>
          <p>
            Gizzy Graves is an artist identity curated by songwriter and creative director Sheldyn Gruhn.
          </p>
          <div className="inline-actions">
            <Link className="metal-button" to="/about">
              Back to About
            </Link>
            <Link className="metal-button secondary" to="/music">
              Music
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
