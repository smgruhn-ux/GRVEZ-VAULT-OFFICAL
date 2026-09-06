import React, { useEffect, useRef } from "react";

/* ─── stage data ─── */
const stages = [
  { num: "I", name: "Unconscious Union", desc: "Describes initial contact before conscious awareness of the bond has formed. The encounter may be experienced as accidental, coincidental, or unexpectedly familiar.", markers: "Circle · Void · Primordial unity" },
  { num: "II", name: "Awareness", desc: "The relationship becomes psychologically significant. Recognition introduces differentiation, giving rise to longing, curiosity, and the experience of separation.", markers: "Two · Serpent · Tree · Awakening" },
  { num: "III", name: "Emotional Immortalization", desc: "The relationship begins to preserve itself through symbolic expression: letters, poetry, music, artwork, ritual, and creative acts that transform experience into enduring meaning.", markers: "Water · Moon · Lion · Stars" },
  { num: "IV", name: "Unified Function", desc: "A shared purpose develops. The pair begins functioning as a coordinated system producing outcomes neither individual could accomplish alone.", markers: "Architecture · Governance · Complementary roles" },
  { num: "V", name: "Psychological Permanence", desc: "The relationship becomes internalized. Even during separation, the other remains psychologically present as an enduring component of identity.", markers: "Letters · Ink · Enduring correspondence" },
  { num: "VI", name: "Cosmic Projection", desc: "Meaning expands beyond the personal. The pair begins to interpret the relationship within broader symbolic, philosophical, or cosmological frameworks.", markers: "Stars · Galaxies · Staircases · Cosmic imagery" },
  { num: "VII", name: "Pattern Consciousness", desc: "Recurring relational, symbolic, and emotional patterns become recognizable. The pair begins perceiving repeating structures across time, relationships, and documented history.", markers: "Circles · Trees · Mirrored structures" },
  { num: "VIII", name: "Encoded Reality", desc: "Private symbolic language develops. Words, images, rituals, numbers, and references accumulate into an internally coherent system of meaning shared primarily by the pair.", markers: "Sacred geometry · Recurring symbols · Encoded language" },
  { num: "IX", name: "Shared Cosmology", desc: "The pair constructs a shared worldview: an integrated understanding of purpose, identity, and meaning that extends beyond either individual's perspective.", markers: "Fire · Wings · Cities · Maps" },
  { num: "X", name: "Mirrored Identity", desc: "Each individual becomes a psychological mirror for the other. Previously hidden aspects of identity become visible through relational reflection and reciprocal development.", markers: "Mirrors · Windows · Candles · Thresholds" },
  { num: "XI", name: "Self-Aware Synchronicity", desc: "Coincidences experienced as meaningful become consciously recognized and documented. The pair begins deliberately observing recurring symbolic alignments within their shared experience.", markers: "Mandalas · Mirrors · Documented synchronicities" },
  { num: "XII", name: "Conscious Co-Authorship", desc: "Conscious participation in the construction, documentation, and interpretation of a shared symbolic system. The pair recognizes itself as both participant and interpreter within an evolving relational framework. Not an endpoint, but an ongoing mode of engagement.", markers: "Omega · IXXI · Alpha · Red Fracture · Northern Star" },
];

const arcOne = [
  { stage: "Unconscious Union", names: "The Primordial State" },
  { stage: "Awareness", names: "Adam & Eve (illustrative narrative)" },
  { stage: "Immortalization", names: "Hadrian & Antinous" },
  { stage: "Unified Function", names: "Justinian & Theodora" },
  { stage: "Permanence", names: "Abelard & Heloise" },
];

const arcTwo = [
  { stage: "Cosmic Projection", names: "Dante & Beatrice" },
  { stage: "Pattern Consciousness", names: "Petrarch & Laura" },
  { stage: "Encoded Reality", names: "John & Jane Dee" },
  { stage: "Shared Cosmology", names: "William & Catherine Blake" },
  { stage: "Mirrored Identity", names: "Elizabeth & Robert Browning" },
  { stage: "Self-Aware Synchronicity", names: "Carl & Emma Jung" },
  { stage: "Co-Authorship", names: "Contemporary Illustrative Dyad" },
];

