import React from 'react';

const faqs = [
  {
    question: 'How can I contact GRVEZ VAULT?',
    answer: 'Use the official email addresses listed on the contact page.'
  },
  {
    question: 'Where can I listen to the featured releases?',
    answer: 'The music page links directly to the official Spotify releases provided by the GRVEZ VAULT team.'
  },
  {
    question: 'What is The Archive?',
    answer: 'The Archive is an immersive, museum-like exhibition of themes, symbolism, and continuity explored through the GRVEZ VAULT world.'
  }
];

export function FaqPage() {
  return (
    <section className="page-section" aria-labelledby="faq-heading">
      <div className="page-content">
        <div className="page-intro">
          <p className="eyebrow">FAQ</p>
          <h1 id="faq-heading">Frequently asked questions</h1>
          <p className="info-page">A concise guide to the most common questions around the GRVEZ VAULT experience.</p>
        </div>
        <div className="archive-stack">
          {faqs.map((item) => (
            <article key={item.question} className="info-panel">
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
