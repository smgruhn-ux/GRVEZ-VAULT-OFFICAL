import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

type QuestionConfig = { title: string; label: string; prompts?: string[] };

const questions: Record<string, QuestionConfig> = {
  basketball: { title: "WHAT DOES THE BASKETBALL MEAN?", label: "SYMBOL / EVENT", prompts: ["The basketball / black mist / sparkles experience", "Where it occurred in the chronology", "What was happening immediately beforehand", "What was observed directly", "Later interpretation", "The distinction between testimony and verified evidence"] },
  "mimic-experiences": { title: "WHAT WERE THE MIMIC EXPERIENCES?", label: "EXPERIENCE / TESTIMONY" },
  "may-23-epiphany": { title: "WHAT HAPPENED DURING THE MAY 23 EPIPHANY?", label: "CHRONOLOGY / TESTIMONY" },
  "recurring-symbols": { title: "WHY DO THE SAME SYMBOLS KEEP REAPPEARING?", label: "SYMBOL / INTERPRETATION" },
  "pre-framework-events": { title: "WHICH EVENTS HAPPENED BEFORE THE FRAMEWORK EXISTED?", label: "CHRONOLOGY / METHOD" },
};

const evidenceCategories = ["DOCUMENTED CHRONOLOGY", "PERSONAL TESTIMONY", "INTERPRETATION", "OPEN QUESTIONS"];

export function DocumentaryQuestionPage() {
  const { question } = useParams();
  const config = question ? questions[question] : undefined;

  useEffect(() => {
    document.title = config ? `${config.title} | GRVEZ VAULT` : "Documentary Question | GRVEZ VAULT";
    return () => { document.title = "GRVEZ VAULT | Music · Archive · Manuscripts · Media"; };
  }, [config]);

  if (!config) return null;

  return (
    <section className="page-section documentary-question-page" aria-labelledby="question-heading">
      <div className="page-content">
        <div className="page-intro">
          <p className="eyebrow">SOMEWHERE BETWEEN · QUESTION PATHWAY</p>
          <h1 id="question-heading">{config.title}</h1>
          <p className="documentary-question-label">{config.label}</p>
          <p className="documentary-question-note">This destination is reserved for a later evidence-led explainer. No conclusion is being asserted here.</p>
        </div>
        {config.prompts && <section className="documentary-question-prompts" aria-labelledby="prompts-heading"><p className="eyebrow" id="prompts-heading">PREPARED SCOPE</p><div className="documentary-question-prompt-grid">{config.prompts.map((prompt) => <div className="documentary-question-prompt" key={prompt}>{prompt}</div>)}</div></section>}
        <section className="documentary-evidence-structure" aria-labelledby="evidence-heading"><p className="eyebrow" id="evidence-heading">EVIDENCE STRUCTURE</p><div className="documentary-evidence-grid">{evidenceCategories.map((category) => <div className="documentary-evidence-item" key={category}><h2>{category}</h2><p>Reserved for documented material and clearly marked uncertainty.</p></div>)}</div></section>
        <Link to="/films" className="metal-button documentary-question-back">Return to Films &amp; Media</Link>
      </div>
    </section>
  );
}
