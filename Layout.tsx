import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navigation } from '../navigation';
import { siteConfig } from '../site-config';

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

export function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
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

  const closeMenu = () => setMenuOpen(false);

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
          {navigation.map((item) => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={closeMenu}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main id="main-content">{children}</main>

      <footer className="site-footer">
        <div className="footer-column">
          <h2>Explore</h2>
          <ul>
            <li><Link to="/music">Listen</Link></li>
            <li><Link to="/archive">Archive</Link></li>
            <li><Link to="/vaultline">Vaultline</Link></li>
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
          <h2>Contact</h2>
          <ul>
            <li><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></li>
            <li><a href={`https://${siteConfig.siteUrl}`}>{siteConfig.siteUrl}</a></li>
            <li><a href={`mailto:${siteConfig.vaultlineEmail}`}>{siteConfig.vaultlineEmail}</a></li>
            <li><a href={`https://${siteConfig.vaultlineUrl}`}>{siteConfig.vaultlineUrl}</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Social</h2>
          <ul>
            <li><a href="https://open.spotify.com/artist/39roC9iB8zx6jl5UWuK0Q0" target="_blank" rel="noreferrer">Spotify</a></li>
            <li><a href="https://www.youtube.com/@gizzygraves" target="_blank" rel="noreferrer">YouTube</a></li>
            <li><a href="https://soundcloud.com/sheldyn-gruhn" target="_blank" rel="noreferrer">SoundCloud</a></li>
            <li><a href="https://www.instagram.com/grvezvault/" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
          <p className="footer-note">© 2026 GRVEZ VAULT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
