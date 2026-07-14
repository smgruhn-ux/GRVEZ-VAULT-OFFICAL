import React from "react";
import { HeroArtwork } from "../HeroArtwork";

const products = [
  {
    title: "DMONIX Fracture Long Sleeve",
    image: "/vaultline/dmonix-fracture.png",
    url: "https://vaultlineofficial.us/products/dmonix-fracture-long-sleeve",
  },
  {
    title: "Vaultline VG Oversized Tee",
    image: "/vaultline/vaultline-vg-oversized-tee.png",
    url: "https://vaultlineofficial.us/products/vaultline-vg-oversized-tee",
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
    <section
      className="page-section vaultline-page"
      aria-labelledby="vaultline-heading"
    >
      <div className="page-hero">
        <HeroArtwork
          image="/vaultline-hero.jpg"
          alt="Vaultline by Gizzy Graves"
        />
      </div>

      <div className="page-content">

        <div className="page-intro">

          <p className="eyebrow">
            VAULTLINE
          </p>

          <h1 id="vaultline-heading">
            Vaultline by Gizzy Graves
          </h1>

          <p>
  Vaultline is the official apparel division of GRVEZ VAULT,
  where cinematic storytelling is translated into wearable design.
  Every release is built around the same fractured visual language,
  creating pieces that exist as extensions of the archive rather
  than traditional merchandise.
</p>
        </div>

        <section className="vaultline-showcase">

          <article className="vaultline-feature">

            <div className="vaultline-feature-image">

              <img
                src={products[0].image}
                alt={products[0].title}
                loading="eager"
              />

            </div>

            <div className="vaultline-feature-copy">

              <p className="eyebrow">
                FEATURED RELEASE
              </p>

              <h2>
                {products[0].title}
              </h2>

              <p>
                A heavyweight statement piece built around the
                DMONIX identity. The crimson fracture, premium
                construction, and minimalist presentation make it
                one of the defining releases within Vaultline.
              </p>

              <a
                className="metal-button"
                href={products[0].url}
                target="_blank"
                rel="noreferrer"
              >
                VIEW PRODUCT
              </a>

            </div>

          </article>

          <article className="vaultline-feature reverse">

            <div className="vaultline-feature-copy">

              <p className="eyebrow">
                EDITOR'S PICK
              </p>

              <h2>
                {products[1].title}
              </h2>

              <p>
                Designed with a relaxed oversized silhouette,
                this piece carries the signature Vaultline visual
                identity while remaining versatile enough for
                everyday wear.
              </p>

              <a
                className="metal-button"
                href={products[1].url}
                target="_blank"
                rel="noreferrer"
              >
                VIEW PRODUCT
              </a>

            </div>

            <div className="vaultline-feature-image">

              <img
                src={products[1].image}
                alt={products[1].title}
                loading="lazy"
              />

            </div>

          </article>
                    <section className="vaultline-grid-section">

            <div className="section-heading">

              <p className="eyebrow">
                SIGNATURE PIECES
              </p>

              <h2>
                Complete the Collection
              </h2>

              <p>
                Every release is designed as part of the same visual
                language. Explore more from the current Vaultline lineup.
              </p>

            </div>

            <div className="vaultline-product-grid">

              {products.slice(2).map((product) => (

                <a
                  key={product.title}
                  href={product.url}
                  target="_blank"
                  rel="noreferrer"
                  className="vaultline-card"
                >

                  <div className="vaultline-card-image">

                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                    />

                  </div>

                  <div className="vaultline-card-content">

                    <h3>
                      {product.title}
                    </h3>

                    <span className="metal-button">
                      VIEW PRODUCT
                    </span>

                  </div>

                </a>

              ))}

            </div>

          </section>

          <section className="vaultline-store-cta">

            <p className="eyebrow">
              OFFICIAL STOREFRONT
            </p>

            <h2>
              Browse the complete Vaultline archive.
            </h2>

            <p>
              View every collection, discover new arrivals,
              and shop directly through the official
              Vaultline storefront.
            </p>

            <a
              href="https://vaultlineofficial.us"
              target="_blank"
              rel="noreferrer"
              className="metal-button"
            >
              ENTER THE STORE
            </a>

          </section>
                  </section>

      </div>

    </section>
  );
}