const feelings = [
  { name: "Recognition", desc: "Reported as visceral, arriving before conscious thought. Described as resembling the sensation of remembering something not yet fully understood." },
  { name: "Expansion", desc: "The reported sensation of the self becoming larger, boundaries of identity experienced as dissolving." },
  { name: "Permanence", desc: "Described as the feeling that the relationship exists outside of ordinary time. Experienced as inevitable and enduring." },
  { name: "Elevation", desc: "The reported sense that the relationship is connected to something larger than the personal." },
  { name: "Intimacy Beyond Language", desc: "Reported as symbolic closeness: a private world of shared meaning communicated through unspoken understanding." },
  { name: "Reflection", desc: "The reported experience of seeing oneself through another person. Shadow and potential described as revealed simultaneously." },
  { name: "Alignment", desc: "Events experienced as unfolding with symbolic precision. Coincidences perceived as interconnected and meaningful." },
  { name: "Co-Creation", desc: "The reported experience of consciously participating in the documentation and development of a shared symbolic system." },
];

const limitations = [
  { name: "Retrospective Pattern Matching", desc: "Patterns identified after the fact may appear more significant than they are. Post hoc organization can impose structure where none exists." },
  { name: "Confirmation Bias", desc: "Researchers and participants may unconsciously favor evidence that supports the framework while underweighting contradictory data." },
  { name: "Selective Evidence", desc: "Historical narratives are incomplete. Surviving documents are influenced by cultural context, selective preservation, and authorial bias." },
  { name: "Symbolic Overinterpretation", desc: "Symbols may hold multiple meanings. Meaning can be imposed where none exists. Symbolic analysis requires methodological restraint and openness to alternative readings." },
  { name: "Report Dependence", desc: "When two individuals are in communication, their observations may influence each other, reducing the independence of reported experiences." },
  { name: "Historical Source Ambiguity", desc: "Historical dyads are presented as illustrative examples, not definitive reconstructions. Broader evaluation requires research across diverse cultures and periods." },
];

