import { useState } from "preact/hooks";
import { IconBack, IconChevR } from "./icons";

const SCORE = 97;
const TOTAL = 180;
const CORRECT = 25;
const INCORRECT = 3;
const UNATTEMPTED = 20;
const PCT = Math.round((CORRECT / (CORRECT + INCORRECT + UNATTEMPTED)) * 100);

const SUBJECTS = [
  { name: "CHEMISTRY", marks: 60, score: 31, ok: 8, no: 1 },
  { name: "MATHS", marks: 60, score: 31, ok: 8, no: 1 },
  { name: "PHYSICS", marks: 60, score: 35, ok: 9, no: 1 },
];

function ScoreCircle() {
  return (
    <div class="score-circle">
      <svg width="180" height="180" viewBox="0 0 180 180">
        <circle cx="90" cy="90" r="78" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" stroke-dasharray="430 490" stroke-dashoffset="30" transform="rotate(-70 90 90)" />
        <text x="90" y="82" text-anchor="middle" font-size="40" font-weight="800" fill="#fff">{SCORE}</text>
        <line x1="52" y1="94" x2="128" y2="94" stroke="#fff" stroke-width="3" />
        <text x="90" y="126" text-anchor="middle" font-size="26" font-weight="600" fill="#fff">{TOTAL}</text>
      </svg>
    </div>
  );
}

export function Result({ onBack }: { onBack: () => void }) {
  const [tab, setTab] = useState<"overview" | "subjects" | "chapters">("overview");

  return (
    <div class="screen result-screen">
      <div class="result-hero">
        <div class="result-topbar">
          <button class="back-btn" onClick={onBack}><IconBack /></button>
          <div class="result-title">
            <div class="result-name">INTERNAL TEST 5</div>
            <div class="result-sub">27th Sep,2026 &nbsp;•&nbsp; Offline Mode</div>
          </div>
          <button class="main-test-pill">Main Test <span class="caret">▾</span></button>
        </div>

        <div class="hero-deco" aria-hidden="true">
          <svg width="120" height="150" viewBox="0 0 120 150">
            <circle cx="20" cy="12" r="14" fill="#ffbe4d" />
            <path d="M28 138 L62 138 L45 96 Z" fill="#3fae4e" />
            <path d="M55 120 L82 120 L68 82 Z" fill="#8bc34a" />
            <path d="M96 34 l0 0 M92 28 c6 8 6 18 0 26" stroke="#7cb342" stroke-width="5" fill="none" stroke-linecap="round" />
            <path d="M70 90 l14 -10 M72 96 l16 -11 M74 102 l18 -12" stroke="#e6eef7" stroke-width="4" stroke-linecap="round" />
            <circle cx="104" cy="34" r="7" fill="#fdd835" />
          </svg>
        </div>

        <ScoreCircle />

        <div class="provisional">
          <div class="provisional-title">You're viewing provisional result</div>
          <div class="provisional-sub">Ranks will be available once the final result is published</div>
        </div>

        <div class="hero-actions">
          <button class="btn-hero">View test solution</button>
          <button class="btn-hero-round">•••</button>
        </div>
      </div>

      <div class="result-tabs-wrap">
        <div class="result-tabs">
          {(["overview", "subjects", "chapters"] as const).map((t) => (
            <button class={`result-tab ${tab === t ? "active" : ""}`} onClick={() => setTab(t)}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {tab === "overview" && (
        <div class="result-body">
          <h3 class="ms-title">Marks Summary</h3>
          <div class="ms-sub">You've answered {PCT}% questions correctly</div>
          <div class="marks-grid">
            <div class="mark-card correct">
              <div class="mark-label">Correct</div>
              <div class="mark-value">{CORRECT}</div>
              <div class="mark-marks">(+{CORRECT * 4} marks)</div>
            </div>
            <div class="mark-card incorrect">
              <div class="mark-label">Incorrect</div>
              <div class="mark-value">{INCORRECT}</div>
              <div class="mark-marks">(-{INCORRECT * 1} marks)</div>
            </div>
            <div class="mark-card unattempted">
              <div class="mark-label">Unattempted</div>
              <div class="mark-value">{UNATTEMPTED}</div>
              <div class="mark-marks">&nbsp;</div>
            </div>
          </div>

          <div class="subject-table">
            <div class="subject-row head">
              <span>SUBJECT</span><span>SCORE</span><span class="ok">✓ Qs</span><span class="no">✗ Qs</span><span />
            </div>
            {SUBJECTS.map((s) => (
              <div class="subject-row">
                <span class="s-name">{s.name}<br /><em>({s.marks} marks)</em></span>
                <span>{s.score}</span>
                <span class="ok">{s.ok}</span>
                <span class="no">{s.no}</span>
                <IconChevR />
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "subjects" && (
        <div class="result-body">
          <div class="empty-mini">Subject-wise breakdown</div>
          <div class="subject-table">
            <div class="subject-row head">
              <span>SUBJECT</span><span>SCORE</span><span class="ok">✓ Qs</span><span class="no">✗ Qs</span><span />
            </div>
            {SUBJECTS.map((s) => (
              <div class="subject-row">
                <span class="s-name">{s.name}<br /><em>({s.marks} marks)</em></span>
                <span>{s.score}</span>
                <span class="ok">{s.ok}</span>
                <span class="no">{s.no}</span>
                <IconChevR />
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "chapters" && (
        <div class="result-body">
          <div class="empty-mini">Chapter-wise breakdown will show here</div>
        </div>
      )}

      <div class="bottom-pad" />
    </div>
  );
}
