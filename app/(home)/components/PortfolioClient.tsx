"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

interface Project {
  index: string;
  title: string;
  type: string;
  time: string;
  tech: string;
  desc: string;
  color: string;
  accent: string;
  pattern: string;
}

const PROJECTS: Project[] = [
  {
    index: "PROJECT_01",
    title: "Kinetic\nBrand System",
    type: "Brand Identity / Motion",
    time: "8 weeks / 2024",
    tech: "After Effects, React, GSAP, SVG",
    desc: "A living identity system where every asset breathes. Procedural animation rules define motion across touchpoints—from micro-interactions to full-scale campaigns.",
    color: "#1a1208",
    accent: "#c4a060",
    pattern:
      "radial-gradient(ellipse at 20% 50%, #c4a06022 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, #3d2a0844 0%, transparent 50%)",
  },
  {
    index: "PROJECT_02",
    title: "Spatial\nCommerce",
    type: "E-Commerce / 3D UX",
    time: "12 weeks / 2024",
    tech: "Three.js, React Three Fiber, Shopify",
    desc: "A luxury retail experience where products exist in three dimensions. Customers orbit, inspect, and configure items before purchase—reducing returns by 34%.",
    color: "#080d14",
    accent: "#4a8fd4",
    pattern:
      "radial-gradient(ellipse at 70% 30%, #4a8fd422 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, #0d2a4455 0%, transparent 50%)",
  },
  {
    index: "PROJECT_03",
    title: "Neural\nDashboard",
    type: "Data Visualization / SaaS",
    time: "6 weeks / 2023",
    tech: "D3.js, React, WebGL, Framer Motion",
    desc: "Real-time ML pipeline monitoring with ambient data density. Thousands of nodes rendered at 60fps. The interface disappears; only insight remains.",
    color: "#050d0a",
    accent: "#3dd68c",
    pattern:
      "radial-gradient(ellipse at 30% 60%, #3dd68c18 0%, transparent 55%), radial-gradient(ellipse at 75% 20%, #0d3d2244 0%, transparent 50%)",
  },
  {
    index: "PROJECT_04",
    title: "Archive\nMachine",
    type: "Editorial / Interactive",
    time: "4 weeks / 2023",
    tech: "Next.js, GSAP ScrollTrigger, Prismic",
    desc: "A 50-year photographic archive rebuilt as a spatial journey. Scroll velocity controls time. The interface becomes a time machine.",
    color: "#100808",
    accent: "#d46a4a",
    pattern:
      "radial-gradient(ellipse at 60% 40%, #d46a4a1a 0%, transparent 55%), radial-gradient(ellipse at 20% 70%, #3d150844 0%, transparent 50%)",
  },
];

const MARQUEE_ITEMS = [
  "Motion Design",
  "Creative Development",
  "Design Systems",
  "GSAP / Framer Motion",
  "WebGL / Three.js",
  "React / Next.js",
];

