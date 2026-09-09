import React from "react";
import { HeroArtwork } from "../HeroArtwork";

const products = [
  {
    title: "IXXI Vaultline Tee",
    image: "/ixxi-vaultline-tee.avif",
    url: "https://vaultlineofficial.us/products/ixxi-vaultline-tee",
  },
  {
    title: "Vaultline Northstar Baby Tee",
    image: "/vaultline-northstar-baby-tee.avif",
    url: "https://vaultlineofficial.us/products/vaultline-northstar-baby-tee",
  },
  {
    title: "IXXI Whiteout Snapback",
    image: "/vaultline/ixxi-whiteout-snapback.png",
    url: "https://vaultlineofficial.us/products/ixxi-whiteout-snapback",
  },
  {
    title: "Crimson Stars & Scars Sports Bra",
    image: "/vaultline/crimson-stars-scars-sports-bra.png",
    url: "https://vaultlineofficial.us/products/crimson-stars-scars-sports-bra",
  },
  {
    title: "DECEIT // RUIN Slides",
    image: "/vaultline/deceit-ruin-slides.png",
    url: "https://vaultlineofficial.us/products/deceit-ruin-slides",
  },
  {
    title: "Crimson Abyss Flip-Flops",
    image: "/vaultline/crimson-abyss-flip-flops.png",
    url: "https://vaultlineofficial.us/products/vaultline-crimson-abyss-flip-flops",
  },
  {
    title: "Reign in Pain Crop Top",
    image: "/vaultline/reign-in-pain-crop-top.png",
    url: "https://vaultlineofficial.us/products/reign-in-pain-gothic-crop-top",
  },
];

export function VaultlinePage() {
  return (
    <section className="page-section vaultline-page" aria-labelledby="vaultline-heading">
      <div className="page-hero">
        <HeroArtwork image="/vaultline-hero.jpg" alt="Vaultline by Gizzy Graves" />
      </div>
      <div className="page-content">
        <div className="page-intro">
          <p className="eyebrow">VAULTLINE</p>
          <h1 id="vaultline-heading">Vaultline by Gizzy Graves</h1>
          <p>Vaultline collects artifacts recovered from the GRVEZ VAULT investigation. These pieces are presented as wearable evidence rather than ordinary products, and they carry the same fractured visual language found in the archive's manuscripts, symbols, and recovered documentation.</p>
        </div>

        <section className="vaultline-showcase">
          <article className="vaultline-feature">
            <div className="vaultline-feature-image"><img src={products[0].image} alt={products[0].title} loading="eager" /></div>
            <div className="vaultline-feature-copy">
              <p className="eyebrow">ARTIFACT</p><h2>{products[0].title}</h2>
              <p>View the current Vaultline product at the official storefront.</p>
              <a className="metal-button" href={products[0].url} target="_blank" rel="noreferrer">INSPECT ARTIFACT</a>
            </div>
          </article>
          <article className="vaultline-feature reverse">
            <div className="vaultline-feature-copy">
              <p className="eyebrow">SIGNATURE ARTIFACT</p><h2>{products[1].title}</h2>
              <p>View the current Vaultline product at the official storefront.</p>
              <a className="metal-button" href={products[1].url} target="_blank" rel="noreferrer">INSPECT ARTIFACT</a>
            </div>
            <div className="vaultline-feature-image"><img src={products[1].image} alt={products[1].title} loading="lazy" /></div>
          </article>
          <section className="vaultline-grid-section">
            <div className="section-heading"><p className="eyebrow">SIGNATURE PIECES</p><h2>Complete the Artifact Set</h2><p>Every release is designed as part of the same visual language. Continue the artifact investigation across the current Vaultline archive.</p></div>
            <div className="vaultline-product-grid">{products.slice(2).map((product) => <a key={product.title} href={product.url} target="_blank" rel="noreferrer" className="vaultline-card"><div className="vaultline-card-image"><img src={product.image} alt={product.title} loading="lazy" /></div><div className="vaultline-card-content"><h3>{product.title}</h3><span className="metal-button">INSPECT ARTIFACT</span></div></a>)}</div>
          </section>
          <section className="vaultline-store-cta"><p className="eyebrow">ARCHIVE PORTAL</p><h2>Browse the complete Vaultline archive.</h2><p>View every preserved artifact, document recovered visual evidence, and access the official Vaultline portal as part of the ongoing investigation. These pieces exist as evidence from the same archive that led to the Founding Edition manuscript.</p><a href="https://vaultlineofficial.us" target="_blank" rel="noreferrer" className="metal-button">OPEN ARCHIVE PORTAL</a></section>
        </section>
      </div>
    </section>
  );
}
