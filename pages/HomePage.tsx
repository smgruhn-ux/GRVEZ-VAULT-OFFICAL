import React from "react";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <>
      {/* IMMERSIVE HERO */}
      <section className="home-hero-v2">
        <div className="home-hero-v2-bg">
          <img
            src="/home-hero.png"
            alt=""
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="home-hero-v2-grain" aria-hidden="true" />
        <div className="home-hero-v2-content">
          <p className="home-hero-v2-eyebrow">
            Music \u00b7 Archive \u00b7 Research \u00b7 Film
          </p>
          <h1>
            Every Record
            <br />
            Has Two Dates
          </h1>
          <p className="home-hero-v2-desc">
            The day it was created. And the day someone finally
            understands why it mattered. GRVEZ VAULT preserves
            music, writing, film, and research exactly as they
            were originally created.
          </p>
          <a href="#pathways" className="home-hero-v2-cta">
            Explore GRVEZ VAULT \u2192
          </a>
        </div>
      </section>

      {/* FIVE PATHWAYS */}
      <section className="pathways-grid" id="pathways">

        {/* MUSIC */}
        <Link to="/music" className="pathway-panel">
          <div className="pathway-panel-bg pathway-bg-music" />
          <div className="pathway-panel-content">
            <h2>Music</h2>
            <p className="pathway-tagline">
              Sound lives on
            </p>
            <span className="pathway-action">Explore Music \u2192</span>
          </div>
        </Link>

        {/* ARCHIVE */}
        <Link to="/archive" className="pathway-panel">
          <div className="pathway-panel-bg pathway-bg-archive" />
          <div className="pathway-panel-content">
            <h2>Archive</h2>
            <p className="pathway-tagline">
              Preserve the record
            </p>
            <span className="pathway-action">Browse Archive \u2192</span>
          </div>
        </Link>

        {/* RELATIONAL CONTINUITY (featured center) */}
        <Link to="/relational-continuity" className="pathway-panel pathway-featured">
          <div className="pathway-panel-bg pathway-bg-rch" />
          <div className="pathway-panel-content">
            <h2>Relational<br />Continuity</h2>
            <p className="pathway-featured-desc">
              A twelve-stage model of relational consciousness.
              Research, observations, and an exploratory framework
              for examining how relationships develop shared meaning.
            </p>
            <span className="pathway-action">Explore Research \u2192</span>
            <div className="pathway-book">
              <p className="pathway-book-title">The Founding Edition</p>
              <p className="pathway-book-sub">Available now in Kindle and paperback</p>
              <a
                href="https://a.co/d/0jeiip0w"
                className="pathway-book-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                Buy the Book \u2192
              </a>
            </div>
          </div>
        </Link>

        {/* FILMS & MEDIA */}
        <Link to="/films" className="pathway-panel">
          <div className="pathway-panel-bg pathway-bg-films" />
          <div className="pathway-panel-content">
            <h2>Films &amp;<br />Media</h2>
            <p className="pathway-tagline">
              Stories in<br />another form
            </p>
            <span className="pathway-action">Watch &amp; Explore \u2192</span>
          </div>
        </Link>

        {/* VAULTLINE */}
        <Link to="/vaultline" className="pathway-panel">
          <div className="pathway-panel-bg pathway-bg-vaultline" />
          <div className="pathway-panel-content">
            <h2>Vaultline</h2>
            <p className="pathway-tagline">
              Wear what remains
            </p>
            <span className="pathway-action">Shop Vaultline \u2192</span>
          </div>
        </Link>

      </section>

      {/* LATEST MUSIC */}
      <section className="home-row">
        <div className="home-row-header">
          <div>
            <h2 className="home-row-title">Latest Music</h2>
          </div>
          <Link to="/music" className="home-row-link">View All Music \u2192</Link>
        </div>
        <div className="home-row-items">
          <a href="https://open.spotify.com/album/4hsTeEGzRphu35zOeFoV5l" target="_blank" rel="noreferrer" className="home-row-item">
            <div className="home-row-item-img">
              <img src="/voodoo-bane.jpg" alt="Voodoo Bane artwork" loading="lazy" />
            </div>
            <p className="home-row-item-title">Voodoo Bane</p>
          </a>
          <a href="https://open.spotify.com/album/4uNlB0ql9fuhJ4DjV1vARL" target="_blank" rel="noreferrer" className="home-row-item">
            <div className="home-row-item-img">
              <img src="/under-my-tongue.jpg" alt="Under My Tongue artwork" loading="lazy" />
            </div>
            <p className="home-row-item-title">Under My Tongue</p>
          </a>
        </div>
      </section>

      {/* ARCHIVE HIGHLIGHTS */}
      <section className="home-row">
        <div className="home-row-header">
          <div>
            <h2 className="home-row-title">Archive Highlights</h2>
          </div>
          <Link to="/archive" className="home-row-link">View All Archive \u2192</Link>
        </div>
        <div className="home-row-items">
          <Link to="/record/001" className="home-row-item">
            <div className="home-row-item-img home-row-item-text-placeholder">
              <span>Forevermore</span>
            </div>
            <p className="home-row-item-title">Forevermore</p>
            <p className="home-row-item-type">Recovered Poem</p>
          </Link>
          <Link to="/record/004" className="home-row-item">
            <div className="home-row-item-img home-row-item-text-placeholder">
              <span>Embers</span>
            </div>
            <p className="home-row-item-title">Embers</p>
            <p className="home-row-item-type">Recovered Poem</p>
          </Link>
          <Link to="/record/008" className="home-row-item">
            <div className="home-row-item-img">
              <img src="/founding-edition.jpeg" alt="Founding Edition" loading="lazy" style={{ objectPosition: "center top" }} />
            </div>
            <p className="home-row-item-title">Founding Edition</p>
            <p className="home-row-item-type">Manuscript</p>
          </Link>
        </div>
      </section>
    </>
  );
}
