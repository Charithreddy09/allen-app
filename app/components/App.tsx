import { useState } from "preact/hooks";
import { Home, BottomNav } from "./Home";
import { Result } from "./Result";

export function App() {
  const [screen, setScreen] = useState<"home" | "result">("home");
  const [tab, setTab] = useState("Home");

  return (
    <div class="app-shell">
      <div class="app-body">
        {tab !== "Home" ? (
          <div class="screen empty-tab">
            <div class="empty-art">🚧</div>
            <div class="empty-title">{tab}</div>
            <div class="empty-sub">This section isn't set up yet</div>
            <button class="btn-outline" onClick={() => setTab("Home")}>Back to Home</button>
          </div>
        ) : screen === "home" ? (
          <Home onOpenResult={() => setScreen("result")} />
        ) : (
          <Result onBack={() => setScreen("home")} />
        )}
      </div>
      <BottomNav tab={tab} setTab={setTab} />
    </div>
  );
}
