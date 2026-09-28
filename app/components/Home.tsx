import { useState } from "preact/hooks";
import {
  AllenLogo, IconBell, IconUser, IconWhatsNew, IconPlay, IconCalendar, IconClock,
  IconClipboard, IconChevR, IconCalendarTile, ScheduleArt, ReferArt,
  IcRevision, IcCustomPractice, IcImprovement, IcFlashcards, IcDownloads, IcPyq,
  IcHomework, IcDoubts, NavHome, NavStudy, NavDoubts, NavTests, NavBreak,
} from "./icons";

type TestCard = {
  banner: string;
  bannerTone: "gray" | "green";
  name: string;
  date: string;
  dur: string;
  mode: string;
  window: string;
  resultOut?: boolean;
};

const UPCOMING: TestCard[] = [
  { banner: "UPCOMING TEST", bannerTone: "gray", name: "MINOR TEST 6", date: "18 Oct", dur: "180 Min", mode: "Offline", window: "Test Window 1:00 PM-5:00 PM" },
  { banner: "UPCOMING TEST", bannerTone: "gray", name: "INTERIM TEST 4", date: "25 Oct", dur: "180 Min", mode: "Offline", window: "Test Window 1:00 PM-5:00 PM" },
];

const PAST: TestCard[] = [
  { banner: "Results are out", bannerTone: "green", name: "INTERNAL TEST 5", date: "27 Sep", dur: "180 Min", mode: "Offline", window: "Test Window 1:00 PM-5:00 PM", resultOut: true },
  { banner: "Results are out", bannerTone: "green", name: "MINOR TEST 5", date: "20 Sep", dur: "180 Min", mode: "Offline", window: "Test Window 1:00 PM-5:00 PM", resultOut: true },
];

function TestCardView({ t, onViewResult }: { t: TestCard; onViewResult?: () => void }) {
  return (
    <div class="test-card">
      <div class={`test-card-banner ${t.bannerTone}`}>{t.banner}</div>
      <div class="test-card-body">
        <div class="test-card-name">{t.name}</div>
        <div class="test-meta">
          <span><IconCalendar /> {t.date}</span>
          <i />
          <span><IconClock /> {t.dur}</span>
          <i />
          <span><IconClipboard /> {t.mode}</span>
        </div>
        <div class="test-window">{t.window}</div>
        <div class="test-card-art" />
        <div class="test-card-actions">
          {t.resultOut && (
            <div class="syllabus-row"><IconCalendar size={15} color="#7c8aa8" /> View Syllabus</div>
          )}
          {t.resultOut ? (
            <button class="btn-primary" onClick={onViewResult}>View Result</button>
          ) : (
            <button class="btn-outline">View Syllabus</button>
          )}
        </div>
      </div>
    </div>
  );
}

