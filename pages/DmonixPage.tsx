import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HeroArtwork } from "../HeroArtwork";

export function DmonixPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute("content");

    document.title = "DMONIX | GRVEZ VAULT";
    description?.setAttribute("content", "DMONIX, a distinct creative identity within the GRVEZ VAULT archive.");

    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.setAttribute("content", previousDescription);
    };
  }, []);

  return (
    <section className="page-section profile-page dmonix-profile" aria-labelledby="dmonix-heading">
      <div className="page-hero">
        <HeroArtwork
          image="/dmonix-hero.png"
          alt="DMONIX"
          loading="eager"
        />
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
          </div>
        </section>
        <div className="inline-actions profile-actions">
          <Link className="metal-button" to="/about">
            Back to About
          </Link>
          <Link className="metal-button secondary" to="/archive">
            Archive
          </Link>
        </div>
      </div>
    </section>
  );
}
