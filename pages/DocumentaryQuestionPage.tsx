import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

type QuestionSection = {
  heading: string;
  paragraphs: string[];
};

type QuestionConfig = {
  title: string;
  label: string;
  intro: string;
  sections: QuestionSection[];
};

const questions: Record<string, QuestionConfig> = {
  basketball: {
    title: "WHAT DOES THE BASKETBALL MEAN?",
    label: "SYMBOL / EVENT",
    intro: "The basketball belongs to a reported experience that later became part of the GRVEZ VAULT investigative record. Its importance is not that the archive has proven what caused it, but that the experience occurred immediately after the May 23 turning point and was later preserved for comparison rather than rewritten into a certainty.",
    sections: [
      {
        heading: "WHAT HAPPENED",
        paragraphs: [
          "During the first night of intensive research following the May 23 realization, Sheldyn reported an experience involving a basketball that appeared displaced, followed by a mist-like phenomenon. The event was later cataloged as Basketball & Mist within the archive's separate set of reported experiences.",
        ],
      },
      {
        heading: "WHY IT MATTERS",
        paragraphs: [
          "The event sits directly on the other side of the archive's May 23 cutoff: after the realization, but before the later investigative framework had been fully developed. That placement is why it became relevant to the chronology.",
          "The basketball itself does not have a proven symbolic meaning. The archive preserves the event because it became part of the sequence being investigated, not because a cause or supernatural explanation has been established.",
        ],
      },
      {
        heading: "WHAT REMAINS OPEN",
        paragraphs: [
          "The surviving record does not establish a mechanism for the reported displacement or mist-like phenomenon. Later interpretations remain interpretations. The event is retained as a reported experience whose significance can be examined without converting uncertainty into fact.",
        ],
      },
    ],
  },
  "may-23-epiphany": {
    title: "WHAT HAPPENED DURING THE MAY 23 EPIPHANY?",
    label: "CHRONOLOGY / TESTIMONY",
    intro: "May 23, 2026 is the methodological dividing line in GRVEZ VAULT: material on one side already existed; the conscious investigation and framework-building developed on the other.",
    sections: [
      {
        heading: "THE REALIZATION",
        paragraphs: [
          "After playing pool on May 23, 2026, Sheldyn and Jerry stopped at a gas station. In the parking-lot context, a sudden realization surfaced: “Oh my God… we're ancient.”",
          "The remembered thought then moved toward the question of who was ancient, with Adam and Eve entering the association. That moment triggered the research rabbit-hole that followed.",
        ],
      },
      {
        heading: "THE MISSING TRIGGER",
        paragraphs: [
          "The exact sentence Jerry said immediately before the realization is not currently preserved in memory or established by the surviving source record. GRVEZ VAULT leaves that sentence unresolved rather than reconstructing it after the fact.",
        ],
      },
      {
        heading: "WHY MAY 23 IS THE CUTOFF",
        paragraphs: [
          "The importance of May 23 is methodological. It provides a boundary for asking a clean chronological question: which artifacts, motifs and creative works demonstrably existed before Sheldyn began consciously searching for a larger pattern, and which structures were developed afterward?",
          "The later framework cannot be projected backward onto earlier material simply because an older artifact appears to fit it in retrospect.",
        ],
      },
    ],
  },
  "recurring-symbols": {
    title: "WHY DO THE SAME SYMBOLS KEEP REAPPEARING?",
    label: "SYMBOL / INTERPRETATION",
    intro: "GRVEZ VAULT documents recurring visual and lyrical forms across material created years apart. What the record establishes is recurrence. Why those recurrences happen remains a separate question.",
    sections: [
      {
        heading: "THE EARLIER RECORD",
        paragraphs: [
          "Dated pre-framework material includes water and fish imagery, butterfly imagery, an hourglass, mirror imagery, cosmic imagery and a clock, along with later pre-cutoff lyrics containing forms and language that became relevant to subsequent comparisons.",
          "Those earlier pieces had their own original contexts. A water-and-fish tattoo, for example, was originally connected to fishing and water aesthetics. The later continuity interpretation was not its documented original meaning.",
        ],
      },
      {
        heading: "THE LATER RECOGNITION",
        paragraphs: [
          "After May 23, earlier artifacts began to be compared with newer material and with structures emerging from the developing framework. That is when older forms acquired additional interpretive relationships: hourglass geometry could be compared with later Gate geometry, mirror imagery with later identity structures, and other recurring forms with the developing taxonomy.",
        ],
      },
      {
        heading: "WHAT THE RECURRENCE DOES — AND DOES NOT — SHOW",
        paragraphs: [
          "A repeated form is not automatically evidence of a shared cause. Mirrors, spirals, clocks, hourglasses, crosses, circles and other simple structures are common enough that resemblance alone is weak evidence.",
          "The useful questions are more specific: Did the earlier artifact genuinely predate the later interpretation? How distinctive is the match? How often does it recur? Were the sources independent? Could ordinary artistic preference, memory, coincidence or retrospective categorization explain it?",
          "The archive therefore treats the recurrence itself as documented where the source record supports it, while leaving the mechanism unresolved.",
        ],
      },
    ],
  },
  "pre-framework-events": {
    title: "WHICH EVENTS HAPPENED BEFORE THE FRAMEWORK EXISTED?",
    label: "CHRONOLOGY / METHOD",
    intro: "The answer begins with one fixed boundary: May 23, 2026. Anything demonstrably created or documented before that date can be evaluated as pre-framework material without assuming that its later interpretation was already understood at the time.",
    sections: [
      {
        heading: "BEFORE MAY 23, 2026",
        paragraphs: [
          "The surviving pre-cutoff record reaches back years before the framework. It includes dated tattoos and physical motifs from 2018–2019, visual work from the following years, the 2024 poem Forevermore, the 2025 work Deadweight Angel, and creative material from early 2026 including Dead Circuit Mercy.",
          "These artifacts matter chronologically because their existence can be placed before the conscious investigation. Their age does not, by itself, prove prediction, foreknowledge or unconscious encoding.",
        ],
      },
      {
        heading: "MAY 23 CHANGES THE METHOD",
        paragraphs: [
          "The May 23 realization initiated the research period. From that point forward, Sheldyn was consciously examining earlier material, comparing motifs and developing explanatory structures. Later Relational Continuity modeling, structural mapping and increasingly formal comparative analysis therefore belong to the post-cutoff record.",
        ],
      },
      {
        heading: "WHY THE DISTINCTION MATTERS",
        paragraphs: [
          "Without the cutoff, an older artifact and a later interpretation can easily collapse into one story. GRVEZ VAULT keeps them separate: first establish when the artifact existed and what was known about it at the time; then document when a correspondence was noticed; only after that should an interpretation be considered.",
          "That separation is the point of the pre-framework chronology. It allows the earlier archive to be examined without backdating the framework that was eventually built around it.",
        ],
      },
    ],
  },
};

export function DocumentaryQuestionPage() {
  const { question } = useParams();
  const config = question ? questions[question] : undefined;

  useEffect(() => {
    document.title = config ? `${config.title} | GRVEZ VAULT` : "Documentary Question | GRVEZ VAULT";
    return () => {
      document.title = "GRVEZ VAULT | Music · Archive · Manuscripts · Media";
    };
  }, [config]);

  if (!config) return null;

  return (
    <section className="page-section documentary-question-page" aria-labelledby="question-heading">
      <div className="page-content">
        <div className="page-intro">
          <p className="eyebrow">SOMEWHERE BETWEEN · QUESTIONS RAISED BY THE FILM</p>
          <h1 id="question-heading">{config.title}</h1>
          <p className="documentary-question-label">{config.label}</p>
          <p className="documentary-question-note">{config.intro}</p>
        </div>

        <div className="documentary-evidence-structure">
          {config.sections.map((section) => (
            <section className="documentary-evidence-item" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <Link to="/films" className="metal-button documentary-question-back">
          Return to Films &amp; Media
        </Link>
      </div>
    </section>
  );
}