export function Home({ onOpenResult }: { onOpenResult: () => void }) {
  const [schedTab, setSchedTab] = useState<"tomorrow" | "dayafter">("tomorrow");
  const [testTab, setTestTab] = useState<"upcoming" | "past" | "missed">("upcoming");

  const schedule = [
    { title: "Newton's Laws Of Motion A...", starts: "Starts 8:00 AM, 29 Sep" },
    { title: "Atomic Structure", starts: "Starts 9:35 AM, 29 Sep" },
  ];

  return (
    <div class="screen">
      <div class="whats-new-wrap">
        <div class="whats-new"><IconWhatsNew /> WHAT'S NEW</div>
      </div>

      <div class="header-row">
        <div class="course-chips">
          <span class="chip chip-dark">11th</span>
          <span class="chip chip-dark">JEE Adv.</span>
          <span class="chip chip-dark">Classroom</span>
          <div class="change-course">Change course <IconPlay /></div>
        </div>
        <div class="header-icons">
          <IconBell badge={16} />
          <IconUser />
        </div>
      </div>

      <div class="section-head">
        <h2>Quick Actions</h2>
        <svg width="46" height="6" viewBox="0 0 46 6" class="swoosh"><path d="M1 4.5C10 1.5 30 1 45 3.5" stroke="#2ecc71" stroke-width="2.4" fill="none" stroke-linecap="round" /></svg>
      </div>

      <div class="qa-grid">
        <div class="qa-item"><span class="qa-new"><IcRevision /></span><span class="qa-label">Revision Notes</span></div>
        <div class="qa-item"><IcCustomPractice /><span class="qa-label">Custom Practice</span></div>
        <div class="qa-item"><IcImprovement /><span class="qa-label">Improvement Book</span></div>
        <div class="qa-item"><IcFlashcards /><span class="qa-label">Flashcards</span></div>
        <div class="qa-item"><IcDownloads /><span class="qa-label">Downloads</span></div>
        <div class="qa-item"><IcPyq /><span class="qa-label">PYQ zone</span></div>
      </div>

      <div class="section-head">
        <h2>Schedule</h2>
        <button class="cal-btn"><IconCalendarTile /></button>
      </div>
      <div class="pill-tabs">
        <button class={`pill ${schedTab === "tomorrow" ? "active" : ""}`} onClick={() => setSchedTab("tomorrow")}>Tomorrow</button>
        <button class={`pill ${schedTab === "dayafter" ? "active" : ""}`} onClick={() => setSchedTab("dayafter")}>Day after tomorrow</button>
      </div>

      <div class="hscroll">
        {(schedTab === "tomorrow" ? schedule : [{ title: "Chemical Bonding L4", starts: "Starts 8:00 AM, 30 Sep" }, { title: "Trigonometry Practice", starts: "Starts 11:00 AM, 30 Sep" }]).map((s) => (
          <div class="schedule-card">
            <ScheduleArt />
            <div class="schedule-body">
              <div class="schedule-title">{s.title}</div>
              <div class="schedule-starts">{s.starts}</div>
              <button class="btn-outline">View Details</button>
            </div>
          </div>
        ))}
      </div>

      <div class="section-head">
        <h2>Your tests</h2>
        <span class="view-all">View all</span>
      </div>
      <div class="pill-tabs">
        <button class={`pill ${testTab === "upcoming" ? "active" : ""}`} onClick={() => setTestTab("upcoming")}>Upcoming</button>
        <button class={`pill ${testTab === "past" ? "active" : ""}`} onClick={() => setTestTab("past")}>Past Tests</button>
        <button class={`pill ${testTab === "missed" ? "active" : ""}`} onClick={() => setTestTab("missed")}>Missed Tests</button>
      </div>

      <div class="hscroll">
        {testTab === "upcoming" && UPCOMING.map((t) => <TestCardView t={t} />)}
        {testTab === "past" && PAST.map((t) => <TestCardView t={t} onViewResult={onOpenResult} />)}
        {testTab === "missed" && PAST.map((t) => <TestCardView t={{ ...t, banner: "MISSED TEST", bannerTone: "gray" }} />)}
      </div>

      <div class="section-head"><h2>How to use ALLEN app</h2></div>
      <div class="how-row">
        <div class="how-item"><IcHomework /><span>Homework</span></div>
        <div class="how-item"><IcCustomPractice /><span>Custom Practice</span></div>
        <div class="how-item"><IcImprovement /><span>Improvement Book</span></div>
        <div class="how-item"><IcFlashcards /><span>Flash Cards</span></div>
        <div class="how-item"><IcDoubts /><span>Doubts</span></div>
      </div>

      <div class="refer-banner">
        <div class="refer-text">
          <div class="refer-head">Got someone to prep with?</div>
          <div class="refer-tag">Refer them!</div>
          <div class="refer-win">
            <span><b>You win</b><br />₹15,000</span>
            <span><b>They win</b><br />50% off</span>
          </div>
        </div>
        <ReferArt />
      </div>
      <div class="bottom-pad" />
    </div>
  );
}

export function BottomNav({ tab, setTab }: { tab: string; setTab: (t: string) => void }) {
  const items = [
    { id: "Home", icon: NavHome },
    { id: "Study", icon: NavStudy },
    { id: "Doubts", icon: NavDoubts },
    { id: "Tests", icon: NavTests },
    { id: "Break", icon: NavBreak },
  ];
  return (
    <nav class="bottom-nav">
      {items.map(({ id, icon: Icon }) => (
        <button class={`nav-item ${tab === id ? "active" : ""}`} onClick={() => setTab(id)}>
          <Icon active={tab === id} />
          <span>{id}</span>
        </button>
      ))}
    </nav>
  );
}
