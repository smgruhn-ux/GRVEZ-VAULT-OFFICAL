import React, { useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

const BASE = '/after-dark-dwellings';
const PINTEREST_URL = 'https://www.pinterest.com/afterdarkdwellings/';
const CONTACT_EMAIL = 'afterdarkdwellings@gmail.com';
const ARTICLE_PATH = `${BASE}/7-ways-to-make-a-dark-room-feel-expensive`;
const PIN_IMAGE = 'https://img.tailwindapp.net/images/cae9/c356/7631/708a0d852433de724063.png';

type AfterDarkFrameProps = {
  children: React.ReactNode;
  title: string;
  description: string;
  path: string;
  section?: string;
};

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  const created = !element;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    element.dataset.afterDarkCreated = 'true';
    document.head.appendChild(element);
  }
  const previous = element.getAttribute('content');
  element.setAttribute('content', content);
  return () => {
    if (created || element?.dataset.afterDarkCreated === 'true') {
      element?.remove();
    } else if (previous !== null) {
      element?.setAttribute('content', previous);
    }
  };
}

function useAfterDarkEnvironment(title: string, description: string, path: string) {
  useLayoutEffect(() => {
    document.body.classList.add('after-dark-active');
    return () => document.body.classList.remove('after-dark-active');
  }, []);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const fullUrl = `https://grvezvaultofficial.us${path}`;
    const cleanups = [
      upsertMeta('name', 'description', description),
      upsertMeta('property', 'og:title', title),
      upsertMeta('property', 'og:description', description),
      upsertMeta('property', 'og:url', fullUrl),
      upsertMeta('property', 'og:site_name', 'After Dark Dwellings'),
      upsertMeta('name', 'twitter:title', title),
      upsertMeta('name', 'twitter:description', description),
    ];

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const previousCanonical = canonical?.href;
    let canonicalElement = canonical;
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.rel = 'canonical';
      canonicalElement.dataset.afterDarkCreated = 'true';
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.href = fullUrl;

    return () => {
      document.title = previousTitle;
      cleanups.forEach((cleanup) => cleanup());
      if (canonicalElement?.dataset.afterDarkCreated === 'true') canonicalElement.remove();
      else if (canonicalElement && previousCanonical) canonicalElement.href = previousCanonical;
    };
  }, [title, description, path]);
}

function AfterDarkFrame({ children, title, description, path, section }: AfterDarkFrameProps) {
  useAfterDarkEnvironment(title, description, path);

  return (
    <div className="after-dark-site">
      <a className="after-dark-skip" href="#after-dark-main">Skip to content</a>
      <header className="after-dark-header">
        <Link className="after-dark-brand" to={BASE} aria-label="After Dark Dwellings home">
          <span className="after-dark-monogram">AD</span>
          <span className="after-dark-brand-copy">
            <strong>AFTER DARK</strong>
            <em>DWELLINGS</em>
          </span>
        </Link>
        <nav className="after-dark-nav" aria-label="After Dark Dwellings navigation">
          <Link className={!section || section === 'home' ? 'active' : ''} to={BASE}>Home</Link>
          <Link className={section === 'guides' ? 'active' : ''} to={ARTICLE_PATH}>Guides</Link>
          <Link className={section === 'finds' ? 'active' : ''} to={`${BASE}/curated-finds`}>Curated Finds</Link>
          <a href={PINTEREST_URL} target="_blank" rel="noreferrer">Pinterest</a>
        </nav>
      </header>

      <main id="after-dark-main">{children}</main>

      <footer className="after-dark-footer">
        <div className="after-dark-footer-brand">
          <span className="after-dark-kicker">AFTER DARK DWELLINGS</span>
          <p>Dark interiors, considered objects, and home upgrades worth bringing inside.</p>
          <span className="after-dark-vault-note">A GRVEZ VAULT PROJECT</span>
        </div>
        <div>
          <h2>Explore</h2>
          <Link to={BASE}>Home</Link>
          <Link to={ARTICLE_PATH}>Guides</Link>
          <Link to={`${BASE}/curated-finds`}>Curated Finds</Link>
          <a href={PINTEREST_URL} target="_blank" rel="noreferrer">@afterdarkdwellings</a>
        </div>
        <div>
          <h2>Legal</h2>
          <Link to={`${BASE}/faq`}>FAQ</Link>
          <Link to={`${BASE}/privacy-policy`}>Privacy Policy</Link>
          <Link to={`${BASE}/terms-of-use`}>Terms of Use</Link>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </footer>
    </div>
  );
}

