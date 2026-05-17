// ---- marks.jsx ----
// marks.jsx — themes + logo marks for the 4 brand directions

// ---------- THEMES ----------
const themes = {
  index: {
    id: 'index',
    n: '01',
    name: 'Index',
    tagline: 'Editorial · Swiss-modern',
    desc: 'Premium media-buy poise. Vogue-grade typographic confidence applied to a serious ad-tech tool.',
    fonts: {
      display: "'Cabin', system-ui, sans-serif",
      text: "'Newsreader', Georgia, serif",
      mono: "'Geist Mono', 'JetBrains Mono', monospace",
    },
    c: {
      ink: '#0E121C',
      paper: '#F1ECE0',
      paperWarm: '#E7E0CE',
      hairline: '#C9C0AB',
      primary: '#1B3A8B',     // ultramarine
      slate: '#3D4659',
      muted: '#7D7766',
    },
  },
  stack: {
    id: 'stack',
    n: '02',
    name: 'Stack',
    tagline: 'Geometric · Platform',
    desc: 'All LLMs, one buy. Confident geometric system with a stacked mark — built for the dashboard.',
    fonts: {
      display: "'Geist', system-ui, sans-serif",
      text: "'Geist', system-ui, sans-serif",
      mono: "'Geist Mono', monospace",
    },
    c: {
      ink: '#0B1220',
      paper: '#FFFFFF',
      paperWarm: '#F1F5F9',
      hairline: '#CBD5E1',
      primary: '#2451E8',     // cobalt
      primarySoft: '#DBE7FF',
      slate: '#475569',
      muted: '#94A3B8',
    },
  },
  terminal: {
    id: 'terminal',
    n: '03',
    name: 'Terminal',
    tagline: 'Mono · Editorial — prompt-native',
    desc: 'Mono terminal bones with editorial serif moments. Built by people who actually run prompts, in a brand smart enough to put on a tie.',
    fonts: {
      display: "'Cabin', system-ui, sans-serif",  // editorial italic for display moments
      text: "'JetBrains Mono', monospace",
      sans: "'Geist', system-ui, sans-serif",
      mono: "'JetBrains Mono', monospace",
    },
    c: {
      ink: '#0A0F1A',
      paper: '#DCE3EE',
      paperWarm: '#C9D1DF',
      hairline: '#7C8AA3',
      primary: '#1B3A8B',     // ultramarine
      primaryDeep: '#334155',  // slate
      slate: '#1E293B',
      muted: '#475569',
    },
  },
  bid: {
    id: 'bid',
    n: '04',
    name: 'Bid',
    tagline: 'Bold · Performance',
    desc: 'A media-buying brand that looks like an ad campaign. One warm accent breaks the all-cool palette.',
    fonts: {
      display: "'Space Grotesk', system-ui, sans-serif",
      text: "'Space Grotesk', system-ui, sans-serif",
      italic: "'Newsreader', Georgia, serif",
      mono: "'Geist Mono', monospace",
    },
    c: {
      ink: '#161427',
      paper: '#F4F0E6',
      paperWarm: '#E8E3D2',
      hairline: '#C9C2AE',
      primary: '#2E2A6E',     // deep indigo
      accent: '#C8A02E',      // dijon — single warm note
      slate: '#4A5568',
      muted: '#7B7461',
    },
  },
};

// ---------- MARKS (square, viewBox 100x100) ----------

// 01 INDEX — italic serif "p" with a serif tail + an em-dot. Pure type-as-mark.
const MarkIndex = ({ size = 100, fg, bg }) => {
  const theme = themes.index;
  fg = fg || theme.c.ink;
  bg = bg || theme.c.paper;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
      <rect width="100" height="100" fill={bg} />
      <text
        x="50"
        y="78"
        textAnchor="middle"
        fontFamily="'Cabin', system-ui, sans-serif"
        fontStyle="italic"
        fontWeight="500"
        fontSize="92"
        fill={fg}
        style={{ fontFeatureSettings: '"liga" 1, "dlig" 1' }}
      >p</text>
      <circle cx="78" cy="74" r="3.2" fill={theme.c.primary} />
    </svg>
  );
};

// 02 STACK — 4 horizontal bars at decreasing widths (LLM results stacked, top one sponsored).
const MarkStack = ({ size = 100, fg, bg, accent }) => {
  const theme = themes.stack;
  fg = fg || theme.c.ink;
  bg = bg || theme.c.paper;
  accent = accent || theme.c.primary;
  // Bars: top is the sponsored slot (cobalt), rest are ink at varying widths.
  const bars = [
    { y: 22, w: 64, c: accent },
    { y: 40, w: 56, c: fg },
    { y: 58, w: 44, c: fg },
    { y: 76, w: 36, c: fg },
  ];
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
      <rect width="100" height="100" fill={bg} />
      {bars.map((b, i) => (
        <rect key={i} x="18" y={b.y} width={b.w} height="10" rx="2" fill={b.c} />
      ))}
    </svg>
  );
};

// 03 TERMINAL — bracketed cursor [▮]: the "placement slot" mark (locked).
const MarkTerminal = ({ size = 100, fg, bg, accent }) => {
  const theme = themes.terminal;
  fg = fg || theme.c.ink;
  bg = bg || theme.c.paper;
  accent = accent || theme.c.primary;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
      <rect width="100" height="100" fill={bg} />
      {/* left bracket */}
      <path d="M 28 24 L 18 24 L 18 76 L 28 76" stroke={fg} strokeWidth="7" fill="none" strokeLinejoin="miter" strokeLinecap="square" />
      {/* right bracket */}
      <path d="M 72 24 L 82 24 L 82 76 L 72 76" stroke={fg} strokeWidth="7" fill="none" strokeLinejoin="miter" strokeLinecap="square" />
      {/* center cursor */}
      <rect x="40" y="38" width="20" height="24" fill={accent} />
    </svg>
  );
};

// (Legacy prompt+cursor mark — kept for reference, no longer the canonical Terminal mark.)
const MarkTerminalLegacy = ({ size = 100, fg, bg, accent }) => {
  const theme = themes.terminal;
  fg = fg || theme.c.ink;
  bg = bg || theme.c.paper;
  accent = accent || theme.c.primary;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
      <rect width="100" height="100" fill={bg} />
      <path d="M 22 32 L 44 50 L 22 68" stroke={fg} strokeWidth="9" fill="none" strokeLinecap="square" strokeLinejoin="miter" />
      {/* cursor block */}
      <rect x="54" y="38" width="26" height="26" fill={accent} />
    </svg>
  );
};

// 04 BID — concentric target with a single offset dot (the winning bid).
const MarkBid = ({ size = 100, fg, bg, accent }) => {
  const theme = themes.bid;
  fg = fg || theme.c.ink;
  bg = bg || theme.c.paper;
  accent = accent || theme.c.accent;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
      <rect width="100" height="100" fill={bg} />
      <circle cx="50" cy="50" r="34" fill="none" stroke={fg} strokeWidth="4" />
      <circle cx="50" cy="50" r="20" fill="none" stroke={fg} strokeWidth="4" />
      <circle cx="50" cy="50" r="7" fill={fg} />
      {/* hit dot */}
      <circle cx="76" cy="34" r="6" fill={accent} />
    </svg>
  );
};

// ---------- LOCKUPS ----------
// Each Lockup component renders at whatever size its container gives.
// They use fontSize relative to the container height so they scale.

const LockupIndex = ({ height = 100, fg, accent, mono = false }) => {
  const t = themes.index;
  fg = fg || t.c.ink;
  accent = accent || (mono ? fg : t.c.primary);
  const fs = height * 0.78;
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'baseline', gap: 0,
      fontFamily: t.fonts.display, color: fg, lineHeight: 1,
      letterSpacing: '-0.01em',
    }}>
      <span style={{ fontSize: fs, fontStyle: 'italic', fontWeight: 400 }}>promptbl</span>
      <span style={{
        fontFamily: t.fonts.mono, fontSize: fs * 0.22, fontWeight: 500,
        color: accent, marginLeft: fs * 0.06, transform: 'translateY(-' + (fs * 0.14) + 'px)',
        display: 'inline-block', letterSpacing: '0.04em',
      }}>·ai</span>
    </div>
  );
};