export default function PortfolioClient() {
  // DOM refs
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotGridRef = useRef<HTMLDivElement>(null);
  const coordsRef = useRef<HTMLDivElement>(null);
  const clockRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const caseStudyRef = useRef<HTMLDivElement>(null);
  const caseBgRef = useRef<HTMLDivElement>(null);

  // Hero reveal state
  const [heroMetaRevealed, setHeroMetaRevealed] = useState(false);
  const [hl1Revealed, setHl1Revealed] = useState(false);
  const [hl2Revealed, setHl2Revealed] = useState(false);
  const [hl3Revealed, setHl3Revealed] = useState(false);
  const [heroSubRevealed, setHeroSubRevealed] = useState(false);

  // Case study state
  const [activeCaseIdx, setActiveCaseIdx] = useState<number | null>(null);
  const [caseOpen, setCaseOpen] = useState(false);
  const caseIndexTextRef = useRef<HTMLDivElement>(null);
  const caseTitleRef = useRef<HTMLHeadingElement>(null);
  const caseTypeRef = useRef<HTMLDivElement>(null);
  const caseTimeRef = useRef<HTMLDivElement>(null);
  const caseTechRef = useRef<HTMLDivElement>(null);
  const caseDescRef = useRef<HTMLDivElement>(null);
  const caseImgRef = useRef<HTMLDivElement>(null);

  // Mouse / cursor refs (avoid re-renders)
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  const cursorXRef = useRef(0);
  const cursorYRef = useRef(0);
  const magnetTargetRef = useRef<HTMLElement | null>(null);

  // Drag refs
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartYRef = useRef(0);
  const txRef = useRef(0);
  const tyRef = useRef(0);
  const vxRef = useRef(0);
  const vyRef = useRef(0);
  const lastXRef = useRef(0);
  const lastYRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);

  // ── CLOCK ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const updateClock = () => {
      if (!clockRef.current) return;
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      clockRef.current.textContent = `${h}:${m}:${s}`;
    };
    const interval = setInterval(updateClock, 1000);
    updateClock();
    return () => clearInterval(interval);
  }, []);

  // ── CURSOR RAF LOOP ────────────────────────────────────────────────────
  useEffect(() => {
    let raf: number;
    const animate = () => {
      const cursor = cursorRef.current;
      if (cursor) {
        const magnetTarget = magnetTargetRef.current;
        if (magnetTarget) {
          const rect = magnetTarget.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = mouseXRef.current - cx;
          const dy = mouseYRef.current - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            cursorXRef.current += (cx + dx * 0.3 - cursorXRef.current) * 0.18;
            cursorYRef.current += (cy + dy * 0.3 - cursorYRef.current) * 0.18;
          } else {
            magnetTargetRef.current = null;
            cursor.classList.remove("magnetic");
            cursorXRef.current +=
              (mouseXRef.current - cursorXRef.current) * 0.15;
            cursorYRef.current +=
              (mouseYRef.current - cursorYRef.current) * 0.15;
          }
        } else {
          cursorXRef.current +=
            (mouseXRef.current - cursorXRef.current) * 0.15;
          cursorYRef.current +=
            (mouseYRef.current - cursorYRef.current) * 0.15;
        }
        cursor.style.left = cursorXRef.current + "px";
        cursor.style.top = cursorYRef.current + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  // ── MOUSE MOVE / UP HANDLERS ───────────────────────────────────────────
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX;
      mouseYRef.current = e.clientY;

      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = Math.round(e.clientX - cx);
      const dy = Math.round(e.clientY - cy);

      if (coordsRef.current) {
        coordsRef.current.textContent = `dx: ${dx > 0 ? "+" : ""}${dx} / dy: ${dy > 0 ? "+" : ""}${dy}`;
      }
      if (dotGridRef.current) {
        dotGridRef.current.style.transform = `translate(${-dx * 0.03}px, ${-dy * 0.03}px)`;
      }

      if (isDraggingRef.current && headlineRef.current) {
        const now = performance.now();
        const dt = now - lastTimeRef.current;
        if (dt > 0) {
          vxRef.current = ((e.clientX - lastXRef.current) / dt) * 16;
          vyRef.current = ((e.clientY - lastYRef.current) / dt) * 16;
        }
        lastXRef.current = e.clientX;
        lastYRef.current = e.clientY;
        lastTimeRef.current = now;
        txRef.current = e.clientX - dragStartXRef.current;
        tyRef.current = e.clientY - dragStartYRef.current;
        headlineRef.current.style.transform = `translate(${txRef.current}px, ${tyRef.current}px)`;
      }
    };

    const onMouseUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      cursorRef.current?.classList.remove("expanded");
      startInertia();
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;
      const t = e.touches[0];
      const now = performance.now();
      const dt = now - lastTimeRef.current;
      if (dt > 0) {
        vxRef.current = ((t.clientX - lastXRef.current) / dt) * 16;
        vyRef.current = ((t.clientY - lastYRef.current) / dt) * 16;
      }
      lastXRef.current = t.clientX;
      lastYRef.current = t.clientY;
      lastTimeRef.current = now;
      txRef.current = t.clientX - dragStartXRef.current;
      tyRef.current = t.clientY - dragStartYRef.current;
      if (headlineRef.current) {
        headlineRef.current.style.transform = `translate(${txRef.current}px, ${tyRef.current}px)`;
      }
      e.preventDefault();
    };

    const onTouchEnd = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      startInertia();
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchmove", onTouchMove, { passive: false });
    document.addEventListener("touchend", onTouchEnd);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  // ── INERTIA PHYSICS ────────────────────────────────────────────────────
  const startInertia = () => {
    const stiffness = 0.08;
    const damping = 0.72;
    const step = () => {
      if (isDraggingRef.current) return;
      txRef.current += vxRef.current;
      tyRef.current += vyRef.current;
      vxRef.current = (vxRef.current + -txRef.current * stiffness) * damping;
      vyRef.current = (vyRef.current + -tyRef.current * stiffness) * damping;
      if (headlineRef.current) {
        headlineRef.current.style.transform = `translate(${txRef.current}px, ${tyRef.current}px)`;
      }
      if (
        Math.abs(txRef.current) < 0.5 &&
        Math.abs(tyRef.current) < 0.5 &&
        Math.abs(vxRef.current) < 0.3 &&
        Math.abs(vyRef.current) < 0.3
      ) {
        txRef.current = 0;
        tyRef.current = 0;
        if (headlineRef.current) headlineRef.current.style.transform = "";
        return;
      }
      animFrameRef.current = requestAnimationFrame(step);
    };
    animFrameRef.current = requestAnimationFrame(step);
  };

  // ── HERO REVEAL ────────────────────────────────────────────────────────
  useEffect(() => {
    const timers = [
      setTimeout(() => setHeroMetaRevealed(true), 200),
      setTimeout(() => setHl1Revealed(true), 350),
      setTimeout(() => setHl2Revealed(true), 480),
      setTimeout(() => setHl3Revealed(true), 610),
      setTimeout(() => setHeroSubRevealed(true), 760),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // ── CASE STUDY ─────────────────────────────────────────────────────────
  const openCase = useCallback((idx: number, cardEl: HTMLElement) => {
    const p = PROJECTS[idx];
    const rect = cardEl.getBoundingClientRect();
    const ox =
      (((rect.left + rect.width / 2) / window.innerWidth) * 100).toFixed(1) +
      "%";
    const oy =
      (((rect.top + rect.height / 2) / window.innerHeight) * 100).toFixed(1) +
      "%";

    const caseBg = caseBgRef.current;
    const caseStudy = caseStudyRef.current;
    if (!caseBg || !caseStudy) return;

    caseBg.style.background = p.color;
    caseBg.style.backgroundImage = p.pattern;
    caseBg.style.transformOrigin = `${ox} ${oy}`;
    caseBg.style.transition = "none";
    caseBg.style.transform = "scale(0.1)";
    caseBg.style.opacity = "0";

    if (caseIndexTextRef.current)
      caseIndexTextRef.current.textContent = `[${p.index}]`;
    if (caseTitleRef.current)
      caseTitleRef.current.textContent = p.title.replace("\n", " ");
    if (caseTypeRef.current) caseTypeRef.current.textContent = p.type;
    if (caseTimeRef.current) caseTimeRef.current.textContent = p.time;
    if (caseTechRef.current) caseTechRef.current.textContent = p.tech;
    if (caseDescRef.current) caseDescRef.current.textContent = p.desc;
    if (caseImgRef.current) {
      caseImgRef.current.style.background = p.color;
      caseImgRef.current.style.backgroundImage = p.pattern;
      caseImgRef.current.style.backgroundSize = "cover";
    }

    setActiveCaseIdx(idx);
    caseStudy.style.display = "flex";
    caseStudy.style.background = p.color + "ee";

    requestAnimationFrame(() => {
      caseBg.style.transition = `transform 0.8s ${EASING}, opacity 0.5s ${EASING}`;
      caseBg.style.transform = "scale(1)";
      caseBg.style.opacity = "1";
      setTimeout(() => setCaseOpen(true), 20);
    });

    document.body.style.overflow = "hidden";
  }, []);

  const closeCase = useCallback(() => {
    setCaseOpen(false);
    const caseBg = caseBgRef.current;
    const caseStudy = caseStudyRef.current;
    if (!caseBg || !caseStudy) return;
    caseBg.style.transition = `transform 0.6s ${EASING}, opacity 0.4s ${EASING}`;
    caseBg.style.transform = "scale(0.08)";
    caseBg.style.opacity = "0";
    setTimeout(() => {
      caseStudy.style.display = "none";
      setActiveCaseIdx(null);
      document.body.style.overflow = "";
    }, 600);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeCaseIdx !== null) closeCase();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeCaseIdx, closeCase]);

  // ── MAGNETIC HELPERS ───────────────────────────────────────────────────
  const handleMagEnter = (e: React.MouseEvent) => {
    magnetTargetRef.current = e.currentTarget as HTMLElement;
    cursorRef.current?.classList.add("magnetic");
  };
  const handleMagLeave = () => {
    magnetTargetRef.current = null;
    cursorRef.current?.classList.remove("magnetic");
  };

  // ── HEADLINE DRAG ──────────────────────────────────────────────────────
  const handleHeadlineMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX - txRef.current;
    dragStartYRef.current = e.clientY - tyRef.current;
    lastXRef.current = e.clientX;
    lastYRef.current = e.clientY;
    lastTimeRef.current = performance.now();
    vxRef.current = 0;
    vyRef.current = 0;
    if (headlineRef.current) headlineRef.current.style.transition = "none";
    cursorRef.current?.classList.add("expanded");
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    e.preventDefault();
  };

  const handleHeadlineTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    isDraggingRef.current = true;
    dragStartXRef.current = t.clientX - txRef.current;
    dragStartYRef.current = t.clientY - tyRef.current;
    lastXRef.current = t.clientX;
    lastYRef.current = t.clientY;
    lastTimeRef.current = performance.now();
    vxRef.current = 0;
    vyRef.current = 0;
    if (headlineRef.current) headlineRef.current.style.transition = "none";
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
  };

  return (
    <>
      {/* Custom cursor */}
      <div ref={cursorRef} id="cursor" />

      {/* Dot grid background */}
      <div ref={dotGridRef} id="dot-grid" />

      {/* Coordinate tracker */}
      <div ref={coordsRef} id="coords">
        dx: 0 / dy: 0
      </div>

      {/* Status bar */}
      <div id="status-bar">
        <span>
          <span className="status-dot" />
          [STATUS: AVAILABLE]
        </span>
        <span>[EST_TIME: 2025–]</span>
      </div>

      {/* Header */}
      <header>
        <div className="header-left">[FOLIO_V3] — DESIGN ENGINEER</div>
        <nav className="header-nav">
          <a href="#" onMouseEnter={handleMagEnter} onMouseLeave={handleMagLeave}>
            Work
          </a>
          <a href="#about" onMouseEnter={handleMagEnter} onMouseLeave={handleMagLeave}>
            About
          </a>
          <a href="#" onMouseEnter={handleMagEnter} onMouseLeave={handleMagLeave}>
            Contact
          </a>
        </nav>
        <div ref={clockRef} className="live-clock">
          00:00:00
        </div>
      </header>

      <div id="app">
        {/* Hero */}
        <section id="hero">
          <div className={`hero-meta${heroMetaRevealed ? " revealed" : ""}`}>
            [CREATIVE TECHNOLOGIST] — [BASED IN DHAKA] — [AVAILABLE FOR
            PROJECTS]
          </div>

          <div id="headline-wrap">
            <div
              ref={headlineRef}
              id="draggable-headline"
              onMouseDown={handleHeadlineMouseDown}
              onMouseEnter={() => {
                if (!isDraggingRef.current)
                  cursorRef.current?.classList.add("expanded");
              }}
              onMouseLeave={() => {
                if (!isDraggingRef.current)
                  cursorRef.current?.classList.remove("expanded");
              }}
              onTouchStart={handleHeadlineTouchStart}
            >
              <span className={`headline-line hl-solid${hl1Revealed ? " revealed" : ""}`}>
                DESIGN
              </span>
              <span className={`headline-line${hl2Revealed ? " revealed" : ""}`}>
                <span className="hl-outline">ENGI</span>
                <span className="hl-solid">NEER</span>
              </span>
              <span
                className={`headline-line hl-solid${hl3Revealed ? " revealed" : ""}`}
                style={{ color: "var(--accent2)" }}
              >
                PORTFOLIO
              </span>
              <div className="drag-hint">↔ DRAG &amp; TOSS</div>
            </div>
          </div>

          <div className={`hero-sub${heroSubRevealed ? " revealed" : ""}`}>
            <p className="hero-desc">
              Crafting high-performance digital experiences at the intersection
              of design systems, motion engineering, and creative code. Every
              pixel, intentional.
            </p>
            <a
              href="#projects"
              className="hero-cta"
              onMouseEnter={handleMagEnter}
              onMouseLeave={handleMagLeave}
            >
              View Projects ↓
            </a>
          </div>
        </section>

        {/* Marquee */}
        <div id="marquee-wrap">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="marquee-item">
                {item} <span className="marquee-sep">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Section divider */}
        <div className="section-divider">
          <span className="divider-label">[SELECTED WORK_2023–25]</span>
          <div className="divider-line" />
          <span className="divider-label">0{PROJECTS.length} PROJECTS</span>
        </div>

        {/* Projects */}
        <section id="projects">
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <ProjectCard
                key={p.index}
                project={p}
                index={i}
                onOpen={openCase}
                onCursorEnter={() =>
                  cursorRef.current?.classList.add("magnetic")
                }
                onCursorLeave={() =>
                  cursorRef.current?.classList.remove("magnetic")
                }
              />
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about">
          <div className="about-label">[ABOUT_ME]</div>
          <div>
            <p className="about-text">
              I&apos;m a <span>design engineer</span> who lives in the tension
              between aesthetics and engineering. I obsess over the 16ms frame,
              the 0.3s transition, the exact bezier curve that makes an
              interface feel <span>inevitable</span>.
            </p>
            <div className="skills-row">
              {[
                "React / Next.js",
                "GSAP",
                "Framer Motion",
                "Three.js / WebGL",
                "Design Systems",
                "TypeScript",
                "Creative Direction",
              ].map((skill) => (
                <span key={skill} className="skill-item">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Case study overlay */}
      <div
        ref={caseStudyRef}
        id="case-study"
        className={caseOpen ? "open" : ""}
        style={{ display: "none" }}
      >
        <div ref={caseBgRef} className="case-bg" />
        <div className="case-header">
          <button className="case-back" onClick={closeCase}>
            ← CLOSE PROJECT
          </button>
          <div
            ref={caseIndexTextRef}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "10px",
              color: "var(--accent2)",
              letterSpacing: "0.15em",
              marginBottom: "16px",
            }}
          />
          <h2 ref={caseTitleRef} className="case-title" />
        </div>
        <div className="case-body">
          <div ref={caseImgRef} className="case-img" />
          <div className="case-info">
            <div>
              <div className="case-label">[PROJECT_TYPE]</div>
              <div ref={caseTypeRef} className="case-value" />
            </div>
            <div>
              <div className="case-label">[EST_TIME]</div>
              <div ref={caseTimeRef} className="case-value" />
            </div>
            <div>
              <div className="case-label">[TECHNOLOGIES]</div>
              <div ref={caseTechRef} className="case-value" />
            </div>
            <div>
              <div className="case-label">[DESCRIPTION]</div>
              <div ref={caseDescRef} className="case-value" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ── PROJECT CARD ───────────────────────────────────────────────────────────
interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (idx: number, el: HTMLElement) => void;
  onCursorEnter: () => void;
  onCursorLeave: () => void;
}

function ProjectCard({
  project: p,
  index,
  onOpen,
  onCursorEnter,
  onCursorLeave,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (cardRef.current) onOpen(index, cardRef.current);
  };

  return (
    <div
      ref={cardRef}
      className="project-card"
      onClick={handleClick}
      onMouseEnter={onCursorEnter}
      onMouseLeave={onCursorLeave}
    >
      <div
        className="card-bg"
        style={{ background: p.color, backgroundImage: p.pattern }}
      >
        <div
          style={{
            position: "absolute",
            width: "60%",
            height: "60%",
            borderRadius: "50%",
            background: `${p.accent}11`,
            border: `1px solid ${p.accent}33`,
            top: "10%",
            right: "-10%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "30%",
            aspectRatio: "1",
            borderRadius: "50%",
            border: `1px solid ${p.accent}22`,
            top: "50%",
            left: "10%",
            pointerEvents: "none",
          }}
        />
      </div>
      <div className="card-content">
        <div className="card-index">[{p.index}]</div>
        <div
          className="card-title"
          dangerouslySetInnerHTML={{ __html: p.title.replace("\n", "<br>") }}
        />
        <div className="card-tags">
          {p.type.split("/").map((t) => (
            <span key={t} className="card-tag">
              {t.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