export function AfterDarkDwellingsPage() {
  return (
    <AfterDarkFrame
      title="After Dark Dwellings | Dark Interior Design, Guides & Home Finds"
      description="Dark interior design, architectural inspiration, considered home finds and practical guides for creating modern rooms with depth, texture and atmosphere."
      path={BASE}
      section="home"
    >
      <section className="after-dark-hero">
        <div className="after-dark-hero-copy">
          <span className="after-dark-kicker">INTERIORS / OBJECTS / ATMOSPHERE</span>
          <h1>INTERIORS<br />AFTER DARK</h1>
          <p>Dark interiors, considered objects, and home upgrades worth bringing inside.</p>
          <div className="after-dark-actions">
            <Link className="after-dark-button primary" to={ARTICLE_PATH}>Explore the edit</Link>
            <Link className="after-dark-text-link" to={ARTICLE_PATH}>Latest guide <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="after-dark-hero-visual" aria-hidden="true">
          <div className="after-dark-visual-index">01 — DWELLING STUDY</div>
          <div className="after-dark-visual-lines" />
          <div className="after-dark-material-stack">
            <span>CARBON</span>
            <span>STONE</span>
            <span>STEEL</span>
          </div>
          <div className="after-dark-light-well" />
        </div>
      </section>

      <section className="after-dark-section after-dark-latest">
        <div className="after-dark-section-heading">
          <span>01 / EDITORIAL</span>
          <h2>THE LATEST</h2>
        </div>
        <Link className="after-dark-feature-card" to={ARTICLE_PATH}>
          <div className="after-dark-feature-image">
            <img src={PIN_IMAGE} alt="Dark luxury living room in black and charcoal tones with warm architectural lighting." />
          </div>
          <div className="after-dark-feature-copy">
            <span className="after-dark-card-label">GUIDE / DARK INTERIORS</span>
            <h3>7 Ways to Make a Dark Room Feel Expensive</h3>
            <p>Layered blacks, warm low lighting, natural stone, texture, scale and negative space — seven ways to make a darker room feel intentional instead of flat.</p>
            <span className="after-dark-read">READ THE GUIDE →</span>
          </div>
        </Link>
      </section>

      <section className="after-dark-section after-dark-principles">
        <div className="after-dark-section-heading">
          <span>02 / POINT OF VIEW</span>
          <h2>DESIGN AFTER DARK</h2>
        </div>
        <div className="after-dark-principle-grid">
          <article>
            <span>01</span>
            <h3>Material</h3>
            <p>Stone, wood, glass, textile and metal create depth when color is restrained.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Light</h3>
            <p>Low, layered illumination reveals texture without washing out the room.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Space</h3>
            <p>Negative space gives stronger objects and architectural lines room to register.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Contrast</h3>
            <p>Pale surfaces and warm light work best as controlled breaks inside a darker field.</p>
          </article>
        </div>
      </section>

      <section className="after-dark-section after-dark-finds-preview">
        <div>
          <span className="after-dark-kicker">03 / CURATED FINDS</span>
          <h2>REAL FINDS.<br />NO PLACEHOLDERS.</h2>
        </div>
        <div className="after-dark-finds-copy">
          <p>This edit will only feature real products with verified destination links. No invented prices, fake merchants, or filler listings.</p>
          <Link className="after-dark-button ghost" to={`${BASE}/curated-finds`}>View Curated Finds</Link>
        </div>
      </section>

      <section className="after-dark-pinterest">
        <span className="after-dark-kicker">MORE AFTER DARK</span>
        <h2>Save the rooms worth remembering.</h2>
        <p>Follow <strong>@afterdarkdwellings</strong> on Pinterest for interiors, objects and ideas worth saving.</p>
        <a className="after-dark-button primary" href={PINTEREST_URL} target="_blank" rel="noreferrer">Open Pinterest</a>
      </section>
    </AfterDarkFrame>
  );
}

