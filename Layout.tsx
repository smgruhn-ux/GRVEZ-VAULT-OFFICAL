import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navigation, NavItem } from './navigation';
import { siteConfig } from './site-config';

interface LayoutProps {
  children: React.ReactNode;
}

const REVEAL_SELECTOR = [
  '.detail-card',
  '.release-card',
  '.archive-panel',
  '.info-panel',
  '.music-panel',
  '.content-grid > *',
  '.vaultline-grid > *',
  '.archive-grid > *',
  '.contact-grid > *',
  '.archive-stack > *'
].join(', ');

const PAGE_TITLES: Record<string, string> = {
  '/': 'GRVEZ VAULT | Music \u00b7 Archive \u00b7 Manuscripts \u00b7 Media',
  '/about': 'About | GRVEZ VAULT',
  '/about/gizzy-graves': 'Gizzy Graves | GRVEZ VAULT',
  '/about/dmonix': 'DMONIX | GRVEZ VAULT',
  '/music': 'Music | GRVEZ VAULT',
  '/archive': 'The Archive | GRVEZ VAULT',
  '/manuscripts': 'Manuscripts | GRVEZ VAULT',
  '/media': 'Visual Documentation | GRVEZ VAULT',
  '/relational-continuity': 'Relational Continuity Hypothesis | GRVEZ VAULT',
  '/films': 'Films & Media | GRVEZ VAULT',
  '/vaultline': 'Vaultline by Gizzy Graves | GRVEZ VAULT',
  '/contact': 'Contact | GRVEZ VAULT',
  '/faq': 'FAQ | GRVEZ VAULT',
  '/privacy-policy': 'Privacy Policy | GRVEZ VAULT',
  '/terms-of-use': 'Terms of Use | GRVEZ VAULT',
};

export function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setMenuOpen(false);
    setExpandedMobile(null);

    const title = PAGE_TITLES[pathname];
    if (title) document.title = title;
    else if (pathname.startsWith('/record/')) document.title = 'Archive Record | GRVEZ VAULT';
    else document.title = 'GRVEZ VAULT | Music \u00b7 Archive \u00b7 Manuscripts \u00b7 Media';

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const frame = requestAnimationFrame(() => {
      const nodes = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
      nodes.forEach((el) => el.classList.add('reveal-pending'));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-visible');
              entry.target.classList.remove('reveal-pending');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
      );

      nodes.forEach((el) => observer.observe(el));
      (window as any).__grvezRevealObserver = observer;
    });

    return () => {
      cancelAnimationFrame(frame);
      const observer = (window as any).__grvezRevealObserver as IntersectionObserver | undefined;
      observer?.disconnect();
    };
  }, [pathname]);

  const closeMenu = () => {
    setMenuOpen(false);
    setExpandedMobile(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setExpandedMobile((prev) => (prev === label ? null : label));
  };

  const renderNavItem = (item: NavItem) => {
    if (item.children && item.children.length > 0) {
      const isExpanded = expandedMobile === item.label;
      return (
        <div key={item.label} className={`nav-item${isExpanded ? ' mobile-expanded' : ''}`}>
          <NavLink
            to={item.path}
            className={({ isActive }) => `nav-link${isActive && pathname === item.path ? ' active' : ''}`}
            onClick={(e) => {
              if (window.innerWidth <= 760) {
                e.preventDefault();
                toggleMobileDropdown(item.label);
              } else {
                closeMenu();
              }
            }}
          >
            {item.label}
            <svg className="nav-chevron" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </NavLink>
          <div className="nav-dropdown">
            {item.children.map((child) => (
              <NavLink
                key={child.path}
                to={child.path}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                onClick={closeMenu}
              >
                {child.label}
              </NavLink>
            ))}
          </div>
        </div>
      );
    }
    return (
      <NavLink
        key={item.path}
        to={item.path}
        className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        onClick={closeMenu}
      >
        {item.label}
      </NavLink>
    );
  };

  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <Link to="/" className="brand-mark" aria-label="GRVEZ VAULT home" onClick={closeMenu}>
          <img src="/gv-wordmark.PNG" alt="GRVEZ VAULT wordmark" />
        </Link>
        <button
          type="button"
          className="mobile-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          Menu
        </button>
        <nav id="site-navigation" className={`site-nav${menuOpen ? ' mobile-open' : ''}`} aria-label="Primary navigation">
          {navigation.map(renderNavItem)}
        </nav>
      </header>

      <main id="main-content">{children}</main>

      <footer className="site-footer">
        <div className="footer-column">
          <h2>Explore</h2>
          <ul>
            <li><Link to="/music">Music</Link></li>
            <li><Link to="/archive">Archive</Link></li>
            <li><Link to="/manuscripts">Manuscripts</Link></li>
            <li><Link to="/relational-continuity">Relational Continuity</Link></li>
            <li><Link to="/films">Films & Media</Link></li>
            <li><Link to="/vaultline">Vaultline</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>About</h2>
          <ul>
            <li><Link to="/about">About GRVEZ VAULT</Link></li>
            <li><Link to="/about/gizzy-graves">Gizzy Graves</Link></li>
            <li><Link to="/about/dmonix">DMONIX</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Legal</h2>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-use">Terms of Use</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Connect</h2>
          <ul>
            <li><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></li>
            <li><a href={`mailto:${siteConfig.vaultlineEmail}`}>{siteConfig.vaultlineEmail}</a></li>
            <li><a href="https://open.spotify.com/artist/39roC9iB8zx6jl5UWuK0Q0" target="_blank" rel="noreferrer">Spotify</a></li>
            <li><a href="https://www.youtube.com/@gizzygraves" target="_blank" rel="noreferrer">YouTube</a></li>
            <li><a href="https://soundcloud.com/sheldyn-gruhn" target="_blank" rel="noreferrer">SoundCloud</a></li>
            <li><a href="https://www.instagram.com/grvezvault/" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
          <p className="footer-note">&copy; 2026 GRVEZ VAULT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
