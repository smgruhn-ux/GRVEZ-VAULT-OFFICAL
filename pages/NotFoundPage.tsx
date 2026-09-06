import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  useEffect(() => {
    document.title = "Not Found | GRVEZ VAULT";
    return () => { document.title = "GRVEZ VAULT | Music \u00b7 Archive \u00b7 Manuscripts \u00b7 Media"; };
  }, []);

  return (
    <section className="page-section">
      <div className="page-content" style={{ textAlign: "center", paddingTop: "6rem", paddingBottom: "6rem" }}>
        <p className="eyebrow">RECORD NOT FOUND</p>
        <h1>404</h1>
        <p style={{ maxWidth: "480px", margin: "1.5rem auto 2.5rem", color: "var(--muted)" }}>
          This record does not exist within the archive, or it has not yet been recovered.
        </p>
        <Link to="/" className="vault-button">
          Return to the Vault
        </Link>
      </div>
    </section>
  );
}