export function AfterDarkArticlePage() {
  const sections = [
    ['01', 'Layer Your Blacks', 'Avoid one flat black everywhere. Mix soft black, charcoal, graphite and deep gray so walls, furniture and textiles remain distinct. Small shifts in tone create depth without breaking the dark atmosphere.'],
    ['02', 'Use Warm, Low Lighting', 'A dark room usually looks better with several lower light sources than one harsh ceiling fixture. Table lamps, floor lamps, sconces and concealed lighting create pools of warm light that reveal texture.'],
    ['03', 'Mix Your Textures', 'When the palette is restrained, texture matters more. Combine stone, wood, linen, velvet, glass and metal. Matte and reflective surfaces beside each other keep a nearly monochrome room from feeling flat.'],
    ['04', 'Choose Fewer, Larger Pieces', 'Too many small objects make a dark room feel crowded. Give substantial furniture, artwork and lighting room to stand on their own. A few well-scaled pieces create a stronger composition.'],
    ['05', 'Bring In Natural Stone', 'Marble, slate, travertine and other stone surfaces introduce natural variation without requiring bright color. Even a smaller stone element can add visual weight and permanence.'],
    ['06', 'Add Warm Contrast', 'Dark does not have to mean cold. Pale stone, warm wood, aged metal and soft neutral textiles can break up black and charcoal. Use contrast selectively rather than spreading it everywhere.'],
    ['07', 'Leave Negative Space', 'Not every wall, shelf or corner needs something in it. Empty space lets the strongest materials and objects register and prevents a dark palette from becoming visually heavy.'],
  ];

  return (
    <AfterDarkFrame
      title="7 Ways to Make a Dark Room Feel Expensive | After Dark Dwellings"
      description="Seven practical dark interior design ideas using layered blacks, warm low lighting, natural stone, texture, scale and negative space."
      path={ARTICLE_PATH}
      section="guides"
    >
      <article className="after-dark-article">
        <header className="after-dark-article-header">
          <span className="after-dark-kicker">GUIDE / DARK INTERIORS</span>
          <h1>7 Ways to Make a Dark Room Feel Expensive</h1>
          <p className="after-dark-article-deck">Dark interiors work best when they feel intentional, layered and architectural rather than simply dim.</p>
          <div className="after-dark-article-meta">AFTER DARK DWELLINGS · 2 MIN READ</div>
        </header>

        <figure className="after-dark-article-image">
          <img src={PIN_IMAGE} alt="Dark editorial living room in black and charcoal tones with natural stone and warm architectural lighting." />
        </figure>

        <div className="after-dark-article-body">
          <p className="after-dark-lede">The goal is depth: materials that react differently to light, enough contrast to keep the room readable, and enough restraint for the darker palette to breathe.</p>
          {sections.map(([number, heading, copy]) => (
            <section className="after-dark-article-step" key={number}>
              <span className="after-dark-step-number">{number}</span>
              <div>
                <h2>{heading}</h2>
                <p>{copy}</p>
              </div>
            </section>
          ))}
          <aside className="after-dark-rule">
            <span>THE AFTER DARK RULE</span>
            <p>A convincing dark interior is not about making everything black. It is about controlling contrast, texture, scale and light. Start with one room, build the palette slowly, and keep only the elements that strengthen the atmosphere.</p>
          </aside>
          <p className="after-dark-disclosure">Some future pages on After Dark Dwellings may contain affiliate links. If you purchase through an affiliate link, After Dark Dwellings may earn a commission at no additional cost to you.</p>
        </div>
      </article>
    </AfterDarkFrame>
  );
}

export function AfterDarkCuratedFindsPage() {
  return (
    <AfterDarkFrame
      title="Curated Finds | After Dark Dwellings"
      description="Considered furniture, lighting, decor and home upgrades for dark modern interiors. Real products only — no fabricated listings or placeholder prices."
      path={`${BASE}/curated-finds`}
      section="finds"
    >
      <section className="after-dark-simple-hero">
        <span className="after-dark-kicker">CURATED FINDS</span>
        <h1>REAL FINDS,<br />SELECTED AFTER DARK.</h1>
        <p>This section is being built around verified products and real destination links. Nothing appears here just to make the page look full.</p>
      </section>
      <section className="after-dark-coming-soon">
        <span>THE EDIT IS IN PROGRESS</span>
        <p>Furniture, lighting, objects and home upgrades will be added only after the source, merchant and destination link are verified.</p>
        <Link className="after-dark-text-link" to={BASE}>Back to After Dark Dwellings →</Link>
      </section>
    </AfterDarkFrame>
  );
}