const LockupStack = ({ height = 100, fg, accent, mono = false }) => {
  const t = themes.stack;
  fg = fg || t.c.ink;
  accent = accent || (mono ? fg : t.c.primary);
  const fs = height * 0.62;
  // mark scaled to height
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: height * 0.18,
      fontFamily: t.fonts.display, color: fg, lineHeight: 1,
    }}>
      <MarkStack size={height * 0.92} fg={fg} bg="transparent" accent={accent} />
      <span style={{
        fontSize: fs, fontWeight: 600, letterSpacing: '-0.035em',
      }}>
        promptbl<span style={{ color: accent }}>.ai</span>
      </span>
    </div>
  );
};

const LockupTerminal = ({ height = 100, fg, accent, mono = false }) => {
  const t = themes.terminal;
  fg = fg || t.c.ink;
  accent = accent || (mono ? fg : t.c.primary);
  const fs = height * 0.5;
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: height * 0.12,
      fontFamily: t.fonts.mono, color: fg, lineHeight: 1,
    }}>
      <span style={{ fontSize: fs, fontWeight: 700, opacity: 0.55 }}>&gt;_</span>
      <span style={{ fontSize: fs, fontWeight: 700, letterSpacing: '-0.04em' }}>
        promptbl<span style={{ color: accent }}>.ai</span>
      </span>
      <span style={{
        display: 'inline-block',
        width: fs * 0.55, height: fs * 0.95,
        background: accent,
        marginLeft: -fs * 0.08,
        animation: 'pblBlink 1.05s steps(2) infinite',
      }} />
    </div>
  );
};

const LockupBid = ({ height = 100, fg, accent, mono = false }) => {
  const t = themes.bid;
  fg = fg || t.c.ink;
  accent = accent || (mono ? fg : t.c.accent);
  const fs = height * 0.78;
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 0,
      fontFamily: t.fonts.display, color: fg, lineHeight: 1,
      letterSpacing: '-0.05em', fontWeight: 700,
    }}>
      <span style={{ fontSize: fs }}>pr</span>
      {/* target-o */}
      <span style={{
        display: 'inline-block', position: 'relative',
        width: fs * 0.78, height: fs * 0.78, margin: '0 ' + (fs * 0.01) + 'px',
      }}>
        <span style={{
          position: 'absolute', inset: fs * 0.04, borderRadius: '50%',
          border: (fs * 0.09) + 'px solid ' + fg,
        }} />
        <span style={{
          position: 'absolute', inset: fs * 0.26, borderRadius: '50%',
          background: accent,
        }} />
      </span>
      <span style={{ fontSize: fs }}>mptbl</span>
      <span style={{
        fontSize: fs * 0.34, marginLeft: fs * 0.06, color: accent,
        fontFamily: t.fonts.mono, fontWeight: 500, transform: 'translateY(' + (fs * 0.18) + 'px)',
      }}>.ai</span>
    </div>
  );
};

// Keyframes for terminal cursor blink (injected once)
if (typeof document !== 'undefined' && !document.getElementById('pbl-anim')) {
  const s = document.createElement('style');
  s.id = 'pbl-anim';
  s.textContent = '@keyframes pblBlink{0%,49%{opacity:1}50%,100%{opacity:0}}';
  document.head.appendChild(s);
}

// Bundle marks/lockups by direction for ergonomic use.
const BRAND = {
  index:    { theme: themes.index,    Mark: MarkIndex,    Lockup: LockupIndex },
  stack:    { theme: themes.stack,    Mark: MarkStack,    Lockup: LockupStack },
  terminal: { theme: themes.terminal, Mark: MarkTerminal, Lockup: LockupTerminal },
  bid:      { theme: themes.bid,      Mark: MarkBid,      Lockup: LockupBid },
};

Object.assign(window, { themes, BRAND, MarkIndex, MarkStack, MarkTerminal, MarkBid, LockupIndex, LockupStack, LockupTerminal, LockupBid });


// ---- artboards.jsx ----
// artboards.jsx — renders the 7 artboards for any given theme.
// Each export is a React component that takes { brand } where brand
// is BRAND[id] = { theme, Mark, Lockup }.

// ------- Shared bits -------
const Cap = ({ children, c, style }) => (
  <div style={{
    fontFamily: "'Geist Mono', monospace",
    fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase',
    color: c, opacity: 0.55, ...style,
  }}>{children}</div>
);

const Hairline = ({ c, style }) => (
  <div style={{ height: 1, background: c, opacity: 0.4, ...style }} />
);

// ------- 1. PRIMARY LOCKUP -------
const ArtPrimary = ({ brand }) => {
  const { theme: t, Lockup } = brand;
  return (
    <div style={{
      width: '100%', height: '100%', background: t.c.paper,
      padding: 64, boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      fontFamily: t.fonts.text, color: t.c.ink, position: 'relative',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Cap c={t.c.ink}>{t.n} · {t.name}</Cap>
        <Cap c={t.c.ink}>Primary Lockup</Cap>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Lockup height={170} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32 }}>
        <div style={{ maxWidth: '60%' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12,
          }}>
            <span style={{
              display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
              background: t.c.primary || t.c.accent,
            }} />
            <div style={{
              fontFamily: t.fonts.mono,
              fontSize: 12, lineHeight: 1,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              fontWeight: 500,
              color: t.c.ink,
            }}>{t.tagline}</div>
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.5, color: t.c.slate, maxWidth: 480 }}>
            {t.desc}
          </div>
        </div>
        <Cap c={t.c.ink}>pronounced “promptable”</Cap>
      </div>
    </div>
  );
};

// ------- 2. MARK + MONO VARIANTS -------
const ArtMark = ({ brand }) => {
  const { theme: t, Mark } = brand;
  return (
    <div style={{
      width: '100%', height: '100%', background: t.c.paper,
      padding: 56, boxSizing: 'border-box', position: 'relative',
      fontFamily: t.fonts.text, color: t.c.ink,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 28 }}>
        <Cap c={t.c.ink}>Mark · Variants</Cap>
        <Cap c={t.c.ink}>Favicon-safe at 16px</Cap>
      </div>

      <div style={{ display: 'flex', gap: 24, alignItems: 'stretch', height: 'calc(100% - 80px)' }}>
        {/* Hero mark */}
        <div style={{
          flex: '0 0 280px', background: t.c.ink,
          display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4,
        }}>
          <Mark size={180} fg={t.c.paper} bg={t.c.ink} accent={t.c.primary || t.c.accent} />
        </div>

        {/* On color */}
        <div style={{
          flex: '0 0 200px', background: t.c.primary || t.c.accent,
          display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4,
        }}>
          <Mark size={120} fg={t.c.paper} bg={t.c.primary || t.c.accent} accent={t.c.paper} />
        </div>

        {/* Mono light */}
        <div style={{
          flex: '0 0 200px', background: t.c.paperWarm,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: 14, borderRadius: 4, padding: 16, boxSizing: 'border-box',
        }}>
          <Mark size={110} fg={t.c.ink} bg={t.c.paperWarm} accent={t.c.ink} />
          <Cap c={t.c.ink}>Mono · Ink</Cap>
        </div>

        {/* Scaling row */}
        <div style={{
          flex: 1, border: '1px solid ' + t.c.hairline, borderRadius: 4,
          padding: 18, boxSizing: 'border-box',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <Cap c={t.c.ink}>Scale</Cap>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 18, justifyContent: 'space-between' }}>
            <Mark size={88} />
            <Mark size={56} />
            <Mark size={32} />
            <Mark size={16} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: t.fonts.mono, fontSize: 10, color: t.c.slate }}>
            <span>88</span><span>56</span><span>32</span><span>16</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ------- 3. COLOR PALETTE -------
