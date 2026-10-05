import React, { useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

const BASE = '/after-dark-dwellings';
const PINTEREST_URL = 'https://www.pinterest.com/afterdarkdwellings/';
const CONTACT_EMAIL = 'afterdarkdwellings@gmail.com';
const ARTICLE_PATH = `${BASE}/7-ways-to-make-a-dark-room-feel-expensive`;
const GUIDES_PATH = `${BASE}/guides`;
const LIGHTING_GUIDE_PATH = `${BASE}/guides/layered-lighting-for-dark-interiors`;
const BEDROOM_GUIDE_PATH = `${BASE}/guides/dark-bedroom-without-feeling-heavy`;
const KITCHEN_GUIDE_PATH = `${BASE}/guides/black-kitchen-without-feeling-flat`;
const BATHROOM_GUIDE_PATH = `${BASE}/guides/dark-bathroom-that-feels-expensive`;
const OFFICE_GUIDE_PATH = `${BASE}/guides/dark-home-office-without-feeling-closed-in`;
const SMALL_SPACE_GUIDE_PATH = `${BASE}/guides/small-dark-spaces-that-still-feel-open`;
const LIVING_ROOM_GUIDE_PATH = `${BASE}/guides/dark-living-room-feel-expensive`;
const BLACK_STONE_GUIDE_PATH = `${BASE}/guides/black-and-stone-interiors`;
const ENTRYWAY_GUIDE_PATH = `${BASE}/guides/dark-entryway-lighting-mirrors-contrast`;
const ABOUT_PATH = `${BASE}/about`;
const DISCLOSURE_PATH = `${BASE}/affiliate-disclosure`;
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
          <Link className={section === 'guides' ? 'active' : ''} to={GUIDES_PATH}>Guides</Link>
          <Link className={section === 'finds' ? 'active' : ''} to={`${BASE}/curated-finds`}>Curated Finds</Link>
          <Link className={section === 'about' ? 'active' : ''} to={ABOUT_PATH}>About</Link>
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
          <Link to={GUIDES_PATH}>Guides</Link>
          <Link to={`${BASE}/curated-finds`}>Curated Finds</Link>
          <Link to={ABOUT_PATH}>About</Link>
          <a href={PINTEREST_URL} target="_blank" rel="noreferrer">@afterdarkdwellings</a>
        </div>
        <div>
          <h2>Legal</h2>
          <Link to={`${BASE}/faq`}>FAQ</Link>
          <Link to={`${BASE}/privacy-policy`}>Privacy Policy</Link>
          <Link to={`${BASE}/terms-of-use`}>Terms of Use</Link>
          <Link to={DISCLOSURE_PATH}>Affiliate Disclosure</Link>
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
        <div className="after-dark-guide-grid after-dark-home-guide-grid">
          <Link className="after-dark-guide-card" to={LIGHTING_GUIDE_PATH}>
            <span>LIGHTING / GUIDE</span>
            <h3>Layered Lighting for Dark Interiors</h3>
            <p>How to build depth with ambient, task and accent lighting without flattening a dark room.</p>
            <em>READ GUIDE →</em>
          </Link>
          <Link className="after-dark-guide-card" to={BEDROOM_GUIDE_PATH}>
            <span>BEDROOM / GUIDE</span>
            <h3>How to Make a Dark Bedroom Feel Calm, Not Heavy</h3>
            <p>Balance deep color with texture, scale, low light and deliberate negative space.</p>
            <em>READ GUIDE →</em>
          </Link>
          <Link className="after-dark-guide-card" to={KITCHEN_GUIDE_PATH}>
            <span>KITCHEN / GUIDE</span>
            <h3>Black Kitchens Without the Flat Look</h3>
            <p>Use stone, metal, wood grain, sheen and lighting to keep a black kitchen dimensional.</p>
            <em>READ GUIDE →</em>
          </Link>
          <Link className="after-dark-guide-card" to={BATHROOM_GUIDE_PATH}>
            <span>BATHROOM / GUIDE</span>
            <h3>How to Make a Dark Bathroom Feel Expensive</h3>
            <p>Use stone, metal, glass, mirror and warm task lighting to make a smaller dark room feel intentional.</p>
            <em>READ GUIDE →</em>
          </Link>
          <Link className="after-dark-guide-card" to={OFFICE_GUIDE_PATH}>
            <span>HOME OFFICE / GUIDE</span>
            <h3>Dark Home Offices Without the Closed-In Feeling</h3>
            <p>Keep concentration high without sacrificing depth, contrast or usable light.</p>
            <em>READ GUIDE →</em>
          </Link>
          <Link className="after-dark-guide-card" to={SMALL_SPACE_GUIDE_PATH}>
            <span>SMALL SPACES / GUIDE</span>
            <h3>Small Dark Spaces That Still Feel Open</h3>
            <p>Control scale, reflection and contrast so compact rooms stay atmospheric instead of cramped.</p>
            <em>READ GUIDE →</em>
          </Link>
        </div>
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


      <section className="after-dark-section after-dark-board-section">
        <div className="after-dark-section-heading">
          <span>04 / PINTEREST BOARDS</span>
          <h2>EXPLORE BY SPACE</h2>
        </div>
        <div className="after-dark-board-grid">
          {[
            ['Dark Interior Ideas', ARTICLE_PATH, 'https://www.pinterest.com/afterdarkdwellings/dark-interior-ideas/'],
            ['Dark Living Rooms', LIVING_ROOM_GUIDE_PATH, 'https://www.pinterest.com/afterdarkdwellings/dark-living-rooms/'],
            ['Dark Bedrooms', BEDROOM_GUIDE_PATH, 'https://www.pinterest.com/afterdarkdwellings/dark-bedrooms/'],
            ['Dark Kitchens', KITCHEN_GUIDE_PATH, 'https://www.pinterest.com/afterdarkdwellings/dark-kitchens/'],
            ['Dark Bathrooms', BATHROOM_GUIDE_PATH, 'https://www.pinterest.com/afterdarkdwellings/dark-bathrooms/'],
            ['Dark Home Offices', OFFICE_GUIDE_PATH, 'https://www.pinterest.com/afterdarkdwellings/dark-home-offices/'],
            ['Lighting After Dark', LIGHTING_GUIDE_PATH, 'https://www.pinterest.com/afterdarkdwellings/lighting-after-dark/'],
            ['Black & Stone Interiors', BLACK_STONE_GUIDE_PATH, 'https://www.pinterest.com/afterdarkdwellings/black-stone-interiors/'],
            ['Dark Entryways', ENTRYWAY_GUIDE_PATH, 'https://www.pinterest.com/afterdarkdwellings/dark-entryways/'],
            ['Small Dark Spaces', SMALL_SPACE_GUIDE_PATH, 'https://www.pinterest.com/afterdarkdwellings/small-dark-spaces/'],
            ['Curated Home Finds', `${BASE}/curated-finds`, 'https://www.pinterest.com/afterdarkdwellings/curated-home-finds/'],
          ].map(([name, guide, board]) => (
            <article className="after-dark-board-card" key={name}>
              <span>BOARD</span>
              <h3>{name}</h3>
              <div>
                <Link to={guide}>Read the insight →</Link>
                <a href={board} target="_blank" rel="noreferrer">Open board →</a>
              </div>
            </article>
          ))}
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
  const finds = [
    {
      category: 'WALL LIGHTING',
      merchant: 'WALMART',
      name: 'Better Homes & Gardens Matte Black 1-Light Indoor Wall Sconce',
      note: 'A compact matte-black sconce with a sculptural arm and warm LED light. Strong for bedside walls, reading corners, entries and narrow transitions.',
      url: 'https://www.walmart.com/ip/998572418'
    },
    {
      category: 'FLOOR LIGHTING',
      merchant: 'WALMART',
      name: 'Better Homes & Gardens Modern Matte Black 3-Head Arc Floor Lamp',
      note: 'Three adjustable light sources create layered illumination without relying on a bright ceiling fixture. The black frame keeps the silhouette clean and architectural.',
      url: 'https://www.walmart.com/ip/142753705'
    },
    {
      category: 'SIDE TABLE',
      merchant: 'WALMART',
      name: 'Better Homes & Gardens James Wood End Table — Rich Black',
      note: 'A solid dark side table with enough visual weight to anchor a chair or sofa without adding ornament or clutter.',
      url: 'https://www.walmart.com/ip/5678968502'
    },
    {
      category: 'MIRROR',
      merchant: 'WALMART',
      name: 'Better Homes & Gardens Soft Organic Wood Frame Wall Mirror — Black',
      note: 'The irregular outline softens a strict black palette while the dark frame keeps the piece restrained. Useful where a rectangular mirror would feel too rigid.',
      url: 'https://www.walmart.com/ip/17931801973'
    },
    {
      category: 'OBJECT',
      merchant: 'WALMART',
      name: 'Better Homes & Gardens Black Metal Accessory Tray',
      note: 'A simple low-profile black metal tray for grouping smaller objects so a counter, shelf or console reads as one composition instead of scattered pieces.',
      url: 'https://www.walmart.com/ip/15339169308'
    },
  ];

  return (
    <AfterDarkFrame
      title="Curated Finds | After Dark Dwellings"
      description="Verified furniture, lighting, decor and home upgrades selected for dark modern interiors. Real products and real merchant destinations only."
      path={`${BASE}/curated-finds`}
      section="finds"
    >
      <section className="after-dark-simple-hero">
        <span className="after-dark-kicker">CURATED FINDS / VERIFIED LINKS</span>
        <h1>REAL FINDS,<br />SELECTED AFTER DARK.</h1>
        <p>Every item below points to a real merchant page. Prices and availability can change, so the retailer page is always the current source of truth.</p>
      </section>

      <section className="after-dark-section after-dark-finds-section">
        <div className="after-dark-section-heading">
          <span>01 / THE EDIT</span>
          <h2>LIGHT / OBJECT / MATERIAL</h2>
        </div>
        <div className="after-dark-product-grid">
          {finds.map((find, index) => (
            <article className="after-dark-product-card" key={find.url}>
              <div className="after-dark-product-index">{String(index + 1).padStart(2, '0')}</div>
              <div className="after-dark-product-meta">{find.category} / {find.merchant}</div>
              <h3>{find.name}</h3>
              <p>{find.note}</p>
              <a href={find.url} target="_blank" rel="nofollow sponsored noreferrer">View at Walmart →</a>
            </article>
          ))}
        </div>
        <p className="after-dark-disclosure after-dark-finds-disclosure">
          Some Curated Finds links may become affiliate links. If a qualifying purchase is made through an affiliate link, After Dark Dwellings may earn a commission at no additional cost to the purchaser. <Link to={DISCLOSURE_PATH}>Read the affiliate disclosure.</Link>
        </p>
      </section>

      <section className="after-dark-pinterest">
        <span className="after-dark-kicker">THE STANDARD</span>
        <h2>No fake products. No filler listings.</h2>
        <p>Curated Finds is built around verifiable merchant destinations and editorial fit, not invented prices or placeholder inventory.</p>
        <Link className="after-dark-button ghost" to={GUIDES_PATH}>Read the Guides</Link>
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


type GuideStep = [string, string, string];

function AfterDarkGuideArticle({
  title,
  deck,
  description,
  path,
  label,
  readTime,
  steps,
  rule,
}: {
  title: string;
  deck: string;
  description: string;
  path: string;
  label: string;
  readTime: string;
  steps: GuideStep[];
  rule: string;
}) {
  return (
    <AfterDarkFrame title={title + ' | After Dark Dwellings'} description={description} path={path} section="guides">
      <article className="after-dark-article after-dark-text-guide">
        <header className="after-dark-article-header">
          <span className="after-dark-kicker">{label}</span>
          <h1>{title}</h1>
          <p className="after-dark-article-deck">{deck}</p>
          <div className="after-dark-article-meta">AFTER DARK DWELLINGS · {readTime}</div>
        </header>
        <div className="after-dark-article-study" aria-hidden="true">
          <span>AFTER DARK / FIELD NOTE</span>
          <strong>CARBON · STONE · STEEL · LIGHT</strong>
        </div>
        <div className="after-dark-article-body">
          {steps.map(([number, heading, copy]) => (
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
            <p>{rule}</p>
          </aside>
          <p className="after-dark-disclosure">This guide is editorial content. Some future recommendations may use affiliate links, which will be disclosed clearly and may earn After Dark Dwellings a commission at no additional cost to the reader.</p>
        </div>
      </article>
    </AfterDarkFrame>
  );
}

export function AfterDarkGuidesPage() {
  const guides = [
    {
      path: ARTICLE_PATH,
      label: 'DARK INTERIORS',
      title: '7 Ways to Make a Dark Room Feel Expensive',
      copy: 'Layered blacks, warm low lighting, stone, texture, scale and negative space.'
    },
    {
      path: LIGHTING_GUIDE_PATH,
      label: 'LIGHTING',
      title: 'Layered Lighting for Dark Interiors',
      copy: 'Build depth with ambient, task and accent lighting while protecting the atmosphere.'
    },
    {
      path: BEDROOM_GUIDE_PATH,
      label: 'BEDROOM',
      title: 'How to Make a Dark Bedroom Feel Calm, Not Heavy',
      copy: 'Use tonal variation, tactile materials, scale and controlled light to keep the room restful.'
    },
    {
      path: KITCHEN_GUIDE_PATH,
      label: 'KITCHEN',
      title: 'Black Kitchens Without the Flat Look',
      copy: 'Create dimension with stone, grain, metal, sheen and lighting rather than more color.'
    },
    {
      path: BATHROOM_GUIDE_PATH,
      label: 'BATHROOM',
      title: 'How to Make a Dark Bathroom Feel Expensive',
      copy: 'Use stone, mirror, metal and layered light to give a compact bathroom depth and polish.'
    },
    {
      path: OFFICE_GUIDE_PATH,
      label: 'HOME OFFICE',
      title: 'Dark Home Offices Without the Closed-In Feeling',
      copy: 'Balance focused task lighting, graphite surfaces and negative space for a concentrated workspace.'
    },
    {
      path: SMALL_SPACE_GUIDE_PATH,
      label: 'SMALL SPACES',
      title: 'Small Dark Spaces That Still Feel Open',
      copy: 'Use reflection, scale, tonal variation and deliberate emptiness to keep compact rooms breathable.'
    },
    {
      path: LIVING_ROOM_GUIDE_PATH,
      label: 'LIVING ROOM',
      title: 'How to Make a Dark Living Room Feel Expensive',
      copy: 'Use scale, material variation, low light and edited styling to make the room feel deliberate.'
    },
    {
      path: BLACK_STONE_GUIDE_PATH,
      label: 'MATERIAL',
      title: 'Black & Stone Interiors Without the Flat Look',
      copy: 'Mix black finishes and natural stone by controlling sheen, scale, veining and light.'
    },
    {
      path: ENTRYWAY_GUIDE_PATH,
      label: 'ENTRYWAY',
      title: 'Dark Entryways: Lighting, Mirrors & Contrast',
      copy: 'Make a narrow entrance feel deeper and sharper with vertical light, reflection and fewer objects.'
    },
  ];

  return (
    <AfterDarkFrame
      title="Dark Interior Design Guides | After Dark Dwellings"
      description="Practical editorial guides for dark living rooms, bedrooms, kitchens, lighting, materials and architectural interiors."
      path={GUIDES_PATH}
      section="guides"
    >
      <section className="after-dark-simple-hero">
        <span className="after-dark-kicker">EDITORIAL / GUIDES</span>
        <h1>DESIGN NOTES<br />AFTER DARK.</h1>
        <p>Practical, original guides built around darker palettes, architectural light, material depth and rooms that feel deliberate rather than themed.</p>
      </section>
      <section className="after-dark-section">
        <div className="after-dark-guide-grid">
          {guides.map((guide) => (
            <Link className="after-dark-guide-card" to={guide.path} key={guide.path}>
              <span>{guide.label}</span>
              <h2>{guide.title}</h2>
              <p>{guide.copy}</p>
              <em>READ GUIDE →</em>
            </Link>
          ))}
        </div>
      </section>
    </AfterDarkFrame>
  );
}

export function AfterDarkLightingGuidePage() {
  const steps: GuideStep[] = [
    ['01', 'Start With Ambient Light, Not a Bright Ceiling', 'A dark room needs enough overall illumination to remain usable, but one bright overhead source can erase depth. Use dimmable indirect light, concealed LEDs or low-output ceiling fixtures as the base layer.'],
    ['02', 'Add Task Light Where the Room Actually Works', 'Reading chairs, desks, counters and bedside areas need focused light. Keeping task light local lets the rest of the room stay atmospheric instead of forcing the entire space brighter.'],
    ['03', 'Use Accent Light to Reveal Material', 'Aim light across stone, plaster, wood grain, artwork or textured textiles. Grazing light creates shadow and makes surfaces feel dimensional, which is especially important when the palette is mostly black or charcoal.'],
    ['04', 'Keep Color Temperature Consistent', 'Mixing very cool and very warm bulbs can make a dark room feel accidental. A warm, consistent temperature usually keeps black, graphite and natural materials cohesive.'],
    ['05', 'Let Some Areas Stay Dark', 'A room does not need equal brightness everywhere. Controlled shadow is part of the composition. Light the surfaces and activities that matter, then allow quieter zones to recede.'],
  ];
  return <AfterDarkGuideArticle
    title="Layered Lighting for Dark Interiors"
    deck="Dark interiors depend on light more than bright rooms do. The goal is not maximum brightness — it is controlled visibility, depth and atmosphere."
    description="How to layer ambient, task and accent lighting in dark interiors without flattening the room."
    path={LIGHTING_GUIDE_PATH}
    label="GUIDE / LIGHTING"
    readTime="3 MIN READ"
    steps={steps}
    rule="If every surface is equally bright, a dark room loses the contrast that makes it interesting. Light for function first, material second and atmosphere third."
  />;
}

export function AfterDarkBedroomGuidePage() {
  const steps: GuideStep[] = [
    ['01', 'Use More Than One Dark Tone', 'Pure black on every surface can feel visually dense. Pair black with charcoal, graphite, deep brown-black or smoky gray so the room has separation without losing the darker mood.'],
    ['02', 'Soften the Room With Texture, Not Pastel Color', 'Linen, wool, velvet, brushed cotton and matte wood can make a dark bedroom feel comfortable without turning it beige or overly soft.'],
    ['03', 'Keep the Bed Visually Simple', 'Because the bed is usually the largest object in the room, too many pillows, patterns or competing details can make the space feel crowded. Let material and proportion do the work.'],
    ['04', 'Use Low Light at More Than One Height', 'Bedside lamps, wall sconces and a low floor lamp create a calmer rhythm than a single ceiling fixture. Keep the brightest light close to the tasks that need it.'],
    ['05', 'Protect Negative Space', 'Leave some wall area, nightstand surface and floor area unfilled. Dark rooms feel more expensive when strong objects have enough space around them to register.'],
  ];
  return <AfterDarkGuideArticle
    title="How to Make a Dark Bedroom Feel Calm, Not Heavy"
    deck="A dark bedroom should feel cocooning, not crowded. Tonal variation, tactile materials and disciplined lighting keep the room quiet without making it oppressive."
    description="Dark bedroom design ideas using tonal variation, texture, lighting, scale and negative space."
    path={BEDROOM_GUIDE_PATH}
    label="GUIDE / BEDROOM"
    readTime="3 MIN READ"
    steps={steps}
    rule="Dark bedrooms work when the visual weight is controlled. Deep color can stay; clutter, harsh light and unnecessary contrast are what usually make the room feel heavy."
  />;
}

export function AfterDarkKitchenGuidePage() {
  const steps: GuideStep[] = [
    ['01', 'Separate Black Surfaces by Finish', 'Matte cabinetry beside honed stone and brushed metal reads as layered even when the colors are similar. If every surface has the same sheen, the room can collapse into one flat block.'],
    ['02', 'Use Stone With Visible Movement', 'Veining, mineral variation or a subtle aggregate pattern gives the eye something to read. The stone does not need to be white; even dark stone can provide movement.'],
    ['03', 'Bring In Grain', 'Wood grain, reeded panels or another linear texture can soften large fields of black cabinetry while keeping the palette controlled.'],
    ['04', 'Light the Work Surfaces', 'Under-cabinet lighting and focused pendants should make counters readable without flooding the entire kitchen. Good task light also reveals the texture of the backsplash and stone.'],
    ['05', 'Use Metal as a Controlled Highlight', 'Brushed steel, blackened metal, aged nickel or restrained brass can create small points of reflection. Keep the finish consistent so the room does not become visually noisy.'],
  ];
  return <AfterDarkGuideArticle
    title="Black Kitchens Without the Flat Look"
    deck="A black kitchen needs material contrast more than color contrast. Finish, grain, stone movement and directional light keep the room dimensional."
    description="How to design a black kitchen with depth using stone, wood grain, metal, varied finishes and architectural lighting."
    path={KITCHEN_GUIDE_PATH}
    label="GUIDE / KITCHEN"
    readTime="3 MIN READ"
    steps={steps}
    rule="When color is restrained, finish becomes color. Matte, honed, brushed, polished and grained surfaces should be chosen as deliberately as paint."
  />;
}

export function AfterDarkAboutPage() {
  return (
    <AfterDarkFrame
      title="About | After Dark Dwellings"
      description="About After Dark Dwellings, an independent editorial project focused on dark interiors, materials, lighting and considered home finds."
      path={ABOUT_PATH}
      section="about"
    >
      <section className="after-dark-legal">
        <span className="after-dark-kicker">ABOUT THE PROJECT</span>
        <h1>After Dark Dwellings</h1>
        <p className="after-dark-article-deck">An independent editorial layer of GRVEZ VAULT focused on dark interiors, architectural lighting, material depth and home pieces worth bringing inside.</p>
        <h2>What gets published</h2>
        <p>Guides are written around practical design decisions: light, proportion, texture, material, contrast and space. Curated Finds is reserved for real products with verifiable merchant destinations. Placeholder products, invented prices and fabricated reviews are not used.</p>
        <h2>How recommendations are handled</h2>
        <p>Affiliate relationships may support the project in the future, but they do not replace editorial judgment. When a link is affiliate-linked, the relationship is disclosed. Pricing, availability and merchant terms can change after publication.</p>
        <h2>Contact</h2>
        <p>Questions, corrections and collaboration inquiries can be sent to <a href={'mailto:' + CONTACT_EMAIL}>{CONTACT_EMAIL}</a>.</p>
      </section>
    </AfterDarkFrame>
  );
}

export function AfterDarkDisclosurePage() {
  return (
    <AfterDarkFrame
      title="Affiliate Disclosure | After Dark Dwellings"
      description="Affiliate disclosure for product links and recommendations published by After Dark Dwellings."
      path={DISCLOSURE_PATH}
    >
      <section className="after-dark-legal">
        <span className="after-dark-kicker">LEGAL / TRANSPARENCY</span>
        <h1>Affiliate Disclosure</h1>
        <p className="after-dark-legal-updated">Last updated October 5, 2026</p>
        <p>After Dark Dwellings may participate in affiliate programs. When an affiliate link is used and a qualifying purchase is made, After Dark Dwellings may receive a commission at no additional cost to the purchaser.</p>
        <h2>Editorial independence</h2>
        <p>Affiliate eligibility does not guarantee placement. Curated products must correspond to a real product, merchant and destination URL. Fabricated prices, fake reviews, invented availability and fictional product listings are not used.</p>
        <h2>Pricing and availability</h2>
        <p>Third-party merchants control their own pricing, stock, shipping, returns and warranties. Information can change after a page is published, so the merchant page is the final source for current purchase terms.</p>
        <h2>Disclosure placement</h2>
        <p>Pages containing affiliate links will include a disclosure near the relevant recommendations or links so readers can understand the relationship before purchasing.</p>
        <h2>Contact</h2>
        <p>Questions about affiliate relationships can be sent to <a href={'mailto:' + CONTACT_EMAIL}>{CONTACT_EMAIL}</a>.</p>
      </section>
    </AfterDarkFrame>
  );
}


export function AfterDarkBathroomGuidePage() {
  const steps: GuideStep[] = [
    ['01', 'Let Stone Carry the Detail', 'Dark bathrooms look stronger when material variation does more of the visual work. Honed stone, veining, textured tile or a mineral finish can create depth without adding decorative clutter.'],
    ['02', 'Use Warm Light Around the Mirror', 'Face-level lighting matters more than a dramatic ceiling fixture. Warm sconces or integrated mirror lighting make the room usable while keeping the rest of the space subdued.'],
    ['03', 'Mix Matte and Reflective Surfaces', 'A matte wall beside glass, mirror, brushed metal and polished stone creates contrast even when everything stays in a narrow color range.'],
    ['04', 'Keep Hardware Consistent', 'Choose one metal direction and repeat it across faucets, shower hardware, pulls and accessories. Too many finishes can make a compact dark bathroom feel fragmented.'],
    ['05', 'Leave the Counter Mostly Clear', 'Dark rooms show clutter quickly because every object interrupts the composition. Limit visible products and let the strongest surfaces remain exposed.'],
  ];
  return <AfterDarkGuideArticle
    title="How to Make a Dark Bathroom Feel Expensive"
    deck="Dark bathrooms become convincing when stone, reflection, hardware and light are treated as one composition instead of separate decorating decisions."
    description="Dark bathroom design ideas using stone, mirror, metal, layered lighting and controlled contrast."
    path={BATHROOM_GUIDE_PATH}
    label="GUIDE / BATHROOM"
    readTime="3 MIN READ"
    steps={steps}
    rule="In a small dark bathroom, fewer materials used well will usually look more expensive than more materials competing for attention."
  />;
}

export function AfterDarkOfficeGuidePage() {
  const steps: GuideStep[] = [
    ['01', 'Separate the Work Surface From the Wall', 'A black desk against a black wall can disappear into one mass. Use a slight shift in tone, finish or material so the work surface remains readable.'],
    ['02', 'Prioritize Task Light Over Ambient Brightness', 'Keep a strong, focused light at the desk and let the rest of the room stay darker. That creates concentration without flattening the whole space.'],
    ['03', 'Use One Warm Material to Break the Field', 'Wood grain, leather, cork or another tactile warm material can prevent graphite and black from feeling sterile without turning the room soft or rustic.'],
    ['04', 'Keep Storage Visually Quiet', 'Closed cabinetry, dark shelving and fewer visible objects keep the room focused. Open storage should be edited rather than filled edge to edge.'],
    ['05', 'Protect One Empty Plane', 'Leave at least one wall, corner or surface intentionally sparse. Negative space gives the office a sense of width and stops darker colors from closing in.'],
  ];
  return <AfterDarkGuideArticle
    title="Dark Home Offices Without the Closed-In Feeling"
    deck="A dark office should support concentration, not make the room feel smaller. Contrast, local task lighting and disciplined storage keep the space focused and open."
    description="How to design a dark home office with focused lighting, tonal contrast, quiet storage and enough negative space."
    path={OFFICE_GUIDE_PATH}
    label="GUIDE / HOME OFFICE"
    readTime="3 MIN READ"
    steps={steps}
    rule="The office can be dark without being dim. Put brightness where the work happens and let the rest of the room stay calm."
  />;
}

export function AfterDarkSmallSpaceGuidePage() {
  const steps: GuideStep[] = [
    ['01', 'Use Tonal Variation Instead of Bright Contrast', 'Small dark rooms can handle deep color when nearby surfaces are slightly different rather than identical. Charcoal beside black gives separation without cutting the room into pieces.'],
    ['02', 'Choose Fewer Pieces With Cleaner Profiles', 'Too many small furnishings create more visual edges, which makes a compact room feel busier. Fewer, better-scaled pieces usually make the room feel larger.'],
    ['03', 'Use Reflection Strategically', 'A mirror, glass surface or subtle sheen can bounce existing light deeper into the room. Reflection works best when it is placed to extend a useful view rather than simply adding shine.'],
    ['04', 'Keep the Floor Line Visible', 'Furniture with some visual lift or clear floor around it helps the eye understand the full footprint of the room. Dark color feels less heavy when the boundaries remain readable.'],
    ['05', 'Light Vertical Surfaces', 'Wall sconces, picture lights or upward washes draw the eye vertically and make the room feel taller. Brightening every surface equally is less effective than placing light with intent.'],
  ];
  return <AfterDarkGuideArticle
    title="Small Dark Spaces That Still Feel Open"
    deck="Small rooms do not have to be pale. Scale, reflection, tonal variation and carefully placed light can keep a dark palette atmospheric without making the room feel cramped."
    description="Small dark room ideas using scale, reflection, tonal variation, negative space and architectural lighting."
    path={SMALL_SPACE_GUIDE_PATH}
    label="GUIDE / SMALL SPACES"
    readTime="3 MIN READ"
    steps={steps}
    rule="A compact room feels smaller because of visual congestion, not simply because the walls are dark. Reduce edges, clutter and competing contrast before you blame the color."
  />;
}


export function AfterDarkLivingRoomGuidePage() {
  const steps: GuideStep[] = [
    ['01', 'Start With One Dominant Dark Tone', 'Choose a main black, charcoal or graphite for the largest surfaces, then move one or two shades lighter or warmer for upholstery, rugs and secondary furniture so the room does not collapse into one value.'],
    ['02', 'Use One Large Anchor Instead of Many Small Pieces', 'A substantial sofa, coffee table or artwork gives the room weight. Too many small objects create visual noise and make a dark living room feel cheaper and more crowded.'],
    ['03', 'Let Lighting Reveal the Room in Layers', 'Combine a low floor lamp, table lamp, sconces or concealed lighting. Separate pools of light make the room feel deeper and more architectural than one bright overhead fixture.'],
    ['04', 'Mix Matte, Soft and Reflective Surfaces', 'Velvet, brushed textile, honed stone, glass and metal should react differently to light. That surface contrast is what gives a mostly dark palette dimension.'],
    ['05', 'Edit the Styling Hard', 'A dark room already has visual weight. Keep shelves, tables and corners selective so the strongest materials and shapes can register.'],
  ];
  return <AfterDarkGuideArticle
    title="How to Make a Dark Living Room Feel Expensive"
    deck="A dark living room feels elevated when scale, light and material are controlled. The goal is not more decor — it is stronger composition."
    description="Dark living room ideas using layered lighting, large-scale furniture, material contrast and edited styling."
    path={LIVING_ROOM_GUIDE_PATH}
    label="GUIDE / LIVING ROOM"
    readTime="3 MIN READ"
    steps={steps}
    rule="Expensive-looking dark rooms usually have fewer competing objects, better light and clearer material hierarchy."
  />;
}

export function AfterDarkBlackStoneGuidePage() {
  const steps: GuideStep[] = [
    ['01', 'Let the Stone Have Visible Movement', 'Veining, aggregate, mineral variation or a rough edge gives a black interior something natural to read. Perfectly uniform black beside perfectly uniform black can feel flat.'],
    ['02', 'Separate Materials by Sheen', 'Matte walls, honed stone, brushed metal and a small amount of polished reflection can all live in the same color family while still feeling distinct.'],
    ['03', 'Use Stone at Different Scales', 'A large slab creates architectural weight while a smaller stone object or side table can repeat the material without turning the room into a showroom.'],
    ['04', 'Warm the Composition With Light, Not Orange Decor', 'Warm white lighting can pull bronze, brown and mineral undertones from stone without introducing a separate warm color palette.'],
    ['05', 'Keep the Surrounding Objects Quiet', 'When stone is visually active, nearby furniture and accessories should be simpler. Let the material be the ornament.'],
  ];
  return <AfterDarkGuideArticle
    title="Black & Stone Interiors Without the Flat Look"
    deck="Black and natural stone work best when texture, sheen and light do the separating. The material itself should provide most of the visual movement."
    description="How to combine black interiors with marble, slate, travertine, concrete and stone without making the room feel flat."
    path={BLACK_STONE_GUIDE_PATH}
    label="GUIDE / MATERIAL"
    readTime="3 MIN READ"
    steps={steps}
    rule="When stone has character, do not compete with it. Use black as the field and let natural variation become the detail."
  />;
}

export function AfterDarkEntrywayGuidePage() {
  const steps: GuideStep[] = [
    ['01', 'Light the Vertical Surfaces', 'Wall sconces, concealed uplight or a narrow wash can make a dark entry feel taller and more intentional than a single ceiling fixture.'],
    ['02', 'Use One Mirror With Purpose', 'Place a mirror where it reflects light or extends a clean view. A mirror is most effective when it makes the entry feel deeper, not when it simply fills an empty wall.'],
    ['03', 'Choose One Strong Console or Bench', 'Keep the furniture count low. One well-scaled piece gives the entry a clear anchor and leaves enough open floor for the space to breathe.'],
    ['04', 'Use Stone or Metal for Visual Weight', 'A dark stone top, blackened metal detail or sculptural object can make the entry feel finished without adding a lot of color or decoration.'],
    ['05', 'Control What Is Visible From the Door', 'The first view should have one focal point and a clean line of sight. Hide everyday clutter whenever possible and let the architecture carry the impression.'],
  ];
  return <AfterDarkGuideArticle
    title="Dark Entryways: Lighting, Mirrors & Contrast"
    deck="A dark entryway works when the first sightline is controlled. Vertical light, one reflective surface and fewer stronger objects create a sharper first impression."
    description="Dark entryway ideas using architectural lighting, mirrors, stone, metal, contrast and negative space."
    path={ENTRYWAY_GUIDE_PATH}
    label="GUIDE / ENTRYWAY"
    readTime="3 MIN READ"
    steps={steps}
    rule="The entry does not need more objects. It needs one clear focal point, enough light to read the materials and a clean path into the rest of the home."
  />;
}
