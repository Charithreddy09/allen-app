// Inline SVG icons — no external assets
import type { JSX } from "preact";

const S = (p: { size?: number; children: JSX.Element | JSX.Element[]; vb?: string; class?: string }) => (
  <svg
    width={p.size ?? 24}
    height={p.size ?? 24}
    viewBox={p.vb ?? "0 0 24 24"}
    fill="none"
    class={p.class}
    xmlns="http://www.w3.org/2000/svg"
  >
    {p.children}
  </svg>
);

/* ---- ALLEN logo: blue square, white triangle A with notch + dot ---- */
export function AllenLogo({ size = 28, bg = "#1173d4" }: { size?: number; bg?: string }) {
  return (
    <S size={size} vb="0 0 100 100">
      <rect width="100" height="100" rx="10" fill={bg} />
      <path d="M50 11 L89.5 91 H61.5 L57.5 71.5 H42.5 L38.5 91 H10.5 Z" fill="#ffffff" />
      <circle cx="50" cy="53" r="6.8" fill={bg} />
    </S>
  );
}

export const IconBell = ({ size = 22, badge = 0 }: { size?: number; badge?: number }) => (
  <span class="bell-wrap">
    <S size={size}>
      <path
        d="M12 3a6 6 0 0 0-6 6v3.2l-1.6 3a1 1 0 0 0 .9 1.5h13.4a1 1 0 0 0 .9-1.5l-1.6-3V9a6 6 0 0 0-6-6Z"
        stroke="#e8e8ec"
        stroke-width="1.7"
        stroke-linejoin="round"
      />
      <path d="M9.8 19.5a2.3 2.3 0 0 0 4.4 0" stroke="#e8e8ec" stroke-width="1.7" stroke-linecap="round" />
    </S>
    {badge > 0 && <span class="bell-badge">{badge}</span>}
  </span>
);

export const IconUser = ({ size = 26 }: { size?: number }) => (
  <S size={size}>
    <circle cx="12" cy="12" r="10.2" stroke="#e8e8ec" stroke-width="1.6" />
    <circle cx="12" cy="9.4" r="3.2" stroke="#e8e8ec" stroke-width="1.6" />
    <path d="M5.8 19a7.4 7.4 0 0 1 12.4 0" stroke="#e8e8ec" stroke-width="1.6" stroke-linecap="round" />
  </S>
);

export const IconWhatsNew = () => (
  <S size={16}>
    <rect x="3" y="4.5" width="11" height="9" rx="1.6" stroke="#2e7ff2" stroke-width="1.6" />
    <path d="M3.5 5.5 8.5 9l5-3.5" stroke="#2e7ff2" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16 9h5m0 0-2.2-2.2M21 9l-2.2 2.2" stroke="#2e7ff2" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
  </S>
);

export const IconPlay = () => (
  <S size={14}>
    <path d="M6 4.5v15l13-7.5Z" fill="#2e7ff2" />
  </S>
);

export const IconCalendar = ({ size = 16, color = "#cfcfd6" }: { size?: number; color?: string }) => (
  <S size={size}>
    <rect x="3.5" y="5" width="17" height="16" rx="2.5" stroke={color} stroke-width="1.6" />
    <path d="M3.5 10h17M8 2.8V6.5M16 2.8V6.5" stroke={color} stroke-width="1.6" stroke-linecap="round" />
  </S>
);

export const IconClock = ({ size = 16, color = "#cfcfd6" }: { size?: number; color?: string }) => (
  <S size={size}>
    <circle cx="12" cy="12" r="8.6" stroke={color} stroke-width="1.6" />
    <path d="M12 7.2V12l3.4 2" stroke={color} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
  </S>
);

export const IconClipboard = ({ size = 16, color = "#cfcfd6" }: { size?: number; color?: string }) => (
  <S size={size}>
    <rect x="5" y="4" width="14" height="17" rx="2.4" stroke={color} stroke-width="1.6" />
    <rect x="9" y="2.4" width="6" height="3.4" rx="1.2" fill={color} />
    <path d="M8.6 11.5 11 14l4.4-4.4" stroke={color} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
  </S>
);

export const IconBack = () => (
  <S size={24}>
    <path d="M19 12H5.5M11.5 5.5 5 12l6.5 6.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </S>
);

export const IconChevR = ({ size = 18, color = "#8f8f97" }: { size?: number; color?: string }) => (
  <S size={size}>
    <path d="M9 5.5 15.5 12 9 18.5" stroke={color} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </S>
);