const ArtPalette = ({ brand }) => {
  const { theme: t } = brand;
  const swatches = [
    { name: 'Ink',     hex: t.c.ink,         role: 'Headline · UI text' },
    { name: 'Paper',   hex: t.c.paper,       role: 'Surface · canvas' },
    { name: t.id === 'bid' ? 'Indigo' : t.id === 'terminal' ? 'Slate' : 'Slate', hex: t.c.slate, role: 'Secondary · meta' },
    { name: t.id === 'bid' ? 'Indigo' : t.id === 'terminal' ? 'Cyan' : t.id === 'stack' ? 'Cobalt' : 'Ultramarine', hex: t.c.primary, role: t.id === 'bid' ? 'Brand · CTA' : 'Brand · accent' },
  ];
  if (t.c.accent) {
    swatches.push({ name: 'Dijon', hex: t.c.accent, role: 'Warm accent · highlight' });
  }
  if (t.id === 'stack') {
    swatches.push({ name: 'Ice', hex: t.c.primarySoft, role: 'Tint · backgrounds' });
  }
  if (t.id === 'terminal') {
    swatches.push({ name: 'Cyan deep', hex: t.c.primaryDeep, role: 'Pressed · links' });
  }

  return (
    <div style={{
      width: '100%', height: '100%', background: t.c.paper,
      padding: 56, boxSizing: 'border-box',
      fontFamily: t.fonts.text, color: t.c.ink,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 28 }}>
        <Cap c={t.c.ink}>Color · Palette</Cap>
        <Cap c={t.c.ink}>{swatches.length} tokens</Cap>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(' + swatches.length + ', 1fr)',
        gap: 12, height: 'calc(100% - 80px)',
      }}>
        {swatches.map((s, i) => {
          const isLight = ['#FFFFFF', '#F1ECE0', '#F4F0E6', '#DCE3EE', '#DBE7FF', '#F1F5F9'].some(x => x.toLowerCase() === s.hex.toLowerCase());
          const txt = isLight ? t.c.ink : '#FFFFFF';
          return (
            <div key={i} style={{
              background: s.hex, color: txt,
              padding: 18, boxSizing: 'border-box', borderRadius: 4,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              border: isLight ? '1px solid ' + t.c.hairline : 'none',
            }}>
              <div style={{ fontFamily: t.fonts.display, fontSize: 26, fontWeight: 500, fontStyle: (t.id === 'index' || t.id === 'terminal') ? 'italic' : 'normal', lineHeight: 1 }}>
                {s.name}
              </div>
              <div>
                <div style={{ fontFamily: t.fonts.mono, fontSize: 11, letterSpacing: '0.06em', opacity: 0.8, marginBottom: 4 }}>
                  {s.hex.toUpperCase()}
                </div>
                <div style={{ fontSize: 11, opacity: 0.75 }}>{s.role}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ------- 4. TYPOGRAPHY -------
const ArtType = ({ brand }) => {
  const { theme: t } = brand;
  // Each direction shows: Display, Heading, Body, Mono. Strings differ for personality.
  const fams = {
    index:    { display: 'Cabin', text: 'Newsreader', mono: 'Geist Mono' },
    stack:    { display: 'Geist 700', text: 'Geist 400', mono: 'Geist Mono 500' },
    terminal: { display: 'Cabin italic', text: 'JetBrains Mono', mono: 'JetBrains Mono 500' },
    bid:      { display: 'Space Grotesk 700', text: 'Space Grotesk 400', mono: 'Geist Mono 500' },
  }[t.id];

  const displaySample = t.id === 'index'
    ? <span><i>Sponsored,</i> not surveilled.</span>
    : t.id === 'stack'
    ? <span>All LLMs.<br/>One media buy.</span>
    : t.id === 'terminal'
    ? <span><i>Reach the people<br/>asking the AI.</i></span>
    : <span>Win the prompt.<br/>Own the answer.</span>;

  return (
    <div style={{
      width: '100%', height: '100%', background: t.c.paper,
      padding: 56, boxSizing: 'border-box',
      fontFamily: t.fonts.text, color: t.c.ink,
      display: 'flex', flexDirection: 'column', gap: 22,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Cap c={t.c.ink}>Typography · System</Cap>
        <Cap c={t.c.ink}>{fams.display} · {fams.text} · {fams.mono}</Cap>
      </div>

      {/* Display sample */}
      <div style={{
        fontFamily: t.fonts.display,
        fontSize: 72, lineHeight: 1.02,
        fontWeight: (t.id === 'index' || t.id === 'terminal') ? 500 : 700,
        letterSpacing: t.id === 'bid' ? '-0.045em' : t.id === 'stack' ? '-0.035em' : '-0.015em',
        color: t.c.ink,
      }}>
        {displaySample}
      </div>

      <Hairline c={t.c.hairline} />

      {/* Three-column type spec */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, alignItems: 'flex-start' }}>
        <div>
          <Cap c={t.c.ink} style={{ marginBottom: 8 }}>Heading · 32 / 1.1</Cap>
          <div style={{
            fontFamily: t.fonts.display, fontSize: 30, lineHeight: 1.08,
            fontWeight: (t.id === 'index' || t.id === 'terminal') ? 500 : 600,
            fontStyle: (t.id === 'index' || t.id === 'terminal') ? 'italic' : 'normal',
          }}>
            Reporting that<br/>media buyers trust.
          </div>
        </div>
        <div>
          <Cap c={t.c.ink} style={{ marginBottom: 8 }}>Body · 15 / 1.55</Cap>
          <div style={{ fontFamily: t.fonts.text, fontSize: 15, lineHeight: 1.55, color: t.c.slate }}>
            One marketplace for sponsored placements across ChatGPT, Claude, Gemini, Perplexity, and the long tail. Unified billing, unified reporting.
          </div>
        </div>
        <div>
          <Cap c={t.c.ink} style={{ marginBottom: 8 }}>Mono · 13 / 1.5</Cap>
          <div style={{ fontFamily: t.fonts.mono, fontSize: 13, lineHeight: 1.55, color: t.c.slate, whiteSpace: 'pre-line' }}>
{`CPM    $14.20
CTR     2.7%
spend  $48,210 wk
        ↑ 18% MoM`}
          </div>
        </div>
      </div>
    </div>
  );
};

// ------- 5. SOCIAL PACK — avatar + LinkedIn cover -------
const ArtSocial = ({ brand }) => {
  const { theme: t, Mark, Lockup } = brand;
  return (
    <div style={{
      width: '100%', height: '100%', background: t.c.paperWarm,
      padding: 48, boxSizing: 'border-box',
      fontFamily: t.fonts.text, color: t.c.ink,
      display: 'flex', flexDirection: 'column', gap: 22,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Cap c={t.c.ink}>Social · Avatar + Cover</Cap>
        <Cap c={t.c.ink}>X/LinkedIn · 400² + 1584×396</Cap>
      </div>

      <div style={{ display: 'flex', gap: 22, alignItems: 'stretch', flex: 1 }}>
        {/* Avatar variants */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{
            width: 180, height: 180, background: t.c.ink, borderRadius: 18,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(0,0,0,.12)',
          }}>
            <Mark size={130} fg={t.c.paper} bg={t.c.ink} accent={t.c.primary || t.c.accent} />
          </div>
          <div style={{
            width: 180, height: 180, background: t.c.primary || t.c.accent, borderRadius: 18,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Mark size={130} fg={t.c.paper} bg={t.c.primary || t.c.accent} accent={t.c.paper} />
          </div>
        </div>

        {/* Cover */}
        <div style={{
          flex: 1, background: t.c.ink, borderRadius: 12,
          padding: 48, boxSizing: 'border-box', position: 'relative',
          overflow: 'hidden', color: t.c.paper,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          {/* big bg mark watermark */}
          <div style={{ position: 'absolute', right: -40, bottom: -60, opacity: 0.12 }}>
            <Mark size={460} fg={t.c.paper} bg="transparent" accent={t.c.primary || t.c.accent} />
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Cap c={t.c.paper}>{t.n} / {t.name.toUpperCase()}</Cap>
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              fontFamily: t.fonts.display, fontSize: 52, lineHeight: 1.05,
              fontWeight: (t.id === 'index' || t.id === 'terminal') ? 500 : 700,
              fontStyle: (t.id === 'index' || t.id === 'terminal') ? 'italic' : 'normal',
              letterSpacing: (t.id === 'index' || t.id === 'terminal') ? '-0.01em' : '-0.04em',
              marginBottom: 12,
              color: t.c.paper,
            }}>
              {t.id === 'index' ? 'Sponsored, not surveilled.'
                : t.id === 'stack' ? 'All LLMs. One media buy.'
                : t.id === 'terminal' ? '> reach the people asking the AI.'
                : 'Win the prompt. Own the answer.'}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <Lockup height={36} fg={t.c.paper} accent={t.c.primary || t.c.accent} />
              <span style={{ fontFamily: t.fonts.mono, fontSize: 12, opacity: 0.65, color: t.c.paper }}>
                promptbl.ai
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ------- 6. BUSINESS CARD — front + back -------
const ArtCard = ({ brand }) => {
  const { theme: t, Mark, Lockup } = brand;
  const CARD_W = 320, CARD_H = 192; // 3.5x2 aspect, ~91x55mm feel

  return (
    <div style={{
      width: '100%', height: '100%', background: t.c.paperWarm,
      padding: 56, boxSizing: 'border-box',
      fontFamily: t.fonts.text, color: t.c.ink,
      display: 'flex', flexDirection: 'column', gap: 18,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Cap c={t.c.ink}>Business Card · Front + Back</Cap>
        <Cap c={t.c.ink}>3.5 × 2 in · uncoated</Cap>
      </div>

      <div style={{ display: 'flex', gap: 36, justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        {/* FRONT */}
        <div style={{
          width: CARD_W, height: CARD_H, background: t.c.paper,
          borderRadius: 6, position: 'relative', overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,.14), 0 2px 4px rgba(0,0,0,.06)',
          padding: 22, boxSizing: 'border-box',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          border: '1px solid ' + t.c.hairline,
        }}>
          <Lockup height={28} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div style={{
              fontFamily: t.fonts.display,
              fontSize: 16, fontWeight: (t.id === 'index' || t.id === 'terminal') ? 500 : 600,
              fontStyle: (t.id === 'index' || t.id === 'terminal') ? 'italic' : 'normal',
            }}>
              Alex Tanaka
            </div>
            <div style={{ fontFamily: t.fonts.mono, fontSize: 10, color: t.c.slate, letterSpacing: '0.04em' }}>
              VP Partnerships
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div style={{ fontFamily: t.fonts.mono, fontSize: 9.5, lineHeight: 1.55, color: t.c.slate }}>
              alex@promptbl.ai<br/>
              +1 415 555 0148
            </div>
            <Cap c={t.c.ink}>{t.n}</Cap>
          </div>
        </div>

        {/* BACK */}
        <div style={{
          width: CARD_W, height: CARD_H, background: t.c.ink,
          borderRadius: 6, position: 'relative', overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,.18), 0 2px 4px rgba(0,0,0,.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: t.c.paper,
        }}>
          <div style={{ position: 'absolute', inset: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Cap c={t.c.paper} style={{ opacity: 0.5 }}>promptbl.ai</Cap>
            <Cap c={t.c.paper} style={{ opacity: 0.5 }}>SF · NYC</Cap>
          </div>
          <Mark size={92} fg={t.c.paper} bg={t.c.ink} accent={t.c.primary || t.c.accent} />
          <div style={{ position: 'absolute', left: 22, right: 22, bottom: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <span style={{
              fontFamily: t.fonts.display, fontSize: 13,
              fontStyle: (t.id === 'index' || t.id === 'terminal') ? 'italic' : 'normal',
              fontWeight: (t.id === 'index' || t.id === 'terminal') ? 500 : 500,
              color: t.c.paper, opacity: 0.85,
            }}>
              {t.tagline}
            </span>
            <Cap c={t.c.paper} style={{ opacity: 0.5 }}>{t.n}</Cap>
          </div>
        </div>
      </div>
    </div>
  );
};

// ------- 7. IN CONTEXT — favicon tab + product moment -------
const ArtContext = ({ brand }) => {
  const { theme: t, Mark } = brand;
  const accent = t.c.primary || t.c.accent;

  return (
    <div style={{
      width: '100%', height: '100%', background: t.c.paperWarm,
      padding: 56, boxSizing: 'border-box',
      fontFamily: t.fonts.text, color: t.c.ink,
      display: 'flex', flexDirection: 'column', gap: 22,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Cap c={t.c.ink}>In Context · Favicon + Product</Cap>
        <Cap c={t.c.ink}>Where the brand lives</Cap>
      </div>

      <div style={{ display: 'flex', gap: 24, flex: 1, alignItems: 'stretch' }}>
        {/* Browser tab mock */}
        <div style={{ flex: '0 0 360px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Cap c={t.c.ink}>Browser tab</Cap>
          <div style={{
            background: '#E5E5E5', borderRadius: '10px 10px 0 0',
            padding: '8px 8px 0 8px', display: 'flex', gap: 4, alignItems: 'flex-end',
          }}>
            <div style={{
              background: '#FAFAFA', borderRadius: '8px 8px 0 0',
              padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8,
              fontFamily: 'system-ui', fontSize: 12, color: '#202020',
              minWidth: 180, maxWidth: 220,
            }}>
              <div style={{ width: 16, height: 16, flex: '0 0 16px' }}>
                <Mark size={16} fg={t.c.ink} bg={t.c.paper} accent={accent} />
              </div>
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                promptbl.ai — Sponsor LLM…
              </span>
              <span style={{ marginLeft: 'auto', color: '#888', fontSize: 14 }}>×</span>
            </div>
            <div style={{
              background: '#D8D8D8', borderRadius: '8px 8px 0 0',
              padding: '8px 12px', fontFamily: 'system-ui', fontSize: 12, color: '#888',
              minWidth: 110,
            }}>
              New Tab
            </div>
          </div>
          <div style={{
            background: '#FAFAFA', height: 16, borderRadius: '0 0 6px 6px',
            display: 'flex', alignItems: 'center', gap: 6, padding: '0 10px',
            fontFamily: 'system-ui', fontSize: 10, color: '#888',
          }}>
            <span style={{ color: '#0a7c2e' }}>●</span>
            <span>promptbl.ai</span>
          </div>

          <div style={{ marginTop: 18 }}>
            <Cap c={t.c.ink}>Favicon scales</Cap>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14, marginTop: 8, padding: 14, background: t.c.paper, borderRadius: 6, border: '1px solid ' + t.c.hairline }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <Mark size={48} />
                <span style={{ fontFamily: t.fonts.mono, fontSize: 9.5, color: t.c.muted }}>48</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <Mark size={32} />
                <span style={{ fontFamily: t.fonts.mono, fontSize: 9.5, color: t.c.muted }}>32</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <Mark size={16} />
                <span style={{ fontFamily: t.fonts.mono, fontSize: 9.5, color: t.c.muted }}>16</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product moment — a fake LLM answer with the Sponsored badge */}
        <div style={{
          flex: 1, background: t.c.paper, borderRadius: 10,
          border: '1px solid ' + t.c.hairline, padding: 22, boxSizing: 'border-box',
          display: 'flex', flexDirection: 'column', gap: 14, position: 'relative',
        }}>
          <Cap c={t.c.ink}>Sponsored placement · LLM result</Cap>
          <div style={{
            background: t.c.paperWarm, borderRadius: 8, padding: '12px 14px',
            fontFamily: t.fonts.mono, fontSize: 12, color: t.c.slate,
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{ opacity: 0.6 }}>You:</span>
            <span>best CRM for early-stage B2B SaaS?</span>
          </div>

          <div style={{
            background: 'transparent',
            display: 'flex', flexDirection: 'column', gap: 8,
            fontFamily: t.fonts.text, fontSize: 13, lineHeight: 1.5, color: t.c.ink,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                background: accent, color: t.c.paper,
                padding: '3px 8px', borderRadius: 999,
                fontFamily: t.fonts.mono, fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                <Mark size={11} fg={t.c.paper} bg="transparent" accent={t.c.paper} /> Sponsored
              </span>
              <span style={{ fontFamily: t.fonts.mono, fontSize: 10.5, color: t.c.muted }}>
                via promptbl.ai · Attio
              </span>
            </div>
            <div style={{
              fontFamily: t.fonts.display, fontSize: 18, lineHeight: 1.25,
              fontWeight: (t.id === 'index' || t.id === 'terminal') ? 500 : 600,
              fontStyle: (t.id === 'index' || t.id === 'terminal') ? 'italic' : 'normal',
              color: t.c.ink,
            }}>
              Attio is the modern CRM built for the way startups actually sell —
            </div>
            <div style={{ color: t.c.slate, fontSize: 13 }}>
              live data sync, AI-drafted outreach, and a free tier through 3 seats.
              Most teams set it up in under an hour.
            </div>
          </div>

          <Hairline c={t.c.hairline} style={{ marginTop: 'auto' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: t.fonts.mono, fontSize: 10.5, color: t.c.muted, letterSpacing: '0.04em' }}>
            <span>imp · 12,840</span>
            <span>ctr · 4.1%</span>
            <span>spend · $1,820</span>
            <span style={{ color: accent }}>● live</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { ArtPrimary, ArtMark, ArtPalette, ArtType, ArtSocial, ArtCard, ArtContext });



// ---- logo-system.jsx ----
// ============================================================
// LOGO SYSTEM — Terminal direction (Direction 03)
// 6 artboards: marks, wordmarks, color matrix, clearspace+min,
// do/dont, in-the-wild.
// ============================================================

const T = themes.terminal;

// ---------- 6 MARK VARIATIONS ----------
// Each takes { size, fg, bg, accent } and renders a 100x100 viewBox SVG.

const MarkVar = {};

// A · Prompt + Cursor (current canonical)
MarkVar.A = ({ size = 100, fg = T.c.ink, bg = T.c.paper, accent = T.c.primary }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
    <rect width="100" height="100" fill={bg} />
    <path d="M 22 32 L 44 50 L 22 68" stroke={fg} strokeWidth="9" fill="none" strokeLinecap="square" strokeLinejoin="miter" />
    <rect x="54" y="38" width="26" height="26" fill={accent} />
  </svg>
);

// B · Cursor only — block alone, dead simple. Best favicon.
MarkVar.B = ({ size = 100, fg = T.c.ink, bg = T.c.paper, accent = T.c.primary }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
    <rect width="100" height="100" fill={bg} />
    <rect x="32" y="32" width="36" height="36" fill={accent} />
  </svg>
);

// C · Brackets — [▮] framing — feels like a slot/placement.
MarkVar.C = ({ size = 100, fg = T.c.ink, bg = T.c.paper, accent = T.c.primary }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
    <rect width="100" height="100" fill={bg} />
    {/* left bracket */}
    <path d="M 28 24 L 18 24 L 18 76 L 28 76" stroke={fg} strokeWidth="7" fill="none" strokeLinejoin="miter" strokeLinecap="square" />
    {/* right bracket */}
    <path d="M 72 24 L 82 24 L 82 76 L 72 76" stroke={fg} strokeWidth="7" fill="none" strokeLinejoin="miter" strokeLinecap="square" />
    {/* center cursor */}
    <rect x="40" y="38" width="20" height="24" fill={accent} />
  </svg>
);

// D · Triple chevron — escalating prompts, motion right.
MarkVar.D = ({ size = 100, fg = T.c.ink, bg = T.c.paper, accent = T.c.primary }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
    <rect width="100" height="100" fill={bg} />
    <path d="M 18 32 L 36 50 L 18 68" stroke={fg} strokeWidth="9" fill="none" strokeLinecap="square" />
    <path d="M 42 32 L 60 50 L 42 68" stroke={fg} strokeWidth="9" fill="none" strokeLinecap="square" />
    <path d="M 66 32 L 84 50 L 66 68" stroke={accent} strokeWidth="9" fill="none" strokeLinecap="square" />
  </svg>
);

// E · Monogram p — italic Bodoni p inside a mono frame. The hybrid concept made literal.
MarkVar.E = ({ size = 100, fg = T.c.ink, bg = T.c.paper, accent = T.c.primary }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
    <rect width="100" height="100" fill={bg} />
    {/* mono frame */}
    <rect x="14" y="14" width="72" height="72" fill="none" stroke={fg} strokeWidth="5" />
    {/* serif italic p */}
    <text
      x="50" y="78" textAnchor="middle"
      fontFamily="'Cabin', system-ui, sans-serif"
      fontStyle="italic" fontWeight="500"
      fontSize="74" fill={accent}
    >p</text>
  </svg>
);

// F · Bullet prompt — arrow + small bullet (the "answer marker"). Quieter.
MarkVar.F = ({ size = 100, fg = T.c.ink, bg = T.c.paper, accent = T.c.primary }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
    <rect width="100" height="100" fill={bg} />
    <path d="M 22 30 L 50 50 L 22 70" stroke={fg} strokeWidth="9" fill="none" strokeLinecap="square" />
    <circle cx="74" cy="50" r="10" fill={accent} />
  </svg>
);

const MARK_VARS = [
  { key: 'A', name: 'Prompt + Cursor', tag: 'canonical', C: MarkVar.A },
  { key: 'B', name: 'Cursor solo',     tag: 'favicon-first', C: MarkVar.B },
  { key: 'C', name: 'Bracketed',       tag: 'placement-feel', C: MarkVar.C },
  { key: 'D', name: 'Triple chevron',  tag: 'directional', C: MarkVar.D },
  { key: 'E', name: 'Monogram p',      tag: 'mono × serif', C: MarkVar.E },
  { key: 'F', name: 'Bullet prompt',   tag: 'softer', C: MarkVar.F },
];

// ---------- 6 WORDMARK VARIATIONS ----------
// Each takes { height, fg, accent } and renders the wordmark inline.

const WMVar = {};

// A · Canonical: >_ promptbl.ai▮
WMVar.A = ({ height = 60, fg = T.c.ink, accent = T.c.primary }) => {
  const fs = height * 0.55;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: height * 0.12, fontFamily: T.fonts.mono, color: fg, lineHeight: 1 }}>
      <span style={{ fontSize: fs, fontWeight: 700, opacity: 0.55 }}>&gt;_</span>
      <span style={{ fontSize: fs, fontWeight: 700, letterSpacing: '-0.04em' }}>
        promptbl<span style={{ color: accent }}>.ai</span>
      </span>
      <span style={{ display: 'inline-block', width: fs * 0.55, height: fs * 0.95, background: accent, marginLeft: -fs * 0.08 }} />
    </div>
  );
};

// B · Stripped: promptbl.ai
WMVar.B = ({ height = 60, fg = T.c.ink, accent = T.c.primary }) => {
  const fs = height * 0.7;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'baseline', fontFamily: T.fonts.mono, color: fg, lineHeight: 1 }}>
      <span style={{ fontSize: fs, fontWeight: 700, letterSpacing: '-0.04em' }}>
        promptbl<span style={{ color: accent }}>.ai</span>
      </span>
    </div>
  );
};

// C · Mark + Wordmark side by side
WMVar.C = ({ height = 60, fg = T.c.ink, accent = T.c.primary }) => {
  const fs = height * 0.62;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: height * 0.22, fontFamily: T.fonts.mono, color: fg, lineHeight: 1 }}>
      <MarkVar.C size={height} fg={fg} bg="transparent" accent={accent} />
      <span style={{ fontSize: fs, fontWeight: 700, letterSpacing: '-0.04em' }}>
        promptbl<span style={{ color: accent }}>.ai</span>
      </span>
    </div>
  );
};

// D · Stacked: mark on top, wordmark below
WMVar.D = ({ height = 110, fg = T.c.ink, accent = T.c.primary }) => {
  const fs = height * 0.22;
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: height * 0.08, fontFamily: T.fonts.mono, color: fg, lineHeight: 1 }}>
      <MarkVar.C size={height * 0.6} fg={fg} bg="transparent" accent={accent} />
      <span style={{ fontSize: fs, fontWeight: 700, letterSpacing: '-0.02em' }}>
        promptbl<span style={{ color: accent }}>.ai</span>
      </span>
    </div>
  );
};

// E · Bracketed — [ promptbl.ai ]
WMVar.E = ({ height = 60, fg = T.c.ink, accent = T.c.primary }) => {
  const fs = height * 0.7;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: height * 0.14, fontFamily: T.fonts.mono, color: fg, lineHeight: 1 }}>
      <span style={{ fontSize: fs * 1.05, fontWeight: 400, opacity: 0.5 }}>[</span>
      <span style={{ fontSize: fs, fontWeight: 700, letterSpacing: '-0.04em' }}>
        promptbl<span style={{ color: accent }}>.ai</span>
      </span>
      <span style={{ fontSize: fs * 1.05, fontWeight: 400, opacity: 0.5 }}>]</span>
    </div>
  );
};

// F · Comment style: // promptbl.ai
WMVar.F = ({ height = 60, fg = T.c.ink, accent = T.c.primary }) => {
  const fs = height * 0.7;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: height * 0.18, fontFamily: T.fonts.mono, color: fg, lineHeight: 1 }}>
      <span style={{ fontSize: fs, fontWeight: 500, opacity: 0.5 }}>//</span>
      <span style={{ fontSize: fs, fontWeight: 700, letterSpacing: '-0.04em' }}>
        promptbl<span style={{ color: accent }}>.ai</span>
      </span>
    </div>
  );
};

const WM_VARS = [
  { key: 'A', name: 'Canonical',         desc: 'Prompt prefix + blinking cursor. The signature mark. Use on hero, web, app.', C: WMVar.A, h: 80 },
  { key: 'B', name: 'Stripped wordmark', desc: 'No ornament. Use where the prompt would feel noisy — navs, business cards, body of docs.', C: WMVar.B, h: 80 },
  { key: 'C', name: 'Mark + wordmark',   desc: 'Horizontal lockup for product header rails, partnership co-brands, footers.', C: WMVar.C, h: 80 },
  { key: 'D', name: 'Stacked',           desc: 'Centered vertical for app launchers, splash screens, square real estate.', C: WMVar.D, h: 130 },
  { key: 'E', name: 'Bracketed',         desc: 'A literal "slot." Use on placement-related screens (the ad-unit story).', C: WMVar.E, h: 80 },
  { key: 'F', name: 'Comment',           desc: 'A nerd nod. Best for dev docs, API references, the changelog header.', C: WMVar.F, h: 80 },
];

// ---------- ARTBOARDS ----------

const Cap2 = ({ children, c, style }) => (
  <div style={{
    fontFamily: "'Geist Mono', monospace",
    fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase',
    color: c, opacity: 0.55, ...style,
  }}>{children}</div>
);

// ART · MARK VARIATIONS GRID
const ArtLogoMarks = () => {
  return (
    <div style={{
      width: '100%', height: '100%', background: T.c.paper,
      padding: 48, boxSizing: 'border-box',
      fontFamily: T.fonts.text, color: T.c.ink,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
        <Cap2 c={T.c.ink}>Mark · Variations (Terminal)</Cap2>
        <Cap2 c={T.c.ink}>6 directions</Cap2>
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)',
        gap: 14, height: 'calc(100% - 60px)',
      }}>
        {MARK_VARS.map(m => (
          <div key={m.key} style={{
            background: T.c.paperWarm, borderRadius: 6,
            border: '1px solid ' + T.c.hairline,
            padding: 18, boxSizing: 'border-box', position: 'relative',
            display: 'flex', flexDirection: 'column', alignItems: 'stretch',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Cap2 c={T.c.ink}>{m.key}</Cap2>
              <Cap2 c={T.c.ink} style={{ opacity: 0.4 }}>{m.tag}</Cap2>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <m.C size={112} bg="transparent" />
            </div>
            <div style={{ fontFamily: T.fonts.mono, fontSize: 12, color: T.c.ink, fontWeight: 500 }}>
              {m.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ART · WORDMARK VARIATIONS
const ArtLogoWordmarks = () => {
  return (
    <div style={{
      width: '100%', height: '100%', background: T.c.paper,
      padding: 48, boxSizing: 'border-box',
      fontFamily: T.fonts.text, color: T.c.ink,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <Cap2 c={T.c.ink}>Wordmark · Variants (Terminal)</Cap2>
        <Cap2 c={T.c.ink}>Lockup library</Cap2>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', gap: 10,
      }}>
        {WM_VARS.map(w => (
          <div key={w.key} style={{
            display: 'grid', gridTemplateColumns: '32px 1fr 320px',
            gap: 20, alignItems: 'center',
            padding: '14px 20px', background: T.c.paperWarm,
            border: '1px solid ' + T.c.hairline, borderRadius: 4,
          }}>
            <Cap2 c={T.c.ink}>{w.key}</Cap2>
            <div style={{ display: 'flex', alignItems: 'center', minHeight: w.h }}>
              <w.C height={w.h * 0.7} />
            </div>
            <div>
              <div style={{ fontFamily: T.fonts.mono, fontSize: 12, fontWeight: 600, color: T.c.ink, marginBottom: 4 }}>{w.name}</div>
              <div style={{ fontFamily: T.fonts.mono, fontSize: 10.5, lineHeight: 1.5, color: T.c.muted }}>{w.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ART · COLOR MATRIX — wordmark + mark on every brand surface
const ArtLogoColorMatrix = () => {
  const surfaces = [
    { name: 'Paper · default',    bg: T.c.paper,     fg: T.c.ink,   accent: T.c.primary, light: true },
    { name: 'Ink · reverse',      bg: T.c.ink,       fg: T.c.paper, accent: T.c.primary, light: false },
    { name: 'Ultramarine · CTA',  bg: T.c.primary,   fg: T.c.paper, accent: T.c.paper,   light: false },
    { name: 'Slate · pressed',    bg: T.c.slate,     fg: T.c.paper, accent: T.c.primary, light: false },
    { name: 'Mono · ink only',    bg: T.c.paper,     fg: T.c.ink,   accent: T.c.ink,     light: true,  mono: true },
    { name: 'Mono · paper only',  bg: T.c.ink,       fg: T.c.paper, accent: T.c.paper,   light: false, mono: true },
  ];
  return (
    <div style={{
      width: '100%', height: '100%', background: T.c.paperWarm,
      padding: 48, boxSizing: 'border-box',
      fontFamily: T.fonts.text, color: T.c.ink,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 22 }}>
        <Cap2 c={T.c.ink}>Color · Matrix</Cap2>
        <Cap2 c={T.c.ink}>Lockup on every brand surface</Cap2>
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)',
        gap: 10, height: 'calc(100% - 60px)',
      }}>
        {surfaces.map((s, i) => (
          <div key={i} style={{
            background: s.bg, color: s.fg, borderRadius: 4,
            border: s.light ? '1px solid ' + T.c.hairline : 'none',
            padding: 20, boxSizing: 'border-box', position: 'relative',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Cap2 c={s.fg}>{s.name}</Cap2>
              <Cap2 c={s.fg} style={{ opacity: 0.5 }}>{i + 1}</Cap2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 16, paddingTop: 8 }}>
              <MarkVar.C size={44} fg={s.fg} bg="transparent" accent={s.accent} />
              <WMVar.B height={32} fg={s.fg} accent={s.accent} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ART · CLEARSPACE + MINIMUM SIZES
const ArtLogoClearspace = () => {
  return (
    <div style={{
      width: '100%', height: '100%', background: T.c.paper,
      padding: 48, boxSizing: 'border-box',
      fontFamily: T.fonts.text, color: T.c.ink,
      display: 'flex', flexDirection: 'column', gap: 20,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Cap2 c={T.c.ink}>Clearspace · Minimum size</Cap2>
        <Cap2 c={T.c.ink}>1× cursor-block on all sides</Cap2>
      </div>

      <div style={{ display: 'flex', gap: 24, flex: 1 }}>
        {/* CLEARSPACE diagram */}
        <div style={{
          flex: '0 0 56%', position: 'relative',
          background: T.c.paperWarm, border: '1px solid ' + T.c.hairline,
          borderRadius: 4, padding: 64, boxSizing: 'border-box',
        }}>
          {/* dashed guide rectangle around lockup */}
          <div style={{
            position: 'absolute', inset: 24,
            border: '1px dashed ' + T.c.hairline,
            borderRadius: 2,
          }} />
          {/* "1x" tick marks at corners */}
          {[
            { top: 4, left: 4 }, { top: 4, right: 4 },
            { bottom: 4, left: 4 }, { bottom: 4, right: 4 },
          ].map((p, i) => (
            <div key={i} style={{
              position: 'absolute', ...p,
              fontFamily: T.fonts.mono, fontSize: 10, color: T.c.muted,
            }}>1x</div>
          ))}
          {/* the lockup */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <WMVar.A height={84} />
          </div>
          {/* center caption */}
          <div style={{
            position: 'absolute', bottom: -1, left: '50%', transform: 'translate(-50%, 50%)',
            background: T.c.paper, padding: '0 10px',
            fontFamily: T.fonts.mono, fontSize: 10, letterSpacing: '0.12em', color: T.c.muted,
          }}>
            CLEARSPACE = HEIGHT OF CURSOR BLOCK
          </div>
        </div>

        {/* MIN SIZE ladder */}
        <div style={{
          flex: 1, background: T.c.paperWarm, border: '1px solid ' + T.c.hairline,
          borderRadius: 4, padding: 22, boxSizing: 'border-box',
          display: 'flex', flexDirection: 'column', gap: 14,
        }}>
          <Cap2 c={T.c.ink}>Minimum sizes</Cap2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 4 }}>
            {[
              { px: 48, label: 'Display · hero', wm: true },
              { px: 32, label: 'UI · header rail', wm: true },
              { px: 24, label: 'Print · footer', wm: true },
              { px: 16, label: 'Favicon · mark only', wm: false },
            ].map((r, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                paddingBottom: 12, borderBottom: i < 3 ? '1px solid ' + T.c.hairline : 'none',
              }}>
                <div style={{ width: 40, fontFamily: T.fonts.mono, fontSize: 10.5, color: T.c.muted }}>
                  {r.px}px
                </div>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  {r.wm ? <WMVar.A height={r.px} /> : <MarkVar.C size={r.px} bg="transparent" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ART · DO / DON'T
const ArtLogoDoDont = () => {
  const items = [
    {
      ok: true, label: 'Do · use on approved surfaces',
      render: () => <WMVar.A height={64} />,
      bg: T.c.paper,
    },
    {
      ok: true, label: 'Do · keep prompt + cursor together',
      render: () => <WMVar.A height={64} fg={T.c.paper} accent={T.c.primary} />,
      bg: T.c.ink,
    },
    {
      ok: false, label: 'Don\'t · recolor the wordmark',
      render: () => (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: T.fonts.mono, lineHeight: 1 }}>
          <span style={{ fontSize: 40, fontWeight: 700, color: '#9333EA' }}>&gt;_</span>
          <span style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.04em', color: '#EC4899' }}>
            promptbl<span style={{ color: '#F59E0B' }}>.ai</span>
          </span>
        </div>
      ),
      bg: T.c.paper,
    },
    {
      ok: false, label: 'Don\'t · swap the typeface',
      render: () => (
        <span style={{ fontFamily: 'Georgia, serif', fontSize: 40, fontWeight: 700, color: T.c.ink, letterSpacing: '-0.02em' }}>
          promptbl<span style={{ color: T.c.primary }}>.ai</span>
        </span>
      ),
      bg: T.c.paper,
    },
    {
      ok: false, label: 'Don\'t · stretch or distort',
      render: () => (
        <div style={{ transform: 'scaleY(0.55) scaleX(1.25)' }}>
          <WMVar.A height={64} />
        </div>
      ),
      bg: T.c.paper,
    },
    {
      ok: false, label: 'Don\'t · place on busy surfaces',
      render: () => <WMVar.A height={64} fg={T.c.paper} accent="#FFFFFF" />,
      bg: 'repeating-linear-gradient(45deg, #d97706, #d97706 8px, #f59e0b 8px, #f59e0b 16px)',
    },
  ];
  return (
    <div style={{
      width: '100%', height: '100%', background: T.c.paperWarm,
      padding: 48, boxSizing: 'border-box',
      fontFamily: T.fonts.text, color: T.c.ink,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <Cap2 c={T.c.ink}>Usage · Do / Don't</Cap2>
        <Cap2 c={T.c.ink}>{items.filter(i => !i.ok).length} ways to break it</Cap2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: 10, height: 'calc(100% - 60px)' }}>
        {items.map((it, i) => (
          <div key={i} style={{
            background: it.bg, borderRadius: 4, overflow: 'hidden',
            padding: 18, boxSizing: 'border-box', position: 'relative',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            border: it.bg === T.c.paper ? '1px solid ' + T.c.hairline : 'none',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{
                display: 'inline-block', width: 18, height: 18, borderRadius: '50%',
                background: it.ok ? T.c.primary : '#B91C1C',
                color: '#fff', fontFamily: T.fonts.mono, fontSize: 11, fontWeight: 700,
                lineHeight: '18px', textAlign: 'center',
              }}>{it.ok ? '✓' : '✕'}</span>
              <Cap2 c={it.bg === T.c.ink ? T.c.paper : T.c.ink}>{it.label}</Cap2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, padding: 12 }}>
              {it.render()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ART · IN THE WILD — logo on real surfaces
const ArtLogoInWild = () => {
  return (
    <div style={{
      width: '100%', height: '100%', background: T.c.paperWarm,
      padding: 48, boxSizing: 'border-box',
      fontFamily: T.fonts.text, color: T.c.ink,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <Cap2 c={T.c.ink}>In the wild · Logo applications</Cap2>
        <Cap2 c={T.c.ink}>Where it actually lives</Cap2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gridTemplateRows: 'auto 1fr', gap: 12, height: 'calc(100% - 60px)' }}>

        {/* Browser nav bar mock */}
        <div style={{ gridColumn: '1 / span 2', gridRow: '1', background: T.c.paper, borderRadius: 6, border: '1px solid ' + T.c.hairline, padding: '14px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <WMVar.A height={36} />
          <div style={{ display: 'flex', gap: 22, fontFamily: T.fonts.mono, fontSize: 12, color: T.c.muted }}>
            <span>Buyers</span><span>Publishers</span><span>Pricing</span><span>Docs</span>
            <span style={{ background: T.c.ink, color: T.c.paper, padding: '6px 12px', borderRadius: 2 }}>Sign in</span>
          </div>
        </div>

        {/* App icon */}
        <div style={{ gridColumn: '3', gridRow: '1 / span 2', background: T.c.ink, borderRadius: 10, padding: 18, display: 'flex', flexDirection: 'column', gap: 10, color: T.c.paper, justifyContent: 'space-between' }}>
          <Cap2 c={T.c.paper}>App icon · iOS/macOS</Cap2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <div style={{ width: 132, height: 132, borderRadius: 30, background: T.c.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 28px rgba(0,0,0,0.35)' }}>
              <MarkVar.C size={90} fg={T.c.paper} bg="transparent" accent={T.c.paper} />
            </div>
          </div>
          <Cap2 c={T.c.paper} style={{ opacity: 0.5 }}>1024 · 180 · 60 · 40</Cap2>
        </div>

        {/* Sticker */}
        <div style={{ gridColumn: '1', gridRow: '2', background: T.c.paper, borderRadius: 6, border: '1px solid ' + T.c.hairline, padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Cap2 c={T.c.ink}>Sticker · die-cut</Cap2>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              padding: '10px 20px', background: T.c.ink, color: T.c.paper, borderRadius: 999,
              boxShadow: '0 6px 18px rgba(0,0,0,0.18)',
              border: '2px solid ' + T.c.paper,
              outline: '2px solid ' + T.c.ink,
            }}>
              <WMVar.A height={36} fg={T.c.paper} accent={T.c.primary} />
            </div>
          </div>
        </div>

        {/* Terminal command */}
        <div style={{ gridColumn: '2', gridRow: '2', background: T.c.ink, borderRadius: 6, padding: 16, color: T.c.paper, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Cap2 c={T.c.paper}>CLI · npm</Cap2>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <pre style={{
              margin: 0, fontFamily: T.fonts.mono, fontSize: 13, lineHeight: 1.6,
              color: T.c.paper,
            }}>
              <span style={{ color: T.c.primary }}>$</span> npm i <span style={{ color: T.c.primary }}>@promptbl/sdk</span>{'\n'}
              <span style={{ opacity: 0.55 }}>✓ added 1 package in 1.2s</span>
            </pre>
          </div>
        </div>

      </div>
    </div>
  );
};

// ART · LOCKED COMBO — hero of the picked mark + wordmark
const ArtLogoLocked = () => {
  return (
    <div style={{
      width: '100%', height: '100%', background: T.c.paper,
      padding: 64, boxSizing: 'border-box', position: 'relative',
      fontFamily: T.fonts.text, color: T.c.ink,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            display: 'inline-block', width: 8, height: 8, borderRadius: '50%',
            background: T.c.primary,
          }} />
          <Cap2 c={T.c.ink}>Picked · Mark C × Wordmark A</Cap2>
        </div>
        <Cap2 c={T.c.ink}>The promptbl.ai logo</Cap2>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48,
        alignItems: 'center', flex: 1, paddingTop: 24,
      }}>
        {/* Mark on ink */}
        <div style={{
          aspectRatio: '1 / 1',
          background: T.c.ink, borderRadius: 6,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          maxHeight: '100%',
        }}>
          <MarkVar.C size={220} fg={T.c.paper} bg="transparent" accent={T.c.primary} />
        </div>

        {/* Wordmark + description */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{ paddingTop: 4 }}>
            <WMVar.A height={88} />
          </div>
          <div style={{
            fontFamily: T.fonts.display, fontStyle: 'italic', fontWeight: 500,
            fontSize: 30, lineHeight: 1.15, color: T.c.ink, letterSpacing: '-0.01em',
            maxWidth: 460,
          }}>
            Bracketed cursor for the mark; prompt-prefix wordmark for the lockup.
          </div>
          <div style={{
            fontFamily: T.fonts.mono, fontSize: 12.5, lineHeight: 1.65, color: T.c.muted,
            maxWidth: 460,
          }}>
            The brackets read as a placement slot — the product made literal.
            The prompt prefix on the wordmark reads as the moment of asking.
            Together: where the answer goes.
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between',
        paddingTop: 18, borderTop: '1px solid ' + T.c.hairline,
        fontFamily: T.fonts.mono, fontSize: 10.5, letterSpacing: '0.06em',
        color: T.c.muted, textTransform: 'uppercase',
      }}>
        <span>JetBrains Mono · 700</span>
        <span>Ultramarine #1B3A8B</span>
        <span>Slate #334155</span>
        <span>Cream #DCE3EE</span>
      </div>
    </div>
  );
};

Object.assign(window, {
  MARK_VARS, WM_VARS, MarkVar, WMVar,
  ArtLogoLocked,
  ArtLogoMarks, ArtLogoWordmarks, ArtLogoColorMatrix, ArtLogoClearspace, ArtLogoDoDont, ArtLogoInWild,
});


// ---- app.jsx ----
// app.jsx — mounts the DesignCanvas with all 4 brand directions

const DIRECTIONS = ['index', 'stack', 'terminal', 'bid'];

const ARTBOARDS = [
  { id: 'primary',  label: 'Primary lockup',   w: 1100, h: 520, C: ArtPrimary },
  { id: 'mark',     label: 'Mark + variants',  w: 1100, h: 440, C: ArtMark },
  { id: 'palette',  label: 'Palette',          w: 1100, h: 420, C: ArtPalette },
  { id: 'type',     label: 'Typography',       w: 1100, h: 560, C: ArtType },
  { id: 'social',   label: 'Social pack',      w: 1100, h: 520, C: ArtSocial },
  { id: 'card',     label: 'Business card',    w: 1100, h: 440, C: ArtCard },
  { id: 'context',  label: 'In context',       w: 1100, h: 480, C: ArtContext },
];

const SECTION_META = {
  index:    { title: '01 · Index',    subtitle: 'Editorial · Swiss-modern · serif italic + ultramarine on cream' },
  stack:    { title: '02 · Stack',    subtitle: 'Geometric · platform — stacked mark, cobalt on white' },
  terminal: { title: '03 · Terminal', subtitle: 'PICKED — bracketed cursor mark + prompt-prefix wordmark, ultramarine + slate on cream' },
  bid:      { title: '04 · Bid',      subtitle: 'Bold · performance — target mark, dijon on indigo' },
};

const LOGO_SYSTEM_BOARDS = [
  { id: 'locked',     label: 'Picked combo',        w: 1100, h: 560, C: ArtLogoLocked },
  { id: 'marks',      label: 'Mark variations',     w: 1100, h: 620, C: ArtLogoMarks },
  { id: 'wordmarks',  label: 'Wordmark variants',   w: 1100, h: 620, C: ArtLogoWordmarks },
  { id: 'colors',     label: 'Color matrix',        w: 1100, h: 480, C: ArtLogoColorMatrix },
  { id: 'clearspace', label: 'Clearspace + min',    w: 1100, h: 480, C: ArtLogoClearspace },
  { id: 'dodont',     label: "Do / Don't",          w: 1100, h: 520, C: ArtLogoDoDont },
  { id: 'wild',       label: 'In the wild',         w: 1100, h: 560, C: ArtLogoInWild },
];

function App() {
  return (
    <DesignCanvas>
      <DCSection
        id="logo-system"
        title="05 · Logo system (Terminal)"
        subtitle="Deep-dive on the picked direction — marks, wordmarks, color, scale, usage"
      >
        {LOGO_SYSTEM_BOARDS.map(a => (
          <DCArtboard
            key={'ls-' + a.id}
            id={'ls-' + a.id}
            label={a.label}
            width={a.w}
            height={a.h}
          >
            <a.C />
          </DCArtboard>
        ))}
      </DCSection>
      {DIRECTIONS.map(d => {
        const brand = BRAND[d];
        const meta = SECTION_META[d];
        return (
          <DCSection key={d} id={d} title={meta.title} subtitle={meta.subtitle}>
            {ARTBOARDS.map(a => (
              <DCArtboard
                key={d + '-' + a.id}
                id={d + '-' + a.id}
                label={a.label}
                width={a.w}
                height={a.h}
              >
                <a.C brand={brand} />
              </DCArtboard>
            ))}
          </DCSection>
        );
      })}
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
