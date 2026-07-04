import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface HeroHotspot {
  label: string;
  to: string;
  style?: React.CSSProperties;
}

interface HeroArtworkProps {
  image: string;
  alt: string;
  hotspots?: HeroHotspot[];
  loading?: 'eager' | 'lazy';
}

export function HeroArtwork({ image, alt, hotspots = [], loading = 'lazy' }: HeroArtworkProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const backdrop = backdropRef.current;
    if (!frame || !backdrop) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = frame.getBoundingClientRect();
        const viewport = window.innerHeight || 1;
        const progress = Math.min(Math.max((viewport - rect.top) / (viewport + rect.height), 0), 1);
        const shift = (progress - 0.5) * 46;
        backdrop.style.transform = `scale(1.16) translateY(${shift}px)`;
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const fineCursor = window.matchMedia('(pointer: fine)').matches;
    let onMove: ((event: PointerEvent) => void) | undefined;
    let onLeave: (() => void) | undefined;
    if (fineCursor) {
      onMove = (event: PointerEvent) => {
        const rect = frame.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        frame.style.transform = `perspective(1400px) rotateY(${x * 2.6}deg) rotateX(${y * -2.6}deg)`;
      };
      onLeave = () => {
        frame.style.transform = '';
      };
      frame.addEventListener('pointermove', onMove);
      frame.addEventListener('pointerleave', onLeave);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (onMove) frame.removeEventListener('pointermove', onMove);
      if (onLeave) frame.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div className="hero-frame" ref={frameRef}>
      <div className="hero-backdrop-wrap" aria-hidden="true">
        <img src={image} alt="" className="hero-backdrop" ref={backdropRef} loading={loading} decoding="async" />
      </div>
      <img
        src={image}
        alt={alt}
        className="hero-image"
        loading={loading}
        decoding="async"
        sizes="(max-width: 768px) 100vw, 1200px"
      />
      <div className="hero-grain" aria-hidden="true" />
      <svg className="hero-fracture" aria-hidden="true" viewBox="0 0 200 400" preserveAspectRatio="none">
        <path d="M172 0 L118 88 L148 132 L92 214 L114 256 L64 336 L84 400" />
      </svg>
      {hotspots.length > 0 ? (
        <div className="hero-hotspots" aria-label="Hero route hotspots">
          {hotspots.map((hotspot) => (
            <Link key={hotspot.label} to={hotspot.to} className="hero-hotspot" style={hotspot.style}>
              {hotspot.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