/* ─── scroll reveal hook ─── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("reveal-visible"); }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    el.querySelectorAll(".reveal-pending").forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);
  return ref;
}

export function RelationalContinuityPage() {
  const root = useReveal();

  return (
    <section className="page-section rch-page" ref={root}>

      {/* ── HERO ── */}
      <div className="rch-hero">
        <div className="rch-hero-inner">
          <p className="rch-edition">Founding Edition</p>
          <h1>Relational Continuity Hypothesis</h1>
          <p className="rch-subtitle">A Twelve-Stage Model of Relational Consciousness</p>
          <p className="rch-authors">Sheldyn M. Gruhn &amp; Jerry A. Downard</p>
          <a href="https://a.co/d/0jeiip0w" target="_blank" rel="noopener noreferrer" className="vault-button">
            Order Now
          </a>
          <p className="rch-formats">Kindle &amp; Paperback on Amazon</p>
        </div>
      </div>

      <div className="rch-fracture" />

      {/* ── ABOUT ── */}
      <div className="page-content">
        <div className="reveal-pending">
          <p className="eyebrow">About the Work</p>
          <p className="rch-lead">
            Why do certain relationships appear to reshape not only the individuals involved,
            but also the symbols, narratives, and systems of meaning they create?
          </p>
          <p className="rch-body">
            This manuscript presents a twelve-stage descriptive model for examining how relational
            consciousness may develop through symbolic, psychological, and developmental processes.
            Drawing on depth psychology, phenomenology, attachment theory, symbolic studies, and
            comparative historical analysis, the model treats the relational dyad as the primary
            unit of analysis.
          </p>
          <p className="rch-body">
            The framework distinguishes between three independent elements: documented observations,
            the twelve-stage descriptive taxonomy, and the Relational Continuity Hypothesis itself,
            which proposes one possible interpretation of the observed patterns while remaining open
            to empirical evaluation, refinement, or rejection.
          </p>

          <div className="rch-tiers">
            <div className="rch-tier"><span className="rch-tier-label">Observations</span><span className="rch-tier-desc">Historical narratives, symbolic analysis, and phenomenological reports documented across multiple relational dyads.</span></div>
            <div className="rch-tier"><span className="rch-tier-label">Framework</span><span className="rch-tier-desc">A twelve-stage taxonomy organizing recurring relational functions into a descriptive developmental model.</span></div>
            <div className="rch-tier"><span className="rch-tier-label">Hypothesis</span><span className="rch-tier-desc">An exploratory proposal that certain relational patterns may persist in ways that can be studied empirically. Acceptance of the hypothesis is not required to evaluate the taxonomy.</span></div>
          </div>
        </div>
      </div>

      <div className="rch-fracture" />

      {/* ── TWELVE STAGES ── */}
      <div className="page-content">
        <p className="eyebrow reveal-pending">The Descriptive Framework</p>
        <h2 className="reveal-pending">Twelve Stages of Relational Consciousness</h2>
        <p className="rch-body reveal-pending">
          Each stage describes a proposed threshold in the development of meaning between two people.
          The sequence is not strictly linear; relationships may revisit or express multiple stages
          simultaneously. These stages are presented as analytical tools for organizing observations,
          not as fixed laws governing relational experience.
        </p>
        <div className="rch-stages-grid">
          {stages.map((s, i) => (
            <div key={s.num} className="rch-stage reveal-pending" style={{ transitionDelay: `${i * 50}ms` }}>
              <span className="rch-stage-num">{s.num}</span>
              <h3 className="rch-stage-name">{s.name}</h3>
              <p className="rch-stage-desc">{s.desc}</p>
              <p className="rch-stage-markers">{s.markers}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rch-fracture" />

      {/* ── HISTORICAL ARCS ── */}
      <div className="page-content">
        <p className="eyebrow reveal-pending">Comparative Illustrations</p>
        <h2 className="reveal-pending">Two Arcs Across Time</h2>
        <p className="rch-body reveal-pending">
          The framework is illustrated through historical dyads whose documented lives, writings,
          and records reveal relational functions associated with the proposed stages. These pairs
          are comparative examples, not evidence of reincarnation, a genealogical chain, or literal
          recurrence of the same individuals. No claim is made that relational consciousness
          progresses historically from one couple to another.
        </p>

        <div className="rch-arc reveal-pending">
          <h3 className="rch-arc-title">Arc One: The Origin of Relational Consciousness</h3>
          {arcOne.map((d) => (
            <div key={d.stage} className="rch-dyad">
              <span className="rch-dyad-stage">{d.stage}</span>
              <span className="rch-dyad-names">{d.names}</span>
            </div>
          ))}
        </div>

        <div className="rch-arc reveal-pending">
          <h3 className="rch-arc-title">Arc Two: The Emergence of Reflexive Symbolic Consciousness</h3>
          {arcTwo.map((d) => (
            <div key={d.stage} className="rch-dyad">
              <span className="rch-dyad-stage">{d.stage}</span>
              <span className="rch-dyad-names">{d.names}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rch-fracture" />

      {/* ── HYPOTHESIS ── */}
      <div className="page-content">
        <p className="eyebrow reveal-pending">The Exploratory Hypothesis</p>
        <h2 className="reveal-pending">Relational Continuity</h2>
        <p className="rch-body reveal-pending">
          The Relational Continuity Hypothesis emerged from an attempt to understand why the twelve
          stages appear so consistently across historical narratives. It proposes that certain
          relational patterns, symbolic, psychological, and structural, may persist across time in
          ways that can be studied empirically. The hypothesis does not claim reincarnation is proven.
          It does not assert metaphysical conclusions. Whether these patterns ultimately reflect
          developmental psychology, symbolic cognition, cultural narrative, continuity phenomena,
          or another mechanism remains an open empirical question.
        </p>
        <div className="rch-pillars reveal-pending">
          <div className="rch-pillar">
            <span className="rch-pillar-num">I</span>
            <h3>Symbolic Convergence</h3>
            <p>The appearance of recurring symbols, motifs, or narrative structures across two individuals' accounts with sufficient specificity and consistency to warrant systematic comparison. Presented as an observable pattern that invites investigation, not as proof of continuity.</p>
          </div>
          <div className="rch-pillar">
            <span className="rch-pillar-num">II</span>
            <h3>Mirrored Identity Structures</h3>
            <p>Structural similarities in relational dynamics, psychological functions, or developmental sequences between a contemporary dyad and historical dyads. The purpose is to investigate whether relational structures recur in measurable ways, not to demonstrate that two individuals are the same people across lifetimes.</p>
          </div>
          <div className="rch-pillar">
            <span className="rch-pillar-num">III</span>
            <h3>Convergent Documentation</h3>
            <p>Independently produced creative works, symbolic expressions, or documented observations by two individuals that exhibit structural correspondence without prior coordination. Such material represents a category of evidence to be evaluated for whether it exceeds chance expectation, not a confirmed finding.</p>
          </div>
        </div>
      </div>

      <div className="rch-fracture" />

      {/* ── PHENOMENOLOGY ── */}
      <div className="page-content">
        <p className="eyebrow reveal-pending">Reported Lived Experience</p>
        <h2 className="reveal-pending">The Phenomenology of Relational Experience</h2>
        <p className="rch-body reveal-pending">
          The model includes a phenomenological dimension: how the stages are reported to feel from
          within. These descriptions reflect subjective experience as documented by participants. They
          are treated as descriptive data capable of generating research questions, not as independent
          empirical proof of the hypothesis.
        </p>
        <div className="rch-feelings reveal-pending">
          {feelings.map((f) => (
            <div key={f.name} className="rch-feeling">
              <span className="rch-feeling-name">{f.name}</span>
              <span className="rch-feeling-desc">{f.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rch-fracture" />

      {/* ── RESEARCH STATUS ── */}
      <div className="page-content">
        <div className="reveal-pending">
          <p className="eyebrow">Current Evidence Status</p>
          <h2>Research Status</h2>
          <p className="rch-body">
            The Relational Continuity Hypothesis is exploratory and speculative. It has not been
            independently tested, peer-reviewed as a scientific study, or empirically validated.
            The twelve-stage taxonomy is presented as a descriptive coding framework intended to
            generate testable research questions, not as an established theory.
          </p>
          <p className="rch-body">
            A meaningful evaluation would require independent application of the framework across
            diverse relational case studies using standardized coding procedures, independent raters,
            and clearly documented decision criteria. If the proposed stages cannot be applied
            consistently, if symbolic convergence fails to demonstrate recurrence beyond chance
            expectation, or if mirrored identity structures show no greater explanatory coherence
            than alternative comparisons, the hypothesis would warrant revision, refinement, or
            rejection.
          </p>
          <p className="rch-body">
            The authors invite skeptical researchers, psychologists, phenomenologists, symbolic
            analysts, and historians to challenge, test, replicate, or falsify this framework.
            Source documentation, methodology, and falsification criteria are discussed in the
            full manuscript.
          </p>
        </div>
      </div>

      <div className="rch-fracture" />

      {/* ── LIMITATIONS ── */}
      <div className="page-content">
        <p className="eyebrow reveal-pending">Methodological Transparency</p>
        <h2 className="reveal-pending">Known Limitations</h2>
        <p className="rch-body reveal-pending">
          Acknowledging the limitations of a theoretical framework strengthens rather than weakens it.
          The following risks are recognized by the authors and presented here so that readers may
          evaluate the work with full methodological awareness.
        </p>
        <div className="rch-risks reveal-pending">
          {limitations.map((l) => (
            <div key={l.name} className="rch-risk">
              <h3>{l.name}</h3>
              <p>{l.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rch-fracture" />

      {/* ── CTA ── */}
      <div className="rch-cta reveal-pending">
        <p className="eyebrow">Available Now</p>
        <h2>A framework intended to be tested, challenged, and refined.</h2>
        <p className="rch-body">
          The full manuscript includes source documentation, methodology, case studies,
          falsification criteria, and the complete twelve-stage taxonomy for independent evaluation.
        </p>
        <a href="https://a.co/d/0jeiip0w" target="_blank" rel="noopener noreferrer" className="vault-button" style={{ marginTop: "1.5rem" }}>
          Get the Founding Edition
        </a>
        <p className="rch-isbn">ISBN 9798190610680 · Kindle &amp; Paperback</p>
      </div>

    </section>
  );
}
