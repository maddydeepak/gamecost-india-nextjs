 "use client";

import { useEffect, useState } from "react";

const launchTime = new Date("2026-11-19T00:00:00+05:30").getTime();

function getCountdown() {
  const remaining = launchTime - Date.now();
  if (remaining <= 0) return "Out now";

  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  return `${days} days ${hours} hours ${minutes} minutes to launch`;
}

export default function Countdown() {
  const [label, setLabel] = useState("Loading…");

  useEffect(() => {
    setLabel(getCountdown());
    const timer = window.setInterval(() => setLabel(getCountdown()), 30000);
    return () => window.clearInterval(timer);
  }, []);

  return <span>{label}</span>;
}