export const IconCalendarTile = () => (
  <S size={18}>
    <rect x="3.5" y="5" width="17" height="16" rx="3" stroke="#e8e8ec" stroke-width="1.7" />
    <path d="M3.5 10.2h17M8 2.8V6.5M16 2.8V6.5" stroke="#e8e8ec" stroke-width="1.7" stroke-linecap="round" />
    <path d="M7 14h3M7 17.5h5" stroke="#e8e8ec" stroke-width="1.5" stroke-linecap="round" />
  </S>
);

/* ---- Quick action tiles ---- */
type TileProps = { children: JSX.Element | JSX.Element[]; bg?: string; glow?: string };
const Tile = ({ children, bg = "#26262b", glow = "rgba(0,0,0,.55)" }: TileProps) => (
  <span class="qa-tile" style={{ background: bg, boxShadow: `0 6px 12px -4px ${glow}, 0 14px 22px -12px ${glow}` }}>
    {children}
  </span>
);

export const IcRevision = () => (
  <Tile bg="#2a2440" glow="rgba(124,92,255,.35)">
    <S size={30} vb="0 0 24 24">
      <path d="M6 3.5h9l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20V5A1.5 1.5 0 0 1 6.5 3.5Z" fill="#b9a6ff" />
      <path d="M15 3.5V7a1 1 0 0 0 1 1h3.5" fill="#8f78f2" />
      <path d="M9.2 14.7a3 3 0 0 1 5-2.2m.6 2.8a3 3 0 0 1-5 2.2" stroke="#5b3df0" stroke-width="1.5" stroke-linecap="round" />
      <path d="M14.4 11.4v1.6h-1.6M9.6 18.6V17h1.6" stroke="#5b3df0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </S>
  </Tile>
);

export const IcCustomPractice = () => (
  <Tile bg="#2a2440" glow="rgba(124,92,255,.35)">
    <S size={30} vb="0 0 24 24">
      <rect x="4.5" y="3" width="15" height="18" rx="2.4" fill="#b9a6ff" />
      <path d="M8 3v18" stroke="#8f78f2" stroke-width="1.4" />
      <circle cx="14.5" cy="12" r="4.2" stroke="#5b3df0" stroke-width="1.6" />
      <circle cx="14.5" cy="12" r="1.4" fill="#5b3df0" />
    </S>
  </Tile>
);

export const IcImprovement = () => (
  <Tile bg="#173327" glow="rgba(38,208,124,.3)">
    <S size={30} vb="0 0 24 24">
      <rect x="5" y="3" width="14.5" height="18" rx="2.4" fill="#3ddc84" />
      <rect x="8" y="1.8" width="12.5" height="18" rx="2.4" fill="#26b56a" />
      <path d="M10.5 15.5 14 11l2 2.4 2.6-3.8" stroke="#0d3d24" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M18.6 9.2h-1.9v1.9" stroke="#0d3d24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </S>
  </Tile>
);

export const IcFlashcards = () => (
  <Tile bg="#3d2c12" glow="rgba(255,166,43,.3)">
    <S size={30} vb="0 0 24 24">
      <rect x="6.5" y="4.5" width="12" height="15" rx="2.2" fill="#e08b1e" />
      <rect x="4.5" y="3" width="12" height="15" rx="2.2" fill="#ffb04d" />
      <path d="M11.4 6.8 8.6 12h2.4l-1 4 3.8-5.6h-2.5l1.3-3.6Z" fill="#7a4a08" />
    </S>
  </Tile>
);

export const IcDownloads = () => (
  <Tile bg="#0f2c3d" glow="rgba(38,182,255,.35)">
    <S size={30} vb="0 0 24 24">
      <circle cx="12" cy="12" r="9.4" fill="#31bdf0" />
      <path d="M12 7.2v8m0 0-3.4-3.3M12 15.2l3.4-3.3" stroke="#083049" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8 18h8" stroke="#083049" stroke-width="2" stroke-linecap="round" />
    </S>
  </Tile>
);

export const IcPyq = () => (
  <Tile bg="#1c2540" glow="rgba(80,120,255,.35)">
    <S size={30} vb="0 0 24 24">
      <path d="M6 3.5h9l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20V5A1.5 1.5 0 0 1 6.5 3.5Z" fill="#7d9bff" />
      <text x="12" y="15.6" text-anchor="middle" font-size="6.4" font-weight="800" fill="#1c2a6b" font-family="inherit">PYQ</text>
    </S>
  </Tile>
);

/* ---- How-to circles ---- */
const HowCircle = ({ bg, children }: { bg: string; children: JSX.Element | JSX.Element[] }) => (
  <span class="how-circle" style={{ background: bg }}>{children}</span>
);