export function AfterDarkFaqPage() {
  const faqs = [
    ['What is After Dark Dwellings?', 'An independent interior and home editorial focused on dark, architectural spaces, considered objects and practical upgrades.'],
    ['Do you use affiliate links?', 'Some pages may contain affiliate links. When they do, the relationship will be disclosed. After Dark Dwellings may earn a commission at no additional cost to you.'],
    ['Do you sell the products shown in Curated Finds?', 'Not unless a page clearly says otherwise. Curated Finds generally links to third-party merchants that handle pricing, availability, fulfillment, returns and warranties.'],
    ['How can I get in touch?', `Email ${CONTACT_EMAIL}.`],
  ];
  return (
    <AfterDarkFrame
      title="FAQ | After Dark Dwellings"
      description="Frequently asked questions about After Dark Dwellings, Curated Finds, affiliate links and contact information."
      path={`${BASE}/faq`}
    >
      <section className="after-dark-legal">
        <span className="after-dark-kicker">INFORMATION</span>
        <h1>FAQ</h1>
        <div className="after-dark-faq-list">
          {faqs.map(([q, a]) => <article key={q}><h2>{q}</h2><p>{a}</p></article>)}
        </div>
      </section>
    </AfterDarkFrame>
  );
}

export function AfterDarkPrivacyPage() {
  return (
    <AfterDarkFrame
      title="Privacy Policy | After Dark Dwellings"
      description="Privacy information for visitors to After Dark Dwellings."
      path={`${BASE}/privacy-policy`}
    >
      <section className="after-dark-legal">
        <span className="after-dark-kicker">LEGAL</span>
        <h1>Privacy Policy</h1>
        <p className="after-dark-legal-updated">Last updated October 3, 2026</p>
        <h2>Information you provide</h2>
        <p>If you contact After Dark Dwellings by email, the information you choose to send may be used to respond to your message and maintain ordinary correspondence.</p>
        <h2>Site and third-party services</h2>
        <p>This site may use hosting, analytics, social platforms, embedded media or other third-party services that process technical information such as device, browser, referral and usage data under their own policies.</p>
        <h2>Affiliate and external links</h2>
        <p>Some pages may link to third-party merchants or affiliate partners. Those websites operate independently and have their own privacy practices. After Dark Dwellings does not control their checkout, account or tracking systems.</p>
        <h2>Contact</h2>
        <p>Questions about this policy can be sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
      </section>
    </AfterDarkFrame>
  );
}

export function AfterDarkTermsPage() {
  return (
    <AfterDarkFrame
      title="Terms of Use | After Dark Dwellings"
      description="Terms governing use of After Dark Dwellings editorial content, external links and recommendations."
      path={`${BASE}/terms-of-use`}
    >
      <section className="after-dark-legal">
        <span className="after-dark-kicker">LEGAL</span>
        <h1>Terms of Use</h1>
        <p className="after-dark-legal-updated">Last updated October 3, 2026</p>
        <h2>Editorial information</h2>
        <p>After Dark Dwellings provides design inspiration, commentary, guides and curated recommendations for informational purposes. Product availability, pricing and specifications can change.</p>
        <h2>Third-party products and links</h2>
        <p>External merchants are responsible for their own products, orders, shipping, returns, warranties, terms and customer service. A link from this site does not make After Dark Dwellings the seller.</p>
        <h2>Affiliate disclosure</h2>
        <p>Some links may be affiliate links. If a purchase is made through an affiliate link, After Dark Dwellings may receive a commission at no additional cost to the purchaser. Affiliate relationships do not change the requirement that items shown as purchasable be tied to real, verifiable destinations.</p>
        <h2>Content</h2>
        <p>Original text, branding and site design may not be republished or presented as another party's work without permission. Third-party trademarks and product imagery remain the property of their respective owners.</p>
        <h2>Contact</h2>
        <p>Questions can be sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
      </section>
    </AfterDarkFrame>
  );
}