export const IcHomework = () => (
  <HowCircle bg="#c2185b">
    <S size={26} vb="0 0 24 24">
      <rect x="5" y="3.5" width="14" height="17" rx="2" fill="#e94f8a" />
      <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="800" fill="#fff" font-family="inherit">HW</text>
    </S>
  </HowCircle>
);

export const IcDoubts = () => (
  <HowCircle bg="#1e7e46">
    <S size={26} vb="0 0 24 24">
      <path d="M4.5 5.5h15v10.5h-9l-4 3.5v-3.5h-2Z" fill="#4caf7d" stroke="#8fe0b5" stroke-width="1" />
      <text x="12" y="14" text-anchor="middle" font-size="9" font-weight="800" fill="#fff" font-family="inherit">?</text>
    </S>
  </HowCircle>
);

/* ---- Bottom nav ---- */
export const NavHome = ({ active }: { active?: boolean }) => <AllenLogo size={26} bg={active ? "#1173d4" : "#3a3a41"} />;
export const NavStudy = ({ active }: { active?: boolean }) => (
  <S size={24}>
    <path d="M12 6.5C10.4 5 8 4.5 4.5 4.7v13c3.5-.2 5.9.3 7.5 1.8 1.6-1.5 4-2 7.5-1.8v-13C16 4.5 13.6 5 12 6.5Z" stroke={active ? "#e8e8ec" : "#6f6f78"} stroke-width="1.7" stroke-linejoin="round" />
    <path d="M12 6.5v12.8" stroke={active ? "#e8e8ec" : "#6f6f78"} stroke-width="1.7" />
  </S>
);
export const NavDoubts = ({ active }: { active?: boolean }) => (
  <span class="nav-doubts-wrap">
    <S size={24} vb="0 0 28 24">
      <path d="M3 5.5h22v13H12l-5 4.4v-4.4H3Z" stroke={active ? "#e8e8ec" : "#6f6f78"} stroke-width="1.7" stroke-linejoin="round" />
    </S>
    <span class="mini-new">NEW</span>
  </span>
);
export const NavTests = ({ active }: { active?: boolean }) => (
  <S size={24}>
    <rect x="4.5" y="4" width="15" height="17.5" rx="2.4" stroke={active ? "#e8e8ec" : "#6f6f78"} stroke-width="1.7" />
    <rect x="9" y="2.4" width="6" height="3.4" rx="1.2" fill={active ? "#e8e8ec" : "#6f6f78"} />
    <path d="m8.8 13 2 2 4.6-4.6" stroke={active ? "#e8e8ec" : "#6f6f78"} stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
  </S>
);
export const NavBreak = ({ active }: { active?: boolean }) => (
  <S size={24}>
    <path d="M12 3.4l2.6 5.3 5.9.9-4.3 4.1 1 5.9-5.2-2.7-5.2 2.7 1-5.9-4.3-4.1 5.9-.9Z" stroke={active ? "#e8e8ec" : "#6f6f78"} stroke-width="1.7" stroke-linejoin="round" />
    <circle cx="9.6" cy="11.4" r=".9" fill={active ? "#e8e8ec" : "#6f6f78"} />
    <circle cx="14.4" cy="11.4" r=".9" fill={active ? "#e8e8ec" : "#6f6f78"} />
    <path d="M9.8 14.6c1.3 1.2 3.1 1.2 4.4 0" stroke={active ? "#e8e8ec" : "#6f6f78"} stroke-width="1.4" stroke-linecap="round" />
  </S>
);

/* ---- Schedule card art: light panel with big A ---- */
export function ScheduleArt() {
  return (
    <div class="schedule-art">
      <AllenLogo size={64} />
    </div>
  );
}

/* ---- Refer banner illustration ---- */
export function ReferArt() {
  return (
    <svg width="150" height="104" viewBox="0 0 150 104" xmlns="http://www.w3.org/2000/svg">
      <circle cx="118" cy="30" r="22" fill="#ffd977" />
      <rect x="18" y="66" width="52" height="30" rx="3" fill="#2b6cb0" />
      <rect x="22" y="58" width="44" height="9" rx="2" fill="#4a90d9" />
      <rect x="80" y="60" width="56" height="6" rx="3" fill="#c9a86a" />
      <rect x="88" y="40" width="34" height="22" rx="3" fill="#5b5f6b" />
      <rect x="86" y="44" width="38" height="14" rx="2" fill="#8fa3c2" />
      <circle cx="52" cy="34" r="9" fill="#8a5a3b" />
      <path d="M38 66c2-14 10-20 14-20s12 6 14 20Z" fill="#2f4a8a" />
      <circle cx="86" cy="36" r="8" fill="#6b4423" />
      <path d="M74 62c1-12 8-17 12-17s11 5 12 17Z" fill="#7c5cbf" />
    </svg>
  );
}